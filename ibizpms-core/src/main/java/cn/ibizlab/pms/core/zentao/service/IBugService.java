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
    boolean remove(BigInteger key) ;
    void removeBatch(Collection<BigInteger> idList) ;
    Bug get(BigInteger key) ;
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
    Bug toStory(Bug et) ;
    Bug unlinkBug(Bug et) ;
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
    List<Bug> selectByBranch(BigInteger id) ;
    void removeByBranch(BigInteger id) ;
    List<Bug> selectByDuplicatebug(BigInteger id) ;
    void removeByDuplicatebug(BigInteger id) ;
    List<Bug> selectByIbizcase(BigInteger id) ;
    void removeByIbizcase(BigInteger id) ;
    List<Bug> selectByEntry(BigInteger id) ;
    void removeByEntry(BigInteger id) ;
    List<Bug> selectByModule(BigInteger id) ;
    void removeByModule(BigInteger id) ;
    List<Bug> selectByPlan(BigInteger id) ;
    void removeByPlan(BigInteger id) ;
    List<Bug> selectByProduct(BigInteger id) ;
    void removeByProduct(BigInteger id) ;
    List<Bug> selectByProject(BigInteger id) ;
    void removeByProject(BigInteger id) ;
    List<Bug> selectByRepo(BigInteger id) ;
    void removeByRepo(BigInteger id) ;
    List<Bug> selectByStory(BigInteger id) ;
    void removeByStory(BigInteger id) ;
    List<Bug> selectByTostory(BigInteger id) ;
    void removeByTostory(BigInteger id) ;
    List<Bug> selectByTask(BigInteger id) ;
    void removeByTask(BigInteger id) ;
    List<Bug> selectByTotask(BigInteger id) ;
    void removeByTotask(BigInteger id) ;
    List<Bug> selectByTesttask(BigInteger id) ;
    void removeByTesttask(BigInteger id) ;
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


