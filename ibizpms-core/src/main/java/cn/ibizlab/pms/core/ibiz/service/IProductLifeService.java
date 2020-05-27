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

import cn.ibizlab.pms.core.ibiz.domain.ProductLife;
import cn.ibizlab.pms.core.ibiz.filter.ProductLifeSearchContext;


/**
 * 实体[ProductLife] 服务对象接口
 */
public interface IProductLifeService{

    ProductLife get(String key) ;
    ProductLife getDraft(ProductLife et) ;
    boolean create(ProductLife et) ;
    void createBatch(List<ProductLife> list) ;
    boolean checkKey(ProductLife et) ;
    boolean save(ProductLife et) ;
    void saveBatch(List<ProductLife> list) ;
    boolean update(ProductLife et) ;
    void updateBatch(List<ProductLife> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    Page<ProductLife> searchGetRoadmap(ProductLifeSearchContext context) ;
    Page<ProductLife> searchDefault(ProductLifeSearchContext context) ;
    Page<ProductLife> searchRoadMapYear(ProductLifeSearchContext context) ;

}



