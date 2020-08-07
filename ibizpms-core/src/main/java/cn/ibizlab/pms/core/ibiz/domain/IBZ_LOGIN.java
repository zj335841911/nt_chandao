package cn.ibizlab.pms.core.ibiz.domain;

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
 * 实体[实体]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_user",resultMap = "IBZ_LOGINResultMap")
public class IBZ_LOGIN extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 真实姓名
     */
    @TableField(value = "realname")
    @JSONField(name = "realname")
    @JsonProperty("realname")
    private String realname;
    /**
     * ID
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 账户
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * 源代码账户
     */
    @TableField(value = "commiter")
    @JSONField(name = "commiter")
    @JsonProperty("commiter")
    private String commiter;



    /**
     * 设置 [真实姓名]
     */
    public void setRealname(String realname){
        this.realname = realname ;
        this.modify("realname",realname);
    }

    /**
     * 设置 [账户]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [源代码账户]
     */
    public void setCommiter(String commiter){
        this.commiter = commiter ;
        this.modify("commiter",commiter);
    }


}


