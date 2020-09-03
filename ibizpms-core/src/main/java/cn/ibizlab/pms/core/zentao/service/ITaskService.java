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

    boolean create(Task et) ;
    void createBatch(List<Task> list) ;
    boolean update(Task et) ;
    void updateBatch(List<Task> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Task get(BigInteger key) ;
    Task getDraft(Task et) ;
    Task activate(Task et) ;
    Task assignTo(Task et) ;
    Task cancel(Task et) ;
    boolean checkKey(Task et) ;
    Task close(Task et) ;
    Task deleteEstimate(Task et) ;
    Task editEstimate(Task et) ;
    Task finish(Task et) ;
    Task pause(Task et) ;
    Task recordEstimate(Task et) ;
    Task restart(Task et) ;
    boolean save(Task et) ;
    void saveBatch(List<Task> list) ;
    Task sendMessage(Task et) ;
    Task sendMsgPreProcess(Task et) ;
    Task start(Task et) ;
    Task taskFavorites(Task et) ;
    Task taskNFavorites(Task et) ;
    Page<Task> searchByModule(TaskSearchContext context) ;
    Page<Task> searchDefault(TaskSearchContext context) ;
    Page<Task> searchDefaultRow(TaskSearchContext context) ;
    Page<Task> searchMyFavorites(TaskSearchContext context) ;
    Page<Task> searchProjectTASK(TaskSearchContext context) ;
    Page<Task> searchRootTask(TaskSearchContext context) ;
    Page<HashMap> searchTypeGroup(TaskSearchContext context) ;
    List<Task> selectByModule(BigInteger id) ;
    void removeByModule(BigInteger id) ;
    List<Task> selectByFrombug(BigInteger id) ;
    void removeByFrombug(BigInteger id) ;
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


