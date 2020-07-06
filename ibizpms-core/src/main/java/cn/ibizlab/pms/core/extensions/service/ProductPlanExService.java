package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.ProductPlanServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[产品计划] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProductPlanExService")
public class ProductPlanExService extends ProductPlanServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[BatchUnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductPlan batchUnlinkBug(ProductPlan et) {
        return super.batchUnlinkBug(et);
    }
    /**
     * 自定义行为[BatchUnlinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductPlan batchUnlinkStory(ProductPlan et) {
        return super.batchUnlinkStory(et);
    }
    /**
     * 自定义行为[LinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductPlan linkBug(ProductPlan et) {
        return super.linkBug(et);
    }
    /**
     * 自定义行为[LinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductPlan linkStory(ProductPlan et) {
        return super.linkStory(et);
    }
    /**
     * 自定义行为[UnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductPlan unlinkBug(ProductPlan et) {
        return super.unlinkBug(et);
    }
    /**
     * 自定义行为[UnlinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductPlan unlinkStory(ProductPlan et) {
        return super.unlinkStory(et);
    }
}

