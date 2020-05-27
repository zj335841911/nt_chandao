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
import cn.ibizlab.pms.core.zentao.domain.Branch;
import cn.ibizlab.pms.core.zentao.service.IBranchService;
import cn.ibizlab.pms.core.zentao.filter.BranchSearchContext;

@Slf4j
@Api(tags = {"Branch" })
@RestController("WebApi-branch")
@RequestMapping("")
public class BranchResource {

    @Autowired
    public IBranchService branchService;

    @Autowired
    @Lazy
    public BranchMapping branchMapping;

    @ApiOperation(value = "GetDraft", tags = {"Branch" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/branches/getdraft")
    public ResponseEntity<BranchDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(branchMapping.toDto(branchService.getDraft(new Branch())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Branch" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/branches/{branch_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("branch_id") BigInteger branch_id) {
         return ResponseEntity.status(HttpStatus.OK).body(branchService.remove(branch_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Remove-all')")
    @ApiOperation(value = "RemoveBatch", tags = {"Branch" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/branches/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        branchService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Create-all')")
    @ApiOperation(value = "Create", tags = {"Branch" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/branches")
    @Transactional
    public ResponseEntity<BranchDTO> create(@RequestBody BranchDTO branchdto) {
        Branch domain = branchMapping.toDomain(branchdto);
		branchService.create(domain);
        BranchDTO dto = branchMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Create-all')")
    @ApiOperation(value = "createBatch", tags = {"Branch" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/branches/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<BranchDTO> branchdtos) {
        branchService.createBatch(branchMapping.toDomain(branchdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Update-all')")
    @ApiOperation(value = "Update", tags = {"Branch" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/branches/{branch_id}")
    @Transactional
    public ResponseEntity<BranchDTO> update(@PathVariable("branch_id") BigInteger branch_id, @RequestBody BranchDTO branchdto) {
		Branch domain  = branchMapping.toDomain(branchdto);
        domain .setId(branch_id);
		branchService.update(domain );
		BranchDTO dto = branchMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Update-all')")
    @ApiOperation(value = "UpdateBatch", tags = {"Branch" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/branches/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<BranchDTO> branchdtos) {
        branchService.updateBatch(branchMapping.toDomain(branchdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "CheckKey", tags = {"Branch" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/branches/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody BranchDTO branchdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(branchService.checkKey(branchMapping.toDomain(branchdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Save-all')")
    @ApiOperation(value = "Save", tags = {"Branch" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/branches/save")
    public ResponseEntity<Boolean> save(@RequestBody BranchDTO branchdto) {
        return ResponseEntity.status(HttpStatus.OK).body(branchService.save(branchMapping.toDomain(branchdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Save-all')")
    @ApiOperation(value = "SaveBatch", tags = {"Branch" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/branches/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<BranchDTO> branchdtos) {
        branchService.saveBatch(branchMapping.toDomain(branchdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Get-all')")
    @ApiOperation(value = "Get", tags = {"Branch" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/branches/{branch_id}")
    public ResponseEntity<BranchDTO> get(@PathVariable("branch_id") BigInteger branch_id) {
        Branch domain = branchService.get(branch_id);
        BranchDTO dto = branchMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Branch" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/branches/fetchdefault")
	public ResponseEntity<List<BranchDTO>> fetchDefault(BranchSearchContext context) {
        Page<Branch> domains = branchService.searchDefault(context) ;
        List<BranchDTO> list = branchMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Branch" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/branches/searchdefault")
	public ResponseEntity<Page<BranchDTO>> searchDefault(@RequestBody BranchSearchContext context) {
        Page<Branch> domains = branchService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(branchMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @ApiOperation(value = "GetDraftByProduct", tags = {"Branch" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/branches/getdraft")
    public ResponseEntity<BranchDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Branch domain = new Branch();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(branchMapping.toDto(branchService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"Branch" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/branches/{branch_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("branch_id") BigInteger branch_id) {
		return ResponseEntity.status(HttpStatus.OK).body(branchService.remove(branch_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Remove-all')")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"Branch" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/branches/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        branchService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"Branch" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/branches")
    @Transactional
    public ResponseEntity<BranchDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BranchDTO branchdto) {
        Branch domain = branchMapping.toDomain(branchdto);
        domain.setProduct(product_id);
		branchService.create(domain);
        BranchDTO dto = branchMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Create-all')")
    @ApiOperation(value = "createBatchByProduct", tags = {"Branch" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/branches/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BranchDTO> branchdtos) {
        List<Branch> domainlist=branchMapping.toDomain(branchdtos);
        for(Branch domain:domainlist){
            domain.setProduct(product_id);
        }
        branchService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"Branch" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/branches/{branch_id}")
    @Transactional
    public ResponseEntity<BranchDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("branch_id") BigInteger branch_id, @RequestBody BranchDTO branchdto) {
        Branch domain = branchMapping.toDomain(branchdto);
        domain.setProduct(product_id);
        domain.setId(branch_id);
		branchService.update(domain);
        BranchDTO dto = branchMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Update-all')")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"Branch" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/branches/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BranchDTO> branchdtos) {
        List<Branch> domainlist=branchMapping.toDomain(branchdtos);
        for(Branch domain:domainlist){
            domain.setProduct(product_id);
        }
        branchService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "CheckKeyByProduct", tags = {"Branch" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/branches/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BranchDTO branchdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(branchService.checkKey(branchMapping.toDomain(branchdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"Branch" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/branches/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BranchDTO branchdto) {
        Branch domain = branchMapping.toDomain(branchdto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(branchService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Save-all')")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"Branch" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/branches/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BranchDTO> branchdtos) {
        List<Branch> domainlist=branchMapping.toDomain(branchdtos);
        for(Branch domain:domainlist){
             domain.setProduct(product_id);
        }
        branchService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"Branch" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/branches/{branch_id}")
    public ResponseEntity<BranchDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("branch_id") BigInteger branch_id) {
        Branch domain = branchService.get(branch_id);
        BranchDTO dto = branchMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"Branch" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/branches/fetchdefault")
	public ResponseEntity<List<BranchDTO>> fetchBranchDefaultByProduct(@PathVariable("product_id") BigInteger product_id,BranchSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Branch> domains = branchService.searchDefault(context) ;
        List<BranchDTO> list = branchMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Branch-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"Branch" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/branches/searchdefault")
	public ResponseEntity<Page<BranchDTO>> searchBranchDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BranchSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Branch> domains = branchService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(branchMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

