package cn.ibizlab.pms.core.zentao.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.annotation.DEField;
import cn.ibizlab.pms.util.enums.DEPredefinedFieldType;
import cn.ibizlab.pms.util.enums.DEFieldDefaultValueType;
import java.io.Serializable;
import lombok.*;
import org.springframework.data.annotation.Transient;
import cn.ibizlab.pms.util.annotation.Audit;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

/**
 * 实体[项目产品]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_projectproduct",resultMap = "ProjectProductResultMap")
public class ProjectProduct extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 虚拟主键
     */
    @TableId(value= "id",type=IdType.ASSIGN_UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private String id;
    /**
     * 产品
     */
    @TableField(exist = false)
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;
    /**
     * 项目
     */
    @TableField(exist = false)
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    private String projectname;
    /**
     * 计划名称
     */
    @TableField(exist = false)
    @JSONField(name = "planname")
    @JsonProperty("planname")
    private String planname;
    /**
     * 产品
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;
    /**
     * 产品计划
     */
    @TableField(value = "plan")
    @JSONField(name = "plan")
    @JsonProperty("plan")
    private Long plan;
    /**
     * 平台/分支
     */
    @TableField(value = "branch")
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Long branch;
    /**
     * 项目
     */
    @TableField(value = "project")
    @JSONField(name = "project")
    @JsonProperty("project")
    private Long project;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Branch ztbranch;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.ProductPlan ztproductplan;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztproduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Project ztproject;



    /**
     * 设置 [产品]
     */
    public void setProduct(Long product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [产品计划]
     */
    public void setPlan(Long plan){
        this.plan = plan ;
        this.modify("plan",plan);
    }

    /**
     * 设置 [平台/分支]
     */
    public void setBranch(Long branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [项目]
     */
    public void setProject(Long project){
        this.project = project ;
        this.modify("project",project);
    }


}


