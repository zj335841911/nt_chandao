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

import cn.ibizlab.pms.core.zentao.domain.Burn;
import cn.ibizlab.pms.core.zentao.filter.BurnSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Burn] 服务对象接口
 */
public interface IBurnService extends IService<Burn>{

    boolean create(Burn et) ;
    void createBatch(List<Burn> list) ;
    Burn get(String key) ;
    boolean checkKey(Burn et) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    boolean save(Burn et) ;
    void saveBatch(List<Burn> list) ;
    boolean update(Burn et) ;
    void updateBatch(List<Burn> list) ;
    Burn getDraft(Burn et) ;
    Page<Burn> searchDefault(BurnSearchContext context) ;
    List<Burn> selectByProject(BigInteger id) ;
    void removeByProject(BigInteger id) ;
    List<Burn> selectByTask(BigInteger id) ;
    void removeByTask(BigInteger id) ;
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


