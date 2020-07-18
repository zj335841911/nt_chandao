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
 * 实体[待办事宜表]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_todo",resultMap = "TodoResultMap")
public class Todo extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 所有者
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * 关闭时间
     */
    @TableField(value = "closeddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "closeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("closeddate")
    private Timestamp closeddate;
    /**
     * 由谁关闭
     */
    @TableField(value = "closedby")
    @JSONField(name = "closedby")
    @JsonProperty("closedby")
    private String closedby;
    /**
     * 类型
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 结束
     */
    @TableField(value = "end")
    @JSONField(name = "end")
    @JsonProperty("end")
    private Integer end;
    /**
     * 描述
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * 由谁完成
     */
    @TableField(value = "finishedby")
    @JSONField(name = "finishedby")
    @JsonProperty("finishedby")
    private String finishedby;
    /**
     * 开始
     */
    @TableField(value = "begin")
    @JSONField(name = "begin")
    @JsonProperty("begin")
    private Integer begin;
    /**
     * 关联编号
     */
    @DEField(defaultValue = "0")
    @TableField(value = "idvalue")
    @JSONField(name = "idvalue")
    @JsonProperty("idvalue")
    private Integer idvalue;
    /**
     * 由谁指派
     */
    @TableField(value = "assignedby")
    @JSONField(name = "assignedby")
    @JsonProperty("assignedby")
    private String assignedby;
    /**
     * 完成时间
     */
    @TableField(value = "finisheddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "finisheddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("finisheddate")
    private Timestamp finisheddate;
    /**
     * 周期
     */
    @DEField(defaultValue = "0")
    @TableField(value = "cycle")
    @JSONField(name = "cycle")
    @JsonProperty("cycle")
    private Integer cycle;
    /**
     * 指派给
     */
    @TableField(value = "assignedto")
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    private String assignedto;
    /**
     * 状态
     */
    @DEField(defaultValue = "wait")
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * 待办名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
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
    @TableField(value = "pri")
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;
    /**
     * 日期
     */
    @TableField(value = "date")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * 私人事务
     */
    @DEField(name = "private")
    @TableField(value = "private")
    @JSONField(name = "ibizprivate")
    @JsonProperty("ibizprivate")
    private Integer ibizprivate;
    /**
     * config
     */
    @TableField(value = "config")
    @JSONField(name = "config")
    @JsonProperty("config")
    private String config;



    /**
     * 设置 [所有者]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
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
     * 设置 [由谁关闭]
     */
    public void setClosedby(String closedby){
        this.closedby = closedby ;
        this.modify("closedby",closedby);
    }

    /**
     * 设置 [类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [结束]
     */
    public void setEnd(Integer end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 设置 [描述]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [由谁完成]
     */
    public void setFinishedby(String finishedby){
        this.finishedby = finishedby ;
        this.modify("finishedby",finishedby);
    }

    /**
     * 设置 [开始]
     */
    public void setBegin(Integer begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }

    /**
     * 设置 [关联编号]
     */
    public void setIdvalue(Integer idvalue){
        this.idvalue = idvalue ;
        this.modify("idvalue",idvalue);
    }

    /**
     * 设置 [由谁指派]
     */
    public void setAssignedby(String assignedby){
        this.assignedby = assignedby ;
        this.modify("assignedby",assignedby);
    }

    /**
     * 设置 [完成时间]
     */
    public void setFinisheddate(Timestamp finisheddate){
        this.finisheddate = finisheddate ;
        this.modify("finisheddate",finisheddate);
    }

    /**
     * 格式化日期 [完成时间]
     */
    public String formatFinisheddate(){
        if (this.finisheddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(finisheddate);
    }
    /**
     * 设置 [周期]
     */
    public void setCycle(Integer cycle){
        this.cycle = cycle ;
        this.modify("cycle",cycle);
    }

    /**
     * 设置 [指派给]
     */
    public void setAssignedto(String assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [状态]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [待办名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
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
     * 设置 [日期]
     */
    public void setDate(Timestamp date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 格式化日期 [日期]
     */
    public String formatDate(){
        if (this.date == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }
    /**
     * 设置 [私人事务]
     */
    public void setIbizprivate(Integer ibizprivate){
        this.ibizprivate = ibizprivate ;
        this.modify("private",ibizprivate);
    }

    /**
     * 设置 [config]
     */
    public void setConfig(String config){
        this.config = config ;
        this.modify("config",config);
    }


}


