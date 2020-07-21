package cn.ibizlab.pms.core.util.zentao.service;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
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
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
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
        AuthenticationUser user = null;
        try {
            if (username == null || username.trim().isEmpty()) {
                throw new InternalServerErrorException("用户还未登录");
            }

            // 适配统一认证email crimson@ibizsys.net 与 禅道 crimson 关系

            //登录UAA系统前，先查看ZT账户是否存在。
            //获取UAA账号对应的ZT用户。
            User ztUser = getZTUserInfo(username);
            if (ztUser == null) {
                //（二期）没有对应账号，后台新建账号，再登录
                throw new RuntimeException("无法加载ZT用户信息。");

            }

            //使用UAA统一认证获取用户。
            AuthenticationUser uaaUser = uaaFeignClient.loginByUsername(username);
            String token = getRequestToken();
            //构造权限用户。
            user = constructSecurityContextUser(ztUser,token);

            // 权限默认给管理员（权限未接入之前）
            user.setAuthorities(AuthorityUtils.createAuthorityList("ROLE_SUPERADMIN"));
        } catch (RuntimeException e) {
            log.error(e.getMessage());
        }

        return user;
    }

    /**
     * 使用ZT用户名密码登录
     *
     * @param username UAA登录账户
     * @param password UAA登录密码
     * @return token是最主要的数据。
     */
    @Deprecated
    @Override
    public AuthenticationUser loadUserByLogin(String username, String password) {
        if (username == null || username.trim().isEmpty() || password == null || password.trim().isEmpty()) {
            throw new InternalServerErrorException("请输入用户名密码");
        }
        String domains = getDomains(username);

        //登录UAA系统前，先查看ZT账户是否存在。
        //获取UAA账号对应的ZT用户，从account、commiter四个字段查询。
        User ztUser = getZTUserInfo(username);
        if (ztUser == null || ztUser.getCommiter() == null) {
            //（二期）没有对应账号，后台新建账号，再登录
            throw new BadRequestAlertException("当前用户没有关联ZT账户，请联系管理员。", null, null);
        }

        //以代码提交账户，进行UAA认证。
        AuthenticationInfo authenticationInfo = uaaFeignClient.v7Login(buildRemoteLoginParam(ztUser.getCommiter(), password));

        String token = authenticationInfo.getToken();
        //ZT API登录。
        JSONObject userJO = doZTLogin(ztUser.getAccount(), ztpassword, token);

        //构造前端需要的用户数据。
        AuthenticationUser pageUser = constructPageUserInfo(userJO, token, domains);

        // 权限默认给管理员（权限未接入之前）
        pageUser.setAuthorities(AuthorityUtils.createAuthorityList("ROLE_SUPERADMIN"));
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
        UserMapper userMapper = SpringContextHolder.getBean(UserMapper.class);
        IUserService userService = SpringContextHolder.getBean(IUserService.class);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("account", loginname).or().eq("commiter", loginname);

        List<User> users = userService.list(queryWrapper);
        if (CollectionUtils.isEmpty(users)) {
            return null;
        } else if (users.size() > 1) {
            throw new BadRequestAlertException("关联的ZT账户不唯一，请联系管理员。", null, null);
        } else {
            return users.get(0);
        }

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
            throw new InternalServerErrorException("登录失败");
        }

//        String zentaoSid = JSONObject.parseObject(rstSession.getResult().getString("data")).getString("sessionID");
        System.out.println("sessionID相同："+token.equals(zentaoSid));
        ZTResult rstLogin = new ZTResult();
        JSONObject jo = new JSONObject();
        jo.put("account", loginname);
        jo.put("password", password);
        if (!ZTUserHelper.login(zentaoSid, jo, rstLogin)) {
            throw new InternalServerErrorException("登录失败");
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
     * 构建用户信息，作为返回值。
     *
     * @param userJO    ZT API获取的用户信息。
     * @param token 从UAA系统生成的token
     * @param domains   域名
     * @return 作为页面用户信息数据源
     */
    private AuthenticationUser constructPageUserInfo(JSONObject userJO, String token, String domains) {
        //获取用户信息
        AuthenticationUser user = new AuthenticationUser();
        user.setUserid(userJO.getString("id"));
        user.setUsername(userJO.getString("account"));
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
        System.out.println("token: "+token);
        System.out.println("zentaoSid==============:"+DigestUtils.md5DigestAsHex(token.getBytes()));
        user.setSessionParams(sessionParams);
        return user;
    }


    private AuthenticationUser constructSecurityContextUser(User ztUser,String token) {
        //获取用户信息
        AuthenticationUser user = new AuthenticationUser();
        user.setUserid(ztUser.getId().toString());
        user.setUsername(ztUser.getAccount());
        user.setLoginname(ztUser.getAccount());
        user.setDomain("");
        user.setEmail(ztUser.getEmail());
        user.setAvatar(ztUser.getAvatar());
        user.setNickname(ztUser.getNickname());
        user.setBirthday(ztUser.getBirthday());
        user.setAddr(ztUser.getAddress());
        user.setSex(ztUser.getGender());
        Map<String, Object> sessionParams = user.getSessionParams();

        sessionParams.put("ztuser", ztUser);
        String zentaoSid = DigestUtils.md5DigestAsHex(token.getBytes());
        sessionParams.put("zentaoSid", DigestUtils.md5DigestAsHex(token.getBytes()));//SessionID 暂缺
        System.out.println("token: "+token);
        System.out.println("zentaoSid==============:"+zentaoSid);
        user.setSessionParams(sessionParams);
        return user;
    }

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

}
