package cn.ibizlab.pms.core.ibizsysmodel.service.impl;

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
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSDEField;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSDEFieldSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSDEFieldService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import cn.ibizlab.pms.core.ibizsysmodel.client.PSDEFieldFeignClient;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;

/**
 * 实体[实体属性] 服务对象接口实现
 */
@Slf4j
@Service
public class PSDEFieldServiceImpl implements IPSDEFieldService {

//    @Autowired
    PSDEFieldFeignClient pSDEFieldFeignClient;
    
    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.serviceid:ibizpssysmodelapi-sysmodelapi}")
    private String serviceName;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.loginname:loginname}")
    private String loginname;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.password:password}")
    private String password;
    
    public PSDEFieldFeignClient getPSDEFieldFeignClient(String devSlnSysId) {
        return OutsideAccessorUtils.buildAccessor(SpringContextHolder.getApplicationContext(), PSDEFieldFeignClient.class, serviceName, false, serviceName, false, loginname, password,devSlnSysId);
    }


    @Override
    public boolean create(PSDEField et) {
        PSDEField rt = pSDEFieldFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }

    @Override
    public boolean create(String devSlnSysId,PSDEField et) {
        PSDEField rt = getPSDEFieldFeignClient(devSlnSysId).create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }

    public void createBatch(List<PSDEField> list){
        pSDEFieldFeignClient.createBatch(list) ;
    }

    public void createBatch(String devSlnSysId,List<PSDEField> list){
        getPSDEFieldFeignClient(devSlnSysId).createBatch(list) ;
    }

    @Override
    public boolean update(PSDEField et) {
        PSDEField rt = pSDEFieldFeignClient.update(et.getPsdefieldid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }

    @Override
    public boolean update(String devSlnSysId,PSDEField et) {
        PSDEField rt = getPSDEFieldFeignClient(devSlnSysId).update(et.getPsdefieldid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }

    public void updateBatch(List<PSDEField> list){
        pSDEFieldFeignClient.updateBatch(list) ;
    }

    public void updateBatch(String devSlnSysId,List<PSDEField> list){
        getPSDEFieldFeignClient(devSlnSysId).updateBatch(list) ;
    }

    @Override
    public boolean remove(String psdefieldid) {
        boolean result=pSDEFieldFeignClient.remove(psdefieldid) ;
        return result;
    }

    @Override
    public boolean remove(String devSlnSysId,String psdefieldid) {
        boolean result=getPSDEFieldFeignClient(devSlnSysId).remove(psdefieldid) ;
        return result;
    }

    public void removeBatch(Collection<String> idList){
        pSDEFieldFeignClient.removeBatch(idList);
    }

    public void removeBatch(String devSlnSysId,Collection<String> idList){
        getPSDEFieldFeignClient(devSlnSysId).removeBatch(idList);
    }

    @Override
    public PSDEField get(String psdefieldid) {
		PSDEField et=pSDEFieldFeignClient.get(psdefieldid);
        if(et==null){
            et=new PSDEField();
            et.setPsdefieldid(psdefieldid);
        }
        else{
        }
        return  et;
    }

    @Override
    public PSDEField get(String devSlnSysId,String psdefieldid) {
		PSDEField et=getPSDEFieldFeignClient(devSlnSysId).get(psdefieldid);
        if(et==null){
            et=new PSDEField();
            et.setPsdefieldid(psdefieldid);
        }
        else{
        }
        return  et;
    }

    @Override
    public PSDEField getDraft(PSDEField et) {
        et=pSDEFieldFeignClient.getDraft();
        return et;
    }

    @Override
    public PSDEField getDraft(String devSlnSysId,PSDEField et) {
        et=getPSDEFieldFeignClient(devSlnSysId).getDraft();
        return et;
    }

    @Override
    public boolean checkKey(PSDEField et) {
        return pSDEFieldFeignClient.checkKey(et);
    }

    @Override
    public boolean checkKey(String devSlnSysId,PSDEField et) {
        return getPSDEFieldFeignClient(devSlnSysId).checkKey(et);
    }

    @Override
    @Transactional
    public boolean save(PSDEField et) {
        if(et.getPsdefieldid()==null) et.setPsdefieldid((String)et.getDefaultKey(true));
        if(!pSDEFieldFeignClient.save(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean save(String devSlnSysId,PSDEField et) {
        if(et.getPsdefieldid()==null) et.setPsdefieldid((String)et.getDefaultKey(true));
        if(!getPSDEFieldFeignClient(devSlnSysId).save(et))
            return false;
        return true;
    }

    @Override
    public void saveBatch(List<PSDEField> list) {
        pSDEFieldFeignClient.saveBatch(list) ;
    }

    @Override
    public void saveBatch(String devSlnSysId,List<PSDEField> list) {
        getPSDEFieldFeignClient(devSlnSysId).saveBatch(list) ;
    }





    /**
     * 查询集合 数据集
     */
    @Override
    public Page<PSDEField> searchDefault(PSDEFieldSearchContext context) {
        Page<PSDEField> pSDEFields=pSDEFieldFeignClient.searchDefault(context);
        return pSDEFields;
    }

    @Override
    public Page<PSDEField> searchDefault(String devSlnSysId,PSDEFieldSearchContext context) {
        Page<PSDEField> pSDEFields=getPSDEFieldFeignClient(devSlnSysId).searchDefault(context);
        return pSDEFields;
    }



}



