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
import cn.ibizlab.pms.core.zentao.domain.Doc;
/**
 * 关系型数据实体[Doc] 查询条件对象
 */
@Slf4j
@Data
public class DocSearchContext extends QueryWrapperContext<Doc> {

	private String n_title_like;//[文档标题]
	public void setN_title_like(String n_title_like) {
        this.n_title_like = n_title_like;
        if(!ObjectUtils.isEmpty(this.n_title_like)){
            this.getSelectCond().like("title", n_title_like);
        }
    }
	private BigInteger n_lib_eq;//[所属文档库]
	public void setN_lib_eq(BigInteger n_lib_eq) {
        this.n_lib_eq = n_lib_eq;
        if(!ObjectUtils.isEmpty(this.n_lib_eq)){
            this.getSelectCond().eq("lib", n_lib_eq);
        }
    }
	private BigInteger n_project_eq;//[所属项目]
	public void setN_project_eq(BigInteger n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSelectCond().eq("project", n_project_eq);
        }
    }
	private BigInteger n_product_eq;//[所属产品]
	public void setN_product_eq(BigInteger n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSelectCond().eq("product", n_product_eq);
        }
    }
	private BigInteger n_module_eq;//[所属分类]
	public void setN_module_eq(BigInteger n_module_eq) {
        this.n_module_eq = n_module_eq;
        if(!ObjectUtils.isEmpty(this.n_module_eq)){
            this.getSelectCond().eq("module", n_module_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
            this.getSelectCond().and( wrapper ->
                     wrapper.like("title", query)   
            );
		 }
	}
}




