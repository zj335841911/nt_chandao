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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[任务预计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_taskestimate",resultMap = "TaskEstimateResultMap")
public class TaskEstimate extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * 预计剩余
     */
    @DEField(defaultValue = "0")
    @TableField(value = "left")
    @JSONField(name = "left")
    @JsonProperty("left")
    private Double left;
    /**
     * 总计消耗
     */
    @TableField(value = "consumed")
    @JSONField(name = "consumed")
    @JsonProperty("consumed")
    private Double consumed;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 日期
     */
    @TableField(value = "date")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * work
     */
    @TableField(value = "work")
    @JSONField(name = "work")
    @JsonProperty("work")
    private String work;
    /**
     * 任务
     */
    @TableField(value = "task")
    @JSONField(name = "task")
    @JsonProperty("task")
    private BigInteger task;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Task zttask;



    /**
     * 设置 [用户]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [预计剩余]
     */
    public void setLeft(Double left){
        this.left = left ;
        this.modify("left",left);
    }

    /**
     * 设置 [总计消耗]
     */
    public void setConsumed(Double consumed){
        this.consumed = consumed ;
        this.modify("consumed",consumed);
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
        SimpleDateFormat sdf = new SimpleDateFormat("%1$tY-%1$tm-%1$td");
        return sdf.format(date);
    }
    /**
     * 设置 [work]
     */
    public void setWork(String work){
        this.work = work ;
        this.modify("work",work);
    }

    /**
     * 设置 [任务]
     */
    public void setTask(BigInteger task){
        this.task = task ;
        this.modify("task",task);
    }


}


