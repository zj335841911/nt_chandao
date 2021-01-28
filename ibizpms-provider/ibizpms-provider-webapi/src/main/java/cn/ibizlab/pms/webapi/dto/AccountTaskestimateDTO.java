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
     * 属性 [THIRTYONEEVALUATIONTIME]
     *
     */
    @JSONField(name = "thirtyoneevaluationtime")
    @JsonProperty("thirtyoneevaluationtime")
    private Double thirtyoneevaluationtime;

    /**
     * 属性 [THIRTYEVALUATIONTIME]
     *
     */
    @JSONField(name = "thirtyevaluationtime")
    @JsonProperty("thirtyevaluationtime")
    private Double thirtyevaluationtime;

    /**
     * 属性 [TWENTYEIGHTEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentyeightevaluationtime")
    @JsonProperty("twentyeightevaluationtime")
    private Double twentyeightevaluationtime;

    /**
     * 属性 [TWENTYNINEEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentynineevaluationtime")
    @JsonProperty("twentynineevaluationtime")
    private Double twentynineevaluationtime;

    /**
     * 属性 [TWENTYSEVENEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentysevenevaluationtime")
    @JsonProperty("twentysevenevaluationtime")
    private Double twentysevenevaluationtime;

    /**
     * 属性 [TWENTYSIXEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentysixevaluationtime")
    @JsonProperty("twentysixevaluationtime")
    private Double twentysixevaluationtime;

    /**
     * 属性 [TWENTYFIVEEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentyfiveevaluationtime")
    @JsonProperty("twentyfiveevaluationtime")
    private Double twentyfiveevaluationtime;

    /**
     * 属性 [TWENTYFOUREVALUATIONTIME]
     *
     */
    @JSONField(name = "twentyfourevaluationtime")
    @JsonProperty("twentyfourevaluationtime")
    private Double twentyfourevaluationtime;

    /**
     * 属性 [TWENTYTHREEEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentythreeevaluationtime")
    @JsonProperty("twentythreeevaluationtime")
    private Double twentythreeevaluationtime;

    /**
     * 属性 [TWENTYTWOEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentytwoevaluationtime")
    @JsonProperty("twentytwoevaluationtime")
    private Double twentytwoevaluationtime;

    /**
     * 属性 [NINETEENEVALUATIONTIME]
     *
     */
    @JSONField(name = "nineteenevaluationtime")
    @JsonProperty("nineteenevaluationtime")
    private Double nineteenevaluationtime;

    /**
     * 属性 [TWENTYONEEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentyoneevaluationtime")
    @JsonProperty("twentyoneevaluationtime")
    private Double twentyoneevaluationtime;

    /**
     * 属性 [TWENTYEVALUATIONTIME]
     *
     */
    @JSONField(name = "twentyevaluationtime")
    @JsonProperty("twentyevaluationtime")
    private Double twentyevaluationtime;

    /**
     * 属性 [SEVENTEENEVALUATIONTIME]
     *
     */
    @JSONField(name = "seventeenevaluationtime")
    @JsonProperty("seventeenevaluationtime")
    private Double seventeenevaluationtime;

    /**
     * 属性 [EIGHTEENEVALUATIONTIME]
     *
     */
    @JSONField(name = "eighteenevaluationtime")
    @JsonProperty("eighteenevaluationtime")
    private Double eighteenevaluationtime;

    /**
     * 属性 [SIXTEENEVALUATIONTIME]
     *
     */
    @JSONField(name = "sixteenevaluationtime")
    @JsonProperty("sixteenevaluationtime")
    private Double sixteenevaluationtime;

    /**
     * 属性 [FIFTEENEVALUATIONTIME]
     *
     */
    @JSONField(name = "fifteenevaluationtime")
    @JsonProperty("fifteenevaluationtime")
    private Double fifteenevaluationtime;

    /**
     * 属性 [FOURTEENEVALUATIONTIME]
     *
     */
    @JSONField(name = "fourteenevaluationtime")
    @JsonProperty("fourteenevaluationtime")
    private Double fourteenevaluationtime;

    /**
     * 属性 [THIRTEENEVALUATIONTIME]
     *
     */
    @JSONField(name = "thirteenevaluationtime")
    @JsonProperty("thirteenevaluationtime")
    private Double thirteenevaluationtime;

    /**
     * 属性 [ELEVENEVALUATIONTIME]
     *
     */
    @JSONField(name = "elevenevaluationtime")
    @JsonProperty("elevenevaluationtime")
    private Double elevenevaluationtime;

    /**
     * 属性 [NINEEVALUATIONTIME]
     *
     */
    @JSONField(name = "nineevaluationtime")
    @JsonProperty("nineevaluationtime")
    private Double nineevaluationtime;

    /**
     * 属性 [TWELVEEVALUATIONTIME]
     *
     */
    @JSONField(name = "twelveevaluationtime")
    @JsonProperty("twelveevaluationtime")
    private Double twelveevaluationtime;

    /**
     * 属性 [SEVENEVALUATIONTIME]
     *
     */
    @JSONField(name = "sevenevaluationtime")
    @JsonProperty("sevenevaluationtime")
    private Double sevenevaluationtime;

    /**
     * 属性 [TENEVALUATIONTIME]
     *
     */
    @JSONField(name = "tenevaluationtime")
    @JsonProperty("tenevaluationtime")
    private Double tenevaluationtime;

    /**
     * 属性 [SIXEVALUATIONTIME]
     *
     */
    @JSONField(name = "sixevaluationtime")
    @JsonProperty("sixevaluationtime")
    private Double sixevaluationtime;

    /**
     * 属性 [EIGHTEVALUATIONTIME]
     *
     */
    @JSONField(name = "eightevaluationtime")
    @JsonProperty("eightevaluationtime")
    private Double eightevaluationtime;

    /**
     * 属性 [FIVEEVALUATIONTIME]
     *
     */
    @JSONField(name = "fiveevaluationtime")
    @JsonProperty("fiveevaluationtime")
    private Double fiveevaluationtime;

    /**
     * 属性 [ONEEVALUATIONTIME]
     *
     */
    @JSONField(name = "oneevaluationtime")
    @JsonProperty("oneevaluationtime")
    private Double oneevaluationtime;

    /**
     * 属性 [THREEEVALUATIONTIME]
     *
     */
    @JSONField(name = "threeevaluationtime")
    @JsonProperty("threeevaluationtime")
    private Double threeevaluationtime;

    /**
     * 属性 [FOUREVALUATIONTIME]
     *
     */
    @JSONField(name = "fourevaluationtime")
    @JsonProperty("fourevaluationtime")
    private Double fourevaluationtime;

    /**
     * 属性 [TWOCONSUMED]
     *
     */
    @JSONField(name = "twoconsumed")
    @JsonProperty("twoconsumed")
    private Double twoconsumed;

    /**
     * 属性 [TWOEVALUATIONTIME]
     *
     */
    @JSONField(name = "twoevaluationtime")
    @JsonProperty("twoevaluationtime")
    private Double twoevaluationtime;

    /**
     * 属性 [ONECONSUMED]
     *
     */
    @JSONField(name = "oneconsumed")
    @JsonProperty("oneconsumed")
    private Double oneconsumed;

    /**
     * 属性 [FOURONSUMED]
     *
     */
    @JSONField(name = "fourconsumed")
    @JsonProperty("fourconsumed")
    private Double fourconsumed;

    /**
     * 属性 [FIVECONSUMED]
     *
     */
    @JSONField(name = "fiveconsumed")
    @JsonProperty("fiveconsumed")
    private Double fiveconsumed;

    /**
     * 属性 [THREECONSUMED]
     *
     */
    @JSONField(name = "threeconsumed")
    @JsonProperty("threeconsumed")
    private Double threeconsumed;

    /**
     * 属性 [SEVENCONSUMED]
     *
     */
    @JSONField(name = "sevenconsumed")
    @JsonProperty("sevenconsumed")
    private Double sevenconsumed;

    /**
     * 属性 [NINECONSUMED]
     *
     */
    @JSONField(name = "nineconsumed")
    @JsonProperty("nineconsumed")
    private Double nineconsumed;

    /**
     * 属性 [SIXCONSUMED]
     *
     */
    @JSONField(name = "sixconsumed")
    @JsonProperty("sixconsumed")
    private Double sixconsumed;

    /**
     * 属性 [TENCONSUMED]
     *
     */
    @JSONField(name = "tenconsumed")
    @JsonProperty("tenconsumed")
    private Double tenconsumed;

    /**
     * 属性 [EIGHTCONSUMED]
     *
     */
    @JSONField(name = "eightconsumed")
    @JsonProperty("eightconsumed")
    private Double eightconsumed;

    /**
     * 属性 [THIRTEENCONSUMED]
     *
     */
    @JSONField(name = "thirteenconsumed")
    @JsonProperty("thirteenconsumed")
    private Double thirteenconsumed;

    /**
     * 属性 [ELEVENCONSUMED]
     *
     */
    @JSONField(name = "elevenconsumed")
    @JsonProperty("elevenconsumed")
    private Double elevenconsumed;

    /**
     * 属性 [FOURTEENCONSUMED]
     *
     */
    @JSONField(name = "fourteenconsumed")
    @JsonProperty("fourteenconsumed")
    private Double fourteenconsumed;

    /**
     * 属性 [TWELVECONSUMED]
     *
     */
    @JSONField(name = "twelveconsumed")
    @JsonProperty("twelveconsumed")
    private Double twelveconsumed;

    /**
     * 属性 [SEVENTEENCONSUMED]
     *
     */
    @JSONField(name = "seventeenconsumed")
    @JsonProperty("seventeenconsumed")
    private Double seventeenconsumed;

    /**
     * 属性 [FIFTEENCONSUMED]
     *
     */
    @JSONField(name = "fifteenconsumed")
    @JsonProperty("fifteenconsumed")
    private Double fifteenconsumed;

    /**
     * 属性 [EIGHTEENCONSUMED]
     *
     */
    @JSONField(name = "eighteenconsumed")
    @JsonProperty("eighteenconsumed")
    private Double eighteenconsumed;

    /**
     * 属性 [SIXTEENCONSUMED]
     *
     */
    @JSONField(name = "sixteenconsumed")
    @JsonProperty("sixteenconsumed")
    private Double sixteenconsumed;

    /**
     * 属性 [TWENTYCONSUMED]
     *
     */
    @JSONField(name = "twentyconsumed")
    @JsonProperty("twentyconsumed")
    private Double twentyconsumed;

    /**
     * 属性 [TWENTYTWOCONSUMED]
     *
     */
    @JSONField(name = "twentytwoconsumed")
    @JsonProperty("twentytwoconsumed")
    private Double twentytwoconsumed;

    /**
     * 属性 [NINETEENCONSUMED]
     *
     */
    @JSONField(name = "nineteenconsumed")
    @JsonProperty("nineteenconsumed")
    private Double nineteenconsumed;

    /**
     * 属性 [TWENTYONECONSUMED]
     *
     */
    @JSONField(name = "twentyoneconsumed")
    @JsonProperty("twentyoneconsumed")
    private Double twentyoneconsumed;

    /**
     * 属性 [TWENTYTHREECONSUMED]
     *
     */
    @JSONField(name = "twentythreeconsumed")
    @JsonProperty("twentythreeconsumed")
    private Double twentythreeconsumed;

    /**
     * 属性 [TWENTYFOURCONSUMED]
     *
     */
    @JSONField(name = "twentyfourconsumed")
    @JsonProperty("twentyfourconsumed")
    private Double twentyfourconsumed;

    /**
     * 属性 [TWENTYSIXCONSUMED]
     *
     */
    @JSONField(name = "twentysixconsumed")
    @JsonProperty("twentysixconsumed")
    private Double twentysixconsumed;

    /**
     * 属性 [TWENTYNINECONSUMED]
     *
     */
    @JSONField(name = "twentynineconsumed")
    @JsonProperty("twentynineconsumed")
    private Double twentynineconsumed;

    /**
     * 属性 [TWENTYSEVENCONSUMED]
     *
     */
    @JSONField(name = "twentysevenconsumed")
    @JsonProperty("twentysevenconsumed")
    private Double twentysevenconsumed;

    /**
     * 属性 [TWENTYFIVECONSUMED]
     *
     */
    @JSONField(name = "twentyfiveconsumed")
    @JsonProperty("twentyfiveconsumed")
    private Double twentyfiveconsumed;

    /**
     * 属性 [TWENTYEIGHTCONSUMED]
     *
     */
    @JSONField(name = "twentyeightconsumed")
    @JsonProperty("twentyeightconsumed")
    private Double twentyeightconsumed;

    /**
     * 属性 [THIRTYONECONSUMED]
     *
     */
    @JSONField(name = "thirtyoneconsumed")
    @JsonProperty("thirtyoneconsumed")
    private Double thirtyoneconsumed;

    /**
     * 属性 [THIRTYCONSUMED]
     *
     */
    @JSONField(name = "thirtyconsumed")
    @JsonProperty("thirtyconsumed")
    private Double thirtyconsumed;

    /**
     * 属性 [THIRTYEVALUATIONCOST]
     *
     */
    @JSONField(name = "thirtyevaluationcost")
    @JsonProperty("thirtyevaluationcost")
    private Double thirtyevaluationcost;

    /**
     * 属性 [THIRTYONEEVALUATIONCOST]
     *
     */
    @JSONField(name = "thirtyoneevaluationcost")
    @JsonProperty("thirtyoneevaluationcost")
    private Double thirtyoneevaluationcost;

    /**
     * 属性 [TWENTYSEVENEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentysevenevaluationcost")
    @JsonProperty("twentysevenevaluationcost")
    private Double twentysevenevaluationcost;

    /**
     * 属性 [TWENTYNINEEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentynineevaluationcost")
    @JsonProperty("twentynineevaluationcost")
    private Double twentynineevaluationcost;

    /**
     * 属性 [TWENTYEIGHTEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentyeightevaluationcost")
    @JsonProperty("twentyeightevaluationcost")
    private Double twentyeightevaluationcost;

    /**
     * 属性 [TWENTYSIXEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentysixevaluationcost")
    @JsonProperty("twentysixevaluationcost")
    private Double twentysixevaluationcost;

    /**
     * 属性 [TWENTYTHREEEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentythreeevaluationcost")
    @JsonProperty("twentythreeevaluationcost")
    private Double twentythreeevaluationcost;

    /**
     * 属性 [TWENTYFOUREVALUATIONCOST]
     *
     */
    @JSONField(name = "twentyfourevaluationcost")
    @JsonProperty("twentyfourevaluationcost")
    private Double twentyfourevaluationcost;

    /**
     * 属性 [TWENTYTWOEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentytwoevaluationcost")
    @JsonProperty("twentytwoevaluationcost")
    private Double twentytwoevaluationcost;

    /**
     * 属性 [TWENTYFIVEEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentyfiveevaluationcost")
    @JsonProperty("twentyfiveevaluationcost")
    private Double twentyfiveevaluationcost;

    /**
     * 属性 [NINETEENEVALUATIONCOST]
     *
     */
    @JSONField(name = "nineteenevaluationcost")
    @JsonProperty("nineteenevaluationcost")
    private Double nineteenevaluationcost;

    /**
     * 属性 [TWENTYONEEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentyoneevaluationcost")
    @JsonProperty("twentyoneevaluationcost")
    private Double twentyoneevaluationcost;

    /**
     * 属性 [TWENTYEVALUATIONCOST]
     *
     */
    @JSONField(name = "twentyevaluationcost")
    @JsonProperty("twentyevaluationcost")
    private Double twentyevaluationcost;

    /**
     * 属性 [EIGHTEENEVALUATIONCOST]
     *
     */
    @JSONField(name = "eighteenevaluationcost")
    @JsonProperty("eighteenevaluationcost")
    private Double eighteenevaluationcost;

    /**
     * 属性 [SEVENTEENEVALUATIONCOST]
     *
     */
    @JSONField(name = "seventeenevaluationcost")
    @JsonProperty("seventeenevaluationcost")
    private Double seventeenevaluationcost;

    /**
     * 属性 [FIFTEENEVALUATIONCOST]
     *
     */
    @JSONField(name = "fifteenevaluationcost")
    @JsonProperty("fifteenevaluationcost")
    private Double fifteenevaluationcost;

    /**
     * 属性 [SIXTEENEVALUATIONCOST]
     *
     */
    @JSONField(name = "sixteenevaluationcost")
    @JsonProperty("sixteenevaluationcost")
    private Double sixteenevaluationcost;

    /**
     * 属性 [FOURTEENEVALUATIONCOST]
     *
     */
    @JSONField(name = "fourteenevaluationcost")
    @JsonProperty("fourteenevaluationcost")
    private Double fourteenevaluationcost;

    /**
     * 属性 [THIRTEENEVALUATIONCOST]
     *
     */
    @JSONField(name = "thirteenevaluationcost")
    @JsonProperty("thirteenevaluationcost")
    private Double thirteenevaluationcost;

    /**
     * 属性 [TENEVALUATIONCOST]
     *
     */
    @JSONField(name = "tenevaluationcost")
    @JsonProperty("tenevaluationcost")
    private Double tenevaluationcost;

    /**
     * 属性 [TWELVEEVALUATIONCOST]
     *
     */
    @JSONField(name = "twelveevaluationcost")
    @JsonProperty("twelveevaluationcost")
    private Double twelveevaluationcost;

    /**
     * 属性 [ELEVENEVALUATIONCOST]
     *
     */
    @JSONField(name = "elevenevaluationcost")
    @JsonProperty("elevenevaluationcost")
    private Double elevenevaluationcost;

    /**
     * 属性 [NINEEVALUATIONCOST]
     *
     */
    @JSONField(name = "nineevaluationcost")
    @JsonProperty("nineevaluationcost")
    private Double nineevaluationcost;

    /**
     * 属性 [SIXEVALUATIONCOST]
     *
     */
    @JSONField(name = "sixevaluationcost")
    @JsonProperty("sixevaluationcost")
    private Double sixevaluationcost;

    /**
     * 属性 [SEVENEVALUATIONCOST]
     *
     */
    @JSONField(name = "sevenevaluationcost")
    @JsonProperty("sevenevaluationcost")
    private Double sevenevaluationcost;

    /**
     * 属性 [FIVEEVALUATIONCOST]
     *
     */
    @JSONField(name = "fiveevaluationcost")
    @JsonProperty("fiveevaluationcost")
    private Double fiveevaluationcost;

    /**
     * 属性 [EIGHTEVALUATIONCOST]
     *
     */
    @JSONField(name = "eightevaluationcost")
    @JsonProperty("eightevaluationcost")
    private Double eightevaluationcost;

    /**
     * 属性 [FOUREVALUATIONCOST]
     *
     */
    @JSONField(name = "fourevaluationcost")
    @JsonProperty("fourevaluationcost")
    private Double fourevaluationcost;

    /**
     * 属性 [THREEEVALUATIONCOST]
     *
     */
    @JSONField(name = "threeevaluationcost")
    @JsonProperty("threeevaluationcost")
    private Double threeevaluationcost;

    /**
     * 属性 [TWOEVALUATIONCOST]
     *
     */
    @JSONField(name = "twoevaluationcost")
    @JsonProperty("twoevaluationcost")
    private Double twoevaluationcost;

    /**
     * 属性 [ONEEVALUATIONCOST]
     *
     */
    @JSONField(name = "oneevaluationcost")
    @JsonProperty("oneevaluationcost")
    private Double oneevaluationcost;


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


