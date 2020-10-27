package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.TaskEstimateMapper;
import cn.ibizlab.pms.core.zentao.service.*;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@Slf4j
public class TaskEstimateHelper extends ZTBaseHelper<TaskEstimateMapper, TaskEstimate> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    TaskHelper taskHelper;
    @Autowired
    TeamHelper teamHelper;

    @Autowired
    ITaskEstimateService taskEstimateService;
    @Autowired
    ITeamService teamService;
    @Autowired
    ITaskService taskService;

    @Autowired
    ICaseService caseService;
    @Autowired
    IStoryService storyService;

    @Autowired
    StoryHelper storyHelper;

    @Override
    public boolean hasDeleted() {
        return false;
    }

    @Override
    @Transactional
    public boolean create(TaskEstimate et) {
        boolean bOk = false;
        bOk = super.create(et);
        if (!bOk)
            return bOk;

        //task 处理
        log.info("TaskEstimate 更新Task：未处理");

       // actionHelper.create("task", et.getTask(), "RecordEstimate", et.getWork(), String.valueOf(et.getConsumed()), null, true);

        return bOk;
    }



    @Transactional
    public boolean edit(TaskEstimate et) {
        boolean bOk = false;

        TaskEstimate oldEstimate = taskEstimateService.getById(et.getId());
        Task task = taskService.getById(oldEstimate.getTask());

        et.setAccount(AuthenticationUser.getAuthenticationUser().getUsername());
        this.internalUpdate(et);
        double consumed = task.getConsumed()+et.getConsumed() - oldEstimate.getConsumed();
        List<JSONObject> lastEstimate = taskEstimateService.select(String.format("select * from zt_TaskEstimate where task = %1$s ORDER BY id desc",task.getId()),null);
        double left = (lastEstimate.size() != 0 && et.getId() == lastEstimate.get(0).getLongValue("id") ) ? et.getLeft() : task.getLeft();
        LocalDateTime now = LocalDateTime.now();
        Task data = new Task();
        data.setConsumed(consumed);
        data.setLeft(left);
        data.setStatus((left == 0) ? "done" : task.getStatus());
        data.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
        data.setLastediteddate(Timestamp.valueOf(now));
        data.setId(task.getId());
        if (left == 0){
            data.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
            data.setFinisheddate(Timestamp.valueOf(now));
            data.setAssignedto(task.getOpenedby());
        }

        List<Team> teamLists = teamService.list(new QueryWrapper<Team>().eq("root",oldEstimate.getTask()).eq("type","task").orderByDesc("`order`"));
        if (teamLists.size() != 0){
            double oldConsumed = 0;
            for (Team team : teamLists) {
                if (team.getAccount().equals(oldEstimate.getAccount())) oldConsumed = team.getConsumed();
            }
            Team newTeamInfo = new Team();
            newTeamInfo.setConsumed(oldConsumed+et.getConsumed() - oldEstimate.getConsumed());
            newTeamInfo.setLeft(left);
            Map<String,Object> param = new HashMap<>();
            param.put("root",oldEstimate.getTask());
            param.put("type","task");
            param.put("account",oldEstimate.getAccount());
            teamHelper.update(newTeamInfo,(Wrapper<Team>) newTeamInfo.getUpdateWrapper(true).allEq(param));
            List<TaskTeam> teams = task.getTaskteam();
            taskHelper.computeHours4Multiple(task,data,teams,false);
        }
        taskHelper.internalUpdate(data);


        if (task.getParent() > 0) {  //编辑的任务是子任务
            taskHelper.updateParentStatus(task, task.getParent(),false);
        }

        //     * Set stage of a story.
        if (task.getStory() != 0){
            long storyID = task.getStory();
            Story story = storyService.getById(storyID);
            storyHelper.setStage(story);
        }

        Task oldTask = new Task();
        oldTask.setConsumed(task.getConsumed());
        oldTask.setLeft(task.getLeft());
        oldTask.setStatus(task.getStatus());

        Task newTask = new Task();
        newTask.setConsumed(data.getConsumed());
        newTask.setLeft(data.getLeft());
        newTask.setStatus(data.getStatus());
        List<History> changes = ChangeUtil.diff(oldTask,newTask);
        Action action1 = actionHelper.create("task",et.getTask(),"EditEstimate",et.getWork(),"",null,true);
        actionHelper.logHistory(action1.getId(),changes);


        //bOk = super.create(et);
        if (!bOk)
            return bOk;

        //task 处理
        log.info("TaskEstimate 更新Task：未处理");

        //actionHelper.create("task", et.getTask(), "EditEstimate", et.getWork(), "", null, true);

        return bOk;
    }


    @Override
    @Transactional
    public boolean delete(Long key) {
        boolean bOk = false;
        TaskEstimate taskEstimate = this.get(key);
        Task task = taskHelper.get(taskEstimate.getTask());
        this.remove(new QueryWrapper<TaskEstimate>().eq("id",key));
        List<JSONObject> estimateLists = taskEstimateService.select(String.format("select * from zt_TASKESTIMATE where task = %1$s order by date desc,id desc limit 0,1",taskEstimate.getTask()),null);
        TaskEstimate lastEstimate = null;
        if (estimateLists.size() != 0){
            lastEstimate = JSONObject.toJavaObject(estimateLists.get(0),TaskEstimate.class);
        }
        double consumed = task.getConsumed() - taskEstimate.getConsumed();
        double left = lastEstimate != null && lastEstimate.getLeft() != 0 ? lastEstimate.getLeft() : taskEstimate.getLeft();
        Task data = new Task();
        data.setConsumed(consumed);
        data.setLeft(left);
        data.setStatus((left == 0 && consumed != 0) ? "done" : task.getStatus());

        //List<JSONObject> teamList = teamService.select(String.format("select t1.* from zt_team t1 LEFT JOIN zt_task t2 on t1.root = t2.id and t1.TYPE = 'task' where  t1.root = %1$s ",task.getId()),null);
        List<Team> teamLists = teamService.list(new QueryWrapper<Team>().eq("root",task.getId()).eq("type","task"));
        if (teamLists.size() != 0){
            double oldConsumed = 0;
            for (Team team : teamLists) {
                if (team.getAccount().equals(taskEstimate.getAccount())){
                    oldConsumed = team.getConsumed();
                }
            }
            Team newTeamInfo = new Team();
            newTeamInfo.setConsumed(oldConsumed - taskEstimate.getConsumed());
            newTeamInfo.setLeft(left);
            Map<String,Object> param = new HashMap<>();
            param.put("root",taskEstimate.getTask());
            param.put("type","task");
            param.put("account",taskEstimate.getAccount());

            teamHelper.update(newTeamInfo,(Wrapper<Team>) newTeamInfo.getUpdateWrapper(true).allEq(param));
            List<TaskTeam> teams = task.getTaskteam();
//            for (int i = 0; i < teams.size(); i++) {
//                if (teams.get(i).getAccount() == null){
//                    teams.remove(i);
//                    i--;
//                }
//            }
            taskHelper.computeHours4Multiple(task,data,teams,false);
        }
        data.setId(taskEstimate.getTask());
        taskHelper.internalUpdate(data);

        if (task.getParent() > 0) taskHelper.updateParentStatus(task, task.getParent(), false);

        if (task.getStory() != 0) {
            Story et = storyHelper.getById(task.getStory());
            storyHelper.setStage(et);
        }
        Task oldTask = new Task();
        oldTask.setConsumed(task.getConsumed());
        oldTask.setLeft(left);
        oldTask.setStatus(task.getStatus());

        Task newTask = new Task();
        newTask.setConsumed(data.getConsumed());
        newTask.setLeft(data.getLeft());
        newTask.setStatus(data.getStatus());

        List<History> changes = ChangeUtil.diff(oldTask,newTask);
        if (changes.size() > 0) {
            Action action = actionHelper.create("task", task.getId(), "DeleteEstimate", "", "", null, true);
            if (changes.size() > 0){
                actionHelper.logHistory(action.getId(),changes);
            }
        }


        // bOk = super.delete(key);

        //task 处理
        //log.info("TaskEstimate 更新Task：未处理");

        if (!bOk)
            return bOk;

        return bOk;
    }
}
