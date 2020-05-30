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

import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.core.zentao.filter.ProductPlanSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ProductPlan] 服务对象接口
 */
public interface IProductPlanService extends IService<ProductPlan>{

    boolean save(ProductPlan et) ;
    void saveBatch(List<ProductPlan> list) ;
    boolean create(ProductPlan et) ;
    void createBatch(List<ProductPlan> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean checkKey(ProductPlan et) ;
    ProductPlan getDraft(ProductPlan et) ;
    boolean update(ProductPlan et) ;
    void updateBatch(List<ProductPlan> list) ;
    ProductPlan get(BigInteger key) ;
    Page<ProductPlan> searchDefault(ProductPlanSearchContext context) ;
    Page<ProductPlan> searchCurProductPlan(ProductPlanSearchContext context) ;
    List<ProductPlan> selectByBranch(BigInteger id) ;
    void removeByBranch(BigInteger id) ;
    List<ProductPlan> selectByProduct(BigInteger id) ;
    void removeByProduct(BigInteger id) ;
    List<ProductPlan> selectByParent(BigInteger id) ;
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


