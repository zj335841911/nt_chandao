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

import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import cn.ibizlab.pms.core.ibiz.filter.ProductModuleSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ProductModule] 服务对象接口
 */
public interface IProductModuleService extends IService<ProductModule>{

    boolean create(ProductModule et) ;
    void createBatch(List<ProductModule> list) ;
    boolean update(ProductModule et) ;
    void updateBatch(List<ProductModule> list) ;
    boolean remove(Long key) ;
    void removeBatch(Collection<Long> idList) ;
    ProductModule get(Long key) ;
    ProductModule getDraft(ProductModule et) ;
    boolean checkKey(ProductModule et) ;
    ProductModule fix(ProductModule et) ;
    boolean save(ProductModule et) ;
    void saveBatch(List<ProductModule> list) ;
    ProductModule syncFromIBIZ(ProductModule et) ;
    Page<ProductModule> searchByPath(ProductModuleSearchContext context) ;
    Page<ProductModule> searchDefault(ProductModuleSearchContext context) ;
    Page<ProductModule> searchParentModule(ProductModuleSearchContext context) ;
    Page<ProductModule> searchRoot(ProductModuleSearchContext context) ;
    Page<ProductModule> searchRoot_NoBranch(ProductModuleSearchContext context) ;
    Page<ProductModule> searchStoryModule(ProductModuleSearchContext context) ;
    List<ProductModule> selectByParent(Long id) ;
    void removeByParent(Long id) ;
    List<ProductModule> selectByRoot(Long id) ;
    void removeByRoot(Long id) ;
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


