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

import cn.ibizlab.pms.core.ibizsysmodel.domain.PSDEField;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSDEFieldSearchContext;


/**
 * 实体[PSDEField] 服务对象接口
 */
public interface IPSDEFieldService{

    boolean create(PSDEField et) ;
    void createBatch(List<PSDEField> list) ;
    boolean update(PSDEField et) ;
    void updateBatch(List<PSDEField> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    PSDEField get(String key) ;
    PSDEField getDraft(PSDEField et) ;
    boolean checkKey(PSDEField et) ;
    boolean save(PSDEField et) ;
    void saveBatch(List<PSDEField> list) ;
    Page<PSDEField> searchDefault(PSDEFieldSearchContext context) ;

    boolean create(String devSlnSysId , PSDEField et) ;
    void createBatch(String devSlnSysId , List<PSDEField> list) ;
    boolean update(String devSlnSysId , PSDEField et) ;
    void updateBatch(String devSlnSysId , List<PSDEField> list) ;
    boolean remove(String devSlnSysId , String key) ;
    void removeBatch(String devSlnSysId , Collection<String> idList) ;
    PSDEField get(String devSlnSysId , String key) ;
    PSDEField getDraft(String devSlnSysId , PSDEField et) ;
    boolean checkKey(String devSlnSysId , PSDEField et) ;
    boolean save(String devSlnSysId , PSDEField et) ;
    void saveBatch(String devSlnSysId , List<PSDEField> list) ;
    Page<PSDEField> searchDefault(String devSlnSysId , PSDEFieldSearchContext context) ;

}



