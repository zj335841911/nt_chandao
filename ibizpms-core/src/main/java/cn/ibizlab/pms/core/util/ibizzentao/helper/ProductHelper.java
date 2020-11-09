package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.mapper.ProductMapper;
import cn.ibizlab.pms.core.zentao.service.IProductService;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Component
public class ProductHelper extends ZTBaseHelper<ProductMapper, Product> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    DocLibHelper docLibHelper;

    @Autowired
    IProductService productService;

    String[] diffAttrs = {"desc"};

    @Transactional
    public boolean create(Product et) {

        // 校验产品名称和产品代号
        String sql = "select * from zt_product where `name` = #{et.name} or `code` = #{et.code}";
        Map<String,Object> param = new HashMap<>();
        param.put("name", et.getName());
        param.put("code", et.getCode());
        List<JSONObject> nameList = productService.select(sql,param);
        if(!nameList.isEmpty() && nameList.size() > 0) {
            throw new RuntimeException(String.format("[产品名称：%1$s]或[产品代号：%2$s]已经存在。如果您确定该记录已删除，请联系管理员恢复。", et.getName(), et.getCode()));
        }
        fileHelper.processImgURL(et, null, null);
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
//        fileHelper.updateObjectID(null, et.getId(), StaticDict.File__object_type.PRODUCT.getValue());

        //更新order
        et.setOrder(et.getId().intValue() * 5);
        internalUpdate(et);

        //DocLib
        DocLib docLib = new DocLib();
        docLib.setType(StaticDict.Doclib__type.PRODUCT.getValue());
        docLib.setProduct(et.getId());
        docLib.setName("产品主库");
        docLib.setMain(StaticDict.YesNo.ITEM_1.getValue());
        docLib.setAcl(StaticDict.Doclib__acl.DEFAULT.getValue());
        docLibHelper.create(docLib);

        //Action
        actionHelper.create(StaticDict.Action__object_type.PRODUCT.getValue(), et.getId(), StaticDict.Action__type.OPENED.getValue(), "", "", null, true);

        return true;
    }


    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(Product et) {
        // 校验产品名称和产品代号
        String sql = "select * from zt_product where (`name` = #{et.name} or `code` = #{et.code}) and `id` <> #{et.id}";
        Map<String,Object> param = new HashMap<>();
        param.put("name", et.getName());
        param.put("code", et.getCode());
        param.put("id", et.getId());
        List<JSONObject> nameList = productService.select(sql,param);
        if(!nameList.isEmpty() && nameList.size() > 0) {
            throw new RuntimeException(String.format("[产品名称：%1$s]或[产品代号：%2$s]已经存在。如果您确定该记录已删除，请联系管理员恢复。", et.getName(), et.getCode()));
        }
        Product old = new Product();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        fileHelper.processImgURL(et, null, null);
        if (!this.internalUpdate(et))
            return false;
//        fileHelper.updateObjectID(null, et.getId(), StaticDict.File__object_type.PRODUCT.getValue());

        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
        if (changes.size() > 0) {
            Action action = actionHelper.create(StaticDict.Action__object_type.PRODUCT.getValue(), et.getId(), StaticDict.Action__type.EDITED.getValue(), "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
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
        docLibHelper.remove(new QueryWrapper<DocLib>().eq("product", key));

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
        String comment = et.getComment();
        Product old = this.get(et.getId());

        et.setStatus(StaticDict.Product__status.CLOSED.getValue());
        this.internalUpdate(et);
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create(StaticDict.Action__object_type.PRODUCT.getValue(), et.getId(), StaticDict.Action__type.CLOSED.getValue(),
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }

        return et;
    }
}
