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
import cn.ibizlab.pms.core.zentao.domain.TestTask;
import cn.ibizlab.pms.core.zentao.service.ITestTaskService;
import cn.ibizlab.pms.core.zentao.filter.TestTaskSearchContext;

@Slf4j
@Api(tags = {"TestTask" })
@RestController("WebApi-testtask")
@RequestMapping("")
public class TestTaskResource {

    @Autowired
    public ITestTaskService testtaskService;

    @Autowired
    @Lazy
    public TestTaskMapping testtaskMapping;

    @ApiOperation(value = "GetDraft", tags = {"TestTask" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/testtasks/getdraft")
    public ResponseEntity<TestTaskDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(testtaskMapping.toDto(testtaskService.getDraft(new TestTask())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Get-all')")
    @ApiOperation(value = "Get", tags = {"TestTask" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/testtasks/{testtask_id}")
    public ResponseEntity<TestTaskDTO> get(@PathVariable("testtask_id") BigInteger testtask_id) {
        TestTask domain = testtaskService.get(testtask_id);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "Save", tags = {"TestTask" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/save")
    public ResponseEntity<Boolean> save(@RequestBody TestTaskDTO testtaskdto) {
        return ResponseEntity.status(HttpStatus.OK).body(testtaskService.save(testtaskMapping.toDomain(testtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "SaveBatch", tags = {"TestTask" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TestTaskDTO> testtaskdtos) {
        testtaskService.saveBatch(testtaskMapping.toDomain(testtaskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "Create", tags = {"TestTask" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks")
    @Transactional
    public ResponseEntity<TestTaskDTO> create(@RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
		testtaskService.create(domain);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "createBatch", tags = {"TestTask" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TestTaskDTO> testtaskdtos) {
        testtaskService.createBatch(testtaskMapping.toDomain(testtaskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Update-all')")
    @ApiOperation(value = "Update", tags = {"TestTask" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<TestTaskDTO> update(@PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
		TestTask domain  = testtaskMapping.toDomain(testtaskdto);
        domain .setId(testtask_id);
		testtaskService.update(domain );
		TestTaskDTO dto = testtaskMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Update-all')")
    @ApiOperation(value = "UpdateBatch", tags = {"TestTask" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/testtasks/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TestTaskDTO> testtaskdtos) {
        testtaskService.updateBatch(testtaskMapping.toDomain(testtaskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"TestTask" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("testtask_id") BigInteger testtask_id) {
         return ResponseEntity.status(HttpStatus.OK).body(testtaskService.remove(testtask_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "RemoveBatch", tags = {"TestTask" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testtasks/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        testtaskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "CheckKey", tags = {"TestTask" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TestTaskDTO testtaskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testtaskService.checkKey(testtaskMapping.toDomain(testtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"TestTask" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/testtasks/fetchdefault")
	public ResponseEntity<List<TestTaskDTO>> fetchDefault(TestTaskSearchContext context) {
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
        List<TestTaskDTO> list = testtaskMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"TestTask" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/testtasks/searchdefault")
	public ResponseEntity<Page<TestTaskDTO>> searchDefault(@RequestBody TestTaskSearchContext context) {
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @ApiOperation(value = "GetDraftByProduct", tags = {"TestTask" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/testtasks/getdraft")
    public ResponseEntity<TestTaskDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        TestTask domain = new TestTask();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskMapping.toDto(testtaskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"TestTask" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/testtasks/{testtask_id}")
    public ResponseEntity<TestTaskDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id) {
        TestTask domain = testtaskService.get(testtask_id);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"TestTask" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"TestTask" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<TestTaskDTO> testtaskdtos) {
        List<TestTask> domainlist=testtaskMapping.toDomain(testtaskdtos);
        for(TestTask domain:domainlist){
             domain.setProduct(product_id);
        }
        testtaskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"TestTask" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks")
    @Transactional
    public ResponseEntity<TestTaskDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
		testtaskService.create(domain);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "createBatchByProduct", tags = {"TestTask" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<TestTaskDTO> testtaskdtos) {
        List<TestTask> domainlist=testtaskMapping.toDomain(testtaskdtos);
        for(TestTask domain:domainlist){
            domain.setProduct(product_id);
        }
        testtaskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"TestTask" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<TestTaskDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        domain.setId(testtask_id);
		testtaskService.update(domain);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Update-all')")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"TestTask" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/testtasks/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<TestTaskDTO> testtaskdtos) {
        List<TestTask> domainlist=testtaskMapping.toDomain(testtaskdtos);
        for(TestTask domain:domainlist){
            domain.setProduct(product_id);
        }
        testtaskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"TestTask" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testtaskService.remove(testtask_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"TestTask" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/testtasks/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        testtaskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "CheckKeyByProduct", tags = {"TestTask" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody TestTaskDTO testtaskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testtaskService.checkKey(testtaskMapping.toDomain(testtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"TestTask" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/testtasks/fetchdefault")
	public ResponseEntity<List<TestTaskDTO>> fetchTestTaskDefaultByProduct(@PathVariable("product_id") BigInteger product_id,TestTaskSearchContext context) {
        context.setN_product_eq(product_id);
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
        List<TestTaskDTO> list = testtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"TestTask" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testtasks/searchdefault")
	public ResponseEntity<Page<TestTaskDTO>> searchTestTaskDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody TestTaskSearchContext context) {
        context.setN_product_eq(product_id);
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

