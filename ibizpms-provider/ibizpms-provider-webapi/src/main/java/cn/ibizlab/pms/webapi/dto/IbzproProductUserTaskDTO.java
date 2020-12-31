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
 * 服务DTO对象[IbzproProductUserTaskDTO]
 */
@Data
public class IbzproProductUserTaskDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String account;

    /**
     * 属性 [DATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;

    /**
     * 属性 [CONSUMED]
     *
     */
    @JSONField(name = "consumed")
    @JsonProperty("consumed")
    private Double consumed;

    /**
     * 属性 [LEFT]
     *
     */
    @JSONField(name = "left")
    @JsonProperty("left")
    private Double left;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long task;

    /**
     * 属性 [TASKNAME]
     *
     */
    @JSONField(name = "taskname")
    @JsonProperty("taskname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String taskname;

    /**
     * 属性 [TASKTYPE]
     *
     */
    @JSONField(name = "tasktype")
    @JsonProperty("tasktype")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String tasktype;

    /**
     * 属性 [PROGRESSRATE]
     *
     */
    @JSONField(name = "progressrate")
    @JsonProperty("progressrate")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String progressrate;

    /**
     * 属性 [DELAYDAYS]
     *
     */
    @JSONField(name = "delaydays")
    @JsonProperty("delaydays")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String delaydays;

    /**
     * 属性 [ESTSTARTED]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "eststarted" , format="yyyy-MM-dd")
    @JsonProperty("eststarted")
    private Timestamp eststarted;

    /**
     * 属性 [DEADLINE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "deadline" , format="yyyy-MM-dd")
    @JsonProperty("deadline")
    private Timestamp deadline;

    /**
     * 属性 [MINDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "mindate" , format="yyyy-MM-dd")
    @JsonProperty("mindate")
    private Timestamp mindate;

    /**
     * 属性 [MAXDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "maxdate" , format="yyyy-MM-dd")
    @JsonProperty("maxdate")
    private Timestamp maxdate;


    /**
     * 设置 [ACCOUNT]
     */
    public void setAccount(String  account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [DATE]
     */
    public void setDate(Timestamp  date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 设置 [CONSUMED]
     */
    public void setConsumed(Double  consumed){
        this.consumed = consumed ;
        this.modify("consumed",consumed);
    }

    /**
     * 设置 [LEFT]
     */
    public void setLeft(Double  left){
        this.left = left ;
        this.modify("left",left);
    }

    /**
     * 设置 [TASK]
     */
    public void setTask(Long  task){
        this.task = task ;
        this.modify("task",task);
    }

    /**
     * 设置 [MINDATE]
     */
    public void setMindate(Timestamp  mindate){
        this.mindate = mindate ;
        this.modify("mindate",mindate);
    }

    /**
     * 设置 [MAXDATE]
     */
    public void setMaxdate(Timestamp  maxdate){
        this.maxdate = maxdate ;
        this.modify("maxdate",maxdate);
    }


}


