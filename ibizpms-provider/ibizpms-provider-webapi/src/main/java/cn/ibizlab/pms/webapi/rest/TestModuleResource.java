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
import cn.ibizlab.pms.core.ibiz.domain.TestModule;
import cn.ibizlab.pms.core.ibiz.service.ITestModuleService;
import cn.ibizlab.pms.core.ibiz.filter.TestModuleSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"测试模块" })
@RestController("WebApi-testmodule")
@RequestMapping("")
public class TestModuleResource {

    @Autowired
    public ITestModuleService testmoduleService;

    @Autowired
    @Lazy
    public TestModuleMapping testmoduleMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Create-all')")
    @ApiOperation(value = "新建测试模块", tags = {"测试模块" },  notes = "新建测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules")
    @Transactional
    public ResponseEntity<TestModuleDTO> create(@RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
		testmoduleService.create(domain);
        TestModuleDTO dto = testmoduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Create-all')")
    @ApiOperation(value = "批量新建测试模块", tags = {"测试模块" },  notes = "批量新建测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TestModuleDTO> testmoduledtos) {
        testmoduleService.createBatch(testmoduleMapping.toDomain(testmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Update-all')")
    @ApiOperation(value = "更新测试模块", tags = {"测试模块" },  notes = "更新测试模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/testmodules/{testmodule_id}")
    @Transactional
    public ResponseEntity<TestModuleDTO> update(@PathVariable("testmodule_id") BigInteger testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
		TestModule domain  = testmoduleMapping.toDomain(testmoduledto);
        domain .setId(testmodule_id);
		testmoduleService.update(domain );
		TestModuleDTO dto = testmoduleMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Update-all')")
    @ApiOperation(value = "批量更新测试模块", tags = {"测试模块" },  notes = "批量更新测试模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/testmodules/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TestModuleDTO> testmoduledtos) {
        testmoduleService.updateBatch(testmoduleMapping.toDomain(testmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Remove-all')")
    @ApiOperation(value = "删除测试模块", tags = {"测试模块" },  notes = "删除测试模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testmodules/{testmodule_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("testmodule_id") BigInteger testmodule_id) {
         return ResponseEntity.status(HttpStatus.OK).body(testmoduleService.remove(testmodule_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Remove-all')")
    @ApiOperation(value = "批量删除测试模块", tags = {"测试模块" },  notes = "批量删除测试模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testmodules/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        testmoduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Get-all')")
    @ApiOperation(value = "获取测试模块", tags = {"测试模块" },  notes = "获取测试模块")
	@RequestMapping(method = RequestMethod.GET, value = "/testmodules/{testmodule_id}")
    public ResponseEntity<TestModuleDTO> get(@PathVariable("testmodule_id") BigInteger testmodule_id) {
        TestModule domain = testmoduleService.get(testmodule_id);
        TestModuleDTO dto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取测试模块草稿", tags = {"测试模块" },  notes = "获取测试模块草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/testmodules/getdraft")
    public ResponseEntity<TestModuleDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(testmoduleMapping.toDto(testmoduleService.getDraft(new TestModule())));
    }

    @ApiOperation(value = "检查测试模块", tags = {"测试模块" },  notes = "检查测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TestModuleDTO testmoduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testmoduleService.checkKey(testmoduleMapping.toDomain(testmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Fix-all')")
    @ApiOperation(value = "重建模块路径", tags = {"测试模块" },  notes = "重建模块路径")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/{testmodule_id}/fix")
    @Transactional
    public ResponseEntity<TestModuleDTO> fix(@PathVariable("testmodule_id") BigInteger testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setId(testmodule_id);
        domain = testmoduleService.fix(domain);
        testmoduledto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduledto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Save-all')")
    @ApiOperation(value = "保存测试模块", tags = {"测试模块" },  notes = "保存测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/save")
    public ResponseEntity<Boolean> save(@RequestBody TestModuleDTO testmoduledto) {
        return ResponseEntity.status(HttpStatus.OK).body(testmoduleService.save(testmoduleMapping.toDomain(testmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Save-all')")
    @ApiOperation(value = "批量保存测试模块", tags = {"测试模块" },  notes = "批量保存测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TestModuleDTO> testmoduledtos) {
        testmoduleService.saveBatch(testmoduleMapping.toDomain(testmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"测试模块" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/testmodules/fetchdefault")
	public ResponseEntity<List<TestModuleDTO>> fetchDefault(TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchDefault(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试模块" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/testmodules/searchdefault")
	public ResponseEntity<Page<TestModuleDTO>> searchDefault(@RequestBody TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

