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
import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.zentao.service.IStoryService;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"需求" })
@RestController("WebApi-story")
@RequestMapping("")
public class StoryResource {

    @Autowired
    public IStoryService storyService;

    @Autowired
    @Lazy
    public StoryMapping storyMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Create-all')")
    @ApiOperation(value = "新建需求", tags = {"需求" },  notes = "新建需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories")
    @Transactional
    public ResponseEntity<StoryDTO> create(@RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
		storyService.create(domain);
        StoryDTO dto = storyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Create-all')")
    @ApiOperation(value = "批量新建需求", tags = {"需求" },  notes = "批量新建需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.createBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Update-all')")
    @ApiOperation(value = "更新需求", tags = {"需求" },  notes = "更新需求")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}")
    @Transactional
    public ResponseEntity<StoryDTO> update(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
		Story domain  = storyMapping.toDomain(storydto);
        domain .setId(story_id);
		storyService.update(domain );
		StoryDTO dto = storyMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Update-all')")
    @ApiOperation(value = "批量更新需求", tags = {"需求" },  notes = "批量更新需求")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.updateBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Remove-all')")
    @ApiOperation(value = "删除需求", tags = {"需求" },  notes = "删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("story_id") BigInteger story_id) {
         return ResponseEntity.status(HttpStatus.OK).body(storyService.remove(story_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Remove-all')")
    @ApiOperation(value = "批量删除需求", tags = {"需求" },  notes = "批量删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        storyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Get-all')")
    @ApiOperation(value = "获取需求", tags = {"需求" },  notes = "获取需求")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}")
    public ResponseEntity<StoryDTO> get(@PathVariable("story_id") BigInteger story_id) {
        Story domain = storyService.get(story_id);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取需求草稿", tags = {"需求" },  notes = "获取需求草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/getdraft")
    public ResponseEntity<StoryDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(storyService.getDraft(new Story())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Activate-all')")
    @ApiOperation(value = "激活", tags = {"需求" },  notes = "激活")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/activate")
    @Transactional
    public ResponseEntity<StoryDTO> activate(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.activate(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AssignTo-all')")
    @ApiOperation(value = "指派", tags = {"需求" },  notes = "指派")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/assignto")
    @Transactional
    public ResponseEntity<StoryDTO> assignTo(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.assignTo(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchAssignTo-all')")
    @ApiOperation(value = "批量指派", tags = {"需求" },  notes = "批量指派")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchassignto")
    @Transactional
    public ResponseEntity<StoryDTO> batchAssignTo(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchAssignTo(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeBranch-all')")
    @ApiOperation(value = "批量变更平台/分支", tags = {"需求" },  notes = "批量变更平台/分支")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangebranch")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangeBranch(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchChangeBranch(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeModule-all')")
    @ApiOperation(value = "批量变更模块", tags = {"需求" },  notes = "批量变更模块")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangemodule")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangeModule(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchChangeModule(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangePlan-all')")
    @ApiOperation(value = "批量关联计划", tags = {"需求" },  notes = "批量关联计划")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangeplan")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangePlan(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchChangePlan(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeStage-all')")
    @ApiOperation(value = "批量变更阶段", tags = {"需求" },  notes = "批量变更阶段")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangestage")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangeStage(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchChangeStage(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchClose-all')")
    @ApiOperation(value = "批量关闭", tags = {"需求" },  notes = "批量关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchclose")
    @Transactional
    public ResponseEntity<StoryDTO> batchClose(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchClose(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchReview-all')")
    @ApiOperation(value = "批量评审", tags = {"需求" },  notes = "批量评审")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchreview")
    @Transactional
    public ResponseEntity<StoryDTO> batchReview(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchReview(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchUnlinkStory-all')")
    @ApiOperation(value = "计划批量解除关联需求", tags = {"需求" },  notes = "计划批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> batchUnlinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.batchUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BugToStory-all')")
    @ApiOperation(value = "bug转需求", tags = {"需求" },  notes = "bug转需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugtostory")
    @Transactional
    public ResponseEntity<StoryDTO> bugToStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.bugToStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Change-all')")
    @ApiOperation(value = "变更", tags = {"需求" },  notes = "变更")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/change")
    @Transactional
    public ResponseEntity<StoryDTO> change(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.change(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @ApiOperation(value = "检查需求", tags = {"需求" },  notes = "检查需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody StoryDTO storydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(storyService.checkKey(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Close-all')")
    @ApiOperation(value = "关闭", tags = {"需求" },  notes = "关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/close")
    @Transactional
    public ResponseEntity<StoryDTO> close(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.close(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetStorySpec-all')")
    @ApiOperation(value = "获取需求描述", tags = {"需求" },  notes = "获取需求描述")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/getstoryspec")
    @Transactional
    public ResponseEntity<StoryDTO> getStorySpec(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.getStorySpec(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-LinkStory-all')")
    @ApiOperation(value = "计划关联需求", tags = {"需求" },  notes = "计划关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/linkstory")
    @Transactional
    public ResponseEntity<StoryDTO> linkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.linkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectBatchUnlinkStory-all')")
    @ApiOperation(value = "项目批量解除关联需求", tags = {"需求" },  notes = "项目批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/projectbatchunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> projectBatchUnlinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.projectBatchUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectLinkStory-all')")
    @ApiOperation(value = "项目关联需求", tags = {"需求" },  notes = "项目关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/projectlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> projectLinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.projectLinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectUnlinkStory-all')")
    @ApiOperation(value = "项目解除关联需求", tags = {"需求" },  notes = "项目解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/projectunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> projectUnlinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.projectUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseBatchUnlinkStory-all')")
    @ApiOperation(value = "项目批量解除关联需求", tags = {"需求" },  notes = "项目批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/releasebatchunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> releaseBatchUnlinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.releaseBatchUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseLinkStory-all')")
    @ApiOperation(value = "项目关联需求", tags = {"需求" },  notes = "项目关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/releaselinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> releaseLinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.releaseLinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseUnlinkStory-all')")
    @ApiOperation(value = "项目解除关联需求", tags = {"需求" },  notes = "项目解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/releaseunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> releaseUnlinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.releaseUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ResetReviewedBy-all')")
    @ApiOperation(value = "重置由谁评审", tags = {"需求" },  notes = "重置由谁评审")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/resetreviewedby")
    @Transactional
    public ResponseEntity<StoryDTO> resetReviewedBy(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.resetReviewedBy(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Review-all')")
    @ApiOperation(value = "评审", tags = {"需求" },  notes = "评审")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/review")
    @Transactional
    public ResponseEntity<StoryDTO> review(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.review(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Save-all')")
    @ApiOperation(value = "保存需求", tags = {"需求" },  notes = "保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/save")
    public ResponseEntity<Boolean> save(@RequestBody StoryDTO storydto) {
        return ResponseEntity.status(HttpStatus.OK).body(storyService.save(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Save-all')")
    @ApiOperation(value = "批量保存需求", tags = {"需求" },  notes = "批量保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.saveBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-UnlinkStory-all')")
    @ApiOperation(value = "计划解除关联需求", tags = {"需求" },  notes = "计划解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/unlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> unlinkStory(@PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
domain.setId(story_id);
        domain = storyService.unlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all')")
	@ApiOperation(value = "获取版本可关联的需求（产品内）", tags = {"需求" } ,notes = "获取版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchbuildlinkablestories")
	public ResponseEntity<List<StoryDTO>> fetchBuildLinkableStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all')")
	@ApiOperation(value = "查询版本可关联的需求（产品内）", tags = {"需求" } ,notes = "查询版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbuildlinkablestories")
	public ResponseEntity<Page<StoryDTO>> searchBuildLinkableStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all')")
	@ApiOperation(value = "获取获取版本相关需求", tags = {"需求" } ,notes = "获取获取版本相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchbuildstories")
	public ResponseEntity<List<StoryDTO>> fetchBuildStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all')")
	@ApiOperation(value = "查询获取版本相关需求", tags = {"需求" } ,notes = "查询获取版本相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbuildstories")
	public ResponseEntity<Page<StoryDTO>> searchBuildStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all')")
	@ApiOperation(value = "获取通过模块查询", tags = {"需求" } ,notes = "获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchbymodule")
	public ResponseEntity<List<StoryDTO>> fetchByModule(StorySearchContext context) {
        Page<Story> domains = storyService.searchByModule(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all')")
	@ApiOperation(value = "查询通过模块查询", tags = {"需求" } ,notes = "查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbymodule")
	public ResponseEntity<Page<StoryDTO>> searchByModule(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"需求" } ,notes = "获取DEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"需求" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchdefault")
	public ResponseEntity<Page<StoryDTO>> searchDefault(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all')")
	@ApiOperation(value = "获取获取产品需求", tags = {"需求" } ,notes = "获取获取产品需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchgetproductstories")
	public ResponseEntity<List<StoryDTO>> fetchGetProductStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchGetProductStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all')")
	@ApiOperation(value = "查询获取产品需求", tags = {"需求" } ,notes = "查询获取产品需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchgetproductstories")
	public ResponseEntity<Page<StoryDTO>> searchGetProductStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchGetProductStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all')")
	@ApiOperation(value = "获取项目相关需求", tags = {"需求" } ,notes = "获取项目相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchprojectstories")
	public ResponseEntity<List<StoryDTO>> fetchProjectStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchProjectStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all')")
	@ApiOperation(value = "查询项目相关需求", tags = {"需求" } ,notes = "查询项目相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchprojectstories")
	public ResponseEntity<Page<StoryDTO>> searchProjectStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchProjectStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all')")
	@ApiOperation(value = "获取获取产品发布相关需求", tags = {"需求" } ,notes = "获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchreleasestories")
	public ResponseEntity<List<StoryDTO>> fetchReleaseStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchReleaseStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all')")
	@ApiOperation(value = "查询获取产品发布相关需求", tags = {"需求" } ,notes = "查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchreleasestories")
	public ResponseEntity<Page<StoryDTO>> searchReleaseStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchReleaseStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all')")
	@ApiOperation(value = "获取通过模块查询", tags = {"需求" } ,notes = "获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchreportstories")
	public ResponseEntity<List<StoryDTO>> fetchReportStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchReportStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all')")
	@ApiOperation(value = "查询通过模块查询", tags = {"需求" } ,notes = "查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchreportstories")
	public ResponseEntity<Page<StoryDTO>> searchReportStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchReportStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all')")
	@ApiOperation(value = "获取获取产品发布相关需求", tags = {"需求" } ,notes = "获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchstorychild")
	public ResponseEntity<List<StoryDTO>> fetchStoryChild(StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryChild(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all')")
	@ApiOperation(value = "查询获取产品发布相关需求", tags = {"需求" } ,notes = "查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchstorychild")
	public ResponseEntity<Page<StoryDTO>> searchStoryChild(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryChild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all')")
	@ApiOperation(value = "获取获取产品发布相关需求", tags = {"需求" } ,notes = "获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchstoryrelated")
	public ResponseEntity<List<StoryDTO>> fetchStoryRelated(StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryRelated(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all')")
	@ApiOperation(value = "查询获取产品发布相关需求", tags = {"需求" } ,notes = "查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchstoryrelated")
	public ResponseEntity<Page<StoryDTO>> searchStoryRelated(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryRelated(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all')")
	@ApiOperation(value = "获取任务相关需求", tags = {"需求" } ,notes = "获取任务相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchtaskrelatedstory")
	public ResponseEntity<List<StoryDTO>> fetchTaskRelatedStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all')")
	@ApiOperation(value = "查询任务相关需求", tags = {"需求" } ,notes = "查询任务相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchtaskrelatedstory")
	public ResponseEntity<Page<StoryDTO>> searchTaskRelatedStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Create-all')")
    @ApiOperation(value = "根据产品建立需求", tags = {"需求" },  notes = "根据产品建立需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories")
    @Transactional
    public ResponseEntity<StoryDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
		storyService.create(domain);
        StoryDTO dto = storyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Create-all')")
    @ApiOperation(value = "根据产品批量建立需求", tags = {"需求" },  notes = "根据产品批量建立需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
            domain.setProduct(product_id);
        }
        storyService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Update-all')")
    @ApiOperation(value = "根据产品更新需求", tags = {"需求" },  notes = "根据产品更新需求")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Update-all')")
    @ApiOperation(value = "根据产品批量更新需求", tags = {"需求" },  notes = "根据产品批量更新需求")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
            domain.setProduct(product_id);
        }
        storyService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Remove-all')")
    @ApiOperation(value = "根据产品删除需求", tags = {"需求" },  notes = "根据产品删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id) {
		return ResponseEntity.status(HttpStatus.OK).body(storyService.remove(story_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Remove-all')")
    @ApiOperation(value = "根据产品批量删除需求", tags = {"需求" },  notes = "根据产品批量删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        storyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Get-all')")
    @ApiOperation(value = "根据产品获取需求", tags = {"需求" },  notes = "根据产品获取需求")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}")
    public ResponseEntity<StoryDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id) {
        Story domain = storyService.get(story_id);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取需求草稿", tags = {"需求" },  notes = "根据产品获取需求草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/getdraft")
    public ResponseEntity<StoryDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Story domain = new Story();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(storyService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Activate-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/activate")
    @Transactional
    public ResponseEntity<StoryDTO> activateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.activate(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AssignTo-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/assignto")
    @Transactional
    public ResponseEntity<StoryDTO> assignToByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.assignTo(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchAssignTo-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchassignto")
    @Transactional
    public ResponseEntity<StoryDTO> batchAssignToByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchAssignTo(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeBranch-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangebranch")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangeBranchByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangeBranch(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeModule-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangemodule")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangeModuleByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangeModule(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangePlan-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangeplan")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangePlanByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangePlan(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeStage-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangestage")
    @Transactional
    public ResponseEntity<StoryDTO> batchChangeStageByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangeStage(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchClose-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchclose")
    @Transactional
    public ResponseEntity<StoryDTO> batchCloseByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchClose(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchReview-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchreview")
    @Transactional
    public ResponseEntity<StoryDTO> batchReviewByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchReview(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> batchUnlinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BugToStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugtostory")
    @Transactional
    public ResponseEntity<StoryDTO> bugToStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.bugToStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Change-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/change")
    @Transactional
    public ResponseEntity<StoryDTO> changeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.change(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @ApiOperation(value = "根据产品检查需求", tags = {"需求" },  notes = "根据产品检查需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StoryDTO storydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(storyService.checkKey(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Close-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/close")
    @Transactional
    public ResponseEntity<StoryDTO> closeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.close(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetStorySpec-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/getstoryspec")
    @Transactional
    public ResponseEntity<StoryDTO> getStorySpecByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.getStorySpec(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-LinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/linkstory")
    @Transactional
    public ResponseEntity<StoryDTO> linkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.linkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectBatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/projectbatchunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> projectBatchUnlinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.projectBatchUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectLinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/projectlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> projectLinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.projectLinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/projectunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> projectUnlinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.projectUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseBatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/releasebatchunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> releaseBatchUnlinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.releaseBatchUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseLinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/releaselinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> releaseLinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.releaseLinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/releaseunlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> releaseUnlinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.releaseUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ResetReviewedBy-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/resetreviewedby")
    @Transactional
    public ResponseEntity<StoryDTO> resetReviewedByByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.resetReviewedBy(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Review-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/review")
    @Transactional
    public ResponseEntity<StoryDTO> reviewByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.review(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Save-all')")
    @ApiOperation(value = "根据产品保存需求", tags = {"需求" },  notes = "根据产品保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(storyService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Save-all')")
    @ApiOperation(value = "根据产品批量保存需求", tags = {"需求" },  notes = "根据产品批量保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
             domain.setProduct(product_id);
        }
        storyService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-UnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/unlinkstory")
    @Transactional
    public ResponseEntity<StoryDTO> unlinkStoryByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.unlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all')")
	@ApiOperation(value = "根据产品获取版本可关联的需求（产品内）", tags = {"需求" } ,notes = "根据产品获取版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchbuildlinkablestories")
	public ResponseEntity<List<StoryDTO>> fetchStoryBuildLinkableStoriesByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all')")
	@ApiOperation(value = "根据产品查询版本可关联的需求（产品内）", tags = {"需求" } ,notes = "根据产品查询版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbuildlinkablestories")
	public ResponseEntity<Page<StoryDTO>> searchStoryBuildLinkableStoriesByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all')")
	@ApiOperation(value = "根据产品获取获取版本相关需求", tags = {"需求" } ,notes = "根据产品获取获取版本相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchbuildstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryBuildStoriesByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all')")
	@ApiOperation(value = "根据产品查询获取版本相关需求", tags = {"需求" } ,notes = "根据产品查询获取版本相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbuildstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryBuildStoriesByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all')")
	@ApiOperation(value = "根据产品获取通过模块查询", tags = {"需求" } ,notes = "根据产品获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchbymodule")
	public ResponseEntity<List<StoryDTO>> fetchStoryByModuleByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchByModule(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all')")
	@ApiOperation(value = "根据产品查询通过模块查询", tags = {"需求" } ,notes = "根据产品查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbymodule")
	public ResponseEntity<Page<StoryDTO>> searchStoryByModuleByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"需求" } ,notes = "根据产品获取DEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"需求" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchdefault")
	public ResponseEntity<Page<StoryDTO>> searchStoryDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all')")
	@ApiOperation(value = "根据产品获取获取产品需求", tags = {"需求" } ,notes = "根据产品获取获取产品需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchgetproductstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryGetProductStoriesByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchGetProductStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all')")
	@ApiOperation(value = "根据产品查询获取产品需求", tags = {"需求" } ,notes = "根据产品查询获取产品需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchgetproductstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryGetProductStoriesByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchGetProductStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all')")
	@ApiOperation(value = "根据产品获取项目相关需求", tags = {"需求" } ,notes = "根据产品获取项目相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchprojectstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryProjectStoriesByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchProjectStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all')")
	@ApiOperation(value = "根据产品查询项目相关需求", tags = {"需求" } ,notes = "根据产品查询项目相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchprojectstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryProjectStoriesByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchProjectStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all')")
	@ApiOperation(value = "根据产品获取获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchreleasestories")
	public ResponseEntity<List<StoryDTO>> fetchStoryReleaseStoriesByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReleaseStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all')")
	@ApiOperation(value = "根据产品查询获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchreleasestories")
	public ResponseEntity<Page<StoryDTO>> searchStoryReleaseStoriesByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReleaseStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all')")
	@ApiOperation(value = "根据产品获取通过模块查询", tags = {"需求" } ,notes = "根据产品获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchreportstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryReportStoriesByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReportStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all')")
	@ApiOperation(value = "根据产品查询通过模块查询", tags = {"需求" } ,notes = "根据产品查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchreportstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryReportStoriesByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReportStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all')")
	@ApiOperation(value = "根据产品获取获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchstorychild")
	public ResponseEntity<List<StoryDTO>> fetchStoryStoryChildByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryChild(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all')")
	@ApiOperation(value = "根据产品查询获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchstorychild")
	public ResponseEntity<Page<StoryDTO>> searchStoryStoryChildByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryChild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all')")
	@ApiOperation(value = "根据产品获取获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchstoryrelated")
	public ResponseEntity<List<StoryDTO>> fetchStoryStoryRelatedByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryRelated(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all')")
	@ApiOperation(value = "根据产品查询获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchstoryrelated")
	public ResponseEntity<Page<StoryDTO>> searchStoryStoryRelatedByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryRelated(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all')")
	@ApiOperation(value = "根据产品获取任务相关需求", tags = {"需求" } ,notes = "根据产品获取任务相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchtaskrelatedstory")
	public ResponseEntity<List<StoryDTO>> fetchStoryTaskRelatedStoryByProduct(@PathVariable("product_id") BigInteger product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all')")
	@ApiOperation(value = "根据产品查询任务相关需求", tags = {"需求" } ,notes = "根据产品查询任务相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchtaskrelatedstory")
	public ResponseEntity<Page<StoryDTO>> searchStoryTaskRelatedStoryByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

