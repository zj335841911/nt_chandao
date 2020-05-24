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
import lombok.Data;
import org.springframework.data.annotation.Transient;


import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;


/**
 * 实体[操作历史]
 */
@Data
@TableName(value = "zt_history",resultMap = "HistoryResultMap")
public class History extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 不同
     */
    @TableField(value = "diff")
    @JSONField(name = "diff")
    @JsonProperty("diff")
    private String diff;
    /**
     * 字段
     */
    @TableField(value = "field")
    @JSONField(name = "field")
    @JsonProperty("field")
    private String field;
    /**
     * 新值
     */
    @DEField(name = "new")
    @TableField(value = "new")
    @JSONField(name = "ibiznew")
    @JsonProperty("ibiznew")
    private String ibiznew;
    /**
     * 旧值
     */
    @TableField(value = "old")
    @JSONField(name = "old")
    @JsonProperty("old")
    private String old;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * 关联日志
     */
    @DEField(defaultValue = "0")
    @TableField(value = "action")
    @JSONField(name = "action")
    @JsonProperty("action")
    private BigInteger action;

    /**
     * 关联日志
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Action ztAction;



    /**
     * 设置 [不同]
     */
    public void setDiff(String diff){
        this.diff = diff ;
        this.modify("diff",diff);
    }
    /**
     * 设置 [字段]
     */
    public void setField(String field){
        this.field = field ;
        this.modify("field",field);
    }
    /**
     * 设置 [新值]
     */
    public void setIbiznew(String ibiznew){
        this.ibiznew = ibiznew ;
        this.modify("new",ibiznew);
    }
    /**
     * 设置 [旧值]
     */
    public void setOld(String old){
        this.old = old ;
        this.modify("old",old);
    }
    /**
     * 设置 [关联日志]
     */
    public void setAction(BigInteger action){
        this.action = action ;
        this.modify("action",action);
    }

}


