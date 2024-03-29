package cn.ibizlab.pms.core.ibiz.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.Map;
import org.apache.ibatis.annotations.Select;
import cn.ibizlab.pms.core.ibiz.domain.ProjectStats;
import cn.ibizlab.pms.core.ibiz.filter.ProjectStatsSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.alibaba.fastjson.JSONObject;

public interface ProjectStatsMapper extends BaseMapper<ProjectStats> {

    Page<ProjectStats> searchDefault(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchNoOpenProduct(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectBugType(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectInputStats(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectProgress(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectQuality(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectStoryStageStats(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectStoryStatusStats(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectTaskCountByTaskStatus(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchProjectTaskCountByType(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    Page<ProjectStats> searchTaskTime(IPage page, @Param("srf") ProjectStatsSearchContext context, @Param("ew") Wrapper<ProjectStats> wrapper);
    @Override
    ProjectStats selectById(Serializable id);
    @Override
    int insert(ProjectStats entity);
    @Override
    int updateById(@Param(Constants.ENTITY) ProjectStats entity);
    @Override
    int update(@Param(Constants.ENTITY) ProjectStats entity, @Param("ew") Wrapper<ProjectStats> updateWrapper);
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

}
