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
 * 实体[repofiles]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_repofiles",resultMap = "RepoFilesResultMap")
public class RepoFiles extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * path
     */
    @TableField(value = "path")
    @JSONField(name = "path")
    @JsonProperty("path")
    private String path;
    /**
     * type
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * revision
     */
    @TableField(value = "revision")
    @JSONField(name = "revision")
    @JsonProperty("revision")
    private Integer revision;
    /**
     * action
     */
    @TableField(value = "action")
    @JSONField(name = "action")
    @JsonProperty("action")
    private String action;
    /**
     * repo
     */
    @TableField(value = "repo")
    @JSONField(name = "repo")
    @JsonProperty("repo")
    private Integer repo;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * parent
     */
    @TableField(value = "parent")
    @JSONField(name = "parent")
    @JsonProperty("parent")
    private BigInteger parent;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.RepoFiles ibizparent;



    /**
     * 设置 [path]
     */
    public void setPath(String path){
        this.path = path ;
        this.modify("path",path);
    }
    /**
     * 设置 [type]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }
    /**
     * 设置 [revision]
     */
    public void setRevision(Integer revision){
        this.revision = revision ;
        this.modify("revision",revision);
    }
    /**
     * 设置 [action]
     */
    public void setAction(String action){
        this.action = action ;
        this.modify("action",action);
    }
    /**
     * 设置 [repo]
     */
    public void setRepo(Integer repo){
        this.repo = repo ;
        this.modify("repo",repo);
    }
    /**
     * 设置 [parent]
     */
    public void setParent(BigInteger parent){
        this.parent = parent ;
        this.modify("parent",parent);
    }

}


