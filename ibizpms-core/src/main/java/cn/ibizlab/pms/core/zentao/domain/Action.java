package cn.ibizlab.pms.core.zentao.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.annotation.DEField;
import cn.ibizlab.pms.util.enums.DEPredefinedFieldType;
import cn.ibizlab.pms.util.enums.DEFieldDefaultValueType;
import java.io.Serializable;
import lombok.*;
import org.springframework.data.annotation.Transient;
import cn.ibizlab.pms.util.annotation.Audit;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[系统日志]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_action",resultMap = "ActionResultMap")
public class Action extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 附加值
     */
    @TableField(value = "extra")
    @JSONField(name = "extra")
    @JsonProperty("extra")
    private String extra;
    /**
     * 对象类型
     */
    @TableField(value = "objecttype")
    @JSONField(name = "objecttype")
    @JsonProperty("objecttype")
    private String objecttype;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 备注
     */
    @TableField(value = "`comment`")
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;
    /**
     * 已读
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`read`")
    @JSONField(name = "read")
    @JsonProperty("read")
    private String read;
    /**
     * 动作
     */
    @TableField(value = "action")
    @JSONField(name = "action")
    @JsonProperty("action")
    private String action;
    /**
     * 日期
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "date" , fill = FieldFill.INSERT)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * 产品
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private String product;
    /**
     * 对象ID
     */
    @DEField(defaultValue = "0")
    @TableField(value = "objectid")
    @JSONField(name = "objectid")
    @JsonProperty("objectid")
    private Integer objectid;
    /**
     * 操作者
     */
    @TableField(value = "actor")
    @JSONField(name = "actor")
    @JsonProperty("actor")
    private String actor;
    /**
     * 项目
     */
    @TableField(value = "project")
    @JSONField(name = "project")
    @JsonProperty("project")
    private BigInteger project;
    /**
     * 备注
     */
    @TableField(exist = false)
    @JSONField(name = "lastcomment")
    @JsonProperty("lastcomment")
    private String lastcomment;
    /**
     * 操作方式
     */
    @TableField(exist = false)
    @JSONField(name = "actionmanner")
    @JsonProperty("actionmanner")
    private String actionmanner;

    /**
     * 项目
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Project ztProject;



    /**
     * 设置 [附加值]
     */
    public void setExtra(String extra){
        this.extra = extra ;
        this.modify("extra",extra);
    }

    /**
     * 设置 [对象类型]
     */
    public void setObjecttype(String objecttype){
        this.objecttype = objecttype ;
        this.modify("objecttype",objecttype);
    }

    /**
     * 设置 [备注]
     */
    public void setComment(String comment){
        this.comment = comment ;
        this.modify("comment",comment);
    }

    /**
     * 设置 [已读]
     */
    public void setRead(String read){
        this.read = read ;
        this.modify("read",read);
    }

    /**
     * 设置 [动作]
     */
    public void setAction(String action){
        this.action = action ;
        this.modify("action",action);
    }

    /**
     * 设置 [产品]
     */
    public void setProduct(String product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [对象ID]
     */
    public void setObjectid(Integer objectid){
        this.objectid = objectid ;
        this.modify("objectid",objectid);
    }

    /**
     * 设置 [操作者]
     */
    public void setActor(String actor){
        this.actor = actor ;
        this.modify("actor",actor);
    }

    /**
     * 设置 [项目]
     */
    public void setProject(BigInteger project){
        this.project = project ;
        this.modify("project",project);
    }


}


