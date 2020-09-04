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

import cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseSteps;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibCaseStepsSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbzLibCaseSteps] 服务对象接口
 */
public interface IIbzLibCaseStepsService extends IService<IbzLibCaseSteps>{

    boolean create(IbzLibCaseSteps et) ;
    void createBatch(List<IbzLibCaseSteps> list) ;
    boolean update(IbzLibCaseSteps et) ;
    void updateBatch(List<IbzLibCaseSteps> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    IbzLibCaseSteps get(BigInteger key) ;
    IbzLibCaseSteps getDraft(IbzLibCaseSteps et) ;
    boolean checkKey(IbzLibCaseSteps et) ;
    boolean save(IbzLibCaseSteps et) ;
    void saveBatch(List<IbzLibCaseSteps> list) ;
    Page<IbzLibCaseSteps> searchDefault(IbzLibCaseStepsSearchContext context) ;
    List<IbzLibCaseSteps> selectByIbizcase(BigInteger id) ;
    void removeByIbizcase(BigInteger id) ;
    void saveByIbizcase(BigInteger id,List<IbzLibCaseSteps> list) ;
    List<IbzLibCaseSteps> selectByParent(BigInteger id) ;
    void removeByParent(BigInteger id) ;
    void saveByParent(BigInteger id,List<IbzLibCaseSteps> list) ;
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


