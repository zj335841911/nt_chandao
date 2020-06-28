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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[产品计划]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_productplan",resultMap = "ProductPlanResultMap")
public class ProductPlan extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 名称
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 开始日期
     */
    @TableField(value = "begin")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;
    /**
     * 描述
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * 结束日期
     */
    @TableField(value = "end")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;
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
     * 排序
     */
    @TableField(value = "order")
    @JSONField(name = "order")
    @JsonProperty("order")
    private String order;
    /**
     * 父计划名称
     */
    @TableField(exist = false)
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    private String parentname;
    /**
     * 平台/分支
     */
    @TableField(value = "branch")
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private BigInteger branch;
    /**
     * 父计划
     */
    @DEField(defaultValue = "0")
    @TableField(value = "parent")
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;
    /**
     * 产品
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
    private cn.ibizlab.pms.core.zentao.domain.Branch ztbranch;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztproduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.ProductPlan ibizparent;



    /**
     * 设置 [名称]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [开始日期]
     */
    public void setBegin(Timestamp begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }

    /**
     * 格式化日期 [开始日期]
     */
    public String formatBegin(){
        if (this.begin == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(begin);
    }
    /**
     * 设置 [描述]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [结束日期]
     */
    public void setEnd(Timestamp end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 格式化日期 [结束日期]
     */
    public String formatEnd(){
        if (this.end == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(end);
    }
    /**
     * 设置 [排序]
     */
    public void setOrder(String order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [平台/分支]
     */
    public void setBranch(BigInteger branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [父计划]
     */
    public void setParent(BigInteger parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [产品]
     */
    public void setProduct(BigInteger product){
        this.product = product ;
        this.modify("product",product);
    }


}


