package cn.ibizlab.pms.util.rest;


//import cn.ibizlab.pms.mob.client.PMSFeignClient;

import cn.ibizlab.pms.util.client.IBZUAAFeignClient;
import cn.ibizlab.pms.util.client.IPMSFeignClient;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.log.IBIZTraceLog;
import cn.ibizlab.pms.util.security.AuthTokenUtil;
import cn.ibizlab.pms.util.security.AuthenticationInfo;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import cn.ibizlab.pms.util.service.AuthenticationUserService;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@IBIZTraceLog
@RestController
@ConditionalOnExpression("${ibiz.enablePermissionValid:false}")
public class UAAPipeResource {
    @Autowired
    private IBZUAAFeignClient uaaFeignClient;

    @Autowired
    private IPMSFeignClient pmsfeignClient;
    @Autowired
    AuthenticationUserService userDetailsService;
    @Autowired
    private AuthTokenUtil jwtTokenUtil;

    @PostMapping("/v7/login")
    public AuthenticationInfo login(@Validated @RequestBody AuthorizationLogin authenticationLogin) {
        AuthenticationInfo info = uaaFeignClient.v7Login(authenticationLogin);

        if (info == null) {
            log.error("登录失败。");
            throw new BadRequestAlertException("系统异常，登录失败，请联系管理员", null, null);
        }

        //需要登录禅道API
        ztLogin(info);

        log.info("登录成功！");
        return info;
    }

    @GetMapping(value = {"/uaa/open/dingtalk/access_token"})
    public ResponseEntity<JSONObject> getDingtalkAppId(@RequestParam(value = "id", required = false) String id) {
        JSONObject resp = uaaFeignClient.getDingtalkAppId(StringUtils.isEmpty(id) ? getRefererURL() : id);
        resp.put("regionid", resp.get("corp_id"));
        return ResponseEntity.ok(resp);
    }

    @GetMapping(value = {"/uaa/open/dingtalk/auth/{code}"})
    public ResponseEntity<AuthenticationInfo> getUserByToken(@PathVariable(value = "code") String code, @RequestParam(value = "id", required = false) String id) {

        AuthenticationInfo info = uaaFeignClient.getUserByToken(code, StringUtils.isEmpty(id) ? getRefererURL() : id);
        ztLogin(info);
        return ResponseEntity.ok(info);

    }

    @PostMapping("/login/guest")
    public ResponseEntity<AuthenticationInfo> guestLogin(){
        final String guest = "pms_guest";

        userDetailsService.resetByUsername(guest);
        AuthenticationUser user = userDetailsService.loadUserByUsername(guest);

        final String token = jwtTokenUtil.generateToken(user);

        AuthenticationUser user2=new AuthenticationUser();
        CachedBeanCopier.copy(user,user2);
        user2.setAuthorities(null);
        user2.setPermissionList(null);

        ztLogin(user.getLoginname(),token);
        // 返回 token
        return ResponseEntity.ok().body(new AuthenticationInfo(token,user2));
    }
    /**
     * 返回当前请求的来源URL
     *
     * @return 钉钉的域名，用于查看第三方平台开放相关配置（本地配置）
     */
    private String getRefererURL() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String fromUrl = request.getHeader("referer");
        log.info("请求来源：{}", fromUrl);
        return StringUtils.isEmpty(fromUrl) ? "dingtalk" : fromUrl;
    }

    private void ztLogin(AuthenticationInfo authenticationInfo) {
        if (authenticationInfo == null) {
            log.error("系统发生异常，请联系程序猿。");
            throw new BadRequestAlertException("系统异常，请联系管理员。", null, null);
        }

        ztLogin(authenticationInfo.getUser().getLoginname(),authenticationInfo.getToken());
    }

    private void ztLogin(String account,String token){
        boolean isSucceed = false;
        try { //禅道登录。
            JSONObject resp = pmsfeignClient.doZTLogin(account, token);
            if (resp != null)
                isSucceed = true;
        } catch (Exception e) {
            log.info("禅道API 登录失败，原因为[{}]", e);
        }

        if (isSucceed) {
            log.info("禅道后台登录成功！");
        } else {
            log.error("禅道后台登录失败");
            throw new BadRequestAlertException("系统异常，请联系管理员。", null, null);
        }
    }
}

