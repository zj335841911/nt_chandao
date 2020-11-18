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
 * 服务DTO对象[ProductSumDTO]
 */
@Data
public class ProductSumDTO extends DTOBase implements Serializable {

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
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String name;

    /**
     * 属性 [PO]
     *
     */
    @JSONField(name = "po")
    @JsonProperty("po")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String po;

    /**
     * 属性 [PLAN]
     *
     */
    @JSONField(name = "plan")
    @JsonProperty("plan")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long plan;

    /**
     * 属性 [BEGIN]
     *
     */
    @JSONField(name = "begin")
    @JsonProperty("begin")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String begin;

    /**
     * 属性 [END]
     *
     */
    @JSONField(name = "end")
    @JsonProperty("end")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String end;

    /**
     * 属性 [WAITSTORYCNT]
     *
     */
    @JSONField(name = "waitstorycnt")
    @JsonProperty("waitstorycnt")
    private Integer waitstorycnt;

    /**
     * 属性 [ACTIVESTORYCNT]
     *
     */
    @JSONField(name = "activestorycnt")
    @JsonProperty("activestorycnt")
    private Integer activestorycnt;

    /**
     * 属性 [CHANGEDSTORYCNT]
     *
     */
    @JSONField(name = "changedstorycnt")
    @JsonProperty("changedstorycnt")
    private Integer changedstorycnt;

    /**
     * 属性 [CLOSEDSTORYCNT]
     *
     */
    @JSONField(name = "closedstorycnt")
    @JsonProperty("closedstorycnt")
    private Integer closedstorycnt;

    /**
     * 属性 [STORYCNT]
     *
     */
    @JSONField(name = "storycnt")
    @JsonProperty("storycnt")
    private Integer storycnt;

    /**
     * 属性 [BUGCNT]
     *
     */
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;

    /**
     * 属性 [WAITSTAGESTORYCNT]
     *
     */
    @JSONField(name = "waitstagestorycnt")
    @JsonProperty("waitstagestorycnt")
    private Integer waitstagestorycnt;

    /**
     * 属性 [PLANEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "planedstagestorycnt")
    @JsonProperty("planedstagestorycnt")
    private Integer planedstagestorycnt;

    /**
     * 属性 [PROJECTEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "projectedstagestorycnt")
    @JsonProperty("projectedstagestorycnt")
    private Integer projectedstagestorycnt;

    /**
     * 属性 [DEVELOPINGSTAGESTORYCNT]
     *
     */
    @JSONField(name = "developingstagestorycnt")
    @JsonProperty("developingstagestorycnt")
    private Integer developingstagestorycnt;

    /**
     * 属性 [DEVELOPEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "developedstagestorycnt")
    @JsonProperty("developedstagestorycnt")
    private Integer developedstagestorycnt;

    /**
     * 属性 [TESTINGSTAGESTORYCNT]
     *
     */
    @JSONField(name = "testingstagestorycnt")
    @JsonProperty("testingstagestorycnt")
    private Integer testingstagestorycnt;

    /**
     * 属性 [TESTEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "testedstagestorycnt")
    @JsonProperty("testedstagestorycnt")
    private Integer testedstagestorycnt;

    /**
     * 属性 [VERIFIEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "verifiedstagestorycnt")
    @JsonProperty("verifiedstagestorycnt")
    private Integer verifiedstagestorycnt;

    /**
     * 属性 [RELEASEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "releasedstagestorycnt")
    @JsonProperty("releasedstagestorycnt")
    private Integer releasedstagestorycnt;

    /**
     * 属性 [CLOSEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "closedstagestorycnt")
    @JsonProperty("closedstagestorycnt")
    private Integer closedstagestorycnt;


    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [PO]
     */
    public void setPo(String  po){
        this.po = po ;
        this.modify("po",po);
    }


}


