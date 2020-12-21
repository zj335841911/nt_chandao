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
 * 服务DTO对象[ProjectStatsDTO]
 */
@Data
public class ProjectStatsDTO extends DTOBase implements Serializable {

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
     * 属性 [STORYCNT]
     *
     */
    @JSONField(name = "storycnt")
    @JsonProperty("storycnt")
    private Integer storycnt;

    /**
     * 属性 [TASKCNT]
     *
     */
    @JSONField(name = "taskcnt")
    @JsonProperty("taskcnt")
    private Integer taskcnt;

    /**
     * 属性 [TOTALESTIMATE]
     *
     */
    @JSONField(name = "totalestimate")
    @JsonProperty("totalestimate")
    private Double totalestimate;

    /**
     * 属性 [TOTALCONSUMED]
     *
     */
    @JSONField(name = "totalconsumed")
    @JsonProperty("totalconsumed")
    private Double totalconsumed;

    /**
     * 属性 [TOTALLEFT]
     *
     */
    @JSONField(name = "totalleft")
    @JsonProperty("totalleft")
    private Double totalleft;

    /**
     * 属性 [UNDONETASKCNT]
     *
     */
    @JSONField(name = "undonetaskcnt")
    @JsonProperty("undonetaskcnt")
    private Integer undonetaskcnt;

    /**
     * 属性 [CLOSEDSTORYCNT]
     *
     */
    @JSONField(name = "closedstorycnt")
    @JsonProperty("closedstorycnt")
    private Integer closedstorycnt;

    /**
     * 属性 [BUGCNT]
     *
     */
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;

    /**
     * 属性 [ACTIVEBUGCNT]
     *
     */
    @JSONField(name = "activebugcnt")
    @JsonProperty("activebugcnt")
    private Integer activebugcnt;

    /**
     * 属性 [UNCLOSEDSTORYCNT]
     *
     */
    @JSONField(name = "unclosedstorycnt")
    @JsonProperty("unclosedstorycnt")
    private Integer unclosedstorycnt;

    /**
     * 属性 [FINISHTASKCNT]
     *
     */
    @JSONField(name = "finishtaskcnt")
    @JsonProperty("finishtaskcnt")
    private Integer finishtaskcnt;

    /**
     * 属性 [FINISHBUGCNT]
     *
     */
    @JSONField(name = "finishbugcnt")
    @JsonProperty("finishbugcnt")
    private Integer finishbugcnt;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [TIME]
     *
     */
    @JSONField(name = "time")
    @JsonProperty("time")
    private Double time;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String type;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    @NotBlank(message = "[项目名称]不允许为空!")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String name;

    /**
     * 属性 [UNCONFIRMEDBUGCNT]
     *
     */
    @JSONField(name = "unconfirmedbugcnt")
    @JsonProperty("unconfirmedbugcnt")
    private Integer unconfirmedbugcnt;

    /**
     * 属性 [UNCLOSEDBUGCNT]
     *
     */
    @JSONField(name = "unclosedbugcnt")
    @JsonProperty("unclosedbugcnt")
    private Integer unclosedbugcnt;

    /**
     * 属性 [TOTALWH]
     *
     */
    @JSONField(name = "totalwh")
    @JsonProperty("totalwh")
    private Integer totalwh;

    /**
     * 属性 [RELEASEDSTORYCNT]
     *
     */
    @JSONField(name = "releasedstorycnt")
    @JsonProperty("releasedstorycnt")
    private Integer releasedstorycnt;

    /**
     * 属性 [YESTERDAYCTASKCNT]
     *
     */
    @JSONField(name = "yesterdayctaskcnt")
    @JsonProperty("yesterdayctaskcnt")
    private Integer yesterdayctaskcnt;

    /**
     * 属性 [YESTERDAYRBUGCNT]
     *
     */
    @JSONField(name = "yesterdayrbugcnt")
    @JsonProperty("yesterdayrbugcnt")
    private Integer yesterdayrbugcnt;

    /**
     * 属性 [END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String status;

    /**
     * 属性 [ORDER1]
     *
     */
    @JSONField(name = "order1")
    @JsonProperty("order1")
    private Integer order1;

    /**
     * 属性 [ISTOP]
     *
     */
    @JSONField(name = "istop")
    @JsonProperty("istop")
    private Integer istop;

    /**
     * 属性 [CLOSEDTASKCNT]
     *
     */
    @JSONField(name = "closedtaskcnt")
    @JsonProperty("closedtaskcnt")
    private Integer closedtaskcnt;

    /**
     * 属性 [CANCELTASKCNT]
     *
     */
    @JSONField(name = "canceltaskcnt")
    @JsonProperty("canceltaskcnt")
    private Integer canceltaskcnt;

