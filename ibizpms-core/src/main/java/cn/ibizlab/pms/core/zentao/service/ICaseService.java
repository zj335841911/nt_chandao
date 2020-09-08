package cn.ibizlab.pms.core.zentao.service;

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
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.filter.CaseSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Case] 服务对象接口
 */
public interface ICaseService extends IService<Case>{

    boolean create(Case et) ;
    void createBatch(List<Case> list) ;
    boolean update(Case et) ;
    void updateBatch(List<Case> list) ;
    boolean remove(Long key) ;
    void removeBatch(Collection<Long> idList) ;
    Case get(Long key) ;
    Case getDraft(Case et) ;
    boolean checkKey(Case et) ;
    Case confirmChange(Case et) ;
    Case confirmstorychange(Case et) ;
    Case getByTestTask(Case et) ;
    Case linkCase(Case et) ;
    Case runCase(Case et) ;
    Case runCases(Case et) ;
    boolean save(Case et) ;
    void saveBatch(List<Case> list) ;
    Case testRunCase(Case et) ;
    Case testRunCases(Case et) ;
    Case testsuitelinkCase(Case et) ;
    Case unlinkCase(Case et) ;
    Case unlinkCases(Case et) ;
    Case unlinkSuiteCase(Case et) ;
    Case unlinkSuiteCases(Case et) ;
    Page<Case> searchBatchNew(CaseSearchContext context) ;
    Page<Case> searchCurSuite(CaseSearchContext context) ;
    Page<Case> searchCurTestTask(CaseSearchContext context) ;
    Page<Case> searchDefault(CaseSearchContext context) ;
    Page<Case> searchNotCurTestSuite(CaseSearchContext context) ;
    Page<Case> searchNotCurTestTask(CaseSearchContext context) ;
    List<Case> selectByBranch(Long id) ;
    void removeByBranch(Long id) ;
    List<Case> selectByFrombug(Long id) ;
    void removeByFrombug(Long id) ;
    List<Case> selectByFromcaseid(Long id) ;
    void removeByFromcaseid(Long id) ;
    List<Case> selectByModule(Long id) ;
    void removeByModule(Long id) ;
    List<Case> selectByProduct(Long id) ;
    void removeByProduct(Long id) ;
    List<Case> selectByStory(Long id) ;
    void removeByStory(Long id) ;
    List<Case> selectByLib(Long id) ;
    void removeByLib(Long id) ;
    /**
     *自定义查询SQL
     * @param sql  select * from table where id =#{et.param}
     * @param param 参数列表  param.put("param","1");
     * @return select * from table where id = '1'
     */
    List<JSONObject> select(String sql, Map param);
    /**
     *自定义SQL
     * @param sql  update table  set name ='test' where id =#{et.param}
     * @param param 参数列表  param.put("param","1");
     * @return     update table  set name ='test' where id = '1'
     */
    boolean execute(String sql, Map param);

}


