package cn.ibizlab.pms.core.ibiz.filter;

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
import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;
/**
 * 关系型数据实体[ProjectTeam] 查询条件对象
 */
@Slf4j
@Data
public class ProjectTeamSearchContext extends QueryWrapperContext<ProjectTeam> {

	private String n_account_like;//[用户]
	public void setN_account_like(String n_account_like) {
        this.n_account_like = n_account_like;
        if(!ObjectUtils.isEmpty(this.n_account_like)){
            this.getSearchCond().like("account", n_account_like);
        }
    }
	private String n_limited_eq;//[受限用户]
	public void setN_limited_eq(String n_limited_eq) {
        this.n_limited_eq = n_limited_eq;
        if(!ObjectUtils.isEmpty(this.n_limited_eq)){
            this.getSearchCond().eq("limited", n_limited_eq);
        }
    }
	private String n_type_eq;//[团队类型]
	public void setN_type_eq(String n_type_eq) {
        this.n_type_eq = n_type_eq;
        if(!ObjectUtils.isEmpty(this.n_type_eq)){
            this.getSearchCond().eq("type", n_type_eq);
        }
    }
	private BigInteger n_root_eq;//[项目编号]
	public void setN_root_eq(BigInteger n_root_eq) {
        this.n_root_eq = n_root_eq;
        if(!ObjectUtils.isEmpty(this.n_root_eq)){
            this.getSearchCond().eq("root", n_root_eq);
        }
    }
	private String n_dept_eq;//[选择部门]
	public void setN_dept_eq(String n_dept_eq) {
        this.n_dept_eq = n_dept_eq;
        if(!ObjectUtils.isEmpty(this.n_dept_eq)){
            this.getSearchCond().eq("dept", n_dept_eq);
        }
    }
	private String n_managemembers_eq;//[复制团队]
	public void setN_managemembers_eq(String n_managemembers_eq) {
        this.n_managemembers_eq = n_managemembers_eq;
        if(!ObjectUtils.isEmpty(this.n_managemembers_eq)){
            this.getSearchCond().eq("managemembers", n_managemembers_eq);
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
                     wrapper.like("account", query)   
            );
		 }
	}
}



