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
 * 实体[im_conferenceaction]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_im_conferenceaction",resultMap = "Im_conferenceactionResultMap")
public class Im_conferenceaction extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * rid
     */
    @TableField(value = "rid")
    @JSONField(name = "rid")
    @JsonProperty("rid")
    private String rid;
    /**
     * type
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * user
     */
    @DEField(defaultValue = "0")
    @TableField(value = "user")
    @JSONField(name = "user")
    @JsonProperty("user")
    private Integer user;
    /**
     * date
     */
    @DEField(defaultValue = "0000-00-00 00:00:00")
    @TableField(value = "date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;



    /**
     * 设置 [rid]
     */
    public void setRid(String rid){
        this.rid = rid ;
        this.modify("rid",rid);
    }

    /**
     * 设置 [type]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [user]
     */
    public void setUser(Integer user){
        this.user = user ;
        this.modify("user",user);
    }

    /**
     * 设置 [date]
     */
    public void setDate(Timestamp date){
        this.date = date ;
        this.modify("date",date);
    }

    /**
     * 格式化日期 [date]
     */
    public String formatDate(){
        if (this.date == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS");
        return sdf.format(date);
    }

}


