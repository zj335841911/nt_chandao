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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;

/**
 * 实体[im_conference]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_im_conference",resultMap = "Im_conferenceResultMap")
public class Im_conference extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * status
     */
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * cgid
     */
    @TableField(value = "cgid")
    @JSONField(name = "cgid")
    @JsonProperty("cgid")
    private String cgid;
    /**
     * openedBy
     */
    @DEField(defaultValue = "0")
    @TableField(value = "openedby")
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private Integer openedby;
    /**
     * openedDate
     */
    @DEField(defaultValue = "0000-00-00 00:00:00")
    @TableField(value = "openeddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "openeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("openeddate")
    private Timestamp openeddate;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * rid
     */
    @TableField(value = "rid")
    @JSONField(name = "rid")
    @JsonProperty("rid")
    private String rid;
    /**
     * participants
     */
    @TableField(value = "participants")
    @JSONField(name = "participants")
    @JsonProperty("participants")
    private String participants;



    /**
     * 设置 [status]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }
    /**
     * 设置 [cgid]
     */
    public void setCgid(String cgid){
        this.cgid = cgid ;
        this.modify("cgid",cgid);
    }
    /**
     * 设置 [openedBy]
     */
    public void setOpenedby(Integer openedby){
        this.openedby = openedby ;
        this.modify("openedby",openedby);
    }
    /**
     * 设置 [openedDate]
     */
    public void setOpeneddate(Timestamp openeddate){
        this.openeddate = openeddate ;
        this.modify("openeddate",openeddate);
    }
    /**
     * 设置 [rid]
     */
    public void setRid(String rid){
        this.rid = rid ;
        this.modify("rid",rid);
    }
    /**
     * 设置 [participants]
     */
    public void setParticipants(String participants){
        this.participants = participants ;
        this.modify("participants",participants);
    }

}


