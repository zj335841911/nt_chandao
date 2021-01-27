package cn.ibizlab.pms.core.ibizpro.domain;

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
 * 实体[项目工时统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_taskestimate", resultMap = "ProjectTaskestimateResultMap")
public class ProjectTaskestimate extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 项目名称
     */
    @TableField(exist = false)
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    private String projectname;
    /**
     * 评估工时
     */
    @TableField(exist = false)
    @JSONField(name = "evaluationtime")
    @JsonProperty("evaluationtime")
    private Double evaluationtime;
    /**
     * 月
     */
    @TableField(exist = false)
    @JSONField(name = "month")
    @JsonProperty("month")
    private String month;
    /**
     * 日期
     */
    @TableField(value = "`date`")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "date", format = "yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * 评估成本
     */
    @TableField(value = "`evaluationcost`")
    @JSONField(name = "evaluationcost")
    @JsonProperty("evaluationcost")
    private Double evaluationcost;
    /**
     * 投入成本
     */
    @TableField(value = "`inputcost`")
    @JSONField(name = "inputcost")
    @JsonProperty("inputcost")
    private Double inputcost;
    /**
     * 工时
     */
    @TableField(exist = false)
    @JSONField(name = "consumed")
    @JsonProperty("consumed")
    private Double consumed;
    /**
     * 主键
     */
    @DEField(isKeyField = true)
    @TableField(exist = false)
    @JSONField(name = "id")
    @JsonProperty("id")
    private String id;
    /**
     * 项目标识
     */
    @TableField(exist = false)
    @JSONField(name = "project")
    @JsonProperty("project")
    private Long project;
    /**
     * 年
     */
    @TableField(exist = false)
    @JSONField(name = "year")
    @JsonProperty("year")
    private String year;
    /**
     * 用户
     */
    @TableField(exist = false)
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * 其他项目工时
     */
    @TableField(exist = false)
    @JSONField(name = "otherconsumed")
    @JsonProperty("otherconsumed")
    private Double otherconsumed;
    /**
     * 其他项目评估工时
     */
    @TableField(exist = false)
    @JSONField(name = "otherevaluationtime")
    @JsonProperty("otherevaluationtime")
    private Double otherevaluationtime;



    /**
     * 设置 [日期]
     */
    public void setDate(Timestamp date) {
        this.date = date;
        this.modify("date", date);
    }

    /**
     * 格式化日期 [日期]
     */
    public String formatDate() {
        if (this.date == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }
    /**
     * 设置 [评估成本]
     */
    public void setEvaluationcost(Double evaluationcost) {
        this.evaluationcost = evaluationcost;
        this.modify("evaluationcost", evaluationcost);
    }

    /**
     * 设置 [投入成本]
     */
    public void setInputcost(Double inputcost) {
        this.inputcost = inputcost;
        this.modify("inputcost", inputcost);
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


