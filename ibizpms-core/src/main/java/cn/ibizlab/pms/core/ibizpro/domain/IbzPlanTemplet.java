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
 * 实体[计划模板]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_IBZ_PLANTEMPLET", resultMap = "IbzPlanTempletResultMap")
public class IbzPlanTemplet extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 产品计划模板标识
     */
    @DEField(name = "ibz_plantempletid", isKeyField = true)
    @TableId(value = "ibz_plantempletid", type = IdType.ASSIGN_UUID)
    @JSONField(name = "ibzplantempletid")
    @JsonProperty("ibzplantempletid")
    private String ibzplantempletid;
    /**
     * 模板名称
     */
    @DEField(name = "ibz_plantempletname")
    @TableField(value = "`ibz_plantempletname`")
    @JSONField(name = "ibzplantempletname")
    @JsonProperty("ibzplantempletname")
    private String ibzplantempletname;
    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @TableField(value = "`createman`", fill = FieldFill.INSERT)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;
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
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @TableField(value = "`updateman`")
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;
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
     * 计划
     */
    @TableField(value = "`plans`")
    @JSONField(name = "plans")
    @JsonProperty("plans")
    private String plans;
    /**
     * 产品
     */
    @TableField(value = "`product`")
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;
    /**
     * 权限
     */
    @TableField(value = "`acl`")
    @JSONField(name = "acl")
    @JsonProperty("acl")
    private String acl;
    /**
     * 创建人姓名
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMANNAME)
    @TableField(value = "`createmanname`")
    @JSONField(name = "createmanname")
    @JsonProperty("createmanname")
    private String createmanname;


    /**
     * 计划模板详情
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private List<cn.ibizlab.pms.core.ibizpro.domain.IbzPlanTempletDetail> ibzplantempletdetail;


    /**
     * 设置 [模板名称]
     */
    public void setIbzplantempletname(String ibzplantempletname) {
        this.ibzplantempletname = ibzplantempletname;
        this.modify("ibz_plantempletname", ibzplantempletname);
    }

    /**
     * 设置 [计划]
     */
    public void setPlans(String plans) {
        this.plans = plans;
        this.modify("plans", plans);
    }

    /**
     * 设置 [产品]
     */
    public void setProduct(Long product) {
        this.product = product;
        this.modify("product", product);
    }

    /**
     * 设置 [权限]
     */
    public void setAcl(String acl) {
        this.acl = acl;
        this.modify("acl", acl);
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
        this.reset("ibz_plantempletid");
        return super.copyTo(targetEntity, bIncEmpty);
    }
}

