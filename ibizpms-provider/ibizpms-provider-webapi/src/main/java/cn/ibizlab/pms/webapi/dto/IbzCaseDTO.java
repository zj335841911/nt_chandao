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
 * 服务DTO对象[IbzCaseDTO]
 */
@Data
public class IbzCaseDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ORDER]
     *
     */
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;

    /**
     * 属性 [HOWRUN]
     *
     */
    @JSONField(name = "howrun")
    @JsonProperty("howrun")
    private String howrun;

    /**
     * 属性 [SCRIPTEDBY]
     *
     */
    @JSONField(name = "scriptedby")
    @JsonProperty("scriptedby")
    private String scriptedby;

    /**
     * 属性 [PATH]
     *
     */
    @JSONField(name = "path")
    @JsonProperty("path")
    private Integer path;

    /**
     * 属性 [OPENEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;

    /**
     * 属性 [LASTEDITEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;

    /**
     * 属性 [SCRIPTEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "scripteddate" , format="yyyy-MM-dd")
    @JsonProperty("scripteddate")
    private Timestamp scripteddate;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;

    /**
     * 属性 [AUTO]
     *
     */
    @JSONField(name = "auto")
    @JsonProperty("auto")
    private String auto;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 属性 [SCRIPTLOCATION]
     *
     */
    @JSONField(name = "scriptlocation")
    @JsonProperty("scriptlocation")
    private String scriptlocation;

    /**
     * 属性 [SCRIPTSTATUS]
     *
     */
    @JSONField(name = "scriptstatus")
    @JsonProperty("scriptstatus")
    private String scriptstatus;

    /**
     * 属性 [KEYWORDS]
     *
     */
    @JSONField(name = "keywords")
    @JsonProperty("keywords")
    private String keywords;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [PRECONDITION]
     *
     */
    @JSONField(name = "precondition")
    @JsonProperty("precondition")
    private String precondition;

    /**
     * 属性 [PRI]
     *
     */
    @JSONField(name = "pri")
    @JsonProperty("pri")
    private String pri;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;

    /**
     * 属性 [STAGE]
     *
     */
    @JSONField(name = "stage")
    @JsonProperty("stage")
    private String stage;

    /**
     * 属性 [OPENEDBY]
     *
     */
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private String openedby;

    /**
     * 属性 [LASTEDITEDBY]
     *
     */
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    private String lasteditedby;

    /**
     * 属性 [LIB]
     *
     */
    @JSONField(name = "lib")
    @JsonProperty("lib")
    private BigInteger lib;

    /**
     * 属性 [MODULE]
     *
     */
    @JSONField(name = "module")
    @JsonProperty("module")
    private BigInteger module;

    /**
     * 属性 [MODULENAME]
     *
     */
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    private String modulename;

    /**
     * 属性 [LIBNAME]
     *
     */
    @JSONField(name = "libname")
    @JsonProperty("libname")
    private String libname;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;


    /**
     * 设置 [ORDER]
     */
    public void setOrder(Integer  order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [HOWRUN]
     */
    public void setHowrun(String  howrun){
        this.howrun = howrun ;
        this.modify("howrun",howrun);
    }

    /**
     * 设置 [SCRIPTEDBY]
     */
    public void setScriptedby(String  scriptedby){
        this.scriptedby = scriptedby ;
        this.modify("scriptedby",scriptedby);
    }

    /**
     * 设置 [PATH]
     */
    public void setPath(Integer  path){
        this.path = path ;
        this.modify("path",path);
    }

    /**
     * 设置 [LASTEDITEDDATE]
     */
    public void setLastediteddate(Timestamp  lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }

    /**
     * 设置 [SCRIPTEDDATE]
     */
    public void setScripteddate(Timestamp  scripteddate){
        this.scripteddate = scripteddate ;
        this.modify("scripteddate",scripteddate);
    }

    /**
     * 设置 [AUTO]
     */
    public void setAuto(String  auto){
        this.auto = auto ;
        this.modify("auto",auto);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [SCRIPTLOCATION]
     */
    public void setScriptlocation(String  scriptlocation){
        this.scriptlocation = scriptlocation ;
        this.modify("scriptlocation",scriptlocation);
    }

    /**
     * 设置 [SCRIPTSTATUS]
     */
    public void setScriptstatus(String  scriptstatus){
        this.scriptstatus = scriptstatus ;
        this.modify("scriptstatus",scriptstatus);
    }

    /**
     * 设置 [KEYWORDS]
     */
    public void setKeywords(String  keywords){
        this.keywords = keywords ;
        this.modify("keywords",keywords);
    }

    /**
     * 设置 [PRECONDITION]
     */
    public void setPrecondition(String  precondition){
        this.precondition = precondition ;
        this.modify("precondition",precondition);
    }

    /**
     * 设置 [PRI]
     */
    public void setPri(String  pri){
        this.pri = pri ;
        this.modify("pri",pri);
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
     * 设置 [STAGE]
     */
    public void setStage(String  stage){
        this.stage = stage ;
        this.modify("stage",stage);
    }

    /**
     * 设置 [OPENEDBY]
     */
    public void setOpenedby(String  openedby){
        this.openedby = openedby ;
        this.modify("openedby",openedby);
    }

    /**
     * 设置 [LASTEDITEDBY]
     */
    public void setLasteditedby(String  lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }

    /**
     * 设置 [LIB]
     */
    public void setLib(BigInteger  lib){
        this.lib = lib ;
        this.modify("lib",lib);
    }

    /**
     * 设置 [MODULE]
     */
    public void setModule(BigInteger  module){
        this.module = module ;
        this.modify("module",module);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }


    /**
     *  [IBZ_LIBCASESTEPSTMP]
     */
    @JsonProperty("ibzlibcasesteptmps")
    @JSONField(name = "ibzlibcasesteptmps")
	private List<IbzLibCaseStepTmpDTO> ibzlibcasesteps ;

}

