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
 * 实体[文档库分类]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_module", resultMap = "DocLibModuleResultMap")
public class DocLibModule extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 叶子模块
     */
    @TableField(exist = false)
    @JSONField(name = "isleaf")
    @JsonProperty("isleaf")
    private String isleaf;
    /**
     * 名称
     */
    @TableField(value = "`name`")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 简称
     */
    @DEField(defaultValue = "/")
    @TableField(value = "`short`")
    @JSONField(name = "ibizshort")
    @JsonProperty("ibizshort")
    private String ibizshort;
    /**
     * grade
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`grade`")
    @JSONField(name = "grade")
    @JsonProperty("grade")
    private Integer grade;
    /**
     * collector
     */
    @DEField(defaultValue = "/")
    @TableField(value = "`collector`")
    @JSONField(name = "collector")
    @JsonProperty("collector")
    private String collector;
    /**
     * branch
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`branch`")
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Integer branch;
    /**
     * id
     */
    @DEField(isKeyField = true)
    @TableId(value = "id", type = IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 排序值
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`order`")
    @JSONField(name = "order")
    @JsonProperty("order")
    private Integer order;
    /**
     * 逻辑删除标志
     */
    @DEField(defaultValue = "0", preType = DEPredefinedFieldType.LOGICVALID, logicval = "0", logicdelval = "1")
    @TableLogic(value = "0", delval = "1")
    @TableField(value = "`deleted`")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * path
     */
    @DEField(defaultValue = ",")
    @TableField(value = "`path`")
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;
    /**
     * owner
     */
    @DEField(defaultValue = "/")
    @TableField(value = "`owner`")
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;
    /**
     * 类型
     */
    @DEField(defaultValue = "doc")
    @TableField(value = "`type`")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 编号
     */
    @TableField(value = "`root`")
    @JSONField(name = "root")
    @JsonProperty("root")
    private Long root;
    /**
     * id
     */
    @TableField(value = "`parent`")
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private Long parent;
    /**
     * 所属文档库
     */
    @TableField(exist = false)
    @JSONField(name = "doclibname")
    @JsonProperty("doclibname")
    private String doclibname;
    /**
     * 上级模块
     */
    @TableField(exist = false)
    @JSONField(name = "modulename")
    @JsonProperty("modulename")
    private String modulename;
    /**
     * 是否收藏
     */
    @TableField(exist = false)
    @JSONField(name = "isfavourites")
    @JsonProperty("isfavourites")
    private Integer isfavourites;

    /**
     * 父模块
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.ibiz.domain.DocLibModule pdoclibmodule;

    /**
     * 文档分类
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.DocLib doclib;



    /**
     * 设置 [名称]
     */
    public void setName(String name) {
        this.name = name;
        this.modify("name", name);
    }

    /**
     * 设置 [简称]
     */
    public void setIbizshort(String ibizshort) {
        this.ibizshort = ibizshort;
        this.modify("short", ibizshort);
    }

    /**
     * 设置 [grade]
     */
    public void setGrade(Integer grade) {
        this.grade = grade;
        this.modify("grade", grade);
    }

    /**
     * 设置 [collector]
     */
    public void setCollector(String collector) {
        this.collector = collector;
        this.modify("collector", collector);
    }

    /**
     * 设置 [branch]
     */
    public void setBranch(Integer branch) {
        this.branch = branch;
        this.modify("branch", branch);
    }

    /**
     * 设置 [排序值]
     */
    public void setOrder(Integer order) {
        this.order = order;
        this.modify("order", order);
    }

    /**
     * 设置 [path]
     */
    public void setPath(String path) {
        this.path = path;
        this.modify("path", path);
    }

    /**
     * 设置 [owner]
     */
    public void setOwner(String owner) {
        this.owner = owner;
        this.modify("owner", owner);
    }

    /**
     * 设置 [类型]
     */
    public void setType(String type) {
        this.type = type;
        this.modify("type", type);
    }

    /**
     * 设置 [编号]
     */
    public void setRoot(Long root) {
        this.root = root;
        this.modify("root", root);
    }

    /**
     * 设置 [id]
     */
    public void setParent(Long parent) {
        this.parent = parent;
        this.modify("parent", parent);
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


