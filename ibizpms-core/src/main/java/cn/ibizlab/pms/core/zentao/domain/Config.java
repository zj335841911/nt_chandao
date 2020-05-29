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
 * 实体[配置]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_config",resultMap = "ConfigResultMap")
public class Config extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 模块
     */
    @TableField(value = "module")
    @JSONField(name = "module")
    @JsonProperty("module")
    private String module;
    /**
     * 附加部分
     */
    @TableField(value = "section")
    @JSONField(name = "section")
    @JsonProperty("section")
    private String section;
    /**
     * 值
     */
    @TableField(value = "value")
    @JSONField(name = "value")
    @JsonProperty("value")
    private String value;
    /**
     * 键
     */
    @TableField(value = "key")
    @JSONField(name = "key")
    @JsonProperty("key")
    private String key;
    /**
     * 所有者
     */
    @TableField(value = "owner")
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;



    /**
     * 设置 [模块]
     */
    public void setModule(String module){
        this.module = module ;
        this.modify("module",module);
    }
    /**
     * 设置 [附加部分]
     */
    public void setSection(String section){
        this.section = section ;
        this.modify("section",section);
    }
    /**
     * 设置 [值]
     */
    public void setValue(String value){
        this.value = value ;
        this.modify("value",value);
    }
    /**
     * 设置 [键]
     */
    public void setKey(String key){
        this.key = key ;
        this.modify("key",key);
    }
    /**
     * 设置 [所有者]
     */
    public void setOwner(String owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }

}


