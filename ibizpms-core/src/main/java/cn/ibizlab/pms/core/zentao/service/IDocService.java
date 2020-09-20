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

import cn.ibizlab.pms.core.zentao.domain.Doc;
import cn.ibizlab.pms.core.zentao.filter.DocSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Doc] 服务对象接口
 */
public interface IDocService extends IService<Doc>{

    boolean create(Doc et) ;
    void createBatch(List<Doc> list) ;
    boolean update(Doc et) ;
    void updateBatch(List<Doc> list) ;
    boolean remove(Long key) ;
    void removeBatch(Collection<Long> idList) ;
    Doc get(Long key) ;
    Doc getDraft(Doc et) ;
    boolean checkKey(Doc et) ;
    boolean save(Doc et) ;
    void saveBatch(List<Doc> list) ;
    Page<Doc> searchDefault(DocSearchContext context) ;
    List<Doc> selectByLib(Long id) ;
    void removeByLib(Long id) ;
    List<Doc> selectByModule(Long id) ;
    void removeByModule(Long id) ;
    List<Doc> selectByProduct(Long id) ;
    void removeByProduct(Long id) ;
    List<Doc> selectByProject(Long id) ;
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


