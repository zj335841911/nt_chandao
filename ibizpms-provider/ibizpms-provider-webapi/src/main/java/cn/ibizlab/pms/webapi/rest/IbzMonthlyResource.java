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
import cn.ibizlab.pms.core.report.domain.IbzMonthly;
import cn.ibizlab.pms.core.report.service.IIbzMonthlyService;
import cn.ibizlab.pms.core.report.filter.IbzMonthlySearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"月报" })
@RestController("WebApi-ibzmonthly")
@RequestMapping("")
public class IbzMonthlyResource {

    @Autowired
    public IIbzMonthlyService ibzmonthlyService;

    @Autowired
    @Lazy
    public IbzMonthlyMapping ibzmonthlyMapping;

    @PreAuthorize("hasPermission(this.ibzmonthlyMapping.toDomain(#ibzmonthlydto),'pms-IbzMonthly-Create')")
    @ApiOperation(value = "新建月报", tags = {"月报" },  notes = "新建月报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies")
    public ResponseEntity<IbzMonthlyDTO> create(@Validated @RequestBody IbzMonthlyDTO ibzmonthlydto) {
        IbzMonthly domain = ibzmonthlyMapping.toDomain(ibzmonthlydto);
		ibzmonthlyService.create(domain);
        IbzMonthlyDTO dto = ibzmonthlyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzmonthlyMapping.toDomain(#ibzmonthlydtos),'pms-IbzMonthly-Create')")
    @ApiOperation(value = "批量新建月报", tags = {"月报" },  notes = "批量新建月报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IbzMonthlyDTO> ibzmonthlydtos) {
        ibzmonthlyService.createBatch(ibzmonthlyMapping.toDomain(ibzmonthlydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "ibzmonthly" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.ibzmonthlyService.get(#ibzmonthly_id),'pms-IbzMonthly-Update')")
    @ApiOperation(value = "更新月报", tags = {"月报" },  notes = "更新月报")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzmonthlies/{ibzmonthly_id}")
    public ResponseEntity<IbzMonthlyDTO> update(@PathVariable("ibzmonthly_id") Long ibzmonthly_id, @RequestBody IbzMonthlyDTO ibzmonthlydto) {
		IbzMonthly domain  = ibzmonthlyMapping.toDomain(ibzmonthlydto);
        domain .setIbzmonthlyid(ibzmonthly_id);
		ibzmonthlyService.update(domain );
		IbzMonthlyDTO dto = ibzmonthlyMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzmonthlyService.getIbzmonthlyByEntities(this.ibzmonthlyMapping.toDomain(#ibzmonthlydtos)),'pms-IbzMonthly-Update')")
    @ApiOperation(value = "批量更新月报", tags = {"月报" },  notes = "批量更新月报")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzmonthlies/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IbzMonthlyDTO> ibzmonthlydtos) {
        ibzmonthlyService.updateBatch(ibzmonthlyMapping.toDomain(ibzmonthlydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibzmonthlyService.get(#ibzmonthly_id),'pms-IbzMonthly-Remove')")
    @ApiOperation(value = "删除月报", tags = {"月报" },  notes = "删除月报")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzmonthlies/{ibzmonthly_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibzmonthly_id") Long ibzmonthly_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzmonthlyService.remove(ibzmonthly_id));
    }

    @PreAuthorize("hasPermission(this.ibzmonthlyService.getIbzmonthlyByIds(#ids),'pms-IbzMonthly-Remove')")
    @ApiOperation(value = "批量删除月报", tags = {"月报" },  notes = "批量删除月报")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzmonthlies/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        ibzmonthlyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibzmonthlyMapping.toDomain(returnObject.body),'pms-IbzMonthly-Get')")
    @ApiOperation(value = "获取月报", tags = {"月报" },  notes = "获取月报")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzmonthlies/{ibzmonthly_id}")
    public ResponseEntity<IbzMonthlyDTO> get(@PathVariable("ibzmonthly_id") Long ibzmonthly_id) {
        IbzMonthly domain = ibzmonthlyService.get(ibzmonthly_id);
        IbzMonthlyDTO dto = ibzmonthlyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取月报草稿", tags = {"月报" },  notes = "获取月报草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzmonthlies/getdraft")
    public ResponseEntity<IbzMonthlyDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibzmonthlyMapping.toDto(ibzmonthlyService.getDraft(new IbzMonthly())));
    }

    @ApiOperation(value = "检查月报", tags = {"月报" },  notes = "检查月报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IbzMonthlyDTO ibzmonthlydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzmonthlyService.checkKey(ibzmonthlyMapping.toDomain(ibzmonthlydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzMonthly-CreateUserMonthly-all')")
    @ApiOperation(value = "定时生成用户月报", tags = {"月报" },  notes = "定时生成用户月报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies/{ibzmonthly_id}/createusermonthly")
    public ResponseEntity<IbzMonthlyDTO> createUserMonthly(@PathVariable("ibzmonthly_id") Long ibzmonthly_id, @RequestBody IbzMonthlyDTO ibzmonthlydto) {
        IbzMonthly domain = ibzmonthlyMapping.toDomain(ibzmonthlydto);
        domain.setIbzmonthlyid(ibzmonthly_id);
        domain = ibzmonthlyService.createUserMonthly(domain);
        ibzmonthlydto = ibzmonthlyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzmonthlydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzMonthly-HaveRead-all')")
    @ApiOperation(value = "已读", tags = {"月报" },  notes = "已读")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies/{ibzmonthly_id}/haveread")
    public ResponseEntity<IbzMonthlyDTO> haveRead(@PathVariable("ibzmonthly_id") Long ibzmonthly_id, @RequestBody IbzMonthlyDTO ibzmonthlydto) {
        IbzMonthly domain = ibzmonthlyMapping.toDomain(ibzmonthlydto);
        domain.setIbzmonthlyid(ibzmonthly_id);
        domain = ibzmonthlyService.haveRead(domain);
        ibzmonthlydto = ibzmonthlyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzmonthlydto);
    }

    @PreAuthorize("hasPermission(this.ibzmonthlyMapping.toDomain(#ibzmonthlydto),'pms-IbzMonthly-Save')")
    @ApiOperation(value = "保存月报", tags = {"月报" },  notes = "保存月报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies/save")
    public ResponseEntity<Boolean> save(@RequestBody IbzMonthlyDTO ibzmonthlydto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibzmonthlyService.save(ibzmonthlyMapping.toDomain(ibzmonthlydto)));
    }

    @PreAuthorize("hasPermission(this.ibzmonthlyMapping.toDomain(#ibzmonthlydtos),'pms-IbzMonthly-Save')")
    @ApiOperation(value = "批量保存月报", tags = {"月报" },  notes = "批量保存月报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IbzMonthlyDTO> ibzmonthlydtos) {
        ibzmonthlyService.saveBatch(ibzmonthlyMapping.toDomain(ibzmonthlydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzMonthly-Submit-all')")
    @ApiOperation(value = "提交", tags = {"月报" },  notes = "提交")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzmonthlies/{ibzmonthly_id}/submit")
    public ResponseEntity<IbzMonthlyDTO> submit(@PathVariable("ibzmonthly_id") Long ibzmonthly_id, @RequestBody IbzMonthlyDTO ibzmonthlydto) {
        IbzMonthly domain = ibzmonthlyMapping.toDomain(ibzmonthlydto);
        domain.setIbzmonthlyid(ibzmonthly_id);
        domain = ibzmonthlyService.submit(domain);
        ibzmonthlydto = ibzmonthlyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzmonthlydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzMonthly-searchDefault-all') and hasPermission(#context,'pms-IbzMonthly-Get')")
	@ApiOperation(value = "获取数据集", tags = {"月报" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibzmonthlies/fetchdefault")
	public ResponseEntity<List<IbzMonthlyDTO>> fetchDefault(IbzMonthlySearchContext context) {
        Page<IbzMonthly> domains = ibzmonthlyService.searchDefault(context) ;
        List<IbzMonthlyDTO> list = ibzmonthlyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzMonthly-searchDefault-all') and hasPermission(#context,'pms-IbzMonthly-Get')")
	@ApiOperation(value = "查询数据集", tags = {"月报" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibzmonthlies/searchdefault")
	public ResponseEntity<Page<IbzMonthlyDTO>> searchDefault(@RequestBody IbzMonthlySearchContext context) {
        Page<IbzMonthly> domains = ibzmonthlyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzmonthlyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzMonthly-searchMyDaily-all') and hasPermission(#context,'pms-IbzMonthly-Get')")
	@ApiOperation(value = "获取我的待阅月报", tags = {"月报" } ,notes = "获取我的待阅月报")
    @RequestMapping(method= RequestMethod.GET , value="/ibzmonthlies/fetchmydaily")
	public ResponseEntity<List<IbzMonthlyDTO>> fetchMyDaily(IbzMonthlySearchContext context) {
        Page<IbzMonthly> domains = ibzmonthlyService.searchMyDaily(context) ;
        List<IbzMonthlyDTO> list = ibzmonthlyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzMonthly-searchMyDaily-all') and hasPermission(#context,'pms-IbzMonthly-Get')")
	@ApiOperation(value = "查询我的待阅月报", tags = {"月报" } ,notes = "查询我的待阅月报")
    @RequestMapping(method= RequestMethod.POST , value="/ibzmonthlies/searchmydaily")
	public ResponseEntity<Page<IbzMonthlyDTO>> searchMyDaily(@RequestBody IbzMonthlySearchContext context) {
        Page<IbzMonthly> domains = ibzmonthlyService.searchMyDaily(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzmonthlyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

