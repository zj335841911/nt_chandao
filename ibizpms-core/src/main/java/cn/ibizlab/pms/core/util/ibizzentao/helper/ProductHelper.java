package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.ZTBaseHelper;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.mapper.ProductMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Component
public class ProductHelper extends ZTBaseHelper<ProductMapper, Product> {

    @Autowired
    ActionHelper actionHelper ;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    DocLibHelper docLibHelper;

    @Transactional
    public boolean create(Product et) {

        fileHelper.processImgURL(et,null,null);
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        fileHelper.updateObjectID(null,et.getId(),"product");

        //更新order
        et.setOrder(et.getId().intValue()*5);
        internalUpdate(et) ;

        //DocLib
        DocLib docLib = new DocLib();
        docLib.setType("product");
        docLib.setProduct(et.getId());
        docLib.setName("产品主库");
        docLib.setMain(1);
        docLib.setAcl("default");
        docLibHelper.create(docLib);

        //Action
        actionHelper.create("product",et.getId(),"opened","","",null,true);

        return true;
    }


    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(Product et) {
        Product old = this.get(et.getId());

        fileHelper.processImgURL(et,null,null);
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        fileHelper.updateObjectID(null,et.getId(),"product");

        List<History> changes = ChangeUtil.diff(old,et) ;
        if(changes.size()>0){
            Action action = actionHelper.create("product",et.getId(),"edited","","",null,true);
            actionHelper.logHistory(action.getId(),changes);
        }
        return true;
    }

    /**
     * delete 删除
     *
     * @param key
     * @return
     */
    @Transactional
    public boolean delete(Long key) {
        boolean result = removeById(key);

        //删除doclib
        docLibHelper.remove(new QueryWrapper<DocLib>().eq("product",key));

        return result;
    }

    /**
     * close 关闭
     *
     * @param et
     * @return
     */
    @Transactional
    public Product close(Product et) {
        Product old = this.get(et.getId());

        et.setStatus("closed");
        this.internalUpdate(et);
        List<History> changes = ChangeUtil.diff(old,et);
        if(StringUtils.isNotBlank(et.getComment()) || changes.size()>0){
            Action action = actionHelper.create("product",et.getId(),"closed",StringUtils.isNotBlank(et.getComment())?et.getComment():"","", null,true);
            actionHelper.logHistory(action.getId(),changes);
        }

        return et;
    }
}
