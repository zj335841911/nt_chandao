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

import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Task] 服务对象接口
 */
public interface ITaskService extends IService<Task>{

    Task getDraft(Task et) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean update(Task et) ;
    void updateBatch(List<Task> list) ;
    boolean save(Task et) ;
    void saveBatch(List<Task> list) ;
    Task get(BigInteger key) ;
    boolean checkKey(Task et) ;
    boolean create(Task et) ;
    void createBatch(List<Task> list) ;
    Page<Task> searchRootTask(TaskSearchContext context) ;
    Page<HashMap> searchTypeGroup(TaskSearchContext context) ;
    Page<Task> searchDefault(TaskSearchContext context) ;
    List<Task> selectByFrombug(BigInteger id) ;
    void removeByFrombug(BigInteger id) ;
    List<Task> selectByModule(BigInteger id) ;
    void removeByModule(BigInteger id) ;
    List<Task> selectByProject(BigInteger id) ;
    void removeByProject(BigInteger id) ;
    List<Task> selectByStory(BigInteger id) ;
    void removeByStory(BigInteger id) ;
    List<Task> selectByParent(BigInteger id) ;
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


