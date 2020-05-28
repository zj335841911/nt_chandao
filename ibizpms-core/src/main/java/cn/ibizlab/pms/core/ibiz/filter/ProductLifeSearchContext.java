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
import cn.ibizlab.pms.core.ibiz.domain.ProductLife;
/**
 * 关系型数据实体[ProductLife] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductLifeSearchContext extends QueryWrapperContext<ProductLife> {

	private String n_ibz_productlifename_like;//[产品生命周期名称]
	public void setN_ibz_productlifename_like(String n_ibz_productlifename_like) {
        this.n_ibz_productlifename_like = n_ibz_productlifename_like;
        if(!ObjectUtils.isEmpty(this.n_ibz_productlifename_like)){
            this.getSelectCond().like("ibz_productlifename", n_ibz_productlifename_like);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
			this.getSelectCond().or().like("ibz_productlifename",query);
		 }
	}
}




