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
 * 服务DTO对象[UserYearWorkStatsDTO]
 */
@Data
public class UserYearWorkStatsDTO extends DTOBase implements Serializable {

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
     * 属性 [REALNAME]
     *
     */
    @JSONField(name = "realname")
    @JsonProperty("realname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String realname;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String account;

    /**
     * 属性 [ROLE]
     *
     */
    @JSONField(name = "role")
    @JsonProperty("role")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String role;

    /**
     * 属性 [DEPT]
     *
     */
    @JSONField(name = "dept")
    @JsonProperty("dept")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String dept;

    /**
     * 属性 [VISITS]
     *
     */
    @JSONField(name = "visits")
    @JsonProperty("visits")
    private Integer visits;

    /**
     * 属性 [YEARPLANCNT]
     *
     */
    @JSONField(name = "yearplancnt")
    @JsonProperty("yearplancnt")
    private Integer yearplancnt;

    /**
     * 属性 [YEARPRODUCTCNT]
     *
     */
    @JSONField(name = "yearproductcnt")
    @JsonProperty("yearproductcnt")
    private Integer yearproductcnt;

    /**
     * 属性 [YEARSTORYCNT]
     *
     */
    @JSONField(name = "yearstorycnt")
    @JsonProperty("yearstorycnt")
    private Integer yearstorycnt;

    /**
     * 属性 [YEARACTIONCNT]
     *
     */
    @JSONField(name = "yearactioncnt")
    @JsonProperty("yearactioncnt")
    private Integer yearactioncnt;

    /**
     * 属性 [YEARBUGCNT]
     *
     */
    @JSONField(name = "yearbugcnt")
    @JsonProperty("yearbugcnt")
    private Integer yearbugcnt;

    /**
     * 属性 [YEARCASECNT]
     *
     */
    @JSONField(name = "yearcasecnt")
    @JsonProperty("yearcasecnt")
    private Integer yearcasecnt;

    /**
     * 属性 [YEARLOGCNT]
     *
     */
    @JSONField(name = "yearlogcnt")
    @JsonProperty("yearlogcnt")
    private Integer yearlogcnt;

    /**
     * 属性 [YEARESTIMATECNT]
     *
     */
    @JSONField(name = "yearestimatecnt")
    @JsonProperty("yearestimatecnt")
    private Integer yearestimatecnt;

    /**
     * 属性 [JUDGEROLE]
     *
     */
    @JSONField(name = "judgerole")
    @JsonProperty("judgerole")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String judgerole;

    /**
     * 属性 [YEARVISITS]
     *
     */
    @JSONField(name = "yearvisits")
    @JsonProperty("yearvisits")
    private Integer yearvisits;

    /**
     * 属性 [CURYEAR]
     *
     */
    @JSONField(name = "curyear")
    @JsonProperty("curyear")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String curyear;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String title;


    /**
     * 设置 [REALNAME]
     */
    public void setRealname(String  realname){
        this.realname = realname ;
        this.modify("realname",realname);
    }

    /**
     * 设置 [ACCOUNT]
     */
    public void setAccount(String  account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [ROLE]
     */
    public void setRole(String  role){
        this.role = role ;
        this.modify("role",role);
    }

    /**
     * 设置 [DEPT]
     */
    public void setDept(String  dept){
        this.dept = dept ;
        this.modify("dept",dept);
    }

    /**
     * 设置 [VISITS]
     */
    public void setVisits(Integer  visits){
        this.visits = visits ;
        this.modify("visits",visits);
    }


}


