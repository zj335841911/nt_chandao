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
 * 服务DTO对象[ProductStatsDTO]
 */
@Data
public class ProductStatsDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [STORYCNT]
     *
     */
    @JSONField(name = "storycnt")
    @JsonProperty("storycnt")
    private Integer storycnt;

    /**
     * 属性 [PRODUCTPLANCNT]
     *
     */
    @JSONField(name = "productplancnt")
    @JsonProperty("productplancnt")
    private Integer productplancnt;

    /**
     * 属性 [RELEASECNT]
     *
     */
    @JSONField(name = "releasecnt")
    @JsonProperty("releasecnt")
    private Integer releasecnt;

    /**
     * 属性 [WAITSTORYCNT]
     *
     */
    @JSONField(name = "waitstorycnt")
    @JsonProperty("waitstorycnt")
    private Integer waitstorycnt;

    /**
     * 属性 [PLANNEDSTORYCNT]
     *
     */
    @JSONField(name = "plannedstorycnt")
    @JsonProperty("plannedstorycnt")
    private Integer plannedstorycnt;

    /**
     * 属性 [DEVELOPINGSTORYCNT]
     *
     */
    @JSONField(name = "developingstorycnt")
    @JsonProperty("developingstorycnt")
    private Integer developingstorycnt;

    /**
     * 属性 [TESTINGSTORYCNT]
     *
     */
    @JSONField(name = "testingstorycnt")
    @JsonProperty("testingstorycnt")
    private Integer testingstorycnt;

    /**
     * 属性 [RELEASEDSTORYCNT]
     *
     */
    @JSONField(name = "releasedstorycnt")
    @JsonProperty("releasedstorycnt")
    private Integer releasedstorycnt;

    /**
     * 属性 [UNENDPRODUCTPLANCNT]
     *
     */
    @JSONField(name = "unendproductplancnt")
    @JsonProperty("unendproductplancnt")
    private Integer unendproductplancnt;

    /**
     * 属性 [UNENDPRODUCTPLANRATE]
     *
     */
    @JSONField(name = "unendproductplanrate")
    @JsonProperty("unendproductplanrate")
    private Double unendproductplanrate;

    /**
     * 属性 [RESPROJECTCNT]
     *
     */
    @JSONField(name = "resprojectcnt")
    @JsonProperty("resprojectcnt")
    private Integer resprojectcnt;



}

