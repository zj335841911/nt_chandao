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

import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[CaseStep] 服务对象接口
 */
public interface ICaseStepService extends IService<CaseStep>{

    CaseStep get(BigInteger key) ;
    boolean update(CaseStep et) ;
    void updateBatch(List<CaseStep> list) ;
    CaseStep getDraft(CaseStep et) ;
    boolean checkKey(CaseStep et) ;
    boolean save(CaseStep et) ;
    void saveBatch(List<CaseStep> list) ;
    boolean create(CaseStep et) ;
    void createBatch(List<CaseStep> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Page<CaseStep> searchDefault(CaseStepSearchContext context) ;
    List<CaseStep> selectByIbizcase(BigInteger id) ;
    void removeByIbizcase(BigInteger id) ;
    void saveByIbizcase(BigInteger id,List<CaseStep> list) ;
    List<CaseStep> selectByParent(BigInteger id) ;
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


