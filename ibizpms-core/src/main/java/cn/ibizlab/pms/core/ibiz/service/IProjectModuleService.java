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

import cn.ibizlab.pms.core.ibiz.domain.ProjectModule;
import cn.ibizlab.pms.core.ibiz.filter.ProjectModuleSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ProjectModule] 服务对象接口
 */
public interface IProjectModuleService extends IService<ProjectModule>{

    boolean create(ProjectModule et) ;
    void createBatch(List<ProjectModule> list) ;
    boolean update(ProjectModule et) ;
    void updateBatch(List<ProjectModule> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    ProjectModule get(BigInteger key) ;
    ProjectModule getDraft(ProjectModule et) ;
    boolean checkKey(ProjectModule et) ;
    ProjectModule fix(ProjectModule et) ;
    boolean save(ProjectModule et) ;
    void saveBatch(List<ProjectModule> list) ;
    Page<ProjectModule> searchByPath(ProjectModuleSearchContext context) ;
    Page<ProjectModule> searchDefault(ProjectModuleSearchContext context) ;
    Page<ProjectModule> searchRoot(ProjectModuleSearchContext context) ;
    Page<ProjectModule> searchRoot_NoBranch(ProjectModuleSearchContext context) ;
    Page<ProjectModule> searchRoot_Task(ProjectModuleSearchContext context) ;
    List<ProjectModule> selectByParent(BigInteger id) ;
    void removeByParent(BigInteger id) ;
    List<ProjectModule> selectByRoot(BigInteger id) ;
    void removeByRoot(BigInteger id) ;
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


