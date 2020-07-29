package cn.ibizlab.pms.config;

import com.alibaba.cloud.seata.feign.SeataFeignClientAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({SeataFeignClientAutoConfiguration.class})
public class DevBootAutoConfiguration {

}
