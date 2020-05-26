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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.zentao.domain.Module;
import cn.ibizlab.pms.core.zentao.service.IModuleService;
import cn.ibizlab.pms.core.zentao.filter.ModuleSearchContext;

@Slf4j
@Api(tags = {"Module" })
@RestController("WebApi-module")
@RequestMapping("")
public class ModuleResource {

    @Autowired
    private IModuleService moduleService;

    @Autowired
    @Lazy
    public ModuleMapping moduleMapping;

    public ModuleDTO permissionDTO=new ModuleDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"Module" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/modules/getdraft")
    public ResponseEntity<ModuleDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(moduleMapping.toDto(moduleService.getDraft(new Module())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Create-all')")
    @ApiOperation(value = "Create", tags = {"Module" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/modules")
    @Transactional
    public ResponseEntity<ModuleDTO> create(@RequestBody ModuleDTO moduledto) {
        Module domain = moduleMapping.toDomain(moduledto);
		moduleService.create(domain);
        ModuleDTO dto = moduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.moduleMapping,#moduledtos})")
    @ApiOperation(value = "createBatch", tags = {"Module" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ModuleDTO> moduledtos) {
        moduleService.createBatch(moduleMapping.toDomain(moduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Get-all')")
    @ApiOperation(value = "Get", tags = {"Module" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/modules/{module_id}")
    public ResponseEntity<ModuleDTO> get(@PathVariable("module_id") BigInteger module_id) {
        Module domain = moduleService.get(module_id);
        ModuleDTO dto = moduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Update-all')")
    @ApiOperation(value = "Update", tags = {"Module" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/modules/{module_id}")
    @Transactional
    public ResponseEntity<ModuleDTO> update(@PathVariable("module_id") BigInteger module_id, @RequestBody ModuleDTO moduledto) {
		Module domain  = moduleMapping.toDomain(moduledto);
        domain .setId(module_id);
		moduleService.update(domain );
		ModuleDTO dto = moduleMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.moduleMapping,#moduledtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"Module" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/modules/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ModuleDTO> moduledtos) {
        moduleService.updateBatch(moduleMapping.toDomain(moduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Save-all')")
    @ApiOperation(value = "Save", tags = {"Module" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/save")
    public ResponseEntity<Boolean> save(@RequestBody ModuleDTO moduledto) {
        return ResponseEntity.status(HttpStatus.OK).body(moduleService.save(moduleMapping.toDomain(moduledto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.moduleMapping,#moduledtos})")
    @ApiOperation(value = "SaveBatch", tags = {"Module" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ModuleDTO> moduledtos) {
        moduleService.saveBatch(moduleMapping.toDomain(moduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"Module" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ModuleDTO moduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(moduleService.checkKey(moduleMapping.toDomain(moduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Module" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/modules/{module_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("module_id") BigInteger module_id) {
         return ResponseEntity.status(HttpStatus.OK).body(moduleService.remove(module_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.moduleMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"Module" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/modules/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        moduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Line-all')")
	@ApiOperation(value = "fetch产品线", tags = {"Module" } ,notes = "fetch产品线")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchline")
	public ResponseEntity<List<ModuleDTO>> fetchLine(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchLine(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Line-all')")
	@ApiOperation(value = "search产品线", tags = {"Module" } ,notes = "search产品线")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchline")
	public ResponseEntity<Page<ModuleDTO>> searchLine(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchLine(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-StoryModule-all')")
	@ApiOperation(value = "fetch需求模块", tags = {"Module" } ,notes = "fetch需求模块")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchstorymodule")
	public ResponseEntity<List<ModuleDTO>> fetchStoryModule(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchStoryModule(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-StoryModule-all')")
	@ApiOperation(value = "search需求模块", tags = {"Module" } ,notes = "search需求模块")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchstorymodule")
	public ResponseEntity<Page<ModuleDTO>> searchStoryModule(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchStoryModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Module" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchdefault")
	public ResponseEntity<List<ModuleDTO>> fetchDefault(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDefault(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Module" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchdefault")
	public ResponseEntity<Page<ModuleDTO>> searchDefault(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-DocModule-all')")
	@ApiOperation(value = "fetch文档目录", tags = {"Module" } ,notes = "fetch文档目录")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchdocmodule")
	public ResponseEntity<List<ModuleDTO>> fetchDocModule(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDocModule(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-DocModule-all')")
	@ApiOperation(value = "search文档目录", tags = {"Module" } ,notes = "search文档目录")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchdocmodule")
	public ResponseEntity<Page<ModuleDTO>> searchDocModule(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDocModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
