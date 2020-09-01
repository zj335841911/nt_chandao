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
 * 服务DTO对象[IBZProStoryDTO]
 */
@Data
public class IBZProStoryDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [CREATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 属性 [IBZPRO_STORYNAME]
     *
     */
    @JSONField(name = "ibzprostoryname")
    @JsonProperty("ibzprostoryname")
    private String ibzprostoryname;

    /**
     * 属性 [IBZPRO_STORYID]
     *
     */
    @JSONField(name = "ibzprostoryid")
    @JsonProperty("ibzprostoryid")
    private String ibzprostoryid;

    /**
     * 属性 [CREATEMAN]
     *
     */
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;

    /**
     * 属性 [UPDATEMAN]
     *
     */
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
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
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private String product;

    /**
     * 属性 [STORYMODULE]
     *
     */
    @JSONField(name = "storymodule")
    @JsonProperty("storymodule")
    private String storymodule;


    /**
     * 设置 [IBZPRO_STORYNAME]
     */
    public void setIbzprostoryname(String  ibzprostoryname){
        this.ibzprostoryname = ibzprostoryname ;
        this.modify("ibzpro_storyname",ibzprostoryname);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(String  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [STORYMODULE]
     */
    public void setStorymodule(String  storymodule){
        this.storymodule = storymodule ;
        this.modify("storymodule",storymodule);
    }


}

