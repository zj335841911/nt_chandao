package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.ibiz.service.impl.TaskTeamServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.TaskMapper;
import cn.ibizlab.pms.core.zentao.service.IProjectService;
import cn.ibizlab.pms.core.zentao.service.IStoryService;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.core.zentao.service.ITeamService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.druid.util.lang.Consumer;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Component
@Slf4j
public class TaskHelper extends ZTBaseHelper<TaskMapper, Task> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    TeamHelper teamHelper;

    @Autowired
    TaskEstimateHelper taskEstimateHelper;

    @Autowired
    BugHelper bugHelper;

    @Autowired
    ITeamService teamService;

    @Autowired
    StoryHelper storyHelper;

    @Autowired
    TaskTeamHelper taskTeamHelper;

    String[] diffAttrs = {"desc"};

    @Override
    @Transactional
    public boolean create(Task et) {
        boolean bOk = false;
        String multiple = et.getMultiple();
        List<TaskTeam> taskTeams = et.getTaskteam();
        fileHelper.processImgURL(et, null, null);
        if(et.getStory() != null && et.getStory() != 0l) {
            et.setStoryversion(storyHelper.get(et.getStory()).getVersion());
        }
        bOk = super.create(et);
        fileHelper.updateObjectID(et.getId(), null, null);

        if (StringUtils.isNotBlank(et.getAssignedto())) {
            et.setAssigneddate(ZTDateUtil.now());
        }

        if (StringUtils.compare(multiple, "1") == 0) {
            for (TaskTeam taskTeam : taskTeams) {
                Team team = new Team();
                team.setType("task");
                team.setRoot(et.getId());
                team.setAccount(taskTeam.getAccount());
                team.setJoin(ZTDateUtil.now());
                team.setRole(AuthenticationUser.getAuthenticationUser().getUsername());
                team.setEstimate(taskTeam.getEstimate());
                team.setDays(0);
                team.setHours(0.0);
                teamHelper.create(team);

                if (StringUtils.isNotBlank(et.getAssignedto())) {
                    et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
                    et.setAssigneddate(ZTDateUtil.now());
                }
            }
            this.internalUpdate(et);

        }


        actionHelper.create("task", et.getId(), "Opened", "", "", null, true);
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return bOk;
    }

    @Transactional
    public boolean edit(Task et) {
        String multiple = et.getMultiple();
        List<TaskTeam> taskTeams = et.getTaskteam();
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        if (StringUtils.compare(et.getStatus(), "done") == 0) {
            et.setLeft(0.0);
            if (StringUtils.isBlank(et.getFinishedby())) {
                et.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
            }
            if (et.getFinisheddate() == null)
                et.setFinisheddate(ZTDateUtil.now());
        } else if (StringUtils.compare(et.getStatus(), "cancel") == 0) {
            if (StringUtils.isBlank(et.getClosedby())) {
                et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
            }
            if (et.getCanceleddate() == null)
                et.setCanceleddate(ZTDateUtil.now());
        } else if (StringUtils.compare(et.getStatus(), "closed") == 0) {
            if (StringUtils.isBlank(et.getCanceledby())) {
                et.setCanceledby(AuthenticationUser.getAuthenticationUser().getUsername());
            }
            if (et.getCloseddate() == null)
                et.setCloseddate(ZTDateUtil.now());
        }

        if (StringUtils.compare(et.getAssignedto(), old.getAssignedto()) != 0) {
            et.setAssigneddate(ZTDateUtil.now());
        }

        if (et.getConsumed() > 0 && et.getLeft() > 0 && StringUtils.compare(et.getStatus(), "wait") == 0)
            et.setStatus("doing");

        if (StringUtils.compare(et.getStatus(), "wait") == 0 && et.getLeft() == old.getLeft() && et.getConsumed() == 0) {
            et.setLeft(et.getEstimate());
        }

        if (et.getConsumed() > old.getConsumed())
            throw new RuntimeException("总计消耗必须大于之前消耗");

        if (et.getProject() != old.getProject()) {

        }
        fileHelper.processImgURL(et, null, null);

        if (StringUtils.compare(multiple, "1") == 0) {

            teamHelper.remove(new QueryWrapper<Team>().eq("root", et.getId()).eq("type", "task"));
            int i = 0;
            for (TaskTeam taskTeam : taskTeams) {
                Team team = new Team();
                team.setType("task");
                team.setRoot(et.getId());
                team.setAccount(taskTeam.getAccount());
                team.setJoin(ZTDateUtil.now());
                team.setRole(et.getAssignedto());
                team.setEstimate(taskTeam.getEstimate());
                team.setConsumed(taskTeam.getConsumed());
                team.setLeft(taskTeam.getLeft() != null ? taskTeam.getLeft() : team.getConsumed());
                team.setOrder(i);
                if (StringUtils.compare(et.getStatus(), "done") == 0)
                    team.setLeft(0.0);
                teamHelper.create(team);

                if (StringUtils.isNotBlank(et.getAssignedto())) {
                    et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
                    et.setAssigneddate(ZTDateUtil.now());
                }
                i++;
            }
        }
        computeHours4Multiple(old, et, taskTeams, false);

        this.internalUpdate(et);
        boolean changeParent = false;
        if (et.getParent() != old.getParent())
            changeParent = true;

        if (old.getParent() > 0) {
            Task oldParent = this.get(old.getParent());
            updateParentStatus(et, oldParent.getId(), changeParent);
            computeBeginAndEnd(oldParent);
            if (changeParent) {

                actionHelper.create("task", et.getId(), "unlinkParentTask", "", String.valueOf(old.getParent()), null, false);

                Action action = actionHelper.create("task", old.getParent(), "unLinkChildrenTask", "", String.valueOf(et.getId()), null, false);
                Task parent = this.get(et.getParent());
                List<History> changes = ChangeUtil.diff(oldParent, parent);
                if (changes.size() > 0) {
                    actionHelper.logHistory(action.getId(), changes);
                }

            }
        }

        if (et.getParent() > 0) {
            updateParentStatus(et, old.getParent(), changeParent);
            computeBeginAndEnd(this.get(old.getParent()));
            if (changeParent) {

                actionHelper.create("task", et.getId(), "linkParentTask", "", String.valueOf(et.getParent()), null, false);

                actionHelper.create("task", et.getParent(), "linkChildTask", "", String.valueOf(et.getId()), null, false);

            }
        }

        fileHelper.updateObjectID(et.getId(), null, null);

        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            String strAction = "Edited";
            if (changes.size() == 0) {
                strAction = "Commented";
            }
            Action action = actionHelper.create("task", et.getId(), strAction,
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return true;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        boolean bOk = false;
        Task old = this.get(key);
        bOk = super.delete(key);
        if (old.getParent() != 0) {
            updateParentStatus(old, old.getParent(), false);
            actionHelper.create("project", old.getParent(), "deleteChildrenTask", "", String.valueOf(old.getId()), null, true);
        }
        if (old.getFrombug() != 0) {
            Bug bug = new Bug();
            bug.setId(old.getFrombug());
            bug.setTotask(0l);
            bugHelper.internalUpdate(bug);
        }
        if(old.getStory() != null && old.getStory() != 0l) {
            storyHelper.setStage(old.getZtstory());
        }
        return bOk;
    }

    public void computeHours4Multiple(Task old, Task task, List<TaskTeam> teams, boolean auto) {
        if (old == null) return;
        List<JSONObject> teamList = teamService.select(String.format("select * from zt_team where root = %1$s and type = 'task' order by order",old.getId()),null);
        if (teamList.size() != 0){
            Timestamp now = Timestamp.valueOf(LocalDateTime.now());
            Task currentTask = task != null ? task : new Task();
            if (currentTask.getStatus() == null) currentTask.setStatus(old.getStatus());
            currentTask.setAssignedto(old.getAssignedto());
            if (old.getAssignedto() == null){
                Team firstMember = JSONObject.toJavaObject(teamList.get(0),Team.class);
                currentTask.setAssignedto(firstMember.getAccount());
                currentTask.setAssigneddate(now);
            }
//            else {
//                List<String> teams = new ArrayList<>();
//                for (JSONObject t : teamList) {
//                    teams.add(t.getString("account"));
//                }
//                for (JSONObject team : teamList) {
//                    if (team.getString("account").equals(old.getAssignedto()) && team.getDoubleValue("left") == 0 && team.getDoubleValue("comsumed") != 0){
//                        for (String account : teams) {
//                            if (!account.equals(old.getAssignedto())) {
//                                //getNextUser($users, $current)
//                                if (old.getAssignedto() != null || !teams.contains(old.getAssignedto())) {
//                                    currentTask.setAssignedto(teamList.get(0).getString("account"));
//                                }
//                                for (JSONObject t : teamList) {
//                                    if (t.getString("account").equals(old.getAssignedto())){
//                                        currentTask.setAssignedto();
//                                    }
//                                }
//                            }
//                        }
//                    }
            //               }
            //          }
            currentTask.setEstimate((double)0);
            currentTask.setConsumed((double) 0);
            currentTask.setLeft((double)0);
            for (JSONObject member : teamList) {
                currentTask.setEstimate(currentTask.getEstimate() + member.getDoubleValue("estimate"));
                currentTask.setConsumed(currentTask.getConsumed() + member.getDoubleValue("consumed"));
                currentTask.setLeft(currentTask.getLeft() + member.getDoubleValue("left"));
            }
            if (task != null){
                if (currentTask.getConsumed() == 0){
                    if (task.getStatus() == null) currentTask.setStatus("wait");
                    currentTask.setFinishedby("");
                    currentTask.setFinisheddate(null);
                }
                if (currentTask.getConsumed() > 0 && currentTask.getLeft() > 0){
                    currentTask.setStatus("doing");
                    currentTask.setFinishedby("");
                    currentTask.setFinisheddate(null);
                }
                if (currentTask.getConsumed() > 0 && currentTask.getLeft() == 0){
                    boolean flag = false;
                    for (JSONObject team : teamList) {
                        if (team.getString("account").equals(currentTask.getAssignedto())){
                            flag = true;
                            break;
                        }
                    }
                    boolean flag1 = true;
                    for (JSONObject team : teamList) {
                        if (team.getString("account").equals(old.getAssignedto())){
                            flag1 = false;
                            break;
                        }
                    }

                    if (flag && flag1){
                        currentTask.setStatus("doing");
                        currentTask.setFinishedby("");
                        currentTask.setFinisheddate(null);
                    }
                    else if (!flag1){
                        currentTask.setStatus("done");
                        currentTask.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
                        currentTask.setFinisheddate(now);
                    }
                }
                if (!old.getAssignedto().equals(currentTask.getAssignedto()) || currentTask.getStatus().equals("done")){
                    String login = AuthenticationUser.getAuthenticationUser().getUsername();
                    boolean flag = false;
                    double left = 0;
                    for (JSONObject team : teamList) {
                        if (team.getString("account").equals(login)){
                            flag = true;
                            left = team.getDoubleValue("left");
                            break;
                        }
                    }
                    if (flag && left == 0 && !old.getFinishedlist().contains(login)){
                        currentTask.setFinishedlist(old.getFinishedlist()+","+login);
                    }
                    if (old.getStatus().equals("done") || old.getStatus().equals("closed") && currentTask.getStatus().equals("doing") && old.getStatus() != null){
                        currentTask.setFinishedlist(old.getFinishedlist().substring(0,old.getFinishedlist().indexOf(login)));
                    }
                }
            }
            currentTask.setId(old.getId());
            this.internalUpdate(currentTask);

        }

    }

    public void computeBeginAndEnd(Task et) {
        if(et.getId() == null)
            return;
        et = this.get(et.getId());
        String sql = String.format("select estStarted, realStarted, deadline from zt_task where parent = %1$s and `status` <> 'cancel'  and deleted = '0'", et.getId());
        List<JSONObject> list = taskService.select(sql,null);
        if(list.size() == 0) return;
        Timestamp earliestEstStarted = et.getEststarted();
        Timestamp earliestRealStarted = et.getRealstarted();
        Timestamp latestDeadline = et.getDeadline();
        for(JSONObject jsonObject : list) {
            if(jsonObject == null) {
                continue;
            }
            Timestamp estStarted = jsonObject.getTimestamp("estStarted");
            Timestamp realStarted = jsonObject.getTimestamp("realStarted");
            Timestamp deadline = jsonObject.getTimestamp("deadline");
            if(earliestEstStarted == null || (estStarted != null && earliestEstStarted.getTime() > estStarted.getTime())) earliestEstStarted = estStarted;
            if(earliestRealStarted == null || (realStarted != null && earliestRealStarted.getTime() > realStarted.getTime())) earliestRealStarted = estStarted;
            if(latestDeadline == null || (deadline != null && latestDeadline.getTime() < deadline.getTime())) latestDeadline = deadline;
        }
        Task task = new Task();
        task.setEststarted(earliestEstStarted);
        task.setId(et.getId());
        task.setRealstarted(earliestRealStarted);
        task.setDeadline(latestDeadline);
        this.internalUpdate(task);
    }

    public void computeWorkingHours(Task et) {
        if(et.getId() == null)
            return;
        String sql = String.format("select `id`,`estimate`,`consumed`,`left`, `status` from zt_task where parent = %1$s and `status` <> 'cancel'  and deleted = '0'", et.getId());
        List<JSONObject> list = taskService.select(sql,null);
        if(list.size() == 0) return;
        double estimate = 0;
        double consumed = 0;
        double left = 0;
        for(JSONObject jsonObject : list) {
            estimate += jsonObject.getDoubleValue("estimate");
            consumed += jsonObject.getDoubleValue("consumed");
            if(!"closed".equals(jsonObject.getString("status"))) {
                left += jsonObject.getDoubleValue("left");
            }
        }
        Task task = new Task();
        task.setId(et.getId());
        task.setEstimate(estimate);
        task.setConsumed(consumed);
        task.setLeft(left);
        this.internalUpdate(task);
    }

    public void updateParentStatus(Task childTask, Long parentID, boolean changed) {
        log.info("updateParentStatus:未实现");
        if(parentID == null) parentID = childTask.getParent();
        if(parentID <= 0)
            return;
        Task oldParentTask = this.get(parentID);

        if(oldParentTask.getParent() != -1) {
            Task pTask = new Task();
            pTask.setId(parentID);
            pTask.setParent(-1l);
            this.internalUpdate(pTask);
        }
        computeWorkingHours(oldParentTask);
        String statusSql = String.format("select id,`status` from zt_task where parent = %1$s   and deleted = '0'", parentID);

        List<JSONObject> statusList = taskService.select(statusSql, null);

        if(statusList.size() == 0) {
            Task pTask = new Task();
            pTask.setId(parentID);
            pTask.setParent(0l);
            this.internalUpdate(pTask);
            return;
        }

        String status = "";
        if(statusList.size() == 1) {
            status = statusList.get(0).getString("status");
        }else {
            String closedReasonSql = String.format("select closedReason from zt_task where parent = %1$s   and deleted = '0'", parentID);
            List<JSONObject> closedReasonList = taskService.select(closedReasonSql, null);
            String strStatus = "";
            for(JSONObject jsonObject : statusList) {
                strStatus += jsonObject.getString("status") + ",";
            }
            String strClose = "";
            for(JSONObject jsonObject : closedReasonList) {
                strClose += jsonObject.getString("closedReason") + ",";
            }
            if(strStatus.contains("doing") || strStatus.contains("pause")) {
                status = "doing";
            }else if((strStatus.contains("done") || strClose.contains("done")) && strStatus.contains("wait")) {
                status = "doing";
            }else if(strStatus.contains("wait")) {
                status = "wait";
            }else if(strStatus.contains("done")) {
                status = "done";
            }else if(strStatus.contains("closed")) {
                status = "closed";
            }else if(strStatus.contains("cancel")) {
                status = "cancel";
            }
        }
        //
        if(!"".equals(status) && !status.equals(oldParentTask.getStatus())) {
            Task task = new Task();
            Timestamp nowdate = ZTDateUtil.now();
            task.setStatus(status);
            task.setId(parentID);
            task.setLastediteddate(nowdate);
            task.setParent(-1L);
            task.setLasteditedby(AuthenticationUser.getAuthenticationUser().getLoginname());
            if("done".equals(status)) {
                task.setAssigneddate(nowdate);
                task.setAssignedto(oldParentTask.getOpenedby());
                task.setFinishedby(AuthenticationUser.getAuthenticationUser().getLoginname());
                task.setFinisheddate(nowdate);
            }else if("cancel".equals(status)) {
                task.setAssigneddate(nowdate);
                task.setAssignedto(oldParentTask.getOpenedby());
                task.setFinishedby(AuthenticationUser.getAuthenticationUser().getLoginname());
                task.setFinisheddate(nowdate);
                task.setCanceledby(AuthenticationUser.getAuthenticationUser().getLoginname());
                task.setCanceleddate(nowdate);
            }else if("closed".equals(status)) {
                task.setAssigneddate(nowdate);
                task.setAssignedto("closed");
                task.setClosedby(AuthenticationUser.getAuthenticationUser().getLoginname());
                task.setCloseddate(nowdate);
                task.setClosedreason("done");
            }else if("doing".equals(status) || "wait".equals(status)) {
                if("closed".equals(oldParentTask.getAssignedto())) {
                    task.setAssignedto(task.getAssignedto());
                    task.setCanceleddate(nowdate);
                }
                task.setFinishedby("");
                task.setFinisheddate(null);
                task.setClosedby("");
                task.setCloseddate(null);
                task.setClosedreason("");
            }
            this.internalUpdate(task);
            if(!changed) {
                return;
            }
            List<History> changes = ChangeUtil.diff(oldParentTask, this.get(parentID),null,null,null);
            String action = "";
            if("doing".equals(status) && !"wait".equals(oldParentTask.getStatus()) && !"pause".equals(oldParentTask.getStatus())) {
                action = "Activated";
            }else if("doing".equals(status) && "pause".equals(oldParentTask.getStatus())) {
                action = "Restarted";
            }else if("doing".equals(status) && "wait".equals(oldParentTask.getStatus())) {
                action = "Started";
            }else if("cancel".equals(status) && !"cancel".equals(oldParentTask.getStatus())) {
                action = "Canceled";
            }else if("pause".equals(status) && !"pause".equals(oldParentTask.getStatus())) {
                action = "Paused";
            }else if("closed".equals(status) && !"closed".equals(oldParentTask.getStatus())) {
                action = "Closed";
            }else if("done".equals(status) && !"done".equals(oldParentTask.getStatus())) {
                action = "Finished";
            }
            if("".equals(action)) {
                Action action1 = actionHelper.create("task", parentID, action,
                        "", "", null, false);
                if (changes.size() > 0)
                    actionHelper.logHistory(action1.getId(), changes);
            }
        }else {
            List<History> changes = ChangeUtil.diff(oldParentTask, this.get(parentID),null,null,null);
            if(changes.size() > 0) {
                Action action1 = actionHelper.create("task", parentID, "Edited",
                        "", "", null, false);
                actionHelper.logHistory(action1.getId(), changes);
            }
        }
    }

    @Transactional
    public Task start(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("doing");
        et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setAssigneddate(ZTDateUtil.now());
        et.setRealstarted(ZTDateUtil.now());
        if (StringUtils.compare(old.getAssignedto(), et.getAssignedto()) != 0)
            et.setAssigneddate(ZTDateUtil.now());
        if (et.getLeft() == 0) {
            et.setStatus("done");
            et.setFinisheddate(ZTDateUtil.now());
            et.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
            et.setAssignedto(old.getOpenedby());
        }

        //taskEstimate
        TaskEstimate taskEstimate = new TaskEstimate();
        taskEstimate.setTask(et.getId());
        taskEstimate.setAccount(AuthenticationUser.getAuthenticationUser().getUsername());
        taskEstimate.setDate(et.getRealstarted());
        taskEstimate.setLeft(get(et.getLeft(), 0.0));
        taskEstimate.setConsumed(get(et.getConsumed(), 0.0));
        taskEstimateHelper.create(taskEstimate);

        //teams
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", et.getId()));
        if (teams.size() > 0) {
            String oldAssignTo = StringUtils.isNotBlank(old.getAssignedto()) ? old.getAssignedto() : teams.get(0).getAccount();
            for (Team team : teams) {
                if (StringUtils.compare(team.getAccount(), oldAssignTo) == 0) {
                    team.setLeft(get(et.getLeft(), 0.0));
                    team.setConsumed(get(et.getConsumed(), 0.0));
                    teamHelper.internalUpdate(team);
                }
            }
            computeHours4Multiple(old, et, null, false);
        }

        this.internalUpdate(et);
        if (et.getParent() > 0) {
            updateParentStatus(et, et.getParent(), true);
            computeBeginAndEnd(this.get(et.getParent()));
        }
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            String strAction = "Started";
            if (et.getLeft() == 0) {
                strAction = "Finished";
            }
            Action action = actionHelper.create("task", et.getId(), strAction,
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return et;
    }

    @Transactional
    public Task restart(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        this.start(et);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            String strAction = "Restarted";
            if (et.getLeft() == 0) {
                strAction = "Finished";
            }
            Action action = actionHelper.create("task", et.getId(), strAction,
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return et ;
    }

    @Transactional
    public Task pause(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("pause");
        this.internalUpdate(et);
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Paused",
                    comment, "", "", true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return et ;
    }

    @Transactional
    public Task assignTo(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setLeft(0.0);
        et.setAssigneddate(ZTDateUtil.now());
        et.setStatus("doing");
        this.internalUpdate(et);

        //teams
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", et.getId()));
        if (teams.size() > 0) {
            for (Team team : teams) {
                if (StringUtils.compare(team.getAccount(), et.getAssignedto()) == 0) {
                    team.setLeft(et.getLeft());
                    teamHelper.internalUpdate(team);
                } else if (StringUtils.compare(team.getAccount(), old.getAssignedto()) == 0) {
                    team.setLeft(0.0);
                    teamHelper.internalUpdate(team);
                }
            }
            computeHours4Multiple(old, et, null, false);
        }


        if (old.getParent() > 0)
            updateParentStatus(et, old.getId(), true);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Assigned",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Task activate(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setLeft(0.0);
        et.setAssigneddate(ZTDateUtil.now());
        et.setStatus("doing");
        et.setFinishedby("");
        et.setFinisheddate(null);
        et.setCanceledby("");
        et.setCanceleddate(null);
        et.setClosedby("");
        et.setCloseddate(null);
        et.setClosedreason("");
        //team
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", et.getId()));
        if (teams.size() > 0) {
            for (Team team : teams) {
                if (StringUtils.compare(team.getAccount(), et.getAssignedto()) == 0) {
                    team.setLeft(et.getLeft());
                    teamHelper.internalUpdate(team);
                }
            }
            computeHours4Multiple(old, et, null, false);
        }

        this.internalUpdate(et);


        if (old.getParent() > 0)
            updateParentStatus(et, old.getParent(), true);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Activated",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Task cancel(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("cancel");
        et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setAssigneddate(ZTDateUtil.now());
        et.setFinishedby("");
        et.setFinisheddate(null);
        et.setCanceledby(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setCanceleddate(ZTDateUtil.now());
        this.internalUpdate(et);

        if (old.getParent() > 0)
            updateParentStatus(et, old.getId(), true);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Canceled",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Task finish(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("done");
        et.setAssignedto(old.getOpenedby());
        et.setAssigneddate(ZTDateUtil.now());
        if (et.getFinisheddate() == null)
            et.setFinisheddate(ZTDateUtil.now());
        et.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());


        //team
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", et.getId()));
        //Task
        TaskEstimate taskEstimate = new TaskEstimate();
        taskEstimate.setTask(et.getId());
        taskEstimate.setAccount(AuthenticationUser.getAuthenticationUser().getUsername());
        taskEstimate.setDate(et.getFinisheddate());
        taskEstimate.setLeft(0.0);
        taskEstimate.setConsumed(et.getConsumed());

        if (teams.size() > 0) {
            for (Team team : teams) {
                if (StringUtils.compare(team.getAccount(), taskEstimate.getAccount()) == 0)
                    taskEstimate.setLeft(taskEstimate.getLeft() + team.getLeft());
            }
            computeHours4Multiple(old, et, null, false);
        }
        taskEstimateHelper.create(taskEstimate);

        for (Team team : teams) {
            if (StringUtils.compare(team.getAccount(), old.getAssignedto()) == 0) {
                team.setLeft(0.0);
                team.setConsumed(et.getConsumed());
                teamHelper.internalUpdate(team);
            }
        }


        this.internalUpdate(et);

        if (old.getParent() > 0)
            updateParentStatus(et, old.getParent(), true);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Finished",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return et;
    }

    @Transactional
    public Task close(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("closed");
        et.setAssignedto("closed");
        et.setAssigneddate(ZTDateUtil.now());

        et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setCloseddate(ZTDateUtil.now());
        if (StringUtils.compare(old.getStatus(), "done") == 0) {
            et.setClosedreason("done");
        } else if (StringUtils.compare(old.getStatus(), "cancel") == 0) {
            et.setClosedreason("cancel");
        }

        this.internalUpdate(et);

        if (old.getParent() > 0)
            updateParentStatus(et, old.getId(), true);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Assigned",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return et;
    }

    @Transactional
    public Task recordEstimate(Task et) {
        List<TaskEstimate> taskEstimates = new ArrayList<>();
        Timestamp earliestTime = null;
        if (et.getTaskestimate() != null && et.getTaskestimate().size() > 0) {
            for (TaskEstimate taskEstimate : et.getTaskestimate()) {
                taskEstimate.setTask(et.getId());
                taskEstimate.setDate(ZTDateUtil.now());
                if (taskEstimate.getDates() != null)
                    taskEstimate.setDate(taskEstimate.getDates());
                if(earliestTime == null) {
                    earliestTime = taskEstimate.getDate();
                }
                taskEstimate.setAccount(AuthenticationUser.getAuthenticationUser().getLoginname());
                if(taskEstimate.getConsumed() == null) {
                   continue;
                }
                if(taskEstimate.getLeft() == null) {
                    continue;
                }
                taskEstimates.add(taskEstimate);
            }
        }else
            return et;
        et = this.get(et.getId());
        double consumed = 0;
        double left = et.getLeft();
        Timestamp nowDate = ZTDateUtil.now();
        String sql = String.format("select * from zt_taskestimate where task = %1$s order by date desc LIMIT 0,1", et.getId());
        List<JSONObject> list = taskService.select(sql, null);
        Timestamp lastDate = null;
        if(list.size() > 0)
            lastDate = list.get(0).getTimestamp("date");

        Long actionid = 0l;
        for(TaskEstimate taskEstimate : taskEstimates) {
            taskEstimateHelper.create(taskEstimate);
            consumed += taskEstimate.getConsumed();

            Action action = actionHelper.create("task", et.getId(), "RecordEstimate",
                    taskEstimate.getWork(), String.valueOf(taskEstimate.getConsumed()), null, true);
            actionid = action.getId();
            if(lastDate == null || lastDate.getTime() <= taskEstimate.getDate().getTime()) {
                left = taskEstimate.getLeft();
                lastDate = taskEstimate.getDate();
            }

        }
        Task task = new Task();
        task.setConsumed(et.getConsumed() + consumed);
        task.setLeft(left);
        task.setLasteditedby(AuthenticationUser.getAuthenticationUser().getLoginname());
        task.setLastediteddate(nowDate);
        task.setId(et.getId());
        if(left == 0) {
            task.setStatus("done");
            task.setAssignedto(et.getOpenedby());
            task.setAssigneddate(nowDate);
            task.setFinisheddate(nowDate);
            task.setFinishedby(AuthenticationUser.getAuthenticationUser().getLoginname());
        }else if("wait".equals(et.getStatus())) {
            task.setStatus("doing");
            task.setAssignedto(AuthenticationUser.getAuthenticationUser().getLoginname());
            task.setAssigneddate(nowDate);
            task.setRealstarted(nowDate);
        }else if("pause".equals(et.getStatus())) {
            task.setStatus("doing");
            task.setAssignedto(AuthenticationUser.getAuthenticationUser().getLoginname());
            task.setAssigneddate(nowDate);
        }
        // 团队任务

        this.internalUpdate(task);

        List<History> changes = ChangeUtil.diff(et, task);
        if(actionid != null && changes.size() > 0)
            actionHelper.logHistory(actionid, changes);
        if(et.getParent() > 0) {
            updateParentStatus(et, et.getParent(), true);
        }
        if(et.getStory() != null && et.getStory() != 0l) {
            storyHelper.setStage(et.getZtstory());
        }
        return et;
    }

    @Autowired
    ITaskService taskService;
    @Transactional
    public Task deleteEstimate(Task et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Task editEstimate(Task et) {
        throw new RuntimeException("未实现");
    }

    @Autowired
    IStoryService storyService;
    @Transactional
    public Task confirmStoryChange(Task et) {
        et = this.get(et.getId());
        Task task = new Task();
        task.setId(et.getId());
        task.setStoryversion(storyService.get(et.getStory()).getVersion());
        this.internalUpdate(task);
        actionHelper.create("task",et.getId(),"confirmed","","","",true);
        return et;
    }

    @Autowired
    IProjectService projectService;
    @Transactional
    public boolean batchCreate(List<Task> list){
        List<Long> storyIDs = new ArrayList<>();
        List<String> taskNames = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            long storyId = list.get(i).getStory();
            if (list.get(i).getName() == null || list.get(i).getType().equals("affair")) continue;
            if (list.get(i).getType() == null || list.get(i).getType().equals("ditto") && i != 0 && list.get(i-1).getType() != null && list.get(i-1).getType().equals("affair")) continue;

            boolean inNames = taskNames.contains(list.get(i).getName());
            if (!inNames || (inNames && !storyIDs.contains(storyId))){
                storyIDs.add(storyId);
                taskNames.add(list.get(i).getName());
            }
            else {
                log.error("任务名不能相同");
                throw new RuntimeException("任务名不能相同!");
            }
        }
        Date date = new Date(0);
        Timestamp timestamp = new Timestamp(date.getTime());
        Project project = projectService.get(list.get(0).getProject());
        boolean isOps = project.getType().equalsIgnoreCase("ops");
        String childTasks = "";
        for (Task task : list) {
            long story = task.getStory() == null || task.getStory().toString().equals("ditto")  ? 0 : task.getStory();
            long module = task.getModule() == null || task.getModule().toString().equals("ditto") ? 0 : task.getModule();
            String type = task.getType() == null || task.getType().equals("ditto") ? "" : task.getType();
            String assignedTo = task.getAssignedto() == null || task.getAssignedto().equals("ditto") ? "" :task.getAssignedto();
            task.setStory(story);
            task.setModule(module);
            task.setType(type);
            task.setAssignedto(assignedTo);
            task.setEststarted(task.getEststarted() == null ? timestamp : task.getEststarted());
            task.setDeadline(task.getDeadline() == null ? timestamp : task.getDeadline());
            task.setStatus("wait");
            task.setOpeneddate(Timestamp.valueOf(LocalDateTime.now()));
            task.setLeft(task.getEstimate());
            if(task.getStory() != null && task.getStory() != 0l) {
                task.setStoryversion(storyHelper.get(task.getStory()).getVersion());
            }else if(isOps){
                continue;
            }
            if (assignedTo != "" && assignedTo != null){
                task.setAssigneddate(new Timestamp(LocalDateTime.now().getSecond()));
            }

            super.create(task);
            childTasks += task.getId() + ",";
            actionHelper.create("task",task.getId(),"opened","","",null,true);
            if(task.getStory() != null && task.getStory() != 0l) {
                storyHelper.setStage(task.getZtstory());
            }
        }

//        boolean isOps = project.getType().equalsIgnoreCase("ops");
        long parent = list.get(0).getParent();
        Task old =new Task();
        CachedBeanCopier.copy(this.get(parent), old);
//        for (Task task : list) {
//            if (isOps){
//                if (task.getStory() == null){
//                    return false;
//                }
//            }
//            this.create(task);
//            actionHelper.create("task",task.getId(),"opened","","",null,true);
//        }
        if (parent >= 0) {
            updateParentStatus(old, parent,true);
            computeBeginAndEnd(this.get(old.getId()));
            Task update = new Task();
            update.setParent((long)-1);
            update.setId(parent);
            this.internalUpdate(update);
            Task newT = new Task();
            String regex = "^,*|,*$";
            childTasks = childTasks.replaceAll(regex, "");
            CachedBeanCopier.copy(this.get(old.getId()), newT);
            Action action = actionHelper.create("task",parent,"createchildren","",childTasks,null,true);
            List<History> changes =  ChangeUtil.diff(old,newT);
            if (changes.size() >= 0){
                actionHelper.logHistory(action.getId(),changes);
            }
        }
        return true;
    }
}
