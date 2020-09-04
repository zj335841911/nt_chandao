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
 * ServiceApi [实体属性] 对象
 */
@Data
public class PSDEField extends EntityClient implements Serializable {

    /**
     * 实体属性标识
     */
    @DEField(isKeyField=true)
    @JSONField(name = "psdefieldid")
    @JsonProperty("psdefieldid")
    private String psdefieldid;

    /**
     * 实体属性名称
     */
    @JSONField(name = "psdefieldname")
    @JsonProperty("psdefieldname")
    private String psdefieldname;

    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;

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
     * 代码名称
     */
    @JSONField(name = "codename")
    @JsonProperty("codename")
    private String codename;

    /**
     * 属性类型
     */
    @JSONField(name = "deftype")
    @JsonProperty("deftype")
    private Integer deftype;

    /**
     * 属性默认值
     */
    @JSONField(name = "defaultvalue")
    @JsonProperty("defaultvalue")
    private String defaultvalue;

    /**
     * 允许为空
     */
    @DEField(defaultValue = "1")
    @JSONField(name = "allowempty")
    @JsonProperty("allowempty")
    private Integer allowempty;

    /**
     * 默认值类型
     */
    @DEField(name = "dvt")
    @JSONField(name = "defaultvaluetype")
    @JsonProperty("defaultvaluetype")
    private String defaultvaluetype;

    /**
     * 外键属性
     */
    @DEField(defaultValue = "0")
    @JSONField(name = "fkey")
    @JsonProperty("fkey")
    private Integer fkey;

    /**
     * 数据导入识别
     */
    @JSONField(name = "importkey")
    @JsonProperty("importkey")
    private Integer importkey;

    /**
     * 数据导入次序
     */
    @JSONField(name = "importorder")
    @JsonProperty("importorder")
    private Integer importorder;

    /**
     * 索引类型属性
     */
    @JSONField(name = "indextype")
    @JsonProperty("indextype")
    private Integer indextype;

    /**
     * 长度
     */
    @JSONField(name = "length")
    @JsonProperty("length")
    private Integer length;

    /**
     * 数据导入标识
     */
    @JSONField(name = "importtag")
    @JsonProperty("importtag")
    private String importtag;

    /**
     * 备注
     */
    @JSONField(name = "memo")
    @JsonProperty("memo")
    private String memo;

    /**
     * 中文名称
     */
    @JSONField(name = "logicname")
    @JsonProperty("logicname")
    private String logicname;

    /**
     * 排序值
     */
    @DEField(preType = DEPredefinedFieldType.ORDERVALUE)
    @JSONField(name = "ordervalue")
    @JsonProperty("ordervalue")
    private Integer ordervalue;

    /**
     * 主信息属性
     */
    @DEField(defaultValue = "0")
    @JSONField(name = "majorfield")
    @JsonProperty("majorfield")
    private Integer majorfield;

    /**
     * 物理化属性
     */
    @JSONField(name = "physicalfield")
    @JsonProperty("physicalfield")
    private Integer physicalfield;

    /**
     * 主键属性
     */
    @DEField(defaultValue = "0")
    @JSONField(name = "pkey")
    @JsonProperty("pkey")
    private Integer pkey;

    /**
     * 浮点精度
     */
    @JSONField(name = "precision2")
    @JsonProperty("precision2")
    private Integer precision2;

    /**
     * 数据类型
     */
    @JSONField(name = "psdatatypename")
    @JsonProperty("psdatatypename")
    private String psdatatypename;

    /**
     * 系统预置属性
     */
    @JSONField(name = "predefinetype")
    @JsonProperty("predefinetype")
    private String predefinetype;

    /**
     * 字符长度
     */
    @JSONField(name = "strlength")
    @JsonProperty("strlength")
    private Integer strlength;

    /**
     * 数据类型
     */
    @JSONField(name = "psdatatypeid")
    @JsonProperty("psdatatypeid")
    private String psdatatypeid;

    /**
     * 单位
     */
    @JSONField(name = "unit")
    @JsonProperty("unit")
    private String unit;

    /**
     * 表名称
     */
    @JSONField(name = "tablename")
    @JsonProperty("tablename")
    private String tablename;

    /**
     * 联合键值
     */
    @JSONField(name = "unionkeyvalue")
    @JsonProperty("unionkeyvalue")
    private String unionkeyvalue;

    /**
     * 单位宽度
     */
    @JSONField(name = "unitwidth")
    @JsonProperty("unitwidth")
    private Integer unitwidth;

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
     * 用户标记2
     */
    @JSONField(name = "usertag2")
    @JsonProperty("usertag2")
    private String usertag2;

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
     * 是否启用
     */
    @DEField(defaultValue = "1")
    @JSONField(name = "validflag")
    @JsonProperty("validflag")
    private Integer validflag;

    /**
     * 实体
     */
    @JSONField(name = "psdeid")
    @JsonProperty("psdeid")
    private String psdeid;

    /**
     * 实体
     */
    @JSONField(name = "psdename")
    @JsonProperty("psdename")
    private String psdename;

    /**
     * 服务代码名称
     */
    @JSONField(name = "servicecodename")
    @JsonProperty("servicecodename")
    private String servicecodename;





    /**
     * 设置 [实体属性名称]
     */
    public void setPsdefieldname(String psdefieldname){
        this.psdefieldname = psdefieldname ;
        this.modify("psdefieldname",psdefieldname);
    }

