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


import cn.ibizlab.pms.util.filter.QueryWrapperContext;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
/**
 * 关系型数据实体[IBZProProduct] 查询条件对象
 */
@Slf4j
@Data
public class IBZProProductSearchContext extends QueryWrapperContext<IBZProProduct> {

	private String n_ibzpro_productname_like;//[产品（开发系统）名称]
	public void setN_ibzpro_productname_like(String n_ibzpro_productname_like) {
        this.n_ibzpro_productname_like = n_ibzpro_productname_like;
        if(!ObjectUtils.isEmpty(this.n_ibzpro_productname_like)){
            this.getSearchCond().like("ibzpro_productname", n_ibzpro_productname_like);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
            this.getSearchCond().and( wrapper ->
                     wrapper.like("ibzpro_productname", query)   
            );
		 }
	}
}



