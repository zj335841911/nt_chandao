package cn.ibizlab.pms.core.ibizpro.domain;

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

/**
 * 实体[需求模块]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_module",resultMap = "IBZProStoryModuleResultMap")
public class IBZProStoryModule extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 编号
     */
    @TableField(value = "root")
    @JSONField(name = "root")
    @JsonProperty("root")
    private BigInteger root;
    /**
     * IBIZ标识
     */
    @DEField(name = "ibiz_id")
    @TableField(value = "ibiz_id")
    @JSONField(name = "ibizid")
    @JsonProperty("ibizid")
    private String ibizid;
    /**
     * 需求模块类型
     */
    @TableField(value = "storytype")
    @JSONField(name = "storytype")
    @JsonProperty("storytype")
    private String storytype;
    /**
     * 类型
     */
    @DEField(defaultValue = "story")
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 级别
     */
    @DEField(defaultValue = "0")
    @TableField(value = "grade")
    @JSONField(name = "grade")
    @JsonProperty("grade")
    private Integer grade;
    /**
     * 路径
     */
    @DEField(defaultValue = "，")
    @TableField(value = "path")
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;
    /**
     * 简称
     */
    @DEField(defaultValue = "/")
    @TableField(value = "short")
    @JSONField(name = "ibizshort")
    @JsonProperty("ibizshort")
    private String ibizshort;
    /**
     * id
     */
    @TableField(value = "parent")
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;

    /**
     * 产品
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct ibzproproduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule parentmodule;



    /**
     * 设置 [名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [编号]
     */
    public void setRoot(BigInteger root){
        this.root = root ;
        this.modify("root",root);
    }

    /**
     * 设置 [IBIZ标识]
     */
    public void setIbizid(String ibizid){
        this.ibizid = ibizid ;
        this.modify("ibiz_id",ibizid);
    }

    /**
     * 设置 [需求模块类型]
     */
    public void setStorytype(String storytype){
        this.storytype = storytype ;
        this.modify("storytype",storytype);
    }

    /**
     * 设置 [类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [级别]
     */
    public void setGrade(Integer grade){
        this.grade = grade ;
        this.modify("grade",grade);
    }

    /**
     * 设置 [路径]
     */
    public void setPath(String path){
        this.path = path ;
        this.modify("path",path);
    }

    /**
     * 设置 [简称]
     */
    public void setIbizshort(String ibizshort){
        this.ibizshort = ibizshort ;
        this.modify("short",ibizshort);
    }

    /**
     * 设置 [id]
     */
    public void setParent(BigInteger parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }


}


