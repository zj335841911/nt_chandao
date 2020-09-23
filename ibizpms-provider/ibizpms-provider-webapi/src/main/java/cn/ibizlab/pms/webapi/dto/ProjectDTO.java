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
 * 服务DTO对象[ProjectDTO]
 */
@Data
public class ProjectDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [OPENEDVERSION]
     *
     */
    @JSONField(name = "openedversion")
    @JsonProperty("openedversion")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    private String openedversion;

    /**
     * 属性 [BEGIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    @NotNull(message = "[开始时间]不允许为空!")
    private Timestamp begin;

    /**
     * 属性 [ACL]
     *
     */
    @JSONField(name = "acl")
    @JsonProperty("acl")
    @Size(min = 0, max = 7, message = "内容长度必须小于等于[7]")
    private String acl;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [DESC]
     *
     */
    @JSONField(name = "desc")
    @JsonProperty("desc")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String desc;

    /**
     * 属性 [PM]
     *
     */
    @JSONField(name = "pm")
    @JsonProperty("pm")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String pm;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

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
     * 属性 [SUBSTATUS]
     *
     */
    @JSONField(name = "substatus")
    @JsonProperty("substatus")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String substatus;

    /**
     * 属性 [ORDER]
     *
     */
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;

    /**
     * 属性 [RD]
     *
     */
    @JSONField(name = "rd")
    @JsonProperty("rd")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String rd;

    /**
     * 属性 [WHITELIST]
     *
     */
    @JSONField(name = "whitelist")
    @JsonProperty("whitelist")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String whitelist;

    /**
     * 属性 [PRI]
     *
     */
    @JSONField(name = "pri")
    @JsonProperty("pri")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String pri;

    /**
     * 属性 [END]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    @NotNull(message = "[结束日期]不允许为空!")
    private Timestamp end;

    /**
     * 属性 [CANCELEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "canceleddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("canceleddate")
    private Timestamp canceleddate;

    /**
     * 属性 [CODE]
     *
     */
    @JSONField(name = "code")
    @JsonProperty("code")
    @Size(min = 0, max = 45, message = "内容长度必须小于等于[45]")
    private String code;

    /**
     * 属性 [CATID]
     *
     */
    @JSONField(name = "catid")
    @JsonProperty("catid")
    private Integer catid;

    /**
     * 属性 [STATGE]
     *
     */
    @JSONField(name = "statge")
    @JsonProperty("statge")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String statge;

    /**
     * 属性 [CANCELEDBY]
     *
     */
    @JSONField(name = "canceledby")
    @JsonProperty("canceledby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String canceledby;

    /**
     * 属性 [ISCAT]
     *
     */
    @JSONField(name = "iscat")
    @JsonProperty("iscat")
    private Integer iscat;

    /**
     * 属性 [OPENEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;

    /**
     * 属性 [CLOSEDBY]
     *
     */
    @JSONField(name = "closedby")
    @JsonProperty("closedby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String closedby;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    private String type;

    /**
     * 属性 [PO]
     *
     */
    @JSONField(name = "po")
    @JsonProperty("po")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String po;

    /**
     * 属性 [STATUS]
     *
     */
    @JSONField(name = "status")
    @JsonProperty("status")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    private String status;

    /**
     * 属性 [DAYS]
     *
     */
    @JSONField(name = "days")
    @JsonProperty("days")
    private Integer days;

    /**
     * 属性 [TEAM]
     *
     */
    @JSONField(name = "team")
    @JsonProperty("team")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String team;

    /**
     * 属性 [CLOSEDDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "closeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("closeddate")
    private Timestamp closeddate;

    /**
     * 属性 [OPENEDBY]
     *
     */
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String openedby;

    /**
     * 属性 [QD]
     *
     */
    @JSONField(name = "qd")
    @JsonProperty("qd")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String qd;

    /**
     * 属性 [PARENTNAME]
     *
     */
    @JSONField(name = "parentname")
    @JsonProperty("parentname")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    private String parentname;

    /**
     * 属性 [PARENT]
     *
     */
    @JSONField(name = "parent")
    @JsonProperty("parent")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long parent;

    /**
     * 属性 [TASKCNT]
     *
     */
    @JSONField(name = "taskcnt")
    @JsonProperty("taskcnt")
    private Integer taskcnt;

    /**
     * 属性 [BUGCNT]
     *
     */
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;

    /**
     * 属性 [STORYCNT]
     *
     */
    @JSONField(name = "storycnt")
    @JsonProperty("storycnt")
    private Integer storycnt;

    /**
     * 属性 [PRODUCTS]
     *
     */
    @JSONField(name = "products")
    @JsonProperty("products")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String products;

    /**
     * 属性 [BRANCHS]
     *
     */
    @JSONField(name = "branchs")
    @JsonProperty("branchs")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String branchs;

    /**
     * 属性 [PLANS]
     *
     */
    @JSONField(name = "plans")
    @JsonProperty("plans")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String plans;

    /**
     * 属性 [SRFARRAY]
     *
     */
    @JSONField(name = "srfarray")
    @JsonProperty("srfarray")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String srfarray;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    @Size(min = 0, max = 1048576, message = "内容长度必须小于等于[1048576]")
    private String comment;

    /**
     * 属性 [PERIOD]
     *
     */
    @JSONField(name = "period")
    @JsonProperty("period")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String period;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String account;

    /**
     * 属性 [JOIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "join" , format="yyyy-MM-dd")
    @JsonProperty("join")
    private Timestamp join;

    /**
     * 属性 [HOURS]
     *
     */
    @JSONField(name = "hours")
    @JsonProperty("hours")
    private BigDecimal hours;

    /**
     * 属性 [ROLE]
     *
     */
    @JSONField(name = "role")
    @JsonProperty("role")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String role;

    /**
     * 属性 [TOTALCONSUMED]
     *
     */
    @JSONField(name = "totalconsumed")
    @JsonProperty("totalconsumed")
    private Double totalconsumed;

    /**
     * 属性 [TOTALWH]
     *
     */
    @JSONField(name = "totalwh")
    @JsonProperty("totalwh")
    private Integer totalwh;

    /**
     * 属性 [TOTALLEFT]
     *
     */
    @JSONField(name = "totalleft")
    @JsonProperty("totalleft")
    private Double totalleft;

    /**
     * 属性 [TOTALESTIMATE]
     *
     */
    @JSONField(name = "totalestimate")
    @JsonProperty("totalestimate")
    private Double totalestimate;

    /**
     * 属性 [TOTALHOURS]
     *
     */
    @JSONField(name = "totalhours")
    @JsonProperty("totalhours")
    private BigDecimal totalhours;

    /**
     * 属性 [MOBIMAGE]
     *
     */
    @JSONField(name = "mobimage")
    @JsonProperty("mobimage")
    @Size(min = 0, max = 4000, message = "内容长度必须小于等于[4000]")
    private String mobimage;

    /**
     * 属性 [ACCOUNTS]
     *
     */
    @JSONField(name = "accounts")
    @JsonProperty("accounts")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String accounts;

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
     * 属性 [DEPT]
     *
     */
    @JSONField(name = "dept")
    @JsonProperty("dept")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String dept;

    /**
     * 属性 [MANAGEMEMBERS]
     *
     */
    @JSONField(name = "managemembers")
    @JsonProperty("managemembers")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String managemembers;

    /**
     * 属性 [BUILDCNT]
     *
     */
    @JSONField(name = "buildcnt")
    @JsonProperty("buildcnt")
    private Integer buildcnt;

    /**
     * 属性 [TEAMCNT]
     *
     */
    @JSONField(name = "teamcnt")
    @JsonProperty("teamcnt")
    private Integer teamcnt;

    /**
     * 属性 [ALLTASKCNT]
     *
     */
    @JSONField(name = "alltaskcnt")
    @JsonProperty("alltaskcnt")
    private Integer alltaskcnt;

    /**
     * 属性 [UNCLOSETASKCNT]
     *
     */
    @JSONField(name = "unclosetaskcnt")
    @JsonProperty("unclosetaskcnt")
    private Integer unclosetaskcnt;

    /**
     * 属性 [ASSTOMYTASKCNT]
     *
     */
    @JSONField(name = "asstomytaskcnt")
    @JsonProperty("asstomytaskcnt")
    private Integer asstomytaskcnt;

    /**
     * 属性 [UNSTARTTASKCNT]
     *
     */
    @JSONField(name = "unstarttaskcnt")
    @JsonProperty("unstarttaskcnt")
    private Integer unstarttaskcnt;

    /**
     * 属性 [MORETASKCNT]
     *
     */
    @JSONField(name = "moretaskcnt")
    @JsonProperty("moretaskcnt")
    private Integer moretaskcnt;

    /**
     * 属性 [YSTARTASKCNT]
     *
     */
    @JSONField(name = "ystarttaskcnt")
    @JsonProperty("ystarttaskcnt")
    private Integer ystarttaskcnt;

    /**
     * 属性 [UNCOMPLETETASKCNT]
     *
     */
    @JSONField(name = "uncompletetaskcnt")
    @JsonProperty("uncompletetaskcnt")
    private Integer uncompletetaskcnt;

    /**
     * 属性 [YCOMPLETETASKCNT]
     *
     */
    @JSONField(name = "ycompletetaskcnt")
    @JsonProperty("ycompletetaskcnt")
    private Integer ycompletetaskcnt;

    /**
     * 属性 [MYCOMPLETETASKCNT]
     *
     */
    @JSONField(name = "mycompletetaskcnt")
    @JsonProperty("mycompletetaskcnt")
    private Integer mycompletetaskcnt;

    /**
     * 属性 [CLOSETASKCNT]
     *
     */
    @JSONField(name = "closetaskcnt")
    @JsonProperty("closetaskcnt")
    private Integer closetaskcnt;

    /**
     * 属性 [CANCELTASKCNT]
     *
     */
    @JSONField(name = "canceltaskcnt")
    @JsonProperty("canceltaskcnt")
    private Integer canceltaskcnt;

    /**
     * 属性 [STORYCHANGECNT]
     *
     */
    @JSONField(name = "storychangecnt")
    @JsonProperty("storychangecnt")
    private Integer storychangecnt;


    /**
     * 设置 [OPENEDVERSION]
     */
    public void setOpenedversion(String  openedversion){
        this.openedversion = openedversion ;
        this.modify("openedversion",openedversion);
    }

    /**
     * 设置 [BEGIN]
     */
    public void setBegin(Timestamp  begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }

    /**
     * 设置 [ACL]
     */
    public void setAcl(String  acl){
        this.acl = acl ;
        this.modify("acl",acl);
    }

    /**
     * 设置 [DESC]
     */
    public void setDesc(String  desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [PM]
     */
    public void setPm(String  pm){
        this.pm = pm ;
        this.modify("pm",pm);
    }

    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [SUBSTATUS]
     */
    public void setSubstatus(String  substatus){
        this.substatus = substatus ;
        this.modify("substatus",substatus);
    }

    /**
     * 设置 [ORDER]
     */
    public void setOrder(Integer  order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [RD]
     */
    public void setRd(String  rd){
        this.rd = rd ;
        this.modify("rd",rd);
    }

    /**
     * 设置 [WHITELIST]
     */
    public void setWhitelist(String  whitelist){
        this.whitelist = whitelist ;
        this.modify("whitelist",whitelist);
    }

    /**
     * 设置 [PRI]
     */
    public void setPri(String  pri){
        this.pri = pri ;
        this.modify("pri",pri);
    }

    /**
     * 设置 [END]
     */
    public void setEnd(Timestamp  end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 设置 [CANCELEDDATE]
     */
    public void setCanceleddate(Timestamp  canceleddate){
        this.canceleddate = canceleddate ;
        this.modify("canceleddate",canceleddate);
    }

    /**
     * 设置 [CODE]
     */
    public void setCode(String  code){
        this.code = code ;
        this.modify("code",code);
    }

    /**
     * 设置 [CATID]
     */
    public void setCatid(Integer  catid){
        this.catid = catid ;
        this.modify("catid",catid);
    }

    /**
     * 设置 [STATGE]
     */
    public void setStatge(String  statge){
        this.statge = statge ;
        this.modify("statge",statge);
    }

    /**
     * 设置 [CANCELEDBY]
     */
    public void setCanceledby(String  canceledby){
        this.canceledby = canceledby ;
        this.modify("canceledby",canceledby);
    }

    /**
     * 设置 [ISCAT]
     */
    public void setIscat(Integer  iscat){
        this.iscat = iscat ;
        this.modify("iscat",iscat);
    }

    /**
     * 设置 [CLOSEDBY]
     */
    public void setClosedby(String  closedby){
        this.closedby = closedby ;
        this.modify("closedby",closedby);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [PO]
     */
    public void setPo(String  po){
        this.po = po ;
        this.modify("po",po);
    }

    /**
     * 设置 [STATUS]
     */
    public void setStatus(String  status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [DAYS]
     */
    public void setDays(Integer  days){
        this.days = days ;
        this.modify("days",days);
    }

    /**
     * 设置 [TEAM]
     */
    public void setTeam(String  team){
        this.team = team ;
        this.modify("team",team);
    }

    /**
     * 设置 [CLOSEDDATE]
     */
    public void setCloseddate(Timestamp  closeddate){
        this.closeddate = closeddate ;
        this.modify("closeddate",closeddate);
    }

    /**
     * 设置 [QD]
     */
    public void setQd(String  qd){
        this.qd = qd ;
        this.modify("qd",qd);
    }

    /**
     * 设置 [PARENT]
     */
    public void setParent(Long  parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }


}


