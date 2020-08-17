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
import cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseStep;
import cn.ibizlab.pms.core.ibiz.service.IIbzLibCaseStepService;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibCaseStepSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"用例库用例步骤" })
@RestController("WebApi-ibzlibcasestep")
@RequestMapping("")
public class IbzLibCaseStepResource {

    @Autowired
    public IIbzLibCaseStepService ibzlibcasestepService;

    @Autowired
    @Lazy
    public IbzLibCaseStepMapping ibzlibcasestepMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Create-all')")
    @ApiOperation(value = "根据用例库用例建立用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例建立用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps")
    @Transactional
    public ResponseEntity<IbzLibCaseStepDTO> createByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        IbzLibCaseStep domain = ibzlibcasestepMapping.toDomain(ibzlibcasestepdto);
        domain.setIbizcase(ibzcase_id);
		ibzlibcasestepService.create(domain);
        IbzLibCaseStepDTO dto = ibzlibcasestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Create-all')")
    @ApiOperation(value = "根据用例库用例批量建立用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例批量建立用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch")
    public ResponseEntity<Boolean> createBatchByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody List<IbzLibCaseStepDTO> ibzlibcasestepdtos) {
        List<IbzLibCaseStep> domainlist=ibzlibcasestepMapping.toDomain(ibzlibcasestepdtos);
        for(IbzLibCaseStep domain:domainlist){
            domain.setIbizcase(ibzcase_id);
        }
        ibzlibcasestepService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Update-all')")
    @ApiOperation(value = "根据用例库用例更新用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例更新用例库用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasestep_id}")
    @Transactional
    public ResponseEntity<IbzLibCaseStepDTO> updateByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @PathVariable("ibzlibcasestep_id") BigInteger ibzlibcasestep_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        IbzLibCaseStep domain = ibzlibcasestepMapping.toDomain(ibzlibcasestepdto);
        domain.setIbizcase(ibzcase_id);
        domain.setId(ibzlibcasestep_id);
		ibzlibcasestepService.update(domain);
        IbzLibCaseStepDTO dto = ibzlibcasestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Update-all')")
    @ApiOperation(value = "根据用例库用例批量更新用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例批量更新用例库用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch")
    public ResponseEntity<Boolean> updateBatchByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody List<IbzLibCaseStepDTO> ibzlibcasestepdtos) {
        List<IbzLibCaseStep> domainlist=ibzlibcasestepMapping.toDomain(ibzlibcasestepdtos);
        for(IbzLibCaseStep domain:domainlist){
            domain.setIbizcase(ibzcase_id);
        }
        ibzlibcasestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Remove-all')")
    @ApiOperation(value = "根据用例库用例删除用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例删除用例库用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasestep_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @PathVariable("ibzlibcasestep_id") BigInteger ibzlibcasestep_id) {
		return ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepService.remove(ibzlibcasestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Remove-all')")
    @ApiOperation(value = "根据用例库用例批量删除用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例批量删除用例库用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch")
    public ResponseEntity<Boolean> removeBatchByIbzCase(@RequestBody List<BigInteger> ids) {
        ibzlibcasestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Get-all')")
    @ApiOperation(value = "根据用例库用例获取用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例获取用例库用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasestep_id}")
    public ResponseEntity<IbzLibCaseStepDTO> getByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @PathVariable("ibzlibcasestep_id") BigInteger ibzlibcasestep_id) {
        IbzLibCaseStep domain = ibzlibcasestepService.get(ibzlibcasestep_id);
        IbzLibCaseStepDTO dto = ibzlibcasestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据用例库用例获取用例库用例步骤草稿", tags = {"用例库用例步骤" },  notes = "根据用例库用例获取用例库用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/getdraft")
    public ResponseEntity<IbzLibCaseStepDTO> getDraftByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id) {
        IbzLibCaseStep domain = new IbzLibCaseStep();
        domain.setIbizcase(ibzcase_id);
        return ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepMapping.toDto(ibzlibcasestepService.getDraft(domain)));
    }

    @ApiOperation(value = "根据用例库用例检查用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例检查用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/checkkey")
    public ResponseEntity<Boolean> checkKeyByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepService.checkKey(ibzlibcasestepMapping.toDomain(ibzlibcasestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Save-all')")
    @ApiOperation(value = "根据用例库用例保存用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例保存用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/save")
    public ResponseEntity<Boolean> saveByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        IbzLibCaseStep domain = ibzlibcasestepMapping.toDomain(ibzlibcasestepdto);
        domain.setIbizcase(ibzcase_id);
        return ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Save-all')")
    @ApiOperation(value = "根据用例库用例批量保存用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例批量保存用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/{ibzcase_id}/ibzlibcasesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody List<IbzLibCaseStepDTO> ibzlibcasestepdtos) {
        List<IbzLibCaseStep> domainlist=ibzlibcasestepMapping.toDomain(ibzlibcasestepdtos);
        for(IbzLibCaseStep domain:domainlist){
             domain.setIbizcase(ibzcase_id);
        }
        ibzlibcasestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-searchDefault-all')")
	@ApiOperation(value = "根据用例库用例获取DEFAULT", tags = {"用例库用例步骤" } ,notes = "根据用例库用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/ibzcases/{ibzcase_id}/ibzlibcasesteps/fetchdefault")
	public ResponseEntity<List<IbzLibCaseStepDTO>> fetchIbzLibCaseStepDefaultByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id,IbzLibCaseStepSearchContext context) {
        context.setN_case_eq(ibzcase_id);
        Page<IbzLibCaseStep> domains = ibzlibcasestepService.searchDefault(context) ;
        List<IbzLibCaseStepDTO> list = ibzlibcasestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-searchDefault-all')")
	@ApiOperation(value = "根据用例库用例查询DEFAULT", tags = {"用例库用例步骤" } ,notes = "根据用例库用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/ibzcases/{ibzcase_id}/ibzlibcasesteps/searchdefault")
	public ResponseEntity<Page<IbzLibCaseStepDTO>> searchIbzLibCaseStepDefaultByIbzCase(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepSearchContext context) {
        context.setN_case_eq(ibzcase_id);
        Page<IbzLibCaseStep> domains = ibzlibcasestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzlibcasestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Create-all')")
    @ApiOperation(value = "根据用例库用例库用例建立用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例建立用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps")
    @Transactional
    public ResponseEntity<IbzLibCaseStepDTO> createByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        IbzLibCaseStep domain = ibzlibcasestepMapping.toDomain(ibzlibcasestepdto);
        domain.setIbizcase(ibzcase_id);
		ibzlibcasestepService.create(domain);
        IbzLibCaseStepDTO dto = ibzlibcasestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Create-all')")
    @ApiOperation(value = "根据用例库用例库用例批量建立用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例批量建立用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch")
    public ResponseEntity<Boolean> createBatchByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody List<IbzLibCaseStepDTO> ibzlibcasestepdtos) {
        List<IbzLibCaseStep> domainlist=ibzlibcasestepMapping.toDomain(ibzlibcasestepdtos);
        for(IbzLibCaseStep domain:domainlist){
            domain.setIbizcase(ibzcase_id);
        }
        ibzlibcasestepService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Update-all')")
    @ApiOperation(value = "根据用例库用例库用例更新用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例更新用例库用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasestep_id}")
    @Transactional
    public ResponseEntity<IbzLibCaseStepDTO> updateByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @PathVariable("ibzlibcasestep_id") BigInteger ibzlibcasestep_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        IbzLibCaseStep domain = ibzlibcasestepMapping.toDomain(ibzlibcasestepdto);
        domain.setIbizcase(ibzcase_id);
        domain.setId(ibzlibcasestep_id);
		ibzlibcasestepService.update(domain);
        IbzLibCaseStepDTO dto = ibzlibcasestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Update-all')")
    @ApiOperation(value = "根据用例库用例库用例批量更新用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例批量更新用例库用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch")
    public ResponseEntity<Boolean> updateBatchByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody List<IbzLibCaseStepDTO> ibzlibcasestepdtos) {
        List<IbzLibCaseStep> domainlist=ibzlibcasestepMapping.toDomain(ibzlibcasestepdtos);
        for(IbzLibCaseStep domain:domainlist){
            domain.setIbizcase(ibzcase_id);
        }
        ibzlibcasestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Remove-all')")
    @ApiOperation(value = "根据用例库用例库用例删除用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例删除用例库用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasestep_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @PathVariable("ibzlibcasestep_id") BigInteger ibzlibcasestep_id) {
		return ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepService.remove(ibzlibcasestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Remove-all')")
    @ApiOperation(value = "根据用例库用例库用例批量删除用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例批量删除用例库用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/batch")
    public ResponseEntity<Boolean> removeBatchByIbzLibIbzCase(@RequestBody List<BigInteger> ids) {
        ibzlibcasestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Get-all')")
    @ApiOperation(value = "根据用例库用例库用例获取用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例获取用例库用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/{ibzlibcasestep_id}")
    public ResponseEntity<IbzLibCaseStepDTO> getByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @PathVariable("ibzlibcasestep_id") BigInteger ibzlibcasestep_id) {
        IbzLibCaseStep domain = ibzlibcasestepService.get(ibzlibcasestep_id);
        IbzLibCaseStepDTO dto = ibzlibcasestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据用例库用例库用例获取用例库用例步骤草稿", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例获取用例库用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/getdraft")
    public ResponseEntity<IbzLibCaseStepDTO> getDraftByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id) {
        IbzLibCaseStep domain = new IbzLibCaseStep();
        domain.setIbizcase(ibzcase_id);
        return ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepMapping.toDto(ibzlibcasestepService.getDraft(domain)));
    }

    @ApiOperation(value = "根据用例库用例库用例检查用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例检查用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/checkkey")
    public ResponseEntity<Boolean> checkKeyByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepService.checkKey(ibzlibcasestepMapping.toDomain(ibzlibcasestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Save-all')")
    @ApiOperation(value = "根据用例库用例库用例保存用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例保存用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/save")
    public ResponseEntity<Boolean> saveByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepDTO ibzlibcasestepdto) {
        IbzLibCaseStep domain = ibzlibcasestepMapping.toDomain(ibzlibcasestepdto);
        domain.setIbizcase(ibzcase_id);
        return ResponseEntity.status(HttpStatus.OK).body(ibzlibcasestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-Save-all')")
    @ApiOperation(value = "根据用例库用例库用例批量保存用例库用例步骤", tags = {"用例库用例步骤" },  notes = "根据用例库用例库用例批量保存用例库用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody List<IbzLibCaseStepDTO> ibzlibcasestepdtos) {
        List<IbzLibCaseStep> domainlist=ibzlibcasestepMapping.toDomain(ibzlibcasestepdtos);
        for(IbzLibCaseStep domain:domainlist){
             domain.setIbizcase(ibzcase_id);
        }
        ibzlibcasestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-searchDefault-all')")
	@ApiOperation(value = "根据用例库用例库用例获取DEFAULT", tags = {"用例库用例步骤" } ,notes = "根据用例库用例库用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/fetchdefault")
	public ResponseEntity<List<IbzLibCaseStepDTO>> fetchIbzLibCaseStepDefaultByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id,IbzLibCaseStepSearchContext context) {
        context.setN_case_eq(ibzcase_id);
        Page<IbzLibCaseStep> domains = ibzlibcasestepService.searchDefault(context) ;
        List<IbzLibCaseStepDTO> list = ibzlibcasestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzLibCaseStep-searchDefault-all')")
	@ApiOperation(value = "根据用例库用例库用例查询DEFAULT", tags = {"用例库用例步骤" } ,notes = "根据用例库用例库用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}/ibzlibcasesteps/searchdefault")
	public ResponseEntity<Page<IbzLibCaseStepDTO>> searchIbzLibCaseStepDefaultByIbzLibIbzCase(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzLibCaseStepSearchContext context) {
        context.setN_case_eq(ibzcase_id);
        Page<IbzLibCaseStep> domains = ibzlibcasestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzlibcasestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

