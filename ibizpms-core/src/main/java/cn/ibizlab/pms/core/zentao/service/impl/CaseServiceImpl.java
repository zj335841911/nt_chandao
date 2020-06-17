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
import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.filter.CaseSearchContext;
import cn.ibizlab.pms.core.zentao.service.ICaseService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.CaseMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[测试用例] 服务对象接口实现
 */
@Slf4j
@Service("CaseServiceImpl")
public class CaseServiceImpl extends ServiceImpl<CaseMapper, Case> implements ICaseService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ICaseStepService casestepService;

    private cn.ibizlab.pms.core.zentao.service.ICaseService caseService = this;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ISuiteCaseService suitecaseService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestResultService testresultService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestRunService testrunService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IStoryService storyService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestSuiteService testsuiteService;

    private int batchSize = 500;

    @Override
    public Case getDraft(Case et) {
        return et;
    }

    @Override
    @Transactional
    public boolean save(Case et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Case et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Case> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Case> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean create(Case et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        casestepService.saveByIbizcase(et.getId(),et.getCasestep());
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Case> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    public boolean checkKey(Case et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean remove(BigInteger key) {
        casestepService.removeByIbizcase(key) ;
        boolean result=removeById(key);
        return result ;
    }

    @Override
    public void removeBatch(Collection<BigInteger> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public Case get(BigInteger key) {
        Case et = getById(key);
        if(et==null){
            et=new Case();
            et.setId(key);
        }
        else{
            et.setCasestep(casestepService.selectByIbizcase(key));
        }
        return et;
    }

    @Override
    @Transactional
    public boolean update(Case et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        casestepService.saveByIbizcase(et.getId(),et.getCasestep());
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Case> list) {
        updateBatchById(list,batchSize);
    }


	@Override
    public List<Case> selectByBranch(BigInteger id) {
        return baseMapper.selectByBranch(id);
    }

    @Override
    public void removeByBranch(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("branch",id));
    }

	@Override
    public List<Case> selectByFrombug(BigInteger id) {
        return baseMapper.selectByFrombug(id);
    }

    @Override
    public void removeByFrombug(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("frombug",id));
    }

	@Override
    public List<Case> selectByFromcaseid(BigInteger id) {
        return baseMapper.selectByFromcaseid(id);
    }

    @Override
    public void removeByFromcaseid(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("fromcaseid",id));
    }

	@Override
    public List<Case> selectByModule(BigInteger id) {
        return baseMapper.selectByModule(id);
    }

    @Override
    public void removeByModule(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("module",id));
    }

	@Override
    public List<Case> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("product",id));
    }

	@Override
    public List<Case> selectByStory(BigInteger id) {
        return baseMapper.selectByStory(id);
    }

    @Override
    public void removeByStory(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("story",id));
    }

	@Override
    public List<Case> selectByLib(BigInteger id) {
        return baseMapper.selectByLib(id);
    }

    @Override
    public void removeByLib(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("lib",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Case> searchDefault(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



