package cn.ibizlab.pms.core.zentao.service.impl;

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
import cn.ibizlab.pms.core.zentao.domain.Module;
import cn.ibizlab.pms.core.zentao.filter.ModuleSearchContext;
import cn.ibizlab.pms.core.zentao.service.IModuleService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.ModuleMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[模块] 服务对象接口实现
 */
@Slf4j
@Service("ModuleServiceImpl")
public class ModuleServiceImpl extends ServiceImpl<ModuleMapper, Module> implements IModuleService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ICaseService caseService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocService docService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductService productService;

    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleService = this;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBranchService branchService;

    private int batchSize = 500;

    @Override
    public Module getDraft(Module et) {
        return et;
    }

    @Override
    @Transactional
    public boolean create(Module et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Module> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public Module get(BigInteger key) {
        Module et = getById(key);
        if(et==null){
            et=new Module();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    @Transactional
    public boolean update(Module et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Module> list) {
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public boolean save(Module et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Module et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Module> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Module> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    public boolean checkKey(Module et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
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
    public List<Module> selectByBranch(BigInteger id) {
        return baseMapper.selectByBranch(id);
    }

    @Override
    public void removeByBranch(BigInteger id) {
        this.remove(new QueryWrapper<Module>().eq("branch",id));
    }

	@Override
    public List<Module> selectByParent(BigInteger id) {
        return baseMapper.selectByParent(id);
    }

    @Override
    public void removeByParent(BigInteger id) {
        this.remove(new QueryWrapper<Module>().eq("parent",id));
    }


    /**
     * 查询集合 产品线
     */
    @Override
    public Page<Module> searchLine(ModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Module> pages=baseMapper.searchLine(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Module>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 需求模块
     */
    @Override
    public Page<Module> searchStoryModule(ModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Module> pages=baseMapper.searchStoryModule(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Module>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Module> searchDefault(ModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Module> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Module>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 文档目录
     */
    @Override
    public Page<Module> searchDocModule(ModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Module> pages=baseMapper.searchDocModule(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Module>(pages.getRecords(), context.getPageable(), pages.getTotal());
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


