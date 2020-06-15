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
import cn.ibizlab.pms.core.zentao.domain.Build;
import cn.ibizlab.pms.core.zentao.filter.BuildSearchContext;
import cn.ibizlab.pms.core.zentao.service.IBuildService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.BuildMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[版本] 服务对象接口实现
 */
@Slf4j
@Service("BuildServiceImpl")
public class BuildServiceImpl extends ServiceImpl<BuildMapper, Build> implements IBuildService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IReleaseService releaseService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestTaskService testtaskService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    private int batchSize = 500;

    @Override
    public boolean checkKey(Build et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(Build et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Build et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Build> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Build> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public Build get(BigInteger key) {
        Build et = getById(key);
        if(et==null){
            et=new Build();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public Build getDraft(Build et) {
        return et;
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
    public boolean create(Build et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Build> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(Build et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Build> list) {
        updateBatchById(list,batchSize);
    }


	@Override
    public List<Build> selectByBranch(BigInteger id) {
        return baseMapper.selectByBranch(id);
    }

    @Override
    public void removeByBranch(BigInteger id) {
        this.remove(new QueryWrapper<Build>().eq("branch",id));
    }

	@Override
    public List<Build> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<Build>().eq("product",id));
    }

	@Override
    public List<Build> selectByProject(BigInteger id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(BigInteger id) {
        this.remove(new QueryWrapper<Build>().eq("project",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Build> searchDefault(BuildSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



