package cn.ibizlab.pms.core.zentao.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
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


import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;


/**
 * 实体[部门]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_dept",resultMap = "DeptResultMap")
public class Dept extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * manager
     */
    @TableField(value = "manager")
    @JSONField(name = "manager")
    @JsonProperty("manager")
    private String manager;
    /**
     * grade
     */
    @DEField(defaultValue = "0")
    @TableField(value = "grade")
    @JSONField(name = "grade")
    @JsonProperty("grade")
    private Integer grade;
    /**
     * function
     */
    @TableField(value = "function")
    @JSONField(name = "function")
    @JsonProperty("function")
    private String function;
    /**
     * order
     */
    @DEField(defaultValue = "0")
    @TableField(value = "order")
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;
    /**
     * path
     */
    @TableField(value = "path")
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;
    /**
     * position
     */
    @TableField(value = "position")
    @JSONField(name = "position")
    @JsonProperty("position")
    private String position;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * name
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * parent
     */
    @TableField(exist = false)
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    private String parentname;
    /**
     * parent
     */
    @TableField(value = "parent")
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Dept ibizparent;



    /**
     * 设置 [manager]
     */
    public void setManager(String manager){
        this.manager = manager ;
        this.modify("manager",manager);
    }
    /**
     * 设置 [grade]
     */
    public void setGrade(Integer grade){
        this.grade = grade ;
        this.modify("grade",grade);
    }
    /**
     * 设置 [function]
     */
    public void setFunction(String function){
        this.function = function ;
        this.modify("function",function);
    }
    /**
     * 设置 [order]
     */
    public void setOrder(Integer order){
        this.order = order ;
        this.modify("order",order);
    }
    /**
     * 设置 [path]
     */
    public void setPath(String path){
        this.path = path ;
        this.modify("path",path);
    }
    /**
     * 设置 [position]
     */
    public void setPosition(String position){
        this.position = position ;
        this.modify("position",position);
    }
    /**
     * 设置 [name]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }
    /**
     * 设置 [parent]
     */
    public void setParent(BigInteger parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

}


