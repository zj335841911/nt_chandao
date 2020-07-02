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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[需求描述]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_storyspec",resultMap = "StorySpecResultMap")
public class StorySpec extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 需求描述	
     */
    @TableField(value = "spec")
    @JSONField(name = "spec")
    @JsonProperty("spec")
    private String spec;
    /**
     * 验收标准
     */
    @TableField(value = "verify")
    @JSONField(name = "verify")
    @JsonProperty("verify")
    private String verify;
    /**
     * 虚拟主键
     */
    @TableId(value= "id",type=IdType.ASSIGN_UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private String id;
    /**
     * 需求名称
     */
    @TableField(value = "title")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * 版本号
     */
    @TableField(value = "version")
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;
    /**
     * 需求
     */
    @TableField(value = "story")
    @JSONField(name = "story")
    @JsonProperty("story")
    private BigInteger story;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Story ztstory;



    /**
     * 设置 [需求描述	]
     */
    public void setSpec(String spec){
        this.spec = spec ;
        this.modify("spec",spec);
    }

    /**
     * 设置 [验收标准]
     */
    public void setVerify(String verify){
        this.verify = verify ;
        this.modify("verify",verify);
    }

    /**
     * 设置 [需求名称]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [版本号]
     */
    public void setVersion(Integer version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [需求]
     */
    public void setStory(BigInteger story){
        this.story = story ;
        this.modify("story",story);
    }


}


