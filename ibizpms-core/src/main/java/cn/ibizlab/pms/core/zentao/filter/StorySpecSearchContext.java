package cn.ibizlab.pms.core.zentao.filter;

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
import cn.ibizlab.pms.core.zentao.domain.StorySpec;
/**
 * 关系型数据实体[StorySpec] 查询条件对象
 */
@Slf4j
@Data
public class StorySpecSearchContext extends QueryWrapperContext<StorySpec> {

	private Integer n_duplicatestory_eq;//[重复需求ID]
	public void setN_duplicatestory_eq(Integer n_duplicatestory_eq) {
        this.n_duplicatestory_eq = n_duplicatestory_eq;
        if(!ObjectUtils.isEmpty(this.n_duplicatestory_eq)){
            this.getSelectCond().eq("duplicatestory", n_duplicatestory_eq);
        }
    }
	private String n_title_like;//[需求名称]
	public void setN_title_like(String n_title_like) {
        this.n_title_like = n_title_like;
        if(!ObjectUtils.isEmpty(this.n_title_like)){
            this.getSelectCond().like("title", n_title_like);
        }
    }
	private Integer n_version_eq;//[版本号]
	public void setN_version_eq(Integer n_version_eq) {
        this.n_version_eq = n_version_eq;
        if(!ObjectUtils.isEmpty(this.n_version_eq)){
            this.getSelectCond().eq("version", n_version_eq);
        }
    }
	private BigInteger n_story_eq;//[需求]
	public void setN_story_eq(BigInteger n_story_eq) {
        this.n_story_eq = n_story_eq;
        if(!ObjectUtils.isEmpty(this.n_story_eq)){
            this.getSelectCond().eq("story", n_story_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
			this.getSelectCond().or().like("title",query);
		 }
	}
}




