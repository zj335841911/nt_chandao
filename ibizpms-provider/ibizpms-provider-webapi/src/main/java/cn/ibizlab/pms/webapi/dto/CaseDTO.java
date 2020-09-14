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
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[CaseDTO]
 */
@Data
public class CaseDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [LASTEDITEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;

    /**
     * 属性 [SCRIPTEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "scripteddate" , format="yyyy-MM-dd")
    @JsonProperty("scripteddate")
    private Timestamp scripteddate;

    /**
     * 属性 [COLOR]
     *
     */
    @JSONField(name = "color")
    @JsonProperty("color")
    @Size(min = 0, max = 7, message = "内容长度必须小于等于[7]")
    private String color;

    /**
     * 属性 [PATH]
     *
     */
    @JSONField(name = "path")
    @JsonProperty("path")
    private Integer path;

    /**
     * 属性 [OPENEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;

    /**
     * 属性 [LASTRUNRESULT]
     *
     */
    @JSONField(name = "lastrunresult")
    @JsonProperty("lastrunresult")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String lastrunresult;

    /**
     * 属性 [LINKCASE]
     *
     */
    @JSONField(name = "linkcase")
    @JsonProperty("linkcase")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String linkcase;

    /**
     * 属性 [ORDER]
     *
     */
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;

    /**
     * 属性 [HOWRUN]
     *
     */
    @JSONField(name = "howrun")
    @JsonProperty("howrun")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String howrun;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 属性 [SCRIPTEDBY]
     *
     */
    @JSONField(name = "scriptedby")
    @JsonProperty("scriptedby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String scriptedby;

    /**
     * 属性 [OPENEDBY]
     *
     */
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String openedby;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String type;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String status;

    /**
     * 属性 [AUTO]
     *
     */
    @JSONField(name = "auto")
    @JsonProperty("auto")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    private String auto;

    /**
     * 属性 [FREQUENCY]
     *
     */
    @JSONField(name = "frequency")
    @JsonProperty("frequency")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String frequency;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    @NotBlank(message = "[用例标题]不允许为空!")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String title;

    /**
     * 属性 [LASTEDITEDBY]
     *
     */
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String lasteditedby;

    /**
     * 属性 [REVIEWEDBY]
     *
     */
    @JSONField(name = "reviewedby")
    @JsonProperty("reviewedby")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String reviewedby;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [REVIEWEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "revieweddate" , format="yyyy-MM-dd")
    @JsonProperty("revieweddate")
    private Timestamp revieweddate;

    /**
     * 属性 [PRI]
     *
     */
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;

    /**
     * 属性 [STAGE]
     *
     */
    @JSONField(name = "stage")
    @JsonProperty("stage")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String stage;

    /**
     * 属性 [SCRIPTLOCATION]
     *
     */
    @JSONField(name = "scriptlocation")
    @JsonProperty("scriptlocation")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String scriptlocation;

    /**
     * 属性 [LASTRUNDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastrundate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastrundate")
    private Timestamp lastrundate;

    /**
     * 属性 [KEYWORDS]
     *
     */
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String keywords;

    /**
     * 属性 [SCRIPTSTATUS]
     *
     */
    @JSONField(name = "scriptstatus")
    @JsonProperty("scriptstatus")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String scriptstatus;

    /**
     * 属性 [FRAME]
     *
     */
    @JSONField(name = "frame")
    @JsonProperty("frame")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    private String frame;

    /**
     * 属性 [SUBSTATUS]
     *
     */
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String substatus;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;

    /**
     * 属性 [PRECONDITION]
     *
     */
    @JSONField(name = "precondition")
    @JsonProperty("precondition")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String precondition;

    /**
     * 属性 [LASTRUNNER]
     *
     */
    @JSONField(name = "lastrunner")
    @JsonProperty("lastrunner")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String lastrunner;

    /**
     * 属性 [FROMCASEVERSION]
     *
     */
    @JSONField(name = "fromcaseversion")
    @JsonProperty("fromcaseversion")
    private Integer fromcaseversion;

    /**
     * 属性 [STORYVERSION]
     *
     */
    @JSONField(name = "storyversion")
    @JsonProperty("storyversion")
    private Integer storyversion;

    /**
     * 属性 [FROMCASEID]
     *
     */
    @JSONField(name = "fromcaseid")
    @JsonProperty("fromcaseid")
    private Long fromcaseid;

    /**
     * 属性 [BRANCH]
     *
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Long branch;

    /**
     * 属性 [FROMBUG]
     *
     */
    @JSONField(name = "frombug")
    @JsonProperty("frombug")
    private Long frombug;

    /**
     * 属性 [STORY]
     *
     */
    @JSONField(name = "story")
    @JsonProperty("story")
    private Long story;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;

    /**
     * 属性 [LIB]
     *
     */
    @JSONField(name = "lib")
    @JsonProperty("lib")
    private Long lib;

    /**
     * 属性 [MODULE]
     *
     */
    @JSONField(name = "module")
    @JsonProperty("module")
    private Long module;

    /**
     * 属性 [MODULENAME]
     *
     */
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String modulename;

    /**
     * 属性 [STORYNAME]
     *
     */
    @JSONField(name = "storyname")
    @JsonProperty("storyname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String storyname;

    /**
     * 属性 [PRODUCTNAME]
     *
     */
    @JSONField(name = "productname")
    @JsonProperty("productname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String productname;

    /**
     * 属性 [TOBUGCNT]
     *
     */
    @JSONField(name = "tobugcnt")
    @JsonProperty("tobugcnt")
    private Integer tobugcnt;

    /**
     * 属性 [RESULTCNT]
     *
     */
    @JSONField(name = "resultcnt")
    @JsonProperty("resultcnt")
    private Integer resultcnt;

    /**
     * 属性 [STEPCNT]
     *
     */
    @JSONField(name = "stepcnt")
    @JsonProperty("stepcnt")
    private Integer stepcnt;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String comment;

    /**
     * 属性 [RESULTFALICNT]
     *
     */
    @JSONField(name = "resultfalicnt")
    @JsonProperty("resultfalicnt")
    private Integer resultfalicnt;

    /**
     * 属性 [STATUS1]
     *
     */
    @JSONField(name = "status1")
    @JsonProperty("status1")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String status1;

    /**
     * 属性 [ASSIGNEDTO]
     *
     */
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String assignedto;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String task;

    /**
     * 属性 [LIBNAME]
     *
     */
    @JSONField(name = "libname")
    @JsonProperty("libname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String libname;


    /**
     * 设置 [LASTEDITEDDATE]
     */
    public void setLastediteddate(Timestamp  lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }

    /**
     * 设置 [SCRIPTEDDATE]
     */
    public void setScripteddate(Timestamp  scripteddate){
        this.scripteddate = scripteddate ;
        this.modify("scripteddate",scripteddate);
    }

    /**
     * 设置 [COLOR]
     */
    public void setColor(String  color){
        this.color = color ;
        this.modify("color",color);
    }

    /**
     * 设置 [PATH]
     */
    public void setPath(Integer  path){
        this.path = path ;
        this.modify("path",path);
    }

    /**
     * 设置 [LASTRUNRESULT]
     */
    public void setLastrunresult(String  lastrunresult){
        this.lastrunresult = lastrunresult ;
        this.modify("lastrunresult",lastrunresult);
    }

    /**
     * 设置 [LINKCASE]
     */
    public void setLinkcase(String  linkcase){
        this.linkcase = linkcase ;
        this.modify("linkcase",linkcase);
    }

    /**
     * 设置 [ORDER]
     */
    public void setOrder(Integer  order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [HOWRUN]
     */
    public void setHowrun(String  howrun){
        this.howrun = howrun ;
        this.modify("howrun",howrun);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [SCRIPTEDBY]
     */
    public void setScriptedby(String  scriptedby){
        this.scriptedby = scriptedby ;
        this.modify("scriptedby",scriptedby);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [AUTO]
     */
    public void setAuto(String  auto){
        this.auto = auto ;
        this.modify("auto",auto);
    }

    /**
     * 设置 [FREQUENCY]
     */
    public void setFrequency(String  frequency){
        this.frequency = frequency ;
        this.modify("frequency",frequency);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [LASTEDITEDBY]
     */
    public void setLasteditedby(String  lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
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
     * 设置 [PRI]
     */
    public void setPri(Integer  pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [STAGE]
     */
    public void setStage(String  stage){
        this.stage = stage ;
        this.modify("stage",stage);
    }

    /**
     * 设置 [SCRIPTLOCATION]
     */
    public void setScriptlocation(String  scriptlocation){
        this.scriptlocation = scriptlocation ;
        this.modify("scriptlocation",scriptlocation);
    }

    /**
     * 设置 [LASTRUNDATE]
     */
    public void setLastrundate(Timestamp  lastrundate){
        this.lastrundate = lastrundate ;
        this.modify("lastrundate",lastrundate);
    }

    /**
     * 设置 [KEYWORDS]
     */
    public void setKeywords(String  keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }

    /**
     * 设置 [SCRIPTSTATUS]
     */
    public void setScriptstatus(String  scriptstatus){
        this.scriptstatus = scriptstatus ;
        this.modify("scriptstatus",scriptstatus);
    }

    /**
     * 设置 [FRAME]
     */
    public void setFrame(String  frame){
        this.frame = frame ;
        this.modify("frame",frame);
    }

    /**
     * 设置 [SUBSTATUS]
     */
    public void setSubstatus(String  substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [PRECONDITION]
     */
    public void setPrecondition(String  precondition){
        this.precondition = precondition ;
        this.modify("precondition",precondition);
    }

    /**
     * 设置 [LASTRUNNER]
     */
    public void setLastrunner(String  lastrunner){
        this.lastrunner = lastrunner ;
        this.modify("lastrunner",lastrunner);
    }

    /**
     * 设置 [FROMCASEVERSION]
     */
    public void setFromcaseversion(Integer  fromcaseversion){
        this.fromcaseversion = fromcaseversion ;
        this.modify("fromcaseversion",fromcaseversion);
    }

    /**
     * 设置 [STORYVERSION]
     */
    public void setStoryversion(Integer  storyversion){
        this.storyversion = storyversion ;
        this.modify("storyversion",storyversion);
    }

    /**
     * 设置 [FROMCASEID]
     */
    public void setFromcaseid(Long  fromcaseid){
        this.fromcaseid = fromcaseid ;
        this.modify("fromcaseid",fromcaseid);
    }

    /**
     * 设置 [BRANCH]
     */
    public void setBranch(Long  branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [FROMBUG]
     */
    public void setFrombug(Long  frombug){
        this.frombug = frombug ;
        this.modify("frombug",frombug);
    }

    /**
     * 设置 [STORY]
     */
    public void setStory(Long  story){
        this.story = story ;
        this.modify("story",story);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [LIB]
     */
    public void setLib(Long  lib){
        this.lib = lib ;
        this.modify("lib",lib);
    }

    /**
     * 设置 [MODULE]
     */
    public void setModule(Long  module){
        this.module = module ;
        this.modify("module",module);
    }


    /**
     *  [IBZ_CASESTEP]
     */
    @JsonProperty("ibzcasesteps")
    @JSONField(name = "ibzcasesteps")
	private List<IBZCaseStepDTO> casestep ;

}


