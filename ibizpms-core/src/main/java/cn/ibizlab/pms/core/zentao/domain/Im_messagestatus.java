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

/**
 * 实体[im_messagestatus]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_im_messagestatus",resultMap = "Im_messagestatusResultMap")
public class Im_messagestatus extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * message
     */
    @TableField(value = "message")
    @JSONField(name = "message")
    @JsonProperty("message")
    private Integer message;
    /**
     * status
     */
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * user
     */
    @DEField(defaultValue = "0")
    @TableField(value = "user")
    @JSONField(name = "user")
    @JsonProperty("user")
    private Integer user;
    /**
     * 虚拟主键
     */
    @TableId(value= "id",type=IdType.ASSIGN_UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private String id;



    /**
     * 设置 [message]
     */
    public void setMessage(Integer message){
        this.message = message ;
        this.modify("message",message);
    }

    /**
     * 设置 [status]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [user]
     */
    public void setUser(Integer user){
        this.user = user ;
        this.modify("user",user);
    }


}


