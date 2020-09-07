package cn.ibizlab.pms.util.ibizsysmodel.service;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSDataEntity;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSDataEntitySearchContext;
import org.springframework.data.domain.Page;

import java.util.Collection;
import java.util.List;


/**
 * 实体[PSDataEntity] 服务对象接口
 */
public interface IPSDataEntityService{

    boolean create(PSDataEntity et) ;
    void createBatch(List<PSDataEntity> list) ;
    boolean update(PSDataEntity et) ;
    void updateBatch(List<PSDataEntity> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    PSDataEntity get(String key) ;
    PSDataEntity getDraft(PSDataEntity et) ;
    boolean checkKey(PSDataEntity et) ;
    boolean save(PSDataEntity et) ;
    void saveBatch(List<PSDataEntity> list) ;
    Page<PSDataEntity> searchDefault(PSDataEntitySearchContext context) ;
    List<PSDataEntity> selectByPsmoduleid(String psmoduleid) ;
    void removeByPsmoduleid(String psmoduleid) ;

    boolean create(String devSlnSysId, PSDataEntity et) ;
    void createBatch(String devSlnSysId, List<PSDataEntity> list) ;
    boolean update(String devSlnSysId, PSDataEntity et) ;
    void updateBatch(String devSlnSysId, List<PSDataEntity> list) ;
    boolean remove(String devSlnSysId, String key) ;
    void removeBatch(String devSlnSysId, Collection<String> idList) ;
    PSDataEntity get(String devSlnSysId, String key) ;
    PSDataEntity getDraft(String devSlnSysId, PSDataEntity et) ;
    boolean checkKey(String devSlnSysId, PSDataEntity et) ;
    boolean save(String devSlnSysId, PSDataEntity et) ;
    void saveBatch(String devSlnSysId, List<PSDataEntity> list) ;
    Page<PSDataEntity> searchDefault(String devSlnSysId, PSDataEntitySearchContext context) ;
    List<PSDataEntity> selectByPsmoduleid(String devSlnSysId, String psmoduleid) ;
    void removeByPsmoduleid(String devSlnSysId, String psmoduleid) ;

}



