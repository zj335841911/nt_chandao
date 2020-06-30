package cn.ibizlab.pms.core.util.zentao.constants;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ZenTaoMessage implements InitializingBean {
    @Value("${zentao.msg.info.0001:调取禅道接口，地址：\\{\\}，请求方法：\\{\\}，请求参数：\\{\\}。}")
    private String msg_info_0001;
    public static String MSG_INFO_0001;

  @Value("${zentao.msg.info.0002:禅道接口返回结果，\\{\\}}。")
  private String msg_info_0002;

    public static String MSG_INFO_0002;

    @Value("${zentao.msg.error.0001:调用禅道接口异常}")
    private String msg_error_0001;
    public static String MSG_ERROR_0001;

    @Value("${zentao.msg.error.0002:没有请求地址}")
    private String msg_error_0002;
    public static String MSG_ERROR_0002;

    @Value("${zentao.msg.error.0003:创建数据失败}")
    private String msg_error_0003;
    public static String MSG_ERROR_0003;

    @Override
    public void afterPropertiesSet() throws Exception {
        MSG_INFO_0001 = msg_info_0001;

        MSG_ERROR_0001 = msg_error_0001;
        MSG_ERROR_0002 = msg_error_0002;
        MSG_ERROR_0003 = msg_error_0003;
    }
}
