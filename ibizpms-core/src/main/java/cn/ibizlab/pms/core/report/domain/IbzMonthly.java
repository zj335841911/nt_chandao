package cn.ibizlab.pms.core.report.domain;

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
 * 实体[月报]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_IBZ_MONTHLY", resultMap = "IbzMonthlyResultMap")
public class IbzMonthly extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 月报标识
     */
    @DEField(defaultValue = "0", isKeyField = true)
    @TableId(value = "ibz_monthlyid", type = IdType.AUTO)
    @JSONField(name = "ibzmonthlyid")
    @JsonProperty("ibzmonthlyid")
    private Long ibzmonthlyid;
    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @TableField(value = "`createman`", fill = FieldFill.INSERT)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;
    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @TableField(value = "`updateman`")
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;
    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "`createdate`", fill = FieldFill.INSERT)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "createdate", format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;
    /**
     * 月报名称
     */
    @DEField(name = "ibz_monthlyname")
    @TableField(value = "`ibz_monthlyname`")
    @JSONField(name = "ibzmonthlyname")
    @JsonProperty("ibzmonthlyname")
    private String ibzmonthlyname;
    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @TableField(value = "`updatedate`")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "updatedate", format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;
    /**
     * 日期
     */
    @TableField(value = "`date`")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "date", format = "yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * 用户
     */
    @TableField(value = "`account`")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * 本月工作
     */
    @TableField(value = "`workthismonth`")
    @JSONField(name = "workthismonth")
    @JsonProperty("workthismonth")
    private String workthismonth;
    /**
     * 下月计划
     */
    @TableField(value = "`plansnextmonth`")
    @JSONField(name = "plansnextmonth")
    @JsonProperty("plansnextmonth")
    private String plansnextmonth;
    /**
     * 汇报给
     */
    @TableField(value = "`reportto`")
    @JSONField(name = "reportto")
    @JsonProperty("reportto")
    private String reportto;
    /**
     * 抄送给
     */
    @TableField(value = "`mailto`")
    @JSONField(name = "mailto")
    @JsonProperty("mailto")
    private String mailto;
    /**
     * 其他事项
     */
    @TableField(value = "`comment`")
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;
    /**
     * 本月完成任务
     */
    @TableField(value = "`thismonthtask`")
    @JSONField(name = "thismonthtask")
    @JsonProperty("thismonthtask")
    private String thismonthtask;
    /**
     * 下月计划任务
     */
    @TableField(value = "`nextmonthplanstask`")
    @JSONField(name = "nextmonthplanstask")
    @JsonProperty("nextmonthplanstask")
    private String nextmonthplanstask;
    /**
     * 附件
     */
    @TableField(exist = false)
    @JSONField(name = "files")
    @JsonProperty("files")
    private String files;
    /**
     * 是否提交
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`issubmit`")
    @JSONField(name = "issubmit")
    @JsonProperty("issubmit")
    private String issubmit;
    /**
     * 更新人名称
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMANNAME)
    @TableField(value = "`updatemanname`")
    @JSONField(name = "updatemanname")
    @JsonProperty("updatemanname")
    private String updatemanname;
    /**
     * 状态
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`reportstatus`")
    @JSONField(name = "reportstatus")
    @JsonProperty("reportstatus")
    private String reportstatus;
    /**
     * 建立人名称
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMANNAME)
    @TableField(value = "`createmanname`")
    @JSONField(name = "createmanname")
    @JsonProperty("createmanname")
    private String createmanname;
    /**
     * 提交时间
     */
    @TableField(value = "`submittime`")
    @JsonFormat(pattern = "HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "submittime", format = "HH:mm:ss")
    @JsonProperty("submittime")
    private Timestamp submittime;
    /**
     * 汇报给（选择）
     */
    @TableField(exist = false)
    @JSONField(name = "reporttopk")
    @JsonProperty("reporttopk")
    private String reporttopk;
    /**
     * 抄送给（选择）
     */
    @TableField(exist = false)
    @JSONField(name = "mailtopk")
    @JsonProperty("mailtopk")
    private String mailtopk;



    /**
     * 设置 [月报名称]
     */
    public void setIbzmonthlyname(String ibzmonthlyname) {
        this.ibzmonthlyname = ibzmonthlyname;
        this.modify("ibz_monthlyname", ibzmonthlyname);
    }

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
     * 设置 [用户]
     */
    public void setAccount(String account) {
        this.account = account;
        this.modify("account", account);
    }

    /**
     * 设置 [本月工作]
     */
    public void setWorkthismonth(String workthismonth) {
        this.workthismonth = workthismonth;
        this.modify("workthismonth", workthismonth);
    }

    /**
     * 设置 [下月计划]
     */
    public void setPlansnextmonth(String plansnextmonth) {
        this.plansnextmonth = plansnextmonth;
        this.modify("plansnextmonth", plansnextmonth);
    }

    /**
     * 设置 [汇报给]
     */
    public void setReportto(String reportto) {
        this.reportto = reportto;
        this.modify("reportto", reportto);
    }

    /**
     * 设置 [抄送给]
     */
    public void setMailto(String mailto) {
        this.mailto = mailto;
        this.modify("mailto", mailto);
    }

    /**
     * 设置 [其他事项]
     */
    public void setComment(String comment) {
        this.comment = comment;
        this.modify("comment", comment);
    }

    /**
     * 设置 [本月完成任务]
     */
    public void setThismonthtask(String thismonthtask) {
        this.thismonthtask = thismonthtask;
        this.modify("thismonthtask", thismonthtask);
    }

    /**
     * 设置 [下月计划任务]
     */
    public void setNextmonthplanstask(String nextmonthplanstask) {
        this.nextmonthplanstask = nextmonthplanstask;
        this.modify("nextmonthplanstask", nextmonthplanstask);
    }

    /**
     * 设置 [是否提交]
     */
    public void setIssubmit(String issubmit) {
        this.issubmit = issubmit;
        this.modify("issubmit", issubmit);
    }

    /**
     * 设置 [状态]
     */
    public void setReportstatus(String reportstatus) {
        this.reportstatus = reportstatus;
        this.modify("reportstatus", reportstatus);
    }

    /**
     * 设置 [提交时间]
     */
    public void setSubmittime(Timestamp submittime) {
        this.submittime = submittime;
        this.modify("submittime", submittime);
    }

    /**
     * 格式化日期 [提交时间]
     */
    public String formatSubmittime() {
        if (this.submittime == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
        return sdf.format(submittime);
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
        this.reset("ibz_monthlyid");
        return super.copyTo(targetEntity, bIncEmpty);
    }
}

