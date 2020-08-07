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
import cn.ibizlab.pms.core.zentao.domain.TestResult;
import cn.ibizlab.pms.core.zentao.service.ITestResultService;
import cn.ibizlab.pms.core.zentao.filter.TestResultSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"测试结果" })
@RestController("WebApi-testresult")
@RequestMapping("")
public class TestResultResource {

    @Autowired
    public ITestResultService testresultService;

    @Autowired
    @Lazy
    public TestResultMapping testresultMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "新建测试结果", tags = {"测试结果" },  notes = "新建测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/testresults")
    @Transactional
    public ResponseEntity<TestResultDTO> create(@RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
		testresultService.create(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "批量新建测试结果", tags = {"测试结果" },  notes = "批量新建测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/testresults/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TestResultDTO> testresultdtos) {
        testresultService.createBatch(testresultMapping.toDomain(testresultdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "更新测试结果", tags = {"测试结果" },  notes = "更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<TestResultDTO> update(@PathVariable("testresult_id") BigInteger testresult_id, @RequestBody TestResultDTO testresultdto) {
		TestResult domain  = testresultMapping.toDomain(testresultdto);
        domain .setId(testresult_id);
		testresultService.update(domain );
		TestResultDTO dto = testresultMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "批量更新测试结果", tags = {"测试结果" },  notes = "批量更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/testresults/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TestResultDTO> testresultdtos) {
        testresultService.updateBatch(testresultMapping.toDomain(testresultdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "删除测试结果", tags = {"测试结果" },  notes = "删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("testresult_id") BigInteger testresult_id) {
         return ResponseEntity.status(HttpStatus.OK).body(testresultService.remove(testresult_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "批量删除测试结果", tags = {"测试结果" },  notes = "批量删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testresults/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        testresultService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Get-all')")
    @ApiOperation(value = "获取测试结果", tags = {"测试结果" },  notes = "获取测试结果")
	@RequestMapping(method = RequestMethod.GET, value = "/testresults/{testresult_id}")
    public ResponseEntity<TestResultDTO> get(@PathVariable("testresult_id") BigInteger testresult_id) {
        TestResult domain = testresultService.get(testresult_id);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取测试结果草稿", tags = {"测试结果" },  notes = "获取测试结果草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/testresults/getdraft")
    public ResponseEntity<TestResultDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(testresultMapping.toDto(testresultService.getDraft(new TestResult())));
    }

    @ApiOperation(value = "检查测试结果", tags = {"测试结果" },  notes = "检查测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/testresults/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TestResultDTO testresultdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testresultService.checkKey(testresultMapping.toDomain(testresultdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "保存测试结果", tags = {"测试结果" },  notes = "保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/testresults/save")
    public ResponseEntity<Boolean> save(@RequestBody TestResultDTO testresultdto) {
        return ResponseEntity.status(HttpStatus.OK).body(testresultService.save(testresultMapping.toDomain(testresultdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "批量保存测试结果", tags = {"测试结果" },  notes = "批量保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/testresults/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TestResultDTO> testresultdtos) {
        testresultService.saveBatch(testresultMapping.toDomain(testresultdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"测试结果" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/testresults/fetchdefault")
	public ResponseEntity<List<TestResultDTO>> fetchDefault(TestResultSearchContext context) {
        Page<TestResult> domains = testresultService.searchDefault(context) ;
        List<TestResultDTO> list = testresultMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试结果" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/testresults/searchdefault")
	public ResponseEntity<Page<TestResultDTO>> searchDefault(@RequestBody TestResultSearchContext context) {
        Page<TestResult> domains = testresultService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testresultMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据测试用例建立测试结果", tags = {"测试结果" },  notes = "根据测试用例建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/testresults")
    @Transactional
    public ResponseEntity<TestResultDTO> createByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
		testresultService.create(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据测试用例批量建立测试结果", tags = {"测试结果" },  notes = "根据测试用例批量建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> createBatchByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据测试用例更新测试结果", tags = {"测试结果" },  notes = "根据测试用例更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<TestResultDTO> updateByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        domain.setId(testresult_id);
		testresultService.update(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据测试用例批量更新测试结果", tags = {"测试结果" },  notes = "根据测试用例批量更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> updateBatchByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据测试用例删除测试结果", tags = {"测试结果" },  notes = "根据测试用例删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testresultService.remove(testresult_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据测试用例批量删除测试结果", tags = {"测试结果" },  notes = "根据测试用例批量删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> removeBatchByCase(@RequestBody List<BigInteger> ids) {
        testresultService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Get-all')")
    @ApiOperation(value = "根据测试用例获取测试结果", tags = {"测试结果" },  notes = "根据测试用例获取测试结果")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}/testresults/{testresult_id}")
    public ResponseEntity<TestResultDTO> getByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
        TestResult domain = testresultService.get(testresult_id);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据测试用例获取测试结果草稿", tags = {"测试结果" },  notes = "根据测试用例获取测试结果草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}/testresults/getdraft")
    public ResponseEntity<TestResultDTO> getDraftByCase(@PathVariable("case_id") BigInteger case_id) {
        TestResult domain = new TestResult();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultMapping.toDto(testresultService.getDraft(domain)));
    }

    @ApiOperation(value = "根据测试用例检查测试结果", tags = {"测试结果" },  notes = "根据测试用例检查测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/testresults/checkkey")
    public ResponseEntity<Boolean> checkKeyByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testresultService.checkKey(testresultMapping.toDomain(testresultdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据测试用例保存测试结果", tags = {"测试结果" },  notes = "根据测试用例保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/testresults/save")
    public ResponseEntity<Boolean> saveByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据测试用例批量保存测试结果", tags = {"测试结果" },  notes = "根据测试用例批量保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/testresults/savebatch")
    public ResponseEntity<Boolean> saveBatchByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
             domain.setIbizcase(case_id);
        }
        testresultService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据测试用例获取DEFAULT", tags = {"测试结果" } ,notes = "根据测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/cases/{case_id}/testresults/fetchdefault")
	public ResponseEntity<List<TestResultDTO>> fetchTestResultDefaultByCase(@PathVariable("case_id") BigInteger case_id,TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
        List<TestResultDTO> list = testresultMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据测试用例查询DEFAULT", tags = {"测试结果" } ,notes = "根据测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/cases/{case_id}/testresults/searchdefault")
	public ResponseEntity<Page<TestResultDTO>> searchTestResultDefaultByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testresultMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据产品测试用例建立测试结果", tags = {"测试结果" },  notes = "根据产品测试用例建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/testresults")
    @Transactional
    public ResponseEntity<TestResultDTO> createByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
		testresultService.create(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据产品测试用例批量建立测试结果", tags = {"测试结果" },  notes = "根据产品测试用例批量建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> createBatchByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据产品测试用例更新测试结果", tags = {"测试结果" },  notes = "根据产品测试用例更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<TestResultDTO> updateByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        domain.setId(testresult_id);
		testresultService.update(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据产品测试用例批量更新测试结果", tags = {"测试结果" },  notes = "根据产品测试用例批量更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> updateBatchByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据产品测试用例删除测试结果", tags = {"测试结果" },  notes = "根据产品测试用例删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testresultService.remove(testresult_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据产品测试用例批量删除测试结果", tags = {"测试结果" },  notes = "根据产品测试用例批量删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> removeBatchByProductCase(@RequestBody List<BigInteger> ids) {
        testresultService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Get-all')")
    @ApiOperation(value = "根据产品测试用例获取测试结果", tags = {"测试结果" },  notes = "根据产品测试用例获取测试结果")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}/testresults/{testresult_id}")
    public ResponseEntity<TestResultDTO> getByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
        TestResult domain = testresultService.get(testresult_id);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品测试用例获取测试结果草稿", tags = {"测试结果" },  notes = "根据产品测试用例获取测试结果草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}/testresults/getdraft")
    public ResponseEntity<TestResultDTO> getDraftByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id) {
        TestResult domain = new TestResult();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultMapping.toDto(testresultService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品测试用例检查测试结果", tags = {"测试结果" },  notes = "根据产品测试用例检查测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/testresults/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testresultService.checkKey(testresultMapping.toDomain(testresultdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据产品测试用例保存测试结果", tags = {"测试结果" },  notes = "根据产品测试用例保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/testresults/save")
    public ResponseEntity<Boolean> saveByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据产品测试用例批量保存测试结果", tags = {"测试结果" },  notes = "根据产品测试用例批量保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/testresults/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
             domain.setIbizcase(case_id);
        }
        testresultService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据产品测试用例获取DEFAULT", tags = {"测试结果" } ,notes = "根据产品测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/{case_id}/testresults/fetchdefault")
	public ResponseEntity<List<TestResultDTO>> fetchTestResultDefaultByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id,TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
        List<TestResultDTO> list = testresultMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据产品测试用例查询DEFAULT", tags = {"测试结果" } ,notes = "根据产品测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/{case_id}/testresults/searchdefault")
	public ResponseEntity<Page<TestResultDTO>> searchTestResultDefaultByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testresultMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据需求测试用例建立测试结果", tags = {"测试结果" },  notes = "根据需求测试用例建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/testresults")
    @Transactional
    public ResponseEntity<TestResultDTO> createByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
		testresultService.create(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据需求测试用例批量建立测试结果", tags = {"测试结果" },  notes = "根据需求测试用例批量建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> createBatchByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据需求测试用例更新测试结果", tags = {"测试结果" },  notes = "根据需求测试用例更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<TestResultDTO> updateByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        domain.setId(testresult_id);
		testresultService.update(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据需求测试用例批量更新测试结果", tags = {"测试结果" },  notes = "根据需求测试用例批量更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> updateBatchByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据需求测试用例删除测试结果", tags = {"测试结果" },  notes = "根据需求测试用例删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testresultService.remove(testresult_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据需求测试用例批量删除测试结果", tags = {"测试结果" },  notes = "根据需求测试用例批量删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> removeBatchByStoryCase(@RequestBody List<BigInteger> ids) {
        testresultService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Get-all')")
    @ApiOperation(value = "根据需求测试用例获取测试结果", tags = {"测试结果" },  notes = "根据需求测试用例获取测试结果")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}")
    public ResponseEntity<TestResultDTO> getByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
        TestResult domain = testresultService.get(testresult_id);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据需求测试用例获取测试结果草稿", tags = {"测试结果" },  notes = "根据需求测试用例获取测试结果草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/cases/{case_id}/testresults/getdraft")
    public ResponseEntity<TestResultDTO> getDraftByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
        TestResult domain = new TestResult();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultMapping.toDto(testresultService.getDraft(domain)));
    }

    @ApiOperation(value = "根据需求测试用例检查测试结果", tags = {"测试结果" },  notes = "根据需求测试用例检查测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/testresults/checkkey")
    public ResponseEntity<Boolean> checkKeyByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testresultService.checkKey(testresultMapping.toDomain(testresultdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据需求测试用例保存测试结果", tags = {"测试结果" },  notes = "根据需求测试用例保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/testresults/save")
    public ResponseEntity<Boolean> saveByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据需求测试用例批量保存测试结果", tags = {"测试结果" },  notes = "根据需求测试用例批量保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/testresults/savebatch")
    public ResponseEntity<Boolean> saveBatchByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
             domain.setIbizcase(case_id);
        }
        testresultService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据需求测试用例获取DEFAULT", tags = {"测试结果" } ,notes = "根据需求测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/{case_id}/testresults/fetchdefault")
	public ResponseEntity<List<TestResultDTO>> fetchTestResultDefaultByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id,TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
        List<TestResultDTO> list = testresultMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据需求测试用例查询DEFAULT", tags = {"测试结果" } ,notes = "根据需求测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/{case_id}/testresults/searchdefault")
	public ResponseEntity<Page<TestResultDTO>> searchTestResultDefaultByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testresultMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据产品需求测试用例建立测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults")
    @Transactional
    public ResponseEntity<TestResultDTO> createByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
		testresultService.create(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Create-all')")
    @ApiOperation(value = "根据产品需求测试用例批量建立测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例批量建立测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> createBatchByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据产品需求测试用例更新测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<TestResultDTO> updateByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        domain.setId(testresult_id);
		testresultService.update(domain);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Update-all')")
    @ApiOperation(value = "根据产品需求测试用例批量更新测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例批量更新测试结果")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> updateBatchByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
            domain.setIbizcase(case_id);
        }
        testresultService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据产品需求测试用例删除测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testresultService.remove(testresult_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Remove-all')")
    @ApiOperation(value = "根据产品需求测试用例批量删除测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例批量删除测试结果")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/batch")
    public ResponseEntity<Boolean> removeBatchByProductStoryCase(@RequestBody List<BigInteger> ids) {
        testresultService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Get-all')")
    @ApiOperation(value = "根据产品需求测试用例获取测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例获取测试结果")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/{testresult_id}")
    public ResponseEntity<TestResultDTO> getByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("testresult_id") BigInteger testresult_id) {
        TestResult domain = testresultService.get(testresult_id);
        TestResultDTO dto = testresultMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品需求测试用例获取测试结果草稿", tags = {"测试结果" },  notes = "根据产品需求测试用例获取测试结果草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/getdraft")
    public ResponseEntity<TestResultDTO> getDraftByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
        TestResult domain = new TestResult();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultMapping.toDto(testresultService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品需求测试用例检查测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例检查测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testresultService.checkKey(testresultMapping.toDomain(testresultdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据产品需求测试用例保存测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/save")
    public ResponseEntity<Boolean> saveByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultDTO testresultdto) {
        TestResult domain = testresultMapping.toDomain(testresultdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(testresultService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-Save-all')")
    @ApiOperation(value = "根据产品需求测试用例批量保存测试结果", tags = {"测试结果" },  notes = "根据产品需求测试用例批量保存测试结果")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<TestResultDTO> testresultdtos) {
        List<TestResult> domainlist=testresultMapping.toDomain(testresultdtos);
        for(TestResult domain:domainlist){
             domain.setIbizcase(case_id);
        }
        testresultService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据产品需求测试用例获取DEFAULT", tags = {"测试结果" } ,notes = "根据产品需求测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/fetchdefault")
	public ResponseEntity<List<TestResultDTO>> fetchTestResultDefaultByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id,TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
        List<TestResultDTO> list = testresultMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestResult-searchDefault-all')")
	@ApiOperation(value = "根据产品需求测试用例查询DEFAULT", tags = {"测试结果" } ,notes = "根据产品需求测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/{case_id}/testresults/searchdefault")
	public ResponseEntity<Page<TestResultDTO>> searchTestResultDefaultByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody TestResultSearchContext context) {
        context.setN_case_eq(case_id);
        Page<TestResult> domains = testresultService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testresultMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

