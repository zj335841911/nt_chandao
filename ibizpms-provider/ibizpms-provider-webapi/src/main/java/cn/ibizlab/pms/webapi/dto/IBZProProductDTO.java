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
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[IBZProProductDTO]
 */
@Data
public class IBZProProductDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [IBZPRO_PRODUCTID]
     *
     */
    @JSONField(name = "ibzpro_productid")
    @JsonProperty("ibzpro_productid")
    private String ibzproProductid;

    /**
     * 属性 [CREATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 属性 [CREATEMAN]
     *
     */
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;

    /**
     * 属性 [IBZPRO_PRODUCTNAME]
     *
     */
    @JSONField(name = "ibzpro_productname")
    @JsonProperty("ibzpro_productname")
    private String ibzproProductname;

    /**
     * 属性 [UPDATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;

    /**
     * 属性 [UPDATEMAN]
     *
     */
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;

    /**
     * 属性 [PSSYSTYPE]
     *
     */
    @JSONField(name = "pssystype")
    @JsonProperty("pssystype")
    private String pssystype;

    /**
     * 属性 [PSOBJECTID]
     *
     */
    @JSONField(name = "psobjectid")
    @JsonProperty("psobjectid")
    private String psobjectid;

    /**
     * 属性 [PMSPRODUCT]
     *
     */
    @JSONField(name = "pmsproduct")
    @JsonProperty("pmsproduct")
    private BigInteger pmsproduct;


    /**
     * 设置 [IBZPRO_PRODUCTNAME]
     */
    public void setIbzproProductname(String  ibzproProductname){
        this.ibzproProductname = ibzproProductname ;
        this.modify("ibzpro_productname",ibzproProductname);
    }

    /**
     * 设置 [PSSYSTYPE]
     */
    public void setPssystype(String  pssystype){
        this.pssystype = pssystype ;
        this.modify("pssystype",pssystype);
    }

    /**
     * 设置 [PSOBJECTID]
     */
    public void setPsobjectid(String  psobjectid){
        this.psobjectid = psobjectid ;
        this.modify("psobjectid",psobjectid);
    }

    /**
     * 设置 [PMSPRODUCT]
     */
    public void setPmsproduct(BigInteger  pmsproduct){
        this.pmsproduct = pmsproduct ;
        this.modify("pmsproduct",pmsproduct);
    }


}

