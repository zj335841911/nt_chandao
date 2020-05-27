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
import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.service.ICaseService;
import cn.ibizlab.pms.core.zentao.filter.CaseSearchContext;

@Slf4j
@Api(tags = {"Case" })
@RestController("WebApi-case")
@RequestMapping("")
public class CaseResource {

    @Autowired
    public ICaseService caseService;

    @Autowired
    @Lazy
    public CaseMapping caseMapping;

    @ApiOperation(value = "GetDraft", tags = {"Case" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(new Case())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "Save", tags = {"Case" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/save")
    public ResponseEntity<Boolean> save(@RequestBody CaseDTO casedto) {
        return ResponseEntity.status(HttpStatus.OK).body(caseService.save(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "SaveBatch", tags = {"Case" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CaseDTO> casedtos) {
        caseService.saveBatch(caseMapping.toDomain(casedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "Create", tags = {"Case" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/cases")
    @Transactional
    public ResponseEntity<CaseDTO> create(@RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
		caseService.create(domain);
        CaseDTO dto = caseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "createBatch", tags = {"Case" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CaseDTO> casedtos) {
        caseService.createBatch(caseMapping.toDomain(casedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "CheckKey", tags = {"Case" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Case" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/{case_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("case_id") BigInteger case_id) {
         return ResponseEntity.status(HttpStatus.OK).body(caseService.remove(case_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "RemoveBatch", tags = {"Case" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        caseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Get-all')")
    @ApiOperation(value = "Get", tags = {"Case" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}")
    public ResponseEntity<CaseDTO> get(@PathVariable("case_id") BigInteger case_id) {
        Case domain = caseService.get(case_id);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "Update", tags = {"Case" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/{case_id}")
    @Transactional
    public ResponseEntity<CaseDTO> update(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
		Case domain  = caseMapping.toDomain(casedto);
        domain .setId(case_id);
		caseService.update(domain );
		CaseDTO dto = caseMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "UpdateBatch", tags = {"Case" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CaseDTO> casedtos) {
        caseService.updateBatch(caseMapping.toDomain(casedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Case" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/cases/fetchdefault")
	public ResponseEntity<List<CaseDTO>> fetchDefault(CaseSearchContext context) {
        Page<Case> domains = caseService.searchDefault(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Case" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchDefault(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @ApiOperation(value = "GetDraftByProduct", tags = {"Case" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Case domain = new Case();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"Case" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"Case" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
             domain.setProduct(product_id);
        }
        caseService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"Case" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases")
    @Transactional
    public ResponseEntity<CaseDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
		caseService.create(domain);
        CaseDTO dto = caseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "createBatchByProduct", tags = {"Case" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setProduct(product_id);
        }
        caseService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "CheckKeyByProduct", tags = {"Case" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"Case" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id) {
		return ResponseEntity.status(HttpStatus.OK).body(caseService.remove(case_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"Case" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        caseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"Case" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}")
    public ResponseEntity<CaseDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id) {
        Case domain = caseService.get(case_id);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"Case" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<CaseDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain.setId(case_id);
		caseService.update(domain);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"Case" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setProduct(product_id);
        }
        caseService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"Case" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/fetchdefault")
	public ResponseEntity<List<CaseDTO>> fetchCaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id,CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchDefault(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"Case" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchCaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

