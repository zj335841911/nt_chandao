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

import cn.ibizlab.pms.core.zentao.domain.Im_conferenceaction;
import cn.ibizlab.pms.core.zentao.filter.Im_conferenceactionSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Im_conferenceaction] 服务对象接口
 */
public interface IIm_conferenceactionService extends IService<Im_conferenceaction>{

    boolean checkKey(Im_conferenceaction et) ;
    boolean create(Im_conferenceaction et) ;
    void createBatch(List<Im_conferenceaction> list) ;
    boolean save(Im_conferenceaction et) ;
    void saveBatch(List<Im_conferenceaction> list) ;
    Im_conferenceaction get(BigInteger key) ;
    Im_conferenceaction getDraft(Im_conferenceaction et) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean update(Im_conferenceaction et) ;
    void updateBatch(List<Im_conferenceaction> list) ;
    Page<Im_conferenceaction> searchDefault(Im_conferenceactionSearchContext context) ;
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


