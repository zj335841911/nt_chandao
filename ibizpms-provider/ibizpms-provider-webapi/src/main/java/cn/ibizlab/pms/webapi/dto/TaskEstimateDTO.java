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
    private BigInteger id;

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
    private String work;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    private BigInteger task;

    /**
     * 属性 [DATES]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "dates" , format="yyyy-MM-dd")
    @JsonProperty("dates")
    private Timestamp dates;


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
    public void setTask(BigInteger  task){
        this.task = task ;
        this.modify("task",task);
    }


}

