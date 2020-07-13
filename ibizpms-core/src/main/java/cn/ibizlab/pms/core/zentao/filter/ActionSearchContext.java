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
import cn.ibizlab.pms.core.zentao.domain.Action;
/**
 * 关系型数据实体[Action] 查询条件对象
 */
@Slf4j
@Data
public class ActionSearchContext extends QueryWrapperContext<Action> {

	private String n_objecttype_eq;//[对象类型]
	public void setN_objecttype_eq(String n_objecttype_eq) {
        this.n_objecttype_eq = n_objecttype_eq;
        if(!ObjectUtils.isEmpty(this.n_objecttype_eq)){
            this.getSearchCond().eq("objecttype", n_objecttype_eq);
        }
    }
	private String n_read_eq;//[已读]
	public void setN_read_eq(String n_read_eq) {
        this.n_read_eq = n_read_eq;
        if(!ObjectUtils.isEmpty(this.n_read_eq)){
            this.getSearchCond().eq("read", n_read_eq);
        }
    }
	private String n_action_eq;//[动作]
	public void setN_action_eq(String n_action_eq) {
        this.n_action_eq = n_action_eq;
        if(!ObjectUtils.isEmpty(this.n_action_eq)){
            this.getSearchCond().eq("action", n_action_eq);
        }
    }
	private Integer n_objectid_eq;//[对象ID]
	public void setN_objectid_eq(Integer n_objectid_eq) {
        this.n_objectid_eq = n_objectid_eq;
        if(!ObjectUtils.isEmpty(this.n_objectid_eq)){
            this.getSearchCond().eq("objectid", n_objectid_eq);
        }
    }
	private BigInteger n_project_eq;//[项目]
	public void setN_project_eq(BigInteger n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSearchCond().eq("project", n_project_eq);
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
                     wrapper.like("comment", query)   
            );
		 }
	}
}




