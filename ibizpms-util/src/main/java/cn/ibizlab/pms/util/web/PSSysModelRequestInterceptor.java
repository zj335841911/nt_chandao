package cn.ibizlab.pms.util.web;

import cn.ibizlab.pms.util.client.PSSysModelLoginClient;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;
import cn.ibizlab.pms.util.security.AuthTokenUtil;
import cn.ibizlab.pms.util.security.AuthenticationInfo;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Enumeration;

/**
 * PSAdmin Token
 */
//@Configuration
public class PSSysModelRequestInterceptor implements RequestInterceptor {

    private ApplicationContext applicationContext;
    private PSSysModelLoginClient psAdminLoginClient;

    private String authServiceTag;
    private String authUser;
    private String authPassword;
    private String token;

    private final Logger logger = LoggerFactory.getLogger(getClass());

    public PSSysModelRequestInterceptor(ApplicationContext applicationContext, String authServiceTag, boolean https, String authUser, String authPassword) {
        this.authServiceTag = authServiceTag;
        this.authUser = authUser;
        this.authPassword = authPassword;
        this.applicationContext = applicationContext;
        this.psAdminLoginClient = OutsideAccessorUtils.buildAccessor(applicationContext, PSSysModelLoginClient.class, https, authServiceTag);
    }

    @Override
    public void apply(RequestTemplate requestTemplate) {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            Enumeration<String> headerNames = request.getHeaderNames();
            requestTemplate.header("Authorization", "Bearer " + getToken());
        }
    }


    public String getToken() {
        AuthTokenUtil authTokenUtil = SpringContextHolder.getBean(AuthTokenUtil.class);
        if (StringUtils.isNotBlank(this.token)) {
            if (authTokenUtil.getExpirationDateFromToken(this.token).after(new Date())) {
                return this.token;
            }
        }
        AuthorizationLogin login = new AuthorizationLogin();
        login.setLoginname(authUser);
        login.setPassword(authPassword);
        AuthenticationInfo info = psAdminLoginClient.login(login);
        this.token = info.getToken();
        return this.token;
    }

}