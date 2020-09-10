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
 * ServiceApi [外部服务接口] 对象
 */
@Data
public class PSSubSysServiceAPI extends EntityClient implements Serializable {

    /**
     * 外部服务接口名称
     */
    @JSONField(name = "pssubsysserviceapiname")
    @JsonProperty("pssubsysserviceapiname")
    private String pssubsysserviceapiname;

    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;

    /**
     * 外部服务接口标识
     */
    @DEField(isKeyField=true)
    @JSONField(name = "pssubsysserviceapiid")
    @JsonProperty("pssubsysserviceapiid")
    private String pssubsysserviceapiid;

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
     * 系统模块
     */
    @JSONField(name = "psmodulename")
    @JsonProperty("psmodulename")
    private String psmodulename;

    /**
     * 系统模块
     */
    @JSONField(name = "psmoduleid")
    @JsonProperty("psmoduleid")
    private String psmoduleid;

    /**
     * 系统服务接口
     */
    @JSONField(name = "pssysserviceapiname")
    @JsonProperty("pssysserviceapiname")
    private String pssysserviceapiname;

    /**
     * 系统服务接口
     */
    @JSONField(name = "pssysserviceapiid")
    @JsonProperty("pssysserviceapiid")
    private String pssysserviceapiid;

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
     * 
     */
    @JSONField(name = "psmodule")
    @JsonProperty("psmodule")
    private cn.ibizlab.pms.core.ibizsysmodel.domain.PSModule psmodule;

    /**
     * 
     */
    @JSONField(name = "pssysserviceapi")
    @JsonProperty("pssysserviceapi")
    private cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysServiceAPI pssysserviceapi;




    /**
     * 设置 [外部服务接口名称]
     */
    public void setPssubsysserviceapiname(String pssubsysserviceapiname){
        this.pssubsysserviceapiname = pssubsysserviceapiname ;
        this.modify("pssubsysserviceapiname",pssubsysserviceapiname);
    }

    /**
     * 设置 [系统模块]
     */
    public void setPsmoduleid(String psmoduleid){
        this.psmoduleid = psmoduleid ;
        this.modify("psmoduleid",psmoduleid);
    }

    /**
     * 设置 [系统服务接口]
     */
    public void setPssysserviceapiid(String pssysserviceapiid){
        this.pssysserviceapiid = pssysserviceapiid ;
        this.modify("pssysserviceapiid",pssysserviceapiid);
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


}


