package cn.ibizlab.pms.core.zentao.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;

import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;


import cn.ibizlab.pms.util.filter.QueryWrapperContext;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import cn.ibizlab.pms.core.zentao.domain.UserTpl;
/**
 * 关系型数据实体[UserTpl] 查询条件对象
 */
@Slf4j
@Data
public class UserTplSearchContext extends QueryWrapperContext<UserTpl> {

	private String n_title_like;//[title]
	public void setN_title_like(String n_title_like) {
        this.n_title_like = n_title_like;
        if(!ObjectUtils.isEmpty(this.n_title_like)){
            this.getSelectCond().like("title", n_title_like);
        }
    }
	private String n_public_eq;//[public]
	public void setN_public_eq(String n_public_eq) {
        this.n_public_eq = n_public_eq;
        if(!ObjectUtils.isEmpty(this.n_public_eq)){
            this.getSelectCond().eq("public", n_public_eq);
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




