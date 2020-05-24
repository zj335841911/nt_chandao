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
import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.service.IStorySpecService;
import cn.ibizlab.pms.core.zentao.filter.StorySpecSearchContext;

@Slf4j
@Api(tags = {"StorySpec" })
@RestController("WebApi-storyspec")
@RequestMapping("")
public class StorySpecResource {

    @Autowired
    private IStorySpecService storyspecService;

    @Autowired
    @Lazy
    public StorySpecMapping storyspecMapping;

    public StorySpecDTO permissionDTO=new StorySpecDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"StorySpec" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/storyspecs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody StorySpecDTO storyspecdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(storyspecService.checkKey(storyspecMapping.toDomain(storyspecdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-Create-all')")
    @ApiOperation(value = "Create", tags = {"StorySpec" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/storyspecs")
    @Transactional
    public ResponseEntity<StorySpecDTO> create(@RequestBody StorySpecDTO storyspecdto) {
        StorySpec domain = storyspecMapping.toDomain(storyspecdto);
		storyspecService.create(domain);
        StorySpecDTO dto = storyspecMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatch", tags = {"StorySpec" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/storyspecs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<StorySpecDTO> storyspecdtos) {
        storyspecService.createBatch(storyspecMapping.toDomain(storyspecdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-Save-all')")
    @ApiOperation(value = "Save", tags = {"StorySpec" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/storyspecs/save")
    public ResponseEntity<Boolean> save(@RequestBody StorySpecDTO storyspecdto) {
        return ResponseEntity.status(HttpStatus.OK).body(storyspecService.save(storyspecMapping.toDomain(storyspecdto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatch", tags = {"StorySpec" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/storyspecs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<StorySpecDTO> storyspecdtos) {
        storyspecService.saveBatch(storyspecMapping.toDomain(storyspecdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-Get-all')")
    @ApiOperation(value = "Get", tags = {"StorySpec" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/storyspecs/{storyspec_id}")
    public ResponseEntity<StorySpecDTO> get(@PathVariable("storyspec_id") String storyspec_id) {
        StorySpec domain = storyspecService.get(storyspec_id);
        StorySpecDTO dto = storyspecMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"StorySpec" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/storyspecs/{storyspec_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("storyspec_id") String storyspec_id) {
         return ResponseEntity.status(HttpStatus.OK).body(storyspecService.remove(storyspec_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"StorySpec" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/storyspecs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        storyspecService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-Update-all')")
    @ApiOperation(value = "Update", tags = {"StorySpec" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/storyspecs/{storyspec_id}")
    @Transactional
    public ResponseEntity<StorySpecDTO> update(@PathVariable("storyspec_id") String storyspec_id, @RequestBody StorySpecDTO storyspecdto) {
		StorySpec domain = storyspecMapping.toDomain(storyspecdto);
        domain.setId(storyspec_id);
		storyspecService.update(domain);
		StorySpecDTO dto = storyspecMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"StorySpec" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/storyspecs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<StorySpecDTO> storyspecdtos) {
        storyspecService.updateBatch(storyspecMapping.toDomain(storyspecdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"StorySpec" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/storyspecs/getdraft")
    public ResponseEntity<StorySpecDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(storyspecMapping.toDto(storyspecService.getDraft(new StorySpec())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"StorySpec" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/storyspecs/fetchdefault")
	public ResponseEntity<List<StorySpecDTO>> fetchDefault(StorySpecSearchContext context) {
        Page<StorySpec> domains = storyspecService.searchDefault(context) ;
        List<StorySpecDTO> list = storyspecMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-StorySpec-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"StorySpec" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/storyspecs/searchdefault")
	public ResponseEntity<Page<StorySpecDTO>> searchDefault(@RequestBody StorySpecSearchContext context) {
        Page<StorySpec> domains = storyspecService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyspecMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
