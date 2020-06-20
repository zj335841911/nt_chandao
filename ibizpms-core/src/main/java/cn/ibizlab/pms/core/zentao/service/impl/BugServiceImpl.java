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
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.filter.BugSearchContext;
import cn.ibizlab.pms.core.zentao.service.IBugService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.BugMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[Bug] 服务对象接口实现
 */
@Slf4j
@Service("BugServiceImpl")
public class BugServiceImpl extends ServiceImpl<BugMapper, Bug> implements IBugService {


    private cn.ibizlab.pms.core.zentao.service.IBugService bugService = this;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ICaseService caseService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IStoryService storyService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITaskService taskService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IEntryService entryService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductPlanService productplanService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectService projectService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IRepoService repoService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestTaskService testtaskService;

    private int batchSize = 500;

    @Override
    @Transactional
    public Bug get(BigInteger key) {
        Bug et = getById(key);
        if(et==null){
            et=new Bug();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public Bug getDraft(Bug et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(Bug et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(Bug et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Bug et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Bug> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Bug> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean create(Bug et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Bug> list) {
        list.forEach(item->fillParentData(item));
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
    public boolean update(Bug et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Bug> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
    }


	@Override
    public List<Bug> selectByBranch(BigInteger id) {
        return baseMapper.selectByBranch(id);
    }

    @Override
    public void removeByBranch(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("branch",id));
    }

	@Override
    public List<Bug> selectByDuplicatebug(BigInteger id) {
        return baseMapper.selectByDuplicatebug(id);
    }

    @Override
    public void removeByDuplicatebug(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("duplicatebug",id));
    }

	@Override
    public List<Bug> selectByIbizcase(BigInteger id) {
        return baseMapper.selectByIbizcase(id);
    }

    @Override
    public void removeByIbizcase(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("case",id));
    }

	@Override
    public List<Bug> selectByEntry(BigInteger id) {
        return baseMapper.selectByEntry(id);
    }

    @Override
    public void removeByEntry(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("entry",id));
    }

	@Override
    public List<Bug> selectByModule(BigInteger id) {
        return baseMapper.selectByModule(id);
    }

    @Override
    public void removeByModule(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("module",id));
    }

	@Override
    public List<Bug> selectByPlan(BigInteger id) {
        return baseMapper.selectByPlan(id);
    }

    @Override
    public void removeByPlan(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("plan",id));
    }

	@Override
    public List<Bug> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("product",id));
    }

	@Override
    public List<Bug> selectByProject(BigInteger id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("project",id));
    }

	@Override
    public List<Bug> selectByRepo(BigInteger id) {
        return baseMapper.selectByRepo(id);
    }

    @Override
    public void removeByRepo(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("repo",id));
    }

	@Override
    public List<Bug> selectByStory(BigInteger id) {
        return baseMapper.selectByStory(id);
    }

    @Override
    public void removeByStory(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("story",id));
    }

	@Override
    public List<Bug> selectByTostory(BigInteger id) {
        return baseMapper.selectByTostory(id);
    }

    @Override
    public void removeByTostory(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("tostory",id));
    }

	@Override
    public List<Bug> selectByTask(BigInteger id) {
        return baseMapper.selectByTask(id);
    }

    @Override
    public void removeByTask(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("task",id));
    }

	@Override
    public List<Bug> selectByTotask(BigInteger id) {
        return baseMapper.selectByTotask(id);
    }

    @Override
    public void removeByTotask(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("totask",id));
    }

	@Override
    public List<Bug> selectByTesttask(BigInteger id) {
        return baseMapper.selectByTesttask(id);
    }

    @Override
    public void removeByTesttask(BigInteger id) {
        this.remove(new QueryWrapper<Bug>().eq("testtask",id));
    }


    /**
     * 查询集合 发布关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchReleaseBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchReleaseBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 版本关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchBuildOpenBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildOpenBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 发布关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchReleaseLeftBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchReleaseLeftBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 版本关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchBuildBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Bug> searchDefault(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Bug et){
        //实体关系[DER1N_ZT_BUG_ZT_CASE_CASEID]
        if(!ObjectUtils.isEmpty(et.getIbizcase())){
            cn.ibizlab.pms.core.zentao.domain.Case ztcase=et.getZtcase();
            if(ObjectUtils.isEmpty(ztcase)){
                cn.ibizlab.pms.core.zentao.domain.Case majorEntity=caseService.get(et.getIbizcase());
                et.setZtcase(majorEntity);
                ztcase=majorEntity;
            }
            et.setCaseversion(ztcase.getVersion());
        }
        //实体关系[DER1N_ZT_BUG_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
        }
        //实体关系[DER1N_ZT_BUG_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if(ObjectUtils.isEmpty(ztproject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject=majorEntity;
            }
            et.setProjectname(ztproject.getName());
        }
        //实体关系[DER1N_ZT_BUG_ZT_REPO_REPO]
        if(!ObjectUtils.isEmpty(et.getRepo())){
            cn.ibizlab.pms.core.zentao.domain.Repo ztrepo=et.getZtrepo();
            if(ObjectUtils.isEmpty(ztrepo)){
                cn.ibizlab.pms.core.zentao.domain.Repo majorEntity=repoService.get(et.getRepo());
                et.setZtrepo(majorEntity);
                ztrepo=majorEntity;
            }
            et.setRepotype(ztrepo.getScm());
        }
        //实体关系[DER1N_ZT_BUG_ZT_STORY_STORY]
        if(!ObjectUtils.isEmpty(et.getStory())){
            cn.ibizlab.pms.core.zentao.domain.Story ztstory=et.getZtstory();
            if(ObjectUtils.isEmpty(ztstory)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getStory());
                et.setZtstory(majorEntity);
                ztstory=majorEntity;
            }
            et.setStoryname(ztstory.getTitle());
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



