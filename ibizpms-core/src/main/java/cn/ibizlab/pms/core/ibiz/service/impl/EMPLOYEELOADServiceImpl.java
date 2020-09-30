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
import cn.ibizlab.pms.core.ibiz.domain.EMPLOYEELOAD;
import cn.ibizlab.pms.core.ibiz.filter.EMPLOYEELOADSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IEMPLOYEELOADService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.EMPLOYEELOADMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[员工负载表] 服务对象接口实现
 */
@Slf4j
@Service("EMPLOYEELOADServiceImpl")
public class EMPLOYEELOADServiceImpl extends ServiceImpl<EMPLOYEELOADMapper, EMPLOYEELOAD> implements IEMPLOYEELOADService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(EMPLOYEELOAD et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<EMPLOYEELOAD> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(EMPLOYEELOAD et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<EMPLOYEELOAD> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public boolean remove(Long key) {
        boolean result=removeById(key);
        return result ;
    }

    @Override
    public void removeBatch(Collection<Long> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public EMPLOYEELOAD get(Long key) {
        EMPLOYEELOAD et = getById(key);
        if(et==null){
            et=new EMPLOYEELOAD();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public EMPLOYEELOAD getDraft(EMPLOYEELOAD et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(EMPLOYEELOAD et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(EMPLOYEELOAD et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(EMPLOYEELOAD et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<EMPLOYEELOAD> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<EMPLOYEELOAD> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<EMPLOYEELOAD> selectByProject(Long id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(Long id) {
        this.remove(new QueryWrapper<EMPLOYEELOAD>().eq("project",id));
    }


    /**
     * 查询集合 数据集
     */
    @Override
    public Page<EMPLOYEELOAD> searchDefault(EMPLOYEELOADSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<EMPLOYEELOAD> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<EMPLOYEELOAD>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 获取员工负载表
     */
    @Override
    public Page<EMPLOYEELOAD> searchGETWOERKLOAD(EMPLOYEELOADSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<EMPLOYEELOAD> pages=baseMapper.searchGETWOERKLOAD(context.getPages(),context,context.getSelectCond());
        return new PageImpl<EMPLOYEELOAD>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(EMPLOYEELOAD et){
        //实体关系[DER1N_IBZ_EMPLOYEELOAD_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if(ObjectUtils.isEmpty(ztproject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject=majorEntity;
            }
            et.setProjectname(ztproject.getName());
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



