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
import cn.ibizlab.pms.core.zentao.domain.TestSuite;
import cn.ibizlab.pms.core.zentao.service.ITestSuiteService;
import cn.ibizlab.pms.core.zentao.filter.TestSuiteSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"测试套件" })
@RestController("WebApi-testsuite")
@RequestMapping("")
public class TestSuiteResource {

    @Autowired
    public ITestSuiteService testsuiteService;

    @Autowired
    @Lazy
    public TestSuiteMapping testsuiteMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Save-all')")
    @ApiOperation(value = "保存测试套件", tags = {"测试套件" },  notes = "保存测试套件")
	@RequestMapping(method = RequestMethod.POST, value = "/testsuites/save")
    public ResponseEntity<Boolean> save(@RequestBody TestSuiteDTO testsuitedto) {
        return ResponseEntity.status(HttpStatus.OK).body(testsuiteService.save(testsuiteMapping.toDomain(testsuitedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Save-all')")
    @ApiOperation(value = "批量保存测试套件", tags = {"测试套件" },  notes = "批量保存测试套件")
	@RequestMapping(method = RequestMethod.POST, value = "/testsuites/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TestSuiteDTO> testsuitedtos) {
        testsuiteService.saveBatch(testsuiteMapping.toDomain(testsuitedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Create-all')")
    @ApiOperation(value = "新建测试套件", tags = {"测试套件" },  notes = "新建测试套件")
	@RequestMapping(method = RequestMethod.POST, value = "/testsuites")
    @Transactional
    public ResponseEntity<TestSuiteDTO> create(@RequestBody TestSuiteDTO testsuitedto) {
        TestSuite domain = testsuiteMapping.toDomain(testsuitedto);
		testsuiteService.create(domain);
        TestSuiteDTO dto = testsuiteMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Create-all')")
    @ApiOperation(value = "批量新建测试套件", tags = {"测试套件" },  notes = "批量新建测试套件")
	@RequestMapping(method = RequestMethod.POST, value = "/testsuites/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TestSuiteDTO> testsuitedtos) {
        testsuiteService.createBatch(testsuiteMapping.toDomain(testsuitedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查测试套件", tags = {"测试套件" },  notes = "检查测试套件")
	@RequestMapping(method = RequestMethod.POST, value = "/testsuites/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TestSuiteDTO testsuitedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testsuiteService.checkKey(testsuiteMapping.toDomain(testsuitedto)));
    }

    @ApiOperation(value = "获取测试套件草稿", tags = {"测试套件" },  notes = "获取测试套件草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/testsuites/getdraft")
    public ResponseEntity<TestSuiteDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(testsuiteMapping.toDto(testsuiteService.getDraft(new TestSuite())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Get-all')")
    @ApiOperation(value = "获取测试套件", tags = {"测试套件" },  notes = "获取测试套件")
	@RequestMapping(method = RequestMethod.GET, value = "/testsuites/{testsuite_id}")
    public ResponseEntity<TestSuiteDTO> get(@PathVariable("testsuite_id") BigInteger testsuite_id) {
        TestSuite domain = testsuiteService.get(testsuite_id);
        TestSuiteDTO dto = testsuiteMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Update-all')")
    @ApiOperation(value = "更新测试套件", tags = {"测试套件" },  notes = "更新测试套件")
	@RequestMapping(method = RequestMethod.PUT, value = "/testsuites/{testsuite_id}")
    @Transactional
    public ResponseEntity<TestSuiteDTO> update(@PathVariable("testsuite_id") BigInteger testsuite_id, @RequestBody TestSuiteDTO testsuitedto) {
		TestSuite domain  = testsuiteMapping.toDomain(testsuitedto);
        domain .setId(testsuite_id);
		testsuiteService.update(domain );
		TestSuiteDTO dto = testsuiteMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Update-all')")
    @ApiOperation(value = "批量更新测试套件", tags = {"测试套件" },  notes = "批量更新测试套件")
	@RequestMapping(method = RequestMethod.PUT, value = "/testsuites/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TestSuiteDTO> testsuitedtos) {
        testsuiteService.updateBatch(testsuiteMapping.toDomain(testsuitedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Remove-all')")
    @ApiOperation(value = "删除测试套件", tags = {"测试套件" },  notes = "删除测试套件")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testsuites/{testsuite_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("testsuite_id") BigInteger testsuite_id) {
         return ResponseEntity.status(HttpStatus.OK).body(testsuiteService.remove(testsuite_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-Remove-all')")
    @ApiOperation(value = "批量删除测试套件", tags = {"测试套件" },  notes = "批量删除测试套件")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testsuites/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        testsuiteService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"测试套件" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/testsuites/fetchdefault")
	public ResponseEntity<List<TestSuiteDTO>> fetchDefault(TestSuiteSearchContext context) {
        Page<TestSuite> domains = testsuiteService.searchDefault(context) ;
        List<TestSuiteDTO> list = testsuiteMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestSuite-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试套件" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/testsuites/searchdefault")
	public ResponseEntity<Page<TestSuiteDTO>> searchDefault(@RequestBody TestSuiteSearchContext context) {
        Page<TestSuite> domains = testsuiteService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testsuiteMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

