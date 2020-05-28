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
import cn.ibizlab.pms.core.zentao.domain.Project;
/**
 * 关系型数据实体[Project] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectSearchContext extends QueryWrapperContext<Project> {

	private String n_acl_eq;//[访问控制]
	public void setN_acl_eq(String n_acl_eq) {
        this.n_acl_eq = n_acl_eq;
        if(!ObjectUtils.isEmpty(this.n_acl_eq)){
            this.getSelectCond().eq("acl", n_acl_eq);
        }
    }
	private String n_name_like;//[项目名称]
	public void setN_name_like(String n_name_like) {
        this.n_name_like = n_name_like;
        if(!ObjectUtils.isEmpty(this.n_name_like)){
            this.getSelectCond().like("name", n_name_like);
        }
    }
	private String n_pri_eq;//[优先级]
	public void setN_pri_eq(String n_pri_eq) {
        this.n_pri_eq = n_pri_eq;
        if(!ObjectUtils.isEmpty(this.n_pri_eq)){
            this.getSelectCond().eq("pri", n_pri_eq);
        }
    }
	private String n_statge_eq;//[statge]
	public void setN_statge_eq(String n_statge_eq) {
        this.n_statge_eq = n_statge_eq;
        if(!ObjectUtils.isEmpty(this.n_statge_eq)){
            this.getSelectCond().eq("statge", n_statge_eq);
        }
    }
	private Integer n_iscat_eq;//[isCat]
	public void setN_iscat_eq(Integer n_iscat_eq) {
        this.n_iscat_eq = n_iscat_eq;
        if(!ObjectUtils.isEmpty(this.n_iscat_eq)){
            this.getSelectCond().eq("iscat", n_iscat_eq);
        }
    }
	private String n_parentname_eq;//[parent]
	public void setN_parentname_eq(String n_parentname_eq) {
        this.n_parentname_eq = n_parentname_eq;
        if(!ObjectUtils.isEmpty(this.n_parentname_eq)){
            this.getSelectCond().eq("parentname", n_parentname_eq);
        }
    }
	private String n_parentname_like;//[parent]
	public void setN_parentname_like(String n_parentname_like) {
        this.n_parentname_like = n_parentname_like;
        if(!ObjectUtils.isEmpty(this.n_parentname_like)){
            this.getSelectCond().like("parentname", n_parentname_like);
        }
    }
	private BigInteger n_parent_eq;//[父项目]
	public void setN_parent_eq(BigInteger n_parent_eq) {
        this.n_parent_eq = n_parent_eq;
        if(!ObjectUtils.isEmpty(this.n_parent_eq)){
            this.getSelectCond().eq("parent", n_parent_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
			this.getSelectCond().or().like("name",query);
		 }
	}
}




