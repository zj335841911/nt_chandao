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

import cn.ibizlab.pms.core.zentao.domain.Im_queue;
import cn.ibizlab.pms.core.zentao.filter.Im_queueSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Im_queue] 服务对象接口
 */
public interface IIm_queueService extends IService<Im_queue>{

    boolean create(Im_queue et) ;
    void createBatch(List<Im_queue> list) ;
    boolean update(Im_queue et) ;
    void updateBatch(List<Im_queue> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Im_queue get(BigInteger key) ;
    Im_queue getDraft(Im_queue et) ;
    boolean checkKey(Im_queue et) ;
    boolean save(Im_queue et) ;
    void saveBatch(List<Im_queue> list) ;
    Page<Im_queue> searchDefault(Im_queueSearchContext context) ;
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


