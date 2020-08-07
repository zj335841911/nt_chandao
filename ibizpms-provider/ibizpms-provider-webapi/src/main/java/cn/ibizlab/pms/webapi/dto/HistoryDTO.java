package cn.ibizlab.pms.webapi.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Map;
import java.util.HashMap;
import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[HistoryDTO]
 */
@Data
public class HistoryDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [DIFF]
     *
     */
    @JSONField(name = "diff")
    @JsonProperty("diff")
    private String diff;

    /**
     * 属性 [FIELD]
     *
     */
    @JSONField(name = "field")
    @JsonProperty("field")
    private String field;

    /**
     * 属性 [NEW]
     *
     */
    @JSONField(name = "ibiznew")
    @JsonProperty("ibiznew")
    private String ibiznew;

    /**
     * 属性 [OLD]
     *
     */
    @JSONField(name = "old")
    @JsonProperty("old")
    private String old;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;

    /**
     * 属性 [ACTION]
     *
     */
    @JSONField(name = "action")
    @JsonProperty("action")
    private BigInteger action;


    /**
     * 设置 [DIFF]
     */
    public void setDiff(String  diff){
        this.diff = diff ;
        this.modify("diff",diff);
    }

    /**
     * 设置 [FIELD]
     */
    public void setField(String  field){
        this.field = field ;
        this.modify("field",field);
    }

    /**
     * 设置 [NEW]
     */
    public void setIbiznew(String  ibiznew){
        this.ibiznew = ibiznew ;
        this.modify("new",ibiznew);
    }

    /**
     * 设置 [OLD]
     */
    public void setOld(String  old){
        this.old = old ;
        this.modify("old",old);
    }

    /**
     * 设置 [ACTION]
     */
    public void setAction(BigInteger  action){
        this.action = action ;
        this.modify("action",action);
    }


}

