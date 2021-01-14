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
    public ResponseEntity<BugDTO> getDraft(BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "批量处理[激活]", tags = {"Bug" },  notes = "批量处理[激活]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/activatebatch")
    public ResponseEntity<Boolean> activateBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "批量处理[指派]", tags = {"Bug" },  notes = "批量处理[指派]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "批量处理[批量解除关联Bug]", tags = {"Bug" },  notes = "批量处理[批量解除关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "批量处理[版本批量解除关联Bug]", tags = {"Bug" },  notes = "批量处理[版本批量解除关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "批量处理[版本关联Bug]", tags = {"Bug" },  notes = "批量处理[版本关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "批量处理[版本解除关联Bug]", tags = {"Bug" },  notes = "批量处理[版本解除关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "批量处理[关闭]", tags = {"Bug" },  notes = "批量处理[关闭]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/closebatch")
    public ResponseEntity<Boolean> closeBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "批量处理[确认]", tags = {"Bug" },  notes = "批量处理[确认]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "批量处理[关联Bug]", tags = {"Bug" },  notes = "批量处理[关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "批量处理[批量解除关联Bug]", tags = {"Bug" },  notes = "批量处理[批量解除关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "批量处理[关联Bug（解决Bug）]", tags = {"Bug" },  notes = "批量处理[关联Bug（解决Bug）]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "批量处理[关联Bug（遗留Bug）]", tags = {"Bug" },  notes = "批量处理[关联Bug（遗留Bug）]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "移除关联Bug（遗留Bug）", tags = {"Bug" },  notes = "移除关联Bug（遗留Bug）")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBug(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain);
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "批量处理[移除关联Bug（遗留Bug）]", tags = {"Bug" },  notes = "批量处理[移除关联Bug（遗留Bug）]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "批量处理[解除关联Bug]", tags = {"Bug" },  notes = "批量处理[解除关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "批量处理[解决]", tags = {"Bug" },  notes = "批量处理[解决]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "批量处理[行为]", tags = {"Bug" },  notes = "批量处理[行为]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "批量处理[发送消息前置处理]", tags = {"Bug" },  notes = "批量处理[发送消息前置处理]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "批量处理[转需求]", tags = {"Bug" },  notes = "批量处理[转需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "批量处理[解除关联Bug]", tags = {"Bug" },  notes = "批量处理[解除关联Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugBatch(@RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "更新需求版本", tags = {"Bug" },  notes = "更新需求版本")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersion(@PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setId(bug_id);
        domain = bugService.updateStoryVersion(domain);
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchAssignedToMyBugPc(BugSearchContext context) {
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchAssignedToMyBugPc(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugsByBuild(@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildBugs(@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildLinkResolvedBugs(@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildOpenBugs(@RequestBody BugSearchContext context) {
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "获取Build产生的Bug", tags = {"Bug" } ,notes = "获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugModule(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "查询Build产生的Bug", tags = {"Bug" } ,notes = "查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugModule(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugModule_Project(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugModule_Project(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugOpenedBy(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugOpenedBy(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugOpenedBy_Project(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugOpenedBy_Project(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugRESOLVEDBY(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugRESOLVEDBY(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugRESOLVEDBY_Project(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugRESOLVEDBY_Project(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugResolution_Project(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugResolution_Project(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugSeverity_Project(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugSeverity_Project(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugStatus_Project(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugStatus_Project(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBuildProduceBugType_Project(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBuildProduceBugType_Project(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "获取当前用户解决的Bug", tags = {"Bug" } ,notes = "获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchCurUserResolve(BugSearchContext context) {
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "查询当前用户解决的Bug", tags = {"Bug" } ,notes = "查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchCurUserResolve(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"Bug" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchDefault(@RequestBody BugSearchContext context) {
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "获取ES批量的导入", tags = {"Bug" } ,notes = "获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchESBulk(BugSearchContext context) {
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "查询ES批量的导入", tags = {"Bug" } ,notes = "查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchESBulk(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "获取我代理的Bug", tags = {"Bug" } ,notes = "获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchMyAgentBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "查询我代理的Bug", tags = {"Bug" } ,notes = "查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchMyAgentBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "获取累计创建的Bug数", tags = {"Bug" } ,notes = "获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchMyCurOpenedBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "查询累计创建的Bug数", tags = {"Bug" } ,notes = "查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchMyCurOpenedBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "获取我的收藏", tags = {"Bug" } ,notes = "获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchMyFavorites(@RequestBody BugSearchContext context) {
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchNotCurPlanLinkBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchNotCurPlanLinkBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchProjectBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchProjectBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchReleaseBugs(@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchReleaseLeftBugs(@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchReportBugs(@RequestBody BugSearchContext context) {
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "获取任务相关bug", tags = {"Bug" } ,notes = "获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchTaskRelatedBug(BugSearchContext context) {
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "查询任务相关bug", tags = {"Bug" } ,notes = "查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchTaskRelatedBug(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
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
    public ResponseEntity<BugDTO> getDraftByProduct(@PathVariable("product_id") Long product_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品Bug]", tags = {"Bug" },  notes = "批量处理[根据产品Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据产品Bug", tags = {"Bug" },  notes = "根据产品Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByProduct(@PathVariable("product_id") Long product_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain = bugService.updateStoryVersion(domain) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据产品获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据产品获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据产品查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据产品查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据产品获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据产品获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据产品查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据产品查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据产品获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据产品获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据产品查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据产品查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"Bug" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据产品获取ES批量的导入", tags = {"Bug" } ,notes = "根据产品获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据产品查询ES批量的导入", tags = {"Bug" } ,notes = "根据产品查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据产品获取我代理的Bug", tags = {"Bug" } ,notes = "根据产品获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据产品查询我代理的Bug", tags = {"Bug" } ,notes = "根据产品查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据产品获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据产品获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据产品查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据产品查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品获取我的收藏", tags = {"Bug" } ,notes = "根据产品获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据产品获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据产品获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据产品查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据产品查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据产品获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据产品获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据产品查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据产品查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProduct(@PathVariable("product_id") Long product_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据产品获取任务相关bug", tags = {"Bug" } ,notes = "根据产品获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByProduct(@PathVariable("product_id") Long product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据产品查询任务相关bug", tags = {"Bug" } ,notes = "根据产品查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByProduct(@PathVariable("product_id") Long product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据任务建立Bug", tags = {"Bug" },  notes = "根据任务建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs")
    public ResponseEntity<BugDTO> createByTask(@PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据任务批量建立Bug", tags = {"Bug" },  notes = "根据任务批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据任务更新Bug", tags = {"Bug" },  notes = "根据任务更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据任务批量更新Bug", tags = {"Bug" },  notes = "根据任务批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据任务删除Bug", tags = {"Bug" },  notes = "根据任务删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据任务批量删除Bug", tags = {"Bug" },  notes = "根据任务批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByTask(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据任务获取Bug", tags = {"Bug" },  notes = "根据任务获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据任务获取Bug草稿", tags = {"Bug" },  notes = "根据任务获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByTask(@PathVariable("task_id") Long task_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @ApiOperation(value = "根据任务检查Bug", tags = {"Bug" },  notes = "根据任务检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByTask(@PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据任务保存Bug", tags = {"Bug" },  notes = "根据任务保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/save")
    public ResponseEntity<Boolean> saveByTask(@PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据任务批量保存Bug", tags = {"Bug" },  notes = "根据任务批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setTask(task_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据任务Bug]", tags = {"Bug" },  notes = "批量处理[根据任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据任务Bug", tags = {"Bug" },  notes = "根据任务Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByTask(@PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.updateStoryVersion(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据任务获取指派给我Bug", tags = {"Bug" } ,notes = "根据任务获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据任务查询指派给我Bug", tags = {"Bug" } ,notes = "根据任务查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据任务获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据任务获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据任务查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据任务查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据任务获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据任务获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据任务查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据任务查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据任务获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据任务获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据任务查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据任务查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据任务获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据任务获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据任务查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据任务查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据任务获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据任务获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据任务查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据任务查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据任务获取DEFAULT", tags = {"Bug" } ,notes = "根据任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据任务查询DEFAULT", tags = {"Bug" } ,notes = "根据任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据任务获取ES批量的导入", tags = {"Bug" } ,notes = "根据任务获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据任务查询ES批量的导入", tags = {"Bug" } ,notes = "根据任务查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据任务获取我代理的Bug", tags = {"Bug" } ,notes = "根据任务获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据任务查询我代理的Bug", tags = {"Bug" } ,notes = "根据任务查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据任务获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据任务获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据任务查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据任务查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据任务获取我的收藏", tags = {"Bug" } ,notes = "根据任务获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据任务查询我的收藏", tags = {"Bug" } ,notes = "根据任务查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据任务获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据任务获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据任务查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据任务查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据任务获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据任务获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据任务查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据任务查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据任务获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据任务获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据任务查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据任务查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据任务获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据任务获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据任务查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据任务查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据任务获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据任务获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByTask(@PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据任务查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据任务查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据任务获取任务相关bug", tags = {"Bug" } ,notes = "根据任务获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByTask(@PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据任务查询任务相关bug", tags = {"Bug" } ,notes = "根据任务查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByTask(@PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
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
    public ResponseEntity<BugDTO> getDraftByStory(@PathVariable("story_id") Long story_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据需求Bug]", tags = {"Bug" },  notes = "批量处理[根据需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据需求Bug", tags = {"Bug" },  notes = "根据需求Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByStory(@PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.updateStoryVersion(domain) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据需求获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据需求获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据需求查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据需求查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据需求获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据需求获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据需求获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据需求获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据需求查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据需求查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据需求获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据需求获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据需求查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据需求查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据需求获取DEFAULT", tags = {"Bug" } ,notes = "根据需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据需求获取ES批量的导入", tags = {"Bug" } ,notes = "根据需求获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据需求查询ES批量的导入", tags = {"Bug" } ,notes = "根据需求查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据需求获取我代理的Bug", tags = {"Bug" } ,notes = "根据需求获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据需求查询我代理的Bug", tags = {"Bug" } ,notes = "根据需求查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据需求获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据需求获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据需求查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据需求查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据需求获取我的收藏", tags = {"Bug" } ,notes = "根据需求获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据需求获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据需求获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据需求查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据需求查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据需求获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据需求获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据需求查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据需求查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据需求获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByStory(@PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据需求获取任务相关bug", tags = {"Bug" } ,notes = "根据需求获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByStory(@PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据需求查询任务相关bug", tags = {"Bug" } ,notes = "根据需求查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByStory(@PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
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
    public ResponseEntity<BugDTO> getDraftByProject(@PathVariable("project_id") Long project_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据项目Bug]", tags = {"Bug" },  notes = "批量处理[根据项目Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据项目Bug", tags = {"Bug" },  notes = "根据项目Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByProject(@PathVariable("project_id") Long project_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain = bugService.updateStoryVersion(domain) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据项目获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据项目获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据项目查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据项目查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据项目获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据项目获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据项目获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据项目获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据项目查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据项目查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据项目获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据项目获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据项目查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据项目查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据项目获取DEFAULT", tags = {"Bug" } ,notes = "根据项目获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据项目获取ES批量的导入", tags = {"Bug" } ,notes = "根据项目获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据项目查询ES批量的导入", tags = {"Bug" } ,notes = "根据项目查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据项目获取我代理的Bug", tags = {"Bug" } ,notes = "根据项目获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据项目查询我代理的Bug", tags = {"Bug" } ,notes = "根据项目查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据项目获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据项目获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据项目查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据项目查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据项目获取我的收藏", tags = {"Bug" } ,notes = "根据项目获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据项目获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据项目获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据项目查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据项目查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据项目获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据项目获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据项目查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据项目查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据项目获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProject(@PathVariable("project_id") Long project_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据项目获取任务相关bug", tags = {"Bug" } ,notes = "根据项目获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByProject(@PathVariable("project_id") Long project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据项目查询任务相关bug", tags = {"Bug" } ,notes = "根据项目查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByProject(@PathVariable("project_id") Long project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
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
    public ResponseEntity<BugDTO> getDraftByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
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
    @ApiOperation(value = "批量处理[根据产品需求Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据产品需求Bug", tags = {"Bug" },  notes = "根据产品需求Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setStory(story_id);
        domain = bugService.updateStoryVersion(domain) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据产品需求获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据产品需求获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据产品需求查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据产品需求查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品需求获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品需求获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据产品需求获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据产品需求获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据产品需求查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据产品需求查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据产品需求获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据产品需求获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据产品需求查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据产品需求查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品需求获取DEFAULT", tags = {"Bug" } ,notes = "根据产品需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据产品需求获取ES批量的导入", tags = {"Bug" } ,notes = "根据产品需求获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据产品需求查询ES批量的导入", tags = {"Bug" } ,notes = "根据产品需求查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据产品需求获取我代理的Bug", tags = {"Bug" } ,notes = "根据产品需求获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据产品需求查询我代理的Bug", tags = {"Bug" } ,notes = "根据产品需求查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据产品需求获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据产品需求获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据产品需求查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据产品需求查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品需求获取我的收藏", tags = {"Bug" } ,notes = "根据产品需求获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据产品需求获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据产品需求获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据产品需求查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据产品需求查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据产品需求获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据产品需求获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据产品需求查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据产品需求查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品需求获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,@RequestBody BugSearchContext context) {
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
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据产品需求获取任务相关bug", tags = {"Bug" } ,notes = "根据产品需求获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id,BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据产品需求查询任务相关bug", tags = {"Bug" } ,notes = "根据产品需求查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByProductStory(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody BugSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据需求任务建立Bug", tags = {"Bug" },  notes = "根据需求任务建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs")
    public ResponseEntity<BugDTO> createByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据需求任务批量建立Bug", tags = {"Bug" },  notes = "根据需求任务批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据需求任务更新Bug", tags = {"Bug" },  notes = "根据需求任务更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据需求任务批量更新Bug", tags = {"Bug" },  notes = "根据需求任务批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据需求任务删除Bug", tags = {"Bug" },  notes = "根据需求任务删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据需求任务批量删除Bug", tags = {"Bug" },  notes = "根据需求任务批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByStoryTask(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据需求任务获取Bug", tags = {"Bug" },  notes = "根据需求任务获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据需求任务获取Bug草稿", tags = {"Bug" },  notes = "根据需求任务获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/tasks/{task_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @ApiOperation(value = "根据需求任务检查Bug", tags = {"Bug" },  notes = "根据需求任务检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据需求任务保存Bug", tags = {"Bug" },  notes = "根据需求任务保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/save")
    public ResponseEntity<Boolean> saveByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据需求任务批量保存Bug", tags = {"Bug" },  notes = "根据需求任务批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setTask(task_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据需求任务Bug", tags = {"Bug" },  notes = "根据需求任务Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.updateStoryVersion(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据需求任务获取指派给我Bug", tags = {"Bug" } ,notes = "根据需求任务获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据需求任务查询指派给我Bug", tags = {"Bug" } ,notes = "根据需求任务查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据需求任务获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据需求任务获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据需求任务查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据需求任务查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据需求任务获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据需求任务获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据需求任务查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据需求任务查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据需求任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据需求任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据需求任务获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据需求任务获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据需求任务查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据需求任务查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据需求任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据需求任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据需求任务获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据需求任务获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据需求任务查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据需求任务查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据需求任务获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据需求任务获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据需求任务查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据需求任务查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据需求任务获取DEFAULT", tags = {"Bug" } ,notes = "根据需求任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据需求任务查询DEFAULT", tags = {"Bug" } ,notes = "根据需求任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据需求任务获取ES批量的导入", tags = {"Bug" } ,notes = "根据需求任务获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据需求任务查询ES批量的导入", tags = {"Bug" } ,notes = "根据需求任务查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据需求任务获取我代理的Bug", tags = {"Bug" } ,notes = "根据需求任务获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据需求任务查询我代理的Bug", tags = {"Bug" } ,notes = "根据需求任务查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据需求任务获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据需求任务获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据需求任务查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据需求任务查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据需求任务获取我的收藏", tags = {"Bug" } ,notes = "根据需求任务获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据需求任务查询我的收藏", tags = {"Bug" } ,notes = "根据需求任务查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据需求任务获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据需求任务获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据需求任务查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据需求任务查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据需求任务获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据需求任务获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据需求任务查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据需求任务查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据需求任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据需求任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据需求任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据需求任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据需求任务获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据需求任务获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据需求任务查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据需求任务查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据需求任务获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据需求任务查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据需求任务查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据需求任务获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据需求任务获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据需求任务查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据需求任务查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据需求任务获取任务相关bug", tags = {"Bug" } ,notes = "根据需求任务获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据需求任务查询任务相关bug", tags = {"Bug" } ,notes = "根据需求任务查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByStoryTask(@PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据项目任务建立Bug", tags = {"Bug" },  notes = "根据项目任务建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs")
    public ResponseEntity<BugDTO> createByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据项目任务批量建立Bug", tags = {"Bug" },  notes = "根据项目任务批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据项目任务更新Bug", tags = {"Bug" },  notes = "根据项目任务更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据项目任务批量更新Bug", tags = {"Bug" },  notes = "根据项目任务批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据项目任务删除Bug", tags = {"Bug" },  notes = "根据项目任务删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据项目任务批量删除Bug", tags = {"Bug" },  notes = "根据项目任务批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProjectTask(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据项目任务获取Bug", tags = {"Bug" },  notes = "根据项目任务获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目任务获取Bug草稿", tags = {"Bug" },  notes = "根据项目任务获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @ApiOperation(value = "根据项目任务检查Bug", tags = {"Bug" },  notes = "根据项目任务检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据项目任务保存Bug", tags = {"Bug" },  notes = "根据项目任务保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据项目任务批量保存Bug", tags = {"Bug" },  notes = "根据项目任务批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setTask(task_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据项目任务Bug]", tags = {"Bug" },  notes = "批量处理[根据项目任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据项目任务Bug", tags = {"Bug" },  notes = "根据项目任务Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.updateStoryVersion(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据项目任务获取指派给我Bug", tags = {"Bug" } ,notes = "根据项目任务获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据项目任务查询指派给我Bug", tags = {"Bug" } ,notes = "根据项目任务查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据项目任务获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据项目任务获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据项目任务查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据项目任务查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据项目任务获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据项目任务获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据项目任务查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据项目任务查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据项目任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据项目任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据项目任务获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据项目任务获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据项目任务查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据项目任务查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据项目任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据项目任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据项目任务获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据项目任务获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据项目任务查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据项目任务查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据项目任务获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据项目任务获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据项目任务查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据项目任务查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据项目任务获取DEFAULT", tags = {"Bug" } ,notes = "根据项目任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据项目任务查询DEFAULT", tags = {"Bug" } ,notes = "根据项目任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据项目任务获取ES批量的导入", tags = {"Bug" } ,notes = "根据项目任务获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据项目任务查询ES批量的导入", tags = {"Bug" } ,notes = "根据项目任务查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据项目任务获取我代理的Bug", tags = {"Bug" } ,notes = "根据项目任务获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据项目任务查询我代理的Bug", tags = {"Bug" } ,notes = "根据项目任务查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据项目任务获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据项目任务获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据项目任务查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据项目任务查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据项目任务获取我的收藏", tags = {"Bug" } ,notes = "根据项目任务获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据项目任务查询我的收藏", tags = {"Bug" } ,notes = "根据项目任务查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据项目任务获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据项目任务获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据项目任务查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据项目任务查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据项目任务获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据项目任务获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据项目任务查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据项目任务查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据项目任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据项目任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据项目任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据项目任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据项目任务获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据项目任务获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据项目任务查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据项目任务查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据项目任务获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据项目任务查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据项目任务查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据项目任务获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据项目任务获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据项目任务查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据项目任务查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据项目任务获取任务相关bug", tags = {"Bug" } ,notes = "根据项目任务获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据项目任务查询任务相关bug", tags = {"Bug" } ,notes = "根据项目任务查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByProjectTask(@PathVariable("project_id") Long project_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品需求任务建立Bug", tags = {"Bug" },  notes = "根据产品需求任务建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs")
    public ResponseEntity<BugDTO> createByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品需求任务批量建立Bug", tags = {"Bug" },  notes = "根据产品需求任务批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "bug" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品需求任务更新Bug", tags = {"Bug" },  notes = "根据产品需求任务更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> updateByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品需求任务批量更新Bug", tags = {"Bug" },  notes = "根据产品需求任务批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setTask(task_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品需求任务删除Bug", tags = {"Bug" },  notes = "根据产品需求任务删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<Boolean> removeByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品需求任务批量删除Bug", tags = {"Bug" },  notes = "根据产品需求任务批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProductStoryTask(@RequestBody List<Long> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据产品需求任务获取Bug", tags = {"Bug" },  notes = "根据产品需求任务获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品需求任务获取Bug草稿", tags = {"Bug" },  notes = "根据产品需求任务获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, BugDTO dto) {
        Bug domain = bugMapping.toDomain(dto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Activate-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/activate")
    public ResponseEntity<BugDTO> activateByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.activate(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/activatebatch")
    public ResponseEntity<Boolean> activateByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-AssignTo-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/assignto")
    public ResponseEntity<BugDTO> assignToByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.assignTo(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/assigntobatch")
    public ResponseEntity<Boolean> assignToByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/batchunlinkbug")
    public ResponseEntity<BugDTO> batchUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.batchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/batchunlinkbugbatch")
    public ResponseEntity<Boolean> batchUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.batchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugFavorites-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/bugfavorites")
    public ResponseEntity<BugDTO> bugFavoritesByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BugNFavorites-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/bugnfavorites")
    public ResponseEntity<BugDTO> bugNFavoritesByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.bugNFavorites(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/buildbatchunlinkbug")
    public ResponseEntity<BugDTO> buildBatchUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/buildbatchunlinkbugbatch")
    public ResponseEntity<Boolean> buildBatchUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildLinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/buildlinkbug")
    public ResponseEntity<BugDTO> buildLinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildLinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/buildlinkbugbatch")
    public ResponseEntity<Boolean> buildLinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildLinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/buildunlinkbug")
    public ResponseEntity<BugDTO> buildUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.buildUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/buildunlinkbugbatch")
    public ResponseEntity<Boolean> buildUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.buildUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @ApiOperation(value = "根据产品需求任务检查Bug", tags = {"Bug" },  notes = "根据产品需求任务检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Close-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/close")
    public ResponseEntity<BugDTO> closeByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.close(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/closebatch")
    public ResponseEntity<Boolean> closeByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Confirm-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/confirm")
    public ResponseEntity<BugDTO> confirmByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.confirm(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/confirmbatch")
    public ResponseEntity<Boolean> confirmByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.confirmBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-LinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/linkbug")
    public ResponseEntity<BugDTO> linkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.linkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/linkbugbatch")
    public ResponseEntity<Boolean> linkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.linkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaaseBatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaasebatchunlinkbug")
    public ResponseEntity<BugDTO> releaaseBatchUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaaseBatchUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/releaasebatchunlinkbugbatch")
    public ResponseEntity<Boolean> releaaseBatchUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaaseBatchUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbybug")
    public ResponseEntity<BugDTO> releaseLinkBugbyBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/releaselinkbugbybugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaselinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseLinkBugbyLeftBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/releaselinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseLinkBugbyLeftBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnLinkBugbyLeftBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbugbyleftbug")
    public ResponseEntity<BugDTO> releaseUnLinkBugbyLeftBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnLinkBugbyLeftBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/releaseunlinkbugbyleftbugbatch")
    public ResponseEntity<Boolean> releaseUnLinkBugbyLeftBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnLinkBugbyLeftBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseUnlinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/releaseunlinkbug")
    public ResponseEntity<BugDTO> releaseUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.releaseUnlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/releaseunlinkbugbatch")
    public ResponseEntity<Boolean> releaseUnlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.releaseUnlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Resolve-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/resolve")
    public ResponseEntity<BugDTO> resolveByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.resolve(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/resolvebatch")
    public ResponseEntity<Boolean> resolveByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.resolveBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品需求任务保存Bug", tags = {"Bug" },  notes = "根据产品需求任务保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品需求任务批量保存Bug", tags = {"Bug" },  notes = "根据产品需求任务批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setTask(task_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMessage-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/sendmessage")
    public ResponseEntity<BugDTO> sendMessageByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMessage(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/sendmsgpreprocess")
    public ResponseEntity<BugDTO> sendMsgPreProcessByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.sendMsgPreProcess(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ToStory-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/tostory")
    public ResponseEntity<BugDTO> toStoryByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.toStory(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/tostorybatch")
    public ResponseEntity<Boolean> toStoryByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.toStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UnlinkBug-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/unlinkbug")
    public ResponseEntity<BugDTO> unlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.unlinkBug(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @ApiOperation(value = "批量处理[根据产品需求任务Bug]", tags = {"Bug" },  notes = "批量处理[根据产品需求任务Bug]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/unlinkbugbatch")
    public ResponseEntity<Boolean> unlinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domains = bugMapping.toDomain(bugdtos);
        boolean result = bugService.unlinkBugBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-UpdateStoryVersion-all')")
    @ApiOperation(value = "根据产品需求任务Bug", tags = {"Bug" },  notes = "根据产品需求任务Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/{bug_id}/updatestoryversion")
    public ResponseEntity<BugDTO> updateStoryVersionByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @PathVariable("bug_id") Long bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setTask(task_id);
        domain = bugService.updateStoryVersion(domain) ;
        bugdto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据产品需求任务获取指派给我Bug", tags = {"Bug" } ,notes = "根据产品需求任务获取指派给我Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchassignedtomybug")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBug-all')")
	@ApiOperation(value = "根据产品需求任务查询指派给我Bug", tags = {"Bug" } ,notes = "根据产品需求任务查询指派给我Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchassignedtomybug")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据产品需求任务获取指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据产品需求任务获取指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchassignedtomybugpc")
	public ResponseEntity<List<BugDTO>> fetchBugAssignedToMyBugPcByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchAssignedToMyBugPc-all')")
	@ApiOperation(value = "根据产品需求任务查询指派给我Bug（PC）", tags = {"Bug" } ,notes = "根据产品需求任务查询指派给我Bug（PC）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchassignedtomybugpc")
	public ResponseEntity<Page<BugDTO>> searchBugAssignedToMyBugPcByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchAssignedToMyBugPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品需求任务获取版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品需求任务获取版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbugsbybuild")
	public ResponseEntity<List<BugDTO>> fetchBugBugsByBuildByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBugsByBuild-all')")
	@ApiOperation(value = "根据产品需求任务查询版本关联bug(遗留的)", tags = {"Bug" } ,notes = "根据产品需求任务查询版本关联bug(遗留的)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbugsbybuild")
	public ResponseEntity<Page<BugDTO>> searchBugBugsByBuildByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBugsByBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据产品需求任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildBugs-all')")
	@ApiOperation(value = "根据产品需求任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据产品需求任务获取版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据产品需求任务获取版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildlinkresolvedbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildLinkResolvedBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildLinkResolvedBugs-all')")
	@ApiOperation(value = "根据产品需求任务查询版本可关联的已解决的Bugs集合", tags = {"Bug" } ,notes = "根据产品需求任务查询版本可关联的已解决的Bugs集合")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildlinkresolvedbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildLinkResolvedBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildLinkResolvedBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据产品需求任务获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildOpenBugs-all')")
	@ApiOperation(value = "根据产品需求任务查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebug")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBug-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebug")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugmodule")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModuleByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugmodule")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModuleByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugmodule_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugModule_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugModule_Project-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugmodule_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugModule_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugModule_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugopenedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedByByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-创建分类", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-创建分类")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugopenedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedByByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugopenedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugOpenedBy_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugOpenedBy_Project-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-创建者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-创建者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugopenedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugOpenedBy_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugOpenedBy_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugres")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRES-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugres")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRES(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBYByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-解决者分布", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-解决者分布")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugresolvedby")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBYByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolvedby_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugRESOLVEDBY_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugRESOLVEDBY_Project-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-解决者分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-解决者分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugresolvedby_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugRESOLVEDBY_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugRESOLVEDBY_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugresolution_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugResolution_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugResolution_Project-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-解决方案分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-解决方案分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugresolution_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugResolution_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugResolution_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugseverity_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugSeverity_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugSeverity_Project-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-严重程度分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-严重程度分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugseverity_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugSeverity_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugSeverity_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugstatus_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugStatus_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugStatus_Project-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-状态分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-状态分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugstatus_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugStatus_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugStatus_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据产品需求任务获取Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchbuildproducebugtype_project")
	public ResponseEntity<List<BugDTO>> fetchBugBuildProduceBugType_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchBuildProduceBugType_Project-all')")
	@ApiOperation(value = "根据产品需求任务查询Build产生的Bug-类型分布(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询Build产生的Bug-类型分布(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchbuildproducebugtype_project")
	public ResponseEntity<Page<BugDTO>> searchBugBuildProduceBugType_ProjectByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchBuildProduceBugType_Project(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据产品需求任务获取当前用户解决的Bug", tags = {"Bug" } ,notes = "根据产品需求任务获取当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchcuruserresolve")
	public ResponseEntity<List<BugDTO>> fetchBugCurUserResolveByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchCurUserResolve-all')")
	@ApiOperation(value = "根据产品需求任务查询当前用户解决的Bug", tags = {"Bug" } ,notes = "根据产品需求任务查询当前用户解决的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchcuruserresolve")
	public ResponseEntity<Page<BugDTO>> searchBugCurUserResolveByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchCurUserResolve(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品需求任务获取DEFAULT", tags = {"Bug" } ,notes = "根据产品需求任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchDefault-all')")
	@ApiOperation(value = "根据产品需求任务查询DEFAULT", tags = {"Bug" } ,notes = "根据产品需求任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据产品需求任务获取ES批量的导入", tags = {"Bug" } ,notes = "根据产品需求任务获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchesbulk")
	public ResponseEntity<List<BugDTO>> fetchBugESBulkByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchESBulk-all')")
	@ApiOperation(value = "根据产品需求任务查询ES批量的导入", tags = {"Bug" } ,notes = "根据产品需求任务查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchesbulk")
	public ResponseEntity<Page<BugDTO>> searchBugESBulkByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据产品需求任务获取我代理的Bug", tags = {"Bug" } ,notes = "根据产品需求任务获取我代理的Bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchmyagentbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyAgentBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyAgentBug-all')")
	@ApiOperation(value = "根据产品需求任务查询我代理的Bug", tags = {"Bug" } ,notes = "根据产品需求任务查询我代理的Bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchmyagentbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyAgentBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyAgentBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据产品需求任务获取累计创建的Bug数", tags = {"Bug" } ,notes = "根据产品需求任务获取累计创建的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchmycuropenedbug")
	public ResponseEntity<List<BugDTO>> fetchBugMyCurOpenedBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyCurOpenedBug-all')")
	@ApiOperation(value = "根据产品需求任务查询累计创建的Bug数", tags = {"Bug" } ,notes = "根据产品需求任务查询累计创建的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchmycuropenedbug")
	public ResponseEntity<Page<BugDTO>> searchBugMyCurOpenedBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyCurOpenedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品需求任务获取我的收藏", tags = {"Bug" } ,notes = "根据产品需求任务获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchmyfavorites")
	public ResponseEntity<List<BugDTO>> fetchBugMyFavoritesByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchMyFavorites-all')")
	@ApiOperation(value = "根据产品需求任务查询我的收藏", tags = {"Bug" } ,notes = "根据产品需求任务查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchmyfavorites")
	public ResponseEntity<Page<BugDTO>> searchBugMyFavoritesByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据产品需求任务获取计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据产品需求任务获取计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchnotcurplanlinkbug")
	public ResponseEntity<List<BugDTO>> fetchBugNotCurPlanLinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchNotCurPlanLinkBug-all')")
	@ApiOperation(value = "根据产品需求任务查询计划关联bug（去除已关联）", tags = {"Bug" } ,notes = "根据产品需求任务查询计划关联bug（去除已关联）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchnotcurplanlinkbug")
	public ResponseEntity<Page<BugDTO>> searchBugNotCurPlanLinkBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchNotCurPlanLinkBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据产品需求任务获取遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据产品需求任务获取遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchprojectbugs")
	public ResponseEntity<List<BugDTO>> fetchBugProjectBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchProjectBugs-all')")
	@ApiOperation(value = "根据产品需求任务查询遗留得Bug(项目)", tags = {"Bug" } ,notes = "根据产品需求任务查询遗留得Bug(项目)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchprojectbugs")
	public ResponseEntity<Page<BugDTO>> searchBugProjectBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchProjectBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品需求任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseBugs-all')")
	@ApiOperation(value = "根据产品需求任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品需求任务获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品需求任务查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据产品需求任务获取发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据产品需求任务获取发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchreleaselinkableleftbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableLeftBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableLeftBug-all')")
	@ApiOperation(value = "根据产品需求任务查询发布可关联的bug（遗留）", tags = {"Bug" } ,notes = "根据产品需求任务查询发布可关联的bug（遗留）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchreleaselinkableleftbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableLeftBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableLeftBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据产品需求任务获取发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务获取发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchreleaselinkableresolvedbug")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLinkableResolvedBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReleaseLinkableResolvedBug-all')")
	@ApiOperation(value = "根据产品需求任务查询发布可关联的bug（已解决）", tags = {"Bug" } ,notes = "根据产品需求任务查询发布可关联的bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchreleaselinkableresolvedbug")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLinkableResolvedBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReleaseLinkableResolvedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据产品需求任务获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品需求任务获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,@RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchReportBugs-all')")
	@ApiOperation(value = "根据产品需求任务查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品需求任务查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据产品需求任务获取任务相关bug", tags = {"Bug" } ,notes = "根据产品需求任务获取任务相关bug")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/fetchtaskrelatedbug")
	public ResponseEntity<List<BugDTO>> fetchBugTaskRelatedBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id,BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-searchTaskRelatedBug-all')")
	@ApiOperation(value = "根据产品需求任务查询任务相关bug", tags = {"Bug" } ,notes = "根据产品需求任务查询任务相关bug")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/bugs/searchtaskrelatedbug")
	public ResponseEntity<Page<BugDTO>> searchBugTaskRelatedBugByProductStoryTask(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @PathVariable("task_id") Long task_id, @RequestBody BugSearchContext context) {
        context.setN_task_eq(task_id);
        Page<Bug> domains = bugService.searchTaskRelatedBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

