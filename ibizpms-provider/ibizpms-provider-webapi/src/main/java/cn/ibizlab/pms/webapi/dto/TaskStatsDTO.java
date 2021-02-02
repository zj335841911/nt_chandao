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
 * 服务DTO对象[TaskStatsDTO]
 */
@Data
public class TaskStatsDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [TASKDEADLINE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "taskdeadline" , format="yyyy-MM-dd")
    @JsonProperty("taskdeadline")
    private Timestamp taskdeadline;

    /**
     * 属性 [TASKID]
     *
     */
    @JSONField(name = "taskid")
    @JsonProperty("taskid")
    private Integer taskid;

    /**
     * 属性 [TASKREALSTART]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "taskrealstart" , format="yyyy-MM-dd")
    @JsonProperty("taskrealstart")
    private Timestamp taskrealstart;

    /**
     * 属性 [TASKEFFICIENT]
     *
     */
    @JSONField(name = "taskefficient")
    @JsonProperty("taskefficient")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String taskefficient;

    /**
     * 属性 [TASKESTIMATE]
     *
     */
    @JSONField(name = "taskestimate")
    @JsonProperty("taskestimate")
    private Integer taskestimate;

    /**
     * 属性 [END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;

    /**
     * 属性 [USERCONSUMED]
     *
     */
    @JSONField(name = "userconsumed")
    @JsonProperty("userconsumed")
    private Integer userconsumed;

    /**
     * 属性 [TOTALLEFT]
     *
     */
    @JSONField(name = "totalleft")
    @JsonProperty("totalleft")
    private Integer totalleft;

    /**
     * 属性 [PROJECTCONSUMED]
     *
     */
    @JSONField(name = "projectconsumed")
    @JsonProperty("projectconsumed")
    private Integer projectconsumed;

    /**
     * 属性 [BEGIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;

    /**
     * 属性 [TOTALCONSUMED]
     *
     */
    @JSONField(name = "totalconsumed")
    @JsonProperty("totalconsumed")
    private Integer totalconsumed;

    /**
     * 属性 [TOTALESTIMATE]
     *
     */
    @JSONField(name = "totalestimate")
    @JsonProperty("totalestimate")
    private Integer totalestimate;

    /**
     * 属性 [TASKESTSTARTED]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "taskeststarted" , format="yyyy-MM-dd")
    @JsonProperty("taskeststarted")
    private Timestamp taskeststarted;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    /**
     * 属性 [DEPT]
     *
     */
    @JSONField(name = "dept")
    @JsonProperty("dept")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String dept;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String name;

    /**
     * 属性 [PROJECTNAME]
     *
     */
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String projectname;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String project;

    /**
     * 属性 [TASKFINISHEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "taskfinisheddate" , format="yyyy-MM-dd")
    @JsonProperty("taskfinisheddate")
    private Timestamp taskfinisheddate;

    /**
     * 属性 [TASKNAME]
     *
     */
    @JSONField(name = "taskname")
    @JsonProperty("taskname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String taskname;

    /**
     * 属性 [TASKCNT]
     *
     */
    @JSONField(name = "taskcnt")
    @JsonProperty("taskcnt")
    private Integer taskcnt;

    /**
     * 属性 [TASKPRI]
     *
     */
    @JSONField(name = "taskpri")
    @JsonProperty("taskpri")
    private Integer taskpri;

    /**
     * 属性 [TASKDELAY]
     *
     */
    @JSONField(name = "taskdelay")
    @JsonProperty("taskdelay")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String taskdelay;

    /**
     * 属性 [FINISHEDBY]
     *
     */
    @JSONField(name = "finishedby")
    @JsonProperty("finishedby")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String finishedby;


    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }


}


