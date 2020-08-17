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
 * 服务DTO对象[IbzLibModuleDTO]
 */
@Data
public class IbzLibModuleDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [BRANCH]
     *
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Integer branch;

    /**
     * 属性 [SHORT]
     *
     */
    @JSONField(name = "ibizshort")
    @JsonProperty("ibizshort")
    private String ibizshort;

    /**
     * 属性 [GRADE]
     *
     */
    @JSONField(name = "grade")
    @JsonProperty("grade")
    private Integer grade;

    /**
     * 属性 [ORDER]
     *
     */
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [COLLECTOR]
     *
     */
    @JSONField(name = "collector")
    @JsonProperty("collector")
    private String collector;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [ISLEAF]
     *
     */
    @JSONField(name = "isleaf")
    @JsonProperty("isleaf")
    private String isleaf;

    /**
     * 属性 [OWNER]
     *
     */
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [PATH]
     *
     */
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;

    /**
     * 属性 [PARENT]
     *
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;

    /**
     * 属性 [ROOT]
     *
     */
    @JSONField(name = "root")
    @JsonProperty("root")
    private BigInteger root;

    /**
     * 属性 [PARENTNAME]
     *
     */
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    private String parentname;

    /**
     * 属性 [ROOTNAME]
     *
     */
    @JSONField(name = "rootname")
    @JsonProperty("rootname")
    private String rootname;


    /**
     * 设置 [BRANCH]
     */
    public void setBranch(Integer  branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [SHORT]
     */
    public void setIbizshort(String  ibizshort){
        this.ibizshort = ibizshort ;
        this.modify("short",ibizshort);
    }

    /**
     * 设置 [GRADE]
     */
    public void setGrade(Integer  grade){
        this.grade = grade ;
        this.modify("grade",grade);
    }

    /**
     * 设置 [ORDER]
     */
    public void setOrder(Integer  order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [COLLECTOR]
     */
    public void setCollector(String  collector){
        this.collector = collector ;
        this.modify("collector",collector);
    }

    /**
     * 设置 [OWNER]
     */
    public void setOwner(String  owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }

    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [PATH]
     */
    public void setPath(String  path){
        this.path = path ;
        this.modify("path",path);
    }

    /**
     * 设置 [PARENT]
     */
    public void setParent(BigInteger  parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [ROOT]
     */
    public void setRoot(BigInteger  root){
        this.root = root ;
        this.modify("root",root);
    }

    /**
     * 设置 [PARENTNAME]
     */
    public void setParentname(String  parentname){
        this.parentname = parentname ;
        this.modify("parentname",parentname);
    }

    /**
     * 设置 [ROOTNAME]
     */
    public void setRootname(String  rootname){
        this.rootname = rootname ;
        this.modify("rootname",rootname);
    }


}

