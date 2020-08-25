package cn.ibizlab.pms.core.extensions.rest;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.util.zentao.helper.ZTAPIHelper;
import cn.ibizlab.pms.core.util.zentao.helper.ZTUserHelper;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.util.client.IBZUAAFeignClient;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.errors.InternalServerErrorException;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.util.CollectionUtils;
import org.springframework.util.DigestUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 过渡代码
 */
@RestController
public class UAARelatedRest {
    String ztpassword = "ibiz@123";

    @PostMapping(value="/ztlogin")
    public JSONObject doZTLogin(String uaaloginname, String  token){
        JSONObject userJO = doZTLogin(uaaloginname, ztpassword, token);
        return userJO;
    }

    @Deprecated
    @GetMapping(value="/ztusers/uaaloginname")
    public JSONObject getUser(String uaaloginname){
        User ztUser = getZTUserInfo(uaaloginname);
        return (JSONObject)JSON.toJSON(ztUser);
    }

    /**
     * 从UAA用户账号获取对应的【ZT】用户信息
     *
     * @param loginname 匹配account属性、commiter属性。
     * @return UAA账号=git账号=【ZT】源代码账号(User-commiter属性)
     * 注意：根据commiter，查询到多个账号时，只返回符合条件的第一个账号。
     */
    private User getZTUserInfo(String loginname) {
        if(StringUtils.isEmpty(loginname)){
            throw new InternalServerErrorException("账户名不能为空");
        }
        IUserService userService = SpringContextHolder.getBean(IUserService.class);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
//        queryWrapper.eq("account",loginname).or().eq("commiter", loginname);
        //兼容测试环境及生产环境
        queryWrapper.eq("account",loginname).or().like("commiter", loginname);
        List<User> users = userService.list(queryWrapper);

        User ztUser = null;
        if (CollectionUtils.isEmpty(users)) {

        } else if (users.size() > 1) {
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0012, null, null);
        } else {
            ztUser = users.get(0);
            //兼容测试及生产环境
            for(String commiter:ztUser.getCommiter().split(";")){
                if(loginname.equals(commiter)){
                    return ztUser;
                }
            }
            return null;
        }
        if (ztUser == null || ztUser.getCommiter() == null) {
            //（二期）没有对应账号，后台新建账号，再登录
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0010, null, null);
        }
        return ztUser;
    }
    /**
     * 根据ZT账号，登录。
     *
     * @param loginname ZT账号
     */
    public static JSONObject doZTLogin(String loginname, String password, String token) {
        ZTResult rstSession = new ZTResult();
        String zentaoSid = DigestUtils.md5DigestAsHex(token.getBytes());
        if (!ZTAPIHelper.getSessionID(rstSession, zentaoSid)) {
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0013,null,null);
        }

        ZTResult rstLogin = new ZTResult();
        JSONObject jo = new JSONObject();
        jo.put("account", loginname);
        jo.put("password", password);
        if (!ZTUserHelper.login(zentaoSid, jo, rstLogin)) {
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0014,null,null);
        }

        JSONObject userJO = rstLogin.getResult().getJSONObject("user");
        return userJO;
    }
}
