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
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.alibaba.fastjson.JSONObject;

public interface TaskMapper extends BaseMapper<Task>{

    Page<Task> searchRootTask(IPage page, @Param("srf") TaskSearchContext context, @Param("ew") Wrapper<Task> wrapper) ;
    Page<Task> searchByModule(IPage page, @Param("srf") TaskSearchContext context, @Param("ew") Wrapper<Task> wrapper) ;
    Page<HashMap> searchTypeGroup(IPage page, @Param("srf") TaskSearchContext context, @Param("ew") Wrapper<Task> wrapper) ;
    Page<Task> searchDefault(IPage page, @Param("srf") TaskSearchContext context, @Param("ew") Wrapper<Task> wrapper) ;
    @Override
    Task selectById(Serializable id);
    @Override
    int insert(Task entity);
    @Override
    int updateById(@Param(Constants.ENTITY) Task entity);
    @Override
    int update(@Param(Constants.ENTITY) Task entity, @Param("ew") Wrapper<Task> updateWrapper);
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

    List<Task> selectByModule(@Param("id") Serializable id) ;

    List<Task> selectByFrombug(@Param("id") Serializable id) ;

    List<Task> selectByProject(@Param("id") Serializable id) ;

    List<Task> selectByStory(@Param("id") Serializable id) ;

    List<Task> selectByParent(@Param("id") Serializable id) ;

}
