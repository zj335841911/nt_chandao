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
 * 服务DTO对象[IbzPlanTempletDetailDTO]
 */
@Data
public class IbzPlanTempletDetailDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [IBZ_PLANTEMPLETDETAILID]
     *
     */
    @JSONField(name = "ibzplantempletdetailid")
    @JsonProperty("ibzplantempletdetailid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String ibzplantempletdetailid;

    /**
     * 属性 [IBZ_PLANTEMPLETDETAILNAME]
     *
     */
    @JSONField(name = "ibzplantempletdetailname")
    @JsonProperty("ibzplantempletdetailname")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String ibzplantempletdetailname;

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
     * 属性 [PLANTEMPLETID]
     *
     */
    @JSONField(name = "plantempletid")
    @JsonProperty("plantempletid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String plantempletid;

    /**
     * 属性 [PLANCODE]
     *
     */
    @JSONField(name = "plancode")
    @JsonProperty("plancode")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String plancode;

    /**
     * 属性 [ORDER]
     *
     */
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;

    /**
     * 属性 [DESC]
     *
     */
    @JSONField(name = "desc")
    @JsonProperty("desc")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String desc;

    /**
     * 属性 [EXPECT]
     *
     */
    @JSONField(name = "expect")
    @JsonProperty("expect")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String expect;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String type;


    /**
     * 设置 [IBZ_PLANTEMPLETDETAILNAME]
     */
    public void setIbzplantempletdetailname(String  ibzplantempletdetailname){
        this.ibzplantempletdetailname = ibzplantempletdetailname ;
        this.modify("ibz_plantempletdetailname",ibzplantempletdetailname);
    }

    /**
     * 设置 [PLANTEMPLETID]
     */
    public void setPlantempletid(String  plantempletid){
        this.plantempletid = plantempletid ;
        this.modify("plantempletid",plantempletid);
    }

    /**
     * 设置 [PLANCODE]
     */
    public void setPlancode(String  plancode){
        this.plancode = plancode ;
        this.modify("plancode",plancode);
    }

    /**
     * 设置 [ORDER]
     */
    public void setOrder(Integer  order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [DESC]
     */
    public void setDesc(String  desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [EXPECT]
     */
    public void setExpect(String  expect){
        this.expect = expect ;
        this.modify("expect",expect);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }


}


