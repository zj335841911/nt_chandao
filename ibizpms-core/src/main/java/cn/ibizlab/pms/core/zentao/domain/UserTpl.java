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


import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;


/**
 * 实体[用户模板]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_usertpl",resultMap = "UserTplResultMap")
public class UserTpl extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * title
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * content
     */
    @TableField(value = "content")
    @JSONField(name = "content")
    @JsonProperty("content")
    private String content;
    /**
     * type
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * account
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * public
     */
    @DEField(name = "public")
    @TableField(value = "public")
    @JSONField(name = "ibizpublic")
    @JsonProperty("ibizpublic")
    private String ibizpublic;



    /**
     * 设置 [title]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }
    /**
     * 设置 [content]
     */
    public void setContent(String content){
        this.content = content ;
        this.modify("content",content);
    }
    /**
     * 设置 [type]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }
    /**
     * 设置 [account]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }
    /**
     * 设置 [public]
     */
    public void setIbizpublic(String ibizpublic){
        this.ibizpublic = ibizpublic ;
        this.modify("public",ibizpublic);
    }

}


