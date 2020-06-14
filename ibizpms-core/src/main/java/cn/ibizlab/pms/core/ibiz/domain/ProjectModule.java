package cn.ibizlab.pms.core.ibiz.domain;

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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[任务模块]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_module",resultMap = "ProjectModuleResultMap")
public class ProjectModule extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 类型（task）
     */
    @DEField(defaultValue = "task")
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * collector
     */
    @TableField(value = "collector")
    @JSONField(name = "collector")
    @JsonProperty("collector")
    private String collector;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 逻辑删除标志
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "0" , logicdelval="1")
    @TableLogic(value= "0",delval="1")
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * 叶子模块
     */
    @TableField(exist = false)
    @JSONField(name = "isleaf")
    @JsonProperty("isleaf")
    private String isleaf;
    /**
     * path
     */
    @TableField(value = "path")
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;
    /**
     * owner
     */
    @TableField(value = "owner")
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;
    /**
     * 短名称
     */
    @DEField(name = "short")
    @TableField(value = "short")
    @JSONField(name = "ibizshort")
    @JsonProperty("ibizshort")
    private String ibizshort;
    /**
     * 名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * grade
     */
    @DEField(defaultValue = "0")
    @TableField(value = "grade")
    @JSONField(name = "grade")
    @JsonProperty("grade")
    private Integer grade;
    /**
     * order
     */
    @DEField(defaultValue = "0")
    @TableField(value = "order")
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;
    /**
     * branch
     */
    @DEField(defaultValue = "0")
    @TableField(value = "branch")
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Integer branch;
    /**
     * id
     */
    @TableField(value = "parent")
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;
    /**
     * 项目
     */
    @TableField(value = "root")
    @JSONField(name = "root")
    @JsonProperty("root")
    private BigInteger root;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibiz.domain.ProjectModule parentmodule;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Project ztproject;



    /**
     * 设置 [类型（task）]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [collector]
     */
    public void setCollector(String collector){
        this.collector = collector ;
        this.modify("collector",collector);
    }

    /**
     * 设置 [path]
     */
    public void setPath(String path){
        this.path = path ;
        this.modify("path",path);
    }

    /**
     * 设置 [owner]
     */
    public void setOwner(String owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }

    /**
     * 设置 [短名称]
     */
    public void setIbizshort(String ibizshort){
        this.ibizshort = ibizshort ;
        this.modify("short",ibizshort);
    }

    /**
     * 设置 [名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [grade]
     */
    public void setGrade(Integer grade){
        this.grade = grade ;
        this.modify("grade",grade);
    }

    /**
     * 设置 [order]
     */
    public void setOrder(Integer order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [branch]
     */
    public void setBranch(Integer branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [id]
     */
    public void setParent(BigInteger parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [项目]
     */
    public void setRoot(BigInteger root){
        this.root = root ;
        this.modify("root",root);
    }


}


