package cn.ibizlab.pms.core.ibizsysmodel.domain;

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

import cn.ibizlab.pms.util.domain.EntityClient;

/**
 * ServiceApi [系统需求项] 对象
 */
@Data
public class PSSysReqItem extends EntityClient implements Serializable {

    /**
     * 系统需求项标识
     */
    @DEField(isKeyField=true)
    @JSONField(name = "pssysreqitemid")
    @JsonProperty("pssysreqitemid")
    private String pssysreqitemid;

    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;

    /**
     * 系统需求项名称
     */
    @JSONField(name = "pssysreqitemname")
    @JsonProperty("pssysreqitemname")
    private String pssysreqitemname;

    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;

    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;

    /**
     * 代码标识
     */
    @JSONField(name = "codename")
    @JsonProperty("codename")
    private String codename;

    /**
     * 项编号
     */
    @JSONField(name = "itemsn")
    @JsonProperty("itemsn")
    private String itemsn;

    /**
     * 项标记
     */
    @JSONField(name = "itemtag")
    @JsonProperty("itemtag")
    private String itemtag;

    /**
     * 项标记2
     */
    @JSONField(name = "itemtag2")
    @JsonProperty("itemtag2")
    private String itemtag2;

    /**
     * 项类型
     */
    @JSONField(name = "itemtype")
    @JsonProperty("itemtype")
    private String itemtype;

    /**
     * 备注
     */
    @JSONField(name = "memo")
    @JsonProperty("memo")
    private String memo;

    /**
     * 次序
     */
    @DEField(preType = DEPredefinedFieldType.ORDERVALUE)
    @JSONField(name = "ordervalue")
    @JsonProperty("ordervalue")
    private Integer ordervalue;

    /**
     * 内容
     */
    @JSONField(name = "reqcontent")
    @JsonProperty("reqcontent")
    private String reqcontent;

    /**
     * 用户标记2
     */
    @JSONField(name = "usertag2")
    @JsonProperty("usertag2")
    private String usertag2;

    /**
     * 用户标记
     */
    @JSONField(name = "usertag")
    @JsonProperty("usertag")
    private String usertag;

    /**
     * 用户分类
     */
    @JSONField(name = "usercat")
    @JsonProperty("usercat")
    private String usercat;

    /**
     * 用户标记3
     */
    @JSONField(name = "usertag3")
    @JsonProperty("usertag3")
    private String usertag3;

    /**
     * 用户标记4
     */
    @JSONField(name = "usertag4")
    @JsonProperty("usertag4")
    private String usertag4;

    /**
     * 版本
     */
    @DEField(defaultValue = "1")
    @JSONField(name = "ver")
    @JsonProperty("ver")
    private Integer ver;

    /**
     * 是否有效
     */
    @DEField(defaultValue = "1")
    @JSONField(name = "validflag")
    @JsonProperty("validflag")
    private Integer validflag;

    /**
     * 父需求项
     */
    @JSONField(name = "ppssysreqitemid")
    @JsonProperty("ppssysreqitemid")
    private String ppssysreqitemid;

    /**
     * 父需求项
     */
    @JSONField(name = "ppssysreqitemname")
    @JsonProperty("ppssysreqitemname")
    private String ppssysreqitemname;

    /**
     * 需求模块
     */
    @JSONField(name = "pssysreqmoduleid")
    @JsonProperty("pssysreqmoduleid")
    private String pssysreqmoduleid;

    /**
     * 需求模块
     */
    @JSONField(name = "pssysreqmodulename")
    @JsonProperty("pssysreqmodulename")
    private String pssysreqmodulename;

    /**
     * 系统
     */
    @JSONField(name = "pssystemid")
    @JsonProperty("pssystemid")
    private String pssystemid;

    /**
     * 系统
     */
    @JSONField(name = "pssystemname")
    @JsonProperty("pssystemname")
    private String pssystemname;

    /**
     * 系统用例
     */
    @JSONField(name = "pssysusercaseid")
    @JsonProperty("pssysusercaseid")
    private String pssysusercaseid;

    /**
     * 系统用例
     */
    @JSONField(name = "pssysusercasename")
    @JsonProperty("pssysusercasename")
    private String pssysusercasename;


    /**
     * 
     */
    @JSONField(name = "ppsysreqitem")
    @JsonProperty("ppsysreqitem")
    private cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqItem ppsysreqitem;

