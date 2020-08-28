package cn.ibizlab.pms.core.zentao.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.HashMap;
import org.apache.ibatis.annotations.Select;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.filter.BugSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.alibaba.fastjson.JSONObject;

public interface BugMapper extends BaseMapper<Bug>{

    Page<Bug> searchBuildBugs(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchBuildLinkResolvedBugs(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchBuildOpenBugs(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchDefault(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchMyFavorites(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchReleaseBugs(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchReleaseLeftBugs(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchReleaseLinkableLeftBug(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchReleaseLinkableResolvedBug(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    Page<Bug> searchReportBugs(IPage page, @Param("srf") BugSearchContext context, @Param("ew") Wrapper<Bug> wrapper) ;
    @Override
    Bug selectById(Serializable id);
    @Override
    int insert(Bug entity);
    @Override
    int updateById(@Param(Constants.ENTITY) Bug entity);
    @Override
    int update(@Param(Constants.ENTITY) Bug entity, @Param("ew") Wrapper<Bug> updateWrapper);
    @Override
    int deleteById(Serializable id);
     /**
      * 自定义查询SQL
      * @param sql
      * @return
      */
     @Select("${sql}")
     List<JSONObject> selectBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义更新SQL
    * @param sql
    * @return
    */
    @Update("${sql}")
    boolean updateBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义插入SQL
    * @param sql
    * @return
    */
    @Insert("${sql}")
    boolean insertBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义删除SQL
    * @param sql
    * @return
    */
    @Delete("${sql}")
    boolean deleteBySQL(@Param("sql") String sql, @Param("et")Map param);

    List<Bug> selectByBranch(@Param("id") Serializable id) ;

    List<Bug> selectByDuplicatebug(@Param("id") Serializable id) ;

    List<Bug> selectByIbizcase(@Param("id") Serializable id) ;

    List<Bug> selectByEntry(@Param("id") Serializable id) ;

    List<Bug> selectByModule(@Param("id") Serializable id) ;

    List<Bug> selectByPlan(@Param("id") Serializable id) ;

    List<Bug> selectByProduct(@Param("id") Serializable id) ;

    List<Bug> selectByProject(@Param("id") Serializable id) ;

    List<Bug> selectByRepo(@Param("id") Serializable id) ;

    List<Bug> selectByStory(@Param("id") Serializable id) ;

    List<Bug> selectByTostory(@Param("id") Serializable id) ;

    List<Bug> selectByTask(@Param("id") Serializable id) ;

    List<Bug> selectByTotask(@Param("id") Serializable id) ;

    List<Bug> selectByTesttask(@Param("id") Serializable id) ;

}
