package cn.ibizlab.pms.core.zentao.service.logic;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import cn.ibizlab.pms.core.zentao.domain.Bug;

/**
 * 关系型数据实体[sendNotice] 对象
 */
public interface IBugsendNoticeLogic {

    void execute(Bug et) ;

}