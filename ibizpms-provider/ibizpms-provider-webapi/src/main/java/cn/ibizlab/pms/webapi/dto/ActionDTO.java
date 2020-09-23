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
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String extra;

    /**
     * 属性 [OBJECTTYPE]
     *
     */
    @JSONField(name = "objecttype")
    @JsonProperty("objecttype")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String objecttype;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String comment;

    /**
     * 属性 [READ]
     *
     */
    @JSONField(name = "read")
    @JsonProperty("read")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String read;

    /**
     * 属性 [ACTION]
     *
     */
    @JSONField(name = "action")
    @JsonProperty("action")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
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
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String product;

    /**
     * 属性 [OBJECTID]
     *
     */
    @JSONField(name = "objectid")
    @JsonProperty("objectid")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long objectid;

    /**
     * 属性 [ACTOR]
     *
     */
    @JSONField(name = "actor")
    @JsonProperty("actor")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String actor;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long project;

    /**
     * 属性 [LASTCOMMENT]
     *
     */
    @JSONField(name = "lastcomment")
    @JsonProperty("lastcomment")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String lastcomment;

    /**
     * 属性 [ACTIONMANNER]
     *
     */
    @JSONField(name = "actionmanner")
    @JsonProperty("actionmanner")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String actionmanner;

    /**
     * 属性 [ISACTORSS]
     *
     */
    @JSONField(name = "isactorss")
    @JsonProperty("isactorss")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long isactorss;

    /**
     * 属性 [DATE1]
     *
     */
    @JSONField(name = "date1")
    @JsonProperty("date1")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String date1;


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
    public void setObjectid(Long  objectid){
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
    public void setProject(Long  project){
        this.project = project ;
        this.modify("project",project);
    }


}


