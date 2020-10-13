package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.mapper.TaskEstimateMapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Slf4j
public class TaskEstimateHelper extends ZTBaseHelper<TaskEstimateMapper, TaskEstimate> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    TaskHelper taskHelper;

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


    @Transactional
    public boolean edit(TaskEstimate et) {
        boolean bOk = false;
        bOk = super.create(et);
        if (!bOk)
            return bOk;

        //task 处理
        log.info("TaskEstimate 更新Task：未处理");

        actionHelper.create("task", et.getTask(), "EditEstimate", et.getWork(), "", null, true);

        return bOk;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        boolean bOk = false;
        TaskEstimate old = this.get(key);
        Task et = taskHelper.get(old.getTask());
        bOk = super.delete(key);


        //task 处理
        log.info("TaskEstimate 更新Task：未处理");

        actionHelper.create("task", et.getId(), "DeleteEstimate", "", "", null, true);
        if (!bOk)
            return bOk;

        return bOk;
    }
}
