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
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.filter.ProjectSearchContext;
import cn.ibizlab.pms.core.zentao.service.IProjectService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.ProjectMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[项目] 服务对象接口实现
 */
@Slf4j
@Service("ProjectServiceImpl")
public class ProjectServiceImpl extends ServiceImpl<ProjectMapper, Project> implements IProjectService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IBugStatsService bugstatsService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IEmpLoyeeloadService employeeloadService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IProjectModuleService projectmoduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IProjectTeamService projectteamService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IActionService actionService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBuildService buildService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBurnService burnService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IDocLibService doclibService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IDocService docService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectProductService projectproductService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectStoryService projectstoryService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITaskService taskService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestReportService testreportService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestTaskService testtaskService;

    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService = this;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectUpdate__MSDenyLogic update__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectRemove__MSDenyLogic remove__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectgetProjectProductPlanLogic getprojectproductplanLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectCancelProjectTopLogic cancelprojecttopLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectMobProjectCountLogic mobprojectcountLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectProjectTaskQCntLogic projecttaskqcntLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectProjectTopLogic projecttopLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IProjectUpdateOrder__MSDenyLogic updateorder__msdenyLogic;

    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).create(et);
    }

    @Override
    public void createBatch(List<Project> list) {

    }
        @Override
    @Transactional
    public boolean update(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<Project> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).delete(key);
    }

    @Override
    public void removeBatch(Collection<Long> idList){
        if (idList != null && !idList.isEmpty()) {
            for (Long id : idList) {
                this.remove(id);
            }
        }
    }
    @Override
    @Transactional
    public Project get(Long key) {
        Project tempET = new Project();
        tempET.set("id", key);
        Project et = getById(key);
        if (et == null) {
            et = new Project();
            et.setId(key);
        }
        else {
            et.setProjectteam(projectteamService.selectByRoot(key));
        }
        getprojectproductplanLogic.execute(et);
        return et;
    }

    @Override
    public Project getDraft(Project et) {
        fillParentData(et);
        return et;
    }

        @Override
    @Transactional
    public Project activate(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).activate(et);
    }

        @Override
    @Transactional
    public Project batchUnlinkStory(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).batchUnlinkStory(et);
    }

    @Override
    @Transactional
    public Project cancelProjectTop(Project et) {
        cancelprojecttopLogic.execute(et);
         return et;
    }

    @Override
    public boolean checkKey(Project et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
        @Override
    @Transactional
    public Project close(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).close(et);
    }

        @Override
    @Transactional
    public Project linkStory(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).linkStory(et);
    }

        @Override
    @Transactional
    public Project manageMembers(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).manageMembers(et);
    }

    @Override
    @Transactional
    public Project mobProjectCount(Project et) {
        mobprojectcountLogic.execute(et);
         return et;
    }

    @Override
    @Transactional
    public Project projectTaskQCnt(Project et) {
        projecttaskqcntLogic.execute(et);
         return et;
    }

    @Override
    @Transactional
    public Project projectTop(Project et) {
        projecttopLogic.execute(et);
         return et;
    }

        @Override
    @Transactional
    public Project putoff(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).putoff(et);
    }

    @Override
    @Transactional
    public boolean save(Project et) {
        if (!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(Project et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<Project> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list, batchSize);
        return true;
    }

    @Override
    @Transactional
    public void saveBatch(List<Project> list) {
        list.forEach(item -> fillParentData(item));
        saveOrUpdateBatch(list, batchSize);
    }

        @Override
    @Transactional
    public Project start(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).start(et);
    }

        @Override
    @Transactional
    public Project suspend(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).suspend(et);
    }

        @Override
    @Transactional
    public Project unlinkMember(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).unlinkMember(et);
    }

        @Override
    @Transactional
    public Project unlinkStory(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).unlinkStory(et);
    }

        @Override
    @Transactional
    public Project updateOrder(Project et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).updateOrder(et);
    }


    @Override
    public List<Project> selectByParent(Long id) {
        return baseMapper.selectByParent(id);
    }
    @Override
    public void removeByParent(Long id) {
        this.remove(new QueryWrapper<Project>().eq("parent", id));
    }


    /**
     * 查询集合 BugProject
     */
    @Override
    public Page<Project> searchBugProject(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchBugProject(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 当前项目
     */
    @Override
    public Page<Project> searchCurProduct(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchCurProduct(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 当前用户项目
     */
    @Override
    public Page<Project> searchCurUser(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchCurUser(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Project> searchDefault(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchDefault(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 参与项目(年度总结)
     */
    @Override
    public Page<Project> searchInvolvedProject(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchInvolvedProject(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 参与项目完成需求任务bug
     */
    @Override
    public Page<Project> searchInvolvedProject_StoryTaskBug(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchInvolvedProject_StoryTaskBug(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的项目
     */
    @Override
    public Page<Project> searchMyProject(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchMyProject(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目团队
     */
    @Override
    public Page<Project> searchProjectTeam(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchProjectTeam(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 需求影响项目
     */
    @Override
    public Page<Project> searchStoryProject(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchStoryProject(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 未完成项目
     */
    @Override
    public Page<Project> searchUnDoneProject(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchUnDoneProject(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Project et){
        //实体关系[DER1N__ZT_PROJECT__ZT_PROJECT__PARENT]
        if (!ObjectUtils.isEmpty(et.getParent())) {
            cn.ibizlab.pms.core.zentao.domain.Project ibizparent=et.getIbizparent();
            if (ObjectUtils.isEmpty(ibizparent)) {
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getParent());
                et.setIbizparent(majorEntity);
                ibizparent = majorEntity;
            }
            et.setParentname(ibizparent.getName());
        }
    }




    @Override
    public List<JSONObject> select(String sql, Map param) {
        return this.baseMapper.selectBySQL(sql, param);
    }

    @Override
    @Transactional
    public boolean execute(String sql, Map param) {
        if (sql == null || sql.isEmpty()) {
            return false;
        }
        if (sql.toLowerCase().trim().startsWith("insert")) {
            return this.baseMapper.insertBySQL(sql, param);
        }
        if (sql.toLowerCase().trim().startsWith("update")) {
            return this.baseMapper.updateBySQL(sql, param);
        }
        if (sql.toLowerCase().trim().startsWith("delete")) {
            return this.baseMapper.deleteBySQL(sql, param);
        }
        log.warn("暂未支持的SQL语法");
        return true;
    }

    @Override
    public List<Project> getProjectByIds(List<Long> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<Project> getProjectByEntities(List<Project> entities) {
        List ids =new ArrayList();
        for(Project entity : entities){
            Serializable id=entity.getId();
            if (!ObjectUtils.isEmpty(id)) {
                ids.add(id);
            }
        }
        if (ids.size() > 0) {
            return this.listByIds(ids);
        }
        else {
            return entities;
        }
    }




}



