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
import io.seata.spring.annotation.GlobalTransactional;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.ibiz.domain.TestModule;
import cn.ibizlab.pms.core.ibiz.filter.TestModuleSearchContext;
import cn.ibizlab.pms.core.ibiz.service.ITestModuleService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.TestModuleMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[测试模块] 服务对象接口实现
 */
@Slf4j
@Service("TestModuleServiceImpl")
public class TestModuleServiceImpl extends ServiceImpl<TestModuleMapper, TestModule> implements ITestModuleService {


    protected cn.ibizlab.pms.core.ibiz.service.ITestModuleService testmoduleService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.logic.ITestModuleFixPathLogic fixpathLogic;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(TestModule et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        fixpathLogic.execute(et);
        return true;
    }

    @Override
    public void createBatch(List<TestModule> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(TestModule et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        fixpathLogic.execute(et);
        return true;
    }

    @Override
    public void updateBatch(List<TestModule> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
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
    public TestModule get(BigInteger key) {
        TestModule et = getById(key);
        if(et==null){
            et=new TestModule();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public TestModule getDraft(TestModule et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(TestModule et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public TestModule fix(TestModule et) {
        fixpathLogic.execute(et);
         return et ;
    }

    @Override
    @Transactional
    public boolean save(TestModule et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(TestModule et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<TestModule> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<TestModule> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<TestModule> selectByParent(BigInteger id) {
        return baseMapper.selectByParent(id);
    }

    @Override
    public void removeByParent(BigInteger id) {
        this.remove(new QueryWrapper<TestModule>().eq("parent",id));
    }

	@Override
    public List<TestModule> selectByRoot(BigInteger id) {
        return baseMapper.selectByRoot(id);
    }

    @Override
    public void removeByRoot(BigInteger id) {
        this.remove(new QueryWrapper<TestModule>().eq("root",id));
    }


    /**
     * 查询集合 BYPATH
     */
    @Override
    public Page<TestModule> searchByPath(TestModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestModule> pages=baseMapper.searchByPath(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<TestModule> searchDefault(TestModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestModule> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 根模块
     */
    @Override
    public Page<TestModule> searchRoot(TestModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestModule> pages=baseMapper.searchRoot(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 根模块_无分支
     */
    @Override
    public Page<TestModule> searchRoot_NoBranch(TestModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestModule> pages=baseMapper.searchRoot_NoBranch(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 TestModule
     */
    @Override
    public Page<TestModule> searchTestModule(TestModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestModule> pages=baseMapper.searchTestModule(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(TestModule et){
        //实体关系[DER1N_IBZ_TESTMODULE_IBZ_TESTMODULE_PARENT]
        if(!ObjectUtils.isEmpty(et.getParent())){
            cn.ibizlab.pms.core.ibiz.domain.TestModule parentmodule=et.getParentmodule();
            if(ObjectUtils.isEmpty(parentmodule)){
                cn.ibizlab.pms.core.ibiz.domain.TestModule majorEntity=testmoduleService.get(et.getParent());
                et.setParentmodule(majorEntity);
                parentmodule=majorEntity;
            }
            et.setParentname(parentmodule.getName());
        }
        //实体关系[DER1N_IBZ_TESTMODULE_ZT_PRODUCT_ROOT]
        if(!ObjectUtils.isEmpty(et.getRoot())){
            cn.ibizlab.pms.core.zentao.domain.Product roottest=et.getRoottest();
            if(ObjectUtils.isEmpty(roottest)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getRoot());
                et.setRoottest(majorEntity);
                roottest=majorEntity;
            }
            et.setRootname(roottest.getName());
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


}