    /**
     * 属性 [PAUSETASKCNT]
     *
     */
    @JSONField(name = "pausetaskcnt")
    @JsonProperty("pausetaskcnt")
    private Integer pausetaskcnt;

    /**
     * 属性 [WAITTASKCNT]
     *
     */
    @JSONField(name = "waittaskcnt")
    @JsonProperty("waittaskcnt")
    private Integer waittaskcnt;

    /**
     * 属性 [DOINGTASKCNT]
     *
     */
    @JSONField(name = "doingtaskcnt")
    @JsonProperty("doingtaskcnt")
    private Integer doingtaskcnt;

    /**
     * 属性 [DONETASKCNT]
     *
     */
    @JSONField(name = "donetaskcnt")
    @JsonProperty("donetaskcnt")
    private Integer donetaskcnt;

    /**
     * 属性 [DESIGNTASKCNT]
     *
     */
    @JSONField(name = "designtaskcnt")
    @JsonProperty("designtaskcnt")
    private Integer designtaskcnt;

    /**
     * 属性 [DISCUSSTASKCNT]
     *
     */
    @JSONField(name = "discusstaskcnt")
    @JsonProperty("discusstaskcnt")
    private Integer discusstaskcnt;

    /**
     * 属性 [STUDYTASKCNT]
     *
     */
    @JSONField(name = "studytaskcnt")
    @JsonProperty("studytaskcnt")
    private Integer studytaskcnt;

    /**
     * 属性 [UITASKCNT]
     *
     */
    @JSONField(name = "uitaskcnt")
    @JsonProperty("uitaskcnt")
    private Integer uitaskcnt;

    /**
     * 属性 [TESTTASKCNT]
     *
     */
    @JSONField(name = "testtaskcnt")
    @JsonProperty("testtaskcnt")
    private Integer testtaskcnt;

    /**
     * 属性 [SERVETASKCNT]
     *
     */
    @JSONField(name = "servetaskcnt")
    @JsonProperty("servetaskcnt")
    private Integer servetaskcnt;

    /**
     * 属性 [DEVELTASKCNT]
     *
     */
    @JSONField(name = "develtaskcnt")
    @JsonProperty("develtaskcnt")
    private Integer develtaskcnt;

    /**
     * 属性 [MISCTASKCNT]
     *
     */
    @JSONField(name = "misctaskcnt")
    @JsonProperty("misctaskcnt")
    private Integer misctaskcnt;

    /**
     * 属性 [AFFAIRTASKCNT]
     *
     */
    @JSONField(name = "affairtaskcnt")
    @JsonProperty("affairtaskcnt")
    private Integer affairtaskcnt;

    /**
     * 属性 [COMPLETESTORYCNT]
     *
     */
    @JSONField(name = "completestorycnt")
    @JsonProperty("completestorycnt")
    private Integer completestorycnt;

    /**
     * 属性 [COMPLETETASKCNT]
     *
     */
    @JSONField(name = "completetaskcnt")
    @JsonProperty("completetaskcnt")
    private Integer completetaskcnt;

    /**
     * 属性 [BUGSTORY]
     *
     */
    @JSONField(name = "bugstory")
    @JsonProperty("bugstory")
    private Integer bugstory;

    /**
     * 属性 [BUGTASK]
     *
     */
    @JSONField(name = "bugtask")
    @JsonProperty("bugtask")
    private Integer bugtask;

    /**
     * 属性 [IMPORTANTBUGCNT]
     *
     */
    @JSONField(name = "importantbugcnt")
    @JsonProperty("importantbugcnt")
    private Integer importantbugcnt;

    /**
     * 属性 [SERIOUSBUGPROPORTION]
     *
     */
    @JSONField(name = "seriousbugproportion")
    @JsonProperty("seriousbugproportion")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String seriousbugproportion;

    /**
     * 属性 [CODEERROR]
     *
     */
    @JSONField(name = "codeerror")
    @JsonProperty("codeerror")
    private Integer codeerror;

    /**
     * 属性 [CONFIG]
     *
     */
    @JSONField(name = "config")
    @JsonProperty("config")
    private Integer config;

    /**
     * 属性 [INSTALL]
     *
     */
    @JSONField(name = "install")
    @JsonProperty("install")
    private Integer install;

    /**
     * 属性 [SECURITY]
     *
     */
    @JSONField(name = "security")
    @JsonProperty("security")
    private Integer security;

    /**
     * 属性 [PERFORMANCE]
     *
     */
    @JSONField(name = "performance")
    @JsonProperty("performance")
    private Integer performance;

    /**
     * 属性 [STANDARD]
     *
     */
    @JSONField(name = "standard")
    @JsonProperty("standard")
    private Integer standard;

