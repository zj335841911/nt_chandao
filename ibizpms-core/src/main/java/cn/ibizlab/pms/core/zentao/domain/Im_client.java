package cn.ibizlab.pms.core.zentao.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[im_client]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_im_client",resultMap = "Im_clientResultMap")
public class Im_client extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * editedDate
     */
    @TableField(value = "editeddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "editeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("editeddate")
    private Timestamp editeddate;
    /**
     * strategy
     */
    @TableField(value = "strategy")
    @JSONField(name = "strategy")
    @JsonProperty("strategy")
    private String strategy;
    /**
     * createdDate
     */
    @TableField(value = "createddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createddate")
    private Timestamp createddate;
    /**
     * changeLog
     */
    @TableField(value = "changelog")
    @JSONField(name = "changelog")
    @JsonProperty("changelog")
    private String changelog;
    /**
     * version
     */
    @TableField(value = "version")
    @JSONField(name = "version")
    @JsonProperty("version")
    private String version;
    /**
     * downloads
     */
    @TableField(value = "downloads")
    @JSONField(name = "downloads")
    @JsonProperty("downloads")
    private String downloads;
    /**
     * status
     */
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * desc
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * createdBy
     */
    @TableField(value = "createdby")
    @JSONField(name = "createdby")
    @JsonProperty("createdby")
    private String createdby;
    /**
     * editedBy
     */
    @TableField(value = "editedby")
    @JSONField(name = "editedby")
    @JsonProperty("editedby")
    private String editedby;



    /**
     * 设置 [editedDate]
     */
    public void setEditeddate(Timestamp editeddate){
        this.editeddate = editeddate ;
        this.modify("editeddate",editeddate);
    }
    /**
     * 设置 [strategy]
     */
    public void setStrategy(String strategy){
        this.strategy = strategy ;
        this.modify("strategy",strategy);
    }
    /**
     * 设置 [createdDate]
     */
    public void setCreateddate(Timestamp createddate){
        this.createddate = createddate ;
        this.modify("createddate",createddate);
    }
    /**
     * 设置 [changeLog]
     */
    public void setChangelog(String changelog){
        this.changelog = changelog ;
        this.modify("changelog",changelog);
    }
    /**
     * 设置 [version]
     */
    public void setVersion(String version){
        this.version = version ;
        this.modify("version",version);
    }
    /**
     * 设置 [downloads]
     */
    public void setDownloads(String downloads){
        this.downloads = downloads ;
        this.modify("downloads",downloads);
    }
    /**
     * 设置 [status]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }
    /**
     * 设置 [desc]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }
    /**
     * 设置 [createdBy]
     */
    public void setCreatedby(String createdby){
        this.createdby = createdby ;
        this.modify("createdby",createdby);
    }
    /**
     * 设置 [editedBy]
     */
    public void setEditedby(String editedby){
        this.editedby = editedby ;
        this.modify("editedby",editedby);
    }

}


