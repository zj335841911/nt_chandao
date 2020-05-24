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
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.service.IHistoryService;
import cn.ibizlab.pms.core.zentao.filter.HistorySearchContext;

@Slf4j
@Api(tags = {"History" })
@RestController("WebApi-history")
@RequestMapping("")
public class HistoryResource {

    @Autowired
    private IHistoryService historyService;

    @Autowired
    @Lazy
    public HistoryMapping historyMapping;

    public HistoryDTO permissionDTO=new HistoryDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Update-all')")
    @ApiOperation(value = "Update", tags = {"History" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/histories/{history_id}")
    @Transactional
    public ResponseEntity<HistoryDTO> update(@PathVariable("history_id") BigInteger history_id, @RequestBody HistoryDTO historydto) {
		History domain = historyMapping.toDomain(historydto);
        domain.setId(history_id);
		historyService.update(domain);
		HistoryDTO dto = historyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"History" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/histories/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<HistoryDTO> historydtos) {
        historyService.updateBatch(historyMapping.toDomain(historydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Create-all')")
    @ApiOperation(value = "Create", tags = {"History" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/histories")
    @Transactional
    public ResponseEntity<HistoryDTO> create(@RequestBody HistoryDTO historydto) {
        History domain = historyMapping.toDomain(historydto);
		historyService.create(domain);
        HistoryDTO dto = historyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatch", tags = {"History" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/histories/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<HistoryDTO> historydtos) {
        historyService.createBatch(historyMapping.toDomain(historydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Get-all')")
    @ApiOperation(value = "Get", tags = {"History" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/histories/{history_id}")
    public ResponseEntity<HistoryDTO> get(@PathVariable("history_id") BigInteger history_id) {
        History domain = historyService.get(history_id);
        HistoryDTO dto = historyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"History" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/histories/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody HistoryDTO historydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(historyService.checkKey(historyMapping.toDomain(historydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Save-all')")
    @ApiOperation(value = "Save", tags = {"History" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/histories/save")
    public ResponseEntity<Boolean> save(@RequestBody HistoryDTO historydto) {
        return ResponseEntity.status(HttpStatus.OK).body(historyService.save(historyMapping.toDomain(historydto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatch", tags = {"History" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/histories/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<HistoryDTO> historydtos) {
        historyService.saveBatch(historyMapping.toDomain(historydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"History" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/histories/{history_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("history_id") BigInteger history_id) {
         return ResponseEntity.status(HttpStatus.OK).body(historyService.remove(history_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"History" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/histories/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        historyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"History" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/histories/getdraft")
    public ResponseEntity<HistoryDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(historyMapping.toDto(historyService.getDraft(new History())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"History" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/histories/fetchdefault")
	public ResponseEntity<List<HistoryDTO>> fetchDefault(HistorySearchContext context) {
        Page<History> domains = historyService.searchDefault(context) ;
        List<HistoryDTO> list = historyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"History" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/histories/searchdefault")
	public ResponseEntity<Page<HistoryDTO>> searchDefault(@RequestBody HistorySearchContext context) {
        Page<History> domains = historyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(historyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Update-all')")
    @ApiOperation(value = "UpdateByAction", tags = {"History" },  notes = "UpdateByAction")
	@RequestMapping(method = RequestMethod.PUT, value = "/actions/{action_id}/histories/{history_id}")
    @Transactional
    public ResponseEntity<HistoryDTO> updateByAction(@PathVariable("action_id") BigInteger action_id, @PathVariable("history_id") BigInteger history_id, @RequestBody HistoryDTO historydto) {
        History domain = historyMapping.toDomain(historydto);
        domain.setAction(action_id);
        domain.setId(history_id);
		historyService.update(domain);
        HistoryDTO dto = historyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatchByAction", tags = {"History" },  notes = "UpdateBatchByAction")
	@RequestMapping(method = RequestMethod.PUT, value = "/actions/{action_id}/histories/batch")
    public ResponseEntity<Boolean> updateBatchByAction(@PathVariable("action_id") BigInteger action_id, @RequestBody List<HistoryDTO> historydtos) {
        List<History> domainlist=historyMapping.toDomain(historydtos);
        for(History domain:domainlist){
            domain.setAction(action_id);
        }
        historyService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Create-all')")
    @ApiOperation(value = "CreateByAction", tags = {"History" },  notes = "CreateByAction")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/{action_id}/histories")
    @Transactional
    public ResponseEntity<HistoryDTO> createByAction(@PathVariable("action_id") BigInteger action_id, @RequestBody HistoryDTO historydto) {
        History domain = historyMapping.toDomain(historydto);
        domain.setAction(action_id);
		historyService.create(domain);
        HistoryDTO dto = historyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatchByAction", tags = {"History" },  notes = "createBatchByAction")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/{action_id}/histories/batch")
    public ResponseEntity<Boolean> createBatchByAction(@PathVariable("action_id") BigInteger action_id, @RequestBody List<HistoryDTO> historydtos) {
        List<History> domainlist=historyMapping.toDomain(historydtos);
        for(History domain:domainlist){
            domain.setAction(action_id);
        }
        historyService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Get-all')")
    @ApiOperation(value = "GetByAction", tags = {"History" },  notes = "GetByAction")
	@RequestMapping(method = RequestMethod.GET, value = "/actions/{action_id}/histories/{history_id}")
    public ResponseEntity<HistoryDTO> getByAction(@PathVariable("action_id") BigInteger action_id, @PathVariable("history_id") BigInteger history_id) {
        History domain = historyService.get(history_id);
        HistoryDTO dto = historyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByAction", tags = {"History" },  notes = "CheckKeyByAction")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/{action_id}/histories/checkkey")
    public ResponseEntity<Boolean> checkKeyByAction(@PathVariable("action_id") BigInteger action_id, @RequestBody HistoryDTO historydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(historyService.checkKey(historyMapping.toDomain(historydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Save-all')")
    @ApiOperation(value = "SaveByAction", tags = {"History" },  notes = "SaveByAction")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/{action_id}/histories/save")
    public ResponseEntity<Boolean> saveByAction(@PathVariable("action_id") BigInteger action_id, @RequestBody HistoryDTO historydto) {
        History domain = historyMapping.toDomain(historydto);
        domain.setAction(action_id);
        return ResponseEntity.status(HttpStatus.OK).body(historyService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatchByAction", tags = {"History" },  notes = "SaveBatchByAction")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/{action_id}/histories/savebatch")
    public ResponseEntity<Boolean> saveBatchByAction(@PathVariable("action_id") BigInteger action_id, @RequestBody List<HistoryDTO> historydtos) {
        List<History> domainlist=historyMapping.toDomain(historydtos);
        for(History domain:domainlist){
             domain.setAction(action_id);
        }
        historyService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Remove-all')")
    @ApiOperation(value = "RemoveByAction", tags = {"History" },  notes = "RemoveByAction")
	@RequestMapping(method = RequestMethod.DELETE, value = "/actions/{action_id}/histories/{history_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByAction(@PathVariable("action_id") BigInteger action_id, @PathVariable("history_id") BigInteger history_id) {
		return ResponseEntity.status(HttpStatus.OK).body(historyService.remove(history_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByAction", tags = {"History" },  notes = "RemoveBatchByAction")
	@RequestMapping(method = RequestMethod.DELETE, value = "/actions/{action_id}/histories/batch")
    public ResponseEntity<Boolean> removeBatchByAction(@RequestBody List<BigInteger> ids) {
        historyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-GetDraft-all')")
    @ApiOperation(value = "GetDraftByAction", tags = {"History" },  notes = "GetDraftByAction")
    @RequestMapping(method = RequestMethod.GET, value = "/actions/{action_id}/histories/getdraft")
    public ResponseEntity<HistoryDTO> getDraftByAction(@PathVariable("action_id") BigInteger action_id) {
        History domain = new History();
        domain.setAction(action_id);
        return ResponseEntity.status(HttpStatus.OK).body(historyMapping.toDto(historyService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByAction", tags = {"History" } ,notes = "fetchDEFAULTByAction")
    @RequestMapping(method= RequestMethod.GET , value="/actions/{action_id}/histories/fetchdefault")
	public ResponseEntity<List<HistoryDTO>> fetchHistoryDefaultByAction(@PathVariable("action_id") BigInteger action_id,HistorySearchContext context) {
        context.setN_action_eq(action_id);
        Page<History> domains = historyService.searchDefault(context) ;
        List<HistoryDTO> list = historyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-History-Default-all')")
	@ApiOperation(value = "searchDEFAULTByAction", tags = {"History" } ,notes = "searchDEFAULTByAction")
    @RequestMapping(method= RequestMethod.POST , value="/actions/{action_id}/histories/searchdefault")
	public ResponseEntity<Page<HistoryDTO>> searchHistoryDefaultByAction(@PathVariable("action_id") BigInteger action_id, @RequestBody HistorySearchContext context) {
        context.setN_action_eq(action_id);
        Page<History> domains = historyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(historyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
