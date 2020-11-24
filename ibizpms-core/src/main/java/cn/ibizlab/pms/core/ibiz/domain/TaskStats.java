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
import cn.ibizlab.pms.util.helper.DataObject;
import cn.ibizlab.pms.util.enums.DupCheck;
import java.io.Serializable;
import lombok.*;
import org.springframework.data.annotation.Transient;
import cn.ibizlab.pms.util.annotation.Audit;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

/**
 * 实体[任务统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_task", resultMap = "TaskStatsResultMap")
public class TaskStats extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 项目名称
     */
    @TableField(exist = false)
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    private String projectname;
    /**
     * 预计总工时
     */
    @TableField(exist = false)
    @JSONField(name = "totalestimate")
    @JsonProperty("totalestimate")
    private Integer totalestimate;
    /**
     * 消耗总工时
     */
    @TableField(exist = false)
    @JSONField(name = "totalconsumed")
    @JsonProperty("totalconsumed")
    private Integer totalconsumed;
    /**
     * 剩余总工时
     */
    @TableField(exist = false)
    @JSONField(name = "totalleft")
    @JsonProperty("totalleft")
    private Integer totalleft;
    /**
     * 项目
     */
    @TableField(exist = false)
    @JSONField(name = "project")
    @JsonProperty("project")
    private String project;
    /**
     * 编号
     */
    @DEField(isKeyField = true)
    @TableId(value = "id", type = IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 名称
     */
    @TableField(value = "`name`")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 完成者
     */
    @TableField(exist = false)
    @JSONField(name = "finishedby")
    @JsonProperty("finishedby")
    private String finishedby;
    /**
     * 效率
     */
    @TableField(exist = false)
    @JSONField(name = "taskefficient")
    @JsonProperty("taskefficient")
    private String taskefficient;



    /**
     * 设置 [名称]
     */
    public void setName(String name) {
        this.name = name;
        this.modify("name", name);
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
        return super.copyTo(targetEntity, bIncEmpty);
    }
}


