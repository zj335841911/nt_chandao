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



