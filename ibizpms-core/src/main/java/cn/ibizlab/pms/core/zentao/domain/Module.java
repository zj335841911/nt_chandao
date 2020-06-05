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
 * 实体[模块]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_module",resultMap = "ModuleResultMap")
public class Module extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 所属根
     */
    @DEField(defaultValue = "0")
    @TableField(value = "root")
    @JSONField(name = "root")
    @JsonProperty("root")
    private String root;
    /**
     * 级别
     */
    @DEField(defaultValue = "0")
    @TableField(value = "grade")
    @JSONField(name = "grade")
    @JsonProperty("grade")
    private Integer grade;
    /**
     * 类型
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 模块名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 排序
     */
    @DEField(defaultValue = "0")
    @TableField(value = "order")
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;
    /**
     * 负责人
     */
    @TableField(value = "owner")
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 收藏者
     */
    @TableField(value = "collector")
    @JSONField(name = "collector")
    @JsonProperty("collector")
    private String collector;
    /**
     * 简称
     */
    @DEField(name = "short")
    @TableField(value = "short")
    @JSONField(name = "ibizshort")
    @JsonProperty("ibizshort")
    private String ibizshort;
    /**
     * 路径
     */
    @TableField(value = "path")
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "0" , logicdelval="1")
    @TableLogic(value= "0",delval="1")
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * 上级模块
     */
    @TableField(exist = false)
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    private String parentname;
    /**
     * 平台/分支
     */
    @DEField(defaultValue = "0")
    @TableField(value = "branch")
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private BigInteger branch;
    /**
     * 上级模块
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
    private cn.ibizlab.pms.core.zentao.domain.Branch ztBranchBranch;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Module ibizparent;



    /**
     * 设置 [所属根]
     */
    public void setRoot(String root){
        this.root = root ;
        this.modify("root",root);
    }
    /**
     * 设置 [级别]
     */
    public void setGrade(Integer grade){
        this.grade = grade ;
        this.modify("grade",grade);
    }
    /**
     * 设置 [类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }
    /**
     * 设置 [模块名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }
    /**
     * 设置 [排序]
     */
    public void setOrder(Integer order){
        this.order = order ;
        this.modify("order",order);
    }
    /**
     * 设置 [负责人]
     */
    public void setOwner(String owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }
    /**
     * 设置 [收藏者]
     */
    public void setCollector(String collector){
        this.collector = collector ;
        this.modify("collector",collector);
    }
    /**
     * 设置 [简称]
     */
    public void setIbizshort(String ibizshort){
        this.ibizshort = ibizshort ;
        this.modify("short",ibizshort);
    }
    /**
     * 设置 [路径]
     */
    public void setPath(String path){
        this.path = path ;
        this.modify("path",path);
    }
    /**
     * 设置 [平台/分支]
     */
    public void setBranch(BigInteger branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }
    /**
     * 设置 [上级模块]
     */
    public void setParent(BigInteger parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

}


