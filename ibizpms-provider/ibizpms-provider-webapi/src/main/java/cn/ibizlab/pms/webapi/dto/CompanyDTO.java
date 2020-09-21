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
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[CompanyDTO]
 */
@Data
public class CompanyDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ADMINS]
     *
     */
    @JSONField(name = "admins")
    @JsonProperty("admins")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    private String admins;

    /**
     * 属性 [FAX]
     *
     */
    @JSONField(name = "fax")
    @JsonProperty("fax")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    private String fax;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String deleted;

    /**
     * 属性 [WEBSITE]
     *
     */
    @JSONField(name = "website")
    @JsonProperty("website")
    @Size(min = 0, max = 120, message = "内容长度必须小于等于[120]")
    private String website;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    private Long id;

    /**
     * 属性 [ZIPCODE]
     *
     */
    @JSONField(name = "zipcode")
    @JsonProperty("zipcode")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    private String zipcode;

    /**
     * 属性 [ADDRESS]
     *
     */
    @JSONField(name = "address")
    @JsonProperty("address")
    @Size(min = 0, max = 120, message = "内容长度必须小于等于[120]")
    private String address;

    /**
     * 属性 [BACKYARD]
     *
     */
    @JSONField(name = "backyard")
    @JsonProperty("backyard")
    @Size(min = 0, max = 120, message = "内容长度必须小于等于[120]")
    private String backyard;

    /**
     * 属性 [NAME]
     *
     */
    @JSONField(name = "name")
    @JsonProperty("name")
    @NotBlank(message = "[公司名称]不允许为空!")
    @Size(min = 0, max = 120, message = "内容长度必须小于等于[120]")
    private String name;

    /**
     * 属性 [GUEST]
     *
     */
    @JSONField(name = "guest")
    @JsonProperty("guest")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    private String guest;

    /**
     * 属性 [PHONE]
     *
     */
    @JSONField(name = "phone")
    @JsonProperty("phone")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    private String phone;


    /**
     * 设置 [ADMINS]
     */
    public void setAdmins(String  admins){
        this.admins = admins ;
        this.modify("admins",admins);
    }

    /**
     * 设置 [FAX]
     */
    public void setFax(String  fax){
        this.fax = fax ;
        this.modify("fax",fax);
    }

    /**
     * 设置 [WEBSITE]
     */
    public void setWebsite(String  website){
        this.website = website ;
        this.modify("website",website);
    }

    /**
     * 设置 [ZIPCODE]
     */
    public void setZipcode(String  zipcode){
        this.zipcode = zipcode ;
        this.modify("zipcode",zipcode);
    }

    /**
     * 设置 [ADDRESS]
     */
    public void setAddress(String  address){
        this.address = address ;
        this.modify("address",address);
    }

    /**
     * 设置 [BACKYARD]
     */
    public void setBackyard(String  backyard){
        this.backyard = backyard ;
        this.modify("backyard",backyard);
    }

    /**
     * 设置 [NAME]
     */
    public void setName(String  name){
        this.name = name ;
        this.modify("name",name);
    }

    /**
     * 设置 [GUEST]
     */
    public void setGuest(String  guest){
        this.guest = guest ;
        this.modify("guest",guest);
    }

    /**
     * 设置 [PHONE]
     */
    public void setPhone(String  phone){
        this.phone = phone ;
        this.modify("phone",phone);
    }


}


