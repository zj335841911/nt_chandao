package cn.ibizlab.pms.util.ibizsysmodel.service.impl;

import cn.ibizlab.pms.util.ibizsysmodel.client.PSSysReqModuleFeignClient;
import cn.ibizlab.pms.util.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSSysReqModuleSearchContext;
import cn.ibizlab.pms.util.ibizsysmodel.service.IPSSysReqModuleService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * 实体[系统需求模块] 服务对象接口实现
 */
@Slf4j
@Service
public class PSSysReqModuleServiceImpl implements IPSSysReqModuleService {

//    @Autowired
    PSSysReqModuleFeignClient pSSysReqModuleFeignClient;
    
    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.serviceid:ibizpssysmodelapi-sysmodelapi}")
    private String serviceName;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.loginname:loginname}")
    private String loginname;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.password:password}")
    private String password;
    
    public PSSysReqModuleFeignClient getPSSysReqModuleFeignClient(String devSlnSysId) {
        return OutsideAccessorUtils.buildAccessor(SpringContextHolder.getApplicationContext(), PSSysReqModuleFeignClient.class, serviceName, false, serviceName, false, loginname, password,devSlnSysId);
    }


    @Override
    public boolean create(PSSysReqModule et) {
        PSSysReqModule rt = pSSysReqModuleFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }

    @Override
    public boolean create(String devSlnSysId,PSSysReqModule et) {
        PSSysReqModule rt = getPSSysReqModuleFeignClient(devSlnSysId).create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }

    public void createBatch(List<PSSysReqModule> list){
        pSSysReqModuleFeignClient.createBatch(list) ;
    }

    public void createBatch(String devSlnSysId,List<PSSysReqModule> list){
        getPSSysReqModuleFeignClient(devSlnSysId).createBatch(list) ;
    }

    @Override
    public boolean update(PSSysReqModule et) {
        PSSysReqModule rt = pSSysReqModuleFeignClient.update(et.getPssysreqmoduleid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }

    @Override
    public boolean update(String devSlnSysId,PSSysReqModule et) {
        PSSysReqModule rt = getPSSysReqModuleFeignClient(devSlnSysId).update(et.getPssysreqmoduleid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }

    public void updateBatch(List<PSSysReqModule> list){
        pSSysReqModuleFeignClient.updateBatch(list) ;
    }

    public void updateBatch(String devSlnSysId,List<PSSysReqModule> list){
        getPSSysReqModuleFeignClient(devSlnSysId).updateBatch(list) ;
    }

    @Override
    public boolean remove(String pssysreqmoduleid) {
        boolean result=pSSysReqModuleFeignClient.remove(pssysreqmoduleid) ;
        return result;
    }

    @Override
    public boolean remove(String devSlnSysId,String pssysreqmoduleid) {
        boolean result=getPSSysReqModuleFeignClient(devSlnSysId).remove(pssysreqmoduleid) ;
        return result;
    }

    public void removeBatch(Collection<String> idList){
        pSSysReqModuleFeignClient.removeBatch(idList);
    }

    public void removeBatch(String devSlnSysId,Collection<String> idList){
        getPSSysReqModuleFeignClient(devSlnSysId).removeBatch(idList);
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
    public PSSysReqModule get(String devSlnSysId,String pssysreqmoduleid) {
		PSSysReqModule et=getPSSysReqModuleFeignClient(devSlnSysId).get(pssysreqmoduleid);
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
    public PSSysReqModule getDraft(String devSlnSysId,PSSysReqModule et) {
        et=getPSSysReqModuleFeignClient(devSlnSysId).getDraft();
        return et;
    }

    @Override
    public boolean checkKey(PSSysReqModule et) {
        return pSSysReqModuleFeignClient.checkKey(et);
    }

    @Override
    public boolean checkKey(String devSlnSysId,PSSysReqModule et) {
        return getPSSysReqModuleFeignClient(devSlnSysId).checkKey(et);
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
    @Transactional
    public boolean save(String devSlnSysId,PSSysReqModule et) {
        if(et.getPssysreqmoduleid()==null) et.setPssysreqmoduleid((String)et.getDefaultKey(true));
        if(!getPSSysReqModuleFeignClient(devSlnSysId).save(et))
            return false;
        return true;
    }

    @Override
    public void saveBatch(List<PSSysReqModule> list) {
        pSSysReqModuleFeignClient.saveBatch(list) ;
    }

    @Override
    public void saveBatch(String devSlnSysId,List<PSSysReqModule> list) {
        getPSSysReqModuleFeignClient(devSlnSysId).saveBatch(list) ;
    }



	@Override
    public List<PSSysReqModule> selectByPpssysreqmoduleid(String pssysreqmoduleid) {
        PSSysReqModuleSearchContext context=new PSSysReqModuleSearchContext();
        context.setSize(Integer.MAX_VALUE);
        context.setN_ppssysreqmoduleid_eq(pssysreqmoduleid);
        return pSSysReqModuleFeignClient.searchDefault(context).getContent();
    }

    @Override
    public List<PSSysReqModule> selectByPpssysreqmoduleid(String devSlnSysId,String pssysreqmoduleid) {
        PSSysReqModuleSearchContext context=new PSSysReqModuleSearchContext();
        context.setSize(Integer.MAX_VALUE);
        context.setN_ppssysreqmoduleid_eq(pssysreqmoduleid);
        return getPSSysReqModuleFeignClient(devSlnSysId).searchDefault(context).getContent();
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

    @Override
    public void removeByPpssysreqmoduleid(String devSlnSysId,String pssysreqmoduleid) {
        Set<String> delIds=new HashSet<String>();
        for(PSSysReqModule before:selectByPpssysreqmoduleid(devSlnSysId,pssysreqmoduleid)){
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

    @Override
    public Page<PSSysReqModule> searchDefault(String devSlnSysId,PSSysReqModuleSearchContext context) {
        Page<PSSysReqModule> pSSysReqModules=getPSSysReqModuleFeignClient(devSlnSysId).searchDefault(context);
        return pSSysReqModules;
    }



}



