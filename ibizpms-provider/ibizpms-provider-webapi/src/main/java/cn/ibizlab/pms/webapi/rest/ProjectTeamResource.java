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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;
import cn.ibizlab.pms.core.ibiz.service.IProjectTeamService;
import cn.ibizlab.pms.core.ibiz.filter.ProjectTeamSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"项目团队" })
@RestController("WebApi-projectteam")
@RequestMapping("")
public class ProjectTeamResource {

    @Autowired
    public IProjectTeamService projectteamService;

    @Autowired
    @Lazy
    public ProjectTeamMapping projectteamMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-GetUserRole-all')")
    @ApiOperation(value = "根据项目项目团队", tags = {"项目团队" },  notes = "根据项目项目团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/projectteams/{projectteam_id}/getuserrole")
    public ResponseEntity<ProjectTeamDTO> getUserRoleByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("projectteam_id") BigInteger projectteam_id, @RequestBody ProjectTeamDTO projectteamdto) {
        ProjectTeam domain = projectteamMapping.toDomain(projectteamdto);
        domain.setRoot(project_id);
        domain = projectteamService.getUserRole(domain) ;
        projectteamdto = projectteamMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(projectteamdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Create-all')")
    @ApiOperation(value = "根据项目建立项目团队", tags = {"项目团队" },  notes = "根据项目建立项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectteams")
    public ResponseEntity<ProjectTeamDTO> createByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectTeamDTO projectteamdto) {
        ProjectTeam domain = projectteamMapping.toDomain(projectteamdto);
        domain.setRoot(project_id);
		projectteamService.create(domain);
        ProjectTeamDTO dto = projectteamMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Create-all')")
    @ApiOperation(value = "根据项目批量建立项目团队", tags = {"项目团队" },  notes = "根据项目批量建立项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectteams/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<ProjectTeamDTO> projectteamdtos) {
        List<ProjectTeam> domainlist=projectteamMapping.toDomain(projectteamdtos);
        for(ProjectTeam domain:domainlist){
            domain.setRoot(project_id);
        }
        projectteamService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Update-all')")
    @ApiOperation(value = "根据项目更新项目团队", tags = {"项目团队" },  notes = "根据项目更新项目团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/projectteams/{projectteam_id}")
    public ResponseEntity<ProjectTeamDTO> updateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("projectteam_id") BigInteger projectteam_id, @RequestBody ProjectTeamDTO projectteamdto) {
        ProjectTeam domain = projectteamMapping.toDomain(projectteamdto);
        domain.setRoot(project_id);
        domain.setId(projectteam_id);
		projectteamService.update(domain);
        ProjectTeamDTO dto = projectteamMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Update-all')")
    @ApiOperation(value = "根据项目批量更新项目团队", tags = {"项目团队" },  notes = "根据项目批量更新项目团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/projectteams/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<ProjectTeamDTO> projectteamdtos) {
        List<ProjectTeam> domainlist=projectteamMapping.toDomain(projectteamdtos);
        for(ProjectTeam domain:domainlist){
            domain.setRoot(project_id);
        }
        projectteamService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Remove-all')")
    @ApiOperation(value = "根据项目删除项目团队", tags = {"项目团队" },  notes = "根据项目删除项目团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/projectteams/{projectteam_id}")
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("projectteam_id") BigInteger projectteam_id) {
		return ResponseEntity.status(HttpStatus.OK).body(projectteamService.remove(projectteam_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Remove-all')")
    @ApiOperation(value = "根据项目批量删除项目团队", tags = {"项目团队" },  notes = "根据项目批量删除项目团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/projectteams/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<BigInteger> ids) {
        projectteamService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Get-all')")
    @ApiOperation(value = "根据项目获取项目团队", tags = {"项目团队" },  notes = "根据项目获取项目团队")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/projectteams/{projectteam_id}")
    public ResponseEntity<ProjectTeamDTO> getByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("projectteam_id") BigInteger projectteam_id) {
        ProjectTeam domain = projectteamService.get(projectteam_id);
        ProjectTeamDTO dto = projectteamMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目获取项目团队草稿", tags = {"项目团队" },  notes = "根据项目获取项目团队草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/projectteams/getdraft")
    public ResponseEntity<ProjectTeamDTO> getDraftByProject(@PathVariable("project_id") BigInteger project_id) {
        ProjectTeam domain = new ProjectTeam();
        domain.setRoot(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(projectteamMapping.toDto(projectteamService.getDraft(domain)));
    }

    @ApiOperation(value = "根据项目检查项目团队", tags = {"项目团队" },  notes = "根据项目检查项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectteams/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectTeamDTO projectteamdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(projectteamService.checkKey(projectteamMapping.toDomain(projectteamdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Save-all')")
    @ApiOperation(value = "根据项目保存项目团队", tags = {"项目团队" },  notes = "根据项目保存项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectteams/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectTeamDTO projectteamdto) {
        ProjectTeam domain = projectteamMapping.toDomain(projectteamdto);
        domain.setRoot(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(projectteamService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-Save-all')")
    @ApiOperation(value = "根据项目批量保存项目团队", tags = {"项目团队" },  notes = "根据项目批量保存项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectteams/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<ProjectTeamDTO> projectteamdtos) {
        List<ProjectTeam> domainlist=projectteamMapping.toDomain(projectteamdtos);
        for(ProjectTeam domain:domainlist){
             domain.setRoot(project_id);
        }
        projectteamService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-searchDefault-all')")
	@ApiOperation(value = "根据项目获取DEFAULT", tags = {"项目团队" } ,notes = "根据项目获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/projectteams/fetchdefault")
	public ResponseEntity<List<ProjectTeamDTO>> fetchProjectTeamDefaultByProject(@PathVariable("project_id") BigInteger project_id,ProjectTeamSearchContext context) {
        context.setN_root_eq(project_id);
        Page<ProjectTeam> domains = projectteamService.searchDefault(context) ;
        List<ProjectTeamDTO> list = projectteamMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-searchDefault-all')")
	@ApiOperation(value = "根据项目查询DEFAULT", tags = {"项目团队" } ,notes = "根据项目查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/projectteams/searchdefault")
	public ResponseEntity<Page<ProjectTeamDTO>> searchProjectTeamDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectTeamSearchContext context) {
        context.setN_root_eq(project_id);
        Page<ProjectTeam> domains = projectteamService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectteamMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-searchRowEditDefault-all')")
	@ApiOperation(value = "根据项目获取行编辑查询", tags = {"项目团队" } ,notes = "根据项目获取行编辑查询")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/projectteams/fetchroweditdefault")
	public ResponseEntity<List<ProjectTeamDTO>> fetchProjectTeamRowEditDefaultByProject(@PathVariable("project_id") BigInteger project_id,ProjectTeamSearchContext context) {
        context.setN_root_eq(project_id);
        Page<ProjectTeam> domains = projectteamService.searchRowEditDefault(context) ;
        List<ProjectTeamDTO> list = projectteamMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectTeam-searchRowEditDefault-all')")
	@ApiOperation(value = "根据项目查询行编辑查询", tags = {"项目团队" } ,notes = "根据项目查询行编辑查询")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/projectteams/searchroweditdefault")
	public ResponseEntity<Page<ProjectTeamDTO>> searchProjectTeamRowEditDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectTeamSearchContext context) {
        context.setN_root_eq(project_id);
        Page<ProjectTeam> domains = projectteamService.searchRowEditDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectteamMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

