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
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule;
/**
 * 关系型数据实体[IBZProStoryModule] 查询条件对象
 */
@Slf4j
@Data
public class IBZProStoryModuleSearchContext extends QueryWrapperContext<IBZProStoryModule> {

	private String n_ibzpro_storymodulename_like;//[需求模块名称]
	public void setN_ibzpro_storymodulename_like(String n_ibzpro_storymodulename_like) {
        this.n_ibzpro_storymodulename_like = n_ibzpro_storymodulename_like;
        if(!ObjectUtils.isEmpty(this.n_ibzpro_storymodulename_like)){
            this.getSearchCond().like("ibzpro_storymodulename", n_ibzpro_storymodulename_like);
        }
    }
	private String n_product_eq;//[产品（开发系统）标识]
	public void setN_product_eq(String n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSearchCond().eq("product", n_product_eq);
        }
    }
	private BigInteger n_pmsstorymodule_eq;//[id]
	public void setN_pmsstorymodule_eq(BigInteger n_pmsstorymodule_eq) {
        this.n_pmsstorymodule_eq = n_pmsstorymodule_eq;
        if(!ObjectUtils.isEmpty(this.n_pmsstorymodule_eq)){
            this.getSearchCond().eq("pmsstorymodule", n_pmsstorymodule_eq);
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
	private String n_pmsstorymodulename_eq;//[模块]
	public void setN_pmsstorymodulename_eq(String n_pmsstorymodulename_eq) {
        this.n_pmsstorymodulename_eq = n_pmsstorymodulename_eq;
        if(!ObjectUtils.isEmpty(this.n_pmsstorymodulename_eq)){
            this.getSearchCond().eq("pmsstorymodulename", n_pmsstorymodulename_eq);
        }
    }
	private String n_pmsstorymodulename_like;//[模块]
	public void setN_pmsstorymodulename_like(String n_pmsstorymodulename_like) {
        this.n_pmsstorymodulename_like = n_pmsstorymodulename_like;
        if(!ObjectUtils.isEmpty(this.n_pmsstorymodulename_like)){
            this.getSearchCond().like("pmsstorymodulename", n_pmsstorymodulename_like);
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
                     wrapper.like("ibzpro_storymodulename", query)   
            );
		 }
	}
}



