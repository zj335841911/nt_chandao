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
import cn.ibizlab.pms.core.zentao.domain.Release;
import cn.ibizlab.pms.core.zentao.service.IReleaseService;
import cn.ibizlab.pms.core.zentao.filter.ReleaseSearchContext;

@Slf4j
@Api(tags = {"Release" })
@RestController("WebApi-release")
@RequestMapping("")
public class ReleaseResource {

    @Autowired
    private IReleaseService releaseService;

    @Autowired
    @Lazy
    public ReleaseMapping releaseMapping;

    public ReleaseDTO permissionDTO=new ReleaseDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"Release" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ReleaseDTO releasedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(releaseService.checkKey(releaseMapping.toDomain(releasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Get-all')")
    @ApiOperation(value = "Get", tags = {"Release" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/releases/{release_id}")
    public ResponseEntity<ReleaseDTO> get(@PathVariable("release_id") BigInteger release_id) {
        Release domain = releaseService.get(release_id);
        ReleaseDTO dto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Save-all')")
    @ApiOperation(value = "Save", tags = {"Release" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/save")
    public ResponseEntity<Boolean> save(@RequestBody ReleaseDTO releasedto) {
        return ResponseEntity.status(HttpStatus.OK).body(releaseService.save(releaseMapping.toDomain(releasedto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatch", tags = {"Release" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ReleaseDTO> releasedtos) {
        releaseService.saveBatch(releaseMapping.toDomain(releasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Create-all')")
    @ApiOperation(value = "Create", tags = {"Release" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/releases")
    @Transactional
    public ResponseEntity<ReleaseDTO> create(@RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
		releaseService.create(domain);
        ReleaseDTO dto = releaseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatch", tags = {"Release" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ReleaseDTO> releasedtos) {
        releaseService.createBatch(releaseMapping.toDomain(releasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"Release" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/releases/getdraft")
    public ResponseEntity<ReleaseDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(releaseMapping.toDto(releaseService.getDraft(new Release())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Update-all')")
    @ApiOperation(value = "Update", tags = {"Release" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/releases/{release_id}")
    @Transactional
    public ResponseEntity<ReleaseDTO> update(@PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
		Release domain = releaseMapping.toDomain(releasedto);
        domain.setId(release_id);
		releaseService.update(domain);
		ReleaseDTO dto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"Release" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/releases/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ReleaseDTO> releasedtos) {
        releaseService.updateBatch(releaseMapping.toDomain(releasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Release" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/releases/{release_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("release_id") BigInteger release_id) {
         return ResponseEntity.status(HttpStatus.OK).body(releaseService.remove(release_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"Release" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/releases/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        releaseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Release" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/releases/fetchdefault")
	public ResponseEntity<List<ReleaseDTO>> fetchDefault(ReleaseSearchContext context) {
        Page<Release> domains = releaseService.searchDefault(context) ;
        List<ReleaseDTO> list = releaseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Release" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/releases/searchdefault")
	public ResponseEntity<Page<ReleaseDTO>> searchDefault(@RequestBody ReleaseSearchContext context) {
        Page<Release> domains = releaseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(releaseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByProduct", tags = {"Release" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseDTO releasedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(releaseService.checkKey(releaseMapping.toDomain(releasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"Release" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/releases/{release_id}")
    public ResponseEntity<ReleaseDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id) {
        Release domain = releaseService.get(release_id);
        ReleaseDTO dto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"Release" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(releaseService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"Release" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ReleaseDTO> releasedtos) {
        List<Release> domainlist=releaseMapping.toDomain(releasedtos);
        for(Release domain:domainlist){
             domain.setProduct(product_id);
        }
        releaseService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"Release" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases")
    @Transactional
    public ResponseEntity<ReleaseDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
		releaseService.create(domain);
        ReleaseDTO dto = releaseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatchByProduct", tags = {"Release" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ReleaseDTO> releasedtos) {
        List<Release> domainlist=releaseMapping.toDomain(releasedtos);
        for(Release domain:domainlist){
            domain.setProduct(product_id);
        }
        releaseService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-GetDraft-all')")
    @ApiOperation(value = "GetDraftByProduct", tags = {"Release" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/releases/getdraft")
    public ResponseEntity<ReleaseDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Release domain = new Release();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(releaseMapping.toDto(releaseService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"Release" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/releases/{release_id}")
    @Transactional
    public ResponseEntity<ReleaseDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
        domain.setId(release_id);
		releaseService.update(domain);
        ReleaseDTO dto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"Release" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/releases/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ReleaseDTO> releasedtos) {
        List<Release> domainlist=releaseMapping.toDomain(releasedtos);
        for(Release domain:domainlist){
            domain.setProduct(product_id);
        }
        releaseService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"Release" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/releases/{release_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id) {
		return ResponseEntity.status(HttpStatus.OK).body(releaseService.remove(release_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"Release" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/releases/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        releaseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"Release" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/releases/fetchdefault")
	public ResponseEntity<List<ReleaseDTO>> fetchReleaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id,ReleaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Release> domains = releaseService.searchDefault(context) ;
        List<ReleaseDTO> list = releaseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"Release" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/releases/searchdefault")
	public ResponseEntity<Page<ReleaseDTO>> searchReleaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Release> domains = releaseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(releaseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
