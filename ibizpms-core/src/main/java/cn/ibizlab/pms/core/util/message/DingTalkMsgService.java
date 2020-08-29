package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.util.client.IBZNotifyFeignClient;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import java.math.BigInteger;
import java.net.URLEncoder;

@Component
public class DingTalkMsgService {
    @Autowired
    private IBZNotifyFeignClient feignClient;
    @Autowired
    private MsgDestParser destParser;
//  TODO 发送地址（临时）   http://172.16.240.110:10120/#/ibizpms/bugs/432/maindashboardview
   // public static final String urltempl="http://ibizpmsh5.ibizlab.cn/#/ibizpms/%s/%s/%s";
public static final String urltempl="http://ibizpmsh5.ibizlab.cn/#/viewshell/null/%s/%s/%s/%s/mobeditview";

    public void send(EntityBase et, String mainDataView){
        //当前操作人相关信息，userid、姓名
        String name = AuthenticationUser.getAuthenticationUser().getPersonname();

        //当前数据相关信息, 类名、id、标题
        String className = et.getClass().getSimpleName().toLowerCase();
        BigInteger id = (BigInteger)et.get("id");
        String title = (String)et.get("title");


        //生成重定向地址
        String redirect_url = String.format(urltempl,className+"s",id,mainDataView);

        //发送通知格式
        String msgtitle = "PMS代办通知";
//        String content = "有人在 【BUG #id 标题】 @了你，请注意查看。";
        String contentTempl  = "%s在 【%s #%d %s】 @了你，请注意查看。";

        String content = String.format(contentTempl,name,className.toUpperCase(),id,title);
        String taskUserIds = destParser.getTaskUserIds(et);
        String noticeUserIds = destParser.getNoticeUserIds(et);
        if(!StringUtils.isEmpty(taskUserIds)) {
            sendTask(taskUserIds, redirect_url, msgtitle, content);
        }
        if(!StringUtils.isEmpty(noticeUserIds)){
            sendLinkMessage(noticeUserIds,redirect_url,msgtitle,content);
        }
    }

    /**
     * 发送带链接的工作通知
     * @param userids   发送人
     * @param redirectUrl   链接地址
     * @param title   标题
     * @param content   正文
     */
    public void sendLinkMessage(String userids,String redirectUrl,String title,String content){

        JSONObject message = new JSONObject();
        message.put("templateid","pms");
        message.put("msgtypes","64");       //TODO 类型：钉钉消息
        message.put("userids",userids);
        message.put("titile",title);
        message.put("content",content);
        String encodeUrl = URLEncoder.encode(redirectUrl);
        message.put("url","dingtalk://dingtalkclient/page/link?url="+encodeUrl+"&pc_slide=false");
       // feignClient.sendDingTalkLinkMsg(message);
    }


    /**
     * 发送Dingding代办任务。
     * @param userids   代办发送用户id （IBZUserId）
     * @param redirectUrl  链接地址，比如： http://172.16.240.110:10120/#/ibizpms/bugs/432/maindashboardview
     * @param title     代办通知标题
     * @param content   代办通知内容
     * @return  返回生成的代办任务id
     */
    public String sendTask(String userids,String redirectUrl,String title,String content){
        JSONObject message = new JSONObject();

        message.put("userids",userids);
        message.put("templateid","pms");
        message.put("title",title);
        message.put("content",content);
        String encodeUrl = URLEncoder.encode(redirectUrl);
        message.put("url","dingtalk://dingtalkclient/page/link?url="+encodeUrl+"&pc_slide=false");
        // String taskId = feignClient.createDingTalkWorkRecord(message);
        return "";
    }

}
