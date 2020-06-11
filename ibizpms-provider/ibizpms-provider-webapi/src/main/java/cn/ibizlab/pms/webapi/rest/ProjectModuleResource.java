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
import org.springframework.transaction.annotation.Transactional;
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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.ibiz.domain.ProjectModule;
import cn.ibizlab.pms.core.ibiz.service.IProjectModuleService;
import cn.ibizlab.pms.core.ibiz.filter.ProjectModuleSearchContext;

@Slf4j
@Api(tags = {"任务模块" })
@RestController("WebApi-projectmodule")
@RequestMapping("")
public class ProjectModuleResource {

    @Autowired
    public IProjectModuleService projectmoduleService;

    @Autowired
    @Lazy
    public ProjectModuleMapping projectmoduleMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Create-all')")
    @ApiOperation(value = "新建任务模块", tags = {"任务模块" },  notes = "新建任务模块")
	@RequestMapping(method = RequestMethod.POST, value = "/projectmodules")
    @Transactional
    public ResponseEntity<ProjectModuleDTO> create(@RequestBody ProjectModuleDTO projectmoduledto) {
        ProjectModule domain = projectmoduleMapping.toDomain(projectmoduledto);
		projectmoduleService.create(domain);
        ProjectModuleDTO dto = projectmoduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Create-all')")
    @ApiOperation(value = "批量新建任务模块", tags = {"任务模块" },  notes = "批量新建任务模块")
	@RequestMapping(method = RequestMethod.POST, value = "/projectmodules/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProjectModuleDTO> projectmoduledtos) {
        projectmoduleService.createBatch(projectmoduleMapping.toDomain(projectmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "获取任务模块草稿", tags = {"任务模块" },  notes = "获取任务模块草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/projectmodules/getdraft")
    public ResponseEntity<ProjectModuleDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(projectmoduleMapping.toDto(projectmoduleService.getDraft(new ProjectModule())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Update-all')")
    @ApiOperation(value = "更新任务模块", tags = {"任务模块" },  notes = "更新任务模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/projectmodules/{projectmodule_id}")
    @Transactional
    public ResponseEntity<ProjectModuleDTO> update(@PathVariable("projectmodule_id") BigInteger projectmodule_id, @RequestBody ProjectModuleDTO projectmoduledto) {
		ProjectModule domain  = projectmoduleMapping.toDomain(projectmoduledto);
        domain .setId(projectmodule_id);
		projectmoduleService.update(domain );
		ProjectModuleDTO dto = projectmoduleMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Update-all')")
    @ApiOperation(value = "批量更新任务模块", tags = {"任务模块" },  notes = "批量更新任务模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/projectmodules/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProjectModuleDTO> projectmoduledtos) {
        projectmoduleService.updateBatch(projectmoduleMapping.toDomain(projectmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Save-all')")
    @ApiOperation(value = "保存任务模块", tags = {"任务模块" },  notes = "保存任务模块")
	@RequestMapping(method = RequestMethod.POST, value = "/projectmodules/save")
    public ResponseEntity<Boolean> save(@RequestBody ProjectModuleDTO projectmoduledto) {
        return ResponseEntity.status(HttpStatus.OK).body(projectmoduleService.save(projectmoduleMapping.toDomain(projectmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Save-all')")
    @ApiOperation(value = "批量保存任务模块", tags = {"任务模块" },  notes = "批量保存任务模块")
	@RequestMapping(method = RequestMethod.POST, value = "/projectmodules/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProjectModuleDTO> projectmoduledtos) {
        projectmoduleService.saveBatch(projectmoduleMapping.toDomain(projectmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Get-all')")
    @ApiOperation(value = "获取任务模块", tags = {"任务模块" },  notes = "获取任务模块")
	@RequestMapping(method = RequestMethod.GET, value = "/projectmodules/{projectmodule_id}")
    public ResponseEntity<ProjectModuleDTO> get(@PathVariable("projectmodule_id") BigInteger projectmodule_id) {
        ProjectModule domain = projectmoduleService.get(projectmodule_id);
        ProjectModuleDTO dto = projectmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Remove-all')")
    @ApiOperation(value = "删除任务模块", tags = {"任务模块" },  notes = "删除任务模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projectmodules/{projectmodule_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("projectmodule_id") BigInteger projectmodule_id) {
         return ResponseEntity.status(HttpStatus.OK).body(projectmoduleService.remove(projectmodule_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Remove-all')")
    @ApiOperation(value = "批量删除任务模块", tags = {"任务模块" },  notes = "批量删除任务模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projectmodules/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        projectmoduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查任务模块", tags = {"任务模块" },  notes = "检查任务模块")
	@RequestMapping(method = RequestMethod.POST, value = "/projectmodules/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProjectModuleDTO projectmoduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(projectmoduleService.checkKey(projectmoduleMapping.toDomain(projectmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Default-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"任务模块" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projectmodules/fetchdefault")
	public ResponseEntity<List<ProjectModuleDTO>> fetchDefault(ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchDefault(context) ;
        List<ProjectModuleDTO> list = projectmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Default-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"任务模块" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projectmodules/searchdefault")
	public ResponseEntity<Page<ProjectModuleDTO>> searchDefault(@RequestBody ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Root_NoBranch-all')")
	@ApiOperation(value = "获取根模块_无分支", tags = {"任务模块" } ,notes = "获取根模块_无分支")
    @RequestMapping(method= RequestMethod.GET , value="/projectmodules/fetchroot_nobranch")
	public ResponseEntity<List<ProjectModuleDTO>> fetchRoot_NoBranch(ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchRoot_NoBranch(context) ;
        List<ProjectModuleDTO> list = projectmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Root_NoBranch-all')")
	@ApiOperation(value = "查询根模块_无分支", tags = {"任务模块" } ,notes = "查询根模块_无分支")
    @RequestMapping(method= RequestMethod.POST , value="/projectmodules/searchroot_nobranch")
	public ResponseEntity<Page<ProjectModuleDTO>> searchRoot_NoBranch(@RequestBody ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchRoot_NoBranch(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Root-all')")
	@ApiOperation(value = "获取根模块", tags = {"任务模块" } ,notes = "获取根模块")
    @RequestMapping(method= RequestMethod.GET , value="/projectmodules/fetchroot")
	public ResponseEntity<List<ProjectModuleDTO>> fetchRoot(ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchRoot(context) ;
        List<ProjectModuleDTO> list = projectmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Root-all')")
	@ApiOperation(value = "查询根模块", tags = {"任务模块" } ,notes = "查询根模块")
    @RequestMapping(method= RequestMethod.POST , value="/projectmodules/searchroot")
	public ResponseEntity<Page<ProjectModuleDTO>> searchRoot(@RequestBody ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchRoot(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Root_Task-all')")
	@ApiOperation(value = "获取根模块", tags = {"任务模块" } ,notes = "获取根模块")
    @RequestMapping(method= RequestMethod.GET , value="/projectmodules/fetchroot_task")
	public ResponseEntity<List<ProjectModuleDTO>> fetchRoot_Task(ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchRoot_Task(context) ;
        List<ProjectModuleDTO> list = projectmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectModule-Root_Task-all')")
	@ApiOperation(value = "查询根模块", tags = {"任务模块" } ,notes = "查询根模块")
    @RequestMapping(method= RequestMethod.POST , value="/projectmodules/searchroot_task")
	public ResponseEntity<Page<ProjectModuleDTO>> searchRoot_Task(@RequestBody ProjectModuleSearchContext context) {
        Page<ProjectModule> domains = projectmoduleService.searchRoot_Task(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

