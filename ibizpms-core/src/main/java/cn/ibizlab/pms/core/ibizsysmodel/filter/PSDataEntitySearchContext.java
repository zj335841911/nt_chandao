package cn.ibizlab.pms.core.ibizsysmodel.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;

import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;


import cn.ibizlab.pms.util.filter.SearchContextBase;

/**
 * ServiceApi数据实体[PSDataEntity] 查询条件对象
 */
@Slf4j
@Data
public class PSDataEntitySearchContext extends SearchContextBase {
	private String n_psdataentityname_like;//[实体名称]

	private String n_psmodulename_eq;//[系统模块]

	private String n_psmodulename_like;//[系统模块]

	private String n_psmoduleid_eq;//[系统模块]

	private String n_decat_eq;//[实体类别]

	private Integer n_dynamicmode_eq;//[扩展模式]

	private Integer n_detype_eq;//[实体类型]

	private String n_indexdetype_eq;//[索引类型]

	private Integer n_lockflag_eq;//[模型锁模式]

	private String n_usercat_eq;//[用户分类]

}


