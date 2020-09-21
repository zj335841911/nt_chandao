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

import cn.ibizlab.pms.core.zentao.domain.Im_chat;
import cn.ibizlab.pms.core.zentao.filter.Im_chatSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Im_chat] 服务对象接口
 */
public interface IIm_chatService extends IService<Im_chat>{

    boolean create(Im_chat et) ;
    void createBatch(List<Im_chat> list) ;
    boolean update(Im_chat et) ;
    void updateBatch(List<Im_chat> list) ;
    boolean remove(Long key) ;
    void removeBatch(Collection<Long> idList) ;
    Im_chat get(Long key) ;
    Im_chat getDraft(Im_chat et) ;
    boolean checkKey(Im_chat et) ;
    boolean save(Im_chat et) ;
    void saveBatch(List<Im_chat> list) ;
    Page<Im_chat> searchDefault(Im_chatSearchContext context) ;
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


