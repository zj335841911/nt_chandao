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
    private Long id;

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
     * 属性 [RESPROJECTCNT]
     *
     */
    @JSONField(name = "resprojectcnt")
    @JsonProperty("resprojectcnt")
    private Integer resprojectcnt;

    /**
     * 属性 [UNDONERESPROJECTCNT]
     *
     */
    @JSONField(name = "undoneresprojectcnt")
    @JsonProperty("undoneresprojectcnt")
    private Integer undoneresprojectcnt;

    /**
     * 属性 [NORMALRELEASECNT]
     *
     */
    @JSONField(name = "normalreleasecnt")
    @JsonProperty("normalreleasecnt")
    private Integer normalreleasecnt;

    /**
     * 属性 [ACTIVESTORYCNT]
     *
     */
    @JSONField(name = "activestorycnt")
    @JsonProperty("activestorycnt")
    private Integer activestorycnt;

    /**
     * 属性 [ACTIVEBUGCNT]
     *
     */
    @JSONField(name = "activebugcnt")
    @JsonProperty("activebugcnt")
    private Integer activebugcnt;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;

    /**
     * 属性 [ASSIGNTOMEBUGCNT]
     *
     */
    @JSONField(name = "assigntomebugcnt")
    @JsonProperty("assigntomebugcnt")
    private Integer assigntomebugcnt;

    /**
     * 属性 [NOTCLOSEDBUGCNT]
     *
     */
    @JSONField(name = "notclosedbugcnt")
    @JsonProperty("notclosedbugcnt")
    private Integer notclosedbugcnt;

    /**
     * 属性 [BUGCNT]
     *
     */
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;

    /**
     * 属性 [UNCONFIRMBUGCNT]
     *
     */
    @JSONField(name = "unconfirmbugcnt")
    @JsonProperty("unconfirmbugcnt")
    private Integer unconfirmbugcnt;

    /**
     * 属性 [YESTERDAYCLOSEDBUGCNT]
     *
     */
    @JSONField(name = "yesterdayclosedbugcnt")
    @JsonProperty("yesterdayclosedbugcnt")
    private Integer yesterdayclosedbugcnt;

    /**
     * 属性 [YESTERDAYCONFIRMBUGCNT]
     *
     */
    @JSONField(name = "yesterdayconfirmbugcnt")
    @JsonProperty("yesterdayconfirmbugcnt")
    private Integer yesterdayconfirmbugcnt;

    /**
     * 属性 [YESTERDAYRESOLVEDBUGCNT]
     *
     */
    @JSONField(name = "yesterdayresolvedbugcnt")
    @JsonProperty("yesterdayresolvedbugcnt")
    private Integer yesterdayresolvedbugcnt;

    /**
     * 属性 [POSTPONEDPROJECTCNT]
     *
     */
    @JSONField(name = "postponedprojectcnt")
    @JsonProperty("postponedprojectcnt")
    private Integer postponedprojectcnt;

    /**
     * 属性 [CURRPROJECT]
     *
     */
    @JSONField(name = "currproject")
    @JsonProperty("currproject")
    private String currproject;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;

    /**
     * 属性 [CODE]
     *
     */
    @JSONField(name = "code")
    @JsonProperty("code")
    private String code;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [ORDER1]
     *
     */
    @JSONField(name = "order1")
    @JsonProperty("order1")
    private Integer order1;

    /**
     * 属性 [ISTOP]
     *
     */
    @JSONField(name = "istop")
    @JsonProperty("istop")
    private Integer istop;


    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [CODE]
     */
    public void setCode(String  code){
        this.code = code ;
        this.modify("code",code);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }


}

