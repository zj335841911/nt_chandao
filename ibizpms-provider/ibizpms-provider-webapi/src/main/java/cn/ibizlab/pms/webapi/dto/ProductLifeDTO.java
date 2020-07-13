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
 * 服务DTO对象[ProductLifeDTO]
 */
@Data
public class ProductLifeDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [BRANCH]
     *
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private String branch;

    /**
     * 属性 [CREATEMAN]
     *
     */
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;

    /**
     * 属性 [UPDATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;

    /**
     * 属性 [IBZ_PRODUCTLIFENAME]
     *
     */
    @JSONField(name = "productlifename")
    @JsonProperty("productlifename")
    private String productlifename;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private Integer product;

    /**
     * 属性 [CREATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 属性 [PARENT]
     *
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private String parent;

    /**
     * 属性 [YEAR]
     *
     */
    @JSONField(name = "year")
    @JsonProperty("year")
    private String year;

    /**
     * 属性 [UPDATEMAN]
     *
     */
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [MARKER]
     *
     */
    @JSONField(name = "marker")
    @JsonProperty("marker")
    private Integer marker;

    /**
     * 属性 [BEGIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;

    /**
     * 属性 [IBZ_PRODUCTLIFEID]
     *
     */
    @JSONField(name = "productlifeid")
    @JsonProperty("productlifeid")
    private String productlifeid;

    /**
     * 属性 [END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;


    /**
     * 设置 [BRANCH]
     */
    public void setBranch(String  branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [IBZ_PRODUCTLIFENAME]
     */
    public void setProductlifename(String  productlifename){
        this.productlifename = productlifename ;
        this.modify("ibz_productlifename",productlifename);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Integer  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [PARENT]
     */
    public void setParent(String  parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [YEAR]
     */
    public void setYear(String  year){
        this.year = year ;
        this.modify("year",year);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [MARKER]
     */
    public void setMarker(Integer  marker){
        this.marker = marker ;
        this.modify("marker",marker);
    }

    /**
     * 设置 [BEGIN]
     */
    public void setBegin(Timestamp  begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }

    /**
     * 设置 [END]
     */
    public void setEnd(Timestamp  end){
        this.end = end ;
        this.modify("end",end);
    }


}

