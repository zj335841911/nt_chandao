package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSSysReqModuleSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSSysReqModule] 服务对象接口
 */
//@FeignClient(value = "${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi:ibizpssysmodelapi-sysmodelapi}", contextId = "PSSysReqModule", fallback = PSSysReqModuleFallback.class)
public interface PSSysReqModuleFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/pssysreqmodules/select")
    Page<PSSysReqModule> select();


    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqmodules")
    PSSysReqModule create(@RequestBody PSSysReqModule pssysreqmodule);

    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqmodules/batch")
    Boolean createBatch(@RequestBody List<PSSysReqModule> pssysreqmodules);


    @RequestMapping(method = RequestMethod.PUT, value = "/pssysreqmodules/{pssysreqmoduleid}")
    PSSysReqModule update(@PathVariable("pssysreqmoduleid") String pssysreqmoduleid, @RequestBody PSSysReqModule pssysreqmodule);

    @RequestMapping(method = RequestMethod.PUT, value = "/pssysreqmodules/batch")
    Boolean updateBatch(@RequestBody List<PSSysReqModule> pssysreqmodules);


    @RequestMapping(method = RequestMethod.DELETE, value = "/pssysreqmodules/{pssysreqmoduleid}")
    Boolean remove(@PathVariable("pssysreqmoduleid") String pssysreqmoduleid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/pssysreqmodules/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/pssysreqmodules/{pssysreqmoduleid}")
    PSSysReqModule get(@PathVariable("pssysreqmoduleid") String pssysreqmoduleid);


    @RequestMapping(method = RequestMethod.GET, value = "/pssysreqmodules/getdraft")
    PSSysReqModule getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqmodules/checkkey")
    Boolean checkKey(@RequestBody PSSysReqModule pssysreqmodule);


    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqmodules/save")
    Boolean save(@RequestBody PSSysReqModule pssysreqmodule);

    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqmodules/save")
    Boolean saveBatch(@RequestBody List<PSSysReqModule> pssysreqmodules);



    @RequestMapping(method = RequestMethod.POST, value = "/pssysreqmodules/searchdefault")
    Page<PSSysReqModule> searchDefault(@RequestBody PSSysReqModuleSearchContext context);


}
