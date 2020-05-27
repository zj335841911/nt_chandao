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

import cn.ibizlab.pms.core.zentao.domain.Im_messagestatus;
import cn.ibizlab.pms.core.zentao.filter.Im_messagestatusSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Im_messagestatus] 服务对象接口
 */
public interface IIm_messagestatusService extends IService<Im_messagestatus>{

    boolean create(Im_messagestatus et) ;
    void createBatch(List<Im_messagestatus> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    boolean checkKey(Im_messagestatus et) ;
    boolean update(Im_messagestatus et) ;
    void updateBatch(List<Im_messagestatus> list) ;
    boolean save(Im_messagestatus et) ;
    void saveBatch(List<Im_messagestatus> list) ;
    Im_messagestatus getDraft(Im_messagestatus et) ;
    Im_messagestatus get(String key) ;
    Page<Im_messagestatus> searchDefault(Im_messagestatusSearchContext context) ;
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


