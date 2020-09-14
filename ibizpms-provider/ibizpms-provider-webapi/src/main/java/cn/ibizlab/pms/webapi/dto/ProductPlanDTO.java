package cn.ibizlab.pms.webapi.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Map;
import java.util.HashMap;
import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[ProductPlanDTO]
 */
@Data
public class ProductPlanDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    @NotBlank(message = "[名称]不允许为空!")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String title;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;

    /**
     * 属性 [BEGIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;

    /**
     * 属性 [DESC]
     *
     */
    @JSONField(name = "desc")
    @JsonProperty("desc")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String desc;

    /**
     * 属性 [END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [ORDER]
     *
     */
    @JSONField(name = "order")
    @JsonProperty("order")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String order;

    /**
     * 属性 [PARENTNAME]
     *
     */
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String parentname;

    /**
     * 属性 [BRANCH]
     *
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Long branch;

    /**
     * 属性 [PARENT]
     *
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private Long parent;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;

    /**
     * 属性 [STATUSS]
     *
     */
    @JSONField(name = "statuss")
    @JsonProperty("statuss")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String statuss;

    /**
     * 属性 [FUTURE]
     *
     */
    @JSONField(name = "future")
    @JsonProperty("future")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String future;

    /**
     * 属性 [DELTA]
     *
     */
    @JSONField(name = "delta")
    @JsonProperty("delta")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String delta;

    /**
     * 属性 [OLDTITLE]
     *
     */
    @JSONField(name = "oldtitle")
    @JsonProperty("oldtitle")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String oldtitle;

    /**
     * 属性 [STORYCNT]
     *
     */
    @JSONField(name = "storycnt")
    @JsonProperty("storycnt")
    private Integer storycnt;

    /**
     * 属性 [BUGCNT]
     *
     */
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;

    /**
     * 属性 [ISEXPIRED]
     *
     */
    @JSONField(name = "isexpired")
    @JsonProperty("isexpired")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String isexpired;

    /**
     * 属性 [ESTIMATECNT]
     *
     */
    @JSONField(name = "estimatecnt")
    @JsonProperty("estimatecnt")
    private Integer estimatecnt;


    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [BEGIN]
     */
    public void setBegin(Timestamp  begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }

    /**
     * 设置 [DESC]
     */
    public void setDesc(String  desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [END]
     */
    public void setEnd(Timestamp  end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 设置 [ORDER]
     */
    public void setOrder(String  order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [BRANCH]
     */
    public void setBranch(Long  branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [PARENT]
     */
    public void setParent(Long  parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }


}