    /**
     * 设置 [代码名称]
     */
    public void setCodename(String codename){
        this.codename = codename ;
        this.modify("codename",codename);
    }

    /**
     * 设置 [属性类型]
     */
    public void setDeftype(Integer deftype){
        this.deftype = deftype ;
        this.modify("deftype",deftype);
    }

    /**
     * 设置 [属性默认值]
     */
    public void setDefaultvalue(String defaultvalue){
        this.defaultvalue = defaultvalue ;
        this.modify("defaultvalue",defaultvalue);
    }

    /**
     * 设置 [允许为空]
     */
    public void setAllowempty(Integer allowempty){
        this.allowempty = allowempty ;
        this.modify("allowempty",allowempty);
    }

    /**
     * 设置 [默认值类型]
     */
    public void setDefaultvaluetype(String defaultvaluetype){
        this.defaultvaluetype = defaultvaluetype ;
        this.modify("dvt",defaultvaluetype);
    }

    /**
     * 设置 [外键属性]
     */
    public void setFkey(Integer fkey){
        this.fkey = fkey ;
        this.modify("fkey",fkey);
    }

    /**
     * 设置 [数据导入识别]
     */
    public void setImportkey(Integer importkey){
        this.importkey = importkey ;
        this.modify("importkey",importkey);
    }

    /**
     * 设置 [数据导入次序]
     */
    public void setImportorder(Integer importorder){
        this.importorder = importorder ;
        this.modify("importorder",importorder);
    }

    /**
     * 设置 [索引类型属性]
     */
    public void setIndextype(Integer indextype){
        this.indextype = indextype ;
        this.modify("indextype",indextype);
    }

    /**
     * 设置 [长度]
     */
    public void setLength(Integer length){
        this.length = length ;
        this.modify("length",length);
    }

    /**
     * 设置 [数据导入标识]
     */
    public void setImporttag(String importtag){
        this.importtag = importtag ;
        this.modify("importtag",importtag);
    }

    /**
     * 设置 [备注]
     */
    public void setMemo(String memo){
        this.memo = memo ;
        this.modify("memo",memo);
    }

    /**
     * 设置 [中文名称]
     */
    public void setLogicname(String logicname){
        this.logicname = logicname ;
        this.modify("logicname",logicname);
    }

    /**
     * 设置 [主信息属性]
     */
    public void setMajorfield(Integer majorfield){
        this.majorfield = majorfield ;
        this.modify("majorfield",majorfield);
    }

    /**
     * 设置 [物理化属性]
     */
    public void setPhysicalfield(Integer physicalfield){
        this.physicalfield = physicalfield ;
        this.modify("physicalfield",physicalfield);
    }

    /**
     * 设置 [主键属性]
     */
    public void setPkey(Integer pkey){
        this.pkey = pkey ;
        this.modify("pkey",pkey);
    }

    /**
     * 设置 [浮点精度]
     */
    public void setPrecision2(Integer precision2){
        this.precision2 = precision2 ;
        this.modify("precision2",precision2);
    }

    /**
     * 设置 [数据类型]
     */
    public void setPsdatatypename(String psdatatypename){
        this.psdatatypename = psdatatypename ;
        this.modify("psdatatypename",psdatatypename);
    }

    /**
     * 设置 [系统预置属性]
     */
    public void setPredefinetype(String predefinetype){
        this.predefinetype = predefinetype ;
        this.modify("predefinetype",predefinetype);
    }

    /**
     * 设置 [字符长度]
     */
    public void setStrlength(Integer strlength){
        this.strlength = strlength ;
        this.modify("strlength",strlength);
    }

    /**
     * 设置 [数据类型]
     */
    public void setPsdatatypeid(String psdatatypeid){
        this.psdatatypeid = psdatatypeid ;
        this.modify("psdatatypeid",psdatatypeid);
    }

    /**
     * 设置 [单位]
     */
    public void setUnit(String unit){
        this.unit = unit ;
        this.modify("unit",unit);
    }

    /**
     * 设置 [表名称]
     */
    public void setTablename(String tablename){
        this.tablename = tablename ;
        this.modify("tablename",tablename);
    }

    /**
     * 设置 [联合键值]
     */
    public void setUnionkeyvalue(String unionkeyvalue){
        this.unionkeyvalue = unionkeyvalue ;
        this.modify("unionkeyvalue",unionkeyvalue);
    }

    /**
     * 设置 [单位宽度]
     */
    public void setUnitwidth(Integer unitwidth){
        this.unitwidth = unitwidth ;
        this.modify("unitwidth",unitwidth);
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
     * 设置 [用户标记2]
     */
    public void setUsertag2(String usertag2){
        this.usertag2 = usertag2 ;
        this.modify("usertag2",usertag2);
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
     * 设置 [是否启用]
     */
    public void setValidflag(Integer validflag){
        this.validflag = validflag ;
        this.modify("validflag",validflag);
    }

    /**
     * 设置 [实体]
     */
    public void setPsdeid(String psdeid){
        this.psdeid = psdeid ;
        this.modify("psdeid",psdeid);
    }

    /**
     * 设置 [实体]
     */
    public void setPsdename(String psdename){
        this.psdename = psdename ;
        this.modify("psdename",psdename);
    }

    /**
     * 设置 [服务代码名称]
     */
    public void setServicecodename(String servicecodename){
        this.servicecodename = servicecodename ;
        this.modify("servicecodename",servicecodename);
    }


}


