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
import cn.ibizlab.pms.core.zentao.domain.Task;
/**
 * 关系型数据实体[Task] 查询条件对象
 */
@Slf4j
@Data
public class TaskSearchContext extends QueryWrapperContext<Task> {

	private String n_canceledby_eq;//[由谁取消]
	public void setN_canceledby_eq(String n_canceledby_eq) {
        this.n_canceledby_eq = n_canceledby_eq;
        if(!ObjectUtils.isEmpty(this.n_canceledby_eq)){
            this.getSearchCond().eq("canceledby", n_canceledby_eq);
        }
    }
	private String n_color_eq;//[标题颜色]
	public void setN_color_eq(String n_color_eq) {
        this.n_color_eq = n_color_eq;
        if(!ObjectUtils.isEmpty(this.n_color_eq)){
            this.getSearchCond().eq("color", n_color_eq);
        }
    }
	private String n_finishedby_eq;//[由谁完成]
	public void setN_finishedby_eq(String n_finishedby_eq) {
        this.n_finishedby_eq = n_finishedby_eq;
        if(!ObjectUtils.isEmpty(this.n_finishedby_eq)){
            this.getSearchCond().eq("finishedby", n_finishedby_eq);
        }
    }
	private String n_closedby_eq;//[由谁关闭]
	public void setN_closedby_eq(String n_closedby_eq) {
        this.n_closedby_eq = n_closedby_eq;
        if(!ObjectUtils.isEmpty(this.n_closedby_eq)){
            this.getSearchCond().eq("closedby", n_closedby_eq);
        }
    }
	private String n_closedreason_eq;//[关闭原因]
	public void setN_closedreason_eq(String n_closedreason_eq) {
        this.n_closedreason_eq = n_closedreason_eq;
        if(!ObjectUtils.isEmpty(this.n_closedreason_eq)){
            this.getSearchCond().eq("closedreason", n_closedreason_eq);
        }
    }
	private Integer n_pri_eq;//[优先级]
	public void setN_pri_eq(Integer n_pri_eq) {
        this.n_pri_eq = n_pri_eq;
        if(!ObjectUtils.isEmpty(this.n_pri_eq)){
            this.getSearchCond().eq("pri", n_pri_eq);
        }
    }
	private String n_lasteditedby_eq;//[最后修改]
	public void setN_lasteditedby_eq(String n_lasteditedby_eq) {
        this.n_lasteditedby_eq = n_lasteditedby_eq;
        if(!ObjectUtils.isEmpty(this.n_lasteditedby_eq)){
            this.getSearchCond().eq("lasteditedby", n_lasteditedby_eq);
        }
    }
	private String n_status_eq;//[任务状态]
	public void setN_status_eq(String n_status_eq) {
        this.n_status_eq = n_status_eq;
        if(!ObjectUtils.isEmpty(this.n_status_eq)){
            this.getSearchCond().eq("status", n_status_eq);
        }
    }
	private String n_status_noteq;//[任务状态]
	public void setN_status_noteq(String n_status_noteq) {
        this.n_status_noteq = n_status_noteq;
        if(!ObjectUtils.isEmpty(this.n_status_noteq)){
            this.getSearchCond().ne("status", n_status_noteq);
        }
    }
	private String n_name_like;//[任务名称]
	public void setN_name_like(String n_name_like) {
        this.n_name_like = n_name_like;
        if(!ObjectUtils.isEmpty(this.n_name_like)){
            this.getSearchCond().like("name", n_name_like);
        }
    }
	private String n_type_eq;//[任务类型]
	public void setN_type_eq(String n_type_eq) {
        this.n_type_eq = n_type_eq;
        if(!ObjectUtils.isEmpty(this.n_type_eq)){
            this.getSearchCond().eq("type", n_type_eq);
        }
    }
	private String n_assignedto_eq;//[指派给]
	public void setN_assignedto_eq(String n_assignedto_eq) {
        this.n_assignedto_eq = n_assignedto_eq;
        if(!ObjectUtils.isEmpty(this.n_assignedto_eq)){
            this.getSearchCond().eq("assignedto", n_assignedto_eq);
        }
    }
	private String n_openedby_eq;//[由谁创建]
	public void setN_openedby_eq(String n_openedby_eq) {
        this.n_openedby_eq = n_openedby_eq;
        if(!ObjectUtils.isEmpty(this.n_openedby_eq)){
            this.getSearchCond().eq("openedby", n_openedby_eq);
        }
    }
	private String n_modulename_eq;//[所属模块]
	public void setN_modulename_eq(String n_modulename_eq) {
        this.n_modulename_eq = n_modulename_eq;
        if(!ObjectUtils.isEmpty(this.n_modulename_eq)){
            this.getSearchCond().eq("modulename", n_modulename_eq);
        }
    }
	private String n_modulename_like;//[所属模块]
	public void setN_modulename_like(String n_modulename_like) {
        this.n_modulename_like = n_modulename_like;
        if(!ObjectUtils.isEmpty(this.n_modulename_like)){
            this.getSearchCond().like("modulename", n_modulename_like);
        }
    }
	private String n_storyname_eq;//[相关需求]
	public void setN_storyname_eq(String n_storyname_eq) {
        this.n_storyname_eq = n_storyname_eq;
        if(!ObjectUtils.isEmpty(this.n_storyname_eq)){
            this.getSearchCond().eq("storyname", n_storyname_eq);
        }
    }
	private String n_storyname_like;//[相关需求]
	public void setN_storyname_like(String n_storyname_like) {
        this.n_storyname_like = n_storyname_like;
        if(!ObjectUtils.isEmpty(this.n_storyname_like)){
            this.getSearchCond().like("storyname", n_storyname_like);
        }
    }
	private String n_projectname_eq;//[所属项目]
	public void setN_projectname_eq(String n_projectname_eq) {
        this.n_projectname_eq = n_projectname_eq;
        if(!ObjectUtils.isEmpty(this.n_projectname_eq)){
            this.getSearchCond().eq("projectname", n_projectname_eq);
        }
    }
	private String n_projectname_like;//[所属项目]
	public void setN_projectname_like(String n_projectname_like) {
        this.n_projectname_like = n_projectname_like;
        if(!ObjectUtils.isEmpty(this.n_projectname_like)){
            this.getSearchCond().like("projectname", n_projectname_like);
        }
    }
	private BigInteger n_product_eq;//[产品]
	public void setN_product_eq(BigInteger n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSearchCond().eq("product", n_product_eq);
        }
    }
	private String n_parentname_eq;//[父任务]
	public void setN_parentname_eq(String n_parentname_eq) {
        this.n_parentname_eq = n_parentname_eq;
        if(!ObjectUtils.isEmpty(this.n_parentname_eq)){
            this.getSearchCond().eq("parentname", n_parentname_eq);
        }
    }
	private String n_parentname_like;//[父任务]
	public void setN_parentname_like(String n_parentname_like) {
        this.n_parentname_like = n_parentname_like;
        if(!ObjectUtils.isEmpty(this.n_parentname_like)){
            this.getSearchCond().like("parentname", n_parentname_like);
        }
    }
	private BigInteger n_project_eq;//[所属项目]
	public void setN_project_eq(BigInteger n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSearchCond().eq("project", n_project_eq);
        }
    }
	private BigInteger n_story_eq;//[相关需求]
	public void setN_story_eq(BigInteger n_story_eq) {
        this.n_story_eq = n_story_eq;
        if(!ObjectUtils.isEmpty(this.n_story_eq)){
            this.getSearchCond().eq("story", n_story_eq);
        }
    }
	private BigInteger n_parent_eq;//[父任务]
	public void setN_parent_eq(BigInteger n_parent_eq) {
        this.n_parent_eq = n_parent_eq;
        if(!ObjectUtils.isEmpty(this.n_parent_eq)){
            this.getSearchCond().eq("parent", n_parent_eq);
        }
    }
	private BigInteger n_frombug_eq;//[来源Bug]
	public void setN_frombug_eq(BigInteger n_frombug_eq) {
        this.n_frombug_eq = n_frombug_eq;
        if(!ObjectUtils.isEmpty(this.n_frombug_eq)){
            this.getSearchCond().eq("frombug", n_frombug_eq);
        }
    }
	private BigInteger n_module_eq;//[id]
	public void setN_module_eq(BigInteger n_module_eq) {
        this.n_module_eq = n_module_eq;
        if(!ObjectUtils.isEmpty(this.n_module_eq)){
            this.getSearchCond().eq("module", n_module_eq);
        }
    }
	private String n_path_like;//[模块路径]
	public void setN_path_like(String n_path_like) {
        this.n_path_like = n_path_like;
        if(!ObjectUtils.isEmpty(this.n_path_like)){
            this.getSearchCond().like("path", n_path_like);
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
                     wrapper.like("name", query)   
            );
		 }
	}
}




