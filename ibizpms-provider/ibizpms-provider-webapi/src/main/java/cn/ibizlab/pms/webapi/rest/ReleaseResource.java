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
import cn.ibizlab.pms.core.zentao.domain.Release;
import cn.ibizlab.pms.core.zentao.service.IReleaseService;
import cn.ibizlab.pms.core.zentao.filter.ReleaseSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"发布" })
@RestController("WebApi-release")
@RequestMapping("")
public class ReleaseResource {

    @Autowired
    public IReleaseService releaseService;

    @Autowired
    @Lazy
    public ReleaseMapping releaseMapping;

    @ApiOperation(value = "检查发布", tags = {"发布" },  notes = "检查发布")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ReleaseDTO releasedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(releaseService.checkKey(releaseMapping.toDomain(releasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Terminate-all')")
    @ApiOperation(value = "状态变更（停止维护）", tags = {"发布" },  notes = "状态变更（停止维护）")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/{release_id}/terminate")
    @Transactional
    public ResponseEntity<ReleaseDTO> terminate(@PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setId(release_id);
        domain = releaseService.terminate(domain);
        releasedto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(releasedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Activate-all')")
    @ApiOperation(value = "状态变更（激活）", tags = {"发布" },  notes = "状态变更（激活）")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/{release_id}/activate")
    @Transactional
    public ResponseEntity<ReleaseDTO> activate(@PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setId(release_id);
        domain = releaseService.activate(domain);
        releasedto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(releasedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Get-all')")
    @ApiOperation(value = "获取发布", tags = {"发布" },  notes = "获取发布")
	@RequestMapping(method = RequestMethod.GET, value = "/releases/{release_id}")
    public ResponseEntity<ReleaseDTO> get(@PathVariable("release_id") BigInteger release_id) {
        Release domain = releaseService.get(release_id);
        ReleaseDTO dto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Save-all')")
    @ApiOperation(value = "保存发布", tags = {"发布" },  notes = "保存发布")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/save")
    public ResponseEntity<Boolean> save(@RequestBody ReleaseDTO releasedto) {
        return ResponseEntity.status(HttpStatus.OK).body(releaseService.save(releaseMapping.toDomain(releasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Save-all')")
    @ApiOperation(value = "批量保存发布", tags = {"发布" },  notes = "批量保存发布")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ReleaseDTO> releasedtos) {
        releaseService.saveBatch(releaseMapping.toDomain(releasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-ChangeStatus-all')")
    @ApiOperation(value = "状态变更", tags = {"发布" },  notes = "状态变更")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/{release_id}/changestatus")
    @Transactional
    public ResponseEntity<ReleaseDTO> changeStatus(@PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setId(release_id);
        domain = releaseService.changeStatus(domain);
        releasedto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(releasedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Create-all')")
    @ApiOperation(value = "新建发布", tags = {"发布" },  notes = "新建发布")
	@RequestMapping(method = RequestMethod.POST, value = "/releases")
    @Transactional
    public ResponseEntity<ReleaseDTO> create(@RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
		releaseService.create(domain);
        ReleaseDTO dto = releaseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Create-all')")
    @ApiOperation(value = "批量新建发布", tags = {"发布" },  notes = "批量新建发布")
	@RequestMapping(method = RequestMethod.POST, value = "/releases/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ReleaseDTO> releasedtos) {
        releaseService.createBatch(releaseMapping.toDomain(releasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "获取发布草稿", tags = {"发布" },  notes = "获取发布草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/releases/getdraft")
    public ResponseEntity<ReleaseDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(releaseMapping.toDto(releaseService.getDraft(new Release())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Update-all')")
    @ApiOperation(value = "更新发布", tags = {"发布" },  notes = "更新发布")
	@RequestMapping(method = RequestMethod.PUT, value = "/releases/{release_id}")
    @Transactional
    public ResponseEntity<ReleaseDTO> update(@PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
		Release domain  = releaseMapping.toDomain(releasedto);
        domain .setId(release_id);
		releaseService.update(domain );
		ReleaseDTO dto = releaseMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Update-all')")
    @ApiOperation(value = "批量更新发布", tags = {"发布" },  notes = "批量更新发布")
	@RequestMapping(method = RequestMethod.PUT, value = "/releases/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ReleaseDTO> releasedtos) {
        releaseService.updateBatch(releaseMapping.toDomain(releasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Remove-all')")
    @ApiOperation(value = "删除发布", tags = {"发布" },  notes = "删除发布")
	@RequestMapping(method = RequestMethod.DELETE, value = "/releases/{release_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("release_id") BigInteger release_id) {
         return ResponseEntity.status(HttpStatus.OK).body(releaseService.remove(release_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Remove-all')")
    @ApiOperation(value = "批量删除发布", tags = {"发布" },  notes = "批量删除发布")
	@RequestMapping(method = RequestMethod.DELETE, value = "/releases/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        releaseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"发布" } ,notes = "获取DEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"发布" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/releases/searchdefault")
	public ResponseEntity<Page<ReleaseDTO>> searchDefault(@RequestBody ReleaseSearchContext context) {
        Page<Release> domains = releaseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(releaseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @ApiOperation(value = "根据产品检查发布", tags = {"发布" },  notes = "根据产品检查发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseDTO releasedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(releaseService.checkKey(releaseMapping.toDomain(releasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Terminate-all')")
    @ApiOperation(value = "根据产品发布", tags = {"发布" },  notes = "根据产品发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/{release_id}/terminate")
    @Transactional
    public ResponseEntity<ReleaseDTO> terminateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
        domain = releaseService.terminate(domain) ;
        releasedto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(releasedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Activate-all')")
    @ApiOperation(value = "根据产品发布", tags = {"发布" },  notes = "根据产品发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/{release_id}/activate")
    @Transactional
    public ResponseEntity<ReleaseDTO> activateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
        domain = releaseService.activate(domain) ;
        releasedto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(releasedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Get-all')")
    @ApiOperation(value = "根据产品获取发布", tags = {"发布" },  notes = "根据产品获取发布")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/releases/{release_id}")
    public ResponseEntity<ReleaseDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id) {
        Release domain = releaseService.get(release_id);
        ReleaseDTO dto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Save-all')")
    @ApiOperation(value = "根据产品保存发布", tags = {"发布" },  notes = "根据产品保存发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(releaseService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Save-all')")
    @ApiOperation(value = "根据产品批量保存发布", tags = {"发布" },  notes = "根据产品批量保存发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ReleaseDTO> releasedtos) {
        List<Release> domainlist=releaseMapping.toDomain(releasedtos);
        for(Release domain:domainlist){
             domain.setProduct(product_id);
        }
        releaseService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-ChangeStatus-all')")
    @ApiOperation(value = "根据产品发布", tags = {"发布" },  notes = "根据产品发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/{release_id}/changestatus")
    @Transactional
    public ResponseEntity<ReleaseDTO> changeStatusByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
        domain = releaseService.changeStatus(domain) ;
        releasedto = releaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(releasedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Create-all')")
    @ApiOperation(value = "根据产品建立发布", tags = {"发布" },  notes = "根据产品建立发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases")
    @Transactional
    public ResponseEntity<ReleaseDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseDTO releasedto) {
        Release domain = releaseMapping.toDomain(releasedto);
        domain.setProduct(product_id);
		releaseService.create(domain);
        ReleaseDTO dto = releaseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Create-all')")
    @ApiOperation(value = "根据产品批量建立发布", tags = {"发布" },  notes = "根据产品批量建立发布")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/releases/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ReleaseDTO> releasedtos) {
        List<Release> domainlist=releaseMapping.toDomain(releasedtos);
        for(Release domain:domainlist){
            domain.setProduct(product_id);
        }
        releaseService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "根据产品获取发布草稿", tags = {"发布" },  notes = "根据产品获取发布草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/releases/getdraft")
    public ResponseEntity<ReleaseDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Release domain = new Release();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(releaseMapping.toDto(releaseService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Update-all')")
    @ApiOperation(value = "根据产品更新发布", tags = {"发布" },  notes = "根据产品更新发布")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Update-all')")
    @ApiOperation(value = "根据产品批量更新发布", tags = {"发布" },  notes = "根据产品批量更新发布")
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
    @ApiOperation(value = "根据产品删除发布", tags = {"发布" },  notes = "根据产品删除发布")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/releases/{release_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("release_id") BigInteger release_id) {
		return ResponseEntity.status(HttpStatus.OK).body(releaseService.remove(release_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-Remove-all')")
    @ApiOperation(value = "根据产品批量删除发布", tags = {"发布" },  notes = "根据产品批量删除发布")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/releases/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        releaseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"发布" } ,notes = "根据产品获取DEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Release-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"发布" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/releases/searchdefault")
	public ResponseEntity<Page<ReleaseDTO>> searchReleaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ReleaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Release> domains = releaseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(releaseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

