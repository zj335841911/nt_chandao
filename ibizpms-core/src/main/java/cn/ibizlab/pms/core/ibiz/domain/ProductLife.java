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
import lombok.Data;
import org.springframework.data.annotation.Transient;

import cn.ibizlab.pms.util.domain.EntityClient;

/**
 * ServiceApi [产品生命周期] 对象
 */
@Data
public class ProductLife extends EntityClient implements Serializable {

    /**
     * 平台/分支
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private String branch;

    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @JSONField(name = "createMan")
    @JsonProperty("createMan")
    private String createman;

    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updateDate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updateDate")
    private Timestamp updatedate;

    /**
     * 产品生命周期名称
     */
    @DEField(name = "ibz_productlifename")
    @JSONField(name = "productLifeName")
    @JsonProperty("productLifeName")
    private String productlifename;

    /**
     * 产品
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private Integer product;

    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createDate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createDate")
    private Timestamp createdate;

    /**
     * 父对象
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private String parent;

    /**
     * 年
     */
    @JSONField(name = "year")
    @JsonProperty("year")
    private String year;

    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @JSONField(name = "updateMan")
    @JsonProperty("updateMan")
    private String updateman;

    /**
     * 属性
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 里程碑
     */
    @JSONField(name = "marker")
    @JsonProperty("marker")
    private Integer marker;

    /**
     * 开始日期
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;

    /**
     * 产品生命周期标识
     */
    @DEField(name = "ibz_productlifeid" , isKeyField=true)
    @JSONField(name = "productLifeId")
    @JsonProperty("productLifeId")
    private String productlifeid;

    /**
     * 结束日期
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;





    /**
     * 设置 [平台/分支]
     */
    public void setBranch(String branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }
    /**
     * 设置 [产品生命周期名称]
     */
    public void setProductlifename(String productlifename){
        this.productlifename = productlifename ;
        this.modify("ibz_productlifename",productlifename);
    }
    /**
     * 设置 [产品]
     */
    public void setProduct(Integer product){
        this.product = product ;
        this.modify("product",product);
    }
    /**
     * 设置 [父对象]
     */
    public void setParent(String parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }
    /**
     * 设置 [年]
     */
    public void setYear(String year){
        this.year = year ;
        this.modify("year",year);
    }
    /**
     * 设置 [属性]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }
    /**
     * 设置 [里程碑]
     */
    public void setMarker(Integer marker){
        this.marker = marker ;
        this.modify("marker",marker);
    }
    /**
     * 设置 [开始日期]
     */
    public void setBegin(Timestamp begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }
    /**
     * 设置 [结束日期]
     */
    public void setEnd(Timestamp end){
        this.end = end ;
        this.modify("end",end);
    }

}


