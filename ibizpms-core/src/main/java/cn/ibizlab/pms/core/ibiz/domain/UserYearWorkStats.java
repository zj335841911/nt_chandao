package cn.ibizlab.pms.core.ibiz.domain;

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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

/**
 * 实体[用户年度工作内容统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_user",resultMap = "UserYearWorkStatsResultMap")
public class UserYearWorkStats extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 真实用户名
     */
    @TableField(value = "`realname`")
    @JSONField(name = "realname")
    @JsonProperty("realname")
    private String realname;
    /**
     * 账号
     */
    @TableField(value = "`account`")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * 角色
     */
    @TableField(value = "`role`")
    @JSONField(name = "role")
    @JsonProperty("role")
    private String role;
    /**
     * 部门编号
     */
    @TableField(value = "`dept`")
    @JSONField(name = "dept")
    @JsonProperty("dept")
    private String dept;
    /**
     * 累计登录次数
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`visits`")
    @JSONField(name = "visits")
    @JsonProperty("visits")
    private Integer visits;
    /**
     * 累计创建计划数
     */
    @TableField(exist = false)
    @JSONField(name = "yearplancnt")
    @JsonProperty("yearplancnt")
    private Integer yearplancnt;
    /**
     * 累计参与产品数
     */
    @TableField(exist = false)
    @JSONField(name = "yearproductcnt")
    @JsonProperty("yearproductcnt")
    private Integer yearproductcnt;
    /**
     * 累计创建需求数
     */
    @TableField(exist = false)
    @JSONField(name = "yearstorycnt")
    @JsonProperty("yearstorycnt")
    private Integer yearstorycnt;
    /**
     * 累计动态数
     */
    @TableField(exist = false)
    @JSONField(name = "yearactioncnt")
    @JsonProperty("yearactioncnt")
    private Integer yearactioncnt;
    /**
     * 累计创建Bug数
     */
    @TableField(exist = false)
    @JSONField(name = "yearbugcnt")
    @JsonProperty("yearbugcnt")
    private Integer yearbugcnt;
    /**
     * 累计创建用例数
     */
    @TableField(exist = false)
    @JSONField(name = "yearcasecnt")
    @JsonProperty("yearcasecnt")
    private Integer yearcasecnt;
    /**
     * 累计日志数
     */
    @TableField(exist = false)
    @JSONField(name = "yearlogcnt")
    @JsonProperty("yearlogcnt")
    private Integer yearlogcnt;



    /**
     * 设置 [真实用户名]
     */
    public void setRealname(String realname){
        this.realname = realname ;
        this.modify("realname",realname);
    }

    /**
     * 设置 [账号]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [角色]
     */
    public void setRole(String role){
        this.role = role ;
        this.modify("role",role);
    }

    /**
     * 设置 [部门编号]
     */
    public void setDept(String dept){
        this.dept = dept ;
        this.modify("dept",dept);
    }

    /**
     * 设置 [累计登录次数]
     */
    public void setVisits(Integer visits){
        this.visits = visits ;
        this.modify("visits",visits);
    }


    @Override
    public Serializable getDefaultKey(boolean gen) {
       return IdWorker.getId();
    }
    /**
     * 复制当前对象数据到目标对象(粘贴重置)
     * @param targetEntity 目标数据对象
     * @param bIncEmpty  是否包括空值
     * @param <T>
     * @return
     */
    @Override
    public <T> T copyTo(T targetEntity, boolean bIncEmpty) {
        this.reset("id");
        return super.copyTo(targetEntity,bIncEmpty);
    }
}


