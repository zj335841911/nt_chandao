package cn.ibizlab.pms.core.ibiz.service.impl;

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
import cn.ibizlab.pms.core.ibiz.domain.IbzFavorites;
import cn.ibizlab.pms.core.ibiz.filter.IbzFavoritesSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IIbzFavoritesService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.IbzFavoritesMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[收藏] 服务对象接口实现
 */
@Slf4j
@Service("IbzFavoritesServiceImpl")
public class IbzFavoritesServiceImpl extends ServiceImpl<IbzFavoritesMapper, IbzFavorites> implements IIbzFavoritesService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IbzFavorites et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getIbzfavoritesid()),et);
        return true;
    }

    @Override
    public void createBatch(List<IbzFavorites> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(IbzFavorites et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("ibz_favoritesid",et.getIbzfavoritesid())))
            return false;
        CachedBeanCopier.copy(get(et.getIbzfavoritesid()),et);
        return true;
    }

    @Override
    public void updateBatch(List<IbzFavorites> list) {
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
    public IbzFavorites get(String key) {
        IbzFavorites et = getById(key);
        if(et==null){
            et=new IbzFavorites();
            et.setIbzfavoritesid(key);
        }
        else{
        }
        return et;
    }

    @Override
    public IbzFavorites getDraft(IbzFavorites et) {
        return et;
    }

    @Override
    public boolean checkKey(IbzFavorites et) {
        return (!ObjectUtils.isEmpty(et.getIbzfavoritesid()))&&(!Objects.isNull(this.getById(et.getIbzfavoritesid())));
    }
    @Override
    @Transactional
    public boolean save(IbzFavorites et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IbzFavorites et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<IbzFavorites> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<IbzFavorites> list) {
        saveOrUpdateBatch(list,batchSize);
    }



    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IbzFavorites> searchDefault(IbzFavoritesSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzFavorites> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzFavorites>(pages.getRecords(), context.getPageable(), pages.getTotal());
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
    public List<IbzFavorites> getIbzfavoritesByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IbzFavorites> getIbzfavoritesByEntities(List<IbzFavorites> entities) {
        List ids =new ArrayList();
        for(IbzFavorites entity : entities){
            Serializable id=entity.getIbzfavoritesid();
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


