package cn.ibizlab.pms.core.zentao.domain;

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
 * 实体[版本]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_build",resultMap = "BuildResultMap")
public class Build extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 名称编号
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 构建者
     */
    @DEField(defaultValueType = DEFieldDefaultValueType.OPERATORNAME)
    @TableField(value = "builder")
    @JSONField(name = "builder")
    @JsonProperty("builder")
    private String builder;
    /**
     * 描述
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
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
     * 源代码地址
     */
    @TableField(value = "scmpath")
    @JSONField(name = "scmpath")
    @JsonProperty("scmpath")
    private String scmpath;
    /**
     * 下载地址
     */
    @TableField(value = "filepath")
    @JSONField(name = "filepath")
    @JsonProperty("filepath")
    private String filepath;
    /**
     * 完成的需求
     */
    @TableField(value = "stories")
    @JSONField(name = "stories")
    @JsonProperty("stories")
    private String stories;
    /**
     * 解决的Bug
     */
    @TableField(value = "bugs")
    @JSONField(name = "bugs")
    @JsonProperty("bugs")
    private String bugs;
    /**
     * 打包日期
     */
    @TableField(value = "date")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * 产品
     */
    @DEField(defaultValue = "0")
    @TableField(value = "product")
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;
    /**
     * 平台/分支
     */
    @TableField(value = "branch")
    @JSONField(name = "branch")
    @JsonProperty("branch")
    private Long branch;
    /**
     * 所属项目
     */
    @DEField(defaultValue = "0")
    @TableField(value = "project")
    @JSONField(name = "project")
    @JsonProperty("project")
    private Long project;
    /**
     * 产品名称
     */
    @TableField(exist = false)
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;
    /**
     * Bug版本健值
     */
    @TableField(exist = false)
    @JSONField(name = "ids")
    @JsonProperty("ids")
    private String ids;
    /**
     * 附件
     */
    @TableField(exist = false)
    @JSONField(name = "files")
    @JsonProperty("files")
    private String files;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Branch ztbranch;

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
     * 设置 [名称编号]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [构建者]
     */
    public void setBuilder(String builder){
        this.builder = builder ;
        this.modify("builder",builder);
    }

    /**
     * 设置 [描述]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [源代码地址]
     */
    public void setScmpath(String scmpath){
        this.scmpath = scmpath ;
        this.modify("scmpath",scmpath);
    }

    /**
     * 设置 [下载地址]
     */
    public void setFilepath(String filepath){
        this.filepath = filepath ;
        this.modify("filepath",filepath);
    }

    /**
     * 设置 [完成的需求]
     */
    public void setStories(String stories){
        this.stories = stories ;
        this.modify("stories",stories);
    }

    /**
     * 设置 [解决的Bug]
     */
    public void setBugs(String bugs){
        this.bugs = bugs ;
        this.modify("bugs",bugs);
    }

    /**
     * 设置 [打包日期]
     */
    public void setDate(Timestamp date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 格式化日期 [打包日期]
     */
    public String formatDate(){
        if (this.date == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }
    /**
     * 设置 [产品]
     */
    public void setProduct(Long product){
        this.product = product ;
        this.modify("product",product);
    }

    /**
     * 设置 [平台/分支]
     */
    public void setBranch(Long branch){
        this.branch = branch ;
        this.modify("branch",branch);
    }

    /**
     * 设置 [所属项目]
     */
    public void setProject(Long project){
        this.project = project ;
        this.modify("project",project);
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


