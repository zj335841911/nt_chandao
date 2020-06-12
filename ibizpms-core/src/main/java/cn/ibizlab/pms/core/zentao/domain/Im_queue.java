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
 * 实体[im_queue]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_im_queue",resultMap = "Im_queueResultMap")
public class Im_queue extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * processDate
     */
    @TableField(value = "processdate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "processdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("processdate")
    private Timestamp processdate;
    /**
     * addDate
     */
    @TableField(value = "adddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "adddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("adddate")
    private Timestamp adddate;
    /**
     * content
     */
    @TableField(value = "content")
    @JSONField(name = "content")
    @JsonProperty("content")
    private String content;
    /**
     * type
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * status
     */
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * result
     */
    @TableField(value = "result")
    @JSONField(name = "result")
    @JsonProperty("result")
    private String result;



    /**
     * 设置 [processDate]
     */
    public void setProcessdate(Timestamp processdate){
        this.processdate = processdate ;
        this.modify("processdate",processdate);
    }

    /**
     * 格式化日期 [processDate]
     */
    public String formatProcessdate(){
        if (this.processdate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("defieldFormatStr");
        return sdf.format(processdate);
    }
    /**
     * 设置 [addDate]
     */
    public void setAdddate(Timestamp adddate){
        this.adddate = adddate ;
        this.modify("adddate",adddate);
    }

    /**
     * 格式化日期 [addDate]
     */
    public String formatAdddate(){
        if (this.adddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("defieldFormatStr");
        return sdf.format(adddate);
    }
    /**
     * 设置 [content]
     */
    public void setContent(String content){
        this.content = content ;
        this.modify("content",content);
    }

    /**
     * 设置 [type]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [status]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [result]
     */
    public void setResult(String result){
        this.result = result ;
        this.modify("result",result);
    }


}


