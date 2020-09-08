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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;
import cn.ibizlab.pms.core.ibiz.filter.ProjectTeamSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IProjectTeamService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.ProjectTeamMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[项目团队] 服务对象接口实现
 */
@Slf4j
@Service("ProjectTeamServiceImpl")
public class ProjectTeamServiceImpl extends ServiceImpl<ProjectTeamMapper, ProjectTeam> implements IProjectTeamService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.logic.IProjectTeamGetUserRoleLogic getuserroleLogic;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(ProjectTeam et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<ProjectTeam> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(ProjectTeam et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<ProjectTeam> list) {
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
    public ProjectTeam get(BigInteger key) {
        ProjectTeam et = getById(key);
        if(et==null){
            et=new ProjectTeam();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public ProjectTeam getDraft(ProjectTeam et) {
        return et;
    }

    @Override
    public boolean checkKey(ProjectTeam et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public ProjectTeam getUserRole(ProjectTeam et) {
        getuserroleLogic.execute(et);
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean save(ProjectTeam et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(ProjectTeam et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<ProjectTeam> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<ProjectTeam> list) {
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<ProjectTeam> selectByRoot(BigInteger id) {
        return baseMapper.selectByRoot(id);
    }

    @Override
    public void removeByRoot(BigInteger id) {
        this.remove(new QueryWrapper<ProjectTeam>().eq("root",id));
    }

    @Autowired
    @Lazy
    IProjectTeamService proxyService;
	@Override
    public void saveByRoot(BigInteger id,List<ProjectTeam> list) {
        if(list==null)
            return;
        Set<BigInteger> delIds=new HashSet<BigInteger>();
        List<ProjectTeam> _update=new ArrayList<ProjectTeam>();
        List<ProjectTeam> _create=new ArrayList<ProjectTeam>();
        for(ProjectTeam before:selectByRoot(id)){
            delIds.add(before.getId());
        }
        for(ProjectTeam sub:list) {
            sub.setRoot(id);
            if(ObjectUtils.isEmpty(sub.getId()))
                sub.setId((BigInteger)sub.getDefaultKey(true));
            if(delIds.contains(sub.getId())) {
                delIds.remove(sub.getId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0)
            proxyService.updateBatch(_update);
        if(_create.size()>0)
            proxyService.createBatch(_create);
        if(delIds.size()>0)
            proxyService.removeBatch(delIds);
	}


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<ProjectTeam> searchDefault(ProjectTeamSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProjectTeam> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProjectTeam>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 行编辑查询
     */
    @Override
    public Page<ProjectTeam> searchRowEditDefault(ProjectTeamSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProjectTeam> pages=baseMapper.searchRowEditDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProjectTeam>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



