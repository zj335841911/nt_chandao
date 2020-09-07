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
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[FileDTO]
 */
@Data
public class FileDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [PATHNAME]
     *
     */
    @JSONField(name = "pathname")
    @JsonProperty("pathname")
    private String pathname;

    /**
     * 属性 [OBJECTID]
     *
     */
    @JSONField(name = "objectid")
    @JsonProperty("objectid")
    private Integer objectid;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [EXTENSION]
     *
     */
    @JSONField(name = "extension")
    @JsonProperty("extension")
    private String extension;

    /**
     * 属性 [OBJECTTYPE]
     *
     */
    @JSONField(name = "objecttype")
    @JsonProperty("objecttype")
    private String objecttype;

    /**
     * 属性 [ADDEDBY]
     *
     */
    @JSONField(name = "addedby")
    @JsonProperty("addedby")
    private String addedby;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;

    /**
     * 属性 [ADDEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "addeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("addeddate")
    private Timestamp addeddate;

    /**
     * 属性 [DOWNLOADS]
     *
     */
    @JSONField(name = "downloads")
    @JsonProperty("downloads")
    private Integer downloads;

    /**
     * 属性 [SIZE]
     *
     */
    @JSONField(name = "size")
    @JsonProperty("size")
    private Integer size;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [EXTRA]
     *
     */
    @JSONField(name = "extra")
    @JsonProperty("extra")
    private String extra;


    /**
     * 设置 [PATHNAME]
     */
    public void setPathname(String  pathname){
        this.pathname = pathname ;
        this.modify("pathname",pathname);
    }

    /**
     * 设置 [OBJECTID]
     */
    public void setObjectid(Integer  objectid){
        this.objectid = objectid ;
        this.modify("objectid",objectid);
    }

    /**
     * 设置 [EXTENSION]
     */
    public void setExtension(String  extension){
        this.extension = extension ;
        this.modify("extension",extension);
    }

    /**
     * 设置 [OBJECTTYPE]
     */
    public void setObjecttype(String  objecttype){
        this.objecttype = objecttype ;
        this.modify("objecttype",objecttype);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [DOWNLOADS]
     */
    public void setDownloads(Integer  downloads){
        this.downloads = downloads ;
        this.modify("downloads",downloads);
    }

    /**
     * 设置 [SIZE]
     */
    public void setSize(Integer  size){
        this.size = size ;
        this.modify("size",size);
    }

    /**
     * 设置 [EXTRA]
     */
    public void setExtra(String  extra){
        this.extra = extra ;
        this.modify("extra",extra);
    }


}

