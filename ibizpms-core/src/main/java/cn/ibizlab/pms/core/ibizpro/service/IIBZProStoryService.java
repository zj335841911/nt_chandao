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
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStorySearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBZProStory] 服务对象接口
 */
public interface IIBZProStoryService extends IService<IBZProStory>{

    boolean create(IBZProStory et) ;
    void createBatch(List<IBZProStory> list) ;
    boolean update(IBZProStory et) ;
    void updateBatch(List<IBZProStory> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    IBZProStory get(String key) ;
    IBZProStory getDraft(IBZProStory et) ;
    boolean checkKey(IBZProStory et) ;
    boolean save(IBZProStory et) ;
    void saveBatch(List<IBZProStory> list) ;
    Page<IBZProStory> searchDefault(IBZProStorySearchContext context) ;
    List<IBZProStory> selectByProduct(String ibzpro_productid) ;
    void removeByProduct(String ibzpro_productid) ;
    List<IBZProStory> selectByStorymodule(String ibzprostorymoduleid) ;
    void removeByStorymodule(String ibzprostorymoduleid) ;
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

    List<IBZProStory> getIbzprostoryByIds(List<String> ids) ;
    List<IBZProStory> getIbzprostoryByEntities(List<IBZProStory> entities) ;
}


