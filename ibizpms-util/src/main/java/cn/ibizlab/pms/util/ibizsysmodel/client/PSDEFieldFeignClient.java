package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSDEField;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSDEFieldSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSDEField] 服务对象接口
 */
//@FeignClient(value = "${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi:ibizpssysmodelapi-sysmodelapi}", contextId = "PSDEField", fallback = PSDEFieldFallback.class)
public interface PSDEFieldFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/psdefields/select")
    Page<PSDEField> select();


    @RequestMapping(method = RequestMethod.POST, value = "/psdefields")
    PSDEField create(@RequestBody PSDEField psdefield);

    @RequestMapping(method = RequestMethod.POST, value = "/psdefields/batch")
    Boolean createBatch(@RequestBody List<PSDEField> psdefields);


    @RequestMapping(method = RequestMethod.PUT, value = "/psdefields/{psdefieldid}")
    PSDEField update(@PathVariable("psdefieldid") String psdefieldid, @RequestBody PSDEField psdefield);

    @RequestMapping(method = RequestMethod.PUT, value = "/psdefields/batch")
    Boolean updateBatch(@RequestBody List<PSDEField> psdefields);


    @RequestMapping(method = RequestMethod.DELETE, value = "/psdefields/{psdefieldid}")
    Boolean remove(@PathVariable("psdefieldid") String psdefieldid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/psdefields/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/psdefields/{psdefieldid}")
    PSDEField get(@PathVariable("psdefieldid") String psdefieldid);


    @RequestMapping(method = RequestMethod.GET, value = "/psdefields/getdraft")
    PSDEField getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/psdefields/checkkey")
    Boolean checkKey(@RequestBody PSDEField psdefield);


    @RequestMapping(method = RequestMethod.POST, value = "/psdefields/save")
    Boolean save(@RequestBody PSDEField psdefield);

    @RequestMapping(method = RequestMethod.POST, value = "/psdefields/save")
    Boolean saveBatch(@RequestBody List<PSDEField> psdefields);



    @RequestMapping(method = RequestMethod.POST, value = "/psdefields/searchdefault")
    Page<PSDEField> searchDefault(@RequestBody PSDEFieldSearchContext context);


}
