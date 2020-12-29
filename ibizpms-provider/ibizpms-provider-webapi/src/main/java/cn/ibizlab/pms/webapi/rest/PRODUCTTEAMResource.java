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
import cn.ibizlab.pms.core.ibiz.domain.PRODUCTTEAM;
import cn.ibizlab.pms.core.ibiz.service.IPRODUCTTEAMService;
import cn.ibizlab.pms.core.ibiz.filter.PRODUCTTEAMSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品团队" })
@RestController("WebApi-productteam")
@RequestMapping("")
public class PRODUCTTEAMResource {

    @Autowired
    public IPRODUCTTEAMService productteamService;

    @Autowired
    @Lazy
    public PRODUCTTEAMMapping productteamMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Create-all')")
    @ApiOperation(value = "新建产品团队", tags = {"产品团队" },  notes = "新建产品团队")
	@RequestMapping(method = RequestMethod.POST, value = "/productteams")
    public ResponseEntity<PRODUCTTEAMDTO> create(@Validated @RequestBody PRODUCTTEAMDTO productteamdto) {
        PRODUCTTEAM domain = productteamMapping.toDomain(productteamdto);
		productteamService.create(domain);
        PRODUCTTEAMDTO dto = productteamMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Create-all')")
    @ApiOperation(value = "批量新建产品团队", tags = {"产品团队" },  notes = "批量新建产品团队")
	@RequestMapping(method = RequestMethod.POST, value = "/productteams/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<PRODUCTTEAMDTO> productteamdtos) {
        productteamService.createBatch(productteamMapping.toDomain(productteamdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Update-all')")
    @ApiOperation(value = "更新产品团队", tags = {"产品团队" },  notes = "更新产品团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/productteams/{productteam_id}")
    public ResponseEntity<PRODUCTTEAMDTO> update(@PathVariable("productteam_id") Long productteam_id, @RequestBody PRODUCTTEAMDTO productteamdto) {
		PRODUCTTEAM domain  = productteamMapping.toDomain(productteamdto);
        domain .setId(productteam_id);
		productteamService.update(domain );
		PRODUCTTEAMDTO dto = productteamMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Update-all')")
    @ApiOperation(value = "批量更新产品团队", tags = {"产品团队" },  notes = "批量更新产品团队")
	@RequestMapping(method = RequestMethod.PUT, value = "/productteams/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<PRODUCTTEAMDTO> productteamdtos) {
        productteamService.updateBatch(productteamMapping.toDomain(productteamdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Remove-all')")
    @ApiOperation(value = "删除产品团队", tags = {"产品团队" },  notes = "删除产品团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productteams/{productteam_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("productteam_id") Long productteam_id) {
         return ResponseEntity.status(HttpStatus.OK).body(productteamService.remove(productteam_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Remove-all')")
    @ApiOperation(value = "批量删除产品团队", tags = {"产品团队" },  notes = "批量删除产品团队")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productteams/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        productteamService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Get-all')")
    @ApiOperation(value = "获取产品团队", tags = {"产品团队" },  notes = "获取产品团队")
	@RequestMapping(method = RequestMethod.GET, value = "/productteams/{productteam_id}")
    public ResponseEntity<PRODUCTTEAMDTO> get(@PathVariable("productteam_id") Long productteam_id) {
        PRODUCTTEAM domain = productteamService.get(productteam_id);
        PRODUCTTEAMDTO dto = productteamMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取产品团队草稿", tags = {"产品团队" },  notes = "获取产品团队草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/productteams/getdraft")
    public ResponseEntity<PRODUCTTEAMDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(productteamMapping.toDto(productteamService.getDraft(new PRODUCTTEAM())));
    }

    @ApiOperation(value = "检查产品团队", tags = {"产品团队" },  notes = "检查产品团队")
	@RequestMapping(method = RequestMethod.POST, value = "/productteams/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody PRODUCTTEAMDTO productteamdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productteamService.checkKey(productteamMapping.toDomain(productteamdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Save-all')")
    @ApiOperation(value = "保存产品团队", tags = {"产品团队" },  notes = "保存产品团队")
	@RequestMapping(method = RequestMethod.POST, value = "/productteams/save")
    public ResponseEntity<Boolean> save(@RequestBody PRODUCTTEAMDTO productteamdto) {
        return ResponseEntity.status(HttpStatus.OK).body(productteamService.save(productteamMapping.toDomain(productteamdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-Save-all')")
    @ApiOperation(value = "批量保存产品团队", tags = {"产品团队" },  notes = "批量保存产品团队")
	@RequestMapping(method = RequestMethod.POST, value = "/productteams/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<PRODUCTTEAMDTO> productteamdtos) {
        productteamService.saveBatch(productteamMapping.toDomain(productteamdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-searchDefault-all')")
	@ApiOperation(value = "获取数据集", tags = {"产品团队" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/productteams/fetchdefault")
	public ResponseEntity<List<PRODUCTTEAMDTO>> fetchDefault(PRODUCTTEAMSearchContext context) {
        Page<PRODUCTTEAM> domains = productteamService.searchDefault(context) ;
        List<PRODUCTTEAMDTO> list = productteamMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-searchDefault-all')")
	@ApiOperation(value = "查询数据集", tags = {"产品团队" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/productteams/searchdefault")
	public ResponseEntity<Page<PRODUCTTEAMDTO>> searchDefault(@RequestBody PRODUCTTEAMSearchContext context) {
        Page<PRODUCTTEAM> domains = productteamService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productteamMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-searchProductTeamInfo-all')")
	@ApiOperation(value = "获取产品团队成员信息", tags = {"产品团队" } ,notes = "获取产品团队成员信息")
    @RequestMapping(method= RequestMethod.GET , value="/productteams/fetchproductteaminfo")
	public ResponseEntity<List<PRODUCTTEAMDTO>> fetchProductTeamInfo(PRODUCTTEAMSearchContext context) {
        Page<PRODUCTTEAM> domains = productteamService.searchProductTeamInfo(context) ;
        List<PRODUCTTEAMDTO> list = productteamMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PRODUCTTEAM-searchProductTeamInfo-all')")
	@ApiOperation(value = "查询产品团队成员信息", tags = {"产品团队" } ,notes = "查询产品团队成员信息")
    @RequestMapping(method= RequestMethod.POST , value="/productteams/searchproductteaminfo")
	public ResponseEntity<Page<PRODUCTTEAMDTO>> searchProductTeamInfo(@RequestBody PRODUCTTEAMSearchContext context) {
        Page<PRODUCTTEAM> domains = productteamService.searchProductTeamInfo(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productteamMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

