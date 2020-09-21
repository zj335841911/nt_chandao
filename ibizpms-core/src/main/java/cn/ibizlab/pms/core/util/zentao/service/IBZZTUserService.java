package cn.ibizlab.pms.core.util.zentao.service;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.helper.ZTAPIHelper;
import cn.ibizlab.pms.core.util.zentao.helper.ZTUserHelper;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.util.domain.IBZUSER;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.errors.InternalServerErrorException;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthTokenUtil;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import cn.ibizlab.pms.util.service.AuthenticationUserService;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.hibernate.validator.internal.util.StringHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.util.StringUtils;

import java.util.Map;

/**
 * 账户认证：ZT (account，password)
 * 用户信息：ZT (username，gender....)
 */
@Service("IBZZTUserService")
@ConditionalOnExpression("(!${ibiz.enablePermissionValid:false})&&'${ibiz.auth.service:SimpleUserService}'.equals('IBZZTUserService')")
public class IBZZTUserService implements AuthenticationUserService{

    @Autowired
    private IUserService userService;
    @Autowired
    private AuthTokenUtil jwtTokenUtil;

    @Override
    public AuthenticationUser loadUserByUsername(String username) {
        if (username == null || username.trim().isEmpty()) {
            throw new InternalServerErrorException("用户还未登录");
        }
        String[] accountInfo = username.split("[|]");
        String loginname = username;
        String domains = "";
        if (accountInfo.length == 2) {
            loginname = accountInfo[0].trim();
            domains = accountInfo[1].trim();
        }
        AuthenticationUser user = AuthenticationUser.getAuthenticationUser();
        if (user == null || user.getUsername() == null || !loginname.equals(user.getUsername())) {
            throw new InternalServerErrorException("用户还未登录");
        }

        return user;
    }

    @Override
    public AuthenticationUser loadUserByLogin(String username, String password) {
        if (username == null || username.trim().isEmpty() || password == null || password.trim().isEmpty()) {
            throw new InternalServerErrorException("请输入用户名密码");
        }
        String[] accountInfo = username.split("[|]");
        String loginname = username;
        String domains = "";

        if (accountInfo.length == 2) {
            loginname = accountInfo[0].trim();
            domains = accountInfo[1].trim();
        }

        ZTResult rstSession = new ZTResult();
        if (!ZTAPIHelper.getSessionID(rstSession)) {
            throw new InternalServerErrorException("登录失败");
        }

        String zentaoSid1 = JSONObject.parseObject(rstSession.getResult().getString("data")).getString("sessionID");
        ZTResult rstSession2 = new ZTResult();
        if (!ZTAPIHelper.getSessionID(rstSession2,zentaoSid1)) {
            throw new InternalServerErrorException("登录失败");
        }
        String zentaoSid2 = DigestUtils.md5DigestAsHex(zentaoSid1.getBytes());
        ZTResult rstLogin = new ZTResult();
        JSONObject jo = new JSONObject();
        jo.put("account", loginname);
        jo.put("password", password);
        if (!ZTUserHelper.login(zentaoSid2, jo, rstLogin)) {
            throw new InternalServerErrorException("登录失败");
        }

        JSONObject userJO = rstLogin.getResult().getJSONObject("user");
        AuthenticationUser user = new AuthenticationUser();
        user.setUserid(userJO.getString("id"));
        user.setUsername(userJO.getString("account"));
        user.setLoginname(userJO.getString("account"));
        user.setDomain(domains);
        user.setEmail(userJO.getString("email"));
        user.setAvatar(userJO.getString("avatar"));
        user.setNickname(userJO.getString("nickname"));
        if (userJO.getString("birthday") == null || userJO.getString("birthday").isEmpty() || "0000-00-00".equals(userJO.getString("birthday"))) {
            user.setBirthday(null);
        } else {
            user.setBirthday(userJO.getTimestamp("birthday"));
        }
        user.setAddr(userJO.getString("address"));
        user.setSex(userJO.getString("gender"));
        Map<String,Object> sessionParams = user.getSessionParams();
        sessionParams.put("ztuser", userJO);
        sessionParams.put("zentaosid", zentaoSid1);
        sessionParams.put("token", zentaoSid1);

        user.setSessionParams(sessionParams);
        // 权限默认给管理员（权限未接入之前）
        user.setAuthorities(AuthorityUtils.createAuthorityList("ROLE_SUPERADMIN"));
        return user;
    }


    @Override
    public void resetByUsername(String username) {

    }

}