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
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStorySearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibizpro.mapper.IBZProStoryMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[需求] 服务对象接口实现
 */
@Slf4j
@Service("IBZProStoryServiceImpl")
public class IBZProStoryServiceImpl extends ServiceImpl<IBZProStoryMapper, IBZProStory> implements IIBZProStoryService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IBZProStory et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostoryid()),et);
        return true;
    }

    @Override
    public void createBatch(List<IBZProStory> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(IBZProStory et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("ibzpro_storyid",et.getIbzprostoryid())))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostoryid()),et);
        return true;
    }

    @Override
    public void updateBatch(List<IBZProStory> list) {
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
    public IBZProStory get(String key) {
        IBZProStory et = getById(key);
        if(et==null){
            et=new IBZProStory();
            et.setIbzprostoryid(key);
        }
        else{
        }
        return et;
    }

    @Override
    public IBZProStory getDraft(IBZProStory et) {
        return et;
    }

    @Override
    public boolean checkKey(IBZProStory et) {
        return (!ObjectUtils.isEmpty(et.getIbzprostoryid()))&&(!Objects.isNull(this.getById(et.getIbzprostoryid())));
    }
    @Override
    @Transactional
    public IBZProStory push(IBZProStory et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean save(IBZProStory et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IBZProStory et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<IBZProStory> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<IBZProStory> list) {
        saveOrUpdateBatch(list,batchSize);
    }



    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBZProStory> searchDefault(IBZProStorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBZProStory> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IBZProStory>(pages.getRecords(), context.getPageable(), pages.getTotal());
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
    public List<IBZProStory> getIbzprostoryByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IBZProStory> getIbzprostoryByEntities(List<IBZProStory> entities) {
        List ids =new ArrayList();
        for(IBZProStory entity : entities){
            Serializable id=entity.getIbzprostoryid();
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



