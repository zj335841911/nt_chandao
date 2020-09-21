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

import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysServiceAPI;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysServiceAPISearchContext;


/**
 * 实体[PSSysServiceAPI] 服务对象接口
 */
public interface IPSSysServiceAPIService{

    boolean create(PSSysServiceAPI et) ;
    void createBatch(List<PSSysServiceAPI> list) ;
    boolean update(PSSysServiceAPI et) ;
    void updateBatch(List<PSSysServiceAPI> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    PSSysServiceAPI get(String key) ;
    PSSysServiceAPI getDraft(PSSysServiceAPI et) ;
    boolean checkKey(PSSysServiceAPI et) ;
    boolean save(PSSysServiceAPI et) ;
    void saveBatch(List<PSSysServiceAPI> list) ;
    Page<PSSysServiceAPI> searchDefault(PSSysServiceAPISearchContext context) ;
    List<PSSysServiceAPI> selectByPsmoduleid(String psmoduleid) ;
    void removeByPsmoduleid(String psmoduleid) ;

    boolean create(String devSlnSysId , PSSysServiceAPI et) ;
    void createBatch(String devSlnSysId , List<PSSysServiceAPI> list) ;
    boolean update(String devSlnSysId , PSSysServiceAPI et) ;
    void updateBatch(String devSlnSysId , List<PSSysServiceAPI> list) ;
    boolean remove(String devSlnSysId , String key) ;
    void removeBatch(String devSlnSysId , Collection<String> idList) ;
    PSSysServiceAPI get(String devSlnSysId , String key) ;
    String getByCodeName(String devSlnSysId , String codeName) ;
    PSSysServiceAPI getDraft(String devSlnSysId , PSSysServiceAPI et) ;
    boolean checkKey(String devSlnSysId , PSSysServiceAPI et) ;
    boolean save(String devSlnSysId , PSSysServiceAPI et) ;
    void saveBatch(String devSlnSysId , List<PSSysServiceAPI> list) ;
    Page<PSSysServiceAPI> searchDefault(String devSlnSysId , PSSysServiceAPISearchContext context) ;
    List<PSSysServiceAPI> selectByPsmoduleid(String devSlnSysId , String psmoduleid) ;
    void removeByPsmoduleid(String devSlnSysId , String psmoduleid) ;

}



