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

import cn.ibizlab.pms.core.zentao.domain.Im_chatuser;
import cn.ibizlab.pms.core.zentao.filter.Im_chatuserSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Im_chatuser] 服务对象接口
 */
public interface IIm_chatuserService extends IService<Im_chatuser>{

    boolean create(Im_chatuser et) ;
    void createBatch(List<Im_chatuser> list) ;
    boolean update(Im_chatuser et) ;
    void updateBatch(List<Im_chatuser> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Im_chatuser get(BigInteger key) ;
    Im_chatuser getDraft(Im_chatuser et) ;
    boolean checkKey(Im_chatuser et) ;
    boolean save(Im_chatuser et) ;
    void saveBatch(List<Im_chatuser> list) ;
    Page<Im_chatuser> searchDefault(Im_chatuserSearchContext context) ;
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


