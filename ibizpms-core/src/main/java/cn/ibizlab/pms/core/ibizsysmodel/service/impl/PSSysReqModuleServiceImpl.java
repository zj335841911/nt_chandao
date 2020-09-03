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
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysReqModuleSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysReqModuleService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import cn.ibizlab.pms.core.ibizsysmodel.client.PSSysReqModuleFeignClient;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;

/**
 * 实体[系统需求模块] 服务对象接口实现
 */
@Slf4j
@Service
public class PSSysReqModuleServiceImpl implements IPSSysReqModuleService {

//    @Autowired
    PSSysReqModuleFeignClient pSSysReqModuleFeignClient;
    
    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi:ibizpssysmodelapi-sysmodelapi}")
    private String serviceName;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.loginname:labadmin}")
    private String loginname;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.password:labadmin@2018}")
    private String password;
    
    public PSSysReqModuleServiceImpl(){
        pSSysReqModuleFeignClient = OutsideAccessorUtils.buildAccessor(SpringContextHolder.getApplicationContext(), PSSysReqModuleFeignClient.class, serviceName, false, serviceName, false, loginname, password);
    }


    @Override
    public boolean create(PSSysReqModule et) {
        PSSysReqModule rt = pSSysReqModuleFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }

    public void createBatch(List<PSSysReqModule> list){
        pSSysReqModuleFeignClient.createBatch(list) ;
    }

    @Override
    public boolean update(PSSysReqModule et) {
        PSSysReqModule rt = pSSysReqModuleFeignClient.update(et.getPssysreqmoduleid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }

    public void updateBatch(List<PSSysReqModule> list){
        pSSysReqModuleFeignClient.updateBatch(list) ;
    }

    @Override
    public boolean remove(String pssysreqmoduleid) {
        boolean result=pSSysReqModuleFeignClient.remove(pssysreqmoduleid) ;
        return result;
    }

    public void removeBatch(Collection<String> idList){
        pSSysReqModuleFeignClient.removeBatch(idList);
    }

    @Override
    public PSSysReqModule get(String pssysreqmoduleid) {
		PSSysReqModule et=pSSysReqModuleFeignClient.get(pssysreqmoduleid);
        if(et==null){
            et=new PSSysReqModule();
            et.setPssysreqmoduleid(pssysreqmoduleid);
        }
        else{
        }
        return  et;
    }

    @Override
    public PSSysReqModule getDraft(PSSysReqModule et) {
        et=pSSysReqModuleFeignClient.getDraft();
        return et;
    }

    @Override
    public boolean checkKey(PSSysReqModule et) {
        return pSSysReqModuleFeignClient.checkKey(et);
    }
    @Override
    @Transactional
    public boolean save(PSSysReqModule et) {
        if(et.getPssysreqmoduleid()==null) et.setPssysreqmoduleid((String)et.getDefaultKey(true));
        if(!pSSysReqModuleFeignClient.save(et))
            return false;
        return true;
    }

    @Override
    public void saveBatch(List<PSSysReqModule> list) {
        pSSysReqModuleFeignClient.saveBatch(list) ;
    }



	@Override
    public List<PSSysReqModule> selectByPpssysreqmoduleid(String pssysreqmoduleid) {
        PSSysReqModuleSearchContext context=new PSSysReqModuleSearchContext();
        context.setSize(Integer.MAX_VALUE);
        context.setN_ppssysreqmoduleid_eq(pssysreqmoduleid);
        return pSSysReqModuleFeignClient.searchDefault(context).getContent();
    }

    @Override
    public void removeByPpssysreqmoduleid(String pssysreqmoduleid) {
        Set<String> delIds=new HashSet<String>();
        for(PSSysReqModule before:selectByPpssysreqmoduleid(pssysreqmoduleid)){
            delIds.add(before.getPssysreqmoduleid());
        }
        if(delIds.size()>0)
            this.removeBatch(delIds);
    }



    /**
     * 查询集合 数据集
     */
    @Override
    public Page<PSSysReqModule> searchDefault(PSSysReqModuleSearchContext context) {
        Page<PSSysReqModule> pSSysReqModules=pSSysReqModuleFeignClient.searchDefault(context);
        return pSSysReqModules;
    }



}



