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
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.service.IBugService;
import cn.ibizlab.pms.core.zentao.filter.BugSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"Bug" })
@RestController("WebApi-bug")
@RequestMapping("")
public class BugResource {

    @Autowired
    public IBugService bugService;

    @Autowired
    @Lazy
    public BugMapping bugMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "新建Bug", tags = {"Bug" },  notes = "新建Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs")
    public ResponseEntity<BugDTO> create(@Validated @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "批量新建Bug", tags = {"Bug" },  notes = "批量新建Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.createBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "更新Bug", tags = {"Bug" },  notes = "更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugs/{bug_id}")
    public ResponseEntity<BugDTO> update(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
		Bug domain  = bugMapping.toDomain(bugdto);
        domain .setId(bug_id);
		bugService.update(domain );
		BugDTO dto = bugMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "批量更新Bug", tags = {"Bug" },  notes = "批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.updateBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "删除Bug", tags = {"Bug" },  notes = "删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugs/{bug_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("bug_id") Long bug_id) {
         return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "批量删除Bug", tags = {"Bug" },  notes = "批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "获取Bug", tags = {"Bug" },  notes = "获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/bugs/{bug_id}")
    public ResponseEntity<BugDTO> get(@PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取Bug草稿", tags = {"Bug" },  notes = "获取Bug草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(new Bug())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "激活", tags = {"Bug" },  notes = "激活")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activate(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.activate(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "指派", tags = {"Bug" },  notes = "指派")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignTo(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.assignTo(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "批量解除关联Bug", tags = {"Bug" },  notes = "批量解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.batchUnlinkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "Bug收藏", tags = {"Bug" },  notes = "Bug收藏")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavorites(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.bugFavorites(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "取消收藏", tags = {"Bug" },  notes = "取消收藏")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavorites(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.bugNFavorites(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "版本批量解除关联Bug", tags = {"Bug" },  notes = "版本批量解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.buildBatchUnlinkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "版本关联Bug", tags = {"Bug" },  notes = "版本关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.buildLinkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "版本解除关联Bug", tags = {"Bug" },  notes = "版本解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.buildUnlinkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @ApiOperation(value = "检查Bug", tags = {"Bug" },  notes = "检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "关闭", tags = {"Bug" },  notes = "关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> close(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.close(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "确认", tags = {"Bug" },  notes = "确认")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirm(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.confirm(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "关联Bug", tags = {"Bug" },  notes = "关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.linkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "批量解除关联Bug", tags = {"Bug" },  notes = "批量解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.releaaseBatchUnlinkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "关联Bug（解决Bug）", tags = {"Bug" },  notes = "关联Bug（解决Bug）")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.releaseLinkBugbyBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "关联Bug（遗留Bug）", tags = {"Bug" },  notes = "关联Bug（遗留Bug）")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "解除关联Bug", tags = {"Bug" },  notes = "解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.releaseUnlinkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "解决", tags = {"Bug" },  notes = "解决")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolve(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.resolve(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "保存Bug", tags = {"Bug" },  notes = "保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/save")
    public ResponseEntity<Boolean> save(@RequestBody BugDTO bugdto) {
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "批量保存Bug", tags = {"Bug" },  notes = "批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.saveBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "行为", tags = {"Bug" },  notes = "行为")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessage(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.sendMessage(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "发送消息前置处理", tags = {"Bug" },  notes = "发送消息前置处理")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcess(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.sendMsgPreProcess(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "转需求", tags = {"Bug" },  notes = "转需求")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStory(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.toStory(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "解除关联Bug", tags = {"Bug" },  notes = "解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.unlinkBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "获取指派给我Bug", tags = {"Bug" } ,notes = "获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchAssignedToMyBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "查询指派给我Bug", tags = {"Bug" } ,notes = "查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchAssignedToMyBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugsByBuild(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugsByBuild(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBuildBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildLinkResolvedBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBuildLinkResolvedBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildOpenBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBuildOpenBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "获取Build产生的Bug", tags = {"Bug" } ,notes = "获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "查询Build产生的Bug", tags = {"Bug" } ,notes = "查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugRES(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugRES(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"Bug" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchDefault(BugSearchContext context) {
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"Bug" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchDefault(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "获取我的收藏", tags = {"Bug" } ,notes = "获取我的收藏")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchMyFavorites(BugSearchContext context) {
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "查询我的收藏", tags = {"Bug" } ,notes = "查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchMyFavorites(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchReleaseBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchReleaseBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchReleaseLeftBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchReleaseLeftBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchReleaseLinkableLeftBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchReleaseLinkableLeftBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchReleaseLinkableResolvedBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchReleaseLinkableResolvedBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchReportBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchReportBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品建立Bug", tags = {"Bug" },  notes = "根据产品建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs")
    public ResponseEntity<BugDTO> createByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品批量建立Bug", tags = {"Bug" },  notes = "根据产品批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProduct(product_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品更新Bug", tags = {"Bug" },  notes = "根据产品更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品批量更新Bug", tags = {"Bug" },  notes = "根据产品批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProduct(product_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品删除Bug", tags = {"Bug" },  notes = "根据产品删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品批量删除Bug", tags = {"Bug" },  notes = "根据产品批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据产品获取Bug", tags = {"Bug" },  notes = "根据产品获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取Bug草稿", tags = {"Bug" },  notes = "根据产品获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProduct(@PathVariable("product_id") Long product_id) {
        Bug domain = new Bug();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @ApiOperation(value = "根据产品检查Bug", tags = {"Bug" },  notes = "根据产品检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品保存Bug", tags = {"Bug" },  notes = "根据产品保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品批量保存Bug", tags = {"Bug" },  notes = "根据产品批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setProduct(product_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据产品获取指派给我Bug", tags = {"Bug" } ,notes = "根据产品获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据产品查询指派给我Bug", tags = {"Bug" } ,notes = "根据产品查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据产品获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据产品查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据产品获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据产品获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据产品查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据产品查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据产品获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据产品查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"Bug" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"Bug" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品获取我的收藏", tags = {"Bug" } ,notes = "根据产品获取我的收藏")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品查询我的收藏", tags = {"Bug" } ,notes = "根据产品查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据产品获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据产品获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据产品查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据产品查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据产品获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据产品查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据产品获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据产品查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据需求建立Bug", tags = {"Bug" },  notes = "根据需求建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs")
    public ResponseEntity<BugDTO> createByStory(@PathVariable("story_id") Long story_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据需求批量建立Bug", tags = {"Bug" },  notes = "根据需求批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setStory(story_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据需求更新Bug", tags = {"Bug" },  notes = "根据需求更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据需求批量更新Bug", tags = {"Bug" },  notes = "根据需求批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setStory(story_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据需求删除Bug", tags = {"Bug" },  notes = "根据需求删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据需求批量删除Bug", tags = {"Bug" },  notes = "根据需求批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByStory(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据需求获取Bug", tags = {"Bug" },  notes = "根据需求获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据需求获取Bug草稿", tags = {"Bug" },  notes = "根据需求获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByStory(@PathVariable("story_id") Long story_id) {
        Bug domain = new Bug();
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @ApiOperation(value = "根据需求检查Bug", tags = {"Bug" },  notes = "根据需求检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByStory(@PathVariable("story_id") Long story_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据需求保存Bug", tags = {"Bug" },  notes = "根据需求保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/save")
    public ResponseEntity<Boolean> saveByStory(@PathVariable("story_id") Long story_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据需求批量保存Bug", tags = {"Bug" },  notes = "根据需求批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setStory(story_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据需求获取指派给我Bug", tags = {"Bug" } ,notes = "根据需求获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据需求查询指派给我Bug", tags = {"Bug" } ,notes = "根据需求查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据需求获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据需求获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据需求查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据需求查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据需求获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据需求查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据需求获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据需求获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据需求查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据需求查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据需求获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据需求查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据需求获取DEFAULT", tags = {"Bug" } ,notes = "根据需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据需求查询DEFAULT", tags = {"Bug" } ,notes = "根据需求查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据需求获取我的收藏", tags = {"Bug" } ,notes = "根据需求获取我的收藏")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据需求查询我的收藏", tags = {"Bug" } ,notes = "根据需求查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据需求获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据需求查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据需求获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据需求查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据需求获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据需求获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据需求查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据需求查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据需求获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据需求获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据需求查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据需求查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据需求获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据需求获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据需求查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据需求查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据项目建立Bug", tags = {"Bug" },  notes = "根据项目建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs")
    public ResponseEntity<BugDTO> createByProject(@PathVariable("project_id") Long project_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据项目批量建立Bug", tags = {"Bug" },  notes = "根据项目批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProject(project_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据项目更新Bug", tags = {"Bug" },  notes = "根据项目更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据项目批量更新Bug", tags = {"Bug" },  notes = "根据项目批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProject(project_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据项目删除Bug", tags = {"Bug" },  notes = "根据项目删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据项目批量删除Bug", tags = {"Bug" },  notes = "根据项目批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据项目获取Bug", tags = {"Bug" },  notes = "根据项目获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目获取Bug草稿", tags = {"Bug" },  notes = "根据项目获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProject(@PathVariable("project_id") Long project_id) {
        Bug domain = new Bug();
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @ApiOperation(value = "根据项目检查Bug", tags = {"Bug" },  notes = "根据项目检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") Long project_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据项目保存Bug", tags = {"Bug" },  notes = "根据项目保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") Long project_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据项目批量保存Bug", tags = {"Bug" },  notes = "根据项目批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setProject(project_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据项目获取指派给我Bug", tags = {"Bug" } ,notes = "根据项目获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据项目查询指派给我Bug", tags = {"Bug" } ,notes = "根据项目查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据项目获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据项目获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据项目查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据项目查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据项目获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据项目查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据项目获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据项目获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据项目查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据项目查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据项目获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据项目查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据项目获取DEFAULT", tags = {"Bug" } ,notes = "根据项目获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据项目查询DEFAULT", tags = {"Bug" } ,notes = "根据项目查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据项目获取我的收藏", tags = {"Bug" } ,notes = "根据项目获取我的收藏")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据项目查询我的收藏", tags = {"Bug" } ,notes = "根据项目查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据项目获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据项目查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据项目获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据项目查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据项目获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据项目获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据项目查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据项目查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据项目获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据项目查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据项目获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据项目获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据项目查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据项目查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品需求建立Bug", tags = {"Bug" },  notes = "根据产品需求建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs")
    public ResponseEntity<BugDTO> createByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品需求批量建立Bug", tags = {"Bug" },  notes = "根据产品需求批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setStory(story_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品需求更新Bug", tags = {"Bug" },  notes = "根据产品需求更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品需求批量更新Bug", tags = {"Bug" },  notes = "根据产品需求批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setStory(story_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品需求删除Bug", tags = {"Bug" },  notes = "根据产品需求删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品需求批量删除Bug", tags = {"Bug" },  notes = "根据产品需求批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProductStory(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据产品需求获取Bug", tags = {"Bug" },  notes = "根据产品需求获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品需求获取Bug草稿", tags = {"Bug" },  notes = "根据产品需求获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id) {
        Bug domain = new Bug();
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @ApiOperation(value = "根据产品需求检查Bug", tags = {"Bug" },  notes = "根据产品需求检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品需求保存Bug", tags = {"Bug" },  notes = "根据产品需求保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品需求批量保存Bug", tags = {"Bug" },  notes = "根据产品需求批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setStory(story_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据产品需求获取指派给我Bug", tags = {"Bug" } ,notes = "根据产品需求获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据产品需求查询指派给我Bug", tags = {"Bug" } ,notes = "根据产品需求查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品需求获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品需求获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品需求查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品需求查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据产品需求获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据产品需求查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据产品需求获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据产品需求获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据产品需求查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据产品需求查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据产品需求获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据产品需求查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品需求获取DEFAULT", tags = {"Bug" } ,notes = "根据产品需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品需求查询DEFAULT", tags = {"Bug" } ,notes = "根据产品需求查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品需求获取我的收藏", tags = {"Bug" } ,notes = "根据产品需求获取我的收藏")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品需求查询我的收藏", tags = {"Bug" } ,notes = "根据产品需求查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品需求获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品需求查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品需求获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品需求查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据产品需求获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据产品需求获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据产品需求查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据产品需求查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据产品需求获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据产品需求查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据产品需求获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品需求获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据产品需求查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品需求查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

