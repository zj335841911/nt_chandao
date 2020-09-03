package cn.ibizlab.pms.util.ibizsysmodel.service;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSSysReqModuleSearchContext;
import org.springframework.data.domain.Page;

import java.util.Collection;
import java.util.List;


/**
 * 实体[PSSysReqModule] 服务对象接口
 */
public interface IPSSysReqModuleService{

    boolean create(PSSysReqModule et) ;
    void createBatch(List<PSSysReqModule> list) ;
    boolean update(PSSysReqModule et) ;
    void updateBatch(List<PSSysReqModule> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    PSSysReqModule get(String key) ;
    PSSysReqModule getDraft(PSSysReqModule et) ;
    boolean checkKey(PSSysReqModule et) ;
    boolean save(PSSysReqModule et) ;
    void saveBatch(List<PSSysReqModule> list) ;
    Page<PSSysReqModule> searchDefault(PSSysReqModuleSearchContext context) ;
    List<PSSysReqModule> selectByPpssysreqmoduleid(String pssysreqmoduleid) ;
    void removeByPpssysreqmoduleid(String pssysreqmoduleid) ;

    boolean create(String devSlnSysId, PSSysReqModule et) ;
    void createBatch(String devSlnSysId, List<PSSysReqModule> list) ;
    boolean update(String devSlnSysId, PSSysReqModule et) ;
    void updateBatch(String devSlnSysId, List<PSSysReqModule> list) ;
    boolean remove(String devSlnSysId, String key) ;
    void removeBatch(String devSlnSysId, Collection<String> idList) ;
    PSSysReqModule get(String devSlnSysId, String key) ;
    PSSysReqModule getDraft(String devSlnSysId, PSSysReqModule et) ;
    boolean checkKey(String devSlnSysId, PSSysReqModule et) ;
    boolean save(String devSlnSysId, PSSysReqModule et) ;
    void saveBatch(String devSlnSysId, List<PSSysReqModule> list) ;
    Page<PSSysReqModule> searchDefault(String devSlnSysId, PSSysReqModuleSearchContext context) ;
    List<PSSysReqModule> selectByPpssysreqmoduleid(String devSlnSysId, String pssysreqmoduleid) ;
    void removeByPpssysreqmoduleid(String devSlnSysId, String pssysreqmoduleid) ;

}



