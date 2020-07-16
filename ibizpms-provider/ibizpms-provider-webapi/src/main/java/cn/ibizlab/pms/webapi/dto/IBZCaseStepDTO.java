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
import lombok.Data;

/**
 * 服务DTO对象[IBZCaseStepDTO]
 */
@Data
public class IBZCaseStepDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [DESC]
     *
     */
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;

    /**
     * 属性 [EXPECT]
     *
     */
    @JSONField(name = "expect")
    @JsonProperty("expect")
    private String expect;

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
     * 属性 [PARENT]
     *
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;


    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
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
     * 设置 [PARENT]
     */
    public void setParent(BigInteger  parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }


}

