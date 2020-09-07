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
 * 实体[用户查询]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_userquery",resultMap = "UserQueryResultMap")
public class UserQuery extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * shortcut
     */
    @TableField(value = "shortcut")
    @JSONField(name = "shortcut")
    @JsonProperty("shortcut")
    private String shortcut;
    /**
     * sql
     */
    @TableField(value = "sql")
    @JSONField(name = "sql")
    @JsonProperty("sql")
    private String sql;
    /**
     * title
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * module
     */
    @TableField(value = "module")
    @JSONField(name = "module")
    @JsonProperty("module")
    private String module;
    /**
     * form
     */
    @TableField(value = "form")
    @JSONField(name = "form")
    @JsonProperty("form")
    private String form;
    /**
     * account
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;



    /**
     * 设置 [shortcut]
     */
    public void setShortcut(String shortcut){
        this.shortcut = shortcut ;
        this.modify("shortcut",shortcut);
    }

    /**
     * 设置 [sql]
     */
    public void setSql(String sql){
        this.sql = sql ;
        this.modify("sql",sql);
    }

    /**
     * 设置 [title]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [module]
     */
    public void setModule(String module){
        this.module = module ;
        this.modify("module",module);
    }

    /**
     * 设置 [form]
     */
    public void setForm(String form){
        this.form = form ;
        this.modify("form",form);
    }

    /**
     * 设置 [account]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }


}


