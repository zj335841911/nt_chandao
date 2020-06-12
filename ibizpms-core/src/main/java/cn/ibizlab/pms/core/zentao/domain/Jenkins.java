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
 * 实体[jenkins]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_jenkins",resultMap = "JenkinsResultMap")
public class Jenkins extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * name
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * password
     */
    @TableField(value = "password")
    @JSONField(name = "password")
    @JsonProperty("password")
    private String password;
    /**
     * 逻辑删除标志
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "0" , logicdelval="1")
    @TableLogic(value= "0",delval="1")
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * account
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * url
     */
    @TableField(value = "url")
    @JSONField(name = "url")
    @JsonProperty("url")
    private String url;
    /**
     * editedDate
     */
    @TableField(value = "editeddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "editeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("editeddate")
    private Timestamp editeddate;
    /**
     * token
     */
    @TableField(value = "token")
    @JSONField(name = "token")
    @JsonProperty("token")
    private String token;
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
     * createdDate
     */
    @TableField(value = "createddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createddate")
    private Timestamp createddate;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;



    /**
     * 设置 [name]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }
    /**
     * 设置 [password]
     */
    public void setPassword(String password){
        this.password = password ;
        this.modify("password",password);
    }
    /**
     * 设置 [account]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }
    /**
     * 设置 [url]
     */
    public void setUrl(String url){
        this.url = url ;
        this.modify("url",url);
    }
    /**
     * 设置 [editedDate]
     */
    public void setEditeddate(Timestamp editeddate){
        this.editeddate = editeddate ;
        this.modify("editeddate",editeddate);
    }
    /**
     * 设置 [token]
     */
    public void setToken(String token){
        this.token = token ;
        this.modify("token",token);
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
    /**
     * 设置 [createdDate]
     */
    public void setCreateddate(Timestamp createddate){
        this.createddate = createddate ;
        this.modify("createddate",createddate);
    }

}


