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

import cn.ibizlab.pms.core.ibiz.domain.EMPLOYEELOAD;
import cn.ibizlab.pms.core.ibiz.filter.EMPLOYEELOADSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[EMPLOYEELOAD] 服务对象接口
 */
public interface IEMPLOYEELOADService extends IService<EMPLOYEELOAD>{

    boolean create(EMPLOYEELOAD et) ;
    void createBatch(List<EMPLOYEELOAD> list) ;
    boolean update(EMPLOYEELOAD et) ;
    void updateBatch(List<EMPLOYEELOAD> list) ;
    boolean remove(Long key) ;
    void removeBatch(Collection<Long> idList) ;
    EMPLOYEELOAD get(Long key) ;
    EMPLOYEELOAD getDraft(EMPLOYEELOAD et) ;
    boolean checkKey(EMPLOYEELOAD et) ;
    boolean save(EMPLOYEELOAD et) ;
    void saveBatch(List<EMPLOYEELOAD> list) ;
    Page<EMPLOYEELOAD> searchDefault(EMPLOYEELOADSearchContext context) ;
    Page<EMPLOYEELOAD> searchGETWOERKLOAD(EMPLOYEELOADSearchContext context) ;
    Page<EMPLOYEELOAD> searchGETWORKLOAD_UNASSIGN(EMPLOYEELOADSearchContext context) ;
    List<EMPLOYEELOAD> selectByProject(Long id) ;
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


