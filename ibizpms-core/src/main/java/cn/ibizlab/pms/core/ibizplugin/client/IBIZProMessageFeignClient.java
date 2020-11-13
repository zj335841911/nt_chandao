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
 * 实体[IBIZProMessage] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.pmspro-pluginserviceapi:pmspro-pluginserviceapi}", contextId = "IBIZProMessage", fallback = IBIZProMessageFallback.class)
public interface IBIZProMessageFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/ibizpromessages/select")
    Page<IBIZProMessage> select();


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages")
    IBIZProMessage create(@RequestBody IBIZProMessage ibizpromessage);

    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/batch")
    Boolean createBatch(@RequestBody List<IBIZProMessage> ibizpromessages);


    @RequestMapping(method = RequestMethod.PUT, value = "/ibizpromessages/{ibizpro_messageid}")
    IBIZProMessage update(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);

    @RequestMapping(method = RequestMethod.PUT, value = "/ibizpromessages/batch")
    Boolean updateBatch(@RequestBody List<IBIZProMessage> ibizpromessages);


    @RequestMapping(method = RequestMethod.DELETE, value = "/ibizpromessages/{ibizpro_messageid}")
    Boolean remove(@PathVariable("ibizpro_messageid") String ibizpro_messageid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/ibizpromessages/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/ibizpromessages/{ibizpro_messageid}")
    IBIZProMessage get(@PathVariable("ibizpro_messageid") String ibizpro_messageid);

    @RequestMapping(method = RequestMethod.GET, value = "/ibizpromessages/getbycodename/{ibizpro_messageid}")
    String getByCodeName(@PathVariable("ibizpro_messageid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/ibizpromessages/getdraft")
    IBIZProMessage getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/checkkey")
    Boolean checkKey(@RequestBody IBIZProMessage ibizpromessage);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/{ibizpro_messageid}/markdone")
    IBIZProMessage markDone(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/{ibizpro_messageid}/markread")
    IBIZProMessage markRead(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/save")
    Boolean save(@RequestBody IBIZProMessage ibizpromessage);

    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/savebatch")
    Boolean saveBatch(@RequestBody List<IBIZProMessage> ibizpromessages);


    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/{ibizpro_messageid}/send")
    IBIZProMessage send(@PathVariable("ibizpro_messageid") String ibizpro_messageid, @RequestBody IBIZProMessage ibizpromessage);



    @RequestMapping(method = RequestMethod.POST, value = "/ibizpromessages/searchdefault")
    Page<IBIZProMessage> searchDefault(@RequestBody IBIZProMessageSearchContext context);


}
