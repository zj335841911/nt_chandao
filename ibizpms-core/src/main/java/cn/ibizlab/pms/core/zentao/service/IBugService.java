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
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.filter.BugSearchContext;


import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Bug] 服务对象接口
 */
public interface IBugService extends IService<Bug>{

    boolean create(Bug et) ;
    void createBatch(List<Bug> list) ;
    boolean update(Bug et) ;
    void updateBatch(List<Bug> list) ;
    boolean remove(Long key) ;
    void removeBatch(Collection<Long> idList) ;
    Bug get(Long key) ;
    Bug getDraft(Bug et) ;
    Bug activate(Bug et) ;
    Bug assignTo(Bug et) ;
    Bug batchUnlinkBug(Bug et) ;
    Bug bugFavorites(Bug et) ;
    Bug bugNFavorites(Bug et) ;
    Bug buildBatchUnlinkBug(Bug et) ;
    Bug buildLinkBug(Bug et) ;
    Bug buildUnlinkBug(Bug et) ;
    boolean checkKey(Bug et) ;
    Bug close(Bug et) ;
    Bug confirm(Bug et) ;
    Bug linkBug(Bug et) ;
    Bug releaaseBatchUnlinkBug(Bug et) ;
    Bug releaseLinkBugbyBug(Bug et) ;
    Bug releaseLinkBugbyLeftBug(Bug et) ;
    Bug releaseUnlinkBug(Bug et) ;
    Bug resolve(Bug et) ;
    boolean save(Bug et) ;
    void saveBatch(List<Bug> list) ;
    Bug sendMessage(Bug et) ;
    Bug sendMsgPreProcess(Bug et) ;
    Bug toStory(Bug et) ;
    Bug unlinkBug(Bug et) ;
    Page<Bug> searchAssignedToMyBug(BugSearchContext context) ;
    Page<Bug> searchBuildBugs(BugSearchContext context) ;
    Page<Bug> searchBuildLinkResolvedBugs(BugSearchContext context) ;
    Page<Bug> searchBuildOpenBugs(BugSearchContext context) ;
    Page<Bug> searchDefault(BugSearchContext context) ;
    Page<Bug> searchMyFavorites(BugSearchContext context) ;
    Page<Bug> searchReleaseBugs(BugSearchContext context) ;
    Page<Bug> searchReleaseLeftBugs(BugSearchContext context) ;
    Page<Bug> searchReleaseLinkableLeftBug(BugSearchContext context) ;
    Page<Bug> searchReleaseLinkableResolvedBug(BugSearchContext context) ;
    Page<Bug> searchReportBugs(BugSearchContext context) ;
    List<Bug> selectByBranch(Long id) ;
    void removeByBranch(Long id) ;
    List<Bug> selectByDuplicatebug(Long id) ;
    void removeByDuplicatebug(Long id) ;
    List<Bug> selectByIbizcase(Long id) ;
    void removeByIbizcase(Long id) ;
    List<Bug> selectByEntry(Long id) ;
    void removeByEntry(Long id) ;
    List<Bug> selectByModule(Long id) ;
    void removeByModule(Long id) ;
    List<Bug> selectByPlan(Long id) ;
    void removeByPlan(Long id) ;
    List<Bug> selectByProduct(Long id) ;
    void removeByProduct(Long id) ;
    List<Bug> selectByProject(Long id) ;
    void removeByProject(Long id) ;
    List<Bug> selectByRepo(Long id) ;
    void removeByRepo(Long id) ;
    List<Bug> selectByStory(Long id) ;
    void removeByStory(Long id) ;
    List<Bug> selectByTostory(Long id) ;
    void removeByTostory(Long id) ;
    List<Bug> selectByTask(Long id) ;
    void removeByTask(Long id) ;
    List<Bug> selectByTotask(Long id) ;
    void removeByTotask(Long id) ;
    List<Bug> selectByTesttask(Long id) ;
    void removeByTesttask(Long id) ;
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


