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
import cn.ibizlab.pms.core.ibiz.domain.IBZ_PROJECTTEAM;
import cn.ibizlab.pms.core.ibiz.service.IIBZ_PROJECTTEAMService;
import cn.ibizlab.pms.core.ibiz.filter.IBZ_PROJECTTEAMSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"项目团队" })
@RestController("WebApi-ibz_projectteam")
@RequestMapping("")
public class IBZ_PROJECTTEAMResource {

    @Autowired
    public IIBZ_PROJECTTEAMService ibz_projectteamService;

    @Autowired
    @Lazy
    public IBZ_PROJECTTEAMMapping ibz_projectteamMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Create-all')")
    @ApiOperation(value = "新建项目团队", tags = {"项目团队" },  notes = "新建项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_projectteams")
    @Transactional
    public ResponseEntity<IBZ_PROJECTTEAMDTO> create(@RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
        IBZ_PROJECTTEAM domain = ibz_projectteamMapping.toDomain(ibz_projectteamdto);
		ibz_projectteamService.create(domain);
        IBZ_PROJECTTEAMDTO dto = ibz_projectteamMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Create-all')")
    @ApiOperation(value = "批量新建项目团队", tags = {"项目团队" },  notes = "批量新建项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_projectteams/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IBZ_PROJECTTEAMDTO> ibz_projectteamdtos) {
        ibz_projectteamService.createBatch(ibz_projectteamMapping.toDomain(ibz_projectteamdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Update-all')")
    @ApiOperation(value = "更新项目团队", tags = {"项目团队" },  notes = "更新项目团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibz_projectteams/{ibz_projectteam_id}")
    @Transactional
    public ResponseEntity<IBZ_PROJECTTEAMDTO> update(@PathVariable("ibz_projectteam_id") BigInteger ibz_projectteam_id, @RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
		IBZ_PROJECTTEAM domain  = ibz_projectteamMapping.toDomain(ibz_projectteamdto);
        domain .setId(ibz_projectteam_id);
		ibz_projectteamService.update(domain );
		IBZ_PROJECTTEAMDTO dto = ibz_projectteamMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Update-all')")
    @ApiOperation(value = "批量更新项目团队", tags = {"项目团队" },  notes = "批量更新项目团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibz_projectteams/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IBZ_PROJECTTEAMDTO> ibz_projectteamdtos) {
        ibz_projectteamService.updateBatch(ibz_projectteamMapping.toDomain(ibz_projectteamdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Remove-all')")
    @ApiOperation(value = "删除项目团队", tags = {"项目团队" },  notes = "删除项目团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibz_projectteams/{ibz_projectteam_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("ibz_projectteam_id") BigInteger ibz_projectteam_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamService.remove(ibz_projectteam_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Remove-all')")
    @ApiOperation(value = "批量删除项目团队", tags = {"项目团队" },  notes = "批量删除项目团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibz_projectteams/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        ibz_projectteamService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Get-all')")
    @ApiOperation(value = "获取项目团队", tags = {"项目团队" },  notes = "获取项目团队")
	@RequestMapping(method = RequestMethod.GET, value = "/ibz_projectteams/{ibz_projectteam_id}")
    public ResponseEntity<IBZ_PROJECTTEAMDTO> get(@PathVariable("ibz_projectteam_id") BigInteger ibz_projectteam_id) {
        IBZ_PROJECTTEAM domain = ibz_projectteamService.get(ibz_projectteam_id);
        IBZ_PROJECTTEAMDTO dto = ibz_projectteamMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取项目团队草稿", tags = {"项目团队" },  notes = "获取项目团队草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibz_projectteams/getdraft")
    public ResponseEntity<IBZ_PROJECTTEAMDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamMapping.toDto(ibz_projectteamService.getDraft(new IBZ_PROJECTTEAM())));
    }

    @ApiOperation(value = "检查项目团队", tags = {"项目团队" },  notes = "检查项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_projectteams/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamService.checkKey(ibz_projectteamMapping.toDomain(ibz_projectteamdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Save-all')")
    @ApiOperation(value = "保存项目团队", tags = {"项目团队" },  notes = "保存项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_projectteams/save")
    public ResponseEntity<Boolean> save(@RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamService.save(ibz_projectteamMapping.toDomain(ibz_projectteamdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Save-all')")
    @ApiOperation(value = "批量保存项目团队", tags = {"项目团队" },  notes = "批量保存项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_projectteams/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IBZ_PROJECTTEAMDTO> ibz_projectteamdtos) {
        ibz_projectteamService.saveBatch(ibz_projectteamMapping.toDomain(ibz_projectteamdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"项目团队" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/ibz_projectteams/fetchdefault")
	public ResponseEntity<List<IBZ_PROJECTTEAMDTO>> fetchDefault(IBZ_PROJECTTEAMSearchContext context) {
        Page<IBZ_PROJECTTEAM> domains = ibz_projectteamService.searchDefault(context) ;
        List<IBZ_PROJECTTEAMDTO> list = ibz_projectteamMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"项目团队" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/ibz_projectteams/searchdefault")
	public ResponseEntity<Page<IBZ_PROJECTTEAMDTO>> searchDefault(@RequestBody IBZ_PROJECTTEAMSearchContext context) {
        Page<IBZ_PROJECTTEAM> domains = ibz_projectteamService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibz_projectteamMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Create-all')")
    @ApiOperation(value = "根据项目建立项目团队", tags = {"项目团队" },  notes = "根据项目建立项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/ibz_projectteams")
    @Transactional
    public ResponseEntity<IBZ_PROJECTTEAMDTO> createByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
        IBZ_PROJECTTEAM domain = ibz_projectteamMapping.toDomain(ibz_projectteamdto);
        
		ibz_projectteamService.create(domain);
        IBZ_PROJECTTEAMDTO dto = ibz_projectteamMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Create-all')")
    @ApiOperation(value = "根据项目批量建立项目团队", tags = {"项目团队" },  notes = "根据项目批量建立项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/ibz_projectteams/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<IBZ_PROJECTTEAMDTO> ibz_projectteamdtos) {
        List<IBZ_PROJECTTEAM> domainlist=ibz_projectteamMapping.toDomain(ibz_projectteamdtos);
        for(IBZ_PROJECTTEAM domain:domainlist){
            
        }
        ibz_projectteamService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Update-all')")
    @ApiOperation(value = "根据项目更新项目团队", tags = {"项目团队" },  notes = "根据项目更新项目团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/ibz_projectteams/{ibz_projectteam_id}")
    @Transactional
    public ResponseEntity<IBZ_PROJECTTEAMDTO> updateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("ibz_projectteam_id") BigInteger ibz_projectteam_id, @RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
        IBZ_PROJECTTEAM domain = ibz_projectteamMapping.toDomain(ibz_projectteamdto);
        
        domain.setId(ibz_projectteam_id);
		ibz_projectteamService.update(domain);
        IBZ_PROJECTTEAMDTO dto = ibz_projectteamMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Update-all')")
    @ApiOperation(value = "根据项目批量更新项目团队", tags = {"项目团队" },  notes = "根据项目批量更新项目团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/ibz_projectteams/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<IBZ_PROJECTTEAMDTO> ibz_projectteamdtos) {
        List<IBZ_PROJECTTEAM> domainlist=ibz_projectteamMapping.toDomain(ibz_projectteamdtos);
        for(IBZ_PROJECTTEAM domain:domainlist){
            
        }
        ibz_projectteamService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Remove-all')")
    @ApiOperation(value = "根据项目删除项目团队", tags = {"项目团队" },  notes = "根据项目删除项目团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/ibz_projectteams/{ibz_projectteam_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("ibz_projectteam_id") BigInteger ibz_projectteam_id) {
		return ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamService.remove(ibz_projectteam_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Remove-all')")
    @ApiOperation(value = "根据项目批量删除项目团队", tags = {"项目团队" },  notes = "根据项目批量删除项目团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/ibz_projectteams/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<BigInteger> ids) {
        ibz_projectteamService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Get-all')")
    @ApiOperation(value = "根据项目获取项目团队", tags = {"项目团队" },  notes = "根据项目获取项目团队")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/ibz_projectteams/{ibz_projectteam_id}")
    public ResponseEntity<IBZ_PROJECTTEAMDTO> getByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("ibz_projectteam_id") BigInteger ibz_projectteam_id) {
        IBZ_PROJECTTEAM domain = ibz_projectteamService.get(ibz_projectteam_id);
        IBZ_PROJECTTEAMDTO dto = ibz_projectteamMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目获取项目团队草稿", tags = {"项目团队" },  notes = "根据项目获取项目团队草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/ibz_projectteams/getdraft")
    public ResponseEntity<IBZ_PROJECTTEAMDTO> getDraftByProject(@PathVariable("project_id") BigInteger project_id) {
        IBZ_PROJECTTEAM domain = new IBZ_PROJECTTEAM();
        
        return ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamMapping.toDto(ibz_projectteamService.getDraft(domain)));
    }

    @ApiOperation(value = "根据项目检查项目团队", tags = {"项目团队" },  notes = "根据项目检查项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/ibz_projectteams/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamService.checkKey(ibz_projectteamMapping.toDomain(ibz_projectteamdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Save-all')")
    @ApiOperation(value = "根据项目保存项目团队", tags = {"项目团队" },  notes = "根据项目保存项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/ibz_projectteams/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody IBZ_PROJECTTEAMDTO ibz_projectteamdto) {
        IBZ_PROJECTTEAM domain = ibz_projectteamMapping.toDomain(ibz_projectteamdto);
        
        return ResponseEntity.status(HttpStatus.OK).body(ibz_projectteamService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-Save-all')")
    @ApiOperation(value = "根据项目批量保存项目团队", tags = {"项目团队" },  notes = "根据项目批量保存项目团队")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/ibz_projectteams/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<IBZ_PROJECTTEAMDTO> ibz_projectteamdtos) {
        List<IBZ_PROJECTTEAM> domainlist=ibz_projectteamMapping.toDomain(ibz_projectteamdtos);
        for(IBZ_PROJECTTEAM domain:domainlist){
             
        }
        ibz_projectteamService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-searchDefault-all')")
	@ApiOperation(value = "根据项目获取DEFAULT", tags = {"项目团队" } ,notes = "根据项目获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/ibz_projectteams/fetchdefault")
	public ResponseEntity<List<IBZ_PROJECTTEAMDTO>> fetchIBZ_PROJECTTEAMDefaultByProject(@PathVariable("project_id") BigInteger project_id,IBZ_PROJECTTEAMSearchContext context) {
        
        Page<IBZ_PROJECTTEAM> domains = ibz_projectteamService.searchDefault(context) ;
        List<IBZ_PROJECTTEAMDTO> list = ibz_projectteamMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_PROJECTTEAM-searchDefault-all')")
	@ApiOperation(value = "根据项目查询DEFAULT", tags = {"项目团队" } ,notes = "根据项目查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/ibz_projectteams/searchdefault")
	public ResponseEntity<Page<IBZ_PROJECTTEAMDTO>> searchIBZ_PROJECTTEAMDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody IBZ_PROJECTTEAMSearchContext context) {
        
        Page<IBZ_PROJECTTEAM> domains = ibz_projectteamService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibz_projectteamMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

