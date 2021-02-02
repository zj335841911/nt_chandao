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


/**
 * [索引检索] 对象
 */
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IbizproIndex extends EntityBase implements Serializable {

    /**
     * 类型
     */
    @JSONField(name = "indexType")
    @JsonProperty("indexType")
    private String indextype;

    /**
     * 主键
     */
    @JSONField(name = "indexid")
    @JsonProperty("indexid")
    private Long indexid;

    /**
     * 标题[需求、任务等]
     */
    @JSONField(name = "indexname")
    @JsonProperty("indexname")
    private String indexname;

    /**
     * 逻辑标识
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;

    /**
     * 组织标识
     */
    @JSONField(name = "orgId")
    @JsonProperty("orgId")
    private String orgid;

    /**
     * 部门标识
     */
    @JSONField(name = "mdeptId")
    @JsonProperty("mdeptId")
    private String mdeptid;

    /**
     * 内容[需求、任务等]
     */
    @JSONField(name = "indexdesc")
    @JsonProperty("indexdesc")
    private String indexdesc;

    /**
     * 颜色
     */
    @JSONField(name = "color")
    @JsonProperty("color")
    private String color;

    /**
     * 项目
     */
    @JSONField(name = "project")
    @JsonProperty("project")
    private Long project;

    /**
     * 权限列表
     */
    @JSONField(name = "acllist")
    @JsonProperty("acllist")
    private String acllist;

    /**
     * 权限
     */
    @JSONField(name = "acl")
    @JsonProperty("acl")
    private String acl;

    /**
     * docid
     */
    @JSONField(name = "docid")
    @JsonProperty("docid")
    private String docid;

    /**
     * 产品
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;




}


