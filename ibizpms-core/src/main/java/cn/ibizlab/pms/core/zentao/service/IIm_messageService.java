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

import cn.ibizlab.pms.core.zentao.domain.Im_message;
import cn.ibizlab.pms.core.zentao.filter.Im_messageSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Im_message] 服务对象接口
 */
public interface IIm_messageService extends IService<Im_message>{

    boolean create(Im_message et) ;
    void createBatch(List<Im_message> list) ;
    boolean update(Im_message et) ;
    void updateBatch(List<Im_message> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Im_message get(BigInteger key) ;
    Im_message getDraft(Im_message et) ;
    boolean checkKey(Im_message et) ;
    boolean save(Im_message et) ;
    void saveBatch(List<Im_message> list) ;
    Page<Im_message> searchDefault(Im_messageSearchContext context) ;
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


