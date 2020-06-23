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

import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.filter.StorySpecSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[StorySpec] 服务对象接口
 */
public interface IStorySpecService extends IService<StorySpec>{

    boolean checkKey(StorySpec et) ;
    boolean create(StorySpec et) ;
    void createBatch(List<StorySpec> list) ;
    boolean save(StorySpec et) ;
    void saveBatch(List<StorySpec> list) ;
    StorySpec get(String key) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    boolean update(StorySpec et) ;
    void updateBatch(List<StorySpec> list) ;
    StorySpec getDraft(StorySpec et) ;
    Page<StorySpec> searchDefault(StorySpecSearchContext context) ;
    List<StorySpec> selectByStory(BigInteger id) ;
    void removeByStory(BigInteger id) ;
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


