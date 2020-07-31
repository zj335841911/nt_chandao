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
import lombok.Data;

/**
 * 服务DTO对象[ProductDTO]
 */
@Data
public class ProductDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [QD]
     *
     */
    @JSONField(name = "qd")
    @JsonProperty("qd")
    private String qd;

    /**
     * 属性 [ACL]
     *
     */
    @JSONField(name = "acl")
    @JsonProperty("acl")
    private String acl;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [WHITELIST]
     *
     */
    @JSONField(name = "whitelist")
    @JsonProperty("whitelist")
    private String whitelist;

    /**
     * 属性 [RD]
     *
     */
    @JSONField(name = "rd")
    @JsonProperty("rd")
    private String rd;

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
     * 属性 [PO]
     *
     */
    @JSONField(name = "po")
    @JsonProperty("po")
    private String po;

    /**
     * 属性 [DESC]
     *
     */
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;

    /**
     * 属性 [CREATEDBY]
     *
     */
    @JSONField(name = "createdby")
    @JsonProperty("createdby")
    private String createdby;

    /**
     * 属性 [CREATEDVERSION]
     *
     */
    @JSONField(name = "createdversion")
    @JsonProperty("createdversion")
    private String createdversion;

    /**
     * 属性 [SUBSTATUS]
     *
     */
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    private String substatus;

    /**
     * 属性 [CODE]
     *
     */
    @JSONField(name = "code")
    @JsonProperty("code")
    private String code;

    /**
     * 属性 [CREATEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createddate")
    private Timestamp createddate;

    /**
     * 属性 [LINENAME]
     *
     */
    @JSONField(name = "linename")
    @JsonProperty("linename")
    private String linename;

    /**
     * 属性 [LINE]
     *
     */
    @JSONField(name = "line")
    @JsonProperty("line")
    private BigInteger line;

    /**
     * 属性 [ACTIVEBUGCNT]
     *
     */
    @JSONField(name = "activebugcnt")
    @JsonProperty("activebugcnt")
    private Integer activebugcnt;

    /**
     * 属性 [PRODUCTPLANCNT]
     *
     */
    @JSONField(name = "productplancnt")
    @JsonProperty("productplancnt")
    private Integer productplancnt;

    /**
     * 属性 [RELEASECNT]
     *
     */
    @JSONField(name = "releasecnt")
    @JsonProperty("releasecnt")
    private Integer releasecnt;

    /**
     * 属性 [ACTIVESTORYCNT]
     *
     */
    @JSONField(name = "activestorycnt")
    @JsonProperty("activestorycnt")
    private Integer activestorycnt;

    /**
     * 属性 [UNCONFIRMBUGCNT]
     *
     */
    @JSONField(name = "unconfirmbugcnt")
    @JsonProperty("unconfirmbugcnt")
    private Integer unconfirmbugcnt;

    /**
     * 属性 [NOTCLOSEDBUGCNT]
     *
     */
    @JSONField(name = "notclosedbugcnt")
    @JsonProperty("notclosedbugcnt")
    private Integer notclosedbugcnt;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;

    /**
     * 属性 [RELATEDBUGCNT]
     *
     */
    @JSONField(name = "relatedbugcnt")
    @JsonProperty("relatedbugcnt")
    private Integer relatedbugcnt;

    /**
     * 属性 [CHANGEDSTORYCNT]
     *
     */
    @JSONField(name = "changedstorycnt")
    @JsonProperty("changedstorycnt")
    private Integer changedstorycnt;

    /**
     * 属性 [DRAFTSTORYCNT]
     *
     */
    @JSONField(name = "draftstorycnt")
    @JsonProperty("draftstorycnt")
    private Integer draftstorycnt;

    /**
     * 属性 [CLOSEDSTORYCNT]
     *
     */
    @JSONField(name = "closedstorycnt")
    @JsonProperty("closedstorycnt")
    private Integer closedstorycnt;

    /**
     * 属性 [RELATEDPROJECTS]
     *
     */
    @JSONField(name = "relatedprojects")
    @JsonProperty("relatedprojects")
    private Integer relatedprojects;

    /**
     * 属性 [DOCCNT]
     *
     */
    @JSONField(name = "doccnt")
    @JsonProperty("doccnt")
    private Integer doccnt;

    /**
     * 属性 [BUILDCNT]
     *
     */
    @JSONField(name = "buildcnt")
    @JsonProperty("buildcnt")
    private Integer buildcnt;

    /**
     * 属性 [CASECNT]
     *
     */
    @JSONField(name = "casecnt")
    @JsonProperty("casecnt")
    private Integer casecnt;


    /**
     * 设置 [QD]
     */
    public void setQd(String  qd){
        this.qd = qd ;
        this.modify("qd",qd);
    }

    /**
     * 设置 [ACL]
     */
    public void setAcl(String  acl){
        this.acl = acl ;
        this.modify("acl",acl);
    }

    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [WHITELIST]
     */
    public void setWhitelist(String  whitelist){
        this.whitelist = whitelist ;
        this.modify("whitelist",whitelist);
    }

    /**
     * 设置 [RD]
     */
    public void setRd(String  rd){
        this.rd = rd ;
        this.modify("rd",rd);
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
     * 设置 [PO]
     */
    public void setPo(String  po){
        this.po = po ;
        this.modify("po",po);
    }

    /**
     * 设置 [DESC]
     */
    public void setDesc(String  desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [CREATEDVERSION]
     */
    public void setCreatedversion(String  createdversion){
        this.createdversion = createdversion ;
        this.modify("createdversion",createdversion);
    }

    /**
     * 设置 [SUBSTATUS]
     */
    public void setSubstatus(String  substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [CODE]
     */
    public void setCode(String  code){
        this.code = code ;
        this.modify("code",code);
    }

    /**
     * 设置 [LINE]
     */
    public void setLine(BigInteger  line){
        this.line = line ;
        this.modify("line",line);
    }


}

