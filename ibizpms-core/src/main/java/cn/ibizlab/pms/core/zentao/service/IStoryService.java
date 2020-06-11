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

import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Story] 服务对象接口
 */
public interface IStoryService extends IService<Story>{

    Story getDraft(Story et) ;
    boolean create(Story et) ;
    void createBatch(List<Story> list) ;
    Story batchChangeStage(Story et) ;
    Story batchChangePlan(Story et) ;
    Story batchClose(Story et) ;
    Story change(Story et) ;
    boolean checkKey(Story et) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean update(Story et) ;
    void updateBatch(List<Story> list) ;
    Story batchChangeBranch(Story et) ;
    Story batchReview(Story et) ;
    Story review(Story et) ;
    Story assignTo(Story et) ;
    Story batchAssignTo(Story et) ;
    Story get(BigInteger key) ;
    boolean save(Story et) ;
    void saveBatch(List<Story> list) ;
    Story batchChangeModule(Story et) ;
    Story close(Story et) ;
    Page<Story> searchReleaseStories(StorySearchContext context) ;
    Page<Story> searchProjectStories(StorySearchContext context) ;
    Page<Story> searchDefault(StorySearchContext context) ;
    Page<Story> searchGetProductStories(StorySearchContext context) ;
    List<Story> selectByModule(BigInteger id) ;
    void removeByModule(BigInteger id) ;
    List<Story> selectByBranch(BigInteger id) ;
    void removeByBranch(BigInteger id) ;
    List<Story> selectByFrombug(BigInteger id) ;
    void removeByFrombug(BigInteger id) ;
    List<Story> selectByTobug(BigInteger id) ;
    void removeByTobug(BigInteger id) ;
    List<Story> selectByProduct(BigInteger id) ;
    void removeByProduct(BigInteger id) ;
    List<Story> selectByDuplicatestory(BigInteger id) ;
    void removeByDuplicatestory(BigInteger id) ;
    List<Story> selectByParent(BigInteger id) ;
    void removeByParent(BigInteger id) ;
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


