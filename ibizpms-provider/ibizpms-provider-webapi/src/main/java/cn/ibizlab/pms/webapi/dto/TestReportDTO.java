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
import cn.ibizlab.pms.util.domain.DTOBase;
import lombok.Data;

/**
 * 服务DTO对象[TestReportDTO]
 */
@Data
public class TestReportDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [OBJECTID]
     *
     */
    @JSONField(name = "objectid")
    @JsonProperty("objectid")
    private Integer objectid;

    /**
     * 属性 [CASES]
     *
     */
    @JSONField(name = "cases")
    @JsonProperty("cases")
    private String cases;

    /**
     * 属性 [MEMBERS]
     *
     */
    @JSONField(name = "members")
    @JsonProperty("members")
    private String members;

    /**
     * 属性 [BUGS]
     *
     */
    @JSONField(name = "bugs")
    @JsonProperty("bugs")
    private String bugs;

    /**
     * 属性 [CREATEDBY]
     *
     */
    @JSONField(name = "createdby")
    @JsonProperty("createdby")
    private String createdby;

    /**
     * 属性 [STORIES]
     *
     */
    @JSONField(name = "stories")
    @JsonProperty("stories")
    private String stories;

    /**
     * 属性 [TASKS]
     *
     */
    @JSONField(name = "tasks")
    @JsonProperty("tasks")
    private String tasks;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;

    /**
     * 属性 [BEGIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;

    /**
     * 属性 [OBJECTTYPE]
     *
     */
    @JSONField(name = "objecttype")
    @JsonProperty("objecttype")
    private String objecttype;

    /**
     * 属性 [END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;

    /**
     * 属性 [BUILDS]
     *
     */
    @JSONField(name = "builds")
    @JsonProperty("builds")
    private String builds;

    /**
     * 属性 [CREATEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createddate")
    private Timestamp createddate;

    /**
     * 属性 [REPORT]
     *
     */
    @JSONField(name = "report")
    @JsonProperty("report")
    private String report;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [OWNER]
     *
     */
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    private BigInteger project;


    /**
     * 设置 [OBJECTID]
     */
    public void setObjectid(Integer  objectid){
        this.objectid = objectid ;
        this.modify("objectid",objectid);
    }

    /**
     * 设置 [CASES]
     */
    public void setCases(String  cases){
        this.cases = cases ;
        this.modify("cases",cases);
    }

    /**
     * 设置 [MEMBERS]
     */
    public void setMembers(String  members){
        this.members = members ;
        this.modify("members",members);
    }

    /**
     * 设置 [BUGS]
     */
    public void setBugs(String  bugs){
        this.bugs = bugs ;
        this.modify("bugs",bugs);
    }

    /**
     * 设置 [STORIES]
     */
    public void setStories(String  stories){
        this.stories = stories ;
        this.modify("stories",stories);
    }

    /**
     * 设置 [TASKS]
     */
    public void setTasks(String  tasks){
        this.tasks = tasks ;
        this.modify("tasks",tasks);
    }

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
     * 设置 [OBJECTTYPE]
     */
    public void setObjecttype(String  objecttype){
        this.objecttype = objecttype ;
        this.modify("objecttype",objecttype);
    }

    /**
     * 设置 [END]
     */
    public void setEnd(Timestamp  end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 设置 [BUILDS]
     */
    public void setBuilds(String  builds){
        this.builds = builds ;
        this.modify("builds",builds);
    }

    /**
     * 设置 [REPORT]
     */
    public void setReport(String  report){
        this.report = report ;
        this.modify("report",report);
    }

    /**
     * 设置 [OWNER]
     */
    public void setOwner(String  owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(BigInteger  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [PROJECT]
     */
    public void setProject(BigInteger  project){
        this.project = project ;
        this.modify("project",project);
    }


}

