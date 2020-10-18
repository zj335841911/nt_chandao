package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.filter.ProductPlanSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.ProductPlanMapper;
import cn.ibizlab.pms.core.zentao.service.IProductPlanService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class ProductPlanHelper extends ZTBaseHelper<ProductPlanMapper, ProductPlan> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    ProductHelper productHelper;

    @Autowired
    StoryHelper storyHelper;

    @Autowired
    IProductPlanService productPlanService;

    @Transactional
    public boolean create(ProductPlan et) {
        if(et.getParent() != null && et.getParent() > 0) {
            Long parent = et.getParent();
            ProductPlan productPlan = this.get(parent);
            et.setProduct(productPlan.getProduct());
            productPlan.setParent(-1l);
            this.edit(productPlan);
        }
        fileHelper.processImgURL(et, null, null);
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        fileHelper.updateObjectID(null, et.getId(), "product");

        //Action
        actionHelper.create("productplan", et.getId(), "opened", "", "", null, true);

        return true;
    }

    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(ProductPlan et) {
        ProductPlan old = new ProductPlan();
        CachedBeanCopier.copy(this.get(et.getId()), old);
        fileHelper.processImgURL(et, null, null);
        if (!this.internalUpdate(et))
            return false;
        fileHelper.updateObjectID(null, et.getId(), "productplan");

        List<History> changes = ChangeUtil.diff(old, et,null,new String[]{"begin","end","desc"},new String[]{"desc"});
        if (changes.size() > 0) {
            Action action = actionHelper.create("productplan", et.getId(), "edited", "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }


    @Override
    @Transactional
    public boolean delete(Long key) {
        boolean bOk = super.delete(key);

        changeParentField(key);


        return bOk;
    }
    public void changeParentField(Long key) {
        ProductPlan plan = this.get(key);
        if(plan == null && plan.getParent() <= 0) return;
        ProductPlanSearchContext planSearchContext = new ProductPlanSearchContext();
        planSearchContext.setN_parent_eq(plan.getParent());
        planSearchContext.setN_product_eq(plan.getProduct());
        long parent = productPlanService.searchDefault(planSearchContext).getContent().size() > 0 ? -1l : 0l;
        ProductPlan parentPlan = this.get(plan.getParent());
        if(parentPlan != null) {
            if(parentPlan.getDeleted().equals("0")) {
                parentPlan.setParent(parent);
                this.internalUpdate(parentPlan);
            }else {
                parentPlan.setParent(0l);
                this.internalUpdate(parentPlan);
            }
        }
    }

    @Transactional
    public ProductPlan linkStory(ProductPlan et) {
        Long productPlanId = et.getId();
        if (productPlanId == null) {
            if (et.get("productplan") == null)
                throw new RuntimeException("缺少计划");
            productPlanId = Long.parseLong(et.get("productplan").toString());
        }
        if(et.get("stories")==null)
            return et ;
        ProductPlan old  = this.get(productPlanId);

        Product product = productHelper.get(et.getProduct());
        String curOrder = old.getOrder();

        for (String storyId :  et.get("stories").toString().split(",")) {
            if (curOrder.contains(storyId))
                continue;
            curOrder += storyId + ",";
            Story story = new Story();
            story.setId(Long.parseLong(storyId));
            if (StringUtils.compare(product.getType(), "normal") == 0) {
                story.setPlan(String.valueOf(productPlanId));
            } else {
                story.setPlan(String.valueOf(productPlanId));

            }
            storyHelper.internalUpdate(story);
            actionHelper.create("story", Long.parseLong(storyId), "linked2plan", "", String.valueOf(productPlanId), null, true);
            storyHelper.setStage(story);
        }

        old.setOrder(curOrder);
        this.internalUpdate(old);
        return old;
    }


    @Transactional
    public ProductPlan unlinkStory(ProductPlan et) {

        return et;
//        throw new RuntimeException("未实现");
    }

    @Transactional
    public ProductPlan batchUnlinkStory(ProductPlan et) {

        throw new RuntimeException("未实现");
    }

    @Transactional
    public ProductPlan linkBug(ProductPlan et) {

        if(et.get("bugs")==null)
            return et ;

        for (String bugId :  et.get("bugs").toString().split(",")) {
            Bug bug = new Bug() ;
            bug.setId(Long.parseLong(bugId));
            bug.setPlan(et.getId());
            SpringContextHolder.getBean(BugHelper.class).internalUpdate(bug);
            actionHelper.create("bug", bug.getId(), "linked2plan", "", String.valueOf(et.getId()), null, true);
        }
        return et ;
    }

    @Transactional
    public ProductPlan unlinkBug(ProductPlan et) {
        if(et.get("bugs")==null)
            return et ;
        for (String bugId :  et.get("bugs").toString().split(",")) {
            Bug bug = new Bug() ;
            bug.setId(Long.parseLong(bugId));
            bug.setPlan(0l);
            SpringContextHolder.getBean(BugHelper.class).internalUpdate(bug);
            actionHelper.create("bug", bug.getId(), "unlinkedfromplan", "", String.valueOf(et.getId()), null, true);
        }
        return et ;
    }

    @Transactional
    public ProductPlan batchUnlinkBug(ProductPlan et) {

        throw new RuntimeException("未实现");
    }
}
