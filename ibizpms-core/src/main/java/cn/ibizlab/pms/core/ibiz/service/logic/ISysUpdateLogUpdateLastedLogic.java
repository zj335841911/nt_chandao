package cn.ibizlab.pms.core.ibiz.service.logic;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import cn.ibizlab.pms.core.ibiz.domain.SysUpdateLog;

/**
 * 关系型数据实体[UpdateLasted] 对象
 */
public interface ISysUpdateLogUpdateLastedLogic {

    void execute(SysUpdateLog et) ;

}
