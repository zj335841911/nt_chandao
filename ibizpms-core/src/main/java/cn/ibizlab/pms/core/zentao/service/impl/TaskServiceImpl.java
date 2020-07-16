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
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;
import cn.ibizlab.pms.core.zentao.service.ITaskService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.TaskMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[任务] 服务对象接口实现
 */
@Slf4j
@Service("TaskServiceImpl")
public class TaskServiceImpl extends ServiceImpl<TaskMapper, Task> implements ITaskService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.ITaskTeamService taskteamService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBurnService burnService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITaskEstimateService taskestimateService;

    protected cn.ibizlab.pms.core.zentao.service.ITaskService taskService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IProjectModuleService projectmoduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStoryService storyService;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskUpdate__MSDenyLogic update__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskUpdateTemp__MSDenyLogic updatetemp__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskUpdateTempMajor__MSDenyLogic updatetempmajor__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskRemove__MSDenyLogic remove__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskRemoveTemp__MSDenyLogic removetemp__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskRemoveTempMajor__MSDenyLogic removetempmajor__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskGet__MSDenyLogic get__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskActivate__MSDenyLogic activate__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskAssignTo__MSDenyLogic assignto__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskClose__MSDenyLogic close__msdenyLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.ITaskSave__MSDenyLogic save__msdenyLogic;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.create((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void createBatch(List<Task> list) {

    }
    @Override
    @Transactional
    public boolean update(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.edit((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void updateBatch(List<Task> list) {

    }
    @Override
    @Transactional
    public boolean remove(BigInteger key) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        Task et = this.get(key);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.delete((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void removeBatch(Collection<BigInteger> idList){
        if (idList != null && !idList.isEmpty()) {
            for (BigInteger id : idList) {
                this.remove(id);
            }
        }
    }
    @Override
    @Transactional
    public Task get(BigInteger key) {
        Task tempET=new Task();
        tempET.set("id",key);
        Task et = getById(key);
        if(et==null){
            et=new Task();
            et.setId(key);
        }
        else{
            et.setTaskteam(taskteamService.selectByRoot(key));
        }
        return et;
    }

    @Override
    public Task getDraft(Task et) {
        fillParentData(et);
        return et;
    }

    @Override
    @Transactional
    public Task activate(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.activate((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task assignTo(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.assignTo((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task cancel(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.cancel((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    public boolean checkKey(Task et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public Task close(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.close((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task deleteEstimate(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.deleteEstimate((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task editEstimate(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.editEstimate((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task finish(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.finish((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task pause(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.pause((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task recordEstimate(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.recordEstimate((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Task restart(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.restart((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public boolean save(Task et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Task et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Task> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Task> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public Task start(Task et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.start((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }


	@Override
    public List<Task> selectByModule(BigInteger id) {
        return baseMapper.selectByModule(id);
    }

    @Override
    public void removeByModule(BigInteger id) {
        this.remove(new QueryWrapper<Task>().eq("module",id));
    }

	@Override
    public List<Task> selectByFrombug(BigInteger id) {
        return baseMapper.selectByFrombug(id);
    }

    @Override
    public void removeByFrombug(BigInteger id) {
        this.remove(new QueryWrapper<Task>().eq("frombug",id));
    }

	@Override
    public List<Task> selectByProject(BigInteger id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(BigInteger id) {
        this.remove(new QueryWrapper<Task>().eq("project",id));
    }

	@Override
    public List<Task> selectByStory(BigInteger id) {
        return baseMapper.selectByStory(id);
    }

    @Override
    public void removeByStory(BigInteger id) {
        this.remove(new QueryWrapper<Task>().eq("story",id));
    }

	@Override
    public List<Task> selectByParent(BigInteger id) {
        return baseMapper.selectByParent(id);
    }

    @Override
    public void removeByParent(BigInteger id) {
        this.remove(new QueryWrapper<Task>().eq("parent",id));
    }


    /**
     * 查询集合 通过模块查询
     */
    @Override
    public Page<Task> searchByModule(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchByModule(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Task> searchDefault(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 根任务
     */
    @Override
    public Page<Task> searchRootTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchRootTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 任务类型分组
     */
    @Override
    public Page<HashMap> searchTypeGroup(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<HashMap> pages=baseMapper.searchTypeGroup(context.getPages(),context,context.getSelectCond());
        return new PageImpl<HashMap>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Task et){
        //实体关系[DER1N_ZT_TASK_IBZ_PROJECTMODULE_MODULE]
        if(!ObjectUtils.isEmpty(et.getModule())){
            cn.ibizlab.pms.core.ibiz.domain.ProjectModule projectmodule=et.getProjectmodule();
            if(ObjectUtils.isEmpty(projectmodule)){
                cn.ibizlab.pms.core.ibiz.domain.ProjectModule majorEntity=projectmoduleService.get(et.getModule());
                et.setProjectmodule(majorEntity);
                projectmodule=majorEntity;
            }
            et.setModulename(projectmodule.getName());
            et.setPath(projectmodule.getPath());
        }
        //实体关系[DER1N_ZT_TASK_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if(ObjectUtils.isEmpty(ztproject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject=majorEntity;
            }
            et.setProjectname(ztproject.getName());
        }
        //实体关系[DER1N_ZT_TASK_ZT_STORY_STORY]
        if(!ObjectUtils.isEmpty(et.getStory())){
            cn.ibizlab.pms.core.zentao.domain.Story ztstory=et.getZtstory();
            if(ObjectUtils.isEmpty(ztstory)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getStory());
                et.setZtstory(majorEntity);
                ztstory=majorEntity;
            }
            et.setStoryname(ztstory.getTitle());
            et.setProduct(ztstory.getProduct());
            et.setStoryversion(ztstory.getVersion());
            et.setProductname(ztstory.getProductname());
        }
        //实体关系[DER1N__ZT_TASK__ZT_TASK__PARENT]
        if(!ObjectUtils.isEmpty(et.getParent())){
            cn.ibizlab.pms.core.zentao.domain.Task ztparent=et.getZtparent();
            if(ObjectUtils.isEmpty(ztparent)){
                cn.ibizlab.pms.core.zentao.domain.Task majorEntity=taskService.get(et.getParent());
                et.setZtparent(majorEntity);
                ztparent=majorEntity;
            }
            et.setParentname(ztparent.getName());
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


