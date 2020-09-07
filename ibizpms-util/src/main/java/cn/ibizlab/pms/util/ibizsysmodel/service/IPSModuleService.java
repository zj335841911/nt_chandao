package cn.ibizlab.pms.util.ibizsysmodel.service;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSModule;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSModuleSearchContext;
import org.springframework.data.domain.Page;

import java.util.Collection;
import java.util.List;


/**
 * 实体[PSModule] 服务对象接口
 */
public interface IPSModuleService{

    boolean create(PSModule et) ;
    void createBatch(List<PSModule> list) ;
    boolean update(PSModule et) ;
    void updateBatch(List<PSModule> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    PSModule get(String key) ;
    PSModule getDraft(PSModule et) ;
    boolean checkKey(PSModule et) ;
    boolean save(PSModule et) ;
    void saveBatch(List<PSModule> list) ;
    Page<PSModule> searchDefault(PSModuleSearchContext context) ;

    boolean create(String devSlnSysId, PSModule et) ;
    void createBatch(String devSlnSysId, List<PSModule> list) ;
    boolean update(String devSlnSysId, PSModule et) ;
    void updateBatch(String devSlnSysId, List<PSModule> list) ;
    boolean remove(String devSlnSysId, String key) ;
    void removeBatch(String devSlnSysId, Collection<String> idList) ;
    PSModule get(String devSlnSysId, String key) ;
    PSModule getDraft(String devSlnSysId, PSModule et) ;
    boolean checkKey(String devSlnSysId, PSModule et) ;
    boolean save(String devSlnSysId, PSModule et) ;
    void saveBatch(String devSlnSysId, List<PSModule> list) ;
    Page<PSModule> searchDefault(String devSlnSysId, PSModuleSearchContext context) ;

}



