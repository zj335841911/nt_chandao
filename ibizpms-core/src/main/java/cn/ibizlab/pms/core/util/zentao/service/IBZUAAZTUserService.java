package cn.ibizlab.pms.core.util.zentao.service;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.util.zentao.helper.ZTAPIHelper;
import cn.ibizlab.pms.core.util.zentao.helper.ZTUserHelper;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.util.client.IBZUAAFeignClient;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.errors.InternalServerErrorException;
import cn.ibizlab.pms.util.security.AuthenticationInfo;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import cn.ibizlab.pms.util.service.AuthenticationUserService;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import feign.FeignException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.DigestUtils;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.security.auth.login.LoginContext;
import javax.servlet.http.HttpServletRequest;
import java.security.MessageDigest;
import java.util.List;
import java.util.Map;

/**
 * 账户认证：UAA
 * 用户信息：ZT
 */
@Slf4j
@Service("IBZUAAZTUserService")
@ConditionalOnExpression("(!${ibiz.enablePermissionValid:false})&&'${ibiz.auth.service:SimpleUserService}'.equals('IBZUAAZTUserService')")
public class IBZUAAZTUserService implements AuthenticationUserService {

    String ztpassword = "ibiz@123";
    // 打通禅道与统一认证之后开放IBZUAAFeignClient
    @Autowired
    private IBZUAAFeignClient uaaFeignClient;

    @Autowired
    private IUserService userService;

    @Override
    public AuthenticationUser loadUserByUsername(String username) {

        if (username == null || username.trim().isEmpty()) {
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0008, null,null);
        }

        //STEP1:登录UAA系统前，先查看ZT账户是否存在。
        User ztUser = getZTUserInfo(username);

