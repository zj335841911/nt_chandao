package cn.ibizlab.pms.core.ibizpro.domain;

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
 * 实体[系统模板]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_IBZPRO_SYSTPL",resultMap = "IBZProSysTplResultMap")
public class IBZProSysTpl extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 系统模板标识
     */
    @DEField(name = "ibzpro_systplid" , isKeyField=true)
    @TableId(value= "ibzpro_systplid",type=IdType.ASSIGN_UUID)
    @JSONField(name = "ibzprosystplid")
    @JsonProperty("ibzprosystplid")
    private String ibzprosystplid;
    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @TableField(value = "createman" , fill = FieldFill.INSERT)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;
    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "createdate" , fill = FieldFill.INSERT)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;
    /**
     * 系统模板名称
     */
    @DEField(name = "ibzpro_systplname")
    @TableField(value = "ibzpro_systplname")
    @JSONField(name = "ibzprosystplname")
    @JsonProperty("ibzprosystplname")
    private String ibzprosystplname;
    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @TableField(value = "updateman")
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;
    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @TableField(value = "updatedate")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;
    /**
     * 是否公开
     */
    @DEField(defaultValue = "0")
    @TableField(value = "public")
    @JSONField(name = "ibizpublic")
    @JsonProperty("ibizpublic")
    private String ibizpublic;
    /**
     * 来源对象
     */
    @DEField(name = "ibiz_sourceobject")
    @TableField(value = "ibiz_sourceobject")
    @JSONField(name = "ibiz_sourceobject")
    @JsonProperty("ibiz_sourceobject")
    private String ibizSourceobject;
    /**
     * 模板内容
     */
    @TableField(value = "content")
    @JSONField(name = "content")
    @JsonProperty("content")
    private String content;
    /**
     * IBIZ模板类型
     */
    @DEField(defaultValue = "freemarker")
    @TableField(value = "tpltype")
    @JSONField(name = "tpltype")
    @JsonProperty("tpltype")
    private String tpltype;
    /**
     * id
     */
    @TableField(value = "file")
    @JSONField(name = "file")
    @JsonProperty("file")
    private Long file;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.File ztFile;



    /**
     * 设置 [系统模板名称]
     */
    public void setIbzprosystplname(String ibzprosystplname){
        this.ibzprosystplname = ibzprosystplname ;
        this.modify("ibzpro_systplname",ibzprosystplname);
    }

    /**
     * 设置 [是否公开]
     */
    public void setIbizpublic(String ibizpublic){
        this.ibizpublic = ibizpublic ;
        this.modify("public",ibizpublic);
    }

    /**
     * 设置 [来源对象]
     */
    public void setIbizSourceobject(String ibizSourceobject){
        this.ibizSourceobject = ibizSourceobject ;
        this.modify("ibiz_sourceobject",ibizSourceobject);
    }

    /**
     * 设置 [模板内容]
     */
    public void setContent(String content){
        this.content = content ;
        this.modify("content",content);
    }

    /**
     * 设置 [IBIZ模板类型]
     */
    public void setTpltype(String tpltype){
        this.tpltype = tpltype ;
        this.modify("tpltype",tpltype);
    }

    /**
     * 设置 [id]
     */
    public void setFile(Long file){
        this.file = file ;
        this.modify("file",file);
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
        this.reset("ibzpro_systplid");
        return super.copyTo(targetEntity,bIncEmpty);
    }
}


