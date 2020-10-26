package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
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
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
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
    String ignore = "totalwh,totalleft,totalconsumed,totalestimate";


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
        if(et.getAssignedto() != null && !"".equals(et.getAssignedto()))
            et.setAssigneddate(ZTDateUtil.now());
        else
            et.setAssigneddate(new Timestamp(-28800000l));
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
        List<TaskTeam> teams = et.getTaskteam();
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        if (et.getStatus().equals("done") && (et.getConsumed() == null)) throw new RuntimeException("任务完成状态消耗不能为空");
        if (!et.getStatus().equals("cancel") && (et.getName() == null || et.getType() == null)) throw new RuntimeException("非取消状态，任务名和类型不能为空！");
        if ((et.getStatus().equals("doing") ||et.getStatus().equals("pause"))&& et.getLeft() == 0 && StringUtils.compare(et.getMultiple(),"0") == 0) {
            throw  new RuntimeException("预计剩余不能为0");
        }


        if (et.getStory() != 0 && et.getStory() != old.getStory()){
            et.setStoryversion(et.getZtstory().getVersion());
        }

        if (StringUtils.compare(et.getStatus(), "done") == 0) {
            et.setLeft(0.0);
            if (StringUtils.isBlank(et.getFinishedby())) {
                et.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
            }
            if (et.getFinisheddate() == null)
                et.setFinisheddate(ZTDateUtil.now());
        } else if (StringUtils.compare(et.getStatus(), "cancel") == 0) {
            if (StringUtils.isBlank(et.getClosedby())) {
                et.setCanceledby(AuthenticationUser.getAuthenticationUser().getUsername());
            }
            if (et.getCanceleddate() == null)
                et.setCanceleddate(ZTDateUtil.now());
        } else if (StringUtils.compare(et.getStatus(), "closed") == 0) {
            if (et.getClosedreason() == null || et.getClosedreason().equals(""))  throw new RuntimeException("关闭原因不能为空");
            if (StringUtils.compare(et.getClosedreason(),"cancel") == 0){
                if (!StringUtils.isEmpty(et.getFinishedby()) || et.getFinisheddate() != null){
                    throw new RuntimeException("由谁完成和完成时间必须为空!");
                }
                else {
                    et.setCanceledby(get(et.getCanceledby(),AuthenticationUser.getAuthenticationUser().getUsername()));
                    et.setCanceleddate(get(et.getCanceleddate(),ZTDateUtil.now()));
                }
            }

        }


        if (StringUtils.compare(et.getAssignedto(), old.getAssignedto()) != 0) {
            et.setAssigneddate(ZTDateUtil.now());
        }

        if (et.getConsumed() > 0 && et.getLeft() > 0 && StringUtils.compare(et.getStatus(), "wait") == 0 && StringUtils.compare(multiple,"1") != 0)
            et.setStatus("doing");

        if (StringUtils.compare(et.getStatus(), "wait") == 0 && et.getLeft() == old.getLeft() && et.getConsumed() == 0 && et.getEstimate() != 0) {
            et.setLeft(et.getEstimate());
        }


        if (et.getConsumed() > old.getConsumed())
            throw new RuntimeException("总计消耗必须大于之前消耗");

        if (et.getProject() != old.getProject()) {
            Task data = new Task();
            data.setProject(et.getProject());
            data.setModule(et.getModule());
            this.update(data,(Wrapper<Task>) data.getUpdateWrapper(true).eq("parent",et.getId()));
        }
        fileHelper.processImgURL(et, null, null);

        if (StringUtils.compare(multiple, "1") == 0) {
            String statusStr = "done,closed,cancel";
            List<String> accounts = new ArrayList<>();
            for (TaskTeam team : teams) {
                accounts.add(team.getAccount());
            }
            if (!statusStr.contains(et.getStatus()) && !accounts.contains(et.getAssignedto()) && !et.getAssignedto().equals("")) throw new RuntimeException("当前状态的多人任务不能指派给任务团队以外的成员。");
            int i = 0;
            for (TaskTeam taskTeam : teams) {
//                Team team = new Team();
                taskTeam.setType("task");
                taskTeam.setRoot(et.getId());
                taskTeam.setAccount(taskTeam.getAccount());
                taskTeam.setJoin(ZTDateUtil.now());
                taskTeam.setRole(et.getAssignedto());
                taskTeam.setEstimate(taskTeam.getEstimate());
                taskTeam.setConsumed(taskTeam.getConsumed());
                taskTeam.setLeft(taskTeam.getLeft() != null ? taskTeam.getLeft() : taskTeam.getConsumed());
                taskTeam.setOrder(i);
                if (StringUtils.compare(et.getStatus(), "done") == 0)
                    taskTeam.setLeft(0.0);
                if (et.getAssignedto() == null || et.getAssignedto().equals("")) {
                    et.setAssignedto(taskTeam.getAccount());
                    et.setAssigneddate(ZTDateUtil.now());
                }
                i++;
            }
        }


        teamHelper.remove(new QueryWrapper<Team>().eq("root", et.getId()).eq("type", "task"));
        if (StringUtils.compare(multiple,"1") == 0){
            for (TaskTeam team : teams) {
                taskTeamHelper.create(team);
            }
            this.computeHours4Multiple(old,et,null,false);
            if (et.getStatus().equals("wait")){
                et.setAssignedto(teams.get(0).getAccount());
            }
        }

        if (et.getStatus().equals("wait") || et.getStatus().equals("doing")){
            et.setFinishedby("");
            et.setFinisheddate(null);
            et.setCanceledby("");
            et.setCanceleddate(null);
            et.setClosedby("");
            et.setCloseddate(null);
            et.setClosedreason("");
        }
        if (et.getStatus().equals("done")){
            et.setEstimate(0d);
            et.setCanceledby("");
            et.setCanceleddate(null);
        }
        if (et.getStatus().equals("cancel")){
            et.setFinisheddate(null);
            et.setFinishedby("");
        }



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



