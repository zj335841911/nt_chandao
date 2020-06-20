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
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.filter.ProjectSearchContext;
import cn.ibizlab.pms.core.zentao.service.IProjectService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.ProjectMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
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
    private cn.ibizlab.pms.core.ibiz.service.IProjectModuleService projectmoduleService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IActionService actionService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBuildService buildService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBurnService burnService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocLibService doclibService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocService docService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectProductService projectproductService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectStoryService projectstoryService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITaskService taskService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestReportService testreportService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestTaskService testtaskService;

    private cn.ibizlab.pms.core.zentao.service.IProjectService projectService = this;

    private int batchSize = 500;

    @Override
    @Transactional
    public Project close(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.close((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return et;
    }

    @Override
    @Transactional
    public Project suspend(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.suspend((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return et;
    }

    @Override
    @Transactional
    public Project putoff(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.putoff((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return et;
    }

    @Override
    public boolean checkKey(Project et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(Project et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Project et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Project> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Project> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.edit((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return bRst;
    }

    @Override
    public void updateBatch(List<Project> list) {

    }
    @Override
    @Transactional
    public Project activate(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.activate((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return et;
    }

    @Override
    @Transactional
    public Project get(BigInteger key) {
        Project et = getById(key);
        if(et==null){
            et=new Project();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    @Transactional
    public Project updateOrder(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.updateOrder((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return et;
    }

    @Override
    @Transactional
    public Project start(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.start((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return et;
    }

    @Override
    @Transactional
    public boolean create(Project et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.create((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
	    return bRst;
    }

    @Override
    public void createBatch(List<Project> list) {

    }
!!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${srfjavatype(keyfield.stdDataType)}  [in template "TEMPLCODE_zh_CN" at line 3, column 27]
----
    @Override
    public Project getDraft(Project et) {
        fillParentData(et);
        return et;
    }


	@Override
    public List<Project> selectByParent(BigInteger id) {
        return baseMapper.selectByParent(id);
    }

    @Override
    public void removeByParent(BigInteger id) {
        this.remove(new QueryWrapper<Project>().eq("parent",id));
    }


    /**
     * 查询集合 当前项目
     */
    @Override
    public Page<Project> searchCurProduct(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchCurProduct(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Project> searchDefault(ProjectSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Project> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Project>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Project et){
        //实体关系[DER1N__ZT_PROJECT__ZT_PROJECT__PARENT]
        if(!ObjectUtils.isEmpty(et.getParent())){
            cn.ibizlab.pms.core.zentao.domain.Project ibizparent=et.getIbizparent();
            if(ObjectUtils.isEmpty(ibizparent)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getParent());
                et.setIbizparent(majorEntity);
                ibizparent=majorEntity;
            }
            et.setParentname(ibizparent.getName());
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



