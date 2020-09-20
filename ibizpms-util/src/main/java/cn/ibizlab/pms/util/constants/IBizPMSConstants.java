package cn.ibizlab.pms.util.constants;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class IBizPMSConstants implements InitializingBean {
    @Value("${ibiz.encoding:UTF-8}")
    private String encoding = "UTF-8";
    public static String ENCODING;

    @Override
    public void afterPropertiesSet() throws Exception {
        ENCODING = encoding;
    }
}
