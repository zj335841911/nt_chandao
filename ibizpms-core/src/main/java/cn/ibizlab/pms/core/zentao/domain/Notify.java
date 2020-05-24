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
import lombok.Data;
import org.springframework.data.annotation.Transient;


import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;


/**
 * 实体[通知]
 */
@Data
@TableName(value = "zt_notify",resultMap = "NotifyResultMap")
public class Notify extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * createdDate
     */
    @TableField(value = "createddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createddate")
    private Timestamp createddate;
    /**
     * ccList
     */
    @TableField(value = "cclist")
    @JSONField(name = "cclist")
    @JsonProperty("cclist")
    private String cclist;
    /**
     * failReason
     */
    @TableField(value = "failreason")
    @JSONField(name = "failreason")
    @JsonProperty("failreason")
    private String failreason;
    /**
     * action
     */
    @TableField(value = "action")
    @JSONField(name = "action")
    @JsonProperty("action")
    private Integer action;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * createdBy
     */
    @TableField(value = "createdby")
    @JSONField(name = "createdby")
    @JsonProperty("createdby")
    private String createdby;
    /**
     * status
     */
    @DEField(defaultValue = "wait")
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * subject
     */
    @TableField(value = "subject")
    @JSONField(name = "subject")
    @JsonProperty("subject")
    private String subject;
    /**
     * objectID
     */
    @TableField(value = "objectid")
    @JSONField(name = "objectid")
    @JsonProperty("objectid")
    private Integer objectid;
    /**
     * data
     */
    @TableField(value = "data")
    @JSONField(name = "data")
    @JsonProperty("data")
    private String data;
    /**
     * toList
     */
    @TableField(value = "tolist")
    @JSONField(name = "tolist")
    @JsonProperty("tolist")
    private String tolist;
    /**
     * sendTime
     */
    @TableField(value = "sendtime")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "sendtime" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("sendtime")
    private Timestamp sendtime;
    /**
     * objectType
     */
    @TableField(value = "objecttype")
    @JSONField(name = "objecttype")
    @JsonProperty("objecttype")
    private String objecttype;



    /**
     * 设置 [createdDate]
     */
    public void setCreateddate(Timestamp createddate){
        this.createddate = createddate ;
        this.modify("createddate",createddate);
    }
    /**
     * 设置 [ccList]
     */
    public void setCclist(String cclist){
        this.cclist = cclist ;
        this.modify("cclist",cclist);
    }
    /**
     * 设置 [failReason]
     */
    public void setFailreason(String failreason){
        this.failreason = failreason ;
        this.modify("failreason",failreason);
    }
    /**
     * 设置 [action]
     */
    public void setAction(Integer action){
        this.action = action ;
        this.modify("action",action);
    }
    /**
     * 设置 [createdBy]
     */
    public void setCreatedby(String createdby){
        this.createdby = createdby ;
        this.modify("createdby",createdby);
    }
    /**
     * 设置 [status]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }
    /**
     * 设置 [subject]
     */
    public void setSubject(String subject){
        this.subject = subject ;
        this.modify("subject",subject);
    }
    /**
     * 设置 [objectID]
     */
    public void setObjectid(Integer objectid){
        this.objectid = objectid ;
        this.modify("objectid",objectid);
    }
    /**
     * 设置 [data]
     */
    public void setData(String data){
        this.data = data ;
        this.modify("data",data);
    }
    /**
     * 设置 [toList]
     */
    public void setTolist(String tolist){
        this.tolist = tolist ;
        this.modify("tolist",tolist);
    }
    /**
     * 设置 [sendTime]
     */
    public void setSendtime(Timestamp sendtime){
        this.sendtime = sendtime ;
        this.modify("sendtime",sendtime);
    }
    /**
     * 设置 [objectType]
     */
    public void setObjecttype(String objecttype){
        this.objecttype = objecttype ;
        this.modify("objecttype",objecttype);
    }

}


