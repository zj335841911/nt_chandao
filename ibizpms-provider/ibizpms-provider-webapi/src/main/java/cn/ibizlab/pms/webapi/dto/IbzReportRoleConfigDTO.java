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
 * 服务DTO对象[IbzReportRoleConfigDTO]
 */
@Data
public class IbzReportRoleConfigDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [IBZ_REPORT_ROLE_CONFIGNAME]
     *
     */
    @JSONField(name = "ibzreportroleconfigname")
    @JsonProperty("ibzreportroleconfigname")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String ibzreportroleconfigname;

    /**
     * 属性 [IBZ_REPORT_ROLE_CONFIGID]
     *
     */
    @JSONField(name = "ibzreportroleconfigid")
    @JsonProperty("ibzreportroleconfigid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String ibzreportroleconfigid;

    /**
     * 属性 [CREATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 属性 [CREATEMAN]
     *
     */
    @JSONField(name = "createman")
    @JsonProperty("createman")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String createman;

    /**
     * 属性 [UPDATEMAN]
     *
     */
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String updateman;

    /**
     * 属性 [UPDATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;

    /**
     * 属性 [REPORT_ROLE]
     *
     */
    @JSONField(name = "report_role")
    @JsonProperty("report_role")
    @Size(min = 0, max = 2000, message = "内容长度必须小于等于[2000]")
    private String reportRole;

    /**
     * 属性 [TYPE]
     *
     */
    @JSONField(name = "type")
    @JsonProperty("type")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String type;


    /**
     * 设置 [IBZ_REPORT_ROLE_CONFIGNAME]
     */
    public void setIbzreportroleconfigname(String  ibzreportroleconfigname){
        this.ibzreportroleconfigname = ibzreportroleconfigname ;
        this.modify("ibz_report_role_configname",ibzreportroleconfigname);
    }

    /**
     * 设置 [REPORT_ROLE]
     */
    public void setReportRole(String  reportRole){
        this.reportRole = reportRole ;
        this.modify("report_role",reportRole);
    }

    /**
     * 设置 [TYPE]
     */
    public void setType(String  type){
        this.type = type ;
        this.modify("type",type);
    }


}

