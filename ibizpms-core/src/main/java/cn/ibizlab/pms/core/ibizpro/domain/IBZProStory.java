package cn.ibizlab.pms.core.ibizpro.domain;

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
 * 实体[需求]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_story",resultMap = "IBZProStoryResultMap")
public class IBZProStory extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 需求名称
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * id
     */
    @TableField(value = "module")
    @JSONField(name = "module")
    @JsonProperty("module")
    private BigInteger module;
    /**
     * 编号
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;
    /**
     * IBIZ标识
     */
    @DEField(name = "ibiz_id")
    @TableField(value = "ibiz_id")
    @JSONField(name = "ibizid")
    @JsonProperty("ibizid")
    private String ibizid;
    /**
     * 需求来源
     */
    @DEField(defaultValue = "iBiz")
    @TableField(value = "source")
    @JSONField(name = "source")
    @JsonProperty("source")
    private String source;
    /**
     * 来源备注
     */
    @TableField(value = "sourcenote")
    @JSONField(name = "sourcenote")
    @JsonProperty("sourcenote")
    private String sourcenote;
    /**
     * 来源对象
     */
    @DEField(name = "ibiz_sourceobject")
    @TableField(value = "ibiz_sourceobject")
    @JSONField(name = "ibiz_sourceobject")
    @JsonProperty("ibiz_sourceobject")
    private String ibizSourceobject;
    /**
     * 来源对象名称
     */
    @DEField(name = "ibiz_sourcename")
    @TableField(value = "ibiz_sourcename")
    @JSONField(name = "ibiz_sourcename")
    @JsonProperty("ibiz_sourcename")
    private String ibizSourcename;
    /**
     * 来源对象标识
     */
    @DEField(name = "ibiz_sourceid")
    @TableField(value = "ibiz_sourceid")
    @JSONField(name = "ibiz_sourceid")
    @JsonProperty("ibiz_sourceid")
    private String ibizSourceid;

    /**
     * 产品
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct ibzproproduct;

    /**
     * 需求模块
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule ibzprostorymodule;



    /**
     * 设置 [需求名称]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [id]
     */
    public void setModule(BigInteger module){
        this.module = module ;
        this.modify("module",module);
    }

    /**
     * 设置 [编号]
     */
    public void setProduct(BigInteger product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [IBIZ标识]
     */
    public void setIbizid(String ibizid){
        this.ibizid = ibizid ;
        this.modify("ibiz_id",ibizid);
    }

    /**
     * 设置 [需求来源]
     */
    public void setSource(String source){
        this.source = source ;
        this.modify("source",source);
    }

    /**
     * 设置 [来源备注]
     */
    public void setSourcenote(String sourcenote){
        this.sourcenote = sourcenote ;
        this.modify("sourcenote",sourcenote);
    }

    /**
     * 设置 [来源对象]
     */
    public void setIbizSourceobject(String ibizSourceobject){
        this.ibizSourceobject = ibizSourceobject ;
        this.modify("ibiz_sourceobject",ibizSourceobject);
    }

    /**
     * 设置 [来源对象名称]
     */
    public void setIbizSourcename(String ibizSourcename){
        this.ibizSourcename = ibizSourcename ;
        this.modify("ibiz_sourcename",ibizSourcename);
    }

    /**
     * 设置 [来源对象标识]
     */
    public void setIbizSourceid(String ibizSourceid){
        this.ibizSourceid = ibizSourceid ;
        this.modify("ibiz_sourceid",ibizSourceid);
    }


}


