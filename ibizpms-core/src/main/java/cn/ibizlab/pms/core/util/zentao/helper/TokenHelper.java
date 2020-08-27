package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.util.security.AuthenticationUser;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Component
public class TokenHelper implements InitializingBean {
    @Value("${ibiz.enablePermissionValid:false}")
    private boolean isPermissionValid;

    public static boolean IS_STANDALONE_MODE;

    /**
     * 获取禅道SessionId
     * @return
     */
    public static String getRequestToken(){
        String zentaoSid = null;
        if(IS_STANDALONE_MODE) {
            zentaoSid = (String) AuthenticationUser.getAuthenticationUser().getSessionParams().get("zentaosid");
        }else{
            zentaoSid = getUAAToken();
        }
        return zentaoSid;
    }

    private static String getUAAToken(){
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
    @Override
    public void afterPropertiesSet() throws Exception {
        IS_STANDALONE_MODE = !isPermissionValid;
    }
}
