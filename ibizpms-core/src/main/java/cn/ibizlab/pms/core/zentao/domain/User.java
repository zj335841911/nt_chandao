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
import lombok.*;
import org.springframework.data.annotation.Transient;


import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;


/**
 * 实体[用户]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "zt_user",resultMap = "UserResultMap")
public class User extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * password
     */
    @TableField(value = "password")
    @JSONField(name = "password")
    @JsonProperty("password")
    private String password;
    /**
     * address
     */
    @TableField(value = "address")
    @JSONField(name = "address")
    @JsonProperty("address")
    private String address;
    /**
     * weixin
     */
    @TableField(value = "weixin")
    @JSONField(name = "weixin")
    @JsonProperty("weixin")
    private String weixin;
    /**
     * dingding
     */
    @TableField(value = "dingding")
    @JSONField(name = "dingding")
    @JsonProperty("dingding")
    private String dingding;
    /**
     * fails
     */
    @DEField(defaultValue = "0")
    @TableField(value = "fails")
    @JSONField(name = "fails")
    @JsonProperty("fails")
    private Integer fails;
    /**
     * slack
     */
    @TableField(value = "slack")
    @JSONField(name = "slack")
    @JsonProperty("slack")
    private String slack;
    /**
     * ranzhi
     */
    @TableField(value = "ranzhi")
    @JSONField(name = "ranzhi")
    @JsonProperty("ranzhi")
    private String ranzhi;
    /**
     * account
     */
    @TableField(value = "account")
    @JSONField(name = "account")
    @JsonProperty("account")
    private String account;
    /**
     * locked
     */
    @DEField(defaultValue = "0000-00-00 00:00:00")
    @TableField(value = "locked")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "locked" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("locked")
    private Timestamp locked;
    /**
     * avatar
     */
    @TableField(value = "avatar")
    @JSONField(name = "avatar")
    @JsonProperty("avatar")
    private String avatar;
    /**
     * scoreLevel
     */
    @DEField(defaultValue = "0")
    @TableField(value = "scorelevel")
    @JSONField(name = "scorelevel")
    @JsonProperty("scorelevel")
    private Integer scorelevel;
    /**
     * realname
     */
    @TableField(value = "realname")
    @JSONField(name = "realname")
    @JsonProperty("realname")
    private String realname;
    /**
     * zipcode
     */
    @TableField(value = "zipcode")
    @JSONField(name = "zipcode")
    @JsonProperty("zipcode")
    private String zipcode;
    /**
     * dept
     */
    @DEField(defaultValue = "0")
    @TableField(value = "dept")
    @JSONField(name = "dept")
    @JsonProperty("dept")
    private Integer dept;
    /**
     * commiter
     */
    @TableField(value = "commiter")
    @JSONField(name = "commiter")
    @JsonProperty("commiter")
    private String commiter;
    /**
     * role
     */
    @TableField(value = "role")
    @JSONField(name = "role")
    @JsonProperty("role")
    private String role;
    /**
     * 逻辑删除标志
     */
    @DEField(defaultValue = "0" , preType = DEPredefinedFieldType.LOGICVALID, logicval = "0" , logicdelval="1")
    @TableLogic(value= "0",delval="1")
    @TableField(value = "deleted")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * last
     */
    @DEField(defaultValue = "0")
    @TableField(value = "last")
    @JSONField(name = "last")
    @JsonProperty("last")
    private Integer last;
    /**
     * clientStatus
     */
    @TableField(value = "clientstatus")
    @JSONField(name = "clientstatus")
    @JsonProperty("clientstatus")
    private String clientstatus;
    /**
     * skype
     */
    @TableField(value = "skype")
    @JSONField(name = "skype")
    @JsonProperty("skype")
    private String skype;
    /**
     * whatsapp
     */
    @TableField(value = "whatsapp")
    @JSONField(name = "whatsapp")
    @JsonProperty("whatsapp")
    private String whatsapp;
    /**
     * score
     */
    @DEField(defaultValue = "0")
    @TableField(value = "score")
    @JSONField(name = "score")
    @JsonProperty("score")
    private Integer score;
    /**
     * gender
     */
    @TableField(value = "gender")
    @JSONField(name = "gender")
    @JsonProperty("gender")
    private String gender;
    /**
     * mobile
     */
    @TableField(value = "mobile")
    @JSONField(name = "mobile")
    @JsonProperty("mobile")
    private String mobile;
    /**
     * clientLang
     */
    @DEField(defaultValue = "zh-cn")
    @TableField(value = "clientlang")
    @JSONField(name = "clientlang")
    @JsonProperty("clientlang")
    private String clientlang;
    /**
     * visits
     */
    @DEField(defaultValue = "0")
    @TableField(value = "visits")
    @JSONField(name = "visits")
    @JsonProperty("visits")
    private Integer visits;
    /**
     * join
     */
    @DEField(defaultValue = "0000-00-00")
    @TableField(value = "join")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "join" , format="yyyy-MM-dd")
    @JsonProperty("join")
    private Timestamp join;
    /**
     * email
     */
    @TableField(value = "email")
    @JSONField(name = "email")
    @JsonProperty("email")
    private String email;
    /**
     * ip
     */
    @TableField(value = "ip")
    @JSONField(name = "ip")
    @JsonProperty("ip")
    private String ip;
    /**
     * birthday
     */
    @DEField(defaultValue = "0000-00-00")
    @TableField(value = "birthday")
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "birthday" , format="yyyy-MM-dd")
    @JsonProperty("birthday")
    private Timestamp birthday;
    /**
     * nickname
     */
    @TableField(value = "nickname")
    @JSONField(name = "nickname")
    @JsonProperty("nickname")
    private String nickname;
    /**
     * phone
     */
    @TableField(value = "phone")
    @JSONField(name = "phone")
    @JsonProperty("phone")
    private String phone;
    /**
     * id
     */
    @DEField(isKeyField=true)
    @TableId(value= "id",type=IdType.UUID)
    @JSONField(name = "id")
    @JsonProperty("id")
    private BigInteger id;
    /**
     * qq
     */
    @TableField(value = "qq")
    @JSONField(name = "qq")
    @JsonProperty("qq")
    private String qq;



    /**
     * 设置 [password]
     */
    public void setPassword(String password){
        this.password = password ;
        this.modify("password",password);
    }
    /**
     * 设置 [address]
     */
    public void setAddress(String address){
        this.address = address ;
        this.modify("address",address);
    }
    /**
     * 设置 [weixin]
     */
    public void setWeixin(String weixin){
        this.weixin = weixin ;
        this.modify("weixin",weixin);
    }
    /**
     * 设置 [dingding]
     */
    public void setDingding(String dingding){
        this.dingding = dingding ;
        this.modify("dingding",dingding);
    }
    /**
     * 设置 [fails]
     */
    public void setFails(Integer fails){
        this.fails = fails ;
        this.modify("fails",fails);
    }
    /**
     * 设置 [slack]
     */
    public void setSlack(String slack){
        this.slack = slack ;
        this.modify("slack",slack);
    }
    /**
     * 设置 [ranzhi]
     */
    public void setRanzhi(String ranzhi){
        this.ranzhi = ranzhi ;
        this.modify("ranzhi",ranzhi);
    }
    /**
     * 设置 [account]
     */
    public void setAccount(String account){
        this.account = account ;
        this.modify("account",account);
    }
    /**
     * 设置 [locked]
     */
    public void setLocked(Timestamp locked){
        this.locked = locked ;
        this.modify("locked",locked);
    }
    /**
     * 设置 [avatar]
     */
    public void setAvatar(String avatar){
        this.avatar = avatar ;
        this.modify("avatar",avatar);
    }
    /**
     * 设置 [scoreLevel]
     */
    public void setScorelevel(Integer scorelevel){
        this.scorelevel = scorelevel ;
        this.modify("scorelevel",scorelevel);
    }
    /**
     * 设置 [realname]
     */
    public void setRealname(String realname){
        this.realname = realname ;
        this.modify("realname",realname);
    }
    /**
     * 设置 [zipcode]
     */
    public void setZipcode(String zipcode){
        this.zipcode = zipcode ;
        this.modify("zipcode",zipcode);
    }
    /**
     * 设置 [dept]
     */
    public void setDept(Integer dept){
        this.dept = dept ;
        this.modify("dept",dept);
    }
    /**
     * 设置 [commiter]
     */
    public void setCommiter(String commiter){
        this.commiter = commiter ;
        this.modify("commiter",commiter);
    }
    /**
     * 设置 [role]
     */
    public void setRole(String role){
        this.role = role ;
        this.modify("role",role);
    }
    /**
     * 设置 [last]
     */
    public void setLast(Integer last){
        this.last = last ;
        this.modify("last",last);
    }
    /**
     * 设置 [clientStatus]
     */
    public void setClientstatus(String clientstatus){
        this.clientstatus = clientstatus ;
        this.modify("clientstatus",clientstatus);
    }
    /**
     * 设置 [skype]
     */
    public void setSkype(String skype){
        this.skype = skype ;
        this.modify("skype",skype);
    }
    /**
     * 设置 [whatsapp]
     */
    public void setWhatsapp(String whatsapp){
        this.whatsapp = whatsapp ;
        this.modify("whatsapp",whatsapp);
    }
    /**
     * 设置 [score]
     */
    public void setScore(Integer score){
        this.score = score ;
        this.modify("score",score);
    }
    /**
     * 设置 [gender]
     */
    public void setGender(String gender){
        this.gender = gender ;
        this.modify("gender",gender);
    }
    /**
     * 设置 [mobile]
     */
    public void setMobile(String mobile){
        this.mobile = mobile ;
        this.modify("mobile",mobile);
    }
    /**
     * 设置 [clientLang]
     */
    public void setClientlang(String clientlang){
        this.clientlang = clientlang ;
        this.modify("clientlang",clientlang);
    }
    /**
     * 设置 [visits]
     */
    public void setVisits(Integer visits){
        this.visits = visits ;
        this.modify("visits",visits);
    }
    /**
     * 设置 [join]
     */
    public void setJoin(Timestamp join){
        this.join = join ;
        this.modify("join",join);
    }
    /**
     * 设置 [email]
     */
    public void setEmail(String email){
        this.email = email ;
        this.modify("email",email);
    }
    /**
     * 设置 [ip]
     */
    public void setIp(String ip){
        this.ip = ip ;
        this.modify("ip",ip);
    }
    /**
     * 设置 [birthday]
     */
    public void setBirthday(Timestamp birthday){
        this.birthday = birthday ;
        this.modify("birthday",birthday);
    }
    /**
     * 设置 [nickname]
     */
    public void setNickname(String nickname){
        this.nickname = nickname ;
        this.modify("nickname",nickname);
    }
    /**
     * 设置 [phone]
     */
    public void setPhone(String phone){
        this.phone = phone ;
        this.modify("phone",phone);
    }
    /**
     * 设置 [qq]
     */
    public void setQq(String qq){
        this.qq = qq ;
        this.modify("qq",qq);
    }

}


