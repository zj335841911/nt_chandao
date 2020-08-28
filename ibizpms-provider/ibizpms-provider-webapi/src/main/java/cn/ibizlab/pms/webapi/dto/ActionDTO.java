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
 * 服务DTO对象[ActionDTO]
 */
@Data
public class ActionDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [EXTRA]
     *
     */
    @JSONField(name = "extra")
    @JsonProperty("extra")
    private String extra;

    /**
     * 属性 [OBJECTTYPE]
     *
     */
    @JSONField(name = "objecttype")
    @JsonProperty("objecttype")
    private String objecttype;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;

    /**
     * 属性 [READ]
     *
     */
    @JSONField(name = "read")
    @JsonProperty("read")
    private String read;

    /**
     * 属性 [ACTION]
     *
     */
    @JSONField(name = "action")
    @JsonProperty("action")
    private String action;

    /**
     * 属性 [DATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("date")
    private Timestamp date;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private String product;

    /**
     * 属性 [OBJECTID]
     *
     */
    @JSONField(name = "objectid")
    @JsonProperty("objectid")
    private Integer objectid;

    /**
     * 属性 [ACTOR]
     *
     */
    @JSONField(name = "actor")
    @JsonProperty("actor")
    private String actor;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    private BigInteger project;

    /**
     * 属性 [LASTCOMMENT]
     *
     */
    @JSONField(name = "lastcomment")
    @JsonProperty("lastcomment")
    private String lastcomment;

    /**
     * 属性 [ACTIONMANNER]
     *
     */
    @JSONField(name = "actionmanner")
    @JsonProperty("actionmanner")
    private String actionmanner;


    /**
     * 设置 [EXTRA]
     */
    public void setExtra(String  extra){
        this.extra = extra ;
        this.modify("extra",extra);
    }

    /**
     * 设置 [OBJECTTYPE]
     */
    public void setObjecttype(String  objecttype){
        this.objecttype = objecttype ;
        this.modify("objecttype",objecttype);
    }

    /**
     * 设置 [COMMENT]
     */
    public void setComment(String  comment){
        this.comment = comment ;
        this.modify("comment",comment);
    }

    /**
     * 设置 [READ]
     */
    public void setRead(String  read){
        this.read = read ;
        this.modify("read",read);
    }

    /**
     * 设置 [ACTION]
     */
    public void setAction(String  action){
        this.action = action ;
        this.modify("action",action);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(String  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [OBJECTID]
     */
    public void setObjectid(Integer  objectid){
        this.objectid = objectid ;
        this.modify("objectid",objectid);
    }

    /**
     * 设置 [ACTOR]
     */
    public void setActor(String  actor){
        this.actor = actor ;
        this.modify("actor",actor);
    }

    /**
     * 设置 [PROJECT]
     */
    public void setProject(BigInteger  project){
        this.project = project ;
        this.modify("project",project);
    }


}

