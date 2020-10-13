package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.ibiz.service.impl.TaskTeamServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.TaskMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

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

    @Override
    @Transactional
    public boolean create(Task et) {
        boolean bOk = false;
        String multiple = et.getMultiple();
        List<TaskTeam> taskTeams = et.getTaskteam();
        fileHelper.processImgURL(et, null, null);
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

        return bOk;
    }

    @Transactional
    public boolean edit(Task et) {
        String multiple = et.getMultiple();
        List<TaskTeam> taskTeams = et.getTaskteam();
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old = this.get(et.getId());

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
            updateParentStatus(et, oldParent, changeParent);
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
            Task parent = this.get(old.getParent());
            updateParentStatus(et, parent, changeParent);
            computeBeginAndEnd(parent);
            if (changeParent) {

                actionHelper.create("task", et.getId(), "linkParentTask", "", String.valueOf(et.getParent()), null, false);

                actionHelper.create("task", et.getParent(), "linkChildTask", "", String.valueOf(et.getId()), null, false);

            }
        }

        fileHelper.updateObjectID(et.getId(), null, null);

        List<History> changes = ChangeUtil.diff(old, et);
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
        return true;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        boolean bOk = false;
        Task old = this.get(key);
        bOk = super.delete(key);
        if (old.getParent() != 0) {
            updateParentStatus(old, null, false);
            actionHelper.create("project", old.getParent(), "deleteChildrenTask", "", String.valueOf(old.getId()), null, true);
        }
        if (old.getFrombug() != 0) {
            Bug bug = new Bug();
            bug.setId(old.getFrombug());
            bug.setTotask(0l);
            bugHelper.internalUpdate(bug);
        }
        return bOk;
    }

    public void computeHours4Multiple(Task old, Task et, List<TaskTeam> teams, boolean auto) {

    }

    public void computeBeginAndEnd(Task et) {

    }

    public void updateParentStatus(Task et, Task old, boolean changed) {
        log.info("updateParentStatus:未实现");
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
            updateParentStatus(et, null, true);
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
        return et ;
    }

    @Transactional
    public Task pause(Task et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Task old =new Task();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("pause");

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Paused",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
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
            updateParentStatus(et, null, true);

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
            updateParentStatus(et, null, true);

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
            updateParentStatus(et, null, true);

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
            updateParentStatus(et, null, true);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("task", et.getId(), "Finished",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
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
            updateParentStatus(et, null, true);

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
    public Task recordEstimate(Task et) {
        if (et.getTaskestimate() != null && et.getTaskestimate().size() > 0) {
            for (TaskEstimate taskEstimate : et.getTaskestimate()) {
                taskEstimate.setTask(et.getId());
                taskEstimate.setDate(ZTDateUtil.now());
                if (taskEstimate.getDates() != null)
                    taskEstimate.setDate(taskEstimate.getDates());
                taskEstimate.setAccount(AuthenticationUser.getAuthenticationUser().getUsername());
                taskEstimateHelper.create(taskEstimate);
            }
        }
        return et;
    }

    @Transactional
    public Task deleteEstimate(Task et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Task editEstimate(Task et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Task confirmStoryChange(Task et) {
        throw new RuntimeException("未实现");
    }
}
