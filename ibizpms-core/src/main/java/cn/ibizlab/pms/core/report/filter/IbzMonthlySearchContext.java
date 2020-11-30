package cn.ibizlab.pms.core.report.filter;

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
import cn.ibizlab.pms.core.report.domain.IbzMonthly;
/**
 * 关系型数据实体[IbzMonthly] 查询条件对象
 */
@Slf4j
@Data
public class IbzMonthlySearchContext extends QueryWrapperContext<IbzMonthly> {

	private String n_ibz_monthlyname_like;//[月报名称]
	public void setN_ibz_monthlyname_like(String n_ibz_monthlyname_like) {
        this.n_ibz_monthlyname_like = n_ibz_monthlyname_like;
        if(!ObjectUtils.isEmpty(this.n_ibz_monthlyname_like)){
            this.getSearchCond().like("`ibz_monthlyname`", n_ibz_monthlyname_like);
        }
    }
	private String n_account_eq;//[用户]
	public void setN_account_eq(String n_account_eq) {
        this.n_account_eq = n_account_eq;
        if(!ObjectUtils.isEmpty(this.n_account_eq)){
            this.getSearchCond().eq("`account`", n_account_eq);
        }
    }
	private String n_reportto_eq;//[汇报]
	public void setN_reportto_eq(String n_reportto_eq) {
        this.n_reportto_eq = n_reportto_eq;
        if(!ObjectUtils.isEmpty(this.n_reportto_eq)){
            this.getSearchCond().eq("`reportto`", n_reportto_eq);
        }
    }
	private String n_issubmit_eq;//[是否提交]
	public void setN_issubmit_eq(String n_issubmit_eq) {
        this.n_issubmit_eq = n_issubmit_eq;
        if(!ObjectUtils.isEmpty(this.n_issubmit_eq)){
            this.getSearchCond().eq("`issubmit`", n_issubmit_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
    @Override
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
            this.getSearchCond().and( wrapper ->
                     wrapper.like("`ibz_monthlyname`", query)
            );
		 }
	}
}



