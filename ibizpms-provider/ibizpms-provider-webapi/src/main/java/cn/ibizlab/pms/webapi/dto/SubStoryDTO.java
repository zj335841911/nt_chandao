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
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.alibaba.fastjson.annotation.JSONField;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[SubStoryDTO]
 */
@Data
public class SubStoryDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ASSIGNEDTO]
     *
     */
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String assignedto;

    /**
     * 属性 [CHILDSTORIES]
     *
     */
    @JSONField(name = "childstories")
    @JsonProperty("childstories")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String childstories;

    /**
     * 属性 [PLAN]
     *
     */
    @JSONField(name = "plan")
    @JsonProperty("plan")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String plan;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 属性 [ASSIGNEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "assigneddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("assigneddate")
    private Timestamp assigneddate;

    /**
     * 属性 [PRI]
     *
     */
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;

    /**
     * 属性 [LINKSTORIES]
     *
     */
    @JSONField(name = "linkstories")
    @JsonProperty("linkstories")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String linkstories;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String status;

    /**
     * 属性 [ESTIMATE]
     *
     */
    @JSONField(name = "estimate")
    @JsonProperty("estimate")
    private Double estimate;

    /**
     * 属性 [REVIEWEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "revieweddate" , format="yyyy-MM-dd")
    @JsonProperty("revieweddate")
    private Timestamp revieweddate;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    @NotBlank(message = "[需求名称]不允许为空!")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String title;

    /**
     * 属性 [SOURCENOTE]
     *
     */
    @JSONField(name = "sourcenote")
    @JsonProperty("sourcenote")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String sourcenote;

    /**
     * 属性 [REVIEWEDBY]
     *
     */
    @JSONField(name = "reviewedby")
    @JsonProperty("reviewedby")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String reviewedby;

    /**
     * 属性 [SUBSTATUS]
     *
     */
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String substatus;

    /**
     * 属性 [STAGEDBY]
     *
     */
    @JSONField(name = "stagedby")
    @JsonProperty("stagedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String stagedby;

    /**
     * 属性 [OPENEDBY]
     *
     */
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String openedby;

    /**
     * 属性 [OPENEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    /**
     * 属性 [SOURCE]
     *
     */
    @JSONField(name = "source")
    @JsonProperty("source")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    private String source;

    /**
     * 属性 [CLOSEDREASON]
     *
     */
    @JSONField(name = "closedreason")
    @JsonProperty("closedreason")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String closedreason;

    /**
     * 属性 [COLOR]
     *
     */
    @JSONField(name = "color")
    @JsonProperty("color")
    @Size(min = 0, max = 7, message = "内容长度必须小于等于[7]")
    private String color;

    /**
     * 属性 [MAILTO]
     *
     */
    @JSONField(name = "mailto")
    @JsonProperty("mailto")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String mailto;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [KEYWORDS]
     *
     */
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String keywords;

    /**
     * 属性 [LASTEDITEDBY]
     *
     */
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String lasteditedby;

    /**
     * 属性 [STAGE]
     *
     */
    @JSONField(name = "stage")
    @JsonProperty("stage")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String stage;

    /**
     * 属性 [CLOSEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "closeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("closeddate")
    private Timestamp closeddate;

    /**
     * 属性 [CLOSEDBY]
     *
     */
    @JSONField(name = "closedby")
    @JsonProperty("closedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String closedby;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String type;

    /**
     * 属性 [LASTEDITEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;

    /**
     * 属性 [PATH]
     *
     */
    @JSONField(name = "path")
    @JsonProperty("path")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String path;

    /**
     * 属性 [PARENTNAME]
     *
     */
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String parentname;

    /**
     * 属性 [MODULENAME]
     *
     */
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String modulename;

    /**
     * 属性 [PRODOCTNAME]
     *
     */
    @JSONField(name = "productname")
    @JsonProperty("productname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String productname;

    /**
     * 属性 [FROMBUG]
     *
     */
    @JSONField(name = "frombug")
    @JsonProperty("frombug")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long frombug;

    /**
     * 属性 [PARENT]
     *
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long parent;

    /**
     * 属性 [MODULE]
     *
     */
    @JSONField(name = "module")
    @JsonProperty("module")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long module;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long product;

    /**
     * 属性 [DUPLICATESTORY]
     *
     */
    @JSONField(name = "duplicatestory")
    @JsonProperty("duplicatestory")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long duplicatestory;

    /**
     * 属性 [BRANCH]
     *
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long branch;

    /**
     * 属性 [TOBUG]
     *
     */
    @JSONField(name = "tobug")
    @JsonProperty("tobug")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long tobug;

    /**
     * 属性 [SPEC]
     *
     */
    @JSONField(name = "spec")
    @JsonProperty("spec")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String spec;

    /**
     * 属性 [VERIFY]
     *
     */
    @JSONField(name = "verify")
    @JsonProperty("verify")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String verify;

    /**
     * 属性 [RESULT]
     *
     */
    @JSONField(name = "result")
    @JsonProperty("result")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String result;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String comment;

    /**
     * 属性 [ISLEAF]
     *
     */
    @JSONField(name = "isleaf")
    @JsonProperty("isleaf")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String isleaf;

    /**
     * 属性 [FILES]
     *
     */
    @JSONField(name = "files")
    @JsonProperty("files")
    @Size(min = 0, max = 1000, message = "内容长度必须小于等于[1000]")
    private String files;

    /**
     * 属性 [BRANCHNAME]
     *
     */
    @JSONField(name = "branchname")
    @JsonProperty("branchname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String branchname;

    /**
     * 属性 [VERSIONC]
     *
     */
    @JSONField(name = "versionc")
    @JsonProperty("versionc")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String versionc;

    /**
     * 属性 [MODULENAME1]
     *
     */
    @JSONField(name = "modulename1")
    @JsonProperty("modulename1")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String modulename1;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String project;

    /**
     * 属性 [PREVERSION]
     *
     */
    @JSONField(name = "preversion")
    @JsonProperty("preversion")
    private Integer preversion;

    /**
     * 属性 [NEEDNOTREVIEW]
     *
     */
    @JSONField(name = "neednotreview")
    @JsonProperty("neednotreview")
    @Size(min = 0, max = 4000, message = "内容长度必须小于等于[4000]")
    private String neednotreview;

    /**
     * 属性 [ISFAVORITES]
     *
     */
    @JSONField(name = "isfavorites")
    @JsonProperty("isfavorites")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String isfavorites;

    /**
     * 属性 [ISCHILD]
     *
     */
    @JSONField(name = "ischild")
    @JsonProperty("ischild")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String ischild;


    /**
     * 设置 [ASSIGNEDTO]
     */
    public void setAssignedto(String  assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [CHILDSTORIES]
     */
    public void setChildstories(String  childstories){
        this.childstories = childstories ;
        this.modify("childstories",childstories);
    }

    /**
     * 设置 [PLAN]
     */
    public void setPlan(String  plan){
        this.plan = plan ;
        this.modify("plan",plan);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [ASSIGNEDDATE]
     */
    public void setAssigneddate(Timestamp  assigneddate){
        this.assigneddate = assigneddate ;
        this.modify("assigneddate",assigneddate);
    }

    /**
     * 设置 [PRI]
     */
    public void setPri(Integer  pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [LINKSTORIES]
     */
    public void setLinkstories(String  linkstories){
        this.linkstories = linkstories ;
        this.modify("linkstories",linkstories);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [ESTIMATE]
     */
    public void setEstimate(Double  estimate){
        this.estimate = estimate ;
        this.modify("estimate",estimate);
    }

    /**
     * 设置 [REVIEWEDDATE]
     */
    public void setRevieweddate(Timestamp  revieweddate){
        this.revieweddate = revieweddate ;
        this.modify("revieweddate",revieweddate);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [SOURCENOTE]
     */
    public void setSourcenote(String  sourcenote){
        this.sourcenote = sourcenote ;
        this.modify("sourcenote",sourcenote);
    }

    /**
     * 设置 [REVIEWEDBY]
     */
    public void setReviewedby(String  reviewedby){
        this.reviewedby = reviewedby ;
        this.modify("reviewedby",reviewedby);
    }

    /**
     * 设置 [SUBSTATUS]
     */
    public void setSubstatus(String  substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [STAGEDBY]
     */
    public void setStagedby(String  stagedby){
        this.stagedby = stagedby ;
        this.modify("stagedby",stagedby);
    }

    /**
     * 设置 [SOURCE]
     */
    public void setSource(String  source){
        this.source = source ;
        this.modify("source",source);
    }

    /**
     * 设置 [CLOSEDREASON]
     */
    public void setClosedreason(String  closedreason){
        this.closedreason = closedreason ;
        this.modify("closedreason",closedreason);
    }

    /**
     * 设置 [COLOR]
     */
    public void setColor(String  color){
        this.color = color ;
        this.modify("color",color);
    }

    /**
     * 设置 [MAILTO]
     */
    public void setMailto(String  mailto){
        this.mailto = mailto ;
        this.modify("mailto",mailto);
    }

    /**
     * 设置 [KEYWORDS]
     */
    public void setKeywords(String  keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }

    /**
     * 设置 [LASTEDITEDBY]
     */
    public void setLasteditedby(String  lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }

    /**
     * 设置 [STAGE]
     */
    public void setStage(String  stage){
        this.stage = stage ;
        this.modify("stage",stage);
    }

    /**
     * 设置 [CLOSEDDATE]
     */
    public void setCloseddate(Timestamp  closeddate){
        this.closeddate = closeddate ;
        this.modify("closeddate",closeddate);
    }

    /**
     * 设置 [CLOSEDBY]
     */
    public void setClosedby(String  closedby){
        this.closedby = closedby ;
        this.modify("closedby",closedby);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [LASTEDITEDDATE]
     */
    public void setLastediteddate(Timestamp  lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }

    /**
     * 设置 [FROMBUG]
     */
    public void setFrombug(Long  frombug){
        this.frombug = frombug ;
        this.modify("frombug",frombug);
    }

    /**
     * 设置 [PARENT]
     */
    public void setParent(Long  parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [MODULE]
     */
    public void setModule(Long  module){
        this.module = module ;
        this.modify("module",module);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [DUPLICATESTORY]
     */
    public void setDuplicatestory(Long  duplicatestory){
        this.duplicatestory = duplicatestory ;
        this.modify("duplicatestory",duplicatestory);
    }

    /**
     * 设置 [BRANCH]
     */
    public void setBranch(Long  branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [TOBUG]
     */
    public void setTobug(Long  tobug){
        this.tobug = tobug ;
        this.modify("tobug",tobug);
    }


}


