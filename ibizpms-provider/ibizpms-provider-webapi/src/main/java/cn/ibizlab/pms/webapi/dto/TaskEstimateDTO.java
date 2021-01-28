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
 * 服务DTO对象[TaskEstimateDTO]
 */
@Data
public class TaskEstimateDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String account;

    /**
     * 属性 [LEFT]
     *
     */
    @JSONField(name = "left")
    @JsonProperty("left")
    private Double left;

    /**
     * 属性 [CONSUMED]
     *
     */
    @JSONField(name = "consumed")
    @JsonProperty("consumed")
    private Double consumed;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    /**
     * 属性 [DATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;

    /**
     * 属性 [WORK]
     *
     */
    @JSONField(name = "work")
    @JsonProperty("work")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String work;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long task;

    /**
     * 属性 [DATES]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "dates" , format="yyyy-MM-dd")
    @JsonProperty("dates")
    private Timestamp dates;

    /**
     * 属性 [EVALUATIONSTATUS]
     *
     */
    @JSONField(name = "evaluationstatus")
    @JsonProperty("evaluationstatus")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String evaluationstatus;

    /**
     * 属性 [EVALUATIONCOST]
     *
     */
    @JSONField(name = "evaluationcost")
    @JsonProperty("evaluationcost")
    private Double evaluationcost;

    /**
     * 属性 [EVALUATIONTIME]
     *
     */
    @JSONField(name = "evaluationtime")
    @JsonProperty("evaluationtime")
    private Double evaluationtime;

    /**
     * 属性 [INPUTCOST]
     *
     */
    @JSONField(name = "inputcost")
    @JsonProperty("inputcost")
    private Double inputcost;

    /**
     * 属性 [EVALUATIONDESC]
     *
     */
    @JSONField(name = "evaluationdesc")
    @JsonProperty("evaluationdesc")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String evaluationdesc;

    /**
     * 属性 [TASKNAME]
     *
     */
    @JSONField(name = "taskname")
    @JsonProperty("taskname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String taskname;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long project;

    /**
     * 属性 [PROJECTNAME]
     *
     */
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String projectname;

    /**
     * 属性 [TASKSPECIES]
     *
     */
    @JSONField(name = "taskspecies")
    @JsonProperty("taskspecies")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String taskspecies;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    private String type;

    /**
     * 属性 [YEAR]
     *
     */
    @JSONField(name = "year")
    @JsonProperty("year")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String year;

    /**
     * 属性 [YEARNAME]
     *
     */
    @JSONField(name = "yearname")
    @JsonProperty("yearname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String yearname;

    /**
     * 属性 [MONTH]
     *
     */
    @JSONField(name = "month")
    @JsonProperty("month")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String month;

    /**
     * 属性 [MONTHNAME]
     *
     */
    @JSONField(name = "monthname")
    @JsonProperty("monthname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String monthname;


    /**
     * 设置 [ACCOUNT]
     */
    public void setAccount(String  account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [LEFT]
     */
    public void setLeft(Double  left){
        this.left = left ;
        this.modify("left",left);
    }

    /**
     * 设置 [CONSUMED]
     */
    public void setConsumed(Double  consumed){
        this.consumed = consumed ;
        this.modify("consumed",consumed);
    }

    /**
     * 设置 [DATE]
     */
    public void setDate(Timestamp  date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 设置 [WORK]
     */
    public void setWork(String  work){
        this.work = work ;
        this.modify("work",work);
    }

    /**
     * 设置 [TASK]
     */
    public void setTask(Long  task){
        this.task = task ;
        this.modify("task",task);
    }

    /**
     * 设置 [EVALUATIONSTATUS]
     */
    public void setEvaluationstatus(String  evaluationstatus){
        this.evaluationstatus = evaluationstatus ;
        this.modify("evaluationstatus",evaluationstatus);
    }

    /**
     * 设置 [EVALUATIONCOST]
     */
    public void setEvaluationcost(Double  evaluationcost){
        this.evaluationcost = evaluationcost ;
        this.modify("evaluationcost",evaluationcost);
    }

    /**
     * 设置 [EVALUATIONTIME]
     */
    public void setEvaluationtime(Double  evaluationtime){
        this.evaluationtime = evaluationtime ;
        this.modify("evaluationtime",evaluationtime);
    }

    /**
     * 设置 [INPUTCOST]
     */
    public void setInputcost(Double  inputcost){
        this.inputcost = inputcost ;
        this.modify("inputcost",inputcost);
    }

    /**
     * 设置 [EVALUATIONDESC]
     */
    public void setEvaluationdesc(String  evaluationdesc){
        this.evaluationdesc = evaluationdesc ;
        this.modify("evaluationdesc",evaluationdesc);
    }

    /**
     * 设置 [MONTHNAME]
     */
    public void setMonthname(String  monthname){
        this.monthname = monthname ;
        this.modify("monthname",monthname);
    }


}


