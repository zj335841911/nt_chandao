package cn.ibizlab.pms.util.ibizsysmodel.domain;

import cn.ibizlab.pms.util.annotation.DEField;
import cn.ibizlab.pms.util.domain.EntityClient;
import cn.ibizlab.pms.util.enums.DEPredefinedFieldType;
import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * ServiceApi [实体] 对象
 */
@Data
public class PSDataEntity extends EntityClient implements Serializable {

    /**
     * 实体名称
     */
    @JSONField(name = "psdataentityname")
    @JsonProperty("psdataentityname")
    private String psdataentityname;

    /**
     * 实体标识
     */
    @DEField(isKeyField=true)
    @JSONField(name = "psdataentityid")
    @JsonProperty("psdataentityid")
    private String psdataentityid;

    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;

    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;

    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;

    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 模块颜色
     */
    @JSONField(name = "modcolor")
    @JsonProperty("modcolor")
    private String modcolor;

    /**
     * 系统模块
     */
    @JSONField(name = "psmodulename")
    @JsonProperty("psmodulename")
    private String psmodulename;

    /**
     * 子系统实体
     */
    @JSONField(name = "subsysmodule")
    @JsonProperty("subsysmodule")
    private Integer subsysmodule;

    /**
     * 系统模块
     */
    @JSONField(name = "psmoduleid")
    @JsonProperty("psmoduleid")
    private String psmoduleid;

    /**
     * 代码名称
     */
    @JSONField(name = "codename")
    @JsonProperty("codename")
    private String codename;

    /**
     * 显示颜色
     */
    @JSONField(name = "color")
    @JsonProperty("color")
    private String color;

    /**
     * 实体编号
     */
    @JSONField(name = "desn")
    @JsonProperty("desn")
    private String desn;

    /**
     * 实体类别
     */
    @DEField(defaultValue = "DEFAULT")
    @JSONField(name = "decat")
    @JsonProperty("decat")
    private String decat;

    /**
     * 实体标记2
     */
    @JSONField(name = "detag2")
    @JsonProperty("detag2")
    private String detag2;

    /**
     * 实体标记
     */
    @JSONField(name = "detag")
    @JsonProperty("detag")
    private String detag;

    /**
     * 扩展模式
     */
    @JSONField(name = "dynamicmode")
    @JsonProperty("dynamicmode")
    private Integer dynamicmode;

    /**
     * 实体类型
     */
    @DEField(defaultValue = "1")
    @JSONField(name = "detype")
    @JsonProperty("detype")
    private Integer detype;

    /**
     * 索引类型
     */
    @JSONField(name = "indexdetype")
    @JsonProperty("indexdetype")
    private String indexdetype;

    /**
     * 现有数据结构
     */
    @DEField(defaultValue = "0")
    @JSONField(name = "existingmodel")
    @JsonProperty("existingmodel")
    private Integer existingmodel;

    /**
     * 用户表
     */
    @JSONField(name = "extablename")
    @JsonProperty("extablename")
    private String extablename;

    /**
     * 模型锁模式
     */
    @JSONField(name = "lockflag")
    @JsonProperty("lockflag")
    private Integer lockflag;

    /**
     * 主键规则
     */
    @JSONField(name = "keyrule")
    @JsonProperty("keyrule")
    private String keyrule;

    /**
     * 逻辑无效值
     */
    @JSONField(name = "logicinvalidvalue")
    @JsonProperty("logicinvalidvalue")
    private String logicinvalidvalue;

    /**
     * 中文名称
     */
    @JSONField(name = "logicname")
    @JsonProperty("logicname")
    private String logicname;

    /**
     * 备注
     */
    @JSONField(name = "memo")
    @JsonProperty("memo")
    private String memo;

    /**
     * 启用逻辑有效
     */
    @DEField(defaultValue = "0")
    @JSONField(name = "logicvalid")
    @JsonProperty("logicvalid")
    private Integer logicvalid;

    /**
     * 逻辑有效值
     */
    @JSONField(name = "logicvalidvalue")
    @JsonProperty("logicvalidvalue")
    private String logicvalidvalue;

    /**
     * 系统实体
     */
    @DEField(defaultValue = "0")
    @JSONField(name = "systemflag")
    @JsonProperty("systemflag")
    private Integer systemflag;

    /**
     * 主表名称
     */
    @JSONField(name = "tablename")
    @JsonProperty("tablename")
    private String tablename;

    /**
     * 用户分类
     */
    @JSONField(name = "usercat")
    @JsonProperty("usercat")
    private String usercat;

    /**
     * 用户标记
     */
    @JSONField(name = "usertag")
    @JsonProperty("usertag")
    private String usertag;

    /**
     * 用户标记3
     */
    @JSONField(name = "usertag3")
    @JsonProperty("usertag3")
    private String usertag3;

    /**
     * 用户标记2
     */
    @JSONField(name = "usertag2")
    @JsonProperty("usertag2")
    private String usertag2;

    /**
     * 是否启用
     */
    @DEField(defaultValue = "1")
    @JSONField(name = "validflag")
    @JsonProperty("validflag")
    private Integer validflag;

    /**
     * 用户标记4
     */
    @JSONField(name = "usertag4")
    @JsonProperty("usertag4")
    private String usertag4;

    /**
     * 系统
     */
    @JSONField(name = "systemid")
    @JsonProperty("systemid")
    private String systemid;

    /**
     * 系统
     */
    @JSONField(name = "systemname")
    @JsonProperty("systemname")
    private String systemname;


