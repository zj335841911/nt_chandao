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

import cn.ibizlab.pms.core.zentao.domain.Branch;
import cn.ibizlab.pms.core.zentao.filter.BranchSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Branch] 服务对象接口
 */
public interface IBranchService extends IService<Branch>{

    Branch getDraft(Branch et) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    boolean create(Branch et) ;
    void createBatch(List<Branch> list) ;
    boolean update(Branch et) ;
    void updateBatch(List<Branch> list) ;
    Branch sort(Branch et) ;
    boolean checkKey(Branch et) ;
    boolean save(Branch et) ;
    void saveBatch(List<Branch> list) ;
    Branch get(BigInteger key) ;
    Page<Branch> searchDefault(BranchSearchContext context) ;
    Page<Branch> searchCurProduct(BranchSearchContext context) ;
    List<Branch> selectByProduct(BigInteger id) ;
    void removeByProduct(BigInteger id) ;
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


