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
import cn.ibizlab.pms.core.zentao.domain.Burn;
import cn.ibizlab.pms.core.zentao.service.IBurnService;
import cn.ibizlab.pms.core.zentao.filter.BurnSearchContext;

@Slf4j
@Api(tags = {"burn" })
@RestController("WebApi-burn")
@RequestMapping("")
public class BurnResource {

    @Autowired
    public IBurnService burnService;

    @Autowired
    @Lazy
    public BurnMapping burnMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Create-all')")
    @ApiOperation(value = "新建burn", tags = {"burn" },  notes = "新建burn")
	@RequestMapping(method = RequestMethod.POST, value = "/burns")
    @Transactional
    public ResponseEntity<BurnDTO> create(@RequestBody BurnDTO burndto) {
        Burn domain = burnMapping.toDomain(burndto);
		burnService.create(domain);
        BurnDTO dto = burnMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Create-all')")
    @ApiOperation(value = "批量新建burn", tags = {"burn" },  notes = "批量新建burn")
	@RequestMapping(method = RequestMethod.POST, value = "/burns/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<BurnDTO> burndtos) {
        burnService.createBatch(burnMapping.toDomain(burndtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Get-all')")
    @ApiOperation(value = "获取burn", tags = {"burn" },  notes = "获取burn")
	@RequestMapping(method = RequestMethod.GET, value = "/burns/{burn_id}")
    public ResponseEntity<BurnDTO> get(@PathVariable("burn_id") String burn_id) {
        Burn domain = burnService.get(burn_id);
        BurnDTO dto = burnMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "检查burn", tags = {"burn" },  notes = "检查burn")
	@RequestMapping(method = RequestMethod.POST, value = "/burns/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody BurnDTO burndto) {
        return  ResponseEntity.status(HttpStatus.OK).body(burnService.checkKey(burnMapping.toDomain(burndto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Remove-all')")
    @ApiOperation(value = "删除burn", tags = {"burn" },  notes = "删除burn")
	@RequestMapping(method = RequestMethod.DELETE, value = "/burns/{burn_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("burn_id") String burn_id) {
         return ResponseEntity.status(HttpStatus.OK).body(burnService.remove(burn_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Remove-all')")
    @ApiOperation(value = "批量删除burn", tags = {"burn" },  notes = "批量删除burn")
	@RequestMapping(method = RequestMethod.DELETE, value = "/burns/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        burnService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Save-all')")
    @ApiOperation(value = "保存burn", tags = {"burn" },  notes = "保存burn")
	@RequestMapping(method = RequestMethod.POST, value = "/burns/save")
    public ResponseEntity<Boolean> save(@RequestBody BurnDTO burndto) {
        return ResponseEntity.status(HttpStatus.OK).body(burnService.save(burnMapping.toDomain(burndto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Save-all')")
    @ApiOperation(value = "批量保存burn", tags = {"burn" },  notes = "批量保存burn")
	@RequestMapping(method = RequestMethod.POST, value = "/burns/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<BurnDTO> burndtos) {
        burnService.saveBatch(burnMapping.toDomain(burndtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Update-all')")
    @ApiOperation(value = "更新burn", tags = {"burn" },  notes = "更新burn")
	@RequestMapping(method = RequestMethod.PUT, value = "/burns/{burn_id}")
    @Transactional
    public ResponseEntity<BurnDTO> update(@PathVariable("burn_id") String burn_id, @RequestBody BurnDTO burndto) {
		Burn domain  = burnMapping.toDomain(burndto);
        domain .setId(burn_id);
		burnService.update(domain );
		BurnDTO dto = burnMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Update-all')")
    @ApiOperation(value = "批量更新burn", tags = {"burn" },  notes = "批量更新burn")
	@RequestMapping(method = RequestMethod.PUT, value = "/burns/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<BurnDTO> burndtos) {
        burnService.updateBatch(burnMapping.toDomain(burndtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-ComputeBurn-all')")
    @ApiOperation(value = "更新燃尽图", tags = {"burn" },  notes = "更新燃尽图")
	@RequestMapping(method = RequestMethod.POST, value = "/burns/{burn_id}/computeburn")
    @Transactional
    public ResponseEntity<BurnDTO> computeBurn(@PathVariable("burn_id") String burn_id, @RequestBody BurnDTO burndto) {
        Burn burn = burnMapping.toDomain(burndto);
        burn.setId(burn_id);
        burn = burnService.computeBurn(burn);
        burndto = burnMapping.toDto(burn);
        return ResponseEntity.status(HttpStatus.OK).body(burndto);
    }

    @ApiOperation(value = "获取burn草稿", tags = {"burn" },  notes = "获取burn草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/burns/getdraft")
    public ResponseEntity<BurnDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(burnMapping.toDto(burnService.getDraft(new Burn())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Default-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"burn" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/burns/fetchdefault")
	public ResponseEntity<List<BurnDTO>> fetchDefault(BurnSearchContext context) {
        Page<Burn> domains = burnService.searchDefault(context) ;
        List<BurnDTO> list = burnMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Burn-Default-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"burn" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/burns/searchdefault")
	public ResponseEntity<Page<BurnDTO>> searchDefault(@RequestBody BurnSearchContext context) {
        Page<Burn> domains = burnService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(burnMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

