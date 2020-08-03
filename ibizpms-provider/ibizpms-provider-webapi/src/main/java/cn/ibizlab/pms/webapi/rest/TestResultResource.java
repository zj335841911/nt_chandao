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
}

