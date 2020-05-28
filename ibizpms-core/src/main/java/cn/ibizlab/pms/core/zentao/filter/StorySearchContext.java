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
import cn.ibizlab.pms.core.zentao.domain.Story;
/**
 * 关系型数据实体[Story] 查询条件对象
 */
@Slf4j
@Data
public class StorySearchContext extends QueryWrapperContext<Story> {

	private String n_assignedto_eq;//[指派给]
	public void setN_assignedto_eq(String n_assignedto_eq) {
        this.n_assignedto_eq = n_assignedto_eq;
        if(!ObjectUtils.isEmpty(this.n_assignedto_eq)){
            this.getSelectCond().eq("assignedto", n_assignedto_eq);
        }
    }
	private String n_plan_eq;//[所属计划]
	public void setN_plan_eq(String n_plan_eq) {
        this.n_plan_eq = n_plan_eq;
        if(!ObjectUtils.isEmpty(this.n_plan_eq)){
            this.getSelectCond().eq("plan", n_plan_eq);
        }
    }
	private String n_status_eq;//[当前状态]
	public void setN_status_eq(String n_status_eq) {
        this.n_status_eq = n_status_eq;
        if(!ObjectUtils.isEmpty(this.n_status_eq)){
            this.getSelectCond().eq("status", n_status_eq);
        }
    }
	private String n_title_like;//[需求名称]
	public void setN_title_like(String n_title_like) {
        this.n_title_like = n_title_like;
        if(!ObjectUtils.isEmpty(this.n_title_like)){
            this.getSelectCond().like("title", n_title_like);
        }
    }
	private String n_reviewedby_eq;//[由谁评审]
	public void setN_reviewedby_eq(String n_reviewedby_eq) {
        this.n_reviewedby_eq = n_reviewedby_eq;
        if(!ObjectUtils.isEmpty(this.n_reviewedby_eq)){
            this.getSelectCond().eq("reviewedby", n_reviewedby_eq);
        }
    }
	private String n_openedby_eq;//[由谁创建]
	public void setN_openedby_eq(String n_openedby_eq) {
        this.n_openedby_eq = n_openedby_eq;
        if(!ObjectUtils.isEmpty(this.n_openedby_eq)){
            this.getSelectCond().eq("openedby", n_openedby_eq);
        }
    }
	private String n_stage_eq;//[所处阶段]
	public void setN_stage_eq(String n_stage_eq) {
        this.n_stage_eq = n_stage_eq;
        if(!ObjectUtils.isEmpty(this.n_stage_eq)){
            this.getSelectCond().eq("stage", n_stage_eq);
        }
    }
	private String n_stage_noteq;//[所处阶段]
	public void setN_stage_noteq(String n_stage_noteq) {
        this.n_stage_noteq = n_stage_noteq;
        if(!ObjectUtils.isEmpty(this.n_stage_noteq)){
            this.getSelectCond().ne("stage", n_stage_noteq);
        }
    }
	private String n_closedby_eq;//[由谁关闭]
	public void setN_closedby_eq(String n_closedby_eq) {
        this.n_closedby_eq = n_closedby_eq;
        if(!ObjectUtils.isEmpty(this.n_closedby_eq)){
            this.getSelectCond().eq("closedby", n_closedby_eq);
        }
    }
	private String n_path_like;//[模块路径]
	public void setN_path_like(String n_path_like) {
        this.n_path_like = n_path_like;
        if(!ObjectUtils.isEmpty(this.n_path_like)){
            this.getSelectCond().like("path", n_path_like);
        }
    }
	private String n_parentname_eq;//[父需求名称]
	public void setN_parentname_eq(String n_parentname_eq) {
        this.n_parentname_eq = n_parentname_eq;
        if(!ObjectUtils.isEmpty(this.n_parentname_eq)){
            this.getSelectCond().eq("parentname", n_parentname_eq);
        }
    }
	private String n_parentname_like;//[父需求名称]
	public void setN_parentname_like(String n_parentname_like) {
        this.n_parentname_like = n_parentname_like;
        if(!ObjectUtils.isEmpty(this.n_parentname_like)){
            this.getSelectCond().like("parentname", n_parentname_like);
        }
    }
	private String n_modulename_eq;//[所属模块名称]
	public void setN_modulename_eq(String n_modulename_eq) {
        this.n_modulename_eq = n_modulename_eq;
        if(!ObjectUtils.isEmpty(this.n_modulename_eq)){
            this.getSelectCond().eq("modulename", n_modulename_eq);
        }
    }
	private String n_modulename_like;//[所属模块名称]
	public void setN_modulename_like(String n_modulename_like) {
        this.n_modulename_like = n_modulename_like;
        if(!ObjectUtils.isEmpty(this.n_modulename_like)){
            this.getSelectCond().like("modulename", n_modulename_like);
        }
    }
	private String n_prodoctname_eq;//[产品名称]
	public void setN_prodoctname_eq(String n_prodoctname_eq) {
        this.n_prodoctname_eq = n_prodoctname_eq;
        if(!ObjectUtils.isEmpty(this.n_prodoctname_eq)){
            this.getSelectCond().eq("prodoctname", n_prodoctname_eq);
        }
    }
	private String n_prodoctname_like;//[产品名称]
	public void setN_prodoctname_like(String n_prodoctname_like) {
        this.n_prodoctname_like = n_prodoctname_like;
        if(!ObjectUtils.isEmpty(this.n_prodoctname_like)){
            this.getSelectCond().like("prodoctname", n_prodoctname_like);
        }
    }
	private BigInteger n_parent_eq;//[父需求]
	public void setN_parent_eq(BigInteger n_parent_eq) {
        this.n_parent_eq = n_parent_eq;
        if(!ObjectUtils.isEmpty(this.n_parent_eq)){
            this.getSelectCond().eq("parent", n_parent_eq);
        }
    }
	private BigInteger n_module_eq;//[所属模块]
	public void setN_module_eq(BigInteger n_module_eq) {
        this.n_module_eq = n_module_eq;
        if(!ObjectUtils.isEmpty(this.n_module_eq)){
            this.getSelectCond().eq("module", n_module_eq);
        }
    }
	private BigInteger n_product_eq;//[所属产品]
	public void setN_product_eq(BigInteger n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSelectCond().eq("product", n_product_eq);
        }
    }
	private BigInteger n_duplicatestory_eq;//[重复需求ID]
	public void setN_duplicatestory_eq(BigInteger n_duplicatestory_eq) {
        this.n_duplicatestory_eq = n_duplicatestory_eq;
        if(!ObjectUtils.isEmpty(this.n_duplicatestory_eq)){
            this.getSelectCond().eq("duplicatestory", n_duplicatestory_eq);
        }
    }
	private BigInteger n_branch_eq;//[平台/分支]
	public void setN_branch_eq(BigInteger n_branch_eq) {
        this.n_branch_eq = n_branch_eq;
        if(!ObjectUtils.isEmpty(this.n_branch_eq)){
            this.getSelectCond().eq("branch", n_branch_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
            this.getSelectCond().and( wrapper ->
                     wrapper.like("title", query)   
            );
		 }
	}
}




