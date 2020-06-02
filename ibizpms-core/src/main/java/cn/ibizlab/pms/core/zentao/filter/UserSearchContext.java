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
import cn.ibizlab.pms.core.zentao.domain.User;
/**
 * 关系型数据实体[User] 查询条件对象
 */
@Slf4j
@Data
public class UserSearchContext extends QueryWrapperContext<User> {

	private String n_clientstatus_eq;//[clientStatus]
	public void setN_clientstatus_eq(String n_clientstatus_eq) {
        this.n_clientstatus_eq = n_clientstatus_eq;
        if(!ObjectUtils.isEmpty(this.n_clientstatus_eq)){
            this.getSelectCond().eq("clientstatus", n_clientstatus_eq);
        }
    }
	private String n_gender_eq;//[性别]
	public void setN_gender_eq(String n_gender_eq) {
        this.n_gender_eq = n_gender_eq;
        if(!ObjectUtils.isEmpty(this.n_gender_eq)){
            this.getSelectCond().eq("gender", n_gender_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
		 }
	}
}




