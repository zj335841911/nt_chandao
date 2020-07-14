package cn.ibizlab.pms.core.util.zentao.constants;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ZenTaoMessage implements InitializingBean {
    @Value("${zentao.msg.info.0001:调取禅道接口，地址：{}，请求方法：{}，请求参数：{}。}")
    private String msg_info_0001;
    public static String MSG_INFO_0001;

    @Value("${zentao.msg.info.0002:禅道接口返回结果，{}}。")
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

    @Value("${zentao.msg.error.0004:系统处理异常}")
    private String msg_error_0004;
    public static String MSG_ERROR_0004;

    @Value("${zentao.msg.error.0005:文件上传失败}")
    private String msg_error_0005;
    public static String MSG_ERROR_0005;

    @Value("${zentao.msg.error.0006:禅道接口相应结果不正确}")
    private String msg_error_0006;
    public static String MSG_ERROR_0006;

    @Value("${zentao.msg.error.0007:当前用户没有操作权限}")
    private String msg_error_0007;
    public static String MSG_ERROR_0007;


    @Override
    public void afterPropertiesSet() throws Exception {
        MSG_INFO_0001 = msg_info_0001;
        MSG_INFO_0002 = msg_info_0002;

        MSG_ERROR_0001 = msg_error_0001;
        MSG_ERROR_0002 = msg_error_0002;
        MSG_ERROR_0003 = msg_error_0003;
        MSG_ERROR_0004 = msg_error_0004;
        MSG_ERROR_0005 = msg_error_0005;
        MSG_ERROR_0006 = msg_error_0006;
        MSG_ERROR_0007 = msg_error_0007;
    }
}