        //STEP2:使用统一认证用户名，token，进行UAA认证。
        AuthenticationUser uaaUser = uaaFeignClient.loginByUsername(username);
        if(uaaUser == null){
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0011,null,null);
        }
        String token = getRequestToken();

        //STEP3:ZT API登录(设置Token）。
        JSONObject userJO = doZTLogin(ztUser.getAccount(), ztpassword, token);

        //STEP4：构造权限上下文用户。
        AuthenticationUser user = constructSecurityContextUser(userJO, token, getDomains(username));

        return user;
    }

    /**
     * 登录，接入统一认证（UAA）系统作为账户验证，并使用ZT用户信息。
     *
     * @param username UAA登录账户
     * @param password UAA登录密码
     * @return token是最主要的数据。
     */
    @Override
    public AuthenticationUser loadUserByLogin(String username, String password) {
        if (username == null || username.trim().isEmpty() || password == null || password.trim().isEmpty()) {
            throw new BadRequestAlertException("请输入用户名密码",null,null);
        }

        //STEP1:登录UAA系统前，先查看ZT账户是否存在。
        User ztUser = getZTUserInfo(username);

        //STEP2:以统一认证账户、密码，进行UAA认证。
        AuthenticationInfo authenticationInfo = loadUAAUserByLogin(username,password);
        String token = authenticationInfo.getToken();

        //STEP3:ZT API登录(设置Token）。
        JSONObject userJO = doZTLogin(ztUser.getAccount(), ztpassword, token);

        //STEP4：构造前端需要的用户数据。
        AuthenticationUser pageUser = constructSecurityContextUser(userJO, token, getDomains(username));

        return pageUser;
    }


    @Override
    public void resetByUsername(String username) {

    }


    /**
     * 构造用于远程登录的参数
     *
     * @param username 登录名（不包含 domains参数，详见AuthorizationLogin）
     * @param password 密码
     * @return 登录参数，根据UAA系统，提供的API生成对应DTO
     */
    private AuthorizationLogin buildRemoteLoginParam(String username, String password) {

        AuthorizationLogin loginUser = new AuthorizationLogin();
        loginUser.setLoginname(getLoginnameByUsername(username));
        loginUser.setPassword(password);
        loginUser.setDomain(getDomains(username));

        return loginUser;
    }

    /**
     * 从登录账号信息获取登录名（Loginname）
     *
     * @param username 登录信息（loginname 或者 loginname｜域名）
     * @return loginname
     */
    private String getLoginnameByUsername(String username) {
        String[] accountInfo = username.split("[|]");
        String loginname = username;
        String domains = "";
        if (accountInfo.length == 2) {
            loginname = accountInfo[0].trim();
//			domains = accountInfo[1].trim();
        }
        return loginname;
    }

    /**
     * 从登录账号信息获取域名（Domains）
     *
     * @param username
     * @return
     */
    private String getDomains(String username) {
        String[] accountInfo = username.split("[|]");
        String domains = "";
        if (accountInfo.length == 2) {
            domains = accountInfo[1].trim();
        }
        return domains;
    }

    /**
     * 从UAA用户账号获取对应的【ZT】用户信息
     *
     * @param loginname
     * @return UAA账号=git账号=【ZT】源代码账号(User-commiter属性)
     * 注意：根据commiter，查询到多个账号时，只返回符合条件的第一个账号。
     */
    private User getZTUserInfo(String loginname) {
        IUserService userService = SpringContextHolder.getBean(IUserService.class);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("account", loginname).or().eq("commiter", loginname);

        List<User> users = userService.list(queryWrapper);
        User ztUser = null;
        if (CollectionUtils.isEmpty(users)) {

        } else if (users.size() > 1) {
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0012, null, null);
        } else {
            ztUser = users.get(0);
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

    /**
     * 根据UAA账号，注册一个ZT账号
     *
     * @param authenticationUser UAA账号
     */
    private void doZTRegistry(AuthenticationInfo authenticationUser) {

    }

    /**
     * 构建权限上下文用户信息。（用户的组织信息、权限信息等）
     *
     * @param userJO  ZT API获取的用户信息。
     * @param token   从UAA系统生成的token
     * @param domains 域名
     * @return 构建权限上下文用户信息，也作为页面用户信息数据源
     */
    private AuthenticationUser constructSecurityContextUser(JSONObject userJO, String token, String domains) {
        //获取用户信息
        AuthenticationUser user = new AuthenticationUser();
        user.setUserid(userJO.getString("id"));
        user.setUsername(userJO.getString("realname"));
        user.setLoginname(userJO.getString("account"));
        user.setDomain(domains);
        user.setEmail(userJO.getString("email"));
        user.setAvatar(userJO.getString("avatar"));
        user.setNickname(userJO.getString("nickname"));
        if (userJO.getString("birthday") == null || userJO.getString("birthday")
                .isEmpty() || "0000-00-00".equals(userJO.getString("birthday"))) {
            user.setBirthday(null);
        } else {
            user.setBirthday(userJO.getTimestamp("birthday"));
        }
        user.setAddr(userJO.getString("address"));
        user.setSex(userJO.getString("gender"));
        Map<String, Object> sessionParams = user.getSessionParams();

        sessionParams.put("ztuser", userJO);
        sessionParams.put("zentaoSid", DigestUtils.md5DigestAsHex(token.getBytes()));
        sessionParams.put("token", token);
        user.setSessionParams(sessionParams);

        //权限默认给管理员（权限未接入之前）
        user.setAuthorities(AuthorityUtils.createAuthorityList("ROLE_SUPERADMIN"));
        return user;
    }

    /**
     * 获取当前请求中的Token信息
     * @return  token字符串
     */
    public synchronized static String getRequestToken() {
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();

        if (requestAttributes == null) {
            return null;
        }
        HttpServletRequest request = ((ServletRequestAttributes) requestAttributes).getRequest();
        final String requestHeader = request.getHeader("Authorization");
        String authToken = null;

        if (requestHeader != null && requestHeader.startsWith("Bearer ")) {
            authToken = requestHeader.substring(7);
        }
        return authToken;
    }

    /**
     * UAA登录认证，使用页面中输入的用户名、密码
     * @param username  页面输入的用户名（登录名）
     * @param password  页面输入的密码
     * @return  返回UAA用户信息，包括UAA生成Token。
     * @Throws  用户名密码错误/统一认证地址（服务名）无效/统一认证系统内部错误导致的【认证失败提示信息】弹出异常。
     */
    private AuthenticationInfo loadUAAUserByLogin(String username,String password){
        AuthenticationInfo authenticationInfo = null;
        try {
            authenticationInfo = uaaFeignClient.v7Login(buildRemoteLoginParam(username, password));
        } catch (Exception e) {
            if(e instanceof FeignException){
                e.printStackTrace();
                FeignException feignException = (FeignException)e;
                if(400==feignException.status()){
                    throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0009,null,null);
                }else{
                    throw new BadRequestAlertException("UAA认证系统发生了系统异常，请稍后尝试。",null,null);
                }

            }else{
                e.printStackTrace();
                throw new BadRequestAlertException("UAA认证失败，请联系管理员确认远程登录相关配置。", null, null);
            }
        }
        return authenticationInfo;
    }

}
