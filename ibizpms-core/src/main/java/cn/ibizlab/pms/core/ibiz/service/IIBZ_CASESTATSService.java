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
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.ibiz.domain.IBZ_CASESTATS;
import cn.ibizlab.pms.core.ibiz.filter.IBZ_CASESTATSSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBZ_CASESTATS] 服务对象接口
 */
public interface IIBZ_CASESTATSService extends IService<IBZ_CASESTATS> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "测试用例统计";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibz_casestats";

    boolean create(IBZ_CASESTATS et);
    void createBatch(List<IBZ_CASESTATS> list);
    boolean update(IBZ_CASESTATS et);
    void updateBatch(List<IBZ_CASESTATS> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IBZ_CASESTATS get(Long key);
    IBZ_CASESTATS getDraft(IBZ_CASESTATS et);
    boolean checkKey(IBZ_CASESTATS et);
    boolean save(IBZ_CASESTATS et);
    void saveBatch(List<IBZ_CASESTATS> list);
    Page<IBZ_CASESTATS> searchDefault(IBZ_CASESTATSSearchContext context);
    List<IBZ_CASESTATS> selectByModule(Long id);
    void removeByModule(Long id);
    /**
     * 自定义查询SQL
     * @param sql  select * from table where id =#{et.param}
     * @param param 参数列表  param.put("param", "1");
     * @return select * from table where id = '1'
     */
    List<JSONObject> select(String sql, Map param);
    /**
     * 自定义SQL
     * @param sql  update table  set name ='test' where id =#{et.param}
     * @param param 参数列表  param.put("param", "1");
     * @return     update table  set name ='test' where id = '1'
     */
    boolean execute(String sql, Map param);

}


