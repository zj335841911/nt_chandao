package cn.ibizlab.pms.util.constants;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class IBizPMSMessage implements InitializingBean {
    @Value("${ibiz.msg.error.0101:初始化模板发生异常。}")
    private String msg_error_0101;
    /**
     * MSG_ERROR_0101: 初始化模板异常
     */
    public static String MSG_ERROR_0101;

    @Value("${ibiz.msg.error.0102:处理模板发生异常。}")
    private String msg_error_0102;
    /**
     * MSG_ERROR_0102: 处理模板发生异常
     */
    public static String MSG_ERROR_0102;

    @Value("${ibiz.msg.info.0101:模板生成完成，结果[%b]。}")
    private String msg_info_0101;
    /**
     * MSG_INFO_0101: 模板处理异常后，删除临时文件。
     */
    public static String MSG_INFO_0101;

    @Value("${ibiz.msg.warn.0101:模板处理异常后，删除临时文件[%s]。}")
    private String msg_warn_0101;
    /**
     * MSG_WARN_0101: 模板处理异常后，删除临时文件。
     */
    public static String MSG_WARN_0101;

    @Override
    public void afterPropertiesSet() throws Exception {
        MSG_INFO_0101 = msg_info_0101;

        MSG_ERROR_0101 = msg_error_0101;
        MSG_ERROR_0102 = msg_error_0102;

        MSG_WARN_0101 = msg_warn_0101;
    }
}
