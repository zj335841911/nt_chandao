package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.ZTBaseHelper;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.core.zentao.mapper.ProductPlanMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class ProductPlanHelper extends ZTBaseHelper<ProductPlanMapper, ProductPlan> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Transactional
    public boolean create(ProductPlan et) {
        fileHelper.processImgURL(et,null,null);
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        fileHelper.updateObjectID(null,et.getId(),"product");

        //Action
        actionHelper.create("productplan",et.getId(),"opened","","", null,true);

        return true;
    }

    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(ProductPlan et) {
        ProductPlan old = this.get(et.getId());

        fileHelper.processImgURL(et,null,null);
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        fileHelper.updateObjectID(null,et.getId(),"productplan");

        List<History> changes = ChangeUtil.diff(old,et) ;
        if(changes.size()>0){
            Action action = actionHelper.create("productplan",et.getId(),"edited","","",null,true);
            actionHelper.logHistory(action.getId(),changes);
        }
        return true;
    }



}
