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
 * 实体[测试运行]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_testrun",resultMap = "TestRunResultMap")
public class TestRun extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 结果
     */
    @TableField(value = "lastrunresult")
    @JSONField(name = "lastrunresult")
    @JsonProperty("lastrunresult")
    private String lastrunresult;
    /**
     * 最后执行时间
     */
    @TableField(value = "lastrundate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastrundate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastrundate")
    private Timestamp lastrundate;
    /**
     * 指派给
     */
    @TableField(value = "assignedto")
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    private String assignedto;
    /**
     * 最后执行人
     */
    @TableField(value = "lastrunner")
    @JSONField(name = "lastrunner")
    @JsonProperty("lastrunner")
    private String lastrunner;
    /**
     * 当前状态
     */
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 用例版本
     */
    @DEField(defaultValue = "0")
    @TableField(value = "version")
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;
    /**
     * 测试用例
     */
    @DEField(name = "case")
    @TableField(value = "case")
    @JSONField(name = "ibizcase")
    @JsonProperty("ibizcase")
    private BigInteger ibizcase;
    /**
     * 测试单
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
    private cn.ibizlab.pms.core.zentao.domain.Case ztcase;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Task zttask;



    /**
     * 设置 [结果]
     */
    public void setLastrunresult(String lastrunresult){
        this.lastrunresult = lastrunresult ;
        this.modify("lastrunresult",lastrunresult);
    }

    /**
     * 设置 [最后执行时间]
     */
    public void setLastrundate(Timestamp lastrundate){
        this.lastrundate = lastrundate ;
        this.modify("lastrundate",lastrundate);
    }

    /**
     * 格式化日期 [最后执行时间]
     */
    public String formatLastrundate(){
        if (this.lastrundate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS");
        return sdf.format(lastrundate);
    }
    /**
     * 设置 [指派给]
     */
    public void setAssignedto(String assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [最后执行人]
     */
    public void setLastrunner(String lastrunner){
        this.lastrunner = lastrunner ;
        this.modify("lastrunner",lastrunner);
    }

    /**
     * 设置 [当前状态]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [用例版本]
     */
    public void setVersion(Integer version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [测试用例]
     */
    public void setIbizcase(BigInteger ibizcase){
        this.ibizcase = ibizcase ;
        this.modify("case",ibizcase);
    }

    /**
     * 设置 [测试单]
     */
    public void setTask(BigInteger task){
        this.task = task ;
        this.modify("task",task);
    }


}


