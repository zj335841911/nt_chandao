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
 * 服务DTO对象[DocDTO]
 */
@Data
public class DocDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [GROUPS]
     *
     */
    @JSONField(name = "groups")
    @JsonProperty("groups")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String groups;

    /**
     * 属性 [CONTENT]
     *
     */
    @JSONField(name = "content")
    @JsonProperty("content")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String content;

    /**
     * 属性 [DOCQTYPE]
     *
     */
    @JSONField(name = "docqtype")
    @JsonProperty("docqtype")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String docqtype;

    /**
     * 属性 [EDITEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "editeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("editeddate")
    private Timestamp editeddate;

    /**
     * 属性 [VIEWS]
     *
     */
    @JSONField(name = "views")
    @JsonProperty("views")
    private Integer views;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 属性 [EDITEDBY]
     *
     */
    @JSONField(name = "editedby")
    @JsonProperty("editedby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String editedby;

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
    @NotBlank(message = "[文档标题]不允许为空!")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String title;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [RECENTUPDATECNT]
     *
     */
    @JSONField(name = "recentupdatecnt")
    @JsonProperty("recentupdatecnt")
    private Integer recentupdatecnt;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String type;

    /**
     * 属性 [ALLDOCCNT]
     *
     */
    @JSONField(name = "alldoccnt")
    @JsonProperty("alldoccnt")
    private Integer alldoccnt;

    /**
     * 属性 [ADDEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "addeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("addeddate")
    private Timestamp addeddate;

    /**
     * 属性 [ACL]
     *
     */
    @JSONField(name = "acl")
    @JsonProperty("acl")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    private String acl;

    /**
     * 属性 [MYDOCCNT]
     *
     */
    @JSONField(name = "mydoccnt")
    @JsonProperty("mydoccnt")
    private Integer mydoccnt;

    /**
     * 属性 [URL]
     *
     */
    @JSONField(name = "url")
    @JsonProperty("url")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String url;

    /**
     * 属性 [DOCCNT]
     *
     */
    @JSONField(name = "doccnt")
    @JsonProperty("doccnt")
    private Integer doccnt;

    /**
     * 属性 [MYFAVOURITECNT]
     *
     */
    @JSONField(name = "myfavouritecnt")
    @JsonProperty("myfavouritecnt")
    private Integer myfavouritecnt;

    /**
     * 属性 [USERS]
     *
     */
    @JSONField(name = "users")
    @JsonProperty("users")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String users;

    /**
     * 属性 [RECENTADDCNT]
     *
     */
    @JSONField(name = "recentaddcnt")
    @JsonProperty("recentaddcnt")
    private Integer recentaddcnt;

    /**
     * 属性 [KEYWORDS]
     *
     */
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String keywords;

    /**
     * 属性 [ISFAVOURITES]
     *
     */
    @JSONField(name = "isfavourites")
    @JsonProperty("isfavourites")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String isfavourites;

    /**
     * 属性 [COLLECTOR]
     *
     */
    @JSONField(name = "collector")
    @JsonProperty("collector")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String collector;

    /**
     * 属性 [ADDEDBY]
     *
     */
    @JSONField(name = "addedby")
    @JsonProperty("addedby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String addedby;

    /**
     * 属性 [TODAYUPDATECNT]
     *
     */
    @JSONField(name = "todayupdatecnt")
    @JsonProperty("todayupdatecnt")
    private Integer todayupdatecnt;

    /**
     * 属性 [FILES]
     *
     */
    @JSONField(name = "files")
    @JsonProperty("files")
    @Size(min = 0, max = 1000, message = "内容长度必须小于等于[1000]")
    private String files;

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
     * 属性 [LIBNAME]
     *
     */
    @JSONField(name = "libname")
    @JsonProperty("libname")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String libname;

    /**
     * 属性 [MODULENAME]
     *
     */
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String modulename;

    /**
     * 属性 [LIB]
     *
     */
    @JSONField(name = "lib")
    @JsonProperty("lib")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long lib;

    /**
     * 属性 [PROJECT]
     *
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long project;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long product;

    /**
     * 属性 [MODULE]
     *
     */
    @JSONField(name = "module")
    @JsonProperty("module")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long module;


    /**
     * 设置 [GROUPS]
     */
    public void setGroups(String  groups){
        this.groups = groups ;
        this.modify("groups",groups);
    }

    /**
     * 设置 [EDITEDDATE]
     */
    public void setEditeddate(Timestamp  editeddate){
        this.editeddate = editeddate ;
        this.modify("editeddate",editeddate);
    }

    /**
     * 设置 [VIEWS]
     */
    public void setViews(Integer  views){
        this.views = views ;
        this.modify("views",views);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [EDITEDBY]
     */
    public void setEditedby(String  editedby){
        this.editedby = editedby ;
        this.modify("editedby",editedby);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [ACL]
     */
    public void setAcl(String  acl){
        this.acl = acl ;
        this.modify("acl",acl);
    }

    /**
     * 设置 [USERS]
     */
    public void setUsers(String  users){
        this.users = users ;
        this.modify("users",users);
    }

    /**
     * 设置 [KEYWORDS]
     */
    public void setKeywords(String  keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }

    /**
     * 设置 [COLLECTOR]
     */
    public void setCollector(String  collector){
        this.collector = collector ;
        this.modify("collector",collector);
    }

    /**
     * 设置 [LIB]
     */
    public void setLib(Long  lib){
        this.lib = lib ;
        this.modify("lib",lib);
    }

    /**
     * 设置 [PROJECT]
     */
    public void setProject(Long  project){
        this.project = project ;
        this.modify("project",project);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [MODULE]
     */
    public void setModule(Long  module){
        this.module = module ;
        this.modify("module",module);
    }


}


