package cn.ibizlab.pms.core.report.service;

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

import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import cn.ibizlab.pms.core.report.filter.IbzWeeklySearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbzWeekly] 服务对象接口
 */
public interface IIbzWeeklyService extends IService<IbzWeekly> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "周报";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzweeklies";

    boolean create(IbzWeekly et);
    void createBatch(List<IbzWeekly> list);
    boolean update(IbzWeekly et);
    void updateBatch(List<IbzWeekly> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IbzWeekly get(Long key);
    IbzWeekly getDraft(IbzWeekly et);
    boolean checkKey(IbzWeekly et);
    IbzWeekly createEveryWeekReport(IbzWeekly et);
    IbzWeekly haveRead(IbzWeekly et);
    IbzWeekly jugThisWeekCreateWeekly(IbzWeekly et);
    IbzWeekly pushUserWeekly(IbzWeekly et);
    boolean save(IbzWeekly et);
    void saveBatch(List<IbzWeekly> list);
    IbzWeekly submit(IbzWeekly et);
    Page<IbzWeekly> searchDefault(IbzWeeklySearchContext context);
    Page<IbzWeekly> searchMyNotSubmit(IbzWeeklySearchContext context);
    Page<IbzWeekly> searchMyWeekly(IbzWeeklySearchContext context);
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

    List<IbzWeekly> getIbzweeklyByIds(List<Long> ids);
    List<IbzWeekly> getIbzweeklyByEntities(List<IbzWeekly> entities);
}


