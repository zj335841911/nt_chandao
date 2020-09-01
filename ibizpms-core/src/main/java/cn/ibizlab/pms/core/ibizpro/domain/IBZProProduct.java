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
 * 实体[产品（开发系统）]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_IBZPRO_PRODUCT",resultMap = "IBZProProductResultMap")
public class IBZProProduct extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 产品（开发系统）标识
     */
    @DEField(name = "ibzpro_productid" , isKeyField=true)
    @TableId(value= "ibzpro_productid",type=IdType.ASSIGN_UUID)
    @JSONField(name = "ibzpro_productid")
    @JsonProperty("ibzpro_productid")
    private String ibzproProductid;
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
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @TableField(value = "createman" , fill = FieldFill.INSERT)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;
    /**
     * 产品（开发系统）名称
     */
    @DEField(name = "ibzpro_productname")
    @TableField(value = "ibzpro_productname")
    @JSONField(name = "ibzpro_productname")
    @JsonProperty("ibzpro_productname")
    private String ibzproProductname;
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
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @TableField(value = "updateman")
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;
    /**
     * 生产体系类型
     */
    @TableField(value = "pssystype")
    @JSONField(name = "pssystype")
    @JsonProperty("pssystype")
    private String pssystype;
    /**
     * 生产对象标识
     */
    @TableField(value = "psobjectid")
    @JSONField(name = "psobjectid")
    @JsonProperty("psobjectid")
    private String psobjectid;
    /**
     * 编号
     */
    @TableField(value = "pmsproduct")
    @JSONField(name = "pmsproduct")
    @JsonProperty("pmsproduct")
    private BigInteger pmsproduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztProduct;



    /**
     * 设置 [产品（开发系统）名称]
     */
    public void setIbzproProductname(String ibzproProductname){
        this.ibzproProductname = ibzproProductname ;
        this.modify("ibzpro_productname",ibzproProductname);
    }

    /**
     * 设置 [生产体系类型]
     */
    public void setPssystype(String pssystype){
        this.pssystype = pssystype ;
        this.modify("pssystype",pssystype);
    }

    /**
     * 设置 [生产对象标识]
     */
    public void setPsobjectid(String psobjectid){
        this.psobjectid = psobjectid ;
        this.modify("psobjectid",psobjectid);
    }

    /**
     * 设置 [编号]
     */
    public void setPmsproduct(BigInteger pmsproduct){
        this.pmsproduct = pmsproduct ;
        this.modify("pmsproduct",pmsproduct);
    }


}


