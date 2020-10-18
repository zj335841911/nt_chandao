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
import cn.ibizlab.pms.util.annotation.Audit;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

/**
 * 实体[测试版本]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_testtask",resultMap = "TestTaskResultMap")
public class TestTask extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 结束日期
     */
    @TableField(value = "`end`")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;
    /**
     * 开始日期
     */
    @TableField(value = "`begin`")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;
    /**
     * 抄送给
     */
    @DEField(defaultValue = "#EMPTY")
    @TableField(value = "`mailto`")
    @JSONField(name = "mailto")
    @JsonProperty("mailto")
    private String mailto;
    /**
     * 优先级
     */
    @DEField(defaultValue = "3")
    @TableField(value = "`pri`")
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;
    /**
     * 子状态
     */
    @DEField(defaultValue = "#EMPTY")
    @TableField(value = "`substatus`")
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    private String substatus;
    /**
     * report
     */
    @DEField(defaultValue = "#EMPTY")
    @TableField(value = "`report`")
    @JSONField(name = "report")
    @JsonProperty("report")
    private String report;
    /**
     * 描述
     */
    @DEField(defaultValue = "#EMPTY")
    @TableField(value = "`desc`")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 当前状态
     */
    @DEField(defaultValue = "wait")
    @TableField(value = "`status`")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * 负责人
     */
    @DEField(defaultValue = "#EMPTY")
    @TableField(value = "`owner`")
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "0" , logicdelval="1")
    @TableLogic(value= "0",delval="1")
    @TableField(value = "`deleted`")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * auto
     */
    @DEField(defaultValue = "no")
    @TableField(value = "`auto`")
    @JSONField(name = "auto")
    @JsonProperty("auto")
    private String auto;
    /**
     * 名称
     */
    @TableField(value = "`name`")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 所属产品
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`product`")
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;
    /**
     * 版本
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`build`")
    @JSONField(name = "build")
    @JsonProperty("build")
    private Long build;
    /**
     * 所属项目
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`project`")
    @JSONField(name = "project")
    @JsonProperty("project")
    private Long project;
    /**
     * 产品
     */
    @TableField(exist = false)
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;
    /**
     * 项目
     */
    @TableField(exist = false)
    @JSONField(name = "projecttname")
    @JsonProperty("projecttname")
    private String projecttname;
    /**
     * 版本
     */
    @TableField(exist = false)
    @JSONField(name = "buildname")
    @JsonProperty("buildname")
    private String buildname;
    /**
     * 备注
     */
    @TableField(exist = false)
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Build ztbuild;

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
    private cn.ibizlab.pms.core.zentao.domain.Project ztproject;



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
     * 设置 [抄送给]
     */
    public void setMailto(String mailto){
        this.mailto = mailto ;
        this.modify("mailto",mailto);
    }

    /**
     * 设置 [优先级]
     */
    public void setPri(Integer pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [子状态]
     */
    public void setSubstatus(String substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [report]
     */
    public void setReport(String report){
        this.report = report ;
        this.modify("report",report);
    }

    /**
     * 设置 [描述]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [当前状态]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [负责人]
     */
    public void setOwner(String owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }

    /**
     * 设置 [auto]
     */
    public void setAuto(String auto){
        this.auto = auto ;
        this.modify("auto",auto);
    }

    /**
     * 设置 [名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [所属产品]
     */
    public void setProduct(Long product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [版本]
     */
    public void setBuild(Long build){
        this.build = build ;
        this.modify("build",build);
    }

    /**
     * 设置 [所属项目]
     */
    public void setProject(Long project){
        this.project = project ;
        this.modify("project",project);
    }


    @Override
    public Serializable getDefaultKey(boolean gen) {
       return IdWorker.getId();
    }
    /**
     * 复制当前对象数据到目标对象(粘贴重置)
     * @param targetEntity 目标数据对象
     * @param bIncEmpty  是否包括空值
     * @param <T>
     * @return
     */
    @Override
    public <T> T copyTo(T targetEntity, boolean bIncEmpty) {
        this.reset("id");
        return super.copyTo(targetEntity,bIncEmpty);
    }
}


