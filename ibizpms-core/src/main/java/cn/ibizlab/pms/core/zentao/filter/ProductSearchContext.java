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
import cn.ibizlab.pms.core.zentao.domain.Product;
/**
 * 关系型数据实体[Product] 查询条件对象
 */
@Slf4j
@Data
public class ProductSearchContext extends QueryWrapperContext<Product> {

	private String n_acl_eq;//[访问控制]
	public void setN_acl_eq(String n_acl_eq) {
        this.n_acl_eq = n_acl_eq;
        if(!ObjectUtils.isEmpty(this.n_acl_eq)){
            this.getSearchCond().eq("acl", n_acl_eq);
        }
    }
	private String n_name_like;//[产品名称]
	public void setN_name_like(String n_name_like) {
        this.n_name_like = n_name_like;
        if(!ObjectUtils.isEmpty(this.n_name_like)){
            this.getSearchCond().like("name", n_name_like);
        }
    }
	private String n_linename_eq;//[产品线]
	public void setN_linename_eq(String n_linename_eq) {
        this.n_linename_eq = n_linename_eq;
        if(!ObjectUtils.isEmpty(this.n_linename_eq)){
            this.getSearchCond().eq("linename", n_linename_eq);
        }
    }
	private String n_linename_like;//[产品线]
	public void setN_linename_like(String n_linename_like) {
        this.n_linename_like = n_linename_like;
        if(!ObjectUtils.isEmpty(this.n_linename_like)){
            this.getSearchCond().like("linename", n_linename_like);
        }
    }
	private BigInteger n_line_eq;//[产品线]
	public void setN_line_eq(BigInteger n_line_eq) {
        this.n_line_eq = n_line_eq;
        if(!ObjectUtils.isEmpty(this.n_line_eq)){
            this.getSearchCond().eq("line", n_line_eq);
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




