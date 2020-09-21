package cn.ibizlab.pms.core.ibiz.service;

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

import cn.ibizlab.pms.core.ibiz.domain.IBZ_LOGIN;
import cn.ibizlab.pms.core.ibiz.filter.IBZ_LOGINSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBZ_LOGIN] 服务对象接口
 */
public interface IIBZ_LOGINService extends IService<IBZ_LOGIN>{

    IBZ_LOGIN getUser(IBZ_LOGIN et) ;
    IBZ_LOGIN ztlogin(IBZ_LOGIN et) ;
    Page<IBZ_LOGIN> searchDefault(IBZ_LOGINSearchContext context) ;
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


