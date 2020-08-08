package cn.ibizlab.pms.webapi.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Map;
import java.util.HashMap;
import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[StorySpecDTO]
 */
@Data
public class StorySpecDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [SPEC]
     *
     */
    @JSONField(name = "spec")
    @JsonProperty("spec")
    private String spec;

    /**
     * 属性 [VERIFY]
     *
     */
    @JSONField(name = "verify")
    @JsonProperty("verify")
    private String verify;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private String id;

    /**
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    private Integer version;

    /**
     * 属性 [STORY]
     *
     */
    @JSONField(name = "story")
    @JsonProperty("story")
    private BigInteger story;


    /**
     * 设置 [SPEC]
     */
    public void setSpec(String  spec){
        this.spec = spec ;
        this.modify("spec",spec);
    }

    /**
     * 设置 [VERIFY]
     */
    public void setVerify(String  verify){
        this.verify = verify ;
        this.modify("verify",verify);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [STORY]
     */
    public void setStory(BigInteger  story){
        this.story = story ;
        this.modify("story",story);
    }


}

