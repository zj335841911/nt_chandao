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
import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.zentao.service.IStoryService;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;

@Slf4j
@Api(tags = {"Story" })
@RestController("WebApi-story")
@RequestMapping("")
public class StoryResource {

    @Autowired
    private IStoryService storyService;

    @Autowired
    @Lazy
    public StoryMapping storyMapping;

    public StoryDTO permissionDTO=new StoryDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"Story" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/getdraft")
    public ResponseEntity<StoryDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(storyService.getDraft(new Story())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Create-all')")
    @ApiOperation(value = "Create", tags = {"Story" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/stories")
    @Transactional
    public ResponseEntity<StoryDTO> create(@RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
		storyService.create(domain);
        StoryDTO dto = storyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatch", tags = {"Story" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.createBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"Story" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody StoryDTO storydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(storyService.checkKey(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Story" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("story_id") BigInteger story_id) {
         return ResponseEntity.status(HttpStatus.OK).body(storyService.remove(story_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"Story" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        storyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Update-all')")
    @ApiOperation(value = "Update", tags = {"Story" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}")
    @Transactional
    public ResponseEntity<StoryDTO> update(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
		Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
		storyService.update(domain);
		StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"Story" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.updateBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Get-all')")
    @ApiOperation(value = "Get", tags = {"Story" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}")
    public ResponseEntity<StoryDTO> get(@PathVariable("story_id") BigInteger story_id) {
        Story domain = storyService.get(story_id);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Save-all')")
    @ApiOperation(value = "Save", tags = {"Story" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/save")
    public ResponseEntity<Boolean> save(@RequestBody StoryDTO storydto) {
        return ResponseEntity.status(HttpStatus.OK).body(storyService.save(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatch", tags = {"Story" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.saveBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Story" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchdefault")
	public ResponseEntity<List<StoryDTO>> fetchDefault(StorySearchContext context) {
        Page<Story> domains = storyService.searchDefault(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Story" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchdefault")
	public ResponseEntity<Page<StoryDTO>> searchDefault(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetDraft-all')")
    @ApiOperation(value = "GetDraftByProduct", tags = {"Story" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/getdraft")
    public ResponseEntity<StoryDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Story domain = new Story();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(storyService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"Story" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories")
    @Transactional
    public ResponseEntity<StoryDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
		storyService.create(domain);
        StoryDTO dto = storyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatchByProduct", tags = {"Story" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
            domain.setProduct(product_id);
        }
        storyService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByProduct", tags = {"Story" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StoryDTO storydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(storyService.checkKey(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"Story" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id) {
		return ResponseEntity.status(HttpStatus.OK).body(storyService.remove(story_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"Story" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        storyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"Story" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}")
    @Transactional
    public ResponseEntity<StoryDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain.setId(story_id);
		storyService.update(domain);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"Story" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
            domain.setProduct(product_id);
        }
        storyService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"Story" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}")
    public ResponseEntity<StoryDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id) {
        Story domain = storyService.get(story_id);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"Story" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(storyService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"Story" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
             domain.setProduct(product_id);
        }
        storyService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"Story" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchdefault")
	public ResponseEntity<List<StoryDTO>> fetchStoryDefaultByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchDefault(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"Story" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchdefault")
	public ResponseEntity<Page<StoryDTO>> searchStoryDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
