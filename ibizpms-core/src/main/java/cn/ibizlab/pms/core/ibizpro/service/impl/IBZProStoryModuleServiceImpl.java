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


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IBZProStoryModule et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostorymoduleid()),et);
        return true;
    }

    @Override
    public void createBatch(List<IBZProStoryModule> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(IBZProStoryModule et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("ibzpro_storymoduleid",et.getIbzprostorymoduleid())))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostorymoduleid()),et);
        return true;
    }

    @Override
    public void updateBatch(List<IBZProStoryModule> list) {
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
        return et;
    }

    @Override
    public boolean checkKey(IBZProStoryModule et) {
        return (!ObjectUtils.isEmpty(et.getIbzprostorymoduleid()))&&(!Objects.isNull(this.getById(et.getIbzprostorymoduleid())));
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
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<IBZProStoryModule> list) {
        saveOrUpdateBatch(list,batchSize);
    }



    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBZProStoryModule> searchDefault(IBZProStoryModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBZProStoryModule> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IBZProStoryModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



