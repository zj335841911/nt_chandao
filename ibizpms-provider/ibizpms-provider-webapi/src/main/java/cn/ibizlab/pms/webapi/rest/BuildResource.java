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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.zentao.domain.Build;
import cn.ibizlab.pms.core.zentao.service.IBuildService;
import cn.ibizlab.pms.core.zentao.filter.BuildSearchContext;

@Slf4j
@Api(tags = {"Build" })
@RestController("WebApi-build")
@RequestMapping("")
public class BuildResource {

    @Autowired
    private IBuildService buildService;

    @Autowired
    @Lazy
    public BuildMapping buildMapping;

    public BuildDTO permissionDTO=new BuildDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"Build" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/builds/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody BuildDTO builddto) {
        return  ResponseEntity.status(HttpStatus.OK).body(buildService.checkKey(buildMapping.toDomain(builddto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Save-all')")
    @ApiOperation(value = "Save", tags = {"Build" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/builds/save")
    public ResponseEntity<Boolean> save(@RequestBody BuildDTO builddto) {
        return ResponseEntity.status(HttpStatus.OK).body(buildService.save(buildMapping.toDomain(builddto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.buildMapping,#builddtos})")
    @ApiOperation(value = "SaveBatch", tags = {"Build" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/builds/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<BuildDTO> builddtos) {
        buildService.saveBatch(buildMapping.toDomain(builddtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Get-all')")
    @ApiOperation(value = "Get", tags = {"Build" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/builds/{build_id}")
    public ResponseEntity<BuildDTO> get(@PathVariable("build_id") BigInteger build_id) {
        Build domain = buildService.get(build_id);
        BuildDTO dto = buildMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"Build" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/builds/getdraft")
    public ResponseEntity<BuildDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(buildMapping.toDto(buildService.getDraft(new Build())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Build" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/builds/{build_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("build_id") BigInteger build_id) {
         return ResponseEntity.status(HttpStatus.OK).body(buildService.remove(build_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.buildMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"Build" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/builds/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        buildService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Create-all')")
    @ApiOperation(value = "Create", tags = {"Build" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/builds")
    @Transactional
    public ResponseEntity<BuildDTO> create(@RequestBody BuildDTO builddto) {
        Build domain = buildMapping.toDomain(builddto);
		buildService.create(domain);
        BuildDTO dto = buildMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.buildMapping,#builddtos})")
    @ApiOperation(value = "createBatch", tags = {"Build" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/builds/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<BuildDTO> builddtos) {
        buildService.createBatch(buildMapping.toDomain(builddtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Update-all')")
    @ApiOperation(value = "Update", tags = {"Build" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/builds/{build_id}")
    @Transactional
    public ResponseEntity<BuildDTO> update(@PathVariable("build_id") BigInteger build_id, @RequestBody BuildDTO builddto) {
		Build domain  = buildMapping.toDomain(builddto);
        domain .setId(build_id);
		buildService.update(domain );
		BuildDTO dto = buildMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.buildMapping,#builddtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"Build" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/builds/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<BuildDTO> builddtos) {
        buildService.updateBatch(buildMapping.toDomain(builddtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Build" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/builds/fetchdefault")
	public ResponseEntity<List<BuildDTO>> fetchDefault(BuildSearchContext context) {
        Page<Build> domains = buildService.searchDefault(context) ;
        List<BuildDTO> list = buildMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Build" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/builds/searchdefault")
	public ResponseEntity<Page<BuildDTO>> searchDefault(@RequestBody BuildSearchContext context) {
        Page<Build> domains = buildService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(buildMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByProduct", tags = {"Build" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/builds/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BuildDTO builddto) {
        return  ResponseEntity.status(HttpStatus.OK).body(buildService.checkKey(buildMapping.toDomain(builddto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"Build" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/builds/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BuildDTO builddto) {
        Build domain = buildMapping.toDomain(builddto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(buildService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.buildMapping,#builddtos})")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"Build" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/builds/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BuildDTO> builddtos) {
        List<Build> domainlist=buildMapping.toDomain(builddtos);
        for(Build domain:domainlist){
             domain.setProduct(product_id);
        }
        buildService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"Build" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/builds/{build_id}")
    public ResponseEntity<BuildDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("build_id") BigInteger build_id) {
        Build domain = buildService.get(build_id);
        BuildDTO dto = buildMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-GetDraft-all')")
    @ApiOperation(value = "GetDraftByProduct", tags = {"Build" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/builds/getdraft")
    public ResponseEntity<BuildDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Build domain = new Build();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(buildMapping.toDto(buildService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"Build" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/builds/{build_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("build_id") BigInteger build_id) {
		return ResponseEntity.status(HttpStatus.OK).body(buildService.remove(build_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.buildMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"Build" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/builds/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        buildService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"Build" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/builds")
    @Transactional
    public ResponseEntity<BuildDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BuildDTO builddto) {
        Build domain = buildMapping.toDomain(builddto);
        domain.setProduct(product_id);
		buildService.create(domain);
        BuildDTO dto = buildMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.buildMapping,#builddtos})")
    @ApiOperation(value = "createBatchByProduct", tags = {"Build" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/builds/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BuildDTO> builddtos) {
        List<Build> domainlist=buildMapping.toDomain(builddtos);
        for(Build domain:domainlist){
            domain.setProduct(product_id);
        }
        buildService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"Build" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/builds/{build_id}")
    @Transactional
    public ResponseEntity<BuildDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("build_id") BigInteger build_id, @RequestBody BuildDTO builddto) {
        Build domain = buildMapping.toDomain(builddto);
        domain.setProduct(product_id);
        domain.setId(build_id);
		buildService.update(domain);
        BuildDTO dto = buildMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.buildMapping,#builddtos})")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"Build" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/builds/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BuildDTO> builddtos) {
        List<Build> domainlist=buildMapping.toDomain(builddtos);
        for(Build domain:domainlist){
            domain.setProduct(product_id);
        }
        buildService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"Build" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/builds/fetchdefault")
	public ResponseEntity<List<BuildDTO>> fetchBuildDefaultByProduct(@PathVariable("product_id") BigInteger product_id,BuildSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Build> domains = buildService.searchDefault(context) ;
        List<BuildDTO> list = buildMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Build-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"Build" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/builds/searchdefault")
	public ResponseEntity<Page<BuildDTO>> searchBuildDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BuildSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Build> domains = buildService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(buildMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
