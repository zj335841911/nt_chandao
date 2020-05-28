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
import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.service.ICaseStepService;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;

@Slf4j
@Api(tags = {"CaseStep" })
@RestController("WebApi-casestep")
@RequestMapping("")
public class CaseStepResource {

    @Autowired
    public ICaseStepService casestepService;

    @Autowired
    @Lazy
    public CaseStepMapping casestepMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "Get", tags = {"CaseStep" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> get(@PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "Update", tags = {"CaseStep" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> update(@PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
		CaseStep domain  = casestepMapping.toDomain(casestepdto);
        domain .setId(casestep_id);
		casestepService.update(domain );
		CaseStepDTO dto = casestepMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "UpdateBatch", tags = {"CaseStep" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/casesteps/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CaseStepDTO> casestepdtos) {
        casestepService.updateBatch(casestepMapping.toDomain(casestepdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "GetDraft", tags = {"CaseStep" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(casestepMapping.toDto(casestepService.getDraft(new CaseStep())));
    }

    @ApiOperation(value = "CheckKey", tags = {"CaseStep" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CaseStepDTO casestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(casestepService.checkKey(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "Save", tags = {"CaseStep" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/save")
    public ResponseEntity<Boolean> save(@RequestBody CaseStepDTO casestepdto) {
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "SaveBatch", tags = {"CaseStep" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CaseStepDTO> casestepdtos) {
        casestepService.saveBatch(casestepMapping.toDomain(casestepdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "Create", tags = {"CaseStep" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> create(@RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
		casestepService.create(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "createBatch", tags = {"CaseStep" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CaseStepDTO> casestepdtos) {
        casestepService.createBatch(casestepMapping.toDomain(casestepdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"CaseStep" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("casestep_id") BigInteger casestep_id) {
         return ResponseEntity.status(HttpStatus.OK).body(casestepService.remove(casestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "RemoveBatch", tags = {"CaseStep" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/casesteps/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        casestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"CaseStep" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchDefault(CaseStepSearchContext context) {
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"CaseStep" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchDefault(@RequestBody CaseStepSearchContext context) {
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

