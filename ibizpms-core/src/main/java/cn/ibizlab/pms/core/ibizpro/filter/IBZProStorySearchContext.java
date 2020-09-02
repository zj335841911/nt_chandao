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
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
/**
 * 关系型数据实体[IBZProStory] 查询条件对象
 */
@Slf4j
@Data
public class IBZProStorySearchContext extends QueryWrapperContext<IBZProStory> {

	private String n_ibzpro_storyname_like;//[需求名称]
	public void setN_ibzpro_storyname_like(String n_ibzpro_storyname_like) {
        this.n_ibzpro_storyname_like = n_ibzpro_storyname_like;
        if(!ObjectUtils.isEmpty(this.n_ibzpro_storyname_like)){
            this.getSearchCond().like("ibzpro_storyname", n_ibzpro_storyname_like);
        }
    }
	private String n_product_eq;//[产品（开发系统）标识]
	public void setN_product_eq(String n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSearchCond().eq("product", n_product_eq);
        }
    }
	private String n_storymodule_eq;//[需求模块标识]
	public void setN_storymodule_eq(String n_storymodule_eq) {
        this.n_storymodule_eq = n_storymodule_eq;
        if(!ObjectUtils.isEmpty(this.n_storymodule_eq)){
            this.getSearchCond().eq("storymodule", n_storymodule_eq);
        }
    }
	private BigInteger n_pmsstory_eq;//[编号]
	public void setN_pmsstory_eq(BigInteger n_pmsstory_eq) {
        this.n_pmsstory_eq = n_pmsstory_eq;
        if(!ObjectUtils.isEmpty(this.n_pmsstory_eq)){
            this.getSearchCond().eq("pmsstory", n_pmsstory_eq);
        }
    }
	private String n_pmsstoryname_eq;//[需求]
	public void setN_pmsstoryname_eq(String n_pmsstoryname_eq) {
        this.n_pmsstoryname_eq = n_pmsstoryname_eq;
        if(!ObjectUtils.isEmpty(this.n_pmsstoryname_eq)){
            this.getSearchCond().eq("pmsstoryname", n_pmsstoryname_eq);
        }
    }
	private String n_pmsstoryname_like;//[需求]
	public void setN_pmsstoryname_like(String n_pmsstoryname_like) {
        this.n_pmsstoryname_like = n_pmsstoryname_like;
        if(!ObjectUtils.isEmpty(this.n_pmsstoryname_like)){
            this.getSearchCond().like("pmsstoryname", n_pmsstoryname_like);
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
	private String n_storymodulename_eq;//[需求模块]
	public void setN_storymodulename_eq(String n_storymodulename_eq) {
        this.n_storymodulename_eq = n_storymodulename_eq;
        if(!ObjectUtils.isEmpty(this.n_storymodulename_eq)){
            this.getSearchCond().eq("storymodulename", n_storymodulename_eq);
        }
    }
	private String n_storymodulename_like;//[需求模块]
	public void setN_storymodulename_like(String n_storymodulename_like) {
        this.n_storymodulename_like = n_storymodulename_like;
        if(!ObjectUtils.isEmpty(this.n_storymodulename_like)){
            this.getSearchCond().like("storymodulename", n_storymodulename_like);
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
                     wrapper.like("ibzpro_storyname", query)   
            );
		 }
	}
}



