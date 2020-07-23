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

/**
 * 实体[项目统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_project",resultMap = "ProjectStatsResultMap")
public class ProjectStats extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 项目编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 需求总数
     */
    @TableField(exist = false)
    @JSONField(name = "storycnt")
    @JsonProperty("storycnt")
    private Integer storycnt;
    /**
     * 任务总数
     */
    @TableField(exist = false)
    @JSONField(name = "taskcnt")
    @JsonProperty("taskcnt")
    private Integer taskcnt;
    /**
     * 任务最初预计总工时
     */
    @TableField(exist = false)
    @JSONField(name = "totalestimate")
    @JsonProperty("totalestimate")
    private Double totalestimate;
    /**
     * 任务消耗总工时
     */
    @TableField(exist = false)
    @JSONField(name = "totalconsumed")
    @JsonProperty("totalconsumed")
    private Double totalconsumed;
    /**
     * 任务预计剩余总工时
     */
    @TableField(exist = false)
    @JSONField(name = "totalleft")
    @JsonProperty("totalleft")
    private Double totalleft;
    /**
     * 未完成任务总数
     */
    @TableField(exist = false)
    @JSONField(name = "undonetaskcnt")
    @JsonProperty("undonetaskcnt")
    private Integer undonetaskcnt;
    /**
     * 关闭需求总数
     */
    @TableField(exist = false)
    @JSONField(name = "closedstorycnt")
    @JsonProperty("closedstorycnt")
    private Integer closedstorycnt;
    /**
     * Bug总数
     */
    @TableField(exist = false)
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;
    /**
     * 未解决Bug总数
     */
    @TableField(exist = false)
    @JSONField(name = "activebugcnt")
    @JsonProperty("activebugcnt")
    private Integer activebugcnt;
    /**
     * 未关闭需求总数
     */
    @TableField(exist = false)
    @JSONField(name = "unclosedstorycnt")
    @JsonProperty("unclosedstorycnt")
    private Integer unclosedstorycnt;
    /**
     * 已结束任务总数
     */
    @TableField(exist = false)
    @JSONField(name = "finishtaskcnt")
    @JsonProperty("finishtaskcnt")
    private Integer finishtaskcnt;
    /**
     * 已解决Bug总数
     */
    @TableField(exist = false)
    @JSONField(name = "finishbugcnt")
    @JsonProperty("finishbugcnt")
    private Integer finishbugcnt;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "0" , logicdelval="1")
    @TableLogic(value= "0",delval="1")
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * 工时
     */
    @TableField(exist = false)
    @JSONField(name = "time")
    @JsonProperty("time")
    private Double time;
    /**
     * 工时类型
     */
    @TableField(exist = false)
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 项目名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 未确认Bug总数
     */
    @TableField(exist = false)
    @JSONField(name = "unconfirmedbugcnt")
    @JsonProperty("unconfirmedbugcnt")
    private Integer unconfirmedbugcnt;
    /**
     * 未关闭Bug总数
     */
    @TableField(exist = false)
    @JSONField(name = "unclosedbugcnt")
    @JsonProperty("unclosedbugcnt")
    private Integer unclosedbugcnt;
    /**
     * 总工时
     */
    @TableField(exist = false)
    @JSONField(name = "totalwh")
    @JsonProperty("totalwh")
    private Integer totalwh;



    /**
     * 设置 [项目名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }


}


