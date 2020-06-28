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
import cn.ibizlab.pms.core.zentao.domain.TestTask;
/**
 * 关系型数据实体[TestTask] 查询条件对象
 */
@Slf4j
@Data
public class TestTaskSearchContext extends QueryWrapperContext<TestTask> {

	private String n_status_eq;//[当前状态]
	public void setN_status_eq(String n_status_eq) {
        this.n_status_eq = n_status_eq;
        if(!ObjectUtils.isEmpty(this.n_status_eq)){
            this.getSearchCond().eq("status", n_status_eq);
        }
    }
	private String n_name_like;//[名称]
	public void setN_name_like(String n_name_like) {
        this.n_name_like = n_name_like;
        if(!ObjectUtils.isEmpty(this.n_name_like)){
            this.getSearchCond().like("name", n_name_like);
        }
    }
	private BigInteger n_product_eq;//[所属产品]
	public void setN_product_eq(BigInteger n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSearchCond().eq("product", n_product_eq);
        }
    }
	private BigInteger n_build_eq;//[版本]
	public void setN_build_eq(BigInteger n_build_eq) {
        this.n_build_eq = n_build_eq;
        if(!ObjectUtils.isEmpty(this.n_build_eq)){
            this.getSearchCond().eq("build", n_build_eq);
        }
    }
	private BigInteger n_project_eq;//[所属项目]
	public void setN_project_eq(BigInteger n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSearchCond().eq("project", n_project_eq);
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
	private String n_projecttname_eq;//[项目]
	public void setN_projecttname_eq(String n_projecttname_eq) {
        this.n_projecttname_eq = n_projecttname_eq;
        if(!ObjectUtils.isEmpty(this.n_projecttname_eq)){
            this.getSearchCond().eq("projecttname", n_projecttname_eq);
        }
    }
	private String n_projecttname_like;//[项目]
	public void setN_projecttname_like(String n_projecttname_like) {
        this.n_projecttname_like = n_projecttname_like;
        if(!ObjectUtils.isEmpty(this.n_projecttname_like)){
            this.getSearchCond().like("projecttname", n_projecttname_like);
        }
    }
	private String n_buildname_eq;//[版本]
	public void setN_buildname_eq(String n_buildname_eq) {
        this.n_buildname_eq = n_buildname_eq;
        if(!ObjectUtils.isEmpty(this.n_buildname_eq)){
            this.getSearchCond().eq("buildname", n_buildname_eq);
        }
    }
	private String n_buildname_like;//[版本]
	public void setN_buildname_like(String n_buildname_like) {
        this.n_buildname_like = n_buildname_like;
        if(!ObjectUtils.isEmpty(this.n_buildname_like)){
            this.getSearchCond().like("buildname", n_buildname_like);
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




