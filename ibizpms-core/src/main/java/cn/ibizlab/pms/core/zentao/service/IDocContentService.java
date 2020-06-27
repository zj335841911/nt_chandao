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

import cn.ibizlab.pms.core.zentao.domain.DocContent;
import cn.ibizlab.pms.core.zentao.filter.DocContentSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[DocContent] 服务对象接口
 */
public interface IDocContentService extends IService<DocContent>{

    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean update(DocContent et) ;
    void updateBatch(List<DocContent> list) ;
    boolean create(DocContent et) ;
    void createBatch(List<DocContent> list) ;
    DocContent get(BigInteger key) ;
    DocContent getDraft(DocContent et) ;
    boolean save(DocContent et) ;
    void saveBatch(List<DocContent> list) ;
    boolean checkKey(DocContent et) ;
    Page<DocContent> searchDefault(DocContentSearchContext context) ;
    List<DocContent> selectByDoc(BigInteger id) ;
    void removeByDoc(BigInteger id) ;
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


