package cn.ibizlab.pms.core.ibizpro.service;

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

import cn.ibizlab.pms.core.ibizpro.domain.IBZSysTpl;
import cn.ibizlab.pms.core.ibizpro.filter.IBZSysTplSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBZSysTpl] 服务对象接口
 */
public interface IIBZSysTplService extends IService<IBZSysTpl>{

    boolean create(IBZSysTpl et) ;
    void createBatch(List<IBZSysTpl> list) ;
    boolean update(IBZSysTpl et) ;
    void updateBatch(List<IBZSysTpl> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    IBZSysTpl get(String key) ;
    IBZSysTpl getDraft(IBZSysTpl et) ;
    boolean checkKey(IBZSysTpl et) ;
    boolean save(IBZSysTpl et) ;
    void saveBatch(List<IBZSysTpl> list) ;
    Page<IBZSysTpl> searchDefault(IBZSysTplSearchContext context) ;
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

    List<IBZSysTpl> getIbzsystplByIds(List<String> ids) ;
    List<IBZSysTpl> getIbzsystplByEntities(List<IBZSysTpl> entities) ;
}


