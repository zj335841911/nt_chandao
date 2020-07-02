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
import cn.ibizlab.pms.core.zentao.domain.Case;
/**
 * 关系型数据实体[Case] 查询条件对象
 */
@Slf4j
@Data
public class CaseSearchContext extends QueryWrapperContext<Case> {

	private String n_color_eq;//[标题颜色]
	public void setN_color_eq(String n_color_eq) {
        this.n_color_eq = n_color_eq;
        if(!ObjectUtils.isEmpty(this.n_color_eq)){
            this.getSearchCond().eq("color", n_color_eq);
        }
    }
	private String n_lastrunresult_eq;//[结果]
	public void setN_lastrunresult_eq(String n_lastrunresult_eq) {
        this.n_lastrunresult_eq = n_lastrunresult_eq;
        if(!ObjectUtils.isEmpty(this.n_lastrunresult_eq)){
            this.getSearchCond().eq("lastrunresult", n_lastrunresult_eq);
        }
    }
	private String n_type_eq;//[用例类型]
	public void setN_type_eq(String n_type_eq) {
        this.n_type_eq = n_type_eq;
        if(!ObjectUtils.isEmpty(this.n_type_eq)){
            this.getSearchCond().eq("type", n_type_eq);
        }
    }
	private String n_status_eq;//[用例状态]
	public void setN_status_eq(String n_status_eq) {
        this.n_status_eq = n_status_eq;
        if(!ObjectUtils.isEmpty(this.n_status_eq)){
            this.getSearchCond().eq("status", n_status_eq);
        }
    }
	private String n_frequency_eq;//[frequency]
	public void setN_frequency_eq(String n_frequency_eq) {
        this.n_frequency_eq = n_frequency_eq;
        if(!ObjectUtils.isEmpty(this.n_frequency_eq)){
            this.getSearchCond().eq("frequency", n_frequency_eq);
        }
    }
	private String n_title_like;//[用例标题]
	public void setN_title_like(String n_title_like) {
        this.n_title_like = n_title_like;
        if(!ObjectUtils.isEmpty(this.n_title_like)){
            this.getSearchCond().like("title", n_title_like);
        }
    }
	private Integer n_pri_eq;//[优先级]
	public void setN_pri_eq(Integer n_pri_eq) {
        this.n_pri_eq = n_pri_eq;
        if(!ObjectUtils.isEmpty(this.n_pri_eq)){
            this.getSearchCond().eq("pri", n_pri_eq);
        }
    }
	private String n_frame_eq;//[工具/框架]
	public void setN_frame_eq(String n_frame_eq) {
        this.n_frame_eq = n_frame_eq;
        if(!ObjectUtils.isEmpty(this.n_frame_eq)){
            this.getSearchCond().eq("frame", n_frame_eq);
        }
    }
	private BigInteger n_fromcaseid_eq;//[来源用例]
	public void setN_fromcaseid_eq(BigInteger n_fromcaseid_eq) {
        this.n_fromcaseid_eq = n_fromcaseid_eq;
        if(!ObjectUtils.isEmpty(this.n_fromcaseid_eq)){
            this.getSearchCond().eq("fromcaseid", n_fromcaseid_eq);
        }
    }
	private BigInteger n_branch_eq;//[平台/分支]
	public void setN_branch_eq(BigInteger n_branch_eq) {
        this.n_branch_eq = n_branch_eq;
        if(!ObjectUtils.isEmpty(this.n_branch_eq)){
            this.getSearchCond().eq("branch", n_branch_eq);
        }
    }
	private BigInteger n_frombug_eq;//[来源Bug]
	public void setN_frombug_eq(BigInteger n_frombug_eq) {
        this.n_frombug_eq = n_frombug_eq;
        if(!ObjectUtils.isEmpty(this.n_frombug_eq)){
            this.getSearchCond().eq("frombug", n_frombug_eq);
        }
    }
	private BigInteger n_story_eq;//[相关需求]
	public void setN_story_eq(BigInteger n_story_eq) {
        this.n_story_eq = n_story_eq;
        if(!ObjectUtils.isEmpty(this.n_story_eq)){
            this.getSearchCond().eq("story", n_story_eq);
        }
    }
	private BigInteger n_product_eq;//[所属产品]
	public void setN_product_eq(BigInteger n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSearchCond().eq("product", n_product_eq);
        }
    }
	private BigInteger n_lib_eq;//[所属库]
	public void setN_lib_eq(BigInteger n_lib_eq) {
        this.n_lib_eq = n_lib_eq;
        if(!ObjectUtils.isEmpty(this.n_lib_eq)){
            this.getSearchCond().eq("lib", n_lib_eq);
        }
    }
	private BigInteger n_module_eq;//[所属模块]
	public void setN_module_eq(BigInteger n_module_eq) {
        this.n_module_eq = n_module_eq;
        if(!ObjectUtils.isEmpty(this.n_module_eq)){
            this.getSearchCond().eq("module", n_module_eq);
        }
    }
	private String n_modulename_eq;//[模块名称]
	public void setN_modulename_eq(String n_modulename_eq) {
        this.n_modulename_eq = n_modulename_eq;
        if(!ObjectUtils.isEmpty(this.n_modulename_eq)){
            this.getSearchCond().eq("modulename", n_modulename_eq);
        }
    }
	private String n_modulename_like;//[模块名称]
	public void setN_modulename_like(String n_modulename_like) {
        this.n_modulename_like = n_modulename_like;
        if(!ObjectUtils.isEmpty(this.n_modulename_like)){
            this.getSearchCond().like("modulename", n_modulename_like);
        }
    }
	private String n_storyname_eq;//[需求名称]
	public void setN_storyname_eq(String n_storyname_eq) {
        this.n_storyname_eq = n_storyname_eq;
        if(!ObjectUtils.isEmpty(this.n_storyname_eq)){
            this.getSearchCond().eq("storyname", n_storyname_eq);
        }
    }
	private String n_storyname_like;//[需求名称]
	public void setN_storyname_like(String n_storyname_like) {
        this.n_storyname_like = n_storyname_like;
        if(!ObjectUtils.isEmpty(this.n_storyname_like)){
            this.getSearchCond().like("storyname", n_storyname_like);
        }
    }
	private String n_productname_eq;//[产品名称]
	public void setN_productname_eq(String n_productname_eq) {
        this.n_productname_eq = n_productname_eq;
        if(!ObjectUtils.isEmpty(this.n_productname_eq)){
            this.getSearchCond().eq("productname", n_productname_eq);
        }
    }
	private String n_productname_like;//[产品名称]
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
                     wrapper.like("title", query)   
            );
		 }
	}
}




