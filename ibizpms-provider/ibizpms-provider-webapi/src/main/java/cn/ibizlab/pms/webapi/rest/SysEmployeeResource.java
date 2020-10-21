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
import org.springframework.validation.annotation.Validated;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.ou.domain.IBZEmployee;
import cn.ibizlab.pms.core.ou.service.IIBZEmployeeService;
import cn.ibizlab.pms.core.ou.filter.IBZEmployeeSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"人员" })
@RestController("WebApi-sysemployee")
@RequestMapping("")
public class SysEmployeeResource {

    @Autowired
    public IIBZEmployeeService ibzemployeeService;

    @Autowired
    @Lazy
    public SysEmployeeMapping sysemployeeMapping;

    @ApiOperation(value = "新建人员", tags = {"人员" },  notes = "新建人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees")
    public ResponseEntity<SysEmployeeDTO> create(@Validated @RequestBody SysEmployeeDTO sysemployeedto) {
        IBZEmployee domain = sysemployeeMapping.toDomain(sysemployeedto);
		ibzemployeeService.create(domain);
        SysEmployeeDTO dto = sysemployeeMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "批量新建人员", tags = {"人员" },  notes = "批量新建人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<SysEmployeeDTO> sysemployeedtos) {
        ibzemployeeService.createBatch(sysemployeeMapping.toDomain(sysemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "更新人员", tags = {"人员" },  notes = "更新人员")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysemployees/{sysemployee_id}")
    public ResponseEntity<SysEmployeeDTO> update(@PathVariable("sysemployee_id") String sysemployee_id, @RequestBody SysEmployeeDTO sysemployeedto) {
		IBZEmployee domain  = sysemployeeMapping.toDomain(sysemployeedto);
        domain .setUserid(sysemployee_id);
		ibzemployeeService.update(domain );
		SysEmployeeDTO dto = sysemployeeMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "批量更新人员", tags = {"人员" },  notes = "批量更新人员")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysemployees/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<SysEmployeeDTO> sysemployeedtos) {
        ibzemployeeService.updateBatch(sysemployeeMapping.toDomain(sysemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "删除人员", tags = {"人员" },  notes = "删除人员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/sysemployees/{sysemployee_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("sysemployee_id") String sysemployee_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzemployeeService.remove(sysemployee_id));
    }

    @ApiOperation(value = "批量删除人员", tags = {"人员" },  notes = "批量删除人员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/sysemployees/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        ibzemployeeService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "获取人员", tags = {"人员" },  notes = "获取人员")
	@RequestMapping(method = RequestMethod.GET, value = "/sysemployees/{sysemployee_id}")
    public ResponseEntity<SysEmployeeDTO> get(@PathVariable("sysemployee_id") String sysemployee_id) {
        IBZEmployee domain = ibzemployeeService.get(sysemployee_id);
        SysEmployeeDTO dto = sysemployeeMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取人员草稿", tags = {"人员" },  notes = "获取人员草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/sysemployees/getdraft")
    public ResponseEntity<SysEmployeeDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(sysemployeeMapping.toDto(ibzemployeeService.getDraft(new IBZEmployee())));
    }

    @ApiOperation(value = "检查人员", tags = {"人员" },  notes = "检查人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody SysEmployeeDTO sysemployeedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzemployeeService.checkKey(sysemployeeMapping.toDomain(sysemployeedto)));
    }

    @ApiOperation(value = "保存人员", tags = {"人员" },  notes = "保存人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/save")
    public ResponseEntity<Boolean> save(@RequestBody SysEmployeeDTO sysemployeedto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibzemployeeService.save(sysemployeeMapping.toDomain(sysemployeedto)));
    }

    @ApiOperation(value = "批量保存人员", tags = {"人员" },  notes = "批量保存人员")
	@RequestMapping(method = RequestMethod.POST, value = "/sysemployees/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<SysEmployeeDTO> sysemployeedtos) {
        ibzemployeeService.saveBatch(sysemployeeMapping.toDomain(sysemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

	@ApiOperation(value = "获取数据集", tags = {"人员" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/sysemployees/fetchdefault")
	public ResponseEntity<List<SysEmployeeDTO>> fetchDefault(IBZEmployeeSearchContext context) {
        Page<IBZEmployee> domains = ibzemployeeService.searchDefault(context) ;
        List<SysEmployeeDTO> list = sysemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询数据集", tags = {"人员" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/sysemployees/searchdefault")
	public ResponseEntity<Page<SysEmployeeDTO>> searchDefault(@RequestBody IBZEmployeeSearchContext context) {
        Page<IBZEmployee> domains = ibzemployeeService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

