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
import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.filter.ProjectProductSearchContext;
import cn.ibizlab.pms.core.zentao.service.IProjectProductService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.ProjectProductMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[项目产品] 服务对象接口实现
 */
@Slf4j
@Service("ProjectProductServiceImpl")
public class ProjectProductServiceImpl extends ServiceImpl<ProjectProductMapper, ProjectProduct> implements IProjectProductService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductPlanService productplanService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    private int batchSize = 500;

    @Override
    public ProjectProduct getDraft(ProjectProduct et) {
        return et;
    }

    @Override
    @Transactional
    public boolean save(ProjectProduct et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(ProjectProduct et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<ProjectProduct> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<ProjectProduct> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    public boolean checkKey(ProjectProduct et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }

    @Override
    @Transactional
    public ProjectProduct get(String key) {
        ProjectProduct et = getById(key);
        if(et==null){
            et=new ProjectProduct();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    @Transactional
    public boolean create(ProjectProduct et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<ProjectProduct> list) {
        this.saveBatch(list,batchSize);
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
    public boolean update(ProjectProduct et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<ProjectProduct> list) {
        updateBatchById(list,batchSize);
    }


	@Override
    public List<ProjectProduct> selectByBranch(BigInteger id) {
        return baseMapper.selectByBranch(id);
    }

    @Override
    public void removeByBranch(BigInteger id) {
        this.remove(new QueryWrapper<ProjectProduct>().eq("branch",id));
    }

	@Override
    public List<ProjectProduct> selectByPlan(BigInteger id) {
        return baseMapper.selectByPlan(id);
    }

    @Override
    public void removeByPlan(BigInteger id) {
        this.remove(new QueryWrapper<ProjectProduct>().eq("plan",id));
    }

	@Override
    public List<ProjectProduct> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<ProjectProduct>().eq("product",id));
    }

	@Override
    public List<ProjectProduct> selectByProject(BigInteger id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(BigInteger id) {
        this.remove(new QueryWrapper<ProjectProduct>().eq("project",id));
    }


    /**
     * 查询集合 关联计划
     */
    @Override
    public Page<ProjectProduct> searchRelationPlan(ProjectProductSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProjectProduct> pages=baseMapper.searchRelationPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProjectProduct>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<ProjectProduct> searchDefault(ProjectProductSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProjectProduct> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProjectProduct>(pages.getRecords(), context.getPageable(), pages.getTotal());
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


