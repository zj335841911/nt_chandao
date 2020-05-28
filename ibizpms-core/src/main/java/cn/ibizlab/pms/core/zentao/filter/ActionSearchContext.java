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

	private String n_read_eq;//[已读]
	public void setN_read_eq(String n_read_eq) {
        this.n_read_eq = n_read_eq;
        if(!ObjectUtils.isEmpty(this.n_read_eq)){
            this.getSelectCond().eq("read", n_read_eq);
        }
    }
	private String n_action_eq;//[动作]
	public void setN_action_eq(String n_action_eq) {
        this.n_action_eq = n_action_eq;
        if(!ObjectUtils.isEmpty(this.n_action_eq)){
            this.getSelectCond().eq("action", n_action_eq);
        }
    }
	private BigInteger n_project_eq;//[项目]
	public void setN_project_eq(BigInteger n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSelectCond().eq("project", n_project_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
			this.getSelectCond().or().like("comment",query);
		 }
	}
}