    /**
     * 属性 [AUTOMATION]
     *
     */
    @JSONField(name = "automation")
    @JsonProperty("automation")
    private Integer automation;

    /**
     * 属性 [MEMBERCNT]
     *
     */
    @JSONField(name = "membercnt")
    @JsonProperty("membercnt")
    private Integer membercnt;

    /**
     * 属性 [DESIGNDEFECT]
     *
     */
    @JSONField(name = "designdefect")
    @JsonProperty("designdefect")
    private Integer designdefect;

    /**
     * 属性 [OTHERS]
     *
     */
    @JSONField(name = "others")
    @JsonProperty("others")
    private Integer others;

    /**
     * 属性 [PROJECTTOTALCONSUMED]
     *
     */
    @JSONField(name = "projecttotalconsumed")
    @JsonProperty("projecttotalconsumed")
    private Double projecttotalconsumed;

    /**
     * 属性 [TIMESCALE]
     *
     */
    @JSONField(name = "timescale")
    @JsonProperty("timescale")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String timescale;

    /**
     * 属性 [LEFTSTORYCNT]
     *
     */
    @JSONField(name = "leftstorycnt")
    @JsonProperty("leftstorycnt")
    private Integer leftstorycnt;

    /**
     * 属性 [EMPTYSTORY]
     *
     */
    @JSONField(name = "emptystory")
    @JsonProperty("emptystory")
    private Integer emptystory;

    /**
     * 属性 [DRAFTSTORY]
     *
     */
    @JSONField(name = "draftstory")
    @JsonProperty("draftstory")
    private Integer draftstory;

    /**
     * 属性 [ACTIVESTORY]
     *
     */
    @JSONField(name = "activestory")
    @JsonProperty("activestory")
    private Integer activestory;

    /**
     * 属性 [CLOSEDSTORY]
     *
     */
    @JSONField(name = "closedstory")
    @JsonProperty("closedstory")
    private Integer closedstory;

    /**
     * 属性 [CHANGEDSTORY]
     *
     */
    @JSONField(name = "changedstory")
    @JsonProperty("changedstory")
    private Integer changedstory;

    /**
     * 属性 [EMPTYSTAGESTORYCNT]
     *
     */
    @JSONField(name = "emptystagestorycnt")
    @JsonProperty("emptystagestorycnt")
    private Integer emptystagestorycnt;

    /**
     * 属性 [WAITSTAGESTORYCNT]
     *
     */
    @JSONField(name = "waitstagestorycnt")
    @JsonProperty("waitstagestorycnt")
    private Integer waitstagestorycnt;

    /**
     * 属性 [PLANNEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "plannedstagestorycnt")
    @JsonProperty("plannedstagestorycnt")
    private Integer plannedstagestorycnt;

    /**
     * 属性 [PROJECTEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "projectedstagestorycnt")
    @JsonProperty("projectedstagestorycnt")
    private Integer projectedstagestorycnt;

    /**
     * 属性 [DEVELOPINGSTAGESTORYCNT]
     *
     */
    @JSONField(name = "developingstagestorycnt")
    @JsonProperty("developingstagestorycnt")
    private Integer developingstagestorycnt;

    /**
     * 属性 [DEVELOPEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "developedstagestorycnt")
    @JsonProperty("developedstagestorycnt")
    private Integer developedstagestorycnt;

    /**
     * 属性 [TESTINGSTAGESTORYCNT]
     *
     */
    @JSONField(name = "testingstagestorycnt")
    @JsonProperty("testingstagestorycnt")
    private Integer testingstagestorycnt;

    /**
     * 属性 [TESTEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "testedstagestorycnt")
    @JsonProperty("testedstagestorycnt")
    private Integer testedstagestorycnt;

    /**
     * 属性 [VERIFIEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "verifiedstagestorycnt")
    @JsonProperty("verifiedstagestorycnt")
    private Integer verifiedstagestorycnt;

    /**
     * 属性 [RELEASEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "releasedstagestorycnt")
    @JsonProperty("releasedstagestorycnt")
    private Integer releasedstagestorycnt;

    /**
     * 属性 [CLOSEDSTAGESTORYCNT]
     *
     */
    @JSONField(name = "closedstagestorycnt")
    @JsonProperty("closedstagestorycnt")
    private Integer closedstagestorycnt;

    /**
     * 属性 [PROGRESS]
     *
     */
    @JSONField(name = "progress")
    @JsonProperty("progress")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String progress;

    /**
     * 属性 [BEGIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;


    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [END]
     */
    public void setEnd(Timestamp  end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [BEGIN]
     */
    public void setBegin(Timestamp  begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }


}


