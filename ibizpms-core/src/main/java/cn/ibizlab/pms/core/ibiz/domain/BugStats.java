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
 * 实体[Bug统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_bug", resultMap = "BugStatsResultMap")
public class BugStats extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 标识
     */
    @DEField(isKeyField = true)
    @TableId(value = "id", type = IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 名称
     */
    @TableField(value = "`title`")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * 由谁创建
     */
    @TableField(value = "`openedby`")
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private String openedby;
    /**
     * 未解决
     */
    @TableField(exist = false)
    @JSONField(name = "bugwjj")
    @JsonProperty("bugwjj")
    private Integer bugwjj;
    /**
     * 设计如此
     */
    @TableField(exist = false)
    @JSONField(name = "bugbydesign")
    @JsonProperty("bugbydesign")
    private Integer bugbydesign;
    /**
     * 重复Bug
     */
    @TableField(exist = false)
    @JSONField(name = "bugduplicate")
    @JsonProperty("bugduplicate")
    private Integer bugduplicate;
    /**
     * 外部原因
     */
    @TableField(exist = false)
    @JSONField(name = "bugexternal")
    @JsonProperty("bugexternal")
    private Integer bugexternal;
    /**
     * 已解决
     */
    @TableField(exist = false)
    @JSONField(name = "bugfixed")
    @JsonProperty("bugfixed")
    private Integer bugfixed;
    /**
     * 无法重现
     */
    @TableField(exist = false)
    @JSONField(name = "bugnotrepro")
    @JsonProperty("bugnotrepro")
    private Integer bugnotrepro;
    /**
     * 延期处理
     */
    @TableField(exist = false)
    @JSONField(name = "bugpostponed")
    @JsonProperty("bugpostponed")
    private Integer bugpostponed;
    /**
     * 不予解决
     */
    @TableField(exist = false)
    @JSONField(name = "bugwillnotfix")
    @JsonProperty("bugwillnotfix")
    private Integer bugwillnotfix;
    /**
     * 转为需求
     */
    @TableField(exist = false)
    @JSONField(name = "bugtostory")
    @JsonProperty("bugtostory")
    private Integer bugtostory;
    /**
     * 有效率
     */
    @TableField(exist = false)
    @JSONField(name = "bugefficient")
    @JsonProperty("bugefficient")
    private String bugefficient;
    /**
     * 总计
     */
    @TableField(exist = false)
    @JSONField(name = "bugtotal")
    @JsonProperty("bugtotal")
    private Integer bugtotal;
    /**
     * 编号
     */
    @TableField(value = "`product`")
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;
    /**
     * 产品名称
     */
    @TableField(exist = false)
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;
    /**
     * Bug
     */
    @TableField(exist = false)
    @JSONField(name = "bugcnt")
    @JsonProperty("bugcnt")
    private Integer bugcnt;
    /**
     * 指派给
     */
    @TableField(value = "`assignedto`")
    @JSONField(name = "assignedto")
    @JsonProperty("assignedto")
    private String assignedto;
    /**
     * 由谁解决
     */
    @TableField(value = "`resolvedby`")
    @JSONField(name = "resolvedby")
    @JsonProperty("resolvedby")
    private String resolvedby;
    /**
     * 项目编号
     */
    @TableField(value = "`project`")
    @JSONField(name = "project")
    @JsonProperty("project")
    private Long project;
    /**
     * 项目名称
     */
    @TableField(value = "`projectname`")
    @JSONField(name = "projectname")
    @JsonProperty("projectname")
    private String projectname;

    /**
     * 产品
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztproduct;

    /**
     * 项目
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Project ztproject;



    /**
     * 设置 [名称]
     */
    public void setTitle(String title) {
        this.title = title;
        this.modify("title", title);
    }

    /**
     * 设置 [由谁创建]
     */
    public void setOpenedby(String openedby) {
        this.openedby = openedby;
        this.modify("openedby", openedby);
    }

    /**
     * 设置 [编号]
     */
    public void setProduct(Long product) {
        this.product = product;
        this.modify("product", product);
    }

    /**
     * 设置 [指派给]
     */
    public void setAssignedto(String assignedto) {
        this.assignedto = assignedto;
        this.modify("assignedto", assignedto);
    }

    /**
     * 设置 [由谁解决]
     */
    public void setResolvedby(String resolvedby) {
        this.resolvedby = resolvedby;
        this.modify("resolvedby", resolvedby);
    }

    /**
     * 设置 [项目编号]
     */
    public void setProject(Long project) {
        this.project = project;
        this.modify("project", project);
    }

    /**
     * 设置 [项目名称]
     */
    public void setProjectname(String projectname) {
        this.projectname = projectname;
        this.modify("projectname", projectname);
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


