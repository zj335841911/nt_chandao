package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.StoryServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Story;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

/**
 * 实体[需求] 自定义服务对象
 */
@Slf4j
@Primary
@Service("StoryServiceEx")
public class StoryServiceEx extends StoryServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[BatchChangeStage]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeStage(Story et) {
        return et;
    }
    /**
     * 自定义行为[BatchChangePlan]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangePlan(Story et) {
        return et;
    }
    /**
     * 自定义行为[BatchClose]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchClose(Story et) {
        return et;
    }
    /**
     * 自定义行为[Change]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story change(Story et) {
        return et;
    }
    /**
     * 自定义行为[BatchChangeBranch]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeBranch(Story et) {
        return et;
    }
    /**
     * 自定义行为[BatchReview]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchReview(Story et) {
        return et;
    }
    /**
     * 自定义行为[Review]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story review(Story et) {
        return et;
    }
    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story assignTo(Story et) {
        return et;
    }
    /**
     * 自定义行为[BatchAssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchAssignTo(Story et) {
        return et;
    }
    /**
     * 自定义行为[BatchChangeModule]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeModule(Story et) {
        return et;
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story close(Story et) {
        return et;
    }
}


