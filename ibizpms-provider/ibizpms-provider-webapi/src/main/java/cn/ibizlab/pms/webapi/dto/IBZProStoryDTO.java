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
 * 服务DTO对象[IBZProStoryDTO]
 */
@Data
public class IBZProStoryDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;

    /**
     * 属性 [MODULE]
     *
     */
    @JSONField(name = "module")
    @JsonProperty("module")
    private BigInteger module;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;

    /**
     * 属性 [IBIZ_ID]
     *
     */
    @JSONField(name = "ibizid")
    @JsonProperty("ibizid")
    private String ibizid;

    /**
     * 属性 [SOURCE]
     *
     */
    @JSONField(name = "source")
    @JsonProperty("source")
    private String source;

    /**
     * 属性 [SOURCENOTE]
     *
     */
    @JSONField(name = "sourcenote")
    @JsonProperty("sourcenote")
    private String sourcenote;

    /**
     * 属性 [IBIZ_SOURCEOBJECT]
     *
     */
    @JSONField(name = "ibiz_sourceobject")
    @JsonProperty("ibiz_sourceobject")
    private String ibizSourceobject;

    /**
     * 属性 [IBIZ_SOURCENAME]
     *
     */
    @JSONField(name = "ibiz_sourcename")
    @JsonProperty("ibiz_sourcename")
    private String ibizSourcename;

    /**
     * 属性 [IBIZ_SOURCEID]
     *
     */
    @JSONField(name = "ibiz_sourceid")
    @JsonProperty("ibiz_sourceid")
    private String ibizSourceid;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 属性 [ESTIMATE]
     *
     */
    @JSONField(name = "estimate")
    @JsonProperty("estimate")
    private Double estimate;

    /**
     * 属性 [KEYWORDS]
     *
     */
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    private String keywords;

    /**
     * 属性 [OPENEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;

    /**
     * 属性 [LASTEDITEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [OPENEDBY]
     *
     */
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private String openedby;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [STAGE]
     *
     */
    @JSONField(name = "stage")
    @JsonProperty("stage")
    private String stage;

    /**
     * 属性 [PRI]
     *
     */
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;

    /**
     * 属性 [COLOR]
     *
     */
    @JSONField(name = "color")
    @JsonProperty("color")
    private String color;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    private String project;

    /**
     * 属性 [STAGEDBY]
     *
     */
    @JSONField(name = "stagedby")
    @JsonProperty("stagedby")
    private String stagedby;

    /**
     * 属性 [ASSIGNEDTO]
     *
     */
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    private String assignedto;

    /**
     * 属性 [ASSIGNEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "assigneddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("assigneddate")
    private Timestamp assigneddate;

    /**
     * 属性 [REVIEWEDBY]
     *
     */
    @JSONField(name = "reviewedby")
    @JsonProperty("reviewedby")
    private String reviewedby;

    /**
     * 属性 [REVIEWEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "revieweddate" , format="yyyy-MM-dd")
    @JsonProperty("revieweddate")
    private Timestamp revieweddate;

    /**
     * 属性 [BRANCH]
     *
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Integer branch;

    /**
     * 属性 [MAILTO]
     *
     */
    @JSONField(name = "mailto")
    @JsonProperty("mailto")
    private String mailto;

    /**
     * 属性 [LASTEDITEDBY]
     *
     */
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    private String lasteditedby;

    /**
     * 属性 [CHILDSTORIES]
     *
     */
    @JSONField(name = "childstories")
    @JsonProperty("childstories")
    private String childstories;

    /**
     * 属性 [LINKSTORIES]
     *
     */
    @JSONField(name = "linkstories")
    @JsonProperty("linkstories")
    private String linkstories;

    /**
     * 属性 [CLOSEDBY]
     *
     */
    @JSONField(name = "closedby")
    @JsonProperty("closedby")
    private String closedby;

    /**
     * 属性 [SUBSTATUS]
     *
     */
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    private String substatus;

    /**
     * 属性 [CLOSEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "closeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("closeddate")
    private Timestamp closeddate;

    /**
     * 属性 [CLOSEDREASON]
     *
     */
    @JSONField(name = "closedreason")
    @JsonProperty("closedreason")
    private String closedreason;

    /**
     * 属性 [TOBUG]
     *
     */
    @JSONField(name = "tobug")
    @JsonProperty("tobug")
    private Integer tobug;

    /**
     * 属性 [DUPLICATESTORY]
     *
     */
    @JSONField(name = "duplicatestory")
    @JsonProperty("duplicatestory")
    private Integer duplicatestory;

    /**
     * 属性 [FROMBUG]
     *
     */
    @JSONField(name = "frombug")
    @JsonProperty("frombug")
    private Integer frombug;

    /**
     * 属性 [SPEC]
     *
     */
    @JSONField(name = "spec")
    @JsonProperty("spec")
    private String spec;

    /**
     * 属性 [VERIFY]
     *
     */
    @JSONField(name = "verify")
    @JsonProperty("verify")
    private String verify;


    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [MODULE]
     */
    public void setModule(BigInteger  module){
        this.module = module ;
        this.modify("module",module);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(BigInteger  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [IBIZ_ID]
     */
    public void setIbizid(String  ibizid){
        this.ibizid = ibizid ;
        this.modify("ibiz_id",ibizid);
    }

    /**
     * 设置 [SOURCE]
     */
    public void setSource(String  source){
        this.source = source ;
        this.modify("source",source);
    }

    /**
     * 设置 [SOURCENOTE]
     */
    public void setSourcenote(String  sourcenote){
        this.sourcenote = sourcenote ;
        this.modify("sourcenote",sourcenote);
    }

    /**
     * 设置 [IBIZ_SOURCEOBJECT]
     */
    public void setIbizSourceobject(String  ibizSourceobject){
        this.ibizSourceobject = ibizSourceobject ;
        this.modify("ibiz_sourceobject",ibizSourceobject);
    }

    /**
     * 设置 [IBIZ_SOURCENAME]
     */
    public void setIbizSourcename(String  ibizSourcename){
        this.ibizSourcename = ibizSourcename ;
        this.modify("ibiz_sourcename",ibizSourcename);
    }

    /**
     * 设置 [IBIZ_SOURCEID]
     */
    public void setIbizSourceid(String  ibizSourceid){
        this.ibizSourceid = ibizSourceid ;
        this.modify("ibiz_sourceid",ibizSourceid);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [ESTIMATE]
     */
    public void setEstimate(Double  estimate){
        this.estimate = estimate ;
        this.modify("estimate",estimate);
    }

    /**
     * 设置 [KEYWORDS]
     */
    public void setKeywords(String  keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }

    /**
     * 设置 [LASTEDITEDDATE]
     */
    public void setLastediteddate(Timestamp  lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }

    /**
     * 设置 [OPENEDBY]
     */
    public void setOpenedby(String  openedby){
        this.openedby = openedby ;
        this.modify("openedby",openedby);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [STAGE]
     */
    public void setStage(String  stage){
        this.stage = stage ;
        this.modify("stage",stage);
    }

    /**
     * 设置 [PRI]
     */
    public void setPri(Integer  pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [COLOR]
     */
    public void setColor(String  color){
        this.color = color ;
        this.modify("color",color);
    }

    /**
     * 设置 [STAGEDBY]
     */
    public void setStagedby(String  stagedby){
        this.stagedby = stagedby ;
        this.modify("stagedby",stagedby);
    }

    /**
     * 设置 [ASSIGNEDTO]
     */
    public void setAssignedto(String  assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [ASSIGNEDDATE]
     */
    public void setAssigneddate(Timestamp  assigneddate){
        this.assigneddate = assigneddate ;
        this.modify("assigneddate",assigneddate);
    }

    /**
     * 设置 [REVIEWEDBY]
     */
    public void setReviewedby(String  reviewedby){
        this.reviewedby = reviewedby ;
        this.modify("reviewedby",reviewedby);
    }

    /**
     * 设置 [REVIEWEDDATE]
     */
    public void setRevieweddate(Timestamp  revieweddate){
        this.revieweddate = revieweddate ;
        this.modify("revieweddate",revieweddate);
    }

    /**
     * 设置 [BRANCH]
     */
    public void setBranch(Integer  branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [MAILTO]
     */
    public void setMailto(String  mailto){
        this.mailto = mailto ;
        this.modify("mailto",mailto);
    }

    /**
     * 设置 [LASTEDITEDBY]
     */
    public void setLasteditedby(String  lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }

    /**
     * 设置 [CHILDSTORIES]
     */
    public void setChildstories(String  childstories){
        this.childstories = childstories ;
        this.modify("childstories",childstories);
    }

    /**
     * 设置 [LINKSTORIES]
     */
    public void setLinkstories(String  linkstories){
        this.linkstories = linkstories ;
        this.modify("linkstories",linkstories);
    }

    /**
     * 设置 [CLOSEDBY]
     */
    public void setClosedby(String  closedby){
        this.closedby = closedby ;
        this.modify("closedby",closedby);
    }

    /**
     * 设置 [SUBSTATUS]
     */
    public void setSubstatus(String  substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [CLOSEDDATE]
     */
    public void setCloseddate(Timestamp  closeddate){
        this.closeddate = closeddate ;
        this.modify("closeddate",closeddate);
    }

    /**
     * 设置 [CLOSEDREASON]
     */
    public void setClosedreason(String  closedreason){
        this.closedreason = closedreason ;
        this.modify("closedreason",closedreason);
    }

    /**
     * 设置 [TOBUG]
     */
    public void setTobug(Integer  tobug){
        this.tobug = tobug ;
        this.modify("tobug",tobug);
    }

    /**
     * 设置 [DUPLICATESTORY]
     */
    public void setDuplicatestory(Integer  duplicatestory){
        this.duplicatestory = duplicatestory ;
        this.modify("duplicatestory",duplicatestory);
    }

    /**
     * 设置 [FROMBUG]
     */
    public void setFrombug(Integer  frombug){
        this.frombug = frombug ;
        this.modify("frombug",frombug);
    }


}

