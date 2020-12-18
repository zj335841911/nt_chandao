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
import cn.ibizlab.pms.core.ibiz.domain.IBZ_CASESTATS;
import cn.ibizlab.pms.core.ibiz.service.IIBZ_CASESTATSService;
import cn.ibizlab.pms.core.ibiz.filter.IBZ_CASESTATSSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"测试用例统计" })
@RestController("WebApi-ibz_casestats")
@RequestMapping("")
public class IBZ_CASESTATSResource {

    @Autowired
    public IIBZ_CASESTATSService ibz_casestatsService;

    @Autowired
    @Lazy
    public IBZ_CASESTATSMapping ibz_casestatsMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Create-all')")
    @ApiOperation(value = "新建测试用例统计", tags = {"测试用例统计" },  notes = "新建测试用例统计")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_casestats")
    public ResponseEntity<IBZ_CASESTATSDTO> create(@Validated @RequestBody IBZ_CASESTATSDTO ibz_casestatsdto) {
        IBZ_CASESTATS domain = ibz_casestatsMapping.toDomain(ibz_casestatsdto);
		ibz_casestatsService.create(domain);
        IBZ_CASESTATSDTO dto = ibz_casestatsMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Create-all')")
    @ApiOperation(value = "批量新建测试用例统计", tags = {"测试用例统计" },  notes = "批量新建测试用例统计")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_casestats/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IBZ_CASESTATSDTO> ibz_casestatsdtos) {
        ibz_casestatsService.createBatch(ibz_casestatsMapping.toDomain(ibz_casestatsdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Update-all')")
    @ApiOperation(value = "更新测试用例统计", tags = {"测试用例统计" },  notes = "更新测试用例统计")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibz_casestats/{ibz_casestats_id}")
    public ResponseEntity<IBZ_CASESTATSDTO> update(@PathVariable("ibz_casestats_id") Long ibz_casestats_id, @RequestBody IBZ_CASESTATSDTO ibz_casestatsdto) {
		IBZ_CASESTATS domain  = ibz_casestatsMapping.toDomain(ibz_casestatsdto);
        domain .setId(ibz_casestats_id);
		ibz_casestatsService.update(domain );
		IBZ_CASESTATSDTO dto = ibz_casestatsMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Update-all')")
    @ApiOperation(value = "批量更新测试用例统计", tags = {"测试用例统计" },  notes = "批量更新测试用例统计")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibz_casestats/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IBZ_CASESTATSDTO> ibz_casestatsdtos) {
        ibz_casestatsService.updateBatch(ibz_casestatsMapping.toDomain(ibz_casestatsdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Remove-all')")
    @ApiOperation(value = "删除测试用例统计", tags = {"测试用例统计" },  notes = "删除测试用例统计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibz_casestats/{ibz_casestats_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibz_casestats_id") Long ibz_casestats_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibz_casestatsService.remove(ibz_casestats_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Remove-all')")
    @ApiOperation(value = "批量删除测试用例统计", tags = {"测试用例统计" },  notes = "批量删除测试用例统计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibz_casestats/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        ibz_casestatsService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Get-all')")
    @ApiOperation(value = "获取测试用例统计", tags = {"测试用例统计" },  notes = "获取测试用例统计")
	@RequestMapping(method = RequestMethod.GET, value = "/ibz_casestats/{ibz_casestats_id}")
    public ResponseEntity<IBZ_CASESTATSDTO> get(@PathVariable("ibz_casestats_id") Long ibz_casestats_id) {
        IBZ_CASESTATS domain = ibz_casestatsService.get(ibz_casestats_id);
        IBZ_CASESTATSDTO dto = ibz_casestatsMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取测试用例统计草稿", tags = {"测试用例统计" },  notes = "获取测试用例统计草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibz_casestats/getdraft")
    public ResponseEntity<IBZ_CASESTATSDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibz_casestatsMapping.toDto(ibz_casestatsService.getDraft(new IBZ_CASESTATS())));
    }

    @ApiOperation(value = "检查测试用例统计", tags = {"测试用例统计" },  notes = "检查测试用例统计")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_casestats/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IBZ_CASESTATSDTO ibz_casestatsdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibz_casestatsService.checkKey(ibz_casestatsMapping.toDomain(ibz_casestatsdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Save-all')")
    @ApiOperation(value = "保存测试用例统计", tags = {"测试用例统计" },  notes = "保存测试用例统计")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_casestats/save")
    public ResponseEntity<Boolean> save(@RequestBody IBZ_CASESTATSDTO ibz_casestatsdto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibz_casestatsService.save(ibz_casestatsMapping.toDomain(ibz_casestatsdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-Save-all')")
    @ApiOperation(value = "批量保存测试用例统计", tags = {"测试用例统计" },  notes = "批量保存测试用例统计")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_casestats/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IBZ_CASESTATSDTO> ibz_casestatsdtos) {
        ibz_casestatsService.saveBatch(ibz_casestatsMapping.toDomain(ibz_casestatsdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-searchDefault-all')")
	@ApiOperation(value = "获取数据集", tags = {"测试用例统计" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibz_casestats/fetchdefault")
	public ResponseEntity<List<IBZ_CASESTATSDTO>> fetchDefault(IBZ_CASESTATSSearchContext context) {
        Page<IBZ_CASESTATS> domains = ibz_casestatsService.searchDefault(context) ;
        List<IBZ_CASESTATSDTO> list = ibz_casestatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-searchDefault-all')")
	@ApiOperation(value = "查询数据集", tags = {"测试用例统计" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibz_casestats/searchdefault")
	public ResponseEntity<Page<IBZ_CASESTATSDTO>> searchDefault(@RequestBody IBZ_CASESTATSSearchContext context) {
        Page<IBZ_CASESTATS> domains = ibz_casestatsService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibz_casestatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-searchTestCaseStats-all')")
	@ApiOperation(value = "获取测试用例统计", tags = {"测试用例统计" } ,notes = "获取测试用例统计")
    @RequestMapping(method= RequestMethod.GET , value="/ibz_casestats/fetchtestcasestats")
	public ResponseEntity<List<IBZ_CASESTATSDTO>> fetchTestCaseStats(IBZ_CASESTATSSearchContext context) {
        Page<IBZ_CASESTATS> domains = ibz_casestatsService.searchTestCaseStats(context) ;
        List<IBZ_CASESTATSDTO> list = ibz_casestatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_CASESTATS-searchTestCaseStats-all')")
	@ApiOperation(value = "查询测试用例统计", tags = {"测试用例统计" } ,notes = "查询测试用例统计")
    @RequestMapping(method= RequestMethod.POST , value="/ibz_casestats/searchtestcasestats")
	public ResponseEntity<Page<IBZ_CASESTATSDTO>> searchTestCaseStats(@RequestBody IBZ_CASESTATSSearchContext context) {
        Page<IBZ_CASESTATS> domains = ibz_casestatsService.searchTestCaseStats(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibz_casestatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

