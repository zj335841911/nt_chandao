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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import cn.ibizlab.pms.core.ibiz.filter.ProductModuleSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IProductModuleService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.ProductModuleMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[需求模块] 服务对象接口实现
 */
@Slf4j
@Service("ProductModuleServiceImpl")
public class ProductModuleServiceImpl extends ServiceImpl<ProductModuleMapper, ProductModule> implements IProductModuleService {


    private cn.ibizlab.pms.core.ibiz.service.IProductModuleService productmoduleService = this;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IStoryService storyService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductService productService;

    private int batchSize = 500;

    @Override
    @Transactional
    public boolean update(ProductModule et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<ProductModule> list) {
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public ProductModule get(BigInteger key) {
        ProductModule et = getById(key);
        if(et==null){
            et=new ProductModule();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public boolean checkKey(ProductModule et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    public ProductModule getDraft(ProductModule et) {
        return et;
    }

    @Override
    @Transactional
    public boolean create(ProductModule et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<ProductModule> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean remove(BigInteger key) {
        boolean result=removeById(key);
        return result ;
    }

    @Override
    public void removeBatch(Collection<BigInteger> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public boolean save(ProductModule et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(ProductModule et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<ProductModule> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<ProductModule> list) {
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<ProductModule> selectByParent(BigInteger id) {
        return baseMapper.selectByParent(id);
    }

    @Override
    public void removeByParent(BigInteger id) {
        this.remove(new QueryWrapper<ProductModule>().eq("parent",id));
    }

	@Override
    public List<ProductModule> selectByRoot(BigInteger id) {
        return baseMapper.selectByRoot(id);
    }

    @Override
    public void removeByRoot(BigInteger id) {
        this.remove(new QueryWrapper<ProductModule>().eq("root",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<ProductModule> searchDefault(ProductModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductModule> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 根模块_无分支
     */
    @Override
    public Page<ProductModule> searchRoot_NoBranch(ProductModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductModule> pages=baseMapper.searchRoot_NoBranch(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 根模块
     */
    @Override
    public Page<ProductModule> searchRoot(ProductModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductModule> pages=baseMapper.searchRoot(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
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


}



