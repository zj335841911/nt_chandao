package cn.ibizlab.pms.core.ibizpro.filter;

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
import cn.ibizlab.pms.core.ibizpro.domain.IBZSysTpl;
/**
 * 关系型数据实体[IBZSysTpl] 查询条件对象
 */
@Slf4j
@Data
public class IBZSysTplSearchContext extends QueryWrapperContext<IBZSysTpl> {

	private String n_ibz_systplname_like;//[系统模板名称]
	public void setN_ibz_systplname_like(String n_ibz_systplname_like) {
        this.n_ibz_systplname_like = n_ibz_systplname_like;
        if(!ObjectUtils.isEmpty(this.n_ibz_systplname_like)){
            this.getSearchCond().like("ibz_systplname", n_ibz_systplname_like);
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
                     wrapper.like("ibz_systplname", query)   
            );
		 }
	}
}



