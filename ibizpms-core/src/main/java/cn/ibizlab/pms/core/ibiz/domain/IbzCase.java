package cn.ibizlab.pms.core.ibiz.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
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
import cn.ibizlab.pms.util.annotation.Audit;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[用例库用例]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_case",resultMap = "IbzCaseResultMap")
public class IbzCase extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

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
     * scriptedBy
     */
    @TableField(value = "scriptedby")
    @JSONField(name = "scriptedby")
    @JsonProperty("scriptedby")
    private String scriptedby;
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
     * 备注
     */
    @TableField(exist = false)
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;
    /**
     * auto
     */
    @DEField(defaultValue = "no")
    @TableField(value = "auto")
    @JSONField(name = "auto")
    @JsonProperty("auto")
    private String auto;
    /**
     * 用例标题
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID)
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * scriptLocation
     */
    @TableField(value = "scriptlocation")
    @JSONField(name = "scriptlocation")
    @JsonProperty("scriptlocation")
    private String scriptlocation;
    /**
     * scriptStatus
     */
    @TableField(value = "scriptstatus")
    @JSONField(name = "scriptstatus")
    @JsonProperty("scriptstatus")
    private String scriptstatus;
    /**
     * 关键词
     */
    @TableField(value = "keywords")
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    private String keywords;
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
     * 优先级
     */
    @TableField(value = "pri")
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private String pri;
    /**
     * 用例类型
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 状态
     */
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * 适用阶段
     */
    @TableField(value = "stage")
    @JSONField(name = "stage")
    @JsonProperty("stage")
    private String stage;
    /**
     * 由谁创建
     */
    @TableField(value = "openedby")
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private String openedby;
    /**
     * 最后修改者
     */
    @TableField(value = "lasteditedby")
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    private String lasteditedby;
    /**
     * 编号
     */
    @TableField(value = "lib")
    @JSONField(name = "lib")
    @JsonProperty("lib")
    private BigInteger lib;
    /**
     * id
     */
    @TableField(value = "module")
    @JSONField(name = "module")
    @JsonProperty("module")
    private BigInteger module;
    /**
     * 所属模块
     */
    @TableField(exist = false)
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    private String modulename;
    /**
     * 用例库
     */
    @TableField(exist = false)
    @JSONField(name = "libname")
    @JsonProperty("libname")
    private String libname;
    /**
     * 用例版本
     */
    @TableField(value = "version")
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 模块
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibiz.domain.IbzLibModule libmodule;

    /**
     * 用例库
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibiz.domain.IbzLib caselib;


    /**
     * 用例库用例步骤
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private List<cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseStep> ibzlibcasestep;

    /**
     * 用例库用例步骤
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private List<cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseSteps> ibzlibcasesteps;


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
     * 设置 [scriptedBy]
     */
    public void setScriptedby(String scriptedby){
        this.scriptedby = scriptedby ;
        this.modify("scriptedby",scriptedby);
    }

    /**
     * 设置 [path]
     */
    public void setPath(Integer path){
        this.path = path ;
        this.modify("path",path);
    }

    /**
     * 设置 [修改日期]
     */
    public void setLastediteddate(Timestamp lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }

    /**
     * 格式化日期 [修改日期]
     */
    public String formatLastediteddate(){
        if (this.lastediteddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(lastediteddate);
    }
    /**
     * 设置 [scriptedDate]
     */
    public void setScripteddate(Timestamp scripteddate){
        this.scripteddate = scripteddate ;
        this.modify("scripteddate",scripteddate);
    }

    /**
     * 格式化日期 [scriptedDate]
     */
    public String formatScripteddate(){
        if (this.scripteddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(scripteddate);
    }
    /**
     * 设置 [auto]
     */
    public void setAuto(String auto){
        this.auto = auto ;
        this.modify("auto",auto);
    }

    /**
     * 设置 [用例标题]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [scriptLocation]
     */
    public void setScriptlocation(String scriptlocation){
        this.scriptlocation = scriptlocation ;
        this.modify("scriptlocation",scriptlocation);
    }

    /**
     * 设置 [scriptStatus]
     */
    public void setScriptstatus(String scriptstatus){
        this.scriptstatus = scriptstatus ;
        this.modify("scriptstatus",scriptstatus);
    }

    /**
     * 设置 [关键词]
     */
    public void setKeywords(String keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }

    /**
     * 设置 [前置条件]
     */
    public void setPrecondition(String precondition){
        this.precondition = precondition ;
        this.modify("precondition",precondition);
    }

    /**
     * 设置 [优先级]
     */
    public void setPri(String pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [用例类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [状态]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [适用阶段]
     */
    public void setStage(String stage){
        this.stage = stage ;
        this.modify("stage",stage);
    }

    /**
     * 设置 [由谁创建]
     */
    public void setOpenedby(String openedby){
        this.openedby = openedby ;
        this.modify("openedby",openedby);
    }

    /**
     * 设置 [最后修改者]
     */
    public void setLasteditedby(String lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }

    /**
     * 设置 [编号]
     */
    public void setLib(BigInteger lib){
        this.lib = lib ;
        this.modify("lib",lib);
    }

    /**
     * 设置 [id]
     */
    public void setModule(BigInteger module){
        this.module = module ;
        this.modify("module",module);
    }

    /**
     * 设置 [用例版本]
     */
    public void setVersion(Integer version){
        this.version = version ;
        this.modify("version",version);
    }


}


