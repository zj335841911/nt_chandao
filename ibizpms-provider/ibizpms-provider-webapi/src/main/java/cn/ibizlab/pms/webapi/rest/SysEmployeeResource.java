package cn.ibizlab.pms.webapi.rest;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import com.alibaba.fastjson.JSONObject;
import javax.servlet.ServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.validation.annotation.Validated;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.service.ISysEmployeeService;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"人员" })
@RestController("WebApi-sysemployee")
@RequestMapping("")
public class SysEmployeeResource {

    @Autowired
    public ISysEmployeeService sysemployeeService;

    @Autowired
    @Lazy
    public SysEmployeeMapping sysemployeeMapping;

    @ApiOperation(value = "新建人员", tags = {"人员" },  notes = "新建人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees")
    public ResponseEntity<SysEmployeeDTO> create(@Validated @RequestBody SysEmployeeDTO sysemployeedto) {
        SysEmployee domain = sysemployeeMapping.toDomain(sysemployeedto);
		sysemployeeService.create(domain);
        SysEmployeeDTO dto = sysemployeeMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "批量新建人员", tags = {"人员" },  notes = "批量新建人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<SysEmployeeDTO> sysemployeedtos) {
        sysemployeeService.createBatch(sysemployeeMapping.toDomain(sysemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "更新人员", tags = {"人员" },  notes = "更新人员")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysemployees/{sysemployee_id}")
    public ResponseEntity<SysEmployeeDTO> update(@PathVariable("sysemployee_id") String sysemployee_id, @RequestBody SysEmployeeDTO sysemployeedto) {
		SysEmployee domain  = sysemployeeMapping.toDomain(sysemployeedto);
        domain .setUserid(sysemployee_id);
		sysemployeeService.update(domain );
		SysEmployeeDTO dto = sysemployeeMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "批量更新人员", tags = {"人员" },  notes = "批量更新人员")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysemployees/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<SysEmployeeDTO> sysemployeedtos) {
        sysemployeeService.updateBatch(sysemployeeMapping.toDomain(sysemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "删除人员", tags = {"人员" },  notes = "删除人员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/sysemployees/{sysemployee_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("sysemployee_id") String sysemployee_id) {
         return ResponseEntity.status(HttpStatus.OK).body(sysemployeeService.remove(sysemployee_id));
    }

    @ApiOperation(value = "批量删除人员", tags = {"人员" },  notes = "批量删除人员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/sysemployees/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        sysemployeeService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "获取人员", tags = {"人员" },  notes = "获取人员")
	@RequestMapping(method = RequestMethod.GET, value = "/sysemployees/{sysemployee_id}")
    public ResponseEntity<SysEmployeeDTO> get(@PathVariable("sysemployee_id") String sysemployee_id) {
        SysEmployee domain = sysemployeeService.get(sysemployee_id);
        SysEmployeeDTO dto = sysemployeeMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取人员草稿", tags = {"人员" },  notes = "获取人员草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/sysemployees/getdraft")
    public ResponseEntity<SysEmployeeDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(sysemployeeMapping.toDto(sysemployeeService.getDraft(new SysEmployee())));
    }

    @ApiOperation(value = "检查人员", tags = {"人员" },  notes = "检查人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody SysEmployeeDTO sysemployeedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(sysemployeeService.checkKey(sysemployeeMapping.toDomain(sysemployeedto)));
    }

    @ApiOperation(value = "保存人员", tags = {"人员" },  notes = "保存人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/save")
    public ResponseEntity<Boolean> save(@RequestBody SysEmployeeDTO sysemployeedto) {
        return ResponseEntity.status(HttpStatus.OK).body(sysemployeeService.save(sysemployeeMapping.toDomain(sysemployeedto)));
    }

    @ApiOperation(value = "批量保存人员", tags = {"人员" },  notes = "批量保存人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<SysEmployeeDTO> sysemployeedtos) {
        sysemployeeService.saveBatch(sysemployeeMapping.toDomain(sysemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

	@ApiOperation(value = "获取Bug用户", tags = {"人员" } ,notes = "获取Bug用户")
    @RequestMapping(method= RequestMethod.GET , value="/sysemployees/fetchbuguser")
	public ResponseEntity<List<SysEmployeeDTO>> fetchBugUser(SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchBugUser(context) ;
        List<SysEmployeeDTO> list = sysemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询Bug用户", tags = {"人员" } ,notes = "查询Bug用户")
    @RequestMapping(method= RequestMethod.POST , value="/sysemployees/searchbuguser")
	public ResponseEntity<Page<SysEmployeeDTO>> searchBugUser(@RequestBody SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchBugUser(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

	@ApiOperation(value = "获取数据集", tags = {"人员" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/sysemployees/fetchdefault")
	public ResponseEntity<List<SysEmployeeDTO>> fetchDefault(SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchDefault(context) ;
        List<SysEmployeeDTO> list = sysemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询数据集", tags = {"人员" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/sysemployees/searchdefault")
	public ResponseEntity<Page<SysEmployeeDTO>> searchDefault(@RequestBody SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

	@ApiOperation(value = "获取项目团队管理", tags = {"人员" } ,notes = "获取项目团队管理")
    @RequestMapping(method= RequestMethod.GET , value="/sysemployees/fetchprojectteamm")
	public ResponseEntity<List<SysEmployeeDTO>> fetchProjectTeamM(SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchProjectTeamM(context) ;
        List<SysEmployeeDTO> list = sysemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询项目团队管理", tags = {"人员" } ,notes = "查询项目团队管理")
    @RequestMapping(method= RequestMethod.POST , value="/sysemployees/searchprojectteamm")
	public ResponseEntity<Page<SysEmployeeDTO>> searchProjectTeamM(@RequestBody SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchProjectTeamM(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

	@ApiOperation(value = "获取项目团队成员", tags = {"人员" } ,notes = "获取项目团队成员")
    @RequestMapping(method= RequestMethod.GET , value="/sysemployees/fetchprojectteamuser")
	public ResponseEntity<List<SysEmployeeDTO>> fetchProjectTeamUser(SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchProjectTeamUser(context) ;
        List<SysEmployeeDTO> list = sysemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询项目团队成员", tags = {"人员" } ,notes = "查询项目团队成员")
    @RequestMapping(method= RequestMethod.POST , value="/sysemployees/searchprojectteamuser")
	public ResponseEntity<Page<SysEmployeeDTO>> searchProjectTeamUser(@RequestBody SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchProjectTeamUser(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

	@ApiOperation(value = "获取项目团队成员", tags = {"人员" } ,notes = "获取项目团队成员")
    @RequestMapping(method= RequestMethod.GET , value="/sysemployees/fetchprojectteamuser_task")
	public ResponseEntity<List<SysEmployeeDTO>> fetchProjectTeamUser_Task(SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchProjectTeamUser_Task(context) ;
        List<SysEmployeeDTO> list = sysemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询项目团队成员", tags = {"人员" } ,notes = "查询项目团队成员")
    @RequestMapping(method= RequestMethod.POST , value="/sysemployees/searchprojectteamuser_task")
	public ResponseEntity<Page<SysEmployeeDTO>> searchProjectTeamUser_Task(@RequestBody SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchProjectTeamUser_Task(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

	@ApiOperation(value = "获取数据查询2", tags = {"人员" } ,notes = "获取数据查询2")
    @RequestMapping(method= RequestMethod.GET , value="/sysemployees/fetchtaskteam")
	public ResponseEntity<List<SysEmployeeDTO>> fetchTaskTeam(SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchTaskTeam(context) ;
        List<SysEmployeeDTO> list = sysemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询数据查询2", tags = {"人员" } ,notes = "查询数据查询2")
    @RequestMapping(method= RequestMethod.POST , value="/sysemployees/searchtaskteam")
	public ResponseEntity<Page<SysEmployeeDTO>> searchTaskTeam(@RequestBody SysEmployeeSearchContext context) {
        Page<SysEmployee> domains = sysemployeeService.searchTaskTeam(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

