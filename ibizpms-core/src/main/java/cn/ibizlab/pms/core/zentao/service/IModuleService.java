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

import cn.ibizlab.pms.core.zentao.domain.Module;
import cn.ibizlab.pms.core.zentao.filter.ModuleSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Module] 服务对象接口
 */
public interface IModuleService extends IService<Module>{

    Module getDraft(Module et) ;
    boolean create(Module et) ;
    void createBatch(List<Module> list) ;
    Module get(BigInteger key) ;
    boolean update(Module et) ;
    void updateBatch(List<Module> list) ;
    boolean save(Module et) ;
    void saveBatch(List<Module> list) ;
    boolean checkKey(Module et) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Page<Module> searchLine(ModuleSearchContext context) ;
    Page<Module> searchStoryModule(ModuleSearchContext context) ;
    Page<Module> searchDefault(ModuleSearchContext context) ;
    Page<Module> searchDocModule(ModuleSearchContext context) ;
    List<Module> selectByBranch(BigInteger id) ;
    void removeByBranch(BigInteger id) ;
    List<Module> selectByParent(BigInteger id) ;
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


