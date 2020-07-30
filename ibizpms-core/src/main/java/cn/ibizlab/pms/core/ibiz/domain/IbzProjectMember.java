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
import java.io.Serializable;
import lombok.*;
import org.springframework.data.annotation.Transient;
import cn.ibizlab.pms.util.annotation.Audit;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[项目相关成员]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_project",resultMap = "IbzProjectMemberResultMap")
public class IbzProjectMember extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 项目名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 发布负责人
     */
    @TableField(exist = false)
    @JSONField(name = "rd")
    @JsonProperty("rd")
    private String rd;
    /**
     * 产品负责人
     */
    @TableField(exist = false)
    @JSONField(name = "po")
    @JsonProperty("po")
    private String po;
    /**
     * 项目负责人
     */
    @TableField(exist = false)
    @JSONField(name = "pm")
    @JsonProperty("pm")
    private String pm;
    /**
     * 测试负责人
     */
    @TableField(exist = false)
    @JSONField(name = "qd")
    @JsonProperty("qd")
    private String qd;



    /**
     * 设置 [项目名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }


}


