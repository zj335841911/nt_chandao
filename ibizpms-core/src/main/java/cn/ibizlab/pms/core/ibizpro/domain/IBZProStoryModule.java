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
 * 实体[需求模块]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_IBZPRO_STORYMODULE",resultMap = "IBZProStoryModuleResultMap")
public class IBZProStoryModule extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 需求模块名称
     */
    @DEField(name = "ibzpro_storymodulename")
    @TableField(value = "ibzpro_storymodulename")
    @JSONField(name = "ibzprostorymodulename")
    @JsonProperty("ibzprostorymodulename")
    private String ibzprostorymodulename;
    /**
     * 需求模块标识
     */
    @DEField(name = "ibzpro_storymoduleid" , isKeyField=true)
    @TableId(value= "ibzpro_storymoduleid",type=IdType.ASSIGN_UUID)
    @JSONField(name = "ibzprostorymoduleid")
    @JsonProperty("ibzprostorymoduleid")
    private String ibzprostorymoduleid;
    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @TableField(value = "updateman")
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;
    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @TableField(value = "updatedate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;
    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @TableField(value = "createman" , fill = FieldFill.INSERT)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;
    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "createdate" , fill = FieldFill.INSERT)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;
    /**
     * 产品（开发系统）标识
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private String product;
    /**
     * id
     */
    @TableField(value = "pmsstorymodule")
    @JSONField(name = "pmsstorymodule")
    @JsonProperty("pmsstorymodule")
    private BigInteger pmsstorymodule;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct ibzproProduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Module ztModule;



    /**
     * 设置 [需求模块名称]
     */
    public void setIbzprostorymodulename(String ibzprostorymodulename){
        this.ibzprostorymodulename = ibzprostorymodulename ;
        this.modify("ibzpro_storymodulename",ibzprostorymodulename);
    }

    /**
     * 设置 [产品（开发系统）标识]
     */
    public void setProduct(String product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [id]
     */
    public void setPmsstorymodule(BigInteger pmsstorymodule){
        this.pmsstorymodule = pmsstorymodule ;
        this.modify("pmsstorymodule",pmsstorymodule);
    }


}


