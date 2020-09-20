package cn.ibizlab.pms.util.client;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(value = "${ibiz.ref.service.notify:ibznotify-api}",fallback = IBZNotifyFallback.class)
public interface IBZNotifyFeignClient
{
	@RequestMapping(method = RequestMethod.POST,value = "/SendMsg")
	Boolean SendMsg(@RequestBody JSONObject msg);

	@RequestMapping(method = RequestMethod.POST,value = "/createMsgTemplate")
	Boolean createMsgTemplate(@RequestBody JSONObject template);


	@RequestMapping(method = RequestMethod.POST,value = "/dingtalk/sendlinkmsg")
	Long sendDingTalkLinkMsg(@RequestBody JSONObject msg);
	/**
	 * 创建钉钉待办
	 * @param msg
	 * @return
	 */
//	@RequestMapping(method = RequestMethod.POST,value = "/dingtalk/createworkrecord")
	@RequestMapping(method = RequestMethod.POST,value = "/notify/dingtalk/createworkrecord")
	String createDingTalkWorkRecord(@RequestBody JSONObject msg);
	/**
	 * 完成钉钉待办
	 * @param msgId
	 * @return
	 */
	@RequestMapping(method = RequestMethod.POST,value = "/notify/dingtalk/finishworkrecord/{msgid}")
	Boolean finishDingTalkWorkRecord(@PathVariable("msgid") String msgId);
}
