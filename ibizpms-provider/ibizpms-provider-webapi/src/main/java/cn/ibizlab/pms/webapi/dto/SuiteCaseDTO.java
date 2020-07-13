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
 * 服务DTO对象[SuiteCaseDTO]
 */
@Data
public class SuiteCaseDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private String id;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 属性 [SUITE]
     *
     */
    @JSONField(name = "suite")
    @JsonProperty("suite")
    private BigInteger suite;

    /**
     * 属性 [CASE]
     *
     */
    @JSONField(name = "ibizcase")
    @JsonProperty("ibizcase")
    private BigInteger ibizcase;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;


    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [SUITE]
     */
    public void setSuite(BigInteger  suite){
        this.suite = suite ;
        this.modify("suite",suite);
    }

    /**
     * 设置 [CASE]
     */
    public void setIbizcase(BigInteger  ibizcase){
        this.ibizcase = ibizcase ;
        this.modify("case",ibizcase);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(BigInteger  product){
        this.product = product ;
        this.modify("product",product);
    }


}

