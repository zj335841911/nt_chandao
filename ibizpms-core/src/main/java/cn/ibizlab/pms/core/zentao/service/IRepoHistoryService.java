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

import cn.ibizlab.pms.core.zentao.domain.RepoHistory;
import cn.ibizlab.pms.core.zentao.filter.RepoHistorySearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[RepoHistory] 服务对象接口
 */
public interface IRepoHistoryService extends IService<RepoHistory>{

    boolean save(RepoHistory et) ;
    void saveBatch(List<RepoHistory> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    RepoHistory get(BigInteger key) ;
    boolean update(RepoHistory et) ;
    void updateBatch(List<RepoHistory> list) ;
    RepoHistory getDraft(RepoHistory et) ;
    boolean checkKey(RepoHistory et) ;
    boolean create(RepoHistory et) ;
    void createBatch(List<RepoHistory> list) ;
    Page<RepoHistory> searchDefault(RepoHistorySearchContext context) ;
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


