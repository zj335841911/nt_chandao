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

import cn.ibizlab.pms.core.zentao.domain.TestTask;
import cn.ibizlab.pms.core.zentao.filter.TestTaskSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[TestTask] 服务对象接口
 */
public interface ITestTaskService extends IService<TestTask>{

    boolean create(TestTask et) ;
    void createBatch(List<TestTask> list) ;
    boolean update(TestTask et) ;
    void updateBatch(List<TestTask> list) ;
    boolean remove(Long key) ;
    void removeBatch(Collection<Long> idList) ;
    TestTask get(Long key) ;
    TestTask getDraft(TestTask et) ;
    TestTask activate(TestTask et) ;
    TestTask block(TestTask et) ;
    boolean checkKey(TestTask et) ;
    TestTask close(TestTask et) ;
    TestTask linkCase(TestTask et) ;
    boolean save(TestTask et) ;
    void saveBatch(List<TestTask> list) ;
    TestTask start(TestTask et) ;
    TestTask unlinkCase(TestTask et) ;
    Page<TestTask> searchDefault(TestTaskSearchContext context) ;
    List<TestTask> selectByBuild(Long id) ;
    void removeByBuild(Long id) ;
    List<TestTask> selectByProduct(Long id) ;
    void removeByProduct(Long id) ;
    List<TestTask> selectByProject(Long id) ;
    void removeByProject(Long id) ;
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


