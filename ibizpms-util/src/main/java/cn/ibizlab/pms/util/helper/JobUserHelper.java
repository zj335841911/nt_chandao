package cn.ibizlab.pms.util.helper;

import cn.ibizlab.pms.util.client.IBZUAAFeignClient;
import cn.ibizlab.pms.util.security.AuthenticationInfo;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class JobUserHelper {

    @Autowired
    @Lazy
    private IBZUAAFeignClient uaaFeignClient;

    @Value("${jobs.adminname:admin}")
    private String adminname;

    @Value("${jobs.adminpassword:123456}")
    private String adminpassword;

    @Cacheable(value="jobauthenticationinfo")
    public AuthenticationInfo getJobUser() {
        AuthorizationLogin authenticationLogin = new AuthorizationLogin();
        authenticationLogin.setLoginname(adminname);
        authenticationLogin.setPassword(adminpassword);
        return uaaFeignClient.v7Login(authenticationLogin);
    }

    @CacheEvict(value="jobauthenticationinfo")
    public void resetJobUser() {

    }
}
