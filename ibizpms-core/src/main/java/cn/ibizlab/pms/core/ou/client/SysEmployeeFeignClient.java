package cn.ibizlab.pms.core.ou.client;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[SysEmployee] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.ibzou-api:ibzou-api}", contextId = "SysEmployee", fallback = SysEmployeeFallback.class)
public interface SysEmployeeFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/sysemployees/select")
    Page<SysEmployee> select();


    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees")
    SysEmployee create(@RequestBody SysEmployee sysemployee);

    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/batch")
    Boolean createBatch(@RequestBody List<SysEmployee> sysemployees);


    @RequestMapping(method = RequestMethod.PUT, value = "/sysemployees/{userid}")
    SysEmployee update(@PathVariable("userid") String userid,@RequestBody SysEmployee sysemployee);

    @RequestMapping(method = RequestMethod.PUT, value = "/sysemployees/batch")
    Boolean updateBatch(@RequestBody List<SysEmployee> sysemployees);


    @RequestMapping(method = RequestMethod.DELETE, value = "/sysemployees/{userid}")
    Boolean remove(@PathVariable("userid") String userid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/sysemployees/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/sysemployees/{userid}")
    SysEmployee get(@PathVariable("userid") String userid);

    @RequestMapping(method = RequestMethod.GET, value = "/sysemployees/getbycodename/{userid}")
    String getByCodeName(@PathVariable("userid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/sysemployees/getdraft")
    SysEmployee getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/checkkey")
    Boolean checkKey(@RequestBody SysEmployee sysemployee);


    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/save")
    Boolean save(@RequestBody SysEmployee sysemployee);

    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/savebatch")
    Boolean saveBatch(@RequestBody List<SysEmployee> sysemployees);



    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/searchbuguser")
    Page<SysEmployee> searchBugUser(@RequestBody SysEmployeeSearchContext context);



    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/searchdefault")
    Page<SysEmployee> searchDefault(@RequestBody SysEmployeeSearchContext context);



    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/searchprojectteamm")
    Page<SysEmployee> searchProjectTeamM(@RequestBody SysEmployeeSearchContext context);



    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/searchprojectteamuser")
    Page<SysEmployee> searchProjectTeamUser(@RequestBody SysEmployeeSearchContext context);



    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/searchprojectteamuser_task")
    Page<SysEmployee> searchProjectTeamUser_Task(@RequestBody SysEmployeeSearchContext context);



    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/searchtaskmteam")
    Page<SysEmployee> searchTaskMTeam(@RequestBody SysEmployeeSearchContext context);



    @RequestMapping(method = RequestMethod.POST, value = "/sysemployees/searchtaskteam")
    Page<SysEmployee> searchTaskTeam(@RequestBody SysEmployeeSearchContext context);


}
