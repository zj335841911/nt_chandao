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
 * 实体[文档库]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_doclib",resultMap = "DocLibResultMap")
public class DocLib extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 文档类型
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 收藏者
     */
    @TableField(value = "collector")
    @JSONField(name = "collector")
    @JsonProperty("collector")
    private String collector;
    /**
     * 权限
     */
    @DEField(defaultValue = "open")
    @TableField(value = "acl")
    @JSONField(name = "acl")
    @JsonProperty("acl")
    private String acl;
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
     * 分组
     */
    @TableField(value = "groups")
    @JSONField(name = "groups")
    @JsonProperty("groups")
    private String groups;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 用户
     */
    @TableField(value = "users")
    @JSONField(name = "users")
    @JsonProperty("users")
    private String users;
    /**
     * 是否是主库
     */
    @DEField(defaultValue = "0")
    @TableField(value = "main")
    @JSONField(name = "main")
    @JsonProperty("main")
    private Integer main;
    /**
     * 文档库名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 排序
     */
    @TableField(value = "order")
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;
    /**
     * 项目库
     */
    @TableField(value = "project")
    @JSONField(name = "project")
    @JsonProperty("project")
    private BigInteger project;
    /**
     * 产品库
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztProduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Project ztProject;



    /**
     * 设置 [文档类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }
    /**
     * 设置 [收藏者]
     */
    public void setCollector(String collector){
        this.collector = collector ;
        this.modify("collector",collector);
    }
    /**
     * 设置 [权限]
     */
    public void setAcl(String acl){
        this.acl = acl ;
        this.modify("acl",acl);
    }
    /**
     * 设置 [分组]
     */
    public void setGroups(String groups){
        this.groups = groups ;
        this.modify("groups",groups);
    }
    /**
     * 设置 [用户]
     */
    public void setUsers(String users){
        this.users = users ;
        this.modify("users",users);
    }
    /**
     * 设置 [是否是主库]
     */
    public void setMain(Integer main){
        this.main = main ;
        this.modify("main",main);
    }
    /**
     * 设置 [文档库名称]
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
     * 设置 [项目库]
     */
    public void setProject(BigInteger project){
        this.project = project ;
        this.modify("project",project);
    }
    /**
     * 设置 [产品库]
     */
    public void setProduct(BigInteger product){
        this.product = product ;
        this.modify("product",product);
    }

}


