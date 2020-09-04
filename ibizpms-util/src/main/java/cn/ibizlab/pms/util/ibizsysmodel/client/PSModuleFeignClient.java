package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSModule;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSModuleSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSModule] 服务对象接口
 */
//@FeignClient(value = "${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi:ibizpssysmodelapi-sysmodelapi}", contextId = "PSModule", fallback = PSModuleFallback.class)
public interface PSModuleFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/psmodules/select")
    Page<PSModule> select();


    @RequestMapping(method = RequestMethod.POST, value = "/psmodules")
    PSModule create(@RequestBody PSModule psmodule);

    @RequestMapping(method = RequestMethod.POST, value = "/psmodules/batch")
    Boolean createBatch(@RequestBody List<PSModule> psmodules);


    @RequestMapping(method = RequestMethod.PUT, value = "/psmodules/{psmoduleid}")
    PSModule update(@PathVariable("psmoduleid") String psmoduleid, @RequestBody PSModule psmodule);

    @RequestMapping(method = RequestMethod.PUT, value = "/psmodules/batch")
    Boolean updateBatch(@RequestBody List<PSModule> psmodules);


    @RequestMapping(method = RequestMethod.DELETE, value = "/psmodules/{psmoduleid}")
    Boolean remove(@PathVariable("psmoduleid") String psmoduleid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/psmodules/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/psmodules/{psmoduleid}")
    PSModule get(@PathVariable("psmoduleid") String psmoduleid);


    @RequestMapping(method = RequestMethod.GET, value = "/psmodules/getdraft")
    PSModule getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/psmodules/checkkey")
    Boolean checkKey(@RequestBody PSModule psmodule);


    @RequestMapping(method = RequestMethod.POST, value = "/psmodules/save")
    Boolean save(@RequestBody PSModule psmodule);

    @RequestMapping(method = RequestMethod.POST, value = "/psmodules/save")
    Boolean saveBatch(@RequestBody List<PSModule> psmodules);



    @RequestMapping(method = RequestMethod.POST, value = "/psmodules/searchdefault")
    Page<PSModule> searchDefault(@RequestBody PSModuleSearchContext context);


}
