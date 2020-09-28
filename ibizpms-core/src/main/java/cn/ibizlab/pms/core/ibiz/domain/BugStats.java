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
 * 实体[Bug统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_bug",resultMap = "BugStatsResultMap")
public class BugStats extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 标识
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;
    /**
     * 名称
     */
    @TableField(value = "`title`")
    @JSONField(name = "title")
    @JsonProperty("title")
    private String title;
    /**
     * 由谁创建
     */
    @TableField(value = "`openedby`")
    @JSONField(name = "openedby")
    @JsonProperty("openedby")
    private String openedby;
    /**
     * 未解决
     */
    @TableField(exist = false)
    @JSONField(name = "bugwjj")
    @JsonProperty("bugwjj")
    private Integer bugwjj;
    /**
     * 设计如此
     */
    @TableField(exist = false)
    @JSONField(name = "bugbydesign")
    @JsonProperty("bugbydesign")
    private Integer bugbydesign;
    /**
     * 重复Bug
     */
    @TableField(exist = false)
    @JSONField(name = "bugduplicate")
    @JsonProperty("bugduplicate")
    private Integer bugduplicate;
    /**
     * 外部原因
     */
    @TableField(exist = false)
    @JSONField(name = "bugexternal")
    @JsonProperty("bugexternal")
    private Integer bugexternal;
    /**
     * 已解决
     */
    @TableField(exist = false)
    @JSONField(name = "bugfixed")
    @JsonProperty("bugfixed")
    private Integer bugfixed;
    /**
     * 无法重现
     */
    @TableField(exist = false)
    @JSONField(name = "bugnotrepro")
    @JsonProperty("bugnotrepro")
    private Integer bugnotrepro;
    /**
     * 延期处理
     */
    @TableField(exist = false)
    @JSONField(name = "bugpostponed")
    @JsonProperty("bugpostponed")
    private Integer bugpostponed;
    /**
     * 不予解决
     */
    @TableField(exist = false)
    @JSONField(name = "bugwillnotfix")
    @JsonProperty("bugwillnotfix")
    private Integer bugwillnotfix;
    /**
     * 转为需求
     */
    @TableField(exist = false)
    @JSONField(name = "bugtostory")
    @JsonProperty("bugtostory")
    private Integer bugtostory;
    /**
     * 有效率
     */
    @TableField(exist = false)
    @JSONField(name = "bugefficient")
    @JsonProperty("bugefficient")
    private String bugefficient;
    /**
     * 总计
     */
    @TableField(exist = false)
    @JSONField(name = "bugtotal")
    @JsonProperty("bugtotal")
    private Integer bugtotal;



    /**
     * 设置 [名称]
     */
    public void setTitle(String title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [由谁创建]
     */
    public void setOpenedby(String openedby){
        this.openedby = openedby ;
        this.modify("openedby",openedby);
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


