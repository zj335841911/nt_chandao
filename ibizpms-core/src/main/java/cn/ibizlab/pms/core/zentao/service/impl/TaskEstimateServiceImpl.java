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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.filter.TaskEstimateSearchContext;
import cn.ibizlab.pms.core.zentao.service.ITaskEstimateService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.TaskEstimateMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[任务预计] 服务对象接口实现
 */
@Slf4j
@Service("TaskEstimateServiceImpl")
public class TaskEstimateServiceImpl extends ServiceImpl<TaskEstimateMapper, TaskEstimate> implements ITaskEstimateService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITaskService taskService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(TaskEstimate et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<TaskEstimate> list) {
        this.saveBatch(list,batchSize);
    }

        @Override
    @Transactional
    public boolean update(TaskEstimate et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskEstimateHelper.edit(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "update"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void updateBatch(List<TaskEstimate> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        TaskEstimate et = this.get(key);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskEstimateHelper.delete(zentaoSid, (JSONObject) JSONObject.toJSON(et), rst);
        et.set("ztrst", rst);
        return bRst;
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
    public TaskEstimate get(Long key) {
        TaskEstimate et = getById(key);
        if(et==null){
            et=new TaskEstimate();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public TaskEstimate getDraft(TaskEstimate et) {
        return et;
    }

    @Override
    public boolean checkKey(TaskEstimate et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(TaskEstimate et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(TaskEstimate et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<TaskEstimate> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<TaskEstimate> list) {
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<TaskEstimate> selectByTask(Long id) {
        return baseMapper.selectByTask(id);
    }

    @Override
    public void removeByTask(Long id) {
        this.remove(new QueryWrapper<TaskEstimate>().eq("task",id));
    }

    @Autowired
    @Lazy
    ITaskEstimateService proxyService;
	@Override
    public void saveByTask(Long id,List<TaskEstimate> list) {
        if(list==null)
            return;
        Set<Long> delIds=new HashSet<Long>();
        List<TaskEstimate> _update=new ArrayList<TaskEstimate>();
        List<TaskEstimate> _create=new ArrayList<TaskEstimate>();
        for(TaskEstimate before:selectByTask(id)){
            delIds.add(before.getId());
        }
        for(TaskEstimate sub:list) {
            sub.setTask(id);
            if(ObjectUtils.isEmpty(sub.getId()))
                sub.setId((Long)sub.getDefaultKey(true));
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
    public Page<TaskEstimate> searchDefault(TaskEstimateSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TaskEstimate> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TaskEstimate>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT1
     */
    @Override
    public Page<TaskEstimate> searchDefaults(TaskEstimateSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TaskEstimate> pages=baseMapper.searchDefaults(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TaskEstimate>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



