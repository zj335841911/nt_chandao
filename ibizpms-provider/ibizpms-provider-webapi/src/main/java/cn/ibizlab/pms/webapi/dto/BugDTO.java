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
 * 服务DTO对象[BugDTO]
 */
@Data
public class BugDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [SEVERITY]
     *
     */
    @JSONField(name = "severity")
    @JsonProperty("severity")
    private Integer severity;

    /**
     * 属性 [STORYVERSION]
     *
     */
    @JSONField(name = "storyversion")
    @JsonProperty("storyversion")
    private Integer storyversion;

    /**
     * 属性 [LINKBUG]
     *
     */
    @JSONField(name = "linkbug")
    @JsonProperty("linkbug")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String linkbug;

    /**
     * 属性 [ACTIVATEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "activateddate" , format="yyyy-MM-dd")
    @JsonProperty("activateddate")
    private Timestamp activateddate;

    /**
     * 属性 [ASSIGNEDTO]
     *
     */
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String assignedto;

    /**
     * 属性 [RESOLUTION]
     *
     */
    @JSONField(name = "resolution")
    @JsonProperty("resolution")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String resolution;

    /**
     * 属性 [LASTEDITEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;

    /**
     * 属性 [RESULT]
     *
     */
    @JSONField(name = "result")
    @JsonProperty("result")
    private Integer result;

    /**
     * 属性 [KEYWORDS]
     *
     */
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String keywords;

    /**
     * 属性 [CLOSEDBY]
     *
     */
    @JSONField(name = "closedby")
    @JsonProperty("closedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String closedby;

    /**
     * 属性 [BROWSER]
     *
     */
    @JSONField(name = "browser")
    @JsonProperty("browser")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String browser;

    /**
     * 属性 [STEPS]
     *
     */
    @JSONField(name = "steps")
    @JsonProperty("steps")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String steps;

    /**
     * 属性 [V2]
     *
     */
    @JSONField(name = "v2")
    @JsonProperty("v2")
    @Size(min = 0, max = 40, message = "内容长度必须小于等于[40]")
    private String v2;

    /**
     * 属性 [CONFIRMED]
     *
     */
    @JSONField(name = "confirmed")
    @JsonProperty("confirmed")
    private Integer confirmed;

    /**
     * 属性 [OPENEDBY]
     *
     */
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String openedby;

    /**
     * 属性 [ACTIVATEDCOUNT]
     *
     */
    @JSONField(name = "activatedcount")
    @JsonProperty("activatedcount")
    private Integer activatedcount;

    /**
     * 属性 [OPENEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;

    /**
     * 属性 [CLOSEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "closeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("closeddate")
    private Timestamp closeddate;

    /**
     * 属性 [MAILTO]
     *
     */
    @JSONField(name = "mailto")
    @JsonProperty("mailto")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String mailto;

    /**
     * 属性 [ASSIGNEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "assigneddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("assigneddate")
    private Timestamp assigneddate;

    /**
     * 属性 [DEADLINE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "deadline" , format="yyyy-MM-dd")
    @JsonProperty("deadline")
    private Timestamp deadline;

    /**
     * 属性 [COLOR]
     *
     */
    @JSONField(name = "color")
    @JsonProperty("color")
    @Size(min = 0, max = 7, message = "内容长度必须小于等于[7]")
    private String color;

    /**
     * 属性 [RESOLVEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "resolveddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("resolveddate")
    private Timestamp resolveddate;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String type;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    @Size(min = 0, max = 8, message = "内容长度必须小于等于[8]")
    private String status;

    /**
     * 属性 [OPENEDBUILD]
     *
     */
    @JSONField(name = "openedbuild")
    @JsonProperty("openedbuild")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String openedbuild;

    /**
     * 属性 [V1]
     *
     */
    @JSONField(name = "v1")
    @JsonProperty("v1")
    @Size(min = 0, max = 40, message = "内容长度必须小于等于[40]")
    private String v1;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [LINES]
     *
     */
    @JSONField(name = "lines")
    @JsonProperty("lines")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    private String lines;

    /**
     * 属性 [SUBSTATUS]
     *
     */
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String substatus;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;

    /**
     * 属性 [FOUND]
     *
     */
    @JSONField(name = "found")
    @JsonProperty("found")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String found;

    /**
     * 属性 [RESOLVEDBY]
     *
     */
    @JSONField(name = "resolvedby")
    @JsonProperty("resolvedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String resolvedby;

    /**
     * 属性 [RESOLVEDBUILD]
     *
     */
    @JSONField(name = "resolvedbuild")
    @JsonProperty("resolvedbuild")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String resolvedbuild;

    /**
     * 属性 [PRI]
     *
     */
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private Integer pri;

    /**
     * 属性 [OS]
     *
     */
    @JSONField(name = "os")
    @JsonProperty("os")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String os;

    /**
     * 属性 [HARDWARE]
     *
     */
    @JSONField(name = "hardware")
    @JsonProperty("hardware")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String hardware;

    /**
     * 属性 [LASTEDITEDBY]
     *
     */
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String lasteditedby;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    @NotBlank(message = "[Bug标题]不允许为空!")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String title;

    /**
     * 属性 [PRODUCTNAME]
     *
     */
    @JSONField(name = "productname")
    @JsonProperty("productname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String productname;

    /**
     * 属性 [PROJECTNAME]
     *
     */
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String projectname;

    /**
     * 属性 [STORYNAME]
     *
     */
    @JSONField(name = "storyname")
    @JsonProperty("storyname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String storyname;

    /**
     * 属性 [CASEVERSION]
     *
     */
    @JSONField(name = "caseversion")
    @JsonProperty("caseversion")
    private Integer caseversion;

    /**
     * 属性 [REPOTYPE]
     *
     */
    @JSONField(name = "repotype")
    @JsonProperty("repotype")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String repotype;

    /**
     * 属性 [TOSTORY]
     *
     */
    @JSONField(name = "tostory")
    @JsonProperty("tostory")
    private Long tostory;

    /**
     * 属性 [ENTRY]
     *
     */
    @JSONField(name = "entry")
    @JsonProperty("entry")
    private Long entry;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;

    /**
     * 属性 [TOTASK]
     *
     */
    @JSONField(name = "totask")
    @JsonProperty("totask")
    private Long totask;

    /**
     * 属性 [PLAN]
     *
     */
    @JSONField(name = "plan")
    @JsonProperty("plan")
    private Long plan;

    /**
     * 属性 [MODULE]
     *
     */
    @JSONField(name = "module")
    @JsonProperty("module")
    private Long module;

    /**
     * 属性 [BRANCH]
     *
     */
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Long branch;

    /**
     * 属性 [DUPLICATEBUG]
     *
     */
    @JSONField(name = "duplicatebug")
    @JsonProperty("duplicatebug")
    private Long duplicatebug;

    /**
     * 属性 [REPO]
     *
     */
    @JSONField(name = "repo")
    @JsonProperty("repo")
    private Long repo;

    /**
     * 属性 [STORY]
     *
     */
    @JSONField(name = "story")
    @JsonProperty("story")
    private Long story;

    /**
     * 属性 [CASE]
     *
     */
    @JSONField(name = "ibizcase")
    @JsonProperty("ibizcase")
    private Long ibizcase;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    private Long project;

    /**
     * 属性 [TASK]
     *
     */
    @JSONField(name = "task")
    @JsonProperty("task")
    private Long task;

    /**
     * 属性 [TESTTASK]
     *
     */
    @JSONField(name = "testtask")
    @JsonProperty("testtask")
    private Long testtask;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String comment;

    /**
     * 属性 [TASKNAME]
     *
     */
    @JSONField(name = "taskname")
    @JsonProperty("taskname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String taskname;

    /**
     * 属性 [MODULENAME]
     *
     */
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String modulename;

    /**
     * 属性 [BRANCHNAME]
     *
     */
    @JSONField(name = "branchname")
    @JsonProperty("branchname")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String branchname;

    /**
     * 属性 [MODULENAME1]
     *
     */
    @JSONField(name = "modulename1")
    @JsonProperty("modulename1")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String modulename1;

    /**
     * 属性 [FILES]
     *
     */
    @JSONField(name = "files")
    @JsonProperty("files")
    @Size(min = 0, max = 1000, message = "内容长度必须小于等于[1000]")
    private String files;

    /**
     * 属性 [MOBIMAGE]
     *
     */
    @JSONField(name = "mobimage")
    @JsonProperty("mobimage")
    @Size(min = 0, max = 4000, message = "内容长度必须小于等于[4000]")
    private String mobimage;

    /**
     * 属性 [ISFAVORITES]
     *
     */
    @JSONField(name = "isfavorites")
    @JsonProperty("isfavorites")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String isfavorites;

    /**
     * 属性 [BUILDNAME]
     *
     */
    @JSONField(name = "buildname")
    @JsonProperty("buildname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String buildname;

    /**
     * 属性 [BUILDPROJECT]
     *
     */
    @JSONField(name = "buildproject")
    @JsonProperty("buildproject")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String buildproject;

    /**
     * 属性 [CREATEBUILD]
     *
     */
    @JSONField(name = "createbuild")
    @JsonProperty("createbuild")
    private Integer createbuild;

    /**
     * 属性 [OVERDUEBUGS]
     *
     */
    @JSONField(name = "overduebugs")
    @JsonProperty("overduebugs")
    private Integer overduebugs;


    /**
     * 设置 [SEVERITY]
     */
    public void setSeverity(Integer  severity){
        this.severity = severity ;
        this.modify("severity",severity);
    }

    /**
     * 设置 [STORYVERSION]
     */
    public void setStoryversion(Integer  storyversion){
        this.storyversion = storyversion ;
        this.modify("storyversion",storyversion);
    }

    /**
     * 设置 [LINKBUG]
     */
    public void setLinkbug(String  linkbug){
        this.linkbug = linkbug ;
        this.modify("linkbug",linkbug);
    }

    /**
     * 设置 [ACTIVATEDDATE]
     */
    public void setActivateddate(Timestamp  activateddate){
        this.activateddate = activateddate ;
        this.modify("activateddate",activateddate);
    }

    /**
     * 设置 [ASSIGNEDTO]
     */
    public void setAssignedto(String  assignedto){
        this.assignedto = assignedto ;
        this.modify("assignedto",assignedto);
    }

    /**
     * 设置 [RESOLUTION]
     */
    public void setResolution(String  resolution){
        this.resolution = resolution ;
        this.modify("resolution",resolution);
    }

    /**
     * 设置 [RESULT]
     */
    public void setResult(Integer  result){
        this.result = result ;
        this.modify("result",result);
    }

    /**
     * 设置 [KEYWORDS]
     */
    public void setKeywords(String  keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }

    /**
     * 设置 [CLOSEDBY]
     */
    public void setClosedby(String  closedby){
        this.closedby = closedby ;
        this.modify("closedby",closedby);
    }

    /**
     * 设置 [BROWSER]
     */
    public void setBrowser(String  browser){
        this.browser = browser ;
        this.modify("browser",browser);
    }

    /**
     * 设置 [STEPS]
     */
    public void setSteps(String  steps){
        this.steps = steps ;
        this.modify("steps",steps);
    }

    /**
     * 设置 [V2]
     */
    public void setV2(String  v2){
        this.v2 = v2 ;
        this.modify("v2",v2);
    }

    /**
     * 设置 [CONFIRMED]
     */
    public void setConfirmed(Integer  confirmed){
        this.confirmed = confirmed ;
        this.modify("confirmed",confirmed);
    }

    /**
     * 设置 [OPENEDBY]
     */
    public void setOpenedby(String  openedby){
        this.openedby = openedby ;
        this.modify("openedby",openedby);
    }

    /**
     * 设置 [ACTIVATEDCOUNT]
     */
    public void setActivatedcount(Integer  activatedcount){
        this.activatedcount = activatedcount ;
        this.modify("activatedcount",activatedcount);
    }

    /**
     * 设置 [CLOSEDDATE]
     */
    public void setCloseddate(Timestamp  closeddate){
        this.closeddate = closeddate ;
        this.modify("closeddate",closeddate);
    }

    /**
     * 设置 [MAILTO]
     */
    public void setMailto(String  mailto){
        this.mailto = mailto ;
        this.modify("mailto",mailto);
    }

    /**
     * 设置 [ASSIGNEDDATE]
     */
    public void setAssigneddate(Timestamp  assigneddate){
        this.assigneddate = assigneddate ;
        this.modify("assigneddate",assigneddate);
    }

    /**
     * 设置 [DEADLINE]
     */
    public void setDeadline(Timestamp  deadline){
        this.deadline = deadline ;
        this.modify("deadline",deadline);
    }

    /**
     * 设置 [COLOR]
     */
    public void setColor(String  color){
        this.color = color ;
        this.modify("color",color);
    }

    /**
     * 设置 [RESOLVEDDATE]
     */
    public void setResolveddate(Timestamp  resolveddate){
        this.resolveddate = resolveddate ;
        this.modify("resolveddate",resolveddate);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [OPENEDBUILD]
     */
    public void setOpenedbuild(String  openedbuild){
        this.openedbuild = openedbuild ;
        this.modify("openedbuild",openedbuild);
    }

    /**
     * 设置 [V1]
     */
    public void setV1(String  v1){
        this.v1 = v1 ;
        this.modify("v1",v1);
    }

    /**
     * 设置 [LINES]
     */
    public void setLines(String  lines){
        this.lines = lines ;
        this.modify("lines",lines);
    }

    /**
     * 设置 [SUBSTATUS]
     */
    public void setSubstatus(String  substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [FOUND]
     */
    public void setFound(String  found){
        this.found = found ;
        this.modify("found",found);
    }

    /**
     * 设置 [RESOLVEDBY]
     */
    public void setResolvedby(String  resolvedby){
        this.resolvedby = resolvedby ;
        this.modify("resolvedby",resolvedby);
    }

    /**
     * 设置 [RESOLVEDBUILD]
     */
    public void setResolvedbuild(String  resolvedbuild){
        this.resolvedbuild = resolvedbuild ;
        this.modify("resolvedbuild",resolvedbuild);
    }

    /**
     * 设置 [PRI]
     */
    public void setPri(Integer  pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [OS]
     */
    public void setOs(String  os){
        this.os = os ;
        this.modify("os",os);
    }

    /**
     * 设置 [HARDWARE]
     */
    public void setHardware(String  hardware){
        this.hardware = hardware ;
        this.modify("hardware",hardware);
    }

    /**
     * 设置 [LASTEDITEDBY]
     */
    public void setLasteditedby(String  lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [CASEVERSION]
     */
    public void setCaseversion(Integer  caseversion){
        this.caseversion = caseversion ;
        this.modify("caseversion",caseversion);
    }

    /**
     * 设置 [REPOTYPE]
     */
    public void setRepotype(String  repotype){
        this.repotype = repotype ;
        this.modify("repotype",repotype);
    }

    /**
     * 设置 [TOSTORY]
     */
    public void setTostory(Long  tostory){
        this.tostory = tostory ;
        this.modify("tostory",tostory);
    }

    /**
     * 设置 [ENTRY]
     */
    public void setEntry(Long  entry){
        this.entry = entry ;
        this.modify("entry",entry);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [TOTASK]
     */
    public void setTotask(Long  totask){
        this.totask = totask ;
        this.modify("totask",totask);
    }

    /**
     * 设置 [PLAN]
     */
    public void setPlan(Long  plan){
        this.plan = plan ;
        this.modify("plan",plan);
    }

    /**
     * 设置 [MODULE]
     */
    public void setModule(Long  module){
        this.module = module ;
        this.modify("module",module);
    }

    /**
     * 设置 [BRANCH]
     */
    public void setBranch(Long  branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [DUPLICATEBUG]
     */
    public void setDuplicatebug(Long  duplicatebug){
        this.duplicatebug = duplicatebug ;
        this.modify("duplicatebug",duplicatebug);
    }

    /**
     * 设置 [REPO]
     */
    public void setRepo(Long  repo){
        this.repo = repo ;
        this.modify("repo",repo);
    }

    /**
     * 设置 [STORY]
     */
    public void setStory(Long  story){
        this.story = story ;
        this.modify("story",story);
    }

    /**
     * 设置 [CASE]
     */
    public void setIbizcase(Long  ibizcase){
        this.ibizcase = ibizcase ;
        this.modify("case",ibizcase);
    }

    /**
     * 设置 [PROJECT]
     */
    public void setProject(Long  project){
        this.project = project ;
        this.modify("project",project);
    }

    /**
     * 设置 [TASK]
     */
    public void setTask(Long  task){
        this.task = task ;
        this.modify("task",task);
    }

    /**
     * 设置 [TESTTASK]
     */
    public void setTesttask(Long  testtask){
        this.testtask = testtask ;
        this.modify("testtask",testtask);
    }


}


