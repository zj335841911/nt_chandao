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
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStoryModuleSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryModuleService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibizpro.mapper.IBZProStoryModuleMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[需求模块] 服务对象接口实现
 */
@Slf4j
@Service("IBZProStoryModuleServiceImpl")
public class IBZProStoryModuleServiceImpl extends ServiceImpl<IBZProStoryModuleMapper, IBZProStoryModule> implements IIBZProStoryModuleService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService ibzproproductService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IBZProStoryModule et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostorymoduleid()),et);
        return true;
    }

    @Override
    public void createBatch(List<IBZProStoryModule> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(IBZProStoryModule et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("ibzpro_storymoduleid",et.getIbzprostorymoduleid())))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostorymoduleid()),et);
        return true;
    }

    @Override
    public void updateBatch(List<IBZProStoryModule> list) {
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
    public IBZProStoryModule get(String key) {
        IBZProStoryModule et = getById(key);
        if(et==null){
            et=new IBZProStoryModule();
            et.setIbzprostorymoduleid(key);
        }
        else{
        }
        return et;
    }

    @Override
    public IBZProStoryModule getDraft(IBZProStoryModule et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(IBZProStoryModule et) {
        return (!ObjectUtils.isEmpty(et.getIbzprostorymoduleid()))&&(!Objects.isNull(this.getById(et.getIbzprostorymoduleid())));
    }
    @Override
    @Transactional
    public IBZProStoryModule push(IBZProStoryModule et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean save(IBZProStoryModule et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IBZProStoryModule et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<IBZProStoryModule> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<IBZProStoryModule> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<IBZProStoryModule> selectByProduct(String ibzpro_productid) {
        return baseMapper.selectByProduct(ibzpro_productid);
    }

    @Override
    public void removeByProduct(String ibzpro_productid) {
        this.remove(new QueryWrapper<IBZProStoryModule>().eq("product",ibzpro_productid));
    }

	@Override
    public List<IBZProStoryModule> selectByPmsstorymodule(BigInteger id) {
        return baseMapper.selectByPmsstorymodule(id);
    }

    @Override
    public void removeByPmsstorymodule(BigInteger id) {
        this.remove(new QueryWrapper<IBZProStoryModule>().eq("pmsstorymodule",id));
    }


    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBZProStoryModule> searchDefault(IBZProStoryModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBZProStoryModule> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IBZProStoryModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(IBZProStoryModule et){
        //实体关系[DER1N_IBZPRO_STORYMODULE_IBZPRO_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct ibzproProduct=et.getIbzproProduct();
            if(ObjectUtils.isEmpty(ibzproProduct)){
                cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct majorEntity=ibzproproductService.get(et.getProduct());
                et.setIbzproProduct(majorEntity);
                ibzproProduct=majorEntity;
            }
            et.setProductname(ibzproProduct.getIbzproProductname());
        }
        //实体关系[DER1N_IBZPRO_STORYMODULE_ZT_MODULE_PMSSTORYMODULE]
        if(!ObjectUtils.isEmpty(et.getPmsstorymodule())){
            cn.ibizlab.pms.core.zentao.domain.Module ztModule=et.getZtModule();
            if(ObjectUtils.isEmpty(ztModule)){
                cn.ibizlab.pms.core.zentao.domain.Module majorEntity=moduleService.get(et.getPmsstorymodule());
                et.setZtModule(majorEntity);
                ztModule=majorEntity;
            }
            et.setPmsstorymodulename(ztModule.getName());
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
    public List<IBZProStoryModule> getIbzprostorymoduleByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IBZProStoryModule> getIbzprostorymoduleByEntities(List<IBZProStoryModule> entities) {
        List ids =new ArrayList();
        for(IBZProStoryModule entity : entities){
            Serializable id=entity.getIbzprostorymoduleid();
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



