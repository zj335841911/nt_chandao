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
 * 实体[lang]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_lang",resultMap = "LangResultMap")
public class Lang extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * module
     */
    @TableField(value = "module")
    @JSONField(name = "module")
    @JsonProperty("module")
    private String module;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * key
     */
    @TableField(value = "key")
    @JSONField(name = "key")
    @JsonProperty("key")
    private String key;
    /**
     * section
     */
    @TableField(value = "section")
    @JSONField(name = "section")
    @JsonProperty("section")
    private String section;
    /**
     * lang
     */
    @TableField(value = "lang")
    @JSONField(name = "lang")
    @JsonProperty("lang")
    private String lang;
    /**
     * system
     */
    @TableField(value = "system")
    @JSONField(name = "system")
    @JsonProperty("system")
    private String system;
    /**
     * value
     */
    @TableField(value = "value")
    @JSONField(name = "value")
    @JsonProperty("value")
    private String value;



    /**
     * 设置 [module]
     */
    public void setModule(String module){
        this.module = module ;
        this.modify("module",module);
    }
    /**
     * 设置 [key]
     */
    public void setKey(String key){
        this.key = key ;
        this.modify("key",key);
    }
    /**
     * 设置 [section]
     */
    public void setSection(String section){
        this.section = section ;
        this.modify("section",section);
    }
    /**
     * 设置 [lang]
     */
    public void setLang(String lang){
        this.lang = lang ;
        this.modify("lang",lang);
    }
    /**
     * 设置 [system]
     */
    public void setSystem(String system){
        this.system = system ;
        this.modify("system",system);
    }
    /**
     * 设置 [value]
     */
    public void setValue(String value){
        this.value = value ;
        this.modify("value",value);
    }

}


