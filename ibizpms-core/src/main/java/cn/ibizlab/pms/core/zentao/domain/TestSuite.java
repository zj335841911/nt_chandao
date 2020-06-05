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
 * 实体[测试套件]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_testsuite",resultMap = "TestSuiteResultMap")
public class TestSuite extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 创建时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "addeddate" , fill = FieldFill.INSERT)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "addeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("addeddate")
    private Timestamp addeddate;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "0" , logicdelval="1")
    @TableLogic(value= "0",delval="1")
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * 最后编辑人
     */
    @TableField(value = "lasteditedby")
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    private String lasteditedby;
    /**
     * 类型
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 最后编辑时间
     */
    @TableField(value = "lastediteddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;
    /**
     * 由谁创建
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMANNAME)
    @TableField(value = "addedby")
    @JSONField(name = "addedby")
    @JsonProperty("addedby")
    private String addedby;
    /**
     * 描述
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * 所属产品
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztproduct;



    /**
     * 设置 [名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }
    /**
     * 设置 [最后编辑人]
     */
    public void setLasteditedby(String lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }
    /**
     * 设置 [类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }
    /**
     * 设置 [最后编辑时间]
     */
    public void setLastediteddate(Timestamp lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }
    /**
     * 设置 [描述]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }
    /**
     * 设置 [所属产品]
     */
    public void setProduct(BigInteger product){
        this.product = product ;
        this.modify("product",product);
    }

}