//        String[] ignores = {"totalconsumed"};
        et.setStatus1(old.getStatus1());
        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
        this.removeIgonreChanges(changes);
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
        if (old.getParent() < 0) throw  new RuntimeException("不能删除父任务");
        bOk = super.delete(key);
        if (old.getParent() != 0) {
            updateParentStatus(old, old.getParent(), false);
            actionHelper.create("project", old.getParent(), "deleteChildrenTask", "", "", null, true);
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
        if (teams == null) {
            teams = taskTeamHelper.list(new QueryWrapper<TaskTeam>().eq("root", old.getId()).eq("type", "task").orderByAsc("`order`"));
        }
        if (teams != null && teams.size() != 0) {
            Timestamp now = ZTDateUtil.now();
            Task currentTask = task != null ? task : new Task();
            if (currentTask.getStatus() == null) currentTask.setStatus(old.getStatus());
            if (task.getAssignedto() != null) {
                currentTask.setAssignedto(task.getAssignedto());
            }
            else {
                if (old.getAssignedto() == null) {
                    TaskTeam firstMember = teams.get(0);
                    currentTask.setAssignedto(firstMember.getAccount());
                    currentTask.setAssigneddate(now);
                } else {
                    for (TaskTeam team : teams) {
                        if (team.getAccount() != null && team.getAccount().equals(old.getAssignedto()) && team.getLeft() == 0 && team.getConsumed() != 0) {
                            if (!old.getAssignedto().equals(teams.get(teams.size() - 1).getAccount())) {
                                currentTask.setAssignedto(this.getNextUser(teams, old));
                            }
                            else {
                                currentTask.setAssignedto(old.getOpenedby());
                            }
                            break;
                        }
                    }
                }
            }

            currentTask.setEstimate(0d);
            currentTask.setConsumed(0d);
            currentTask.setLeft(0d);
            for (TaskTeam member : teams) {
                currentTask.setEstimate(currentTask.getEstimate() + (member.getEstimate() == null ? 0 : member.getEstimate()));
                currentTask.setConsumed(currentTask.getConsumed() + (member.getConsumed() == null ? 0 : member.getConsumed()));
                currentTask.setLeft(currentTask.getLeft() + (member.getLeft() == null ? 0 : member.getLeft() ));
            }
            if (task != null) {
                if (currentTask.getConsumed() == 0) {
                    if (task.getStatus() == null) currentTask.setStatus("wait");
                    currentTask.setFinishedby("");
                    currentTask.setFinisheddate(null);
                }
                if (currentTask.getConsumed() > 0 && currentTask.getLeft() > 0 && StringUtils.compare(currentTask.getMultiple(),"1") != 0) {
                    currentTask.setStatus("doing");
                    currentTask.setFinishedby("");
                    currentTask.setFinisheddate(null);
                }
                if (currentTask.getConsumed() > 0 && currentTask.getLeft() == 0 && StringUtils.compare(currentTask.getMultiple(),"1") != 0) {
                    boolean flag = false;
                    for (TaskTeam team : teams) {
                        if (team.getAccount().equals(currentTask.getAssignedto())) {
                            flag = true;
                            break;
                        }
                    }
                    boolean flag1 = true;
                    for (TaskTeam team : teams) {
                        if (team.getAccount().equals(old.getAssignedto())) {
                            flag1 = false;
                            break;
                        }
                    }

                    if (flag && flag1) {
                        currentTask.setStatus("doing");
                        currentTask.setFinishedby("");
                        currentTask.setFinisheddate(null);
                    } else if (!flag1) {
                        currentTask.setStatus("done");
                        currentTask.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
                        currentTask.setFinisheddate(now);
                    }
                }
                if (!old.getAssignedto().equals(currentTask.getAssignedto()) || currentTask.getStatus().equals("done")) {
                    String login = AuthenticationUser.getAuthenticationUser().getUsername();
                    boolean flag = false;
                    double left = 0;
                    for (TaskTeam team : teams) {
                        if (team.getAccount().equals(login)) {
                            flag = true;
                            left = team.getLeft();
                            break;
                        }
                    }
                    if (flag && left == 0 && !old.getFinishedlist().contains(login)) {
                        currentTask.setFinishedlist(old.getFinishedlist() + "," + login);
                    }
                    if ((old.getStatus().equals("done") || old.getStatus().equals("closed")) && currentTask.getStatus().equals("doing") && old.getStatus() != null) {
                        currentTask.setFinishedlist(old.getFinishedlist().substring(0, old.getFinishedlist().indexOf(old.getAssignedto())));
                    }
                }
            }
            currentTask.setId(old.getId());
            this.internalUpdate(currentTask);
        }
    }

    public String getNextUser(List<TaskTeam> teams,Task old){
        List<String> accounts = new ArrayList<>();
        for (TaskTeam team : teams) {
            accounts.add(team.getAccount());
        }
        int index = -1;
        for (int i = 0; i < teams.size(); i++) {
            if (teams.get(i).getAccount().equals(old.getAssignedto())){
                index = i;
                break;
            }
        }
        if (old == null || !accounts.contains(old.getAssignedto()) || index == teams.size()-1){
            return teams.get(0).getAccount();
        }
        String next = "";
        for (int i = 0; i < teams.size(); i++) {
            if (teams.get(i).getAccount().equals(old.getAssignedto()) && i != teams.size()-1){
                next = teams.get(i+1).getAccount();
                break;
            }
        }
        return next;
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
                    task.setAssignedto(childTask.getAssignedto());
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

        Task newTask = new Task();
        newTask.setId(et.getId());
        starts(et,old,newTask);
        List<History> changes = ChangeUtil.diff(old, newTask);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            String strAction = "Started";
            if (et.getLeft() == 0) {
                strAction = "Finished";
            }
            Action action = actionHelper.create("task", newTask.getId(), strAction,
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(newTask.getStory() != null && newTask.getStory() != 0l) {
            storyHelper.setStage(newTask.getZtstory());
        }
        return et;
    }

    public void starts(Task et, Task old,Task newTask) {
        newTask.setStatus("doing");
        newTask.setLeft(et.getLeft() != null ? et.getLeft() : 0d);
        newTask.setConsumed(et.getConsumed() != null ? et.getConsumed() : 0d);
        newTask.setRealstarted(et.getRealstarted());
        if (StringUtils.compare(old.getAssignedto(), AuthenticationUser.getAuthenticationUser().getUsername()) != 0)
            newTask.setAssigneddate(ZTDateUtil.now());
        if (newTask.getLeft() == 0) {
            newTask.setStatus("done");
            newTask.setFinisheddate(ZTDateUtil.now());
            newTask.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
            newTask.setAssignedto(old.getOpenedby());
        }

        //taskEstimate
        TaskEstimate taskEstimate = new TaskEstimate();
        taskEstimate.setTask(newTask.getId());
        taskEstimate.setAccount(AuthenticationUser.getAuthenticationUser().getUsername());
        taskEstimate.setDate(newTask.getRealstarted());
        taskEstimate.setLeft(get(newTask.getLeft(), 0.0));
        taskEstimate.setConsumed(get(newTask.getConsumed(), 0.0));
        taskEstimateHelper.create(taskEstimate);

        //teams
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", newTask.getId()).eq("type", "task"));
        if (teams.size() > 0) {
            String oldAssignTo = StringUtils.isNotBlank(old.getAssignedto()) ? old.getAssignedto() : teams.get(0).getAccount();
            Team team = new Team();
            team.setLeft(et.getLeft());
            team.setConsumed(et.getConsumed());
            teamHelper.update(team, new QueryWrapper<Team>().eq("root",newTask.getId()).eq("type", "task").eq("account", oldAssignTo));
            computeHours4Multiple(old, newTask, null, false);
        }

        this.internalUpdate(newTask);
        if (old.getParent() > 0) {
            updateParentStatus(old, old.getParent(), true);
            computeBeginAndEnd(this.get(old.getParent()));
        }
    }

    @Transactional
    public Task restart(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);
        Task newTask = new Task();
        newTask.setId(et.getId());
        newTask.setConsumed(et.getConsumed());
        if (newTask.getConsumed() < old.getConsumed()){
            throw new RuntimeException("总计消耗必须大于原先消耗");
        }

        starts(et,old,newTask);

        List<History> changes = ChangeUtil.diff(old, newTask);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            String strAction = "Restarted";
            if (et.getLeft() == 0) {
                strAction = "Finished";
            }
            Action action = actionHelper.create("task", newTask.getId(), strAction,
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(newTask.getStory() != null && newTask.getStory() != 0l) {
            storyHelper.setStage(newTask.getZtstory());
        }
        return et ;
    }

    @Transactional
    public Task pause(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);
        Task newTask = new Task();
        newTask.setId(et.getId());
        newTask.setStatus("pause");
        newTask.setLastediteddate(ZTDateUtil.now());
        newTask.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
        this.internalUpdate(newTask);
        if (old.getParent() > 0) this.updateParentStatus(newTask,newTask.getId(),true);
        List<History> changes = ChangeUtil.diff(old, newTask);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", newTask.getId(), "Paused",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(newTask.getStory() != null && newTask.getStory() != 0l) {
            storyHelper.setStage(newTask.getZtstory());
        }
        return newTask ;
    }

    @Transactional
    public Task assignTo(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);
        Task newTask = new Task();
        newTask.setId(et.getId());
        newTask.setLeft(et.getLeft() != null ? et.getLeft() : 0.0D);
        // et.setLeft(0.0);
        newTask.setAssignedto(et.getAssignedto());
        newTask.setAssigneddate(ZTDateUtil.now());
        newTask.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
        newTask.setLastediteddate(ZTDateUtil.now());
