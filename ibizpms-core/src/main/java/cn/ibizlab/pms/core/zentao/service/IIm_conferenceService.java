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

import cn.ibizlab.pms.core.zentao.domain.Im_conference;
import cn.ibizlab.pms.core.zentao.filter.Im_conferenceSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Im_conference] 服务对象接口
 */
public interface IIm_conferenceService extends IService<Im_conference>{

    boolean create(Im_conference et) ;
    void createBatch(List<Im_conference> list) ;
    boolean update(Im_conference et) ;
    void updateBatch(List<Im_conference> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Im_conference get(BigInteger key) ;
    Im_conference getDraft(Im_conference et) ;
    boolean checkKey(Im_conference et) ;
    boolean save(Im_conference et) ;
    void saveBatch(List<Im_conference> list) ;
    Page<Im_conference> searchDefault(Im_conferenceSearchContext context) ;
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


