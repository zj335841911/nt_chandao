package cn.ibizlab.pms.core.ibizplugin.client;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import cn.ibizlab.pms.core.ibizplugin.domain.IBIZProMessage;
import cn.ibizlab.pms.core.ibizplugin.filter.IBIZProMessageSearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[IBIZPRO_MESSAGE] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.pmspro-pluginserviceapi:pmspro-pluginserviceapi}", contextId = "IBIZPRO-MESSAGE", fallback = IBIZPRO_MESSAGEFallback.class)
public interface IBIZPRO_MESSAGEFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/ibizpro_messages/select")
    Page<IBIZProMessage> select();


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages")
    IBIZProMessage create(@RequestBody IBIZProMessage ibizpromessage);

    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/batch")
    Boolean createBatch(@RequestBody List<IBIZProMessage> ibizpromessages);


    @RequestMapping(method = RequestMethod.PUT, value = "/ibizpro_messages/{ibizpro_messageid}")
    IBIZProMessage update(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);

    @RequestMapping(method = RequestMethod.PUT, value = "/ibizpro_messages/batch")
    Boolean updateBatch(@RequestBody List<IBIZProMessage> ibizpromessages);


    @RequestMapping(method = RequestMethod.DELETE, value = "/ibizpro_messages/{ibizpro_messageid}")
    Boolean remove(@PathVariable("ibizpro_messageid") String ibizpro_messageid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/ibizpro_messages/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/ibizpro_messages/{ibizpro_messageid}")
    IBIZProMessage get(@PathVariable("ibizpro_messageid") String ibizpro_messageid);

    @RequestMapping(method = RequestMethod.GET, value = "/ibizpro_messages/getbycodename/{ibizpro_messageid}")
    String getByCodeName(@PathVariable("ibizpro_messageid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/ibizpro_messages/getdraft")
    IBIZProMessage getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/checkkey")
    Boolean checkKey(@RequestBody IBIZProMessage ibizpromessage);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/{ibizpro_messageid}/markdone")
    IBIZProMessage markDone(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/{ibizpro_messageid}/markread")
    IBIZProMessage markRead(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/save")
    Boolean save(@RequestBody IBIZProMessage ibizpromessage);

    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/savebatch")
    Boolean saveBatch(@RequestBody List<IBIZProMessage> ibizpromessages);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/{ibizpro_messageid}/send")
    IBIZProMessage send(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);



    @RequestMapping(method = RequestMethod.POST, value = "/ibizpro_messages/searchdefault")
    Page<IBIZProMessage> searchDefault(@RequestBody IBIZProMessageSearchContext context);


}
