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
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"测试版本" })
@RestController("WebApi-testtask")
@RequestMapping("")
public class TestTaskResource {

    @Autowired
    public ITestTaskService testtaskService;

    @Autowired
    @Lazy
    public TestTaskMapping testtaskMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "新建测试版本", tags = {"测试版本" },  notes = "新建测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks")
    @Transactional
    public ResponseEntity<TestTaskDTO> create(@RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
		testtaskService.create(domain);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "批量新建测试版本", tags = {"测试版本" },  notes = "批量新建测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TestTaskDTO> testtaskdtos) {
        testtaskService.createBatch(testtaskMapping.toDomain(testtaskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Update-all')")
    @ApiOperation(value = "更新测试版本", tags = {"测试版本" },  notes = "更新测试版本")
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
    @ApiOperation(value = "批量更新测试版本", tags = {"测试版本" },  notes = "批量更新测试版本")
	@RequestMapping(method = RequestMethod.PUT, value = "/testtasks/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TestTaskDTO> testtaskdtos) {
        testtaskService.updateBatch(testtaskMapping.toDomain(testtaskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "删除测试版本", tags = {"测试版本" },  notes = "删除测试版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("testtask_id") BigInteger testtask_id) {
         return ResponseEntity.status(HttpStatus.OK).body(testtaskService.remove(testtask_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "批量删除测试版本", tags = {"测试版本" },  notes = "批量删除测试版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testtasks/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        testtaskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Get-all')")
    @ApiOperation(value = "获取测试版本", tags = {"测试版本" },  notes = "获取测试版本")
	@RequestMapping(method = RequestMethod.GET, value = "/testtasks/{testtask_id}")
    public ResponseEntity<TestTaskDTO> get(@PathVariable("testtask_id") BigInteger testtask_id) {
        TestTask domain = testtaskService.get(testtask_id);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取测试版本草稿", tags = {"测试版本" },  notes = "获取测试版本草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/testtasks/getdraft")
    public ResponseEntity<TestTaskDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(testtaskMapping.toDto(testtaskService.getDraft(new TestTask())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Activate-all')")
    @ApiOperation(value = "激活", tags = {"测试版本" },  notes = "激活")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/{testtask_id}/activate")
    @Transactional
    public ResponseEntity<TestTaskDTO> activate(@PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
domain.setId(testtask_id);
        domain = testtaskService.activate(domain);
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Block-all')")
    @ApiOperation(value = "阻塞", tags = {"测试版本" },  notes = "阻塞")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/{testtask_id}/block")
    @Transactional
    public ResponseEntity<TestTaskDTO> block(@PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
domain.setId(testtask_id);
        domain = testtaskService.block(domain);
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @ApiOperation(value = "检查测试版本", tags = {"测试版本" },  notes = "检查测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TestTaskDTO testtaskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testtaskService.checkKey(testtaskMapping.toDomain(testtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Close-all')")
    @ApiOperation(value = "关闭", tags = {"测试版本" },  notes = "关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/{testtask_id}/close")
    @Transactional
    public ResponseEntity<TestTaskDTO> close(@PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
domain.setId(testtask_id);
        domain = testtaskService.close(domain);
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-LinkCase-all')")
    @ApiOperation(value = "关联测试用例", tags = {"测试版本" },  notes = "关联测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/{testtask_id}/linkcase")
    @Transactional
    public ResponseEntity<TestTaskDTO> linkCase(@PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
domain.setId(testtask_id);
        domain = testtaskService.linkCase(domain);
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "保存测试版本", tags = {"测试版本" },  notes = "保存测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/save")
    public ResponseEntity<Boolean> save(@RequestBody TestTaskDTO testtaskdto) {
        return ResponseEntity.status(HttpStatus.OK).body(testtaskService.save(testtaskMapping.toDomain(testtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "批量保存测试版本", tags = {"测试版本" },  notes = "批量保存测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TestTaskDTO> testtaskdtos) {
        testtaskService.saveBatch(testtaskMapping.toDomain(testtaskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Start-all')")
    @ApiOperation(value = "开始", tags = {"测试版本" },  notes = "开始")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/{testtask_id}/start")
    @Transactional
    public ResponseEntity<TestTaskDTO> start(@PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
domain.setId(testtask_id);
        domain = testtaskService.start(domain);
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-UnlinkCase-all')")
    @ApiOperation(value = "关联测试用例", tags = {"测试版本" },  notes = "关联测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/testtasks/{testtask_id}/unlinkcase")
    @Transactional
    public ResponseEntity<TestTaskDTO> unlinkCase(@PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
domain.setId(testtask_id);
        domain = testtaskService.unlinkCase(domain);
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"测试版本" } ,notes = "获取DEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试版本" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/testtasks/searchdefault")
	public ResponseEntity<Page<TestTaskDTO>> searchDefault(@RequestBody TestTaskSearchContext context) {
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "根据产品建立测试版本", tags = {"测试版本" },  notes = "根据产品建立测试版本")
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
    @ApiOperation(value = "根据产品批量建立测试版本", tags = {"测试版本" },  notes = "根据产品批量建立测试版本")
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
    @ApiOperation(value = "根据产品更新测试版本", tags = {"测试版本" },  notes = "根据产品更新测试版本")
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
    @ApiOperation(value = "根据产品批量更新测试版本", tags = {"测试版本" },  notes = "根据产品批量更新测试版本")
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
    @ApiOperation(value = "根据产品删除测试版本", tags = {"测试版本" },  notes = "根据产品删除测试版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testtaskService.remove(testtask_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "根据产品批量删除测试版本", tags = {"测试版本" },  notes = "根据产品批量删除测试版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/testtasks/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        testtaskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Get-all')")
    @ApiOperation(value = "根据产品获取测试版本", tags = {"测试版本" },  notes = "根据产品获取测试版本")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/testtasks/{testtask_id}")
    public ResponseEntity<TestTaskDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id) {
        TestTask domain = testtaskService.get(testtask_id);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取测试版本草稿", tags = {"测试版本" },  notes = "根据产品获取测试版本草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/testtasks/getdraft")
    public ResponseEntity<TestTaskDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        TestTask domain = new TestTask();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskMapping.toDto(testtaskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Activate-all')")
    @ApiOperation(value = "根据产品测试版本", tags = {"测试版本" },  notes = "根据产品测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/{testtask_id}/activate")
    @Transactional
    public ResponseEntity<TestTaskDTO> activateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        domain = testtaskService.activate(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Block-all')")
    @ApiOperation(value = "根据产品测试版本", tags = {"测试版本" },  notes = "根据产品测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/{testtask_id}/block")
    @Transactional
    public ResponseEntity<TestTaskDTO> blockByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        domain = testtaskService.block(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @ApiOperation(value = "根据产品检查测试版本", tags = {"测试版本" },  notes = "根据产品检查测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody TestTaskDTO testtaskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testtaskService.checkKey(testtaskMapping.toDomain(testtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Close-all')")
    @ApiOperation(value = "根据产品测试版本", tags = {"测试版本" },  notes = "根据产品测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/{testtask_id}/close")
    @Transactional
    public ResponseEntity<TestTaskDTO> closeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        domain = testtaskService.close(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-LinkCase-all')")
    @ApiOperation(value = "根据产品测试版本", tags = {"测试版本" },  notes = "根据产品测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/{testtask_id}/linkcase")
    @Transactional
    public ResponseEntity<TestTaskDTO> linkCaseByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        domain = testtaskService.linkCase(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "根据产品保存测试版本", tags = {"测试版本" },  notes = "根据产品保存测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "根据产品批量保存测试版本", tags = {"测试版本" },  notes = "根据产品批量保存测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<TestTaskDTO> testtaskdtos) {
        List<TestTask> domainlist=testtaskMapping.toDomain(testtaskdtos);
        for(TestTask domain:domainlist){
             domain.setProduct(product_id);
        }
        testtaskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Start-all')")
    @ApiOperation(value = "根据产品测试版本", tags = {"测试版本" },  notes = "根据产品测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/{testtask_id}/start")
    @Transactional
    public ResponseEntity<TestTaskDTO> startByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        domain = testtaskService.start(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-UnlinkCase-all')")
    @ApiOperation(value = "根据产品测试版本", tags = {"测试版本" },  notes = "根据产品测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testtasks/{testtask_id}/unlinkcase")
    @Transactional
    public ResponseEntity<TestTaskDTO> unlinkCaseByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProduct(product_id);
        domain = testtaskService.unlinkCase(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"测试版本" } ,notes = "根据产品获取DEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"测试版本" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testtasks/searchdefault")
	public ResponseEntity<Page<TestTaskDTO>> searchTestTaskDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody TestTaskSearchContext context) {
        context.setN_product_eq(product_id);
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "根据项目建立测试版本", tags = {"测试版本" },  notes = "根据项目建立测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks")
    @Transactional
    public ResponseEntity<TestTaskDTO> createByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
		testtaskService.create(domain);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Create-all')")
    @ApiOperation(value = "根据项目批量建立测试版本", tags = {"测试版本" },  notes = "根据项目批量建立测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TestTaskDTO> testtaskdtos) {
        List<TestTask> domainlist=testtaskMapping.toDomain(testtaskdtos);
        for(TestTask domain:domainlist){
            domain.setProject(project_id);
        }
        testtaskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Update-all')")
    @ApiOperation(value = "根据项目更新测试版本", tags = {"测试版本" },  notes = "根据项目更新测试版本")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<TestTaskDTO> updateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        domain.setId(testtask_id);
		testtaskService.update(domain);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Update-all')")
    @ApiOperation(value = "根据项目批量更新测试版本", tags = {"测试版本" },  notes = "根据项目批量更新测试版本")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/testtasks/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TestTaskDTO> testtaskdtos) {
        List<TestTask> domainlist=testtaskMapping.toDomain(testtaskdtos);
        for(TestTask domain:domainlist){
            domain.setProject(project_id);
        }
        testtaskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "根据项目删除测试版本", tags = {"测试版本" },  notes = "根据项目删除测试版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/testtasks/{testtask_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testtaskService.remove(testtask_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Remove-all')")
    @ApiOperation(value = "根据项目批量删除测试版本", tags = {"测试版本" },  notes = "根据项目批量删除测试版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/testtasks/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<BigInteger> ids) {
        testtaskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Get-all')")
    @ApiOperation(value = "根据项目获取测试版本", tags = {"测试版本" },  notes = "根据项目获取测试版本")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/testtasks/{testtask_id}")
    public ResponseEntity<TestTaskDTO> getByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id) {
        TestTask domain = testtaskService.get(testtask_id);
        TestTaskDTO dto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目获取测试版本草稿", tags = {"测试版本" },  notes = "根据项目获取测试版本草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/testtasks/getdraft")
    public ResponseEntity<TestTaskDTO> getDraftByProject(@PathVariable("project_id") BigInteger project_id) {
        TestTask domain = new TestTask();
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskMapping.toDto(testtaskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Activate-all')")
    @ApiOperation(value = "根据项目测试版本", tags = {"测试版本" },  notes = "根据项目测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/{testtask_id}/activate")
    @Transactional
    public ResponseEntity<TestTaskDTO> activateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        domain = testtaskService.activate(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Block-all')")
    @ApiOperation(value = "根据项目测试版本", tags = {"测试版本" },  notes = "根据项目测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/{testtask_id}/block")
    @Transactional
    public ResponseEntity<TestTaskDTO> blockByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        domain = testtaskService.block(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @ApiOperation(value = "根据项目检查测试版本", tags = {"测试版本" },  notes = "根据项目检查测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TestTaskDTO testtaskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testtaskService.checkKey(testtaskMapping.toDomain(testtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Close-all')")
    @ApiOperation(value = "根据项目测试版本", tags = {"测试版本" },  notes = "根据项目测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/{testtask_id}/close")
    @Transactional
    public ResponseEntity<TestTaskDTO> closeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        domain = testtaskService.close(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-LinkCase-all')")
    @ApiOperation(value = "根据项目测试版本", tags = {"测试版本" },  notes = "根据项目测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/{testtask_id}/linkcase")
    @Transactional
    public ResponseEntity<TestTaskDTO> linkCaseByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        domain = testtaskService.linkCase(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "根据项目保存测试版本", tags = {"测试版本" },  notes = "根据项目保存测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Save-all')")
    @ApiOperation(value = "根据项目批量保存测试版本", tags = {"测试版本" },  notes = "根据项目批量保存测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TestTaskDTO> testtaskdtos) {
        List<TestTask> domainlist=testtaskMapping.toDomain(testtaskdtos);
        for(TestTask domain:domainlist){
             domain.setProject(project_id);
        }
        testtaskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-Start-all')")
    @ApiOperation(value = "根据项目测试版本", tags = {"测试版本" },  notes = "根据项目测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/{testtask_id}/start")
    @Transactional
    public ResponseEntity<TestTaskDTO> startByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        domain = testtaskService.start(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-UnlinkCase-all')")
    @ApiOperation(value = "根据项目测试版本", tags = {"测试版本" },  notes = "根据项目测试版本")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/testtasks/{testtask_id}/unlinkcase")
    @Transactional
    public ResponseEntity<TestTaskDTO> unlinkCaseByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("testtask_id") BigInteger testtask_id, @RequestBody TestTaskDTO testtaskdto) {
        TestTask domain = testtaskMapping.toDomain(testtaskdto);
        domain.setProject(project_id);
        domain = testtaskService.unlinkCase(domain) ;
        testtaskdto = testtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-searchDefault-all')")
	@ApiOperation(value = "根据项目获取DEFAULT", tags = {"测试版本" } ,notes = "根据项目获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/testtasks/fetchdefault")
	public ResponseEntity<List<TestTaskDTO>> fetchTestTaskDefaultByProject(@PathVariable("project_id") BigInteger project_id,TestTaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
        List<TestTaskDTO> list = testtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestTask-searchDefault-all')")
	@ApiOperation(value = "根据项目查询DEFAULT", tags = {"测试版本" } ,notes = "根据项目查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/testtasks/searchdefault")
	public ResponseEntity<Page<TestTaskDTO>> searchTestTaskDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TestTaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<TestTask> domains = testtaskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

