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
 * 实体[任务团队]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_team",resultMap = "TaskTeamResultMap")
public class TaskTeam extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 角色
     */
    @TableField(value = "role")
    @JSONField(name = "role")
    @JsonProperty("role")
    private String role;
    /**
     * 编号
     */
    @TableField(value = "root")
    @JSONField(name = "root")
    @JsonProperty("root")
    private Long root;
    /**
     * 受限用户
     */
    @DEField(defaultValue = "no")
    @TableField(value = "limited")
    @JSONField(name = "limited")
    @JsonProperty("limited")
    private String limited;
    /**
     * 总计可用
     */
    @TableField(exist = false)
    @JSONField(name = "total")
    @JsonProperty("total")
    private Integer total;
    /**
     * 用户
     */
    @TableField(exist = false)
    @JSONField(name = "username")
    @JsonProperty("username")
    private String username;
    /**
     * 排序
     */
    @DEField(defaultValue = "0")
    @TableField(value = "order")
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;
    /**
     * 可用工日
     */
    @DEField(defaultValue = "45")
    @TableField(value = "days")
    @JSONField(name = "days")
    @JsonProperty("days")
    private Integer days;
    /**
     * 团队类型
     */
    @DEField(defaultValue = "project")
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 最初预计
     */
    @DEField(defaultValue = "0.00")
    @TableField(value = "estimate")
    @JSONField(name = "estimate")
    @JsonProperty("estimate")
    private BigDecimal estimate;
    /**
     * 用户
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * 总计消耗
     */
    @DEField(defaultValue = "0.00")
    @TableField(value = "consumed")
    @JSONField(name = "consumed")
    @JsonProperty("consumed")
    private BigDecimal consumed;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 加盟日
     */
    @DEField(defaultValue = "0000-00-00")
    @TableField(value = "join")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "join" , format="yyyy-MM-dd")
    @JsonProperty("join")
    private Timestamp join;
    /**
     * 可用工时/天
     */
    @DEField(defaultValue = "0.0")
    @TableField(value = "hours")
    @JSONField(name = "hours")
    @JsonProperty("hours")
    private Double hours;
    /**
     * 预计剩余
     */
    @DEField(defaultValue = "0.00")
    @TableField(value = "left")
    @JSONField(name = "left")
    @JsonProperty("left")
    private BigDecimal left;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Task taskteam;



    /**
     * 设置 [角色]
     */
    public void setRole(String role){
        this.role = role ;
        this.modify("role",role);
    }

    /**
     * 设置 [编号]
     */
    public void setRoot(Long root){
        this.root = root ;
        this.modify("root",root);
    }

    /**
     * 设置 [受限用户]
     */
    public void setLimited(String limited){
        this.limited = limited ;
        this.modify("limited",limited);
    }

    /**
     * 设置 [排序]
     */
    public void setOrder(Integer order){
        this.order = order ;
        this.modify("order",order);
    }

    /**
     * 设置 [可用工日]
     */
    public void setDays(Integer days){
        this.days = days ;
        this.modify("days",days);
    }

    /**
     * 设置 [团队类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [最初预计]
     */
    public void setEstimate(BigDecimal estimate){
        this.estimate = estimate ;
        this.modify("estimate",estimate);
    }

    /**
     * 设置 [用户]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [总计消耗]
     */
    public void setConsumed(BigDecimal consumed){
        this.consumed = consumed ;
        this.modify("consumed",consumed);
    }

    /**
     * 设置 [加盟日]
     */
    public void setJoin(Timestamp join){
        this.join = join ;
        this.modify("join",join);
    }

    /**
     * 格式化日期 [加盟日]
     */
    public String formatJoin(){
        if (this.join == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(join);
    }
    /**
     * 设置 [可用工时/天]
     */
    public void setHours(Double hours){
        this.hours = hours ;
        this.modify("hours",hours);
    }

    /**
     * 设置 [预计剩余]
     */
    public void setLeft(BigDecimal left){
        this.left = left ;
        this.modify("left",left);
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