    /**
     * 
     */
    @JSONField(name = "pssysreqmodule")
    @JsonProperty("pssysreqmodule")
    private cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqModule pssysreqmodule;




    /**
     * 设置 [系统需求项名称]
     */
    public void setPssysreqitemname(String pssysreqitemname){
        this.pssysreqitemname = pssysreqitemname ;
        this.modify("pssysreqitemname",pssysreqitemname);
    }

    /**
     * 设置 [代码标识]
     */
    public void setCodename(String codename){
        this.codename = codename ;
        this.modify("codename",codename);
    }

    /**
     * 设置 [项编号]
     */
    public void setItemsn(String itemsn){
        this.itemsn = itemsn ;
        this.modify("itemsn",itemsn);
    }

    /**
     * 设置 [项标记]
     */
    public void setItemtag(String itemtag){
        this.itemtag = itemtag ;
        this.modify("itemtag",itemtag);
    }

    /**
     * 设置 [项标记2]
     */
    public void setItemtag2(String itemtag2){
        this.itemtag2 = itemtag2 ;
        this.modify("itemtag2",itemtag2);
    }

    /**
     * 设置 [项类型]
     */
    public void setItemtype(String itemtype){
        this.itemtype = itemtype ;
        this.modify("itemtype",itemtype);
    }

    /**
     * 设置 [备注]
     */
    public void setMemo(String memo){
        this.memo = memo ;
        this.modify("memo",memo);
    }

    /**
     * 设置 [内容]
     */
    public void setReqcontent(String reqcontent){
        this.reqcontent = reqcontent ;
        this.modify("reqcontent",reqcontent);
    }

    /**
     * 设置 [用户标记2]
     */
    public void setUsertag2(String usertag2){
        this.usertag2 = usertag2 ;
        this.modify("usertag2",usertag2);
    }

    /**
     * 设置 [用户标记]
     */
    public void setUsertag(String usertag){
        this.usertag = usertag ;
        this.modify("usertag",usertag);
    }

    /**
     * 设置 [用户分类]
     */
    public void setUsercat(String usercat){
        this.usercat = usercat ;
        this.modify("usercat",usercat);
    }

    /**
     * 设置 [用户标记3]
     */
    public void setUsertag3(String usertag3){
        this.usertag3 = usertag3 ;
        this.modify("usertag3",usertag3);
    }

    /**
     * 设置 [用户标记4]
     */
    public void setUsertag4(String usertag4){
        this.usertag4 = usertag4 ;
        this.modify("usertag4",usertag4);
    }

    /**
     * 设置 [版本]
     */
    public void setVer(Integer ver){
        this.ver = ver ;
        this.modify("ver",ver);
    }

    /**
     * 设置 [是否有效]
     */
    public void setValidflag(Integer validflag){
        this.validflag = validflag ;
        this.modify("validflag",validflag);
    }

    /**
     * 设置 [父需求项]
     */
    public void setPpssysreqitemid(String ppssysreqitemid){
        this.ppssysreqitemid = ppssysreqitemid ;
        this.modify("ppssysreqitemid",ppssysreqitemid);
    }

    /**
     * 设置 [需求模块]
     */
    public void setPssysreqmoduleid(String pssysreqmoduleid){
        this.pssysreqmoduleid = pssysreqmoduleid ;
        this.modify("pssysreqmoduleid",pssysreqmoduleid);
    }

    /**
     * 设置 [系统]
     */
    public void setPssystemid(String pssystemid){
        this.pssystemid = pssystemid ;
        this.modify("pssystemid",pssystemid);
    }

    /**
     * 设置 [系统]
     */
    public void setPssystemname(String pssystemname){
        this.pssystemname = pssystemname ;
        this.modify("pssystemname",pssystemname);
    }

    /**
     * 设置 [系统用例]
     */
    public void setPssysusercaseid(String pssysusercaseid){
        this.pssysusercaseid = pssysusercaseid ;
        this.modify("pssysusercaseid",pssysusercaseid);
    }

    /**
     * 设置 [系统用例]
     */
    public void setPssysusercasename(String pssysusercasename){
        this.pssysusercasename = pssysusercasename ;
        this.modify("pssysusercasename",pssysusercasename);
    }


}


