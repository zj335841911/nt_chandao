package cn.ibizlab.pms.core.ibizpro.filter;

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
import org.elasticsearch.index.query.QueryBuilders;


import cn.ibizlab.pms.util.filter.SearchContextBase;

/**
 * ServiceApi数据实体[IbizproIndex] 查询条件对象
 */
@Slf4j
@Data
public class IbizproIndexSearchContext extends SearchContextBase {
	private String n_index_type_eq;//[类型]

	private String n_indexname_like;//[标题[需求、任务等]]

}


