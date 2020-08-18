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
import cn.ibizlab.pms.core.ibiz.domain.IbzCase;
import cn.ibizlab.pms.core.ibiz.service.IIbzCaseService;
import cn.ibizlab.pms.core.ibiz.filter.IbzCaseSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibCaseStepsSearchContext;
import cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseSteps;
import cn.ibizlab.pms.core.ibiz.service.IIbzLibCaseStepsService;

@Slf4j
@Api(tags = {"用例库用例" })
@RestController("WebApi-ibzcase")
@RequestMapping("")
public class IbzCaseResource {

    @Autowired
    public IIbzCaseService ibzcaseService;

    @Autowired
    @Lazy
    public IbzCaseMapping ibzcaseMapping;

    @Autowired
    private IIbzLibCaseStepsService ibzlibcasestepsService;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Create-all')")
    @ApiOperation(value = "新建用例库用例", tags = {"用例库用例" },  notes = "新建用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases")
    @Transactional
    public ResponseEntity<IbzCaseDTO> create(@RequestBody IbzCaseDTO ibzcasedto) {
        IbzCase domain = ibzcaseMapping.toDomain(ibzcasedto);
		ibzcaseService.create(domain);
        IbzCaseDTO dto = ibzcaseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Create-all')")
    @ApiOperation(value = "批量新建用例库用例", tags = {"用例库用例" },  notes = "批量新建用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IbzCaseDTO> ibzcasedtos) {
        ibzcaseService.createBatch(ibzcaseMapping.toDomain(ibzcasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Update-all')")
    @ApiOperation(value = "更新用例库用例", tags = {"用例库用例" },  notes = "更新用例库用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzcases/{ibzcase_id}")
    @Transactional
    public ResponseEntity<IbzCaseDTO> update(@PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzCaseDTO ibzcasedto) {
		IbzCase domain  = ibzcaseMapping.toDomain(ibzcasedto);
        domain .setId(ibzcase_id);
		ibzcaseService.update(domain );
		IbzCaseDTO dto = ibzcaseMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Update-all')")
    @ApiOperation(value = "批量更新用例库用例", tags = {"用例库用例" },  notes = "批量更新用例库用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzcases/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IbzCaseDTO> ibzcasedtos) {
        ibzcaseService.updateBatch(ibzcaseMapping.toDomain(ibzcasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Remove-all')")
    @ApiOperation(value = "删除用例库用例", tags = {"用例库用例" },  notes = "删除用例库用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzcases/{ibzcase_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("ibzcase_id") BigInteger ibzcase_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzcaseService.remove(ibzcase_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Remove-all')")
    @ApiOperation(value = "批量删除用例库用例", tags = {"用例库用例" },  notes = "批量删除用例库用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzcases/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        ibzcaseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Get-all')")
    @ApiOperation(value = "获取用例库用例", tags = {"用例库用例" },  notes = "获取用例库用例")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzcases/{ibzcase_id}")
    public ResponseEntity<IbzCaseDTO> get(@PathVariable("ibzcase_id") BigInteger ibzcase_id) {
        IbzCase domain = ibzcaseService.get(ibzcase_id);
        IbzCaseDTO dto = ibzcaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取用例库用例草稿", tags = {"用例库用例" },  notes = "获取用例库用例草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzcases/getdraft")
    public ResponseEntity<IbzCaseDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibzcaseMapping.toDto(ibzcaseService.getDraft(new IbzCase())));
    }

    @ApiOperation(value = "检查用例库用例", tags = {"用例库用例" },  notes = "检查用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IbzCaseDTO ibzcasedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzcaseService.checkKey(ibzcaseMapping.toDomain(ibzcasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Save-all')")
    @ApiOperation(value = "保存用例库用例", tags = {"用例库用例" },  notes = "保存用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/save")
    public ResponseEntity<Boolean> save(@RequestBody IbzCaseDTO ibzcasedto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibzcaseService.save(ibzcaseMapping.toDomain(ibzcasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Save-all')")
    @ApiOperation(value = "批量保存用例库用例", tags = {"用例库用例" },  notes = "批量保存用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzcases/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IbzCaseDTO> ibzcasedtos) {
        ibzcaseService.saveBatch(ibzcaseMapping.toDomain(ibzcasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"用例库用例" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/ibzcases/fetchdefault")
	public ResponseEntity<List<IbzCaseDTO>> fetchDefault(IbzCaseSearchContext context) {
        Page<IbzCase> domains = ibzcaseService.searchDefault(context) ;
        List<IbzCaseDTO> list = ibzcaseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"用例库用例" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/ibzcases/searchdefault")
	public ResponseEntity<Page<IbzCaseDTO>> searchDefault(@RequestBody IbzCaseSearchContext context) {
        Page<IbzCase> domains = ibzcaseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzcaseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Create-all')")
    @ApiOperation(value = "根据用例库建立用例库用例", tags = {"用例库用例" },  notes = "根据用例库建立用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases")
    @Transactional
    public ResponseEntity<IbzCaseDTO> createByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @RequestBody IbzCaseDTO ibzcasedto) {
        IbzCase domain = ibzcaseMapping.toDomain(ibzcasedto);
        domain.setLib(ibzlib_id);
		ibzcaseService.create(domain);
        IbzCaseDTO dto = ibzcaseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Create-all')")
    @ApiOperation(value = "根据用例库批量建立用例库用例", tags = {"用例库用例" },  notes = "根据用例库批量建立用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/batch")
    public ResponseEntity<Boolean> createBatchByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @RequestBody List<IbzCaseDTO> ibzcasedtos) {
        List<IbzCase> domainlist=ibzcaseMapping.toDomain(ibzcasedtos);
        for(IbzCase domain:domainlist){
            domain.setLib(ibzlib_id);
        }
        ibzcaseService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Update-all')")
    @ApiOperation(value = "根据用例库更新用例库用例", tags = {"用例库用例" },  notes = "根据用例库更新用例库用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}")
    @Transactional
    public ResponseEntity<IbzCaseDTO> updateByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id, @RequestBody IbzCaseDTO ibzcasedto) {
        IbzCase domain = ibzcaseMapping.toDomain(ibzcasedto);
        domain.setLib(ibzlib_id);
        domain.setId(ibzcase_id);
		ibzcaseService.update(domain);
        IbzCaseDTO dto = ibzcaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Update-all')")
    @ApiOperation(value = "根据用例库批量更新用例库用例", tags = {"用例库用例" },  notes = "根据用例库批量更新用例库用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzlibs/{ibzlib_id}/ibzcases/batch")
    public ResponseEntity<Boolean> updateBatchByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @RequestBody List<IbzCaseDTO> ibzcasedtos) {
        List<IbzCase> domainlist=ibzcaseMapping.toDomain(ibzcasedtos);
        for(IbzCase domain:domainlist){
            domain.setLib(ibzlib_id);
        }
        ibzcaseService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Remove-all')")
    @ApiOperation(value = "根据用例库删除用例库用例", tags = {"用例库用例" },  notes = "根据用例库删除用例库用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id) {
		return ResponseEntity.status(HttpStatus.OK).body(ibzcaseService.remove(ibzcase_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Remove-all')")
    @ApiOperation(value = "根据用例库批量删除用例库用例", tags = {"用例库用例" },  notes = "根据用例库批量删除用例库用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzlibs/{ibzlib_id}/ibzcases/batch")
    public ResponseEntity<Boolean> removeBatchByIbzLib(@RequestBody List<BigInteger> ids) {
        ibzcaseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Get-all')")
    @ApiOperation(value = "根据用例库获取用例库用例", tags = {"用例库用例" },  notes = "根据用例库获取用例库用例")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzlibs/{ibzlib_id}/ibzcases/{ibzcase_id}")
    public ResponseEntity<IbzCaseDTO> getByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @PathVariable("ibzcase_id") BigInteger ibzcase_id) {
        IbzCase domain = ibzcaseService.get(ibzcase_id);
        IbzCaseDTO dto = ibzcaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据用例库获取用例库用例草稿", tags = {"用例库用例" },  notes = "根据用例库获取用例库用例草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/ibzlibs/{ibzlib_id}/ibzcases/getdraft")
    public ResponseEntity<IbzCaseDTO> getDraftByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id) {
        IbzCase domain = new IbzCase();
        domain.setLib(ibzlib_id);
        return ResponseEntity.status(HttpStatus.OK).body(ibzcaseMapping.toDto(ibzcaseService.getDraft(domain)));
    }

    @ApiOperation(value = "根据用例库检查用例库用例", tags = {"用例库用例" },  notes = "根据用例库检查用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/checkkey")
    public ResponseEntity<Boolean> checkKeyByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @RequestBody IbzCaseDTO ibzcasedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzcaseService.checkKey(ibzcaseMapping.toDomain(ibzcasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Save-all')")
    @ApiOperation(value = "根据用例库保存用例库用例", tags = {"用例库用例" },  notes = "根据用例库保存用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/save")
    public ResponseEntity<Boolean> saveByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @RequestBody IbzCaseDTO ibzcasedto) {
        IbzCase domain = ibzcaseMapping.toDomain(ibzcasedto);
        domain.setLib(ibzlib_id);
        return ResponseEntity.status(HttpStatus.OK).body(ibzcaseService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-Save-all')")
    @ApiOperation(value = "根据用例库批量保存用例库用例", tags = {"用例库用例" },  notes = "根据用例库批量保存用例库用例")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlibs/{ibzlib_id}/ibzcases/savebatch")
    public ResponseEntity<Boolean> saveBatchByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @RequestBody List<IbzCaseDTO> ibzcasedtos) {
        List<IbzCase> domainlist=ibzcaseMapping.toDomain(ibzcasedtos);
        for(IbzCase domain:domainlist){
             domain.setLib(ibzlib_id);
        }
        ibzcaseService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-searchDefault-all')")
	@ApiOperation(value = "根据用例库获取DEFAULT", tags = {"用例库用例" } ,notes = "根据用例库获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/ibzlibs/{ibzlib_id}/ibzcases/fetchdefault")
	public ResponseEntity<List<IbzCaseDTO>> fetchIbzCaseDefaultByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id,IbzCaseSearchContext context) {
        context.setN_lib_eq(ibzlib_id);
        Page<IbzCase> domains = ibzcaseService.searchDefault(context) ;
        List<IbzCaseDTO> list = ibzcaseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzCase-searchDefault-all')")
	@ApiOperation(value = "根据用例库查询DEFAULT", tags = {"用例库用例" } ,notes = "根据用例库查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/ibzlibs/{ibzlib_id}/ibzcases/searchdefault")
	public ResponseEntity<Page<IbzCaseDTO>> searchIbzCaseDefaultByIbzLib(@PathVariable("ibzlib_id") BigInteger ibzlib_id, @RequestBody IbzCaseSearchContext context) {
        context.setN_lib_eq(ibzlib_id);
        Page<IbzCase> domains = ibzcaseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzcaseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

