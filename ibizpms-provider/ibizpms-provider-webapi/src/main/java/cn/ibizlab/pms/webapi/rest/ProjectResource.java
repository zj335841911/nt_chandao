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
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.service.IProjectService;
import cn.ibizlab.pms.core.zentao.filter.ProjectSearchContext;

@Slf4j
@Api(tags = {"Project" })
@RestController("WebApi-project")
@RequestMapping("")
public class ProjectResource {

    @Autowired
    private IProjectService projectService;

    @Autowired
    @Lazy
    public ProjectMapping projectMapping;

    public ProjectDTO permissionDTO=new ProjectDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"Project" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProjectDTO projectdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(projectService.checkKey(projectMapping.toDomain(projectdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-Save-all')")
    @ApiOperation(value = "Save", tags = {"Project" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/save")
    public ResponseEntity<Boolean> save(@RequestBody ProjectDTO projectdto) {
        return ResponseEntity.status(HttpStatus.OK).body(projectService.save(projectMapping.toDomain(projectdto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatch", tags = {"Project" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProjectDTO> projectdtos) {
        projectService.saveBatch(projectMapping.toDomain(projectdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-Update-all')")
    @ApiOperation(value = "Update", tags = {"Project" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}")
    @Transactional
    public ResponseEntity<ProjectDTO> update(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectDTO projectdto) {
		Project domain = projectMapping.toDomain(projectdto);
        domain.setId(project_id);
		projectService.update(domain);
		ProjectDTO dto = projectMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"Project" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProjectDTO> projectdtos) {
        projectService.updateBatch(projectMapping.toDomain(projectdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-Get-all')")
    @ApiOperation(value = "Get", tags = {"Project" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}")
    public ResponseEntity<ProjectDTO> get(@PathVariable("project_id") BigInteger project_id) {
        Project domain = projectService.get(project_id);
        ProjectDTO dto = projectMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-Create-all')")
    @ApiOperation(value = "Create", tags = {"Project" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/projects")
    @Transactional
    public ResponseEntity<ProjectDTO> create(@RequestBody ProjectDTO projectdto) {
        Project domain = projectMapping.toDomain(projectdto);
		projectService.create(domain);
        ProjectDTO dto = projectMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatch", tags = {"Project" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProjectDTO> projectdtos) {
        projectService.createBatch(projectMapping.toDomain(projectdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Project" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("project_id") BigInteger project_id) {
         return ResponseEntity.status(HttpStatus.OK).body(projectService.remove(project_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"Project" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        projectService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"Project" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/getdraft")
    public ResponseEntity<ProjectDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(projectMapping.toDto(projectService.getDraft(new Project())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-CurProduct-all')")
	@ApiOperation(value = "fetch当前项目", tags = {"Project" } ,notes = "fetch当前项目")
    @RequestMapping(method= RequestMethod.GET , value="/projects/fetchcurproduct")
	public ResponseEntity<List<ProjectDTO>> fetchCurProduct(ProjectSearchContext context) {
        Page<Project> domains = projectService.searchCurProduct(context) ;
        List<ProjectDTO> list = projectMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-CurProduct-all')")
	@ApiOperation(value = "search当前项目", tags = {"Project" } ,notes = "search当前项目")
    @RequestMapping(method= RequestMethod.POST , value="/projects/searchcurproduct")
	public ResponseEntity<Page<ProjectDTO>> searchCurProduct(@RequestBody ProjectSearchContext context) {
        Page<Project> domains = projectService.searchCurProduct(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Project" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/fetchdefault")
	public ResponseEntity<List<ProjectDTO>> fetchDefault(ProjectSearchContext context) {
        Page<Project> domains = projectService.searchDefault(context) ;
        List<ProjectDTO> list = projectMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Project-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Project" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/searchdefault")
	public ResponseEntity<Page<ProjectDTO>> searchDefault(@RequestBody ProjectSearchContext context) {
        Page<Project> domains = projectService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
