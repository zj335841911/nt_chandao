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
 * 服务DTO对象[IbzProjectMemberDTO]
 */
@Data
public class IbzProjectMemberDTO extends DTOBase implements Serializable {

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
     * 属性 [RD]
     *
     */
    @JSONField(name = "rd")
    @JsonProperty("rd")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String rd;

    /**
     * 属性 [PO]
     *
     */
    @JSONField(name = "po")
    @JsonProperty("po")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String po;

    /**
     * 属性 [PM]
     *
     */
    @JSONField(name = "pm")
    @JsonProperty("pm")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String pm;

    /**
     * 属性 [QD]
     *
     */
    @JSONField(name = "qd")
    @JsonProperty("qd")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String qd;

    /**
     * 属性 [FRISTMEMBER]
     *
     */
    @JSONField(name = "fristmember")
    @JsonProperty("fristmember")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String fristmember;

    /**
     * 属性 [SECONDMEMBER]
     *
     */
    @JSONField(name = "secondmember")
    @JsonProperty("secondmember")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String secondmember;

    /**
     * 属性 [THIRDMEMBER]
     *
     */
    @JSONField(name = "thirdmember")
    @JsonProperty("thirdmember")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String thirdmember;

    /**
     * 属性 [FOURTHMEMBER]
     *
     */
    @JSONField(name = "fourthmember")
    @JsonProperty("fourthmember")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String fourthmember;

    /**
     * 属性 [FIFTHMEMBER]
     *
     */
    @JSONField(name = "fifthmember")
    @JsonProperty("fifthmember")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String fifthmember;

    /**
     * 属性 [SIXTHMEMBER]
     *
     */
    @JSONField(name = "sixthmember")
    @JsonProperty("sixthmember")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String sixthmember;


    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }


}


