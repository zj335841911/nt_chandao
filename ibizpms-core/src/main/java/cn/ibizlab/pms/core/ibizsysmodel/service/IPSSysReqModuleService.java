package cn.ibizlab.pms.core.ibizsysmodel.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysReqModuleSearchContext;


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

    boolean create(String devSlnSysId , PSSysReqModule et) ;
    void createBatch(String devSlnSysId , List<PSSysReqModule> list) ;
    boolean update(String devSlnSysId , PSSysReqModule et) ;
    void updateBatch(String devSlnSysId , List<PSSysReqModule> list) ;
    boolean remove(String devSlnSysId , String key) ;
    void removeBatch(String devSlnSysId , Collection<String> idList) ;
    PSSysReqModule get(String devSlnSysId , String key) ;
    String getByCodeName(String devSlnSysId , String codeName) ;
    PSSysReqModule getDraft(String devSlnSysId , PSSysReqModule et) ;
    boolean checkKey(String devSlnSysId , PSSysReqModule et) ;
    boolean save(String devSlnSysId , PSSysReqModule et) ;
    void saveBatch(String devSlnSysId , List<PSSysReqModule> list) ;
    Page<PSSysReqModule> searchDefault(String devSlnSysId , PSSysReqModuleSearchContext context) ;
    List<PSSysReqModule> selectByPpssysreqmoduleid(String devSlnSysId , String pssysreqmoduleid) ;
    void removeByPpssysreqmoduleid(String devSlnSysId , String pssysreqmoduleid) ;

}



