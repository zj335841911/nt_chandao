package cn.ibizlab.pms.core.ou.service.impl;

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
import cn.ibizlab.pms.core.ou.domain.SysDepartment;
import cn.ibizlab.pms.core.ou.filter.SysDepartmentSearchContext;
import cn.ibizlab.pms.core.ou.service.ISysDepartmentService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import cn.ibizlab.pms.core.ou.client.SysDepartmentFeignClient;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;
import org.apache.commons.lang3.StringUtils;

/**
 * 实体[部门] 服务对象接口实现
 */
@Slf4j
@Service
public class SysDepartmentServiceImpl implements ISysDepartmentService {

    @Autowired
    SysDepartmentFeignClient sysDepartmentFeignClient;
    


    @Override
    public boolean create(SysDepartment et) {
        SysDepartment rt = sysDepartmentFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }


    public void createBatch(List<SysDepartment> list){
        sysDepartmentFeignClient.createBatch(list) ;
    }


    @Override
    public boolean update(SysDepartment et) {
        SysDepartment rt = sysDepartmentFeignClient.update(et.getDeptid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }


    public void updateBatch(List<SysDepartment> list){
        sysDepartmentFeignClient.updateBatch(list) ;
    }


    @Override
    public boolean remove(String deptid) {
        boolean result=sysDepartmentFeignClient.remove(deptid) ;
        return result;
    }


    public void removeBatch(Collection<String> idList){
        sysDepartmentFeignClient.removeBatch(idList);
    }


    @Override
    public SysDepartment get(String deptid) {
		SysDepartment et=sysDepartmentFeignClient.get(deptid);
        if(et==null){
            et=new SysDepartment();
            et.setDeptid(deptid);
        }
        else{
        }
        return  et;
    }


    @Override
    public SysDepartment getDraft(SysDepartment et) {
        et=sysDepartmentFeignClient.getDraft();
        return et;
    }


    @Override
    public boolean checkKey(SysDepartment et) {
        return sysDepartmentFeignClient.checkKey(et);
    }


    @Override
    @Transactional
    public boolean save(SysDepartment et) {
        if(et.getDeptid()==null) et.setDeptid((String)et.getDefaultKey(true));
        if(!sysDepartmentFeignClient.save(et))
            return false;
        return true;
    }


    @Override
    public void saveBatch(List<SysDepartment> list) {
        sysDepartmentFeignClient.saveBatch(list) ;
    }






    /**
     * 查询集合 数据集
     */
    @Override
    public Page<SysDepartment> searchDefault(SysDepartmentSearchContext context) {
        Page<SysDepartment> sysDepartments=sysDepartmentFeignClient.searchDefault(context);
        return sysDepartments;
    }




}



