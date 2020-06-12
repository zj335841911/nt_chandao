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
 * 实体[repohistory]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_repohistory",resultMap = "RepoHistoryResultMap")
public class RepoHistory extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * committer
     */
    @TableField(value = "committer")
    @JSONField(name = "committer")
    @JsonProperty("committer")
    private String committer;
    /**
     * revision
     */
    @TableField(value = "revision")
    @JSONField(name = "revision")
    @JsonProperty("revision")
    private String revision;
    /**
     * time
     */
    @TableField(value = "time")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "time" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("time")
    private Timestamp time;
    /**
     * repo
     */
    @TableField(value = "repo")
    @JSONField(name = "repo")
    @JsonProperty("repo")
    private Integer repo;
    /**
     * comment
     */
    @TableField(value = "comment")
    @JSONField(name = "comment")
    @JsonProperty("comment")
    private String comment;
    /**
     * commit
     */
    @TableField(value = "commit")
    @JSONField(name = "commit")
    @JsonProperty("commit")
    private Integer commit;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;



    /**
     * 设置 [committer]
     */
    public void setCommitter(String committer){
        this.committer = committer ;
        this.modify("committer",committer);
    }

    /**
     * 设置 [revision]
     */
    public void setRevision(String revision){
        this.revision = revision ;
        this.modify("revision",revision);
    }

    /**
     * 设置 [time]
     */
    public void setTime(Timestamp time){
        this.time = time ;
        this.modify("time",time);
    }

    /**
     * 格式化日期 [time]
     */
    public String formatTime(){
        if (this.time == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS");
        return sdf.format(time);
    }
    /**
     * 设置 [repo]
     */
    public void setRepo(Integer repo){
        this.repo = repo ;
        this.modify("repo",repo);
    }

    /**
     * 设置 [comment]
     */
    public void setComment(String comment){
        this.comment = comment ;
        this.modify("comment",comment);
    }

    /**
     * 设置 [commit]
     */
    public void setCommit(Integer commit){
        this.commit = commit ;
        this.modify("commit",commit);
    }


}


