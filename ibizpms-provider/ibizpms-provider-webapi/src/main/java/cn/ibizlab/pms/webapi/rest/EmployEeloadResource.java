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
import cn.ibizlab.pms.core.ibiz.domain.EMPLOYEELOAD;
import cn.ibizlab.pms.core.ibiz.service.IEMPLOYEELOADService;
import cn.ibizlab.pms.core.ibiz.filter.EMPLOYEELOADSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"员工负载表" })
@RestController("WebApi-employeeload")
@RequestMapping("")
public class EmployEeloadResource {

    @Autowired
    public IEMPLOYEELOADService employeeloadService;

    @Autowired
    @Lazy
    public EmployEeloadMapping employeeloadMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Create-all')")
    @ApiOperation(value = "新建员工负载表", tags = {"员工负载表" },  notes = "新建员工负载表")
	@RequestMapping(method = RequestMethod.POST, value = "/employeeloads")
    public ResponseEntity<EmployEeloadDTO> create(@Validated @RequestBody EmployEeloadDTO employeeloaddto) {
        EMPLOYEELOAD domain = employeeloadMapping.toDomain(employeeloaddto);
		employeeloadService.create(domain);
        EmployEeloadDTO dto = employeeloadMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Create-all')")
    @ApiOperation(value = "批量新建员工负载表", tags = {"员工负载表" },  notes = "批量新建员工负载表")
	@RequestMapping(method = RequestMethod.POST, value = "/employeeloads/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<EmployEeloadDTO> employeeloaddtos) {
        employeeloadService.createBatch(employeeloadMapping.toDomain(employeeloaddtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Update-all')")
    @ApiOperation(value = "更新员工负载表", tags = {"员工负载表" },  notes = "更新员工负载表")
	@RequestMapping(method = RequestMethod.PUT, value = "/employeeloads/{employeeload_id}")
    public ResponseEntity<EmployEeloadDTO> update(@PathVariable("employeeload_id") Long employeeload_id, @RequestBody EmployEeloadDTO employeeloaddto) {
		EMPLOYEELOAD domain  = employeeloadMapping.toDomain(employeeloaddto);
        domain .setId(employeeload_id);
		employeeloadService.update(domain );
		EmployEeloadDTO dto = employeeloadMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Update-all')")
    @ApiOperation(value = "批量更新员工负载表", tags = {"员工负载表" },  notes = "批量更新员工负载表")
	@RequestMapping(method = RequestMethod.PUT, value = "/employeeloads/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<EmployEeloadDTO> employeeloaddtos) {
        employeeloadService.updateBatch(employeeloadMapping.toDomain(employeeloaddtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Remove-all')")
    @ApiOperation(value = "删除员工负载表", tags = {"员工负载表" },  notes = "删除员工负载表")
	@RequestMapping(method = RequestMethod.DELETE, value = "/employeeloads/{employeeload_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("employeeload_id") Long employeeload_id) {
         return ResponseEntity.status(HttpStatus.OK).body(employeeloadService.remove(employeeload_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Remove-all')")
    @ApiOperation(value = "批量删除员工负载表", tags = {"员工负载表" },  notes = "批量删除员工负载表")
	@RequestMapping(method = RequestMethod.DELETE, value = "/employeeloads/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        employeeloadService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Get-all')")
    @ApiOperation(value = "获取员工负载表", tags = {"员工负载表" },  notes = "获取员工负载表")
	@RequestMapping(method = RequestMethod.GET, value = "/employeeloads/{employeeload_id}")
    public ResponseEntity<EmployEeloadDTO> get(@PathVariable("employeeload_id") Long employeeload_id) {
        EMPLOYEELOAD domain = employeeloadService.get(employeeload_id);
        EmployEeloadDTO dto = employeeloadMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取员工负载表草稿", tags = {"员工负载表" },  notes = "获取员工负载表草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/employeeloads/getdraft")
    public ResponseEntity<EmployEeloadDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(employeeloadMapping.toDto(employeeloadService.getDraft(new EMPLOYEELOAD())));
    }

    @ApiOperation(value = "检查员工负载表", tags = {"员工负载表" },  notes = "检查员工负载表")
	@RequestMapping(method = RequestMethod.POST, value = "/employeeloads/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody EmployEeloadDTO employeeloaddto) {
        return  ResponseEntity.status(HttpStatus.OK).body(employeeloadService.checkKey(employeeloadMapping.toDomain(employeeloaddto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-GETWORDKLOAD_UNASSIGN-all')")
    @ApiOperation(value = "工作负载(未指派)", tags = {"员工负载表" },  notes = "工作负载(未指派)")
	@RequestMapping(method = RequestMethod.GET, value = "/employeeloads/{employeeload_id}/getwordkload_unassign")
    public ResponseEntity<EmployEeloadDTO> gETWORDKLOAD_UNASSIGN(@PathVariable("employeeload_id") Long employeeload_id, @RequestBody EmployEeloadDTO employeeloaddto) {
        EMPLOYEELOAD domain = employeeloadMapping.toDomain(employeeloaddto);
        domain.setId(employeeload_id);
        domain = employeeloadService.gETWORDKLOAD_UNASSIGN(domain);
        employeeloaddto = employeeloadMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(employeeloaddto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Save-all')")
    @ApiOperation(value = "保存员工负载表", tags = {"员工负载表" },  notes = "保存员工负载表")
	@RequestMapping(method = RequestMethod.POST, value = "/employeeloads/save")
    public ResponseEntity<Boolean> save(@RequestBody EmployEeloadDTO employeeloaddto) {
        return ResponseEntity.status(HttpStatus.OK).body(employeeloadService.save(employeeloadMapping.toDomain(employeeloaddto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-Save-all')")
    @ApiOperation(value = "批量保存员工负载表", tags = {"员工负载表" },  notes = "批量保存员工负载表")
	@RequestMapping(method = RequestMethod.POST, value = "/employeeloads/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<EmployEeloadDTO> employeeloaddtos) {
        employeeloadService.saveBatch(employeeloadMapping.toDomain(employeeloaddtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-searchDefault-all')")
	@ApiOperation(value = "获取数据集", tags = {"员工负载表" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/employeeloads/fetchdefault")
	public ResponseEntity<List<EmployEeloadDTO>> fetchDefault(EMPLOYEELOADSearchContext context) {
        Page<EMPLOYEELOAD> domains = employeeloadService.searchDefault(context) ;
        List<EmployEeloadDTO> list = employeeloadMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-searchDefault-all')")
	@ApiOperation(value = "查询数据集", tags = {"员工负载表" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/employeeloads/searchdefault")
	public ResponseEntity<Page<EmployEeloadDTO>> searchDefault(@RequestBody EMPLOYEELOADSearchContext context) {
        Page<EMPLOYEELOAD> domains = employeeloadService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(employeeloadMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-searchGETWOERKLOAD-all')")
	@ApiOperation(value = "获取获取员工负载表", tags = {"员工负载表" } ,notes = "获取获取员工负载表")
    @RequestMapping(method= RequestMethod.GET , value="/employeeloads/fetchgetwoerkload")
	public ResponseEntity<List<EmployEeloadDTO>> fetchGETWOERKLOAD(EMPLOYEELOADSearchContext context) {
        Page<EMPLOYEELOAD> domains = employeeloadService.searchGETWOERKLOAD(context) ;
        List<EmployEeloadDTO> list = employeeloadMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-searchGETWOERKLOAD-all')")
	@ApiOperation(value = "查询获取员工负载表", tags = {"员工负载表" } ,notes = "查询获取员工负载表")
    @RequestMapping(method= RequestMethod.POST , value="/employeeloads/searchgetwoerkload")
	public ResponseEntity<Page<EmployEeloadDTO>> searchGETWOERKLOAD(@RequestBody EMPLOYEELOADSearchContext context) {
        Page<EMPLOYEELOAD> domains = employeeloadService.searchGETWOERKLOAD(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(employeeloadMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-searchGETWORKLOAD_UNASSIGN-all')")
	@ApiOperation(value = "获取员工负载(未指派)", tags = {"员工负载表" } ,notes = "获取员工负载(未指派)")
    @RequestMapping(method= RequestMethod.GET , value="/employeeloads/fetchgetworkload_unassign")
	public ResponseEntity<List<EmployEeloadDTO>> fetchGETWORKLOAD_UNASSIGN(EMPLOYEELOADSearchContext context) {
        Page<EMPLOYEELOAD> domains = employeeloadService.searchGETWORKLOAD_UNASSIGN(context) ;
        List<EmployEeloadDTO> list = employeeloadMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-EMPLOYEELOAD-searchGETWORKLOAD_UNASSIGN-all')")
	@ApiOperation(value = "查询员工负载(未指派)", tags = {"员工负载表" } ,notes = "查询员工负载(未指派)")
    @RequestMapping(method= RequestMethod.POST , value="/employeeloads/searchgetworkload_unassign")
	public ResponseEntity<Page<EmployEeloadDTO>> searchGETWORKLOAD_UNASSIGN(@RequestBody EMPLOYEELOADSearchContext context) {
        Page<EMPLOYEELOAD> domains = employeeloadService.searchGETWORKLOAD_UNASSIGN(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(employeeloadMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

