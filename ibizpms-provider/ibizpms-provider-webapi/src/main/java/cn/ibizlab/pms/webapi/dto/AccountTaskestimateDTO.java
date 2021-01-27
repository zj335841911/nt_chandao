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
 * 服务DTO对象[AccountTaskestimateDTO]
 */
@Data
public class AccountTaskestimateDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String id;

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
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String projectname;

    /**
     * 属性 [YEAR]
     *
     */
    @JSONField(name = "year")
    @JsonProperty("year")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String year;

    /**
     * 属性 [MONTH]
     *
     */
    @JSONField(name = "month")
    @JsonProperty("month")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String month;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
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
     * 属性 [EVALUATIONCOST]
     *
     */
    @JSONField(name = "evaluationcost")
    @JsonProperty("evaluationcost")
    private Double evaluationcost;

    /**
     * 属性 [INPUTCOST]
     *
     */
    @JSONField(name = "inputcost")
    @JsonProperty("inputcost")
    private Double inputcost;

    /**
     * 属性 [EVALUATIONTIME]
     *
     */
    @JSONField(name = "evaluationtime")
    @JsonProperty("evaluationtime")
    private Double evaluationtime;


    /**
     * 设置 [DATE]
     */
    public void setDate(Timestamp  date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 设置 [EVALUATIONCOST]
     */
    public void setEvaluationcost(Double  evaluationcost){
        this.evaluationcost = evaluationcost ;
        this.modify("evaluationcost",evaluationcost);
    }

    /**
     * 设置 [INPUTCOST]
     */
    public void setInputcost(Double  inputcost){
        this.inputcost = inputcost ;
        this.modify("inputcost",inputcost);
    }


}


