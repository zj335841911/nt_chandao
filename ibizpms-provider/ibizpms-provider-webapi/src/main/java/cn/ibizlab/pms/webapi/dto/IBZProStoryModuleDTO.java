package cn.ibizlab.pms.webapi.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Map;
import java.util.HashMap;
import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[IBZProStoryModuleDTO]
 */
@Data
public class IBZProStoryModuleDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;

    /**
     * 属性 [ROOT]
     *
     */
    @JSONField(name = "root")
    @JsonProperty("root")
    private BigInteger root;

    /**
     * 属性 [IBIZ_ID]
     *
     */
    @JSONField(name = "ibizid")
    @JsonProperty("ibizid")
    private String ibizid;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [GRADE]
     *
     */
    @JSONField(name = "grade")
    @JsonProperty("grade")
    private Integer grade;

    /**
     * 属性 [PATH]
     *
     */
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;

    /**
     * 属性 [SHORT]
     *
     */
    @JSONField(name = "ibizshort")
    @JsonProperty("ibizshort")
    private String ibizshort;

    /**
     * 属性 [PARENT]
     *
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;

    /**
     * 属性 [PRODUCTNAME]
     *
     */
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;

    /**
     * 属性 [OWNER]
     *
     */
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;

    /**
     * 属性 [COLLECTOR]
     *
     */
    @JSONField(name = "collector")
    @JsonProperty("collector")
    private String collector;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [IBIZ_STORYTYPE]
     *
     */
    @JSONField(name = "ibiz_storytype")
    @JsonProperty("ibiz_storytype")
    private String ibizStorytype;


    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [ROOT]
     */
    public void setRoot(BigInteger  root){
        this.root = root ;
        this.modify("root",root);
    }

    /**
     * 设置 [IBIZ_ID]
     */
    public void setIbizid(String  ibizid){
        this.ibizid = ibizid ;
        this.modify("ibiz_id",ibizid);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [GRADE]
     */
    public void setGrade(Integer  grade){
        this.grade = grade ;
        this.modify("grade",grade);
    }

    /**
     * 设置 [PATH]
     */
    public void setPath(String  path){
        this.path = path ;
        this.modify("path",path);
    }

    /**
     * 设置 [SHORT]
     */
    public void setIbizshort(String  ibizshort){
        this.ibizshort = ibizshort ;
        this.modify("short",ibizshort);
    }

    /**
     * 设置 [PARENT]
     */
    public void setParent(BigInteger  parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [OWNER]
     */
    public void setOwner(String  owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }

    /**
     * 设置 [COLLECTOR]
     */
    public void setCollector(String  collector){
        this.collector = collector ;
        this.modify("collector",collector);
    }

    /**
     * 设置 [IBIZ_STORYTYPE]
     */
    public void setIbizStorytype(String  ibizStorytype){
        this.ibizStorytype = ibizStorytype ;
        this.modify("ibiz_storytype",ibizStorytype);
    }


}

