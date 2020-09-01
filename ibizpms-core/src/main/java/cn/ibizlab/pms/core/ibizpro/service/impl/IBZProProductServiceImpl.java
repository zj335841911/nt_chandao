package cn.ibizlab.pms.core.ibizpro.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProProductSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibizpro.mapper.IBZProProductMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[产品（开发系统）] 服务对象接口实现
 */
@Slf4j
@Service("IBZProProductServiceImpl")
public class IBZProProductServiceImpl extends ServiceImpl<IBZProProductMapper, IBZProProduct> implements IIBZProProductService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryModuleService ibzprostorymoduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryService ibzprostoryService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IBZProProduct et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getIbzproProductid()),et);
        return true;
    }

    @Override
    public void createBatch(List<IBZProProduct> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(IBZProProduct et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("ibzpro_productid",et.getIbzproProductid())))
            return false;
        CachedBeanCopier.copy(get(et.getIbzproProductid()),et);
        return true;
    }

    @Override
    public void updateBatch(List<IBZProProduct> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public boolean remove(String key) {
        boolean result=removeById(key);
        return result ;
    }

    @Override
    public void removeBatch(Collection<String> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public IBZProProduct get(String key) {
        IBZProProduct et = getById(key);
        if(et==null){
            et=new IBZProProduct();
            et.setIbzproProductid(key);
        }
        else{
        }
        return et;
    }

    @Override
    public IBZProProduct getDraft(IBZProProduct et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(IBZProProduct et) {
        return (!ObjectUtils.isEmpty(et.getIbzproProductid()))&&(!Objects.isNull(this.getById(et.getIbzproProductid())));
    }
    @Override
    @Transactional
    public boolean save(IBZProProduct et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IBZProProduct et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<IBZProProduct> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<IBZProProduct> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<IBZProProduct> selectByPmsproduct(BigInteger id) {
        return baseMapper.selectByPmsproduct(id);
    }

    @Override
    public void removeByPmsproduct(BigInteger id) {
        this.remove(new QueryWrapper<IBZProProduct>().eq("pmsproduct",id));
    }


    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBZProProduct> searchDefault(IBZProProductSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBZProProduct> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IBZProProduct>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(IBZProProduct et){
        //实体关系[DER1N_IBZPRO_PRODUCT_ZT_PRODUCT_PMSPRODUCT]
        if(!ObjectUtils.isEmpty(et.getPmsproduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztProduct=et.getZtProduct();
            if(ObjectUtils.isEmpty(ztProduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getPmsproduct());
                et.setZtProduct(majorEntity);
                ztProduct=majorEntity;
            }
            et.setProductname(ztProduct.getName());
        }
    }




    @Override
    public List<JSONObject> select(String sql, Map param){
        return this.baseMapper.selectBySQL(sql,param);
    }

    @Override
    @Transactional
    public boolean execute(String sql , Map param){
        if (sql == null || sql.isEmpty()) {
            return false;
        }
        if (sql.toLowerCase().trim().startsWith("insert")) {
            return this.baseMapper.insertBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("update")) {
            return this.baseMapper.updateBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("delete")) {
            return this.baseMapper.deleteBySQL(sql,param);
        }
        log.warn("暂未支持的SQL语法");
        return true;
    }

    @Override
    public List<IBZProProduct> getIbzproproductByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IBZProProduct> getIbzproproductByEntities(List<IBZProProduct> entities) {
        List ids =new ArrayList();
        for(IBZProProduct entity : entities){
            Serializable id=entity.getIbzproProductid();
            if(!ObjectUtils.isEmpty(id)){
                ids.add(id);
            }
        }
        if(ids.size()>0)
           return this.listByIds(ids);
        else
           return entities;
    }

}



