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

import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.filter.ProjectProductSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ProjectProduct] 服务对象接口
 */
public interface IProjectProductService extends IService<ProjectProduct>{

    ProjectProduct getDraft(ProjectProduct et) ;
    boolean save(ProjectProduct et) ;
    void saveBatch(List<ProjectProduct> list) ;
    boolean checkKey(ProjectProduct et) ;
    ProjectProduct get(String key) ;
    boolean create(ProjectProduct et) ;
    void createBatch(List<ProjectProduct> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    boolean update(ProjectProduct et) ;
    void updateBatch(List<ProjectProduct> list) ;
    Page<ProjectProduct> searchRelationPlan(ProjectProductSearchContext context) ;
    Page<ProjectProduct> searchDefault(ProjectProductSearchContext context) ;
    List<ProjectProduct> selectByBranch(BigInteger id) ;
    void removeByBranch(BigInteger id) ;
    List<ProjectProduct> selectByPlan(BigInteger id) ;
    void removeByPlan(BigInteger id) ;
    List<ProjectProduct> selectByProduct(BigInteger id) ;
    void removeByProduct(BigInteger id) ;
    List<ProjectProduct> selectByProject(BigInteger id) ;
    void removeByProject(BigInteger id) ;
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


