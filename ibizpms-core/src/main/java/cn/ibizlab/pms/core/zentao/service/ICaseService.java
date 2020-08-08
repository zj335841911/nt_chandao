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
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Case get(BigInteger key) ;
    Case getDraft(Case et) ;
    boolean checkKey(Case et) ;
    Case confirmChange(Case et) ;
    Case confirmstorychange(Case et) ;
    Case getByTestTask(Case et) ;
    Case linkCase(Case et) ;
    Case runCase(Case et) ;
    boolean save(Case et) ;
    void saveBatch(List<Case> list) ;
    Case testRunCase(Case et) ;
    Case testsuitelinkCase(Case et) ;
    Case unlinkCase(Case et) ;
    Page<Case> searchBatchNew(CaseSearchContext context) ;
    Page<Case> searchCurSuite(CaseSearchContext context) ;
    Page<Case> searchCurTestTask(CaseSearchContext context) ;
    Page<Case> searchDefault(CaseSearchContext context) ;
    Page<Case> searchNotCurTestTask(CaseSearchContext context) ;
    List<Case> selectByBranch(BigInteger id) ;
    void removeByBranch(BigInteger id) ;
    List<Case> selectByFrombug(BigInteger id) ;
    void removeByFrombug(BigInteger id) ;
    List<Case> selectByFromcaseid(BigInteger id) ;
    void removeByFromcaseid(BigInteger id) ;
    List<Case> selectByModule(BigInteger id) ;
    void removeByModule(BigInteger id) ;
    List<Case> selectByProduct(BigInteger id) ;
    void removeByProduct(BigInteger id) ;
    List<Case> selectByStory(BigInteger id) ;
    void removeByStory(BigInteger id) ;
    List<Case> selectByLib(BigInteger id) ;
    void removeByLib(BigInteger id) ;
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


