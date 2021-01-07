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
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.alibaba.fastjson.annotation.JSONField;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[BugStatsDTO]
 */
@Data
public class BugStatsDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String title;

    /**
     * 属性 [OPENEDBY]
     *
     */
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String openedby;

    /**
     * 属性 [BUGWJJ]
     *
     */
    @JSONField(name = "bugwjj")
    @JsonProperty("bugwjj")
    private Integer bugwjj;

    /**
     * 属性 [BUGBYDESIGN]
     *
     */
    @JSONField(name = "bugbydesign")
    @JsonProperty("bugbydesign")
    private Integer bugbydesign;

    /**
     * 属性 [BUGDUPLICATE]
     *
     */
    @JSONField(name = "bugduplicate")
    @JsonProperty("bugduplicate")
    private Integer bugduplicate;

    /**
     * 属性 [BUGEXTERNAL]
     *
     */
    @JSONField(name = "bugexternal")
    @JsonProperty("bugexternal")
    private Integer bugexternal;

    /**
     * 属性 [BUGFIXED]
     *
     */
    @JSONField(name = "bugfixed")
    @JsonProperty("bugfixed")
    private Integer bugfixed;

    /**
     * 属性 [BUGNOTREPRO]
     *
     */
    @JSONField(name = "bugnotrepro")
    @JsonProperty("bugnotrepro")
    private Integer bugnotrepro;

    /**
     * 属性 [BUGPOSTPONED]
     *
     */
    @JSONField(name = "bugpostponed")
    @JsonProperty("bugpostponed")
    private Integer bugpostponed;

    /**
     * 属性 [BUGWILLNOTFIX]
     *
     */
    @JSONField(name = "bugwillnotfix")
    @JsonProperty("bugwillnotfix")
    private Integer bugwillnotfix;

    /**
     * 属性 [BUGTOSTORY]
     *
     */
    @JSONField(name = "bugtostory")
    @JsonProperty("bugtostory")
    private Integer bugtostory;

    /**
     * 属性 [BUGEFFICIENT]
     *
     */
    @JSONField(name = "bugefficient")
    @JsonProperty("bugefficient")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String bugefficient;

    /**
     * 属性 [BUGTOTAL]
     *
     */
    @JSONField(name = "bugtotal")
    @JsonProperty("bugtotal")
    private Integer bugtotal;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long product;

    /**
     * 属性 [PRODUCTNAME]
     *
     */
    @JSONField(name = "productname")
    @JsonProperty("productname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String productname;

    /**
     * 属性 [BUGCNT]
     *
     */
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;

    /**
     * 属性 [ASSIGNEDTO]
     *
     */
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String assignedto;

    /**
     * 属性 [RESOLVEDBY]
     *
     */
    @JSONField(name = "resolvedby")
    @JsonProperty("resolvedby")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String resolvedby;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long project;

    /**
     * 属性 [PROJECTNAME]
     *
     */
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String projectname;

    /**
     * 属性 [BUGACTIVE]
     *
     */
    @JSONField(name = "bugactive")
    @JsonProperty("bugactive")
    private Integer bugactive;

    /**
     * 属性 [BUGRESOLVED]
     *
     */
    @JSONField(name = "bugresolved")
    @JsonProperty("bugresolved")
    private Integer bugresolved;

    /**
     * 属性 [BUGCLOSED]
     *
     */
    @JSONField(name = "bugclosed")
    @JsonProperty("bugclosed")
    private Integer bugclosed;

    /**
     * 属性 [PROJECTNAME1]
     *
     */
    @JSONField(name = "projectname1")
    @JsonProperty("projectname1")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String projectname1;

    /**
     * 属性 [BUGRESOLUTION]
     *
     */
    @JSONField(name = "bugresolution")
    @JsonProperty("bugresolution")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String bugresolution;

    /**
     * 属性 [BUGSTATUS]
     *
     */
    @JSONField(name = "bugstatus")
    @JsonProperty("bugstatus")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String bugstatus;

    /**
     * 属性 [BUGID]
     *
     */
    @JSONField(name = "bugid")
    @JsonProperty("bugid")
    private Integer bugid;

    /**
     * 属性 [BUGTITLE]
     *
     */
    @JSONField(name = "bugtitle")
    @JsonProperty("bugtitle")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String bugtitle;

    /**
     * 属性 [BUGPRI]
     *
     */
    @JSONField(name = "bugpri")
    @JsonProperty("bugpri")
    private Integer bugpri;

    /**
     * 属性 [BUGSEVERITY]
     *
     */
    @JSONField(name = "bugseverity")
    @JsonProperty("bugseverity")
    private Integer bugseverity;

    /**
     * 属性 [BUGOPENEDBY]
     *
     */
    @JSONField(name = "bugopenedby")
    @JsonProperty("bugopenedby")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String bugopenedby;

    /**
     * 属性 [BUGOPENEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "bugopeneddate" , format="yyyy-MM-dd")
    @JsonProperty("bugopeneddate")
    private Timestamp bugopeneddate;

    /**
     * 属性 [BUGRESOLVEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "bugresolveddate" , format="yyyy-MM-dd")
    @JsonProperty("bugresolveddate")
    private Timestamp bugresolveddate;

    /**
     * 属性 [DEPT]
     *
     */
    @JSONField(name = "dept")
    @JsonProperty("dept")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String dept;

    /**
     * 属性 [BEGIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;

    /**
     * 属性 [END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;


    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [OPENEDBY]
     */
    public void setOpenedby(String  openedby){
        this.openedby = openedby ;
        this.modify("openedby",openedby);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [ASSIGNEDTO]
     */
    public void setAssignedto(String  assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [RESOLVEDBY]
     */
    public void setResolvedby(String  resolvedby){
        this.resolvedby = resolvedby ;
        this.modify("resolvedby",resolvedby);
    }

    /**
     * 设置 [PROJECT]
     */
    public void setProject(Long  project){
        this.project = project ;
        this.modify("project",project);
    }

    /**
     * 设置 [PROJECTNAME]
     */
    public void setProjectname(String  projectname){
        this.projectname = projectname ;
        this.modify("projectname",projectname);
    }


}

