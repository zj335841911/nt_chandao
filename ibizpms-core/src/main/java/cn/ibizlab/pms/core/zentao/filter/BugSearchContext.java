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
import cn.ibizlab.pms.core.zentao.domain.Bug;
/**
 * 关系型数据实体[Bug] 查询条件对象
 */
@Slf4j
@Data
public class BugSearchContext extends QueryWrapperContext<Bug> {

	private String n_status_eq;//[Bug状态]
	public void setN_status_eq(String n_status_eq) {
        this.n_status_eq = n_status_eq;
        if(!ObjectUtils.isEmpty(this.n_status_eq)){
            this.getSelectCond().eq("status", n_status_eq);
        }
    }
	private String n_title_like;//[Bug标题]
	public void setN_title_like(String n_title_like) {
        this.n_title_like = n_title_like;
        if(!ObjectUtils.isEmpty(this.n_title_like)){
            this.getSelectCond().like("title", n_title_like);
        }
    }
	private String n_productname_eq;//[产品]
	public void setN_productname_eq(String n_productname_eq) {
        this.n_productname_eq = n_productname_eq;
        if(!ObjectUtils.isEmpty(this.n_productname_eq)){
            this.getSelectCond().eq("productname", n_productname_eq);
        }
    }
	private String n_productname_like;//[产品]
	public void setN_productname_like(String n_productname_like) {
        this.n_productname_like = n_productname_like;
        if(!ObjectUtils.isEmpty(this.n_productname_like)){
            this.getSelectCond().like("productname", n_productname_like);
        }
    }
	private String n_projectname_eq;//[项目]
	public void setN_projectname_eq(String n_projectname_eq) {
        this.n_projectname_eq = n_projectname_eq;
        if(!ObjectUtils.isEmpty(this.n_projectname_eq)){
            this.getSelectCond().eq("projectname", n_projectname_eq);
        }
    }
	private String n_projectname_like;//[项目]
	public void setN_projectname_like(String n_projectname_like) {
        this.n_projectname_like = n_projectname_like;
        if(!ObjectUtils.isEmpty(this.n_projectname_like)){
            this.getSelectCond().like("projectname", n_projectname_like);
        }
    }
	private String n_storyname_eq;//[需求]
	public void setN_storyname_eq(String n_storyname_eq) {
        this.n_storyname_eq = n_storyname_eq;
        if(!ObjectUtils.isEmpty(this.n_storyname_eq)){
            this.getSelectCond().eq("storyname", n_storyname_eq);
        }
    }
	private String n_storyname_like;//[需求]
	public void setN_storyname_like(String n_storyname_like) {
        this.n_storyname_like = n_storyname_like;
        if(!ObjectUtils.isEmpty(this.n_storyname_like)){
            this.getSelectCond().like("storyname", n_storyname_like);
        }
    }
	private BigInteger n_tostory_eq;//[转需求]
	public void setN_tostory_eq(BigInteger n_tostory_eq) {
        this.n_tostory_eq = n_tostory_eq;
        if(!ObjectUtils.isEmpty(this.n_tostory_eq)){
            this.getSelectCond().eq("tostory", n_tostory_eq);
        }
    }
	private BigInteger n_product_eq;//[所属产品]
	public void setN_product_eq(BigInteger n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSelectCond().eq("product", n_product_eq);
        }
    }
	private BigInteger n_totask_eq;//[转任务]
	public void setN_totask_eq(BigInteger n_totask_eq) {
        this.n_totask_eq = n_totask_eq;
        if(!ObjectUtils.isEmpty(this.n_totask_eq)){
            this.getSelectCond().eq("totask", n_totask_eq);
        }
    }
	private BigInteger n_plan_eq;//[所属计划]
	public void setN_plan_eq(BigInteger n_plan_eq) {
        this.n_plan_eq = n_plan_eq;
        if(!ObjectUtils.isEmpty(this.n_plan_eq)){
            this.getSelectCond().eq("plan", n_plan_eq);
        }
    }
	private BigInteger n_module_eq;//[所属模块]
	public void setN_module_eq(BigInteger n_module_eq) {
        this.n_module_eq = n_module_eq;
        if(!ObjectUtils.isEmpty(this.n_module_eq)){
            this.getSelectCond().eq("module", n_module_eq);
        }
    }
	private BigInteger n_branch_eq;//[平台/分支]
	public void setN_branch_eq(BigInteger n_branch_eq) {
        this.n_branch_eq = n_branch_eq;
        if(!ObjectUtils.isEmpty(this.n_branch_eq)){
            this.getSelectCond().eq("branch", n_branch_eq);
        }
    }
	private BigInteger n_duplicatebug_eq;//[重复ID]
	public void setN_duplicatebug_eq(BigInteger n_duplicatebug_eq) {
        this.n_duplicatebug_eq = n_duplicatebug_eq;
        if(!ObjectUtils.isEmpty(this.n_duplicatebug_eq)){
            this.getSelectCond().eq("duplicatebug", n_duplicatebug_eq);
        }
    }
	private BigInteger n_repo_eq;//[代码]
	public void setN_repo_eq(BigInteger n_repo_eq) {
        this.n_repo_eq = n_repo_eq;
        if(!ObjectUtils.isEmpty(this.n_repo_eq)){
            this.getSelectCond().eq("repo", n_repo_eq);
        }
    }
	private BigInteger n_story_eq;//[相关需求]
	public void setN_story_eq(BigInteger n_story_eq) {
        this.n_story_eq = n_story_eq;
        if(!ObjectUtils.isEmpty(this.n_story_eq)){
            this.getSelectCond().eq("story", n_story_eq);
        }
    }
	private BigInteger n_project_eq;//[所属项目]
	public void setN_project_eq(BigInteger n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSelectCond().eq("project", n_project_eq);
        }
    }
	private BigInteger n_task_eq;//[相关任务]
	public void setN_task_eq(BigInteger n_task_eq) {
        this.n_task_eq = n_task_eq;
        if(!ObjectUtils.isEmpty(this.n_task_eq)){
            this.getSelectCond().eq("task", n_task_eq);
        }
    }
	private BigInteger n_testtask_eq;//[测试单]
	public void setN_testtask_eq(BigInteger n_testtask_eq) {
        this.n_testtask_eq = n_testtask_eq;
        if(!ObjectUtils.isEmpty(this.n_testtask_eq)){
            this.getSelectCond().eq("testtask", n_testtask_eq);
        }
    }
	private BigInteger n_resolvedbuild_eq;//[解决版本]
	public void setN_resolvedbuild_eq(BigInteger n_resolvedbuild_eq) {
        this.n_resolvedbuild_eq = n_resolvedbuild_eq;
        if(!ObjectUtils.isEmpty(this.n_resolvedbuild_eq)){
            this.getSelectCond().eq("resolvedbuild", n_resolvedbuild_eq);
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




