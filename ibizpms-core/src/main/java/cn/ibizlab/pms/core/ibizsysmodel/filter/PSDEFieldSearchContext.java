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
 * ServiceApi数据实体[PSDEField] 查询条件对象
 */
@Slf4j
@Data
public class PSDEFieldSearchContext extends SearchContextBase {
	private String n_psdefieldname_like;//[实体属性名称]

	private Integer n_deftype_eq;//[属性类型]

	private String n_dvt_eq;//[默认值类型]

	private Integer n_pkey_eq;//[主键属性]

	private String n_predefinetype_eq;//[系统预置属性]

	private String n_unionkeyvalue_eq;//[联合键值]

	private String n_usercat_eq;//[用户分类]

}


