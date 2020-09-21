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
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[IBZProProductDTO]
 */
@Data
public class IBZProProductDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    @NotBlank(message = "[产品名称]不允许为空!")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String name;

    /**
     * 属性 [IBIZ_ID]
     *
     */
    @JSONField(name = "ibizid")
    @JsonProperty("ibizid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String ibizid;

    /**
     * 属性 [CODE]
     *
     */
    @JSONField(name = "code")
    @JsonProperty("code")
    @Size(min = 0, max = 45, message = "内容长度必须小于等于[45]")
    private String code;


    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [IBIZ_ID]
     */
    public void setIbizid(String  ibizid){
        this.ibizid = ibizid ;
        this.modify("ibiz_id",ibizid);
    }

    /**
     * 设置 [CODE]
     */
    public void setCode(String  code){
        this.code = code ;
        this.modify("code",code);
    }


}


