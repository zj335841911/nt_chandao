package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.Todo;
import cn.ibizlab.pms.core.zentao.mapper.TodoMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Slf4j
public class TodoHelper extends ZTBaseHelper<TodoMapper, Todo> {

    @Autowired
    ActionHelper actionHelper;

    public boolean hasDeleted(){
        return false ;
    }

    @Override
    @Transactional
    public boolean create(Todo et) {

        if (StringUtils.compare(et.getType(),StaticDict.Type.TASK.getValue()) == 0)
            et.setName(et.getTask());
        else if (StringUtils.compare(et.getType(), StaticDict.Type.BUG.getValue()) == 0)
            et.setName(et.getBug());
        else if (StringUtils.compare(et.getType(), StaticDict.Type.STORY.getValue()) == 0)
            et.setName(et.getStory());

        if (et.getCycle() != null && et.getCycle() == 1) {
            et.setType(StaticDict.Type.CYCLE.getValue());
            JSONObject config = new JSONObject();
            config.put("type", et.getConfigType());
            config.put("beforeDays", et.getConfigBeforedays());
            if (et.getConfigEnd() != null)
                config.put("end", et.getConfigEnd());
            if (StringUtils.compare(et.getConfigType(), "day") == 0) {
                config.put("day", et.getConfigDay());
            } else if (StringUtils.compare(et.getConfigType(), "month") == 0) {
                config.put("month", et.getConfigMonth());
            } else if (StringUtils.compare(et.getConfigType(), "week") == 0) {
                config.put("week", et.getConfigWeek());
            }
            et.setConfig(config.toString());
        } else {
            et.setCycle(0);
            et.setConfig("");
        }

        boolean bOk = super.create(et);
        if (!bOk) {
            return bOk;
        }

        //周期循环处理
        if (et.getCycle() != null && et.getCycle() == 1) {

        }

        actionHelper.create(StaticDict.Action__object_type.TODO.getValue(), et.getId(), StaticDict.Action__type.OPENED.getValue(), "", "", null, true);

        return true;
    }

    @Transactional
    public boolean edit(Todo et) {
        Todo old = new Todo();
        CachedBeanCopier.copy(get(et.getId()), old);

        if (StringUtils.compare(et.getType(), StaticDict.Type.TASK.getValue()) == 0)
            et.setName(et.getTask());
        else if (StringUtils.compare(et.getType(), StaticDict.Type.BUG.getValue()) == 0)
            et.setName(et.getBug());
        else if (StringUtils.compare(et.getType(), StaticDict.Type.STORY.getValue()) == 0)
            et.setName(et.getStory());
        if (et.getCycle() != null && et.getCycle() == 1) {
            JSONObject config = new JSONObject();
            config.put("type", et.getConfigType());
            config.put("beforeDays", et.getConfigBeforedays());
            if (et.getConfigEnd() != null)
                config.put("end", et.getConfigEnd());
            if (StringUtils.compare(et.getConfigType(), "day") == 0) {
                config.put("day", et.getConfigDay());
            } else if (StringUtils.compare(et.getConfigType(), "month") == 0) {
                config.put("month", et.getConfigMonth());
            } else if (StringUtils.compare(et.getConfigType(), "week") == 0) {
                config.put("week", et.getConfigWeek());
            }
            et.setConfig(config.toString());
        } else {
            et.setCycle(0);
            et.setConfig("");
        }

        if (!super.edit(et))
            return false;

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create(StaticDict.Action__object_type.TODO.getValue(), et.getId(), StaticDict.Action__type.EDITED.getValue(), "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Transactional
    public Todo assignTo(Todo et) {

        if (StringUtils.isBlank(et.getAssignedto())) {
            et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        }
        if (StringUtils.isBlank(et.getAssignedby())) {
            et.setAssignedby(AuthenticationUser.getAuthenticationUser().getUsername());
        }
        et.setAssigneddate(ZTDateUtil.now());

        this.internalUpdate(et);

        actionHelper.create(StaticDict.Action__object_type.TODO.getValue(), et.getId(), StaticDict.Action__type.ASSIGNED.getValue(),
                "", et.getAssignedto(), null, true);

        return et;
    }

    @Transactional
    public Todo activate(Todo et) {
        et = this.get(et.getId());

        if (StringUtils.compare(et.getStatus(), StaticDict.Todo__status.DONE.getValue()) == 0 || StringUtils.compare(et.getStatus(), StaticDict.Todo__status.CLOSED.getValue()) == 0) {
            et.setStatus(StaticDict.Todo__status.WAIT.getValue());
            this.internalUpdate(et);
            actionHelper.create(StaticDict.Action__object_type.TODO.getValue(), et.getId(), StaticDict.Action__type.ACTIVATED.getValue(),
                    "", "wait", null, true);
        }

        return et;
    }

    @Transactional
    public Todo close(Todo et) {
        et = this.get(et.getId());

        if (StringUtils.compare(et.getStatus(), StaticDict.Todo__status.DONE.getValue()) == 0) {
            et.setStatus(StaticDict.Todo__status.CLOSED.getValue());
            et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
            et.setCloseddate(ZTDateUtil.now());
            et.setAssignedto("closed");
            et.setAssigneddate(ZTDateUtil.now());
            this.internalUpdate(et);
            actionHelper.create(StaticDict.Action__object_type.TODO.getValue(), et.getId(), StaticDict.Action__type.CLOSED.getValue(),
                    "", "closed", null, true);
        }

        return et;
    }

    @Transactional
    public Todo finish(Todo et) {
        et = this.get(et.getId());

        if (StringUtils.compare(et.getStatus(), StaticDict.Todo__status.DONE.getValue()) != 0) {
            et.setStatus(StaticDict.Todo__status.DONE.getValue());
            et.setFinishedby(AuthenticationUser.getAuthenticationUser().getUsername());
            et.setFinisheddate(ZTDateUtil.now());
            this.internalUpdate(et);
            actionHelper.create(StaticDict.Action__object_type.TODO.getValue(), et.getId(), StaticDict.Action__type.FINISHED.getValue(),
                    "", "done", null, true);
        }

        return et;
    }

}
