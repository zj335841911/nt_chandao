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
	private String n_pssystype_eq;//[生产体系类型]
	public void setN_pssystype_eq(String n_pssystype_eq) {
        this.n_pssystype_eq = n_pssystype_eq;
        if(!ObjectUtils.isEmpty(this.n_pssystype_eq)){
            this.getSearchCond().eq("pssystype", n_pssystype_eq);
        }
    }
	private BigInteger n_pmsproduct_eq;//[编号]
	public void setN_pmsproduct_eq(BigInteger n_pmsproduct_eq) {
        this.n_pmsproduct_eq = n_pmsproduct_eq;
        if(!ObjectUtils.isEmpty(this.n_pmsproduct_eq)){
            this.getSearchCond().eq("pmsproduct", n_pmsproduct_eq);
        }
    }
	private String n_productname_eq;//[产品]
	public void setN_productname_eq(String n_productname_eq) {
        this.n_productname_eq = n_productname_eq;
        if(!ObjectUtils.isEmpty(this.n_productname_eq)){
            this.getSearchCond().eq("productname", n_productname_eq);
        }
    }
	private String n_productname_like;//[产品]
	public void setN_productname_like(String n_productname_like) {
        this.n_productname_like = n_productname_like;
        if(!ObjectUtils.isEmpty(this.n_productname_like)){
            this.getSearchCond().like("productname", n_productname_like);
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



