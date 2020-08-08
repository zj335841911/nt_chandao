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

import cn.ibizlab.pms.core.zentao.domain.TestResult;
import cn.ibizlab.pms.core.zentao.filter.TestResultSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[TestResult] 服务对象接口
 */
public interface ITestResultService extends IService<TestResult>{

    boolean create(TestResult et) ;
    void createBatch(List<TestResult> list) ;
    boolean update(TestResult et) ;
    void updateBatch(List<TestResult> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    TestResult get(BigInteger key) ;
    TestResult getDraft(TestResult et) ;
    boolean checkKey(TestResult et) ;
    boolean save(TestResult et) ;
    void saveBatch(List<TestResult> list) ;
    Page<TestResult> searchCurTestRun(TestResultSearchContext context) ;
    Page<TestResult> searchDefault(TestResultSearchContext context) ;
    List<TestResult> selectByIbizcase(BigInteger id) ;
    void removeByIbizcase(BigInteger id) ;
    List<TestResult> selectByCompile(BigInteger id) ;
    void removeByCompile(BigInteger id) ;
    List<TestResult> selectByJob(BigInteger id) ;
    void removeByJob(BigInteger id) ;
    List<TestResult> selectByRun(BigInteger id) ;
    void removeByRun(BigInteger id) ;
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


