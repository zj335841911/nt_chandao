package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.zentao.filter.ProductPlanSearchContext;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.ProductPlanServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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

    /**
     * 查询集合 默认查询
     */
    @Override
    public Page<ProductPlan> searchDefaultParent(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchDefaultParent(context.getPages(),context,context.getSelectCond());
        for (ProductPlan productPlan : pages.getRecords()) {
            ProductPlanSearchContext productPlanSearchContext = new ProductPlanSearchContext();
            productPlanSearchContext.setSelectCond(context.getSelectCond().clone());
            productPlanSearchContext.setN_parent_eq(productPlan.getId());
            productPlan.set("items", this.searchDefault(productPlanSearchContext).getContent());
        }
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}

