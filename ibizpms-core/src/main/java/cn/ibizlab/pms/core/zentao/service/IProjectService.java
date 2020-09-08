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

import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.filter.ProjectSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Project] 服务对象接口
 */
public interface IProjectService extends IService<Project>{

    boolean create(Project et) ;
    void createBatch(List<Project> list) ;
    boolean update(Project et) ;
    void updateBatch(List<Project> list) ;
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Project get(BigInteger key) ;
    Project getDraft(Project et) ;
    Project activate(Project et) ;
    Project batchUnlinkStory(Project et) ;
    Project cancelProjectTop(Project et) ;
    boolean checkKey(Project et) ;
    Project close(Project et) ;
    Project linkStory(Project et) ;
    Project manageMembers(Project et) ;
    Project mobProjectCount(Project et) ;
    Project projectTop(Project et) ;
    Project putoff(Project et) ;
    boolean save(Project et) ;
    void saveBatch(List<Project> list) ;
    Project start(Project et) ;
    Project suspend(Project et) ;
    Project unlinkMember(Project et) ;
    Project unlinkStory(Project et) ;
    Project updateOrder(Project et) ;
    Page<Project> searchBugProject(ProjectSearchContext context) ;
    Page<Project> searchCurProduct(ProjectSearchContext context) ;
    Page<Project> searchCurUser(ProjectSearchContext context) ;
    Page<Project> searchDefault(ProjectSearchContext context) ;
    Page<Project> searchMyProject(ProjectSearchContext context) ;
    Page<Project> searchProjectTeam(ProjectSearchContext context) ;
    Page<Project> searchStoryProject(ProjectSearchContext context) ;
    List<Project> selectByParent(BigInteger id) ;
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


