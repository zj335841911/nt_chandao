package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.zentao.domain.StoryStage;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.domain.Team;
import cn.ibizlab.pms.core.zentao.mapper.TaskEstimateMapper;
import cn.ibizlab.pms.core.zentao.service.ICaseService;
import cn.ibizlab.pms.core.zentao.service.ITaskEstimateService;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.core.zentao.service.ITeamService;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.*;

@Component
@Slf4j
public class TaskEstimateHelper extends ZTBaseHelper<TaskEstimateMapper, TaskEstimate> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    TaskHelper taskHelper;
    @Autowired
    TeamHelper teamHelper;

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

        actionHelper.create("task", et.getTask(), "RecordEstimate", et.getWork(), String.valueOf(et.getConsumed()), null, true);

        return bOk;
    }


    @Autowired
    ICaseService caseService;
    @Transactional
    public boolean edit(TaskEstimate et) {
         TaskEstimate oldEstimate = this.get(et.getId());
//        List<JSONObject> taskEstimates = taskEstimateService.select(String.format("select * from zt_TaskEstimate where id = %1$s",et.getId()),null);
//        TaskEstimate oldEstimate = JSONObject.toJavaObject(taskEstimates.get(0),TaskEstimate.class);
//        List<JSONObject> tasks = taskService.select(String.format("select * zt_task where id = %1$s",oldEstimate.getTask()),null);
//        if (tasks.size() == 0) return false;
        Task task = taskHelper.get(oldEstimate.getTask());
        List<JSONObject> childrenTasks = taskService.select(String.format("select * from zt_task where parent = %1$s and deleted = 0",task.getId()),null);
        /* Check parent Task. */
        if (task.getParent() > 0){
            List<JSONObject> fatherTasks = taskService.select(String.format("select * from zt_task where id = %1$s",task.getParent()),null);
            task.setParentname(fatherTasks.get(0).getString("name"));
        }
        List<JSONObject> teamLists = teamService.select(String.format("select * from zt_team where root = %1$s and type = 'task' order by 'order'",oldEstimate.getTask()),null);
        if (task.getStory() != 0){
            List<JSONObject> caseLists = caseService.select(String.format("select * from zt_case where story = %1$s and storyVersion = %2$s and deleted = '0'",task.getStory(),task.getStoryversion()),null);
        }
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
        if (left == 0){
            data.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
            data.setFinisheddate(Timestamp.valueOf(now));
            data.setAssignedto(task.getOpenedby());
        }
        if (teamLists.size() != 0){
            double oldConsumed = 0;
            for (JSONObject team : teamLists) {
                if (team.getString("account").equals(oldEstimate.getAccount())) oldConsumed = team.getDoubleValue("consumed");
            }
            Team newTeamInfo = new Team();
            newTeamInfo.setConsumed(oldConsumed+et.getConsumed() - oldEstimate.getConsumed());
            newTeamInfo.setLeft(left);
            Map<String,Object> param = new HashMap<>();
        }



        boolean bOk = false;
        bOk = super.create(et);
        if (!bOk)
            return bOk;

        //task 处理
        log.info("TaskEstimate 更新Task：未处理");

        actionHelper.create("task", et.getTask(), "EditEstimate", et.getWork(), "", null, true);

        return bOk;
    }

    @Autowired
    ITaskEstimateService taskEstimateService;
    @Autowired
    ITeamService teamService;
    @Autowired
    ITaskService taskService;
    @Override
    @Transactional
    public boolean delete(Long key) {
        boolean bOk = false;
        TaskEstimate old = this.get(key);
        Task et = taskHelper.get(old.getTask());
        List<JSONObject> list =  taskEstimateService.select(String.format("select * from zt_TASKESTIMATE where task = %1$s order by date desc,id desc limit 0,1",old.getTask()),null);
        JSONObject lastEstimate = list.get(0);
        double consumued = et.getConsumed() - old.getConsumed();
        double left = lastEstimate.getDoubleValue("consumed") == 0 ? old.getLeft() : lastEstimate.getDoubleValue("consumed");
        String status = (left == 0 && consumued != 0) ? "done" : et.getStatus();
        String sql = String.format("SELECT t2.* FROM zt_task t1 inner JOIN zt_team t2 on t1.id = t2.root and t2.type = 'task' where t1.id = %1$s and t2.account = '%2$s'",et.getId(),old.getAccount());
        List<JSONObject> jsonObjectList = teamService.select(sql,null);
        if (jsonObjectList.size() != 0){
            JSONObject record = jsonObjectList.get(0);
            double oldConsumed = record.getDoubleValue("consumed");
            double teamConsumed = oldConsumed - old.getConsumed();
            double teamLeft = left;
            String teamSql = String.format("update zt_team set consumed = %1$s , left = %2$s where root = %3$s and type = 'task' and account = %4$s",teamConsumed,teamLeft,old.getTask(),old.getAccount());
            teamService.execute(teamSql,null);
            taskHelper.computeHours4Multiple(et,null,new ArrayList<TaskTeam>(),true);
        }
        Task updateTask = new Task();
        updateTask.setId(et.getId());
        updateTask.setLeft(left);
        updateTask.setConsumed(consumued);
        updateTask.setStatus(status);
        taskHelper.internalUpdate(updateTask);
//        taskService.execute(String.format("update zt_task set consumed =  %1$s ,left =  %2$s ,status =  %3$s  where id =  %4$s ",consumued,left,status,old.getTask()),null);
        if (et.getParent() > 0 ){
            taskHelper.updateParentStatus(et,null,true);
        }
        if (et.getStory() != 0){

        }

        bOk = super.delete(key);

        //task 处理
        log.info("TaskEstimate 更新Task：未处理");

        actionHelper.create("task", et.getId(), "DeleteEstimate", "", "", null, true);
        if (!bOk)
            return bOk;

        return bOk;
    }
}
