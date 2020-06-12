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
 * 实体[effort]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_effort",resultMap = "EffortResultMap")
public class Effort extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * user
     */
    @TableField(value = "user")
    @JSONField(name = "user")
    @JsonProperty("user")
    private String user;
    /**
     * idvalue
     */
    @DEField(defaultValue = "0")
    @TableField(value = "idvalue")
    @JSONField(name = "idvalue")
    @JsonProperty("idvalue")
    private Integer idvalue;
    /**
     * status
     */
    @TableField(value = "status")
    @JSONField(name = "status")
    @JsonProperty("status")
    private String status;
    /**
     * end
     */
    @DEField(defaultValue = "0000-00-00 00:00:00")
    @TableField(value = "end")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "end" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("end")
    private Timestamp end;
    /**
     * date
     */
    @TableField(value = "date")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "date" , format="yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * name
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * desc
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * todo
     */
    @TableField(value = "todo")
    @JSONField(name = "todo")
    @JsonProperty("todo")
    private String todo;
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
     * begin
     */
    @DEField(defaultValue = "0000-00-00 00:00:00")
    @TableField(value = "begin")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "begin" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("begin")
    private Timestamp begin;



    /**
     * 设置 [user]
     */
    public void setUser(String user){
        this.user = user ;
        this.modify("user",user);
    }

    /**
     * 设置 [idvalue]
     */
    public void setIdvalue(Integer idvalue){
        this.idvalue = idvalue ;
        this.modify("idvalue",idvalue);
    }

    /**
     * 设置 [status]
     */
    public void setStatus(String status){
        this.status = status ;
        this.modify("status",status);
    }

    /**
     * 设置 [end]
     */
    public void setEnd(Timestamp end){
        this.end = end ;
        this.modify("end",end);
    }

    /**
     * 格式化日期 [end]
     */
    public String formatEnd(){
        if (this.end == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS");
        return sdf.format(end);
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
        SimpleDateFormat sdf = new SimpleDateFormat("%1$tY-%1$tm-%1$td");
        return sdf.format(date);
    }
    /**
     * 设置 [name]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [desc]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [todo]
     */
    public void setTodo(String todo){
        this.todo = todo ;
        this.modify("todo",todo);
    }

    /**
     * 设置 [type]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [begin]
     */
    public void setBegin(Timestamp begin){
        this.begin = begin ;
        this.modify("begin",begin);
    }

    /**
     * 格式化日期 [begin]
     */
    public String formatBegin(){
        if (this.begin == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS");
        return sdf.format(begin);
    }

}


