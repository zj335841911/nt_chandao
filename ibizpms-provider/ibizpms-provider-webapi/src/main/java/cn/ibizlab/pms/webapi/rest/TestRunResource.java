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
import cn.ibizlab.pms.core.zentao.domain.TestRun;
import cn.ibizlab.pms.core.zentao.service.ITestRunService;
import cn.ibizlab.pms.core.zentao.filter.TestRunSearchContext;

@Slf4j
@Api(tags = {"测试运行" })
@RestController("WebApi-testrun")
@RequestMapping("")
public class TestRunResource {

    @Autowired
    public ITestRunService testrunService;

    @Autowired
    @Lazy
    public TestRunMapping testrunMapping;

    @ApiOperation(value = "检查测试运行", tags = {"测试运行" },  notes = "检查测试运行")
	@RequestMapping(method = RequestMethod.POST, value = "/testruns/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TestRunDTO testrundto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testrunService.checkKey(testrunMapping.toDomain(testrundto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Remove-all')")
    @ApiOperation(value = "删除测试运行", tags = {"测试运行" },  notes = "删除测试运行")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testruns/{testrun_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("testrun_id") BigInteger testrun_id) {
         return ResponseEntity.status(HttpStatus.OK).body(testrunService.remove(testrun_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Remove-all')")
    @ApiOperation(value = "批量删除测试运行", tags = {"测试运行" },  notes = "批量删除测试运行")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testruns/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        testrunService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Update-all')")
    @ApiOperation(value = "更新测试运行", tags = {"测试运行" },  notes = "更新测试运行")
	@RequestMapping(method = RequestMethod.PUT, value = "/testruns/{testrun_id}")
    @Transactional
    public ResponseEntity<TestRunDTO> update(@PathVariable("testrun_id") BigInteger testrun_id, @RequestBody TestRunDTO testrundto) {
		TestRun domain  = testrunMapping.toDomain(testrundto);
        domain .setId(testrun_id);
		testrunService.update(domain );
		TestRunDTO dto = testrunMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Update-all')")
    @ApiOperation(value = "批量更新测试运行", tags = {"测试运行" },  notes = "批量更新测试运行")
	@RequestMapping(method = RequestMethod.PUT, value = "/testruns/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TestRunDTO> testrundtos) {
        testrunService.updateBatch(testrunMapping.toDomain(testrundtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "获取测试运行草稿", tags = {"测试运行" },  notes = "获取测试运行草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/testruns/getdraft")
    public ResponseEntity<TestRunDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(testrunMapping.toDto(testrunService.getDraft(new TestRun())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Get-all')")
    @ApiOperation(value = "获取测试运行", tags = {"测试运行" },  notes = "获取测试运行")
	@RequestMapping(method = RequestMethod.GET, value = "/testruns/{testrun_id}")
    public ResponseEntity<TestRunDTO> get(@PathVariable("testrun_id") BigInteger testrun_id) {
        TestRun domain = testrunService.get(testrun_id);
        TestRunDTO dto = testrunMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Save-all')")
    @ApiOperation(value = "保存测试运行", tags = {"测试运行" },  notes = "保存测试运行")
	@RequestMapping(method = RequestMethod.POST, value = "/testruns/save")
    public ResponseEntity<Boolean> save(@RequestBody TestRunDTO testrundto) {
        return ResponseEntity.status(HttpStatus.OK).body(testrunService.save(testrunMapping.toDomain(testrundto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Save-all')")
    @ApiOperation(value = "批量保存测试运行", tags = {"测试运行" },  notes = "批量保存测试运行")
	@RequestMapping(method = RequestMethod.POST, value = "/testruns/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TestRunDTO> testrundtos) {
        testrunService.saveBatch(testrunMapping.toDomain(testrundtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Create-all')")
    @ApiOperation(value = "新建测试运行", tags = {"测试运行" },  notes = "新建测试运行")
	@RequestMapping(method = RequestMethod.POST, value = "/testruns")
    @Transactional
    public ResponseEntity<TestRunDTO> create(@RequestBody TestRunDTO testrundto) {
        TestRun domain = testrunMapping.toDomain(testrundto);
		testrunService.create(domain);
        TestRunDTO dto = testrunMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Create-all')")
    @ApiOperation(value = "批量新建测试运行", tags = {"测试运行" },  notes = "批量新建测试运行")
	@RequestMapping(method = RequestMethod.POST, value = "/testruns/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TestRunDTO> testrundtos) {
        testrunService.createBatch(testrunMapping.toDomain(testrundtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Default-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"测试运行" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/testruns/fetchdefault")
	public ResponseEntity<List<TestRunDTO>> fetchDefault(TestRunSearchContext context) {
        Page<TestRun> domains = testrunService.searchDefault(context) ;
        List<TestRunDTO> list = testrunMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestRun-Default-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试运行" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/testruns/searchdefault")
	public ResponseEntity<Page<TestRunDTO>> searchDefault(@RequestBody TestRunSearchContext context) {
        Page<TestRun> domains = testrunService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testrunMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

