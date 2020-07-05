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

import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;
import cn.ibizlab.pms.core.ibiz.filter.ProjectTeamSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ProjectTeam] 服务对象接口
 */
public interface IProjectTeamService extends IService<ProjectTeam>{

    boolean create(ProjectTeam et) ;
    void createBatch(List<ProjectTeam> list) ;
    boolean update(ProjectTeam et) ;
    void updateBatch(List<ProjectTeam> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    ProjectTeam get(BigInteger key) ;
    ProjectTeam getDraft(ProjectTeam et) ;
    boolean checkKey(ProjectTeam et) ;
    boolean save(ProjectTeam et) ;
    void saveBatch(List<ProjectTeam> list) ;
    Page<ProjectTeam> searchDefault(ProjectTeamSearchContext context) ;
    List<ProjectTeam> selectByRoot(BigInteger id) ;
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


