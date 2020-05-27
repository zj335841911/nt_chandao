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
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.service.IBugService;
import cn.ibizlab.pms.core.zentao.filter.BugSearchContext;

@Slf4j
@Api(tags = {"Bug" })
@RestController("WebApi-bug")
@RequestMapping("")
public class BugResource {

    @Autowired
    public IBugService bugService;

    @Autowired
    @Lazy
    public BugMapping bugMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "Get", tags = {"Bug" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/bugs/{bug_id}")
    public ResponseEntity<BugDTO> get(@PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "GetDraft", tags = {"Bug" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(new Bug())));
    }

    @ApiOperation(value = "CheckKey", tags = {"Bug" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "Save", tags = {"Bug" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/save")
    public ResponseEntity<Boolean> save(@RequestBody BugDTO bugdto) {
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "SaveBatch", tags = {"Bug" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.saveBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "Create", tags = {"Bug" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs")
    @Transactional
    public ResponseEntity<BugDTO> create(@RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "createBatch", tags = {"Bug" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.createBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Bug" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("bug_id") BigInteger bug_id) {
         return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "RemoveBatch", tags = {"Bug" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "Update", tags = {"Bug" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> update(@PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
		Bug domain  = bugMapping.toDomain(bugdto);
        domain .setId(bug_id);
		bugService.update(domain );
		BugDTO dto = bugMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "UpdateBatch", tags = {"Bug" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.updateBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Bug" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchDefault(BugSearchContext context) {
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Bug" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchDefault(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"Bug" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "GetDraftByProduct", tags = {"Bug" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Bug domain = new Bug();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @ApiOperation(value = "CheckKeyByProduct", tags = {"Bug" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"Bug" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"Bug" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setProduct(product_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"Bug" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs")
    @Transactional
    public ResponseEntity<BugDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "createBatchByProduct", tags = {"Bug" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProduct(product_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"Bug" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("bug_id") BigInteger bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"Bug" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"Bug" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"Bug" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProduct(product_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"Bug" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProduct(@PathVariable("product_id") BigInteger product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"Bug" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "GetByProductPlan", tags = {"Bug" },  notes = "GetByProductPlan")
	@RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "GetDraftByProductPlan", tags = {"Bug" },  notes = "GetDraftByProductPlan")
    @RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id) {
        Bug domain = new Bug();
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @ApiOperation(value = "CheckKeyByProductPlan", tags = {"Bug" },  notes = "CheckKeyByProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "SaveByProductPlan", tags = {"Bug" },  notes = "SaveByProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "SaveBatchByProductPlan", tags = {"Bug" },  notes = "SaveBatchByProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setPlan(productplan_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "CreateByProductPlan", tags = {"Bug" },  notes = "CreateByProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs")
    @Transactional
    public ResponseEntity<BugDTO> createByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "createBatchByProductPlan", tags = {"Bug" },  notes = "createBatchByProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "RemoveByProductPlan", tags = {"Bug" },  notes = "RemoveByProductPlan")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "RemoveBatchByProductPlan", tags = {"Bug" },  notes = "RemoveBatchByProductPlan")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProductPlan(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "UpdateByProductPlan", tags = {"Bug" },  notes = "UpdateByProductPlan")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> updateByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "UpdateBatchByProductPlan", tags = {"Bug" },  notes = "UpdateBatchByProductPlan")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProductPlan", tags = {"Bug" } ,notes = "fetchDEFAULTByProductPlan")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProductPlan", tags = {"Bug" } ,notes = "searchDEFAULTByProductPlan")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "GetByProductProductPlan", tags = {"Bug" },  notes = "GetByProductProductPlan")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "GetDraftByProductProductPlan", tags = {"Bug" },  notes = "GetDraftByProductProductPlan")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id) {
        Bug domain = new Bug();
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @ApiOperation(value = "CheckKeyByProductProductPlan", tags = {"Bug" },  notes = "CheckKeyByProductProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "SaveByProductProductPlan", tags = {"Bug" },  notes = "SaveByProductProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "SaveBatchByProductProductPlan", tags = {"Bug" },  notes = "SaveBatchByProductProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setPlan(productplan_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "CreateByProductProductPlan", tags = {"Bug" },  notes = "CreateByProductProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs")
    @Transactional
    public ResponseEntity<BugDTO> createByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "createBatchByProductProductPlan", tags = {"Bug" },  notes = "createBatchByProductProductPlan")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "RemoveByProductProductPlan", tags = {"Bug" },  notes = "RemoveByProductProductPlan")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "RemoveBatchByProductProductPlan", tags = {"Bug" },  notes = "RemoveBatchByProductProductPlan")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProductProductPlan(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "UpdateByProductProductPlan", tags = {"Bug" },  notes = "UpdateByProductProductPlan")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> updateByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "UpdateBatchByProductProductPlan", tags = {"Bug" },  notes = "UpdateBatchByProductProductPlan")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProductProductPlan", tags = {"Bug" } ,notes = "fetchDEFAULTByProductProductPlan")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProductProductPlan", tags = {"Bug" } ,notes = "searchDEFAULTByProductProductPlan")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

