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
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.service.IActionService;
import cn.ibizlab.pms.core.zentao.filter.ActionSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"系统日志" })
@RestController("WebApi-action")
@RequestMapping("")
public class ActionResource {

    @Autowired
    public IActionService actionService;

    @Autowired
    @Lazy
    public ActionMapping actionMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Create-all')")
    @ApiOperation(value = "新建系统日志", tags = {"系统日志" },  notes = "新建系统日志")
	@RequestMapping(method = RequestMethod.POST, value = "/actions")
    @Transactional
    public ResponseEntity<ActionDTO> create(@RequestBody ActionDTO actiondto) {
        Action domain = actionMapping.toDomain(actiondto);
		actionService.create(domain);
        ActionDTO dto = actionMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Create-all')")
    @ApiOperation(value = "批量新建系统日志", tags = {"系统日志" },  notes = "批量新建系统日志")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ActionDTO> actiondtos) {
        actionService.createBatch(actionMapping.toDomain(actiondtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Update-all')")
    @ApiOperation(value = "更新系统日志", tags = {"系统日志" },  notes = "更新系统日志")
	@RequestMapping(method = RequestMethod.PUT, value = "/actions/{action_id}")
    @Transactional
    public ResponseEntity<ActionDTO> update(@PathVariable("action_id") BigInteger action_id, @RequestBody ActionDTO actiondto) {
		Action domain  = actionMapping.toDomain(actiondto);
        domain .setId(action_id);
		actionService.update(domain );
		ActionDTO dto = actionMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Update-all')")
    @ApiOperation(value = "批量更新系统日志", tags = {"系统日志" },  notes = "批量更新系统日志")
	@RequestMapping(method = RequestMethod.PUT, value = "/actions/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ActionDTO> actiondtos) {
        actionService.updateBatch(actionMapping.toDomain(actiondtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Remove-all')")
    @ApiOperation(value = "删除系统日志", tags = {"系统日志" },  notes = "删除系统日志")
	@RequestMapping(method = RequestMethod.DELETE, value = "/actions/{action_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("action_id") BigInteger action_id) {
         return ResponseEntity.status(HttpStatus.OK).body(actionService.remove(action_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Remove-all')")
    @ApiOperation(value = "批量删除系统日志", tags = {"系统日志" },  notes = "批量删除系统日志")
	@RequestMapping(method = RequestMethod.DELETE, value = "/actions/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        actionService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Get-all')")
    @ApiOperation(value = "获取系统日志", tags = {"系统日志" },  notes = "获取系统日志")
	@RequestMapping(method = RequestMethod.GET, value = "/actions/{action_id}")
    public ResponseEntity<ActionDTO> get(@PathVariable("action_id") BigInteger action_id) {
        Action domain = actionService.get(action_id);
        ActionDTO dto = actionMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取系统日志草稿", tags = {"系统日志" },  notes = "获取系统日志草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/actions/getdraft")
    public ResponseEntity<ActionDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(actionMapping.toDto(actionService.getDraft(new Action())));
    }

    @ApiOperation(value = "检查系统日志", tags = {"系统日志" },  notes = "检查系统日志")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ActionDTO actiondto) {
        return  ResponseEntity.status(HttpStatus.OK).body(actionService.checkKey(actionMapping.toDomain(actiondto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-EditComment-all')")
    @ApiOperation(value = "编辑备注信息", tags = {"系统日志" },  notes = "编辑备注信息")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/{action_id}/editcomment")
    @Transactional
    public ResponseEntity<ActionDTO> editComment(@PathVariable("action_id") BigInteger action_id, @RequestBody ActionDTO actiondto) {
        Action domain = actionMapping.toDomain(actiondto);
domain.setId(action_id);
        domain = actionService.editComment(domain);
        actiondto = actionMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(actiondto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Save-all')")
    @ApiOperation(value = "保存系统日志", tags = {"系统日志" },  notes = "保存系统日志")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/save")
    public ResponseEntity<Boolean> save(@RequestBody ActionDTO actiondto) {
        return ResponseEntity.status(HttpStatus.OK).body(actionService.save(actionMapping.toDomain(actiondto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-Save-all')")
    @ApiOperation(value = "批量保存系统日志", tags = {"系统日志" },  notes = "批量保存系统日志")
	@RequestMapping(method = RequestMethod.POST, value = "/actions/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ActionDTO> actiondtos) {
        actionService.saveBatch(actionMapping.toDomain(actiondtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"系统日志" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/actions/fetchdefault")
	public ResponseEntity<List<ActionDTO>> fetchDefault(ActionSearchContext context) {
        Page<Action> domains = actionService.searchDefault(context) ;
        List<ActionDTO> list = actionMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"系统日志" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/actions/searchdefault")
	public ResponseEntity<Page<ActionDTO>> searchDefault(@RequestBody ActionSearchContext context) {
        Page<Action> domains = actionService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(actionMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchProductTrends-all')")
	@ApiOperation(value = "获取ProductTrends", tags = {"系统日志" } ,notes = "获取ProductTrends")
    @RequestMapping(method= RequestMethod.GET , value="/actions/fetchproducttrends")
	public ResponseEntity<List<ActionDTO>> fetchProductTrends(ActionSearchContext context) {
        Page<Action> domains = actionService.searchProductTrends(context) ;
        List<ActionDTO> list = actionMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchProductTrends-all')")
	@ApiOperation(value = "查询ProductTrends", tags = {"系统日志" } ,notes = "查询ProductTrends")
    @RequestMapping(method= RequestMethod.POST , value="/actions/searchproducttrends")
	public ResponseEntity<Page<ActionDTO>> searchProductTrends(@RequestBody ActionSearchContext context) {
        Page<Action> domains = actionService.searchProductTrends(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(actionMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchProjectTrends-all')")
	@ApiOperation(value = "获取项目动态(项目相关所有)", tags = {"系统日志" } ,notes = "获取项目动态(项目相关所有)")
    @RequestMapping(method= RequestMethod.GET , value="/actions/fetchprojecttrends")
	public ResponseEntity<List<ActionDTO>> fetchProjectTrends(ActionSearchContext context) {
        Page<Action> domains = actionService.searchProjectTrends(context) ;
        List<ActionDTO> list = actionMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchProjectTrends-all')")
	@ApiOperation(value = "查询项目动态(项目相关所有)", tags = {"系统日志" } ,notes = "查询项目动态(项目相关所有)")
    @RequestMapping(method= RequestMethod.POST , value="/actions/searchprojecttrends")
	public ResponseEntity<Page<ActionDTO>> searchProjectTrends(@RequestBody ActionSearchContext context) {
        Page<Action> domains = actionService.searchProjectTrends(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(actionMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchTrends-all')")
	@ApiOperation(value = "获取动态", tags = {"系统日志" } ,notes = "获取动态")
    @RequestMapping(method= RequestMethod.GET , value="/actions/fetchtrends")
	public ResponseEntity<List<ActionDTO>> fetchTrends(ActionSearchContext context) {
        Page<Action> domains = actionService.searchTrends(context) ;
        List<ActionDTO> list = actionMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchTrends-all')")
	@ApiOperation(value = "查询动态", tags = {"系统日志" } ,notes = "查询动态")
    @RequestMapping(method= RequestMethod.POST , value="/actions/searchtrends")
	public ResponseEntity<Page<ActionDTO>> searchTrends(@RequestBody ActionSearchContext context) {
        Page<Action> domains = actionService.searchTrends(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(actionMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchType-all')")
	@ApiOperation(value = "获取Type", tags = {"系统日志" } ,notes = "获取Type")
    @RequestMapping(method= RequestMethod.GET , value="/actions/fetchtype")
	public ResponseEntity<List<ActionDTO>> fetchType(ActionSearchContext context) {
        Page<Action> domains = actionService.searchType(context) ;
        List<ActionDTO> list = actionMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Action-searchType-all')")
	@ApiOperation(value = "查询Type", tags = {"系统日志" } ,notes = "查询Type")
    @RequestMapping(method= RequestMethod.POST , value="/actions/searchtype")
	public ResponseEntity<Page<ActionDTO>> searchType(@RequestBody ActionSearchContext context) {
        Page<Action> domains = actionService.searchType(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(actionMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

