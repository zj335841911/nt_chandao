package cn.ibizlab.pms.core.util.message;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MsgConstants implements InitializingBean {
    @Value("${pms.message.homepage.pc:}")
    private String redirectURLPC;
    @Value("${pms.message.homepage.mob:}")
    private String redirectURLMOB;

    @Value("${pms.message.type:}")
    private String messageType;

    //消息发送地址
    public static final String URL_TEMP_PC="%s/#/ibizpms/%s/%s/%s";
    public static final String URL_TEMP_MOB="%s/#/viewshell/null/%s/%s/mobeditview";

    //重定向地址
    public static String REDIRECT_HOMEPAGE_PC;
    public static String REDIRECT_HOMEPAGE_MOB;

    public static String MESSAGE_TYPE;
    /**
     * 代办相关消息：
     * 内容格式：有一条 【BUG #id 标题】 待处理，请注意查看。
     */
    public static String TASK_TITLE = "PMS";
    public static String TASK_CONTENT_TMPL ="有一条 【%s #%s %s】 待处理，请注意查看。";

    /**
     * 通知相关消息：
     * 内容格式： "***在 【BUG #id 标题】 @了你，请注意查看。";
     */
    public static String NOTICE_TITLE = "PMS消息通知";
    public static String NOTICE_CONTENT_TMPL ="%s在 【%s #%d %s】 @了你，请注意查看";

    @Override
    public void afterPropertiesSet() throws Exception {
        REDIRECT_HOMEPAGE_PC = redirectURLPC;
        REDIRECT_HOMEPAGE_MOB = redirectURLMOB;
        MESSAGE_TYPE = messageType;
    }
}
