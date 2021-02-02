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
 * 服务DTO对象[CompanyStatsDTO]
 */
@Data
public class CompanyStatsDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [LOGINCNT]
     *
     */
    @JSONField(name = "logincnt")
    @JsonProperty("logincnt")
    private Integer logincnt;

    /**
     * 属性 [OPENEDSTORYCNT]
     *
     */
    @JSONField(name = "openedstorycnt")
    @JsonProperty("openedstorycnt")
    private Integer openedstorycnt;

    /**
     * 属性 [ZTDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "ztdate" , format="yyyy-MM-dd")
    @JsonProperty("ztdate")
    private Timestamp ztdate;

    /**
     * 属性 [DATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;

    /**
     * 属性 [CLOSEDSTORYCNT]
     *
     */
    @JSONField(name = "closedstorycnt")
    @JsonProperty("closedstorycnt")
    private Integer closedstorycnt;

    /**
     * 属性 [OPENEDBUGCNT]
     *
     */
    @JSONField(name = "openedbugcnt")
    @JsonProperty("openedbugcnt")
    private Integer openedbugcnt;

    /**
     * 属性 [LOGHOURS]
     *
     */
    @JSONField(name = "loghours")
    @JsonProperty("loghours")
    private Integer loghours;

    /**
     * 属性 [DYNAMICCNT]
     *
     */
    @JSONField(name = "dynamiccnt")
    @JsonProperty("dynamiccnt")
    private Integer dynamiccnt;

    /**
     * 属性 [FINISHEDTASKCNT]
     *
     */
    @JSONField(name = "finishedtaskcnt")
    @JsonProperty("finishedtaskcnt")
    private Integer finishedtaskcnt;

    /**
     * 属性 [RESOLVEDBUGCNT]
     *
     */
    @JSONField(name = "resolvedbugcnt")
    @JsonProperty("resolvedbugcnt")
    private Integer resolvedbugcnt;

    /**
     * 属性 [COMMENT]
     *
     */
    @JSONField(name = "comment")
    @JsonProperty("comment")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    private String comment;

    /**
     * 属性 [OPENEDTASKCNT]
     *
     */
    @JSONField(name = "openedtaskcnt")
    @JsonProperty("openedtaskcnt")
    private Integer openedtaskcnt;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;


    /**
     * 设置 [DATE]
     */
    public void setDate(Timestamp  date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 设置 [COMMENT]
     */
    public void setComment(String  comment){
        this.comment = comment ;
        this.modify("comment",comment);
    }


}


