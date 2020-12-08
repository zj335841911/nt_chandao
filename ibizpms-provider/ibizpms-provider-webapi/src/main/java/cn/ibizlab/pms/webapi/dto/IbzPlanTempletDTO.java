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
 * 服务DTO对象[IbzPlanTempletDTO]
 */
@Data
public class IbzPlanTempletDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [IBZ_PLANTEMPLETID]
     *
     */
    @JSONField(name = "ibzplantempletid")
    @JsonProperty("ibzplantempletid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String ibzplantempletid;

    /**
     * 属性 [IBZ_PLANTEMPLETNAME]
     *
     */
    @JSONField(name = "ibzplantempletname")
    @JsonProperty("ibzplantempletname")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String ibzplantempletname;

    /**
     * 属性 [CREATEMAN]
     *
     */
    @JSONField(name = "createman")
    @JsonProperty("createman")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String createman;

    /**
     * 属性 [CREATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 属性 [UPDATEMAN]
     *
     */
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String updateman;

    /**
     * 属性 [UPDATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;

    /**
     * 属性 [PLANS]
     *
     */
    @JSONField(name = "plans")
    @JsonProperty("plans")
    @Size(min = 0, max = 2000, message = "内容长度必须小于等于[2000]")
    private String plans;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long product;


    /**
     * 设置 [IBZ_PLANTEMPLETNAME]
     */
    public void setIbzplantempletname(String  ibzplantempletname){
        this.ibzplantempletname = ibzplantempletname ;
        this.modify("ibz_plantempletname",ibzplantempletname);
    }

    /**
     * 设置 [PLANS]
     */
    public void setPlans(String  plans){
        this.plans = plans ;
        this.modify("plans",plans);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }


    /**
     *  [PlanTempletDetail]
     */
    @JsonProperty("plantempletdetails")
    @JSONField(name = "plantempletdetails")
	private List<PlanTempletDetailDTO> ibzplantempletdetail ;

}


