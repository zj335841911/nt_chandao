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
 * 服务DTO对象[TestResultDTO]
 */
@Data
public class TestResultDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [LASTRUNNER]
     *
     */
    @JSONField(name = "lastrunner")
    @JsonProperty("lastrunner")
    private String lastrunner;

    /**
     * 属性 [STEPRESULTS]
     *
     */
    @JSONField(name = "stepresults")
    @JsonProperty("stepresults")
    private String stepresults;

    /**
     * 属性 [CASERESULT]
     *
     */
    @JSONField(name = "caseresult")
    @JsonProperty("caseresult")
    private String caseresult;

    /**
     * 属性 [XML]
     *
     */
    @JSONField(name = "xml")
    @JsonProperty("xml")
    private String xml;

    /**
     * 属性 [DURATION]
     *
     */
    @JSONField(name = "duration")
    @JsonProperty("duration")
    private Double duration;

    /**
     * 属性 [DATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("date")
    private Timestamp date;

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
     * 属性 [JOB]
     *
     */
    @JSONField(name = "job")
    @JsonProperty("job")
    private BigInteger job;

    /**
     * 属性 [CASE]
     *
     */
    @JSONField(name = "ibizcase")
    @JsonProperty("ibizcase")
    private BigInteger ibizcase;

    /**
     * 属性 [RUN]
     *
     */
    @JSONField(name = "run")
    @JsonProperty("run")
    private BigInteger run;

    /**
     * 属性 [COMPILE]
     *
     */
    @JSONField(name = "compile")
    @JsonProperty("compile")
    private BigInteger compile;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    private String task;


    /**
     * 设置 [LASTRUNNER]
     */
    public void setLastrunner(String  lastrunner){
        this.lastrunner = lastrunner ;
        this.modify("lastrunner",lastrunner);
    }

    /**
     * 设置 [STEPRESULTS]
     */
    public void setStepresults(String  stepresults){
        this.stepresults = stepresults ;
        this.modify("stepresults",stepresults);
    }

    /**
     * 设置 [CASERESULT]
     */
    public void setCaseresult(String  caseresult){
        this.caseresult = caseresult ;
        this.modify("caseresult",caseresult);
    }

    /**
     * 设置 [XML]
     */
    public void setXml(String  xml){
        this.xml = xml ;
        this.modify("xml",xml);
    }

    /**
     * 设置 [DURATION]
     */
    public void setDuration(Double  duration){
        this.duration = duration ;
        this.modify("duration",duration);
    }

    /**
     * 设置 [DATE]
     */
    public void setDate(Timestamp  date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [JOB]
     */
    public void setJob(BigInteger  job){
        this.job = job ;
        this.modify("job",job);
    }

    /**
     * 设置 [CASE]
     */
    public void setIbizcase(BigInteger  ibizcase){
        this.ibizcase = ibizcase ;
        this.modify("case",ibizcase);
    }

    /**
     * 设置 [RUN]
     */
    public void setRun(BigInteger  run){
        this.run = run ;
        this.modify("run",run);
    }

    /**
     * 设置 [COMPILE]
     */
    public void setCompile(BigInteger  compile){
        this.compile = compile ;
        this.modify("compile",compile);
    }


}