    /**
     * 
     */
    @JSONField(name = "psmodule")
    @JsonProperty("psmodule")
    private cn.ibizlab.pms.util.ibizsysmodel.domain.PSModule psmodule;




    /**
     * 设置 [实体名称]
     */
    public void setPsdataentityname(String psdataentityname){
        this.psdataentityname = psdataentityname ;
        this.modify("psdataentityname",psdataentityname);
    }

    /**
     * 设置 [系统模块]
     */
    public void setPsmoduleid(String psmoduleid){
        this.psmoduleid = psmoduleid ;
        this.modify("psmoduleid",psmoduleid);
    }

    /**
     * 设置 [代码名称]
     */
    public void setCodename(String codename){
        this.codename = codename ;
        this.modify("codename",codename);
    }

    /**
     * 设置 [显示颜色]
     */
    public void setColor(String color){
        this.color = color ;
        this.modify("color",color);
    }

    /**
     * 设置 [实体编号]
     */
    public void setDesn(String desn){
        this.desn = desn ;
        this.modify("desn",desn);
    }

    /**
     * 设置 [实体类别]
     */
    public void setDecat(String decat){
        this.decat = decat ;
        this.modify("decat",decat);
    }

    /**
     * 设置 [实体标记2]
     */
    public void setDetag2(String detag2){
        this.detag2 = detag2 ;
        this.modify("detag2",detag2);
    }

    /**
     * 设置 [实体标记]
     */
    public void setDetag(String detag){
        this.detag = detag ;
        this.modify("detag",detag);
    }

    /**
     * 设置 [扩展模式]
     */
    public void setDynamicmode(Integer dynamicmode){
        this.dynamicmode = dynamicmode ;
        this.modify("dynamicmode",dynamicmode);
    }

    /**
     * 设置 [实体类型]
     */
    public void setDetype(Integer detype){
        this.detype = detype ;
        this.modify("detype",detype);
    }

    /**
     * 设置 [索引类型]
     */
    public void setIndexdetype(String indexdetype){
        this.indexdetype = indexdetype ;
        this.modify("indexdetype",indexdetype);
    }

    /**
     * 设置 [现有数据结构]
     */
    public void setExistingmodel(Integer existingmodel){
        this.existingmodel = existingmodel ;
        this.modify("existingmodel",existingmodel);
    }

    /**
     * 设置 [用户表]
     */
    public void setExtablename(String extablename){
        this.extablename = extablename ;
        this.modify("extablename",extablename);
    }

    /**
     * 设置 [模型锁模式]
     */
    public void setLockflag(Integer lockflag){
        this.lockflag = lockflag ;
        this.modify("lockflag",lockflag);
    }

    /**
     * 设置 [主键规则]
     */
    public void setKeyrule(String keyrule){
        this.keyrule = keyrule ;
        this.modify("keyrule",keyrule);
    }

    /**
     * 设置 [逻辑无效值]
     */
    public void setLogicinvalidvalue(String logicinvalidvalue){
        this.logicinvalidvalue = logicinvalidvalue ;
        this.modify("logicinvalidvalue",logicinvalidvalue);
    }

    /**
     * 设置 [中文名称]
     */
    public void setLogicname(String logicname){
        this.logicname = logicname ;
        this.modify("logicname",logicname);
    }

    /**
     * 设置 [备注]
     */
    public void setMemo(String memo){
        this.memo = memo ;
        this.modify("memo",memo);
    }

    /**
     * 设置 [启用逻辑有效]
     */
    public void setLogicvalid(Integer logicvalid){
        this.logicvalid = logicvalid ;
        this.modify("logicvalid",logicvalid);
    }

    /**
     * 设置 [逻辑有效值]
     */
    public void setLogicvalidvalue(String logicvalidvalue){
        this.logicvalidvalue = logicvalidvalue ;
        this.modify("logicvalidvalue",logicvalidvalue);
    }

    /**
     * 设置 [系统实体]
     */
    public void setSystemflag(Integer systemflag){
        this.systemflag = systemflag ;
        this.modify("systemflag",systemflag);
    }

    /**
     * 设置 [主表名称]
     */
    public void setTablename(String tablename){
        this.tablename = tablename ;
        this.modify("tablename",tablename);
    }

    /**
     * 设置 [用户分类]
     */
    public void setUsercat(String usercat){
        this.usercat = usercat ;
        this.modify("usercat",usercat);
    }

    /**
     * 设置 [用户标记]
     */
    public void setUsertag(String usertag){
        this.usertag = usertag ;
        this.modify("usertag",usertag);
    }

    /**
     * 设置 [用户标记3]
     */
    public void setUsertag3(String usertag3){
        this.usertag3 = usertag3 ;
        this.modify("usertag3",usertag3);
    }

    /**
     * 设置 [用户标记2]
     */
    public void setUsertag2(String usertag2){
        this.usertag2 = usertag2 ;
        this.modify("usertag2",usertag2);
    }

    /**
     * 设置 [是否启用]
     */
    public void setValidflag(Integer validflag){
        this.validflag = validflag ;
        this.modify("validflag",validflag);
    }

    /**
     * 设置 [用户标记4]
     */
    public void setUsertag4(String usertag4){
        this.usertag4 = usertag4 ;
        this.modify("usertag4",usertag4);
    }

    /**
     * 设置 [系统]
     */
    public void setSystemid(String systemid){
        this.systemid = systemid ;
        this.modify("systemid",systemid);
    }

    /**
     * 设置 [系统]
     */
    public void setSystemname(String systemname){
        this.systemname = systemname ;
        this.modify("systemname",systemname);
    }


}


