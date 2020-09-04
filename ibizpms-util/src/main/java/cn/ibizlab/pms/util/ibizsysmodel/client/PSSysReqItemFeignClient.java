package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSSysReqItem;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSSysReqItemSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSSysReqItem] 服务对象接口
 */
//@FeignClient(value = "${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi:ibizpssysmodelapi-sysmodelapi}", contextId = "PSSysReqItem", fallback = PSSysReqItemFallback.class)
public interface PSSysReqItemFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/pssysreqitems/select")
    Page<PSSysReqItem> select();


    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqitems")
    PSSysReqItem create(@RequestBody PSSysReqItem pssysreqitem);

    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqitems/batch")
    Boolean createBatch(@RequestBody List<PSSysReqItem> pssysreqitems);


    @RequestMapping(method = RequestMethod.PUT, value = "/pssysreqitems/{pssysreqitemid}")
    PSSysReqItem update(@PathVariable("pssysreqitemid") String pssysreqitemid, @RequestBody PSSysReqItem pssysreqitem);

    @RequestMapping(method = RequestMethod.PUT, value = "/pssysreqitems/batch")
    Boolean updateBatch(@RequestBody List<PSSysReqItem> pssysreqitems);


    @RequestMapping(method = RequestMethod.DELETE, value = "/pssysreqitems/{pssysreqitemid}")
    Boolean remove(@PathVariable("pssysreqitemid") String pssysreqitemid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/pssysreqitems/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/pssysreqitems/{pssysreqitemid}")
    PSSysReqItem get(@PathVariable("pssysreqitemid") String pssysreqitemid);


    @RequestMapping(method = RequestMethod.GET, value = "/pssysreqitems/getdraft")
    PSSysReqItem getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqitems/checkkey")
    Boolean checkKey(@RequestBody PSSysReqItem pssysreqitem);


    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqitems/save")
    Boolean save(@RequestBody PSSysReqItem pssysreqitem);

    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqitems/save")
    Boolean saveBatch(@RequestBody List<PSSysReqItem> pssysreqitems);



    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqitems/searchdefault")
    Page<PSSysReqItem> searchDefault(@RequestBody PSSysReqItemSearchContext context);


}
