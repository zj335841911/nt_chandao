package cn.ibizlab.pms.core.ibiz.domain;

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
 * 实体[产品统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_product",resultMap = "ProductStatsResultMap")
public class ProductStats extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 产品编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "1" , logicdelval="0")
    @TableLogic(value= "1",delval="0")
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * 需求总数
     */
    @TableField(exist = false)
    @JSONField(name = "storycnt")
    @JsonProperty("storycnt")
    private Integer storycnt;
    /**
     * 计划总数
     */
    @TableField(exist = false)
    @JSONField(name = "productplancnt")
    @JsonProperty("productplancnt")
    private Integer productplancnt;
    /**
     * 发布总数
     */
    @TableField(exist = false)
    @JSONField(name = "releasecnt")
    @JsonProperty("releasecnt")
    private Integer releasecnt;
    /**
     * 未开始需求数
     */
    @TableField(exist = false)
    @JSONField(name = "waitstorycnt")
    @JsonProperty("waitstorycnt")
    private Integer waitstorycnt;
    /**
     * 已计划需求数
     */
    @TableField(exist = false)
    @JSONField(name = "plannedstorycnt")
    @JsonProperty("plannedstorycnt")
    private Integer plannedstorycnt;
    /**
     * 开发中需求数
     */
    @TableField(exist = false)
    @JSONField(name = "developingstorycnt")
    @JsonProperty("developingstorycnt")
    private Integer developingstorycnt;
    /**
     * 测试中需求数
     */
    @TableField(exist = false)
    @JSONField(name = "testingstorycnt")
    @JsonProperty("testingstorycnt")
    private Integer testingstorycnt;
    /**
     * 已发布需求数
     */
    @TableField(exist = false)
    @JSONField(name = "releasedstorycnt")
    @JsonProperty("releasedstorycnt")
    private Integer releasedstorycnt;
    /**
     * 未过期计划数
     */
    @TableField(exist = false)
    @JSONField(name = "unendproductplancnt")
    @JsonProperty("unendproductplancnt")
    private Integer unendproductplancnt;
    /**
     * 剩余计划率
     */
    @TableField(exist = false)
    @JSONField(name = "unendproductplanrate")
    @JsonProperty("unendproductplanrate")
    private Double unendproductplanrate;
    /**
     * 关联项目数
     */
    @TableField(exist = false)
    @JSONField(name = "resprojectcnt")
    @JsonProperty("resprojectcnt")
    private Integer resprojectcnt;
    /**
     * 未完成关联项目数
     */
    @TableField(exist = false)
    @JSONField(name = "undoneresprojectcnt")
    @JsonProperty("undoneresprojectcnt")
    private Integer undoneresprojectcnt;
    /**
     * 进行项目率
     */
    @TableField(exist = false)
    @JSONField(name = "undoneresprojectrate")
    @JsonProperty("undoneresprojectrate")
    private Integer undoneresprojectrate;
    /**
     * 维护中发布数
     */
    @TableField(exist = false)
    @JSONField(name = "normalreleasecnt")
    @JsonProperty("normalreleasecnt")
    private Integer normalreleasecnt;
    /**
     * 维护发布率
     */
    @TableField(exist = false)
    @JSONField(name = "normalreleaserate")
    @JsonProperty("normalreleaserate")
    private Integer normalreleaserate;
    /**
     * 激活需求数
     */
    @TableField(exist = false)
    @JSONField(name = "activestorycnt")
    @JsonProperty("activestorycnt")
    private Integer activestorycnt;
    /**
     * 未解决Bug数
     */
    @TableField(exist = false)
    @JSONField(name = "activebugcnt")
    @JsonProperty("activebugcnt")
    private Integer activebugcnt;
    /**
     * 产品名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 指派给我的Bug数
     */
    @TableField(exist = false)
    @JSONField(name = "assigntomebugcnt")
    @JsonProperty("assigntomebugcnt")
    private Integer assigntomebugcnt;
    /**
     * 未关闭Bug数
     */
    @TableField(exist = false)
    @JSONField(name = "notclosedbugcnt")
    @JsonProperty("notclosedbugcnt")
    private Integer notclosedbugcnt;
    /**
     * 所有Bug树
     */
    @TableField(exist = false)
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;
    /**
     * 未确认Bug数
     */
    @TableField(exist = false)
    @JSONField(name = "unconfirmbugcnt")
    @JsonProperty("unconfirmbugcnt")
    private Integer unconfirmbugcnt;



    /**
     * 设置 [产品名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

}


