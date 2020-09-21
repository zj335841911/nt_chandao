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
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

/**
 * 实体[用例库]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_testsuite",resultMap = "IbzLibResultMap")
public class IbzLib extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 描述
     */
    @TableField(value = "desc")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    private String desc;
    /**
     * 最后编辑时间
     */
    @TableField(value = "lastediteddate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "lastediteddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    private Timestamp lastediteddate;
    /**
     * 创建时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "addeddate" , fill = FieldFill.INSERT)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "addeddate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("addeddate")
    private Timestamp addeddate;
    /**
     * 编号
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID)
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * 名称
     */
    @TableField(value = "name")
    @JSONField(name = "name")
    @JsonProperty("name")
    private String name;
    /**
     * 类型
     */
    @TableField(value = "type")
    @JSONField(name = "type")
    @JsonProperty("type")
    private String type;
    /**
     * 由谁创建
     */
    @TableField(value = "addedby")
    @JSONField(name = "addedby")
    @JsonProperty("addedby")
    private String addedby;
    /**
     * 最后编辑人
     */
    @TableField(value = "lasteditedby")
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    private String lasteditedby;



    /**
     * 设置 [描述]
     */
    public void setDesc(String desc){
        this.desc = desc ;
        this.modify("desc",desc);
    }

    /**
     * 设置 [最后编辑时间]
     */
    public void setLastediteddate(Timestamp lastediteddate){
        this.lastediteddate = lastediteddate ;
        this.modify("lastediteddate",lastediteddate);
    }

    /**
     * 格式化日期 [最后编辑时间]
     */
    public String formatLastediteddate(){
        if (this.lastediteddate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(lastediteddate);
    }
    /**
     * 设置 [名称]
     */
    public void setName(String name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [类型]
     */
    public void setType(String type){
        this.type = type ;
        this.modify("type",type);
    }

    /**
     * 设置 [由谁创建]
     */
    public void setAddedby(String addedby){
        this.addedby = addedby ;
        this.modify("addedby",addedby);
    }

    /**
     * 设置 [最后编辑人]
     */
    public void setLasteditedby(String lasteditedby){
        this.lasteditedby = lasteditedby ;
        this.modify("lasteditedby",lasteditedby);
    }


    @Override
    public Serializable getDefaultKey(boolean gen) {
       return IdWorker.getId();
    }
    /**
     * 复制当前对象数据到目标对象(粘贴重置)
     * @param targetEntity 目标数据对象
     * @param bIncEmpty  是否包括空值
     * @param <T>
     * @return
     */
    @Override
    public <T> T copyTo(T targetEntity, boolean bIncEmpty) {
        this.reset("id");
        return super.copyTo(targetEntity,bIncEmpty);
    }
}

