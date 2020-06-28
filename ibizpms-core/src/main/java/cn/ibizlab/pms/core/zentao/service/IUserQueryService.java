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

import cn.ibizlab.pms.core.zentao.domain.UserQuery;
import cn.ibizlab.pms.core.zentao.filter.UserQuerySearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[UserQuery] 服务对象接口
 */
public interface IUserQueryService extends IService<UserQuery>{

    boolean checkKey(UserQuery et) ;
    UserQuery get(BigInteger key) ;
    UserQuery getDraft(UserQuery et) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean create(UserQuery et) ;
    void createBatch(List<UserQuery> list) ;
    boolean save(UserQuery et) ;
    void saveBatch(List<UserQuery> list) ;
    boolean update(UserQuery et) ;
    void updateBatch(List<UserQuery> list) ;
    Page<UserQuery> searchDefault(UserQuerySearchContext context) ;
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


