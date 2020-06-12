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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[测试用例]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_case",resultMap = "CaseResultMap")
public class Case extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 修改日期
     */
    @TableField(value = "lastediteddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;
    /**
     * scriptedDate
     */
    @TableField(value = "scripteddate")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "scripteddate" , format="yyyy-MM-dd")
    @JsonProperty("scripteddate")
    private Timestamp scripteddate;
    /**
     * 标题颜色
     */
    @TableField(value = "color")
    @JSONField(name = "color")
    @JsonProperty("color")
    private String color;
    /**
     * path
     */
    @DEField(defaultValue = "0")
    @TableField(value = "path")
    @JSONField(name = "path")
    @JsonProperty("path")
    private Integer path;
    /**
     * 创建日期
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "openeddate" , fill = FieldFill.INSERT)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;
    /**
     * 结果
     */
    @TableField(value = "lastrunresult")
    @JSONField(name = "lastrunresult")
    @JsonProperty("lastrunresult")
    private String lastrunresult;
    /**
     * 相关用例
     */
    @TableField(value = "linkcase")
    @JSONField(name = "linkcase")
    @JsonProperty("linkcase")
    private String linkcase;
    /**
     * 排序
     */
    @DEField(defaultValue = "0")
    @TableField(value = "order")
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;
    /**
     * howRun
     */
    @TableField(value = "howrun")
    @JSONField(name = "howrun")
    @JsonProperty("howrun")
    private String howrun;
    /**
     * 用例版本
     */
    @DEField(defaultValue = "0")
    @TableField(value = "version")
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;
    /**
     * scriptedBy
     */
    @TableField(value = "scriptedby")
    @JSONField(name = "scriptedby")
    @JsonProperty("scriptedby")
    private String scriptedby;
    /**
     * 由谁创建
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMANNAME)
    @TableField(value = "openedby")
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private String openedby;
    /**
     * 用例类型
     */
    @DEField(defaultValue = "feature")
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 用例状态
     */
    @DEField(defaultValue = "wait")
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * auto
     */
    @DEField(defaultValue = "no")
    @TableField(value = "auto")
    @JSONField(name = "auto")
    @JsonProperty("auto")
    private String auto;
    /**
     * frequency
     */
    @DEField(defaultValue = "1")
    @TableField(value = "frequency")
    @JSONField(name = "frequency")
    @JsonProperty("frequency")
    private String frequency;
    /**
     * 用例标题
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * 最后修改者
     */
    @TableField(value = "lasteditedby")
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    private String lasteditedby;
    /**
     * 由谁评审
     */
    @TableField(value = "reviewedby")
    @JSONField(name = "reviewedby")
    @JsonProperty("reviewedby")
    private String reviewedby;
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
     * 评审时间
     */
    @TableField(value = "revieweddate")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "revieweddate" , format="yyyy-MM-dd")
    @JsonProperty("revieweddate")
    private Timestamp revieweddate;
    /**
     * 优先级
     */
    @DEField(defaultValue = "3")
    @TableField(value = "pri")
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;
    /**
     * 适用阶段
     */
    @TableField(value = "stage")
    @JSONField(name = "stage")
    @JsonProperty("stage")
    private String stage;
    /**
     * scriptLocation
     */
    @TableField(value = "scriptlocation")
    @JSONField(name = "scriptlocation")
    @JsonProperty("scriptlocation")
    private String scriptlocation;
    /**
     * 执行时间
     */
    @TableField(value = "lastrundate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastrundate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastrundate")
    private Timestamp lastrundate;
    /**
     * 关键词
     */
    @TableField(value = "keywords")
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    private String keywords;
    /**
     * scriptStatus
     */
    @TableField(value = "scriptstatus")
    @JSONField(name = "scriptstatus")
    @JsonProperty("scriptstatus")
    private String scriptstatus;
    /**
     * 工具/框架
     */
    @TableField(value = "frame")
    @JSONField(name = "frame")
    @JsonProperty("frame")
    private String frame;
    /**
     * 子状态
     */
    @TableField(value = "substatus")
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    private String substatus;
    /**
     * 用例编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 前置条件
     */
    @TableField(value = "precondition")
    @JSONField(name = "precondition")
    @JsonProperty("precondition")
    private String precondition;
    /**
     * 执行人
     */
    @TableField(value = "lastrunner")
    @JSONField(name = "lastrunner")
    @JsonProperty("lastrunner")
    private String lastrunner;
    /**
     * 来源用例版本
     */
    @TableField(value = "fromcaseversion")
    @JSONField(name = "fromcaseversion")
    @JsonProperty("fromcaseversion")
    private Integer fromcaseversion;
    /**
     * 需求版本
     */
    @DEField(defaultValue = "1")
    @TableField(value = "storyversion")
    @JSONField(name = "storyversion")
    @JsonProperty("storyversion")
    private Integer storyversion;
    /**
     * 来源用例
     */
    @TableField(value = "fromcaseid")
    @JSONField(name = "fromcaseid")
    @JsonProperty("fromcaseid")
    private BigInteger fromcaseid;
    /**
     * 平台/分支
     */
    @TableField(value = "branch")
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private BigInteger branch;
    /**
     * 来源Bug
     */
    @TableField(value = "frombug")
    @JSONField(name = "frombug")
    @JsonProperty("frombug")
    private BigInteger frombug;
    /**
     * 相关需求
     */
    @TableField(value = "story")
    @JSONField(name = "story")
    @JsonProperty("story")
    private BigInteger story;
    /**
     * 所属产品
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;
    /**
     * 所属库
     */
    @TableField(value = "lib")
    @JSONField(name = "lib")
    @JsonProperty("lib")
    private BigInteger lib;
    /**
     * 所属模块
     */
    @TableField(value = "module")
    @JSONField(name = "module")
    @JsonProperty("module")
    private BigInteger module;
    /**
     * 模块名称
     */
    @TableField(exist = false)
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    private String modulename;
    /**
     * 需求名称
     */
    @TableField(exist = false)
    @JSONField(name = "storyname")
    @JsonProperty("storyname")
    private String storyname;
    /**
     * 产品名称
     */
    @TableField(exist = false)
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Branch ztbranch;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Bug ztfrombug;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Case ztfromcase;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Module ztmodule;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztproduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Story ztstory;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.TestSuite zttestsuite;



    /**
     * 设置 [修改日期]
     */
    public void setLastediteddate(Timestamp lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }
    /**
     * 设置 [scriptedDate]
     */
    public void setScripteddate(Timestamp scripteddate){
        this.scripteddate = scripteddate ;
        this.modify("scripteddate",scripteddate);
    }
    /**
     * 设置 [标题颜色]
     */
    public void setColor(String color){
        this.color = color ;
        this.modify("color",color);
    }
    /**
     * 设置 [path]
     */
    public void setPath(Integer path){
        this.path = path ;
        this.modify("path",path);
    }
    /**
     * 设置 [结果]
     */
    public void setLastrunresult(String lastrunresult){
        this.lastrunresult = lastrunresult ;
        this.modify("lastrunresult",lastrunresult);
    }
    /**
     * 设置 [相关用例]
     */
    public void setLinkcase(String linkcase){
        this.linkcase = linkcase ;
        this.modify("linkcase",linkcase);
    }
    /**
     * 设置 [排序]
     */
    public void setOrder(Integer order){
        this.order = order ;
        this.modify("order",order);
    }
    /**
     * 设置 [howRun]
     */
    public void setHowrun(String howrun){
        this.howrun = howrun ;
        this.modify("howrun",howrun);
    }
    /**
     * 设置 [用例版本]
     */
    public void setVersion(Integer version){
        this.version = version ;
        this.modify("version",version);
    }
    /**
     * 设置 [scriptedBy]
     */
    public void setScriptedby(String scriptedby){
        this.scriptedby = scriptedby ;
        this.modify("scriptedby",scriptedby);
    }
    /**
     * 设置 [用例类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }
    /**
     * 设置 [用例状态]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }
    /**
     * 设置 [auto]
     */
    public void setAuto(String auto){
        this.auto = auto ;
        this.modify("auto",auto);
    }
    /**
     * 设置 [frequency]
     */
    public void setFrequency(String frequency){
        this.frequency = frequency ;
        this.modify("frequency",frequency);
    }
    /**
     * 设置 [用例标题]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }
    /**
     * 设置 [最后修改者]
     */
    public void setLasteditedby(String lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }
    /**
     * 设置 [由谁评审]
     */
    public void setReviewedby(String reviewedby){
        this.reviewedby = reviewedby ;
        this.modify("reviewedby",reviewedby);
    }
    /**
     * 设置 [评审时间]
     */
    public void setRevieweddate(Timestamp revieweddate){
        this.revieweddate = revieweddate ;
        this.modify("revieweddate",revieweddate);
    }
    /**
     * 设置 [优先级]
     */
    public void setPri(Integer pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }
    /**
     * 设置 [适用阶段]
     */
    public void setStage(String stage){
        this.stage = stage ;
        this.modify("stage",stage);
    }
    /**
     * 设置 [scriptLocation]
     */
    public void setScriptlocation(String scriptlocation){
        this.scriptlocation = scriptlocation ;
        this.modify("scriptlocation",scriptlocation);
    }
    /**
     * 设置 [执行时间]
     */
    public void setLastrundate(Timestamp lastrundate){
        this.lastrundate = lastrundate ;
        this.modify("lastrundate",lastrundate);
    }
    /**
     * 设置 [关键词]
     */
    public void setKeywords(String keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }
    /**
     * 设置 [scriptStatus]
     */
    public void setScriptstatus(String scriptstatus){
        this.scriptstatus = scriptstatus ;
        this.modify("scriptstatus",scriptstatus);
    }
    /**
     * 设置 [工具/框架]
     */
    public void setFrame(String frame){
        this.frame = frame ;
        this.modify("frame",frame);
    }
    /**
     * 设置 [子状态]
     */
    public void setSubstatus(String substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }
    /**
     * 设置 [前置条件]
     */
    public void setPrecondition(String precondition){
        this.precondition = precondition ;
        this.modify("precondition",precondition);
    }
    /**
     * 设置 [执行人]
     */
    public void setLastrunner(String lastrunner){
        this.lastrunner = lastrunner ;
        this.modify("lastrunner",lastrunner);
    }
    /**
     * 设置 [来源用例版本]
     */
    public void setFromcaseversion(Integer fromcaseversion){
        this.fromcaseversion = fromcaseversion ;
        this.modify("fromcaseversion",fromcaseversion);
    }
    /**
     * 设置 [需求版本]
     */
    public void setStoryversion(Integer storyversion){
        this.storyversion = storyversion ;
        this.modify("storyversion",storyversion);
    }
    /**
     * 设置 [来源用例]
     */
    public void setFromcaseid(BigInteger fromcaseid){
        this.fromcaseid = fromcaseid ;
        this.modify("fromcaseid",fromcaseid);
    }
    /**
     * 设置 [平台/分支]
     */
    public void setBranch(BigInteger branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }
    /**
     * 设置 [来源Bug]
     */
    public void setFrombug(BigInteger frombug){
        this.frombug = frombug ;
        this.modify("frombug",frombug);
    }
    /**
     * 设置 [相关需求]
     */
    public void setStory(BigInteger story){
        this.story = story ;
        this.modify("story",story);
    }
    /**
     * 设置 [所属产品]
     */
    public void setProduct(BigInteger product){
        this.product = product ;
        this.modify("product",product);
    }
    /**
     * 设置 [所属库]
     */
    public void setLib(BigInteger lib){
        this.lib = lib ;
        this.modify("lib",lib);
    }
    /**
     * 设置 [所属模块]
     */
    public void setModule(BigInteger module){
        this.module = module ;
        this.modify("module",module);
    }

}


