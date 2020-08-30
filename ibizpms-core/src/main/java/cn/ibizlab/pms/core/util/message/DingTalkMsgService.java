package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.util.client.IBZNotifyFeignClient;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.math.BigInteger;
import java.net.URLEncoder;

@Slf4j
@Component
public class DingTalkMsgService implements IMsgService {
    @Autowired
    private IBZNotifyFeignClient feignClient;
    @Autowired
    private MsgDestParser destParser;

    @Override
    public void send(EntityBase et, String mainDataView) {
        //当前操作人相关信息，userid、姓名
        String name = AuthenticationUser.getAuthenticationUser().getPersonname();

        //当前数据相关信息, 类名、id、标题
        String className = et.getClass().getSimpleName().toLowerCase();
        BigInteger id = (BigInteger) et.get("id");
        String title = (String) et.get("title");
        if(StringUtils.isEmpty(title)){
            title = (String)et.get("name");
        }

        //生成重定向地址
        String redirect_url_pc = String.format(MsgConstants.URL_TEMP_PC, MsgConstants.REDIRECT_HOMEPAGE_PC, Inflector.getInstance().pluralize(className), id, mainDataView);
        String redirect_url_mob = String.format(MsgConstants.URL_TEMP_MOB, MsgConstants.REDIRECT_HOMEPAGE_MOB, Inflector.getInstance().pluralize(className), id);

        String taskUserIds = destParser.getTaskUserIds(et);
        String noticeUserIds = destParser.getNoticeUserIds(et);

        if (!StringUtils.isEmpty(taskUserIds)) {
            //分别发送PC、MOB通知
            String content = String.format(MsgConstants.TASK_CONTENT_TMPL, className.toUpperCase(), id, title);

            sendTask(taskUserIds, redirect_url_pc, "(PC)" + MsgConstants.TASK_TITLE, content);
            sendTask(taskUserIds, redirect_url_mob, "(MOB)" + MsgConstants.TASK_TITLE, content);
            log.info("成功发送待办任务。");
        }

        if (!StringUtils.isEmpty(noticeUserIds)) {
            //分别发送PC、MOB通知
            String content = String.format(MsgConstants.NOTICE_CONTENT_TMPL, name, className.toUpperCase(), id, title);
            sendLinkMessage(noticeUserIds, redirect_url_pc, "(PC)" + MsgConstants.NOTICE_TITLE, content);
            sendLinkMessage(noticeUserIds, redirect_url_mob, "(MOB)" + MsgConstants.NOTICE_TITLE, content);
            log.info("成功发送链接通知。");
        }
    }

    /**
     * 发送带链接的工作通知
     *
     * @param userids     发送人
     * @param redirectUrl 链接地址
     * @param title       标题
     * @param content     正文
     */
    @Override
    public void sendLinkMessage(String userids, String redirectUrl, String title, String content) {
        log.info("redirectURL:[{}]", redirectUrl);
        JSONObject message = new JSONObject();
        message.put("templateid", "pms");
        message.put("msgtypes", MsgConstants.MESSAGE_TYPE);
        message.put("userids", userids);
        message.put("title", title);
        message.put("content", content);
        String encodeUrl = URLEncoder.encode(redirectUrl);
        message.put("url", "dingtalk://dingtalkclient/page/link?url=" + encodeUrl + "&pc_slide=false");
        try{
            feignClient.sendDingTalkLinkMsg(message);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("发送工作通知失败,数据[{}],原因为:[{}]", message, e);
        }
    }


    /**
     * 发送Dingding待办任务。
     *
     * @param userids     待办发送用户id （IBZUserId）
     * @param redirectUrl 链接地址，比如： http://ibizpmspc.ibizlab.cn/#/ibizpms/bugs/250/maindashboardview
     * @param title       待办通知标题
     * @param content     待办通知内容
     * @return 返回生成的待办任务id
     */
    @Override
    public String sendTask(String userids, String redirectUrl, String title, String content) {

        log.info("redirectURL:[{}]", redirectUrl);
        log.info("userid:[{}]", userids);
        JSONObject message = new JSONObject();
        message.put("userids", userids);
        message.put("templateid", "pms");
        message.put("title", title);
        message.put("content", content);
        String encodeUrl = URLEncoder.encode(redirectUrl);
        message.put("url", "dingtalk://dingtalkclient/page/link?url=" + encodeUrl + "&pc_slide=false");
        try {
            String taskId = feignClient.createDingTalkWorkRecord(message);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("发送待办任务失败,数据[{}],原因为:[{}]", message, e);
        }
        return "";

    }

}