//        et.setStatus("doing");
        if(!"done".equals(old.getStatus()) && !"closed".equals(old.getStatus()) && (et.getLeft() == null || et.getLeft() == 0)) {
            throw new RuntimeException("[预计剩余]不能为空！");
        }
        //teams
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", et.getId()).eq("type","task"));
        if (teams.size() > 0) {

            Team team = new Team();
            team.setLeft(0d);
            teamHelper.update(team, new QueryWrapper<Team>().eq("root", old.getId()).eq("type", "task").eq("account", old.getAssignedto()));
            Team team1 = new Team();
            team1.setLeft(newTask.getLeft());
            teamHelper.update(team1,new QueryWrapper<Team>().eq("root", newTask.getId()).eq("type", "task").eq("account", newTask.getAssignedto()));

            computeHours4Multiple(old, newTask, null, false);
        }


        if (old.getParent() > 0)
            updateParentStatus(newTask, old.getParent(), true);

        this.internalUpdate(newTask);

        List<History> changes = ChangeUtil.diff(old, newTask);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", newTask.getId(), "Assigned",
                    comment, newTask.getAssignedto(), null, true);
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

        Task newTask = new Task();
        newTask.setId(et.getId());
        newTask.setLeft(et.getLeft() != null ? et.getLeft() : 0.0d);
        newTask.setAssignedto(et.getAssignedto().equals("closed")  ? "" : et.getAssignedto());
        newTask.setAssigneddate(ZTDateUtil.now());
        newTask.setStatus("doing");
        newTask.setFinishedby("");
        newTask.setFinisheddate(null);
        newTask.setCanceledby("");
        newTask.setCanceleddate(null);
        newTask.setClosedby("");
        newTask.setCloseddate(null);
        newTask.setClosedreason("");
        newTask.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
        newTask.setLastediteddate(ZTDateUtil.now());
        //team
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", newTask.getId()).eq("type","task"));
        if (teams.size() > 0) {
            for (Team team : teams) {
                if (StringUtils.compare(team.getAccount(), newTask.getAssignedto()) == 0) {
                    team.setLeft(newTask.getLeft());
                    teamHelper.internalUpdate(team);
                    break;
                }
            }
            computeHours4Multiple(old, newTask, null, false);
        }

        this.internalUpdate(newTask);


        if (old.getParent() > 0)
            updateParentStatus(newTask, old.getParent(), true);

        double left = newTask.getLeft();
        newTask.setLeft(null);
        if (old.getParent() == -1l) {
            this.update(newTask,(Wrapper<Task>) et.getUpdateWrapper(true).eq("parent",newTask.getId()));
            this.computeWorkingHours(newTask);
        }
        newTask.setLeft(left);
        newTask.setStatus1(old.getStatus1());

        List<History> changes = ChangeUtil.diff(old, newTask);
        this.removeIgonreChanges(changes);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", newTask.getId(), "Activated",
                    comment, newTask.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return newTask;
    }

    public void removeIgonreChanges(List<History> changes){
        for (int i = 0; i < changes.size(); i++) {
            if (ignore.contains(changes.get(i).getField())){
                changes.remove(i);
                i--;
            }
        }
    }
    @Transactional
    public Task cancel(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        Task newTask = new Task();
        newTask.setId(et.getId());
        newTask.setLastediteddate(ZTDateUtil.now());
        newTask.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
        newTask.setStatus("cancel");
        newTask.setAssignedto(old.getOpenedby());
        newTask.setAssigneddate(ZTDateUtil.now());
        newTask.setFinishedby("");
        newTask.setFinisheddate(null);
        newTask.setCanceledby(AuthenticationUser.getAuthenticationUser().getUsername());
        newTask.setCanceleddate(ZTDateUtil.now());
        this.internalUpdate(newTask);

        if (old.getParent() > 0)
            updateParentStatus(newTask, old.getParent(), true);

        List<History> changes = ChangeUtil.diff(old, newTask);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", newTask.getId(), "Canceled",
                    comment, newTask.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return newTask;
    }

    @Transactional
    public Task finish(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", et.getId()).eq("type","task"));
        Task newTask = new Task();
        newTask.setId(et.getId());
        newTask.setAssigneddate(ZTDateUtil.now());
        newTask.setLastediteddate(ZTDateUtil.now());
        newTask.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
        newTask.setConsumed(et.getTotaltime() != null ? et.getTotaltime() : (et.getConsumed() + et.getCurrentconsumed()));
        double consumed = 0;
        if (teams.size() == 0){
            newTask.setLeft(0d);
            newTask.setStatus("done");
            newTask.setFinisheddate(ZTDateUtil.now());
            newTask.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
             consumed = et.getConsumed() - old.getConsumed();
            if (consumed < 0) throw  new RuntimeException("总计消耗必须大于原消耗");
        }
        else {
            for (Team team : teams) {
                if (team.getAccount().equals(AuthenticationUser.getAuthenticationUser().getUsername())){
                    consumed = et.getConsumed() - team.getConsumed();
                    if (consumed < 0) throw  new RuntimeException("总计消耗必须大于原消耗");
                    break;
                }
            }
        }
        if (et.getAssignedto() == null || et.getAssignedto().equals("")){
            newTask.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        }
        else newTask.setAssignedto(et.getAssignedto());


        //Task
        TaskEstimate taskEstimate = new TaskEstimate();
        taskEstimate.setTask(newTask.getId());
        taskEstimate.setAccount(AuthenticationUser.getAuthenticationUser().getUsername());
        taskEstimate.setDate(ZTDateUtil.now());
        taskEstimate.setLeft(0.0);
        taskEstimate.setConsumed(consumed == 0 ? et.getCurrentconsumed() : consumed);

        if (teams.size() > 0) {
            for (Team team : teams) {
                if (StringUtils.compare(team.getAccount(), taskEstimate.getAccount()) != 0)
                    taskEstimate.setLeft(taskEstimate.getLeft() + team.getLeft());
            }
        }
        taskEstimateHelper.create(taskEstimate);

        if (teams.size() > 0) {
            for (Team team : teams) {
                if (StringUtils.compare(team.getAccount(), old.getAssignedto()) == 0) {
                    team.setLeft(0.0);
                    team.setConsumed(newTask.getConsumed());
                    teamHelper.internalUpdate(team);
                }
            }
            computeHours4Multiple(old, newTask, null, false);
        }

        this.internalUpdate(newTask);

        if (old.getParent() > 0)
            updateParentStatus(newTask, old.getParent(), true);

        List<History> changes = ChangeUtil.diff(old, newTask);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", newTask.getId(), "Finished",
                    comment, newTask.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(newTask.getStory() != null && newTask.getStory() != 0l) {
            storyHelper.setStage(newTask.getZtstory());
        }

        return newTask;
    }


    @Transactional
    public Task close(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        Task newTask = new Task();
        newTask.setId(et.getId());
        newTask.setLastediteddate(ZTDateUtil.now());
        newTask.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
        newTask.setStatus("closed");
        newTask.setAssignedto("closed");
        newTask.setAssigneddate(ZTDateUtil.now());

        newTask.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
        newTask.setCloseddate(ZTDateUtil.now());
        if (StringUtils.compare(old.getStatus(), "done") == 0) {
            newTask.setClosedreason("done");
        } else if (StringUtils.compare(old.getStatus(), "cancel") == 0) {
            newTask.setClosedreason("cancel");
        }

        this.internalUpdate(newTask);
        if (old.getParent() > 0)
            updateParentStatus(newTask, old.getParent(), true);


        String[] ignores = {"assigneddate","closeddate"};
        List<History> changes = ChangeUtil.diff(old, newTask,ignores,null,null);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", newTask.getId(), "Closed",
                    comment, newTask.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if(newTask.getStory() != null && newTask.getStory() != 0l) {
            storyHelper.setStage(newTask.getZtstory());
        }
        return newTask;
    }

    @Transactional
    public Task recordEstimate(Task et) {
        List<TaskEstimate> taskEstimates = new ArrayList<>();
        Timestamp earliestTime = null;
        if (et.getTaskestimate() != null && et.getTaskestimate().size() > 0) {
//            boolean flag = true;
//            for (TaskEstimate taskEstimate: et.getTaskestimate()) {
//                if (taskEstimate.getConsumed() == null || taskEstimate.getLeft() == null){
//                    flag = false;
//                    break;
//                }
//            }
//            if (!flag) throw new RuntimeException("请填写剩余或总计消耗");
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
        double teamLeft = -1;
        double taskLeft = 0d;
        Timestamp nowDate = ZTDateUtil.now();
        String sql = String.format("select * from zt_taskestimate where task = %1$s order by date desc LIMIT 0,1", et.getId());
        List<JSONObject> list = taskService.select(sql, null);
        Timestamp lastDate = null;
        if(list.size() > 0)
            lastDate = list.get(0).getTimestamp("date");
            teamLeft = list.get(0).getDoubleValue("left");  //最新一次记录工时的剩余

        Long actionid = 0l;
        boolean isNew = false;
        for(TaskEstimate taskEstimate : taskEstimates) {
            taskEstimateHelper.create(taskEstimate);
            consumed += taskEstimate.getConsumed();

            Action action = actionHelper.create("task", et.getId(), "RecordEstimate",
                    taskEstimate.getWork(), String.valueOf(taskEstimate.getConsumed()), null, true);
            actionid = action.getId();
            if(lastDate == null || lastDate.getTime() <= taskEstimate.getDate().getTime()) {
                isNew = true;
                teamLeft = taskEstimate.getLeft();
                lastDate = taskEstimate.getDate();
            }

        }

        // 团队任务
        List<Team> teams = teamHelper.list(new QueryWrapper<Team>().eq("root", et.getId()).eq("type","task"));
        if(teams.size() > 0) {
            double myconsumed = 0d;
            for(Team team : teams) {
                if(AuthenticationUser.getAuthenticationUser().getUsername().equals(team.getAccount()) && team.getConsumed() != null) {
                    myconsumed = team.getConsumed();
                    if (!isNew) teamLeft += team.getLeft();
                }
                else {
                    taskLeft += team.getLeft();
                }
            }
            Team team = new Team();
            team.setConsumed(myconsumed + consumed);
            team.setLeft(teamLeft);
            teamHelper.update(team, new QueryWrapper<Team>().eq("root", et.getId()).eq("type", "task").eq("account", AuthenticationUser.getAuthenticationUser().getUsername()));
        }

        Task task = new Task();
        taskLeft += teamLeft;
        task.setLeft(taskLeft);
        task.setConsumed(et.getConsumed() + consumed);
        task.setLasteditedby(AuthenticationUser.getAuthenticationUser().getLoginname());
        task.setLastediteddate(nowDate);
        task.setId(et.getId());
        if(taskLeft == 0) {
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
            //if (list.get(i).getName() == null || list.get(i).getType().equals("affair")) continue;
            //if (list.get(i).getType() == null || list.get(i).getType().equals("ditto") && i != 0 && list.get(i-1).getType() != null && list.get(i-1).getType().equals("affair")) continue;

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
