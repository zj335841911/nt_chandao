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
 * 服务DTO对象[TodoDTO]
 */
@Data
public class TodoDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;

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
    private String closedby;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [END]
     *
     */
    @JSONField(name = "end")
    @JsonProperty("end")
    private Integer end;

    /**
     * 属性 [DESC]
     *
     */
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;

    /**
     * 属性 [FINISHEDBY]
     *
     */
    @JSONField(name = "finishedby")
    @JsonProperty("finishedby")
    private String finishedby;

    /**
     * 属性 [BEGIN]
     *
     */
    @JSONField(name = "begin")
    @JsonProperty("begin")
    private Integer begin;

    /**
     * 属性 [IDVALUE]
     *
     */
    @JSONField(name = "idvalue")
    @JsonProperty("idvalue")
    private Integer idvalue;

    /**
     * 属性 [ASSIGNEDBY]
     *
     */
    @JSONField(name = "assignedby")
    @JsonProperty("assignedby")
    private String assignedby;

    /**
     * 属性 [FINISHEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "finisheddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("finisheddate")
    private Timestamp finisheddate;

    /**
     * 属性 [CYCLE]
     *
     */
    @JSONField(name = "cycle")
    @JsonProperty("cycle")
    private Integer cycle;

    /**
     * 属性 [ASSIGNEDTO]
     *
     */
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    private String assignedto;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;

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
     * 属性 [DATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;

    /**
     * 属性 [PRIVATE]
     *
     */
    @JSONField(name = "ibizprivate")
    @JsonProperty("ibizprivate")
    private Integer ibizprivate;

    /**
     * 属性 [CONFIG]
     *
     */
    @JSONField(name = "config")
    @JsonProperty("config")
    private String config;

    /**
     * 属性 [CONFIG_DAY]
     *
     */
    @JSONField(name = "config_day")
    @JsonProperty("config_day")
    private Integer configDay;

    /**
     * 属性 [CONFIG_BEFOREDAYS]
     *
     */
    @JSONField(name = "config_beforedays")
    @JsonProperty("config_beforedays")
    private Integer configBeforedays;

    /**
     * 属性 [CONFIG_WEEK]
     *
     */
    @JSONField(name = "config_week")
    @JsonProperty("config_week")
    private String configWeek;

    /**
     * 属性 [CONFIG_MONTH]
     *
     */
    @JSONField(name = "config_month")
    @JsonProperty("config_month")
    private String configMonth;

    /**
     * 属性 [CONFIG_TYPE]
     *
     */
    @JSONField(name = "config_type")
    @JsonProperty("config_type")
    private String configType;

    /**
     * 属性 [CONFIG_END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "config_end" , format="yyyy-MM-dd")
    @JsonProperty("config_end")
    private Timestamp configEnd;

    /**
     * 属性 [BUG]
     *
     */
    @JSONField(name = "bug")
    @JsonProperty("bug")
    private String bug;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    private String task;

    /**
     * 属性 [STORY]
     *
     */
    @JSONField(name = "story")
    @JsonProperty("story")
    private String story;

    /**
     * 属性 [DATE1]
     *
     */
    @JSONField(name = "date1")
    @JsonProperty("date1")
    private String date1;

    /**
     * 属性 [DATE_DISABLE]
     *
     */
    @JSONField(name = "date_disable")
    @JsonProperty("date_disable")
    private String dateDisable;


    /**
     * 设置 [ACCOUNT]
     */
    public void setAccount(String  account){
        this.account = account ;
        this.modify("account",account);
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
     * 设置 [END]
     */
    public void setEnd(Integer  end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 设置 [DESC]
     */
    public void setDesc(String  desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [FINISHEDBY]
     */
    public void setFinishedby(String  finishedby){
        this.finishedby = finishedby ;
        this.modify("finishedby",finishedby);
    }

    /**
     * 设置 [BEGIN]
     */
    public void setBegin(Integer  begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }

    /**
     * 设置 [IDVALUE]
     */
    public void setIdvalue(Integer  idvalue){
        this.idvalue = idvalue ;
        this.modify("idvalue",idvalue);
    }

    /**
     * 设置 [ASSIGNEDBY]
     */
    public void setAssignedby(String  assignedby){
        this.assignedby = assignedby ;
        this.modify("assignedby",assignedby);
    }

    /**
     * 设置 [FINISHEDDATE]
     */
    public void setFinisheddate(Timestamp  finisheddate){
        this.finisheddate = finisheddate ;
        this.modify("finisheddate",finisheddate);
    }

    /**
     * 设置 [CYCLE]
     */
    public void setCycle(Integer  cycle){
        this.cycle = cycle ;
        this.modify("cycle",cycle);
    }

    /**
     * 设置 [ASSIGNEDTO]
     */
    public void setAssignedto(String  assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
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
     * 设置 [DATE]
     */
    public void setDate(Timestamp  date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 设置 [PRIVATE]
     */
    public void setIbizprivate(Integer  ibizprivate){
        this.ibizprivate = ibizprivate ;
        this.modify("private",ibizprivate);
    }

    /**
     * 设置 [CONFIG]
     */
    public void setConfig(String  config){
        this.config = config ;
        this.modify("config",config);
    }


}

