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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryModuleService;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStoryModuleSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"需求模块" })
@RestController("WebApi-ibzprostorymodule")
@RequestMapping("")
public class IBZProStoryModuleResource {

    @Autowired
    public IIBZProStoryModuleService ibzprostorymoduleService;

    @Autowired
    @Lazy
    public IBZProStoryModuleMapping ibzprostorymoduleMapping;

    @PreAuthorize("hasPermission(this.ibzprostorymoduleMapping.toDomain(#ibzprostorymoduledto),'pms-IBZProStoryModule-Create')")
    @ApiOperation(value = "新建需求模块", tags = {"需求模块" },  notes = "新建需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprostorymodules")
    public ResponseEntity<IBZProStoryModuleDTO> create(@RequestBody IBZProStoryModuleDTO ibzprostorymoduledto) {
        IBZProStoryModule domain = ibzprostorymoduleMapping.toDomain(ibzprostorymoduledto);
		ibzprostorymoduleService.create(domain);
        IBZProStoryModuleDTO dto = ibzprostorymoduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzprostorymoduleMapping.toDomain(#ibzprostorymoduledtos),'pms-IBZProStoryModule-Create')")
    @ApiOperation(value = "批量新建需求模块", tags = {"需求模块" },  notes = "批量新建需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprostorymodules/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IBZProStoryModuleDTO> ibzprostorymoduledtos) {
        ibzprostorymoduleService.createBatch(ibzprostorymoduleMapping.toDomain(ibzprostorymoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "ibzprostorymodule" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.ibzprostorymoduleService.get(#ibzprostorymodule_id),'pms-IBZProStoryModule-Update')")
    @ApiOperation(value = "更新需求模块", tags = {"需求模块" },  notes = "更新需求模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzprostorymodules/{ibzprostorymodule_id}")
    public ResponseEntity<IBZProStoryModuleDTO> update(@PathVariable("ibzprostorymodule_id") String ibzprostorymodule_id, @RequestBody IBZProStoryModuleDTO ibzprostorymoduledto) {
		IBZProStoryModule domain  = ibzprostorymoduleMapping.toDomain(ibzprostorymoduledto);
        domain .setIbzprostorymoduleid(ibzprostorymodule_id);
		ibzprostorymoduleService.update(domain );
		IBZProStoryModuleDTO dto = ibzprostorymoduleMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzprostorymoduleService.getIbzprostorymoduleByEntities(this.ibzprostorymoduleMapping.toDomain(#ibzprostorymoduledtos)),'pms-IBZProStoryModule-Update')")
    @ApiOperation(value = "批量更新需求模块", tags = {"需求模块" },  notes = "批量更新需求模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzprostorymodules/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IBZProStoryModuleDTO> ibzprostorymoduledtos) {
        ibzprostorymoduleService.updateBatch(ibzprostorymoduleMapping.toDomain(ibzprostorymoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibzprostorymoduleService.get(#ibzprostorymodule_id),'pms-IBZProStoryModule-Remove')")
    @ApiOperation(value = "删除需求模块", tags = {"需求模块" },  notes = "删除需求模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzprostorymodules/{ibzprostorymodule_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibzprostorymodule_id") String ibzprostorymodule_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzprostorymoduleService.remove(ibzprostorymodule_id));
    }

    @PreAuthorize("hasPermission(this.ibzprostorymoduleService.getIbzprostorymoduleByIds(#ids),'pms-IBZProStoryModule-Remove')")
    @ApiOperation(value = "批量删除需求模块", tags = {"需求模块" },  notes = "批量删除需求模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzprostorymodules/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        ibzprostorymoduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibzprostorymoduleMapping.toDomain(returnObject.body),'pms-IBZProStoryModule-Get')")
    @ApiOperation(value = "获取需求模块", tags = {"需求模块" },  notes = "获取需求模块")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzprostorymodules/{ibzprostorymodule_id}")
    public ResponseEntity<IBZProStoryModuleDTO> get(@PathVariable("ibzprostorymodule_id") String ibzprostorymodule_id) {
        IBZProStoryModule domain = ibzprostorymoduleService.get(ibzprostorymodule_id);
        IBZProStoryModuleDTO dto = ibzprostorymoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取需求模块草稿", tags = {"需求模块" },  notes = "获取需求模块草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzprostorymodules/getdraft")
    public ResponseEntity<IBZProStoryModuleDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibzprostorymoduleMapping.toDto(ibzprostorymoduleService.getDraft(new IBZProStoryModule())));
    }

    @ApiOperation(value = "检查需求模块", tags = {"需求模块" },  notes = "检查需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprostorymodules/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IBZProStoryModuleDTO ibzprostorymoduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzprostorymoduleService.checkKey(ibzprostorymoduleMapping.toDomain(ibzprostorymoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZProStoryModule-Push-all')")
    @ApiOperation(value = "推送", tags = {"需求模块" },  notes = "推送")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprostorymodules/{ibzprostorymodule_id}/push")
    public ResponseEntity<IBZProStoryModuleDTO> push(@PathVariable("ibzprostorymodule_id") String ibzprostorymodule_id, @RequestBody IBZProStoryModuleDTO ibzprostorymoduledto) {
        IBZProStoryModule domain = ibzprostorymoduleMapping.toDomain(ibzprostorymoduledto);
        domain.setIbzprostorymoduleid(ibzprostorymodule_id);
        domain = ibzprostorymoduleService.push(domain);
        ibzprostorymoduledto = ibzprostorymoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzprostorymoduledto);
    }

    @PreAuthorize("hasPermission(this.ibzprostorymoduleMapping.toDomain(#ibzprostorymoduledto),'pms-IBZProStoryModule-Save')")
    @ApiOperation(value = "保存需求模块", tags = {"需求模块" },  notes = "保存需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprostorymodules/save")
    public ResponseEntity<Boolean> save(@RequestBody IBZProStoryModuleDTO ibzprostorymoduledto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibzprostorymoduleService.save(ibzprostorymoduleMapping.toDomain(ibzprostorymoduledto)));
    }

    @PreAuthorize("hasPermission(this.ibzprostorymoduleMapping.toDomain(#ibzprostorymoduledtos),'pms-IBZProStoryModule-Save')")
    @ApiOperation(value = "批量保存需求模块", tags = {"需求模块" },  notes = "批量保存需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprostorymodules/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IBZProStoryModuleDTO> ibzprostorymoduledtos) {
        ibzprostorymoduleService.saveBatch(ibzprostorymoduleMapping.toDomain(ibzprostorymoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZProStoryModule-searchDefault-all') and hasPermission(#context,'pms-IBZProStoryModule-Get')")
	@ApiOperation(value = "获取数据集", tags = {"需求模块" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibzprostorymodules/fetchdefault")
	public ResponseEntity<List<IBZProStoryModuleDTO>> fetchDefault(IBZProStoryModuleSearchContext context) {
        Page<IBZProStoryModule> domains = ibzprostorymoduleService.searchDefault(context) ;
        List<IBZProStoryModuleDTO> list = ibzprostorymoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZProStoryModule-searchDefault-all') and hasPermission(#context,'pms-IBZProStoryModule-Get')")
	@ApiOperation(value = "查询数据集", tags = {"需求模块" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibzprostorymodules/searchdefault")
	public ResponseEntity<Page<IBZProStoryModuleDTO>> searchDefault(@RequestBody IBZProStoryModuleSearchContext context) {
        Page<IBZProStoryModule> domains = ibzprostorymoduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzprostorymoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

