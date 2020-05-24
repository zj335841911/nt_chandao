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

import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.filter.DocLibSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[DocLib] 服务对象接口
 */
public interface IDocLibService extends IService<DocLib>{

    DocLib getDraft(DocLib et) ;
    DocLib get(BigInteger key) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean checkKey(DocLib et) ;
    boolean update(DocLib et) ;
    void updateBatch(List<DocLib> list) ;
    boolean save(DocLib et) ;
    void saveBatch(List<DocLib> list) ;
    boolean create(DocLib et) ;
    void createBatch(List<DocLib> list) ;
    Page<DocLib> searchDefault(DocLibSearchContext context) ;
    List<DocLib> selectByProduct(BigInteger id) ;
    void removeByProduct(BigInteger id) ;
    List<DocLib> selectByProject(BigInteger id) ;
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


