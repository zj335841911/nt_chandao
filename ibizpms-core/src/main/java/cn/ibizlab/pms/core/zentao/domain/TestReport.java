package cn.ibizlab.pms.core.zentao.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
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


import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;


/**
 * 实体[测试报告]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_testreport",resultMap = "TestReportResultMap")
public class TestReport extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 所属对象
     */
    @TableField(value = "objectid")
    @JSONField(name = "objectid")
    @JsonProperty("objectid")
    private Integer objectid;
    /**
     * 用例
     */
    @TableField(value = "cases")
    @JSONField(name = "cases")
    @JsonProperty("cases")
    private String cases;
    /**
     * 参与人员
     */
    @TableField(value = "members")
    @JSONField(name = "members")
    @JsonProperty("members")
    private String members;
    /**
     * 测试的Bug
     */
    @TableField(value = "bugs")
    @JSONField(name = "bugs")
    @JsonProperty("bugs")
    private String bugs;
    /**
     * 由谁创建
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMANNAME)
    @TableField(value = "createdby")
    @JSONField(name = "createdby")
    @JsonProperty("createdby")
    private String createdby;
    /**
     * 测试的需求
     */
    @TableField(value = "stories")
    @JSONField(name = "stories")
    @JsonProperty("stories")
    private String stories;
    /**
     * 测试单
     */
    @TableField(value = "tasks")
    @JSONField(name = "tasks")
    @JsonProperty("tasks")
    private String tasks;
    /**
     * 标题
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * 开始时间
     */
    @TableField(value = "begin")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd")
    @JsonProperty("begin")
    private Timestamp begin;
    /**
     * 对象类型
     */
    @TableField(value = "objecttype")
    @JSONField(name = "objecttype")
    @JsonProperty("objecttype")
    private String objecttype;
    /**
     * 结束时间
     */
    @TableField(value = "end")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd")
    @JsonProperty("end")
    private Timestamp end;
    /**
     * 版本信息
     */
    @TableField(value = "builds")
    @JSONField(name = "builds")
    @JsonProperty("builds")
    private String builds;
    /**
     * 创建时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "createddate" , fill = FieldFill.INSERT)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createddate")
    private Timestamp createddate;
    /**
     * 总结
     */
    @TableField(value = "report")
    @JSONField(name = "report")
    @JsonProperty("report")
    private String report;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 负责人
     */
    @TableField(value = "owner")
    @JSONField(name = "owner")
    @JsonProperty("owner")
    private String owner;
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
     * 所属产品
     */
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private BigInteger product;
    /**
     * 所属项目
     */
    @TableField(value = "project")
    @JSONField(name = "project")
    @JsonProperty("project")
    private BigInteger project;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztproduct;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Project ztproject;



    /**
     * 设置 [所属对象]
     */
    public void setObjectid(Integer objectid){
        this.objectid = objectid ;
        this.modify("objectid",objectid);
    }
    /**
     * 设置 [用例]
     */
    public void setCases(String cases){
        this.cases = cases ;
        this.modify("cases",cases);
    }
    /**
     * 设置 [参与人员]
     */
    public void setMembers(String members){
        this.members = members ;
        this.modify("members",members);
    }
    /**
     * 设置 [测试的Bug]
     */
    public void setBugs(String bugs){
        this.bugs = bugs ;
        this.modify("bugs",bugs);
    }
    /**
     * 设置 [测试的需求]
     */
    public void setStories(String stories){
        this.stories = stories ;
        this.modify("stories",stories);
    }
    /**
     * 设置 [测试单]
     */
    public void setTasks(String tasks){
        this.tasks = tasks ;
        this.modify("tasks",tasks);
    }
    /**
     * 设置 [标题]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }
    /**
     * 设置 [开始时间]
     */
    public void setBegin(Timestamp begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }
    /**
     * 设置 [对象类型]
     */
    public void setObjecttype(String objecttype){
        this.objecttype = objecttype ;
        this.modify("objecttype",objecttype);
    }
    /**
     * 设置 [结束时间]
     */
    public void setEnd(Timestamp end){
        this.end = end ;
        this.modify("end",end);
    }
    /**
     * 设置 [版本信息]
     */
    public void setBuilds(String builds){
        this.builds = builds ;
        this.modify("builds",builds);
    }
    /**
     * 设置 [总结]
     */
    public void setReport(String report){
        this.report = report ;
        this.modify("report",report);
    }
    /**
     * 设置 [负责人]
     */
    public void setOwner(String owner){
        this.owner = owner ;
        this.modify("owner",owner);
    }
    /**
     * 设置 [所属产品]
     */
    public void setProduct(BigInteger product){
        this.product = product ;
        this.modify("product",product);
    }
    /**
     * 设置 [所属项目]
     */
    public void setProject(BigInteger project){
        this.project = project ;
        this.modify("project",project);
    }

}


