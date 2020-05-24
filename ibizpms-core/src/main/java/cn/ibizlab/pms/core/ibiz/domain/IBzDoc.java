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
 * ServiceApi [文档] 对象
 */
@Data
public class IBzDoc extends EntityClient implements Serializable {

    /**
     * 文档标识
     */
    @DEField(name = "ibz_docid" , isKeyField=true)
    @JSONField(name = "iBzDocId")
    @JsonProperty("iBzDocId")
    private String ibzdocid;

    /**
     * 由谁添加
     */
    @JSONField(name = "addedBy")
    @JsonProperty("addedBy")
    private String addedby;

    /**
     * 由谁更新
     */
    @JSONField(name = "editedBy")
    @JsonProperty("editedBy")
    private String editedby;

    /**
     * 添加时间
     */
    @JSONField(name = "addedDate")
    @JsonProperty("addedDate")
    private String addeddate;

    /**
     * 大小
     */
    @JSONField(name = "size")
    @JsonProperty("size")
    private String size;

    /**
     * 所属文档库
     */
    @JSONField(name = "lib")
    @JsonProperty("lib")
    private String lib;

    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createDate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createDate")
    private Timestamp createdate;

    /**
     * 文档名称
     */
    @DEField(name = "ibz_docname")
    @JSONField(name = "iBzDocName")
    @JsonProperty("iBzDocName")
    private String ibzdocname;

    /**
     * 排序
     */
    @JSONField(name = "order")
    @JsonProperty("order")
    private String order;

    /**
     * 是否已收藏
     */
    @JSONField(name = "isCollect")
    @JsonProperty("isCollect")
    private Integer iscollect;

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
     * 更新时间
     */
    @JSONField(name = "editedDate")
    @JsonProperty("editedDate")
    private String editeddate;

    /**
     * 对象类型
     */
    @JSONField(name = "objectType")
    @JsonProperty("objectType")
    private String objecttype;

    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @JSONField(name = "updateMan")
    @JsonProperty("updateMan")
    private String updateman;





    /**
     * 设置 [由谁添加]
     */
    public void setAddedby(String addedby){
        this.addedby = addedby ;
        this.modify("addedby",addedby);
    }
    /**
     * 设置 [由谁更新]
     */
    public void setEditedby(String editedby){
        this.editedby = editedby ;
        this.modify("editedby",editedby);
    }
    /**
     * 设置 [添加时间]
     */
    public void setAddeddate(String addeddate){
        this.addeddate = addeddate ;
        this.modify("addeddate",addeddate);
    }
    /**
     * 设置 [大小]
     */
    public void setSize(String size){
        this.size = size ;
        this.modify("size",size);
    }
    /**
     * 设置 [所属文档库]
     */
    public void setLib(String lib){
        this.lib = lib ;
        this.modify("lib",lib);
    }
    /**
     * 设置 [文档名称]
     */
    public void setIbzdocname(String ibzdocname){
        this.ibzdocname = ibzdocname ;
        this.modify("ibz_docname",ibzdocname);
    }
    /**
     * 设置 [排序]
     */
    public void setOrder(String order){
        this.order = order ;
        this.modify("order",order);
    }
    /**
     * 设置 [是否已收藏]
     */
    public void setIscollect(Integer iscollect){
        this.iscollect = iscollect ;
        this.modify("iscollect",iscollect);
    }
    /**
     * 设置 [更新时间]
     */
    public void setEditeddate(String editeddate){
        this.editeddate = editeddate ;
        this.modify("editeddate",editeddate);
    }
    /**
     * 设置 [对象类型]
     */
    public void setObjecttype(String objecttype){
        this.objecttype = objecttype ;
        this.modify("objecttype",objecttype);
    }

}


