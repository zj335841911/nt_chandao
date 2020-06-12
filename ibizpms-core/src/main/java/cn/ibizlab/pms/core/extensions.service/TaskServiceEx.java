package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.TaskServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Task;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

/**
 * 实体[任务] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TaskServiceEx")
public class TaskServiceEx extends TaskServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[CalcTime]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task calcTime(Task et) {
        return et;
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task close(Task et) {
        return et;
    }
    /**
     * 自定义行为[Pause]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task pause(Task et) {
        return et;
    }
    /**
     * 自定义行为[Start]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task start(Task et) {
        return et;
    }
    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task assignTo(Task et) {
        return et;
    }
    /**
     * 自定义行为[Cancel]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task cancel(Task et) {
        return et;
    }
    /**
     * 自定义行为[DeleteEstimate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task deleteEstimate(Task et) {
        return et;
    }
    /**
     * 自定义行为[Restart]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task restart(Task et) {
        return et;
    }
    /**
     * 自定义行为[EditEstimate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task editEstimate(Task et) {
        return et;
    }
    /**
     * 自定义行为[RecordEstimate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task recordEstimate(Task et) {
        return et;
    }
    /**
     * 自定义行为[Finish]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task finish(Task et) {
        return et;
    }
    /**
     * 自定义行为[Activate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task activate(Task et) {
        return et;
    }
}


