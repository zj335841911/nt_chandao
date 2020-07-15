package cn.ibizlab.pms.core.zentao.domain;

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
 * 实体[任务]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_task",resultMap = "TaskResultMap")
public class Task extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 由谁取消
     */
    @TableField(value = "canceledby")
    @JSONField(name = "canceledby")
    @JsonProperty("canceledby")
    private String canceledby;
    /**
     * 预计剩余
     */
    @TableField(value = "left")
    @JSONField(name = "left")
    @JsonProperty("left")
    private Double left;
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
     * 标题颜色
     */
    @TableField(value = "color")
    @JSONField(name = "color")
    @JsonProperty("color")
    private String color;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 由谁完成
     */
    @TableField(value = "finishedby")
    @JSONField(name = "finishedby")
    @JsonProperty("finishedby")
    private String finishedby;
    /**
     * 完成者列表
     */
    @TableField(value = "finishedlist")
    @JSONField(name = "finishedlist")
    @JsonProperty("finishedlist")
    private String finishedlist;
    /**
     * 实际开始
     */
    @TableField(value = "realstarted")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "realstarted" , format="yyyy-MM-dd")
    @JsonProperty("realstarted")
    private Timestamp realstarted;
    /**
     * 由谁关闭
     */
    @TableField(value = "closedby")
    @JSONField(name = "closedby")
    @JsonProperty("closedby")
    private String closedby;
    /**
     * 子状态
     */
    @TableField(value = "substatus")
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    private String substatus;
    /**
     * 关闭原因
     */
    @TableField(value = "closedreason")
    @JSONField(name = "closedreason")
    @JsonProperty("closedreason")
    private String closedreason;
    /**
     * 最后修改日期
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @TableField(value = "lastediteddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;
    /**
     * 指派日期
     */
    @TableField(value = "assigneddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "assigneddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("assigneddate")
    private Timestamp assigneddate;
    /**
     * 优先级
     */
    @DEField(defaultValue = "3")
    @TableField(value = "pri")
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;
    /**
     * 最后修改
     */
    @TableField(value = "lasteditedby")
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    private String lasteditedby;
    /**
     * 任务状态
     */
    @DEField(defaultValue = "wait")
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * 任务名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 关闭时间
     */
    @TableField(value = "closeddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "closeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("closeddate")
    private Timestamp closeddate;
    /**
     * 任务类型
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 指派给
     */
    @TableField(value = "assignedto")
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    private String assignedto;
    /**
     * 任务描述
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * 预计开始
     */
    @TableField(value = "eststarted")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "eststarted" , format="yyyy-MM-dd")
    @JsonProperty("eststarted")
    private Timestamp eststarted;
    /**
     * 截止日期
     */
    @TableField(value = "deadline")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "deadline" , format="yyyy-MM-dd")
    @JsonProperty("deadline")
    private Timestamp deadline;
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
     * 抄送给
     */
    @TableField(value = "mailto")
    @JSONField(name = "mailto")
    @JsonProperty("mailto")
    private String mailto;
    /**
     * 总计消耗
     */
    @TableField(value = "consumed")
    @JSONField(name = "consumed")
    @JsonProperty("consumed")
    private Double consumed;
    /**
     * 最初预计
     */
    @TableField(value = "estimate")
    @JSONField(name = "estimate")
    @JsonProperty("estimate")
    private Double estimate;
    /**
     * 由谁创建
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMANNAME)
    @TableField(value = "openedby")
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private String openedby;
    /**
     * 取消时间
     */
    @TableField(value = "canceleddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "canceleddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("canceleddate")
    private Timestamp canceleddate;
    /**
     * 实际完成
     */
    @TableField(value = "finisheddate")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "finisheddate" , format="yyyy-MM-dd")
    @JsonProperty("finisheddate")
    private Timestamp finisheddate;
    /**
     * 所属模块
     */
    @TableField(exist = false)
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    private String modulename;
    /**
     * 相关需求
     */
    @TableField(exist = false)
    @JSONField(name = "storyname")
    @JsonProperty("storyname")
    private String storyname;
    /**
     * 所属项目
     */
    @TableField(exist = false)
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    private String projectname;
    /**
     * 产品
     */
    @TableField(exist = false)
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;
    /**
     * 需求版本
     */
    @DEField(defaultValue = "1")
    @TableField(value = "storyversion")
    @JSONField(name = "storyversion")
    @JsonProperty("storyversion")
    private Integer storyversion;
    /**
     * 产品
     */
    @TableField(exist = false)
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;
    /**
     * 父任务
     */
    @TableField(exist = false)
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    private String parentname;
    /**
     * 所属项目
     */
    @TableField(value = "project")
    @JSONField(name = "project")
    @JsonProperty("project")
    private BigInteger project;
    /**
     * 相关需求
     */
    @DEField(defaultValue = "0")
    @TableField(value = "story")
    @JSONField(name = "story")
    @JsonProperty("story")
    private BigInteger story;
    /**
     * 父任务
     */
    @DEField(defaultValue = "0")
    @TableField(value = "parent")
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;
    /**
     * 来源Bug
     */
    @TableField(value = "frombug")
    @JSONField(name = "frombug")
    @JsonProperty("frombug")
    private BigInteger frombug;
    /**
     * 持续时间
     */
    @TableField(exist = false)
    @JSONField(name = "duration")
    @JsonProperty("duration")
    private String duration;
    /**
     * id
     */
    @DEField(defaultValue = "0")
    @TableField(value = "module")
    @JSONField(name = "module")
    @JsonProperty("module")
    private BigInteger module;
    /**
     * 模块路径
     */
    @TableField(exist = false)
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;
    /**
     * 备注
     */
    @TableField(exist = false)
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;
    /**
     * 本次消耗
     */
    @TableField(exist = false)
    @JSONField(name = "currentconsumed")
    @JsonProperty("currentconsumed")
    private Double currentconsumed;
    /**
     * 总计耗时
     */
    @TableField(exist = false)
    @JSONField(name = "totaltime")
    @JsonProperty("totaltime")
    private Double totaltime;
    /**
     * 是否子任务
     */
    @TableField(exist = false)
    @JSONField(name = "isleaf")
    @JsonProperty("isleaf")
    private String isleaf;
    /**
     * 所有模块
     */
    @TableField(exist = false)
    @JSONField(name = "allmodules")
    @JsonProperty("allmodules")
    private String allmodules;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibiz.domain.ProjectModule projectmodule;

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
    private cn.ibizlab.pms.core.zentao.domain.Project ztproject;

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
    private cn.ibizlab.pms.core.zentao.domain.Task ztparent;



    /**
     * 设置 [由谁取消]
     */
    public void setCanceledby(String canceledby){
        this.canceledby = canceledby ;
        this.modify("canceledby",canceledby);
    }

    /**
     * 设置 [预计剩余]
     */
    public void setLeft(Double left){
        this.left = left ;
        this.modify("left",left);
    }

    /**
     * 设置 [标题颜色]
     */
    public void setColor(String color){
        this.color = color ;
        this.modify("color",color);
    }

    /**
     * 设置 [由谁完成]
     */
    public void setFinishedby(String finishedby){
        this.finishedby = finishedby ;
        this.modify("finishedby",finishedby);
    }

    /**
     * 设置 [完成者列表]
     */
    public void setFinishedlist(String finishedlist){
        this.finishedlist = finishedlist ;
        this.modify("finishedlist",finishedlist);
    }

    /**
     * 设置 [实际开始]
     */
    public void setRealstarted(Timestamp realstarted){
        this.realstarted = realstarted ;
        this.modify("realstarted",realstarted);
    }

    /**
     * 格式化日期 [实际开始]
     */
    public String formatRealstarted(){
        if (this.realstarted == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(realstarted);
    }
    /**
     * 设置 [由谁关闭]
     */
    public void setClosedby(String closedby){
        this.closedby = closedby ;
        this.modify("closedby",closedby);
    }

    /**
     * 设置 [子状态]
     */
    public void setSubstatus(String substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [关闭原因]
     */
    public void setClosedreason(String closedreason){
        this.closedreason = closedreason ;
        this.modify("closedreason",closedreason);
    }

    /**
     * 设置 [指派日期]
     */
    public void setAssigneddate(Timestamp assigneddate){
        this.assigneddate = assigneddate ;
        this.modify("assigneddate",assigneddate);
    }

    /**
     * 格式化日期 [指派日期]
     */
    public String formatAssigneddate(){
        if (this.assigneddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(assigneddate);
    }
    /**
     * 设置 [优先级]
     */
    public void setPri(Integer pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [最后修改]
     */
    public void setLasteditedby(String lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }

    /**
     * 设置 [任务状态]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [任务名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [关闭时间]
     */
    public void setCloseddate(Timestamp closeddate){
        this.closeddate = closeddate ;
        this.modify("closeddate",closeddate);
    }

    /**
     * 格式化日期 [关闭时间]
     */
    public String formatCloseddate(){
        if (this.closeddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(closeddate);
    }
    /**
     * 设置 [任务类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [指派给]
     */
    public void setAssignedto(String assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [任务描述]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [预计开始]
     */
    public void setEststarted(Timestamp eststarted){
        this.eststarted = eststarted ;
        this.modify("eststarted",eststarted);
    }

    /**
     * 格式化日期 [预计开始]
     */
    public String formatEststarted(){
        if (this.eststarted == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(eststarted);
    }
    /**
     * 设置 [截止日期]
     */
    public void setDeadline(Timestamp deadline){
        this.deadline = deadline ;
        this.modify("deadline",deadline);
    }

    /**
     * 格式化日期 [截止日期]
     */
    public String formatDeadline(){
        if (this.deadline == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(deadline);
    }
    /**
     * 设置 [抄送给]
     */
    public void setMailto(String mailto){
        this.mailto = mailto ;
        this.modify("mailto",mailto);
    }

    /**
     * 设置 [总计消耗]
     */
    public void setConsumed(Double consumed){
        this.consumed = consumed ;
        this.modify("consumed",consumed);
    }

    /**
     * 设置 [最初预计]
     */
    public void setEstimate(Double estimate){
        this.estimate = estimate ;
        this.modify("estimate",estimate);
    }

    /**
     * 设置 [取消时间]
     */
    public void setCanceleddate(Timestamp canceleddate){
        this.canceleddate = canceleddate ;
        this.modify("canceleddate",canceleddate);
    }

    /**
     * 格式化日期 [取消时间]
     */
    public String formatCanceleddate(){
        if (this.canceleddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(canceleddate);
    }
    /**
     * 设置 [实际完成]
     */
    public void setFinisheddate(Timestamp finisheddate){
        this.finisheddate = finisheddate ;
        this.modify("finisheddate",finisheddate);
    }

    /**
     * 格式化日期 [实际完成]
     */
    public String formatFinisheddate(){
        if (this.finisheddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(finisheddate);
    }
    /**
     * 设置 [需求版本]
     */
    public void setStoryversion(Integer storyversion){
        this.storyversion = storyversion ;
        this.modify("storyversion",storyversion);
    }

    /**
     * 设置 [所属项目]
     */
    public void setProject(BigInteger project){
        this.project = project ;
        this.modify("project",project);
    }

    /**
     * 设置 [相关需求]
     */
    public void setStory(BigInteger story){
        this.story = story ;
        this.modify("story",story);
    }

    /**
     * 设置 [父任务]
     */
    public void setParent(BigInteger parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [来源Bug]
     */
    public void setFrombug(BigInteger frombug){
        this.frombug = frombug ;
        this.modify("frombug",frombug);
    }

    /**
     * 设置 [id]
     */
    public void setModule(BigInteger module){
        this.module = module ;
        this.modify("module",module);
    }


}


