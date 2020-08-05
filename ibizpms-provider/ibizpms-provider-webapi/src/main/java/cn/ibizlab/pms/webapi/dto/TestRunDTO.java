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
 * 服务DTO对象[TestRunDTO]
 */
@Data
public class TestRunDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [LASTRUNRESULT]
     *
     */
    @JSONField(name = "lastrunresult")
    @JsonProperty("lastrunresult")
    private String lastrunresult;

    /**
     * 属性 [LASTRUNDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastrundate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastrundate")
    private Timestamp lastrundate;

    /**
     * 属性 [ASSIGNEDTO]
     *
     */
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    private String assignedto;

    /**
     * 属性 [LASTRUNNER]
     *
     */
    @JSONField(name = "lastrunner")
    @JsonProperty("lastrunner")
    private String lastrunner;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 属性 [CASE]
     *
     */
    @JSONField(name = "ibizcase")
    @JsonProperty("ibizcase")
    private BigInteger ibizcase;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    private BigInteger task;


    /**
     * 设置 [LASTRUNRESULT]
     */
    public void setLastrunresult(String  lastrunresult){
        this.lastrunresult = lastrunresult ;
        this.modify("lastrunresult",lastrunresult);
    }

    /**
     * 设置 [LASTRUNDATE]
     */
    public void setLastrundate(Timestamp  lastrundate){
        this.lastrundate = lastrundate ;
        this.modify("lastrundate",lastrundate);
    }

    /**
     * 设置 [ASSIGNEDTO]
     */
    public void setAssignedto(String  assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [LASTRUNNER]
     */
    public void setLastrunner(String  lastrunner){
        this.lastrunner = lastrunner ;
        this.modify("lastrunner",lastrunner);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [CASE]
     */
    public void setIbizcase(BigInteger  ibizcase){
        this.ibizcase = ibizcase ;
        this.modify("case",ibizcase);
    }

    /**
     * 设置 [TASK]
     */
    public void setTask(BigInteger  task){
        this.task = task ;
        this.modify("task",task);
    }


}

