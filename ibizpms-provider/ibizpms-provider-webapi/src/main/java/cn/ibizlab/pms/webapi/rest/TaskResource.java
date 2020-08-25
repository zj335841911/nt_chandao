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
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;
import cn.ibizlab.pms.core.zentao.filter.TaskEstimateSearchContext;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.service.ITaskEstimateService;
import cn.ibizlab.pms.core.ibiz.filter.TaskTeamSearchContext;
import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.ibiz.service.ITaskTeamService;

@Slf4j
@Api(tags = {"任务" })
@RestController("WebApi-task")
@RequestMapping("")
public class TaskResource {

    @Autowired
    public ITaskService taskService;

    @Autowired
    @Lazy
    public TaskMapping taskMapping;

    @Autowired
    private ITaskEstimateService taskestimateService;

    @Autowired
    private ITaskTeamService taskteamService;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "新建任务", tags = {"任务" },  notes = "新建任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks")
    public ResponseEntity<TaskDTO> create(@RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
		taskService.create(domain);
        TaskDTO dto = taskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "批量新建任务", tags = {"任务" },  notes = "批量新建任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TaskDTO> taskdtos) {
        taskService.createBatch(taskMapping.toDomain(taskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "task" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "更新任务", tags = {"任务" },  notes = "更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}")
    public ResponseEntity<TaskDTO> update(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
		Task domain  = taskMapping.toDomain(taskdto);
        domain .setId(task_id);
		taskService.update(domain );
		TaskDTO dto = taskMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "批量更新任务", tags = {"任务" },  notes = "批量更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TaskDTO> taskdtos) {
        taskService.updateBatch(taskMapping.toDomain(taskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "删除任务", tags = {"任务" },  notes = "删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("task_id") BigInteger task_id) {
         return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(task_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "批量删除任务", tags = {"任务" },  notes = "批量删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "获取任务", tags = {"任务" },  notes = "获取任务")
	@RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}")
    public ResponseEntity<TaskDTO> get(@PathVariable("task_id") BigInteger task_id) {
        Task domain = taskService.get(task_id);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取任务草稿", tags = {"任务" },  notes = "获取任务草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/tasks/getdraft")
    public ResponseEntity<TaskDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(taskMapping.toDto(taskService.getDraft(new Task())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Activate-all')")
    @ApiOperation(value = "激活", tags = {"任务" },  notes = "激活")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/activate")
    public ResponseEntity<TaskDTO> activate(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.activate(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-AssignTo-all')")
    @ApiOperation(value = "指派/转交", tags = {"任务" },  notes = "指派/转交")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/assignto")
    public ResponseEntity<TaskDTO> assignTo(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.assignTo(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Cancel-all')")
    @ApiOperation(value = "取消", tags = {"任务" },  notes = "取消")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/cancel")
    public ResponseEntity<TaskDTO> cancel(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.cancel(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @ApiOperation(value = "检查任务", tags = {"任务" },  notes = "检查任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TaskDTO taskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Close-all')")
    @ApiOperation(value = "关闭", tags = {"任务" },  notes = "关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/close")
    public ResponseEntity<TaskDTO> close(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.close(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-DeleteEstimate-all')")
    @ApiOperation(value = "删除工时", tags = {"任务" },  notes = "删除工时")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/deleteestimate")
    public ResponseEntity<TaskDTO> deleteEstimate(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.deleteEstimate(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-EditEstimate-all')")
    @ApiOperation(value = "编辑工时", tags = {"任务" },  notes = "编辑工时")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/editestimate")
    public ResponseEntity<TaskDTO> editEstimate(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.editEstimate(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Finish-all')")
    @ApiOperation(value = "完成", tags = {"任务" },  notes = "完成")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/finish")
    public ResponseEntity<TaskDTO> finish(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.finish(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Pause-all')")
    @ApiOperation(value = "暂停", tags = {"任务" },  notes = "暂停")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/pause")
    public ResponseEntity<TaskDTO> pause(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.pause(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RecordEstimate-all')")
    @ApiOperation(value = "工时录入", tags = {"任务" },  notes = "工时录入")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/recordestimate")
    public ResponseEntity<TaskDTO> recordEstimate(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.recordEstimate(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Restart-all')")
    @ApiOperation(value = "继续", tags = {"任务" },  notes = "继续")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/restart")
    public ResponseEntity<TaskDTO> restart(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.restart(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "保存任务", tags = {"任务" },  notes = "保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/save")
    public ResponseEntity<Boolean> save(@RequestBody TaskDTO taskdto) {
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "批量保存任务", tags = {"任务" },  notes = "批量保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TaskDTO> taskdtos) {
        taskService.saveBatch(taskMapping.toDomain(taskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Start-all')")
    @ApiOperation(value = "开始", tags = {"任务" },  notes = "开始")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/start")
    public ResponseEntity<TaskDTO> start(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
domain.setId(task_id);
        domain = taskService.start(domain);
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "获取通过模块查询", tags = {"任务" } ,notes = "获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/fetchbymodule")
	public ResponseEntity<List<TaskDTO>> fetchByModule(TaskSearchContext context) {
        Page<Task> domains = taskService.searchByModule(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "查询通过模块查询", tags = {"任务" } ,notes = "查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchbymodule")
	public ResponseEntity<Page<TaskDTO>> searchByModule(@RequestBody TaskSearchContext context) {
        Page<Task> domains = taskService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"任务" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/fetchdefault")
	public ResponseEntity<List<TaskDTO>> fetchDefault(TaskSearchContext context) {
        Page<Task> domains = taskService.searchDefault(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"任务" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchdefault")
	public ResponseEntity<Page<TaskDTO>> searchDefault(@RequestBody TaskSearchContext context) {
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "获取DefaultRow", tags = {"任务" } ,notes = "获取DefaultRow")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/fetchdefaultrow")
	public ResponseEntity<List<TaskDTO>> fetchDefaultRow(TaskSearchContext context) {
        Page<Task> domains = taskService.searchDefaultRow(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "查询DefaultRow", tags = {"任务" } ,notes = "查询DefaultRow")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchdefaultrow")
	public ResponseEntity<Page<TaskDTO>> searchDefaultRow(@RequestBody TaskSearchContext context) {
        Page<Task> domains = taskService.searchDefaultRow(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "获取项目任务", tags = {"任务" } ,notes = "获取项目任务")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/fetchprojecttask")
	public ResponseEntity<List<TaskDTO>> fetchProjectTASK(TaskSearchContext context) {
        Page<Task> domains = taskService.searchProjectTASK(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "查询项目任务", tags = {"任务" } ,notes = "查询项目任务")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchprojecttask")
	public ResponseEntity<Page<TaskDTO>> searchProjectTASK(@RequestBody TaskSearchContext context) {
        Page<Task> domains = taskService.searchProjectTASK(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "获取根任务", tags = {"任务" } ,notes = "获取根任务")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/fetchroottask")
	public ResponseEntity<List<TaskDTO>> fetchRootTask(TaskSearchContext context) {
        Page<Task> domains = taskService.searchRootTask(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "查询根任务", tags = {"任务" } ,notes = "查询根任务")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchroottask")
	public ResponseEntity<Page<TaskDTO>> searchRootTask(@RequestBody TaskSearchContext context) {
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
	@ApiOperation(value = "获取任务类型分组", tags = {"任务" } ,notes = "获取任务类型分组")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/fetchtypegroup")
	public ResponseEntity<List<HashMap>> fetchTypeGroup(TaskSearchContext context) {
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(domains.getContent());
	}

	@ApiOperation(value = "查询任务类型分组", tags = {"任务" } ,notes = "查询任务类型分组")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchTypeGroup(@RequestBody TaskSearchContext context) {
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据需求建立任务", tags = {"任务" },  notes = "根据需求建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks")
    public ResponseEntity<TaskDTO> createByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
		taskService.create(domain);
        TaskDTO dto = taskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据需求批量建立任务", tags = {"任务" },  notes = "根据需求批量建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/batch")
    public ResponseEntity<Boolean> createBatchByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setStory(story_id);
        }
        taskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "task" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据需求更新任务", tags = {"任务" },  notes = "根据需求更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/tasks/{task_id}")
    public ResponseEntity<TaskDTO> updateByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain.setId(task_id);
		taskService.update(domain);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据需求批量更新任务", tags = {"任务" },  notes = "根据需求批量更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/tasks/batch")
    public ResponseEntity<Boolean> updateBatchByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setStory(story_id);
        }
        taskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据需求删除任务", tags = {"任务" },  notes = "根据需求删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/tasks/{task_id}")
    public ResponseEntity<Boolean> removeByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(task_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据需求批量删除任务", tags = {"任务" },  notes = "根据需求批量删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/tasks/batch")
    public ResponseEntity<Boolean> removeBatchByStory(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "根据需求获取任务", tags = {"任务" },  notes = "根据需求获取任务")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/tasks/{task_id}")
    public ResponseEntity<TaskDTO> getByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id) {
        Task domain = taskService.get(task_id);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据需求获取任务草稿", tags = {"任务" },  notes = "根据需求获取任务草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/tasks/getdraft")
    public ResponseEntity<TaskDTO> getDraftByStory(@PathVariable("story_id") BigInteger story_id) {
        Task domain = new Task();
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskMapping.toDto(taskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Activate-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/activate")
    public ResponseEntity<TaskDTO> activateByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.activate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-AssignTo-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/assignto")
    public ResponseEntity<TaskDTO> assignToByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.assignTo(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Cancel-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/cancel")
    public ResponseEntity<TaskDTO> cancelByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.cancel(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @ApiOperation(value = "根据需求检查任务", tags = {"任务" },  notes = "根据需求检查任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskDTO taskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Close-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/close")
    public ResponseEntity<TaskDTO> closeByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.close(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-DeleteEstimate-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/deleteestimate")
    public ResponseEntity<TaskDTO> deleteEstimateByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.deleteEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-EditEstimate-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/editestimate")
    public ResponseEntity<TaskDTO> editEstimateByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.editEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Finish-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/finish")
    public ResponseEntity<TaskDTO> finishByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.finish(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Pause-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/pause")
    public ResponseEntity<TaskDTO> pauseByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.pause(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RecordEstimate-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/recordestimate")
    public ResponseEntity<TaskDTO> recordEstimateByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.recordEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Restart-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/restart")
    public ResponseEntity<TaskDTO> restartByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.restart(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据需求保存任务", tags = {"任务" },  notes = "根据需求保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/save")
    public ResponseEntity<Boolean> saveByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据需求批量保存任务", tags = {"任务" },  notes = "根据需求批量保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
             domain.setStory(story_id);
        }
        taskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Start-all')")
    @ApiOperation(value = "根据需求任务", tags = {"任务" },  notes = "根据需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/start")
    public ResponseEntity<TaskDTO> startByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.start(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据需求获取通过模块查询", tags = {"任务" } ,notes = "根据需求获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/fetchbymodule")
	public ResponseEntity<List<TaskDTO>> fetchTaskByModuleByStory(@PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchByModule(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据需求查询通过模块查询", tags = {"任务" } ,notes = "根据需求查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/searchbymodule")
	public ResponseEntity<Page<TaskDTO>> searchTaskByModuleByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据需求获取DEFAULT", tags = {"任务" } ,notes = "根据需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/fetchdefault")
	public ResponseEntity<List<TaskDTO>> fetchTaskDefaultByStory(@PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefault(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据需求查询DEFAULT", tags = {"任务" } ,notes = "根据需求查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/searchdefault")
	public ResponseEntity<Page<TaskDTO>> searchTaskDefaultByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "根据需求获取DefaultRow", tags = {"任务" } ,notes = "根据需求获取DefaultRow")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/fetchdefaultrow")
	public ResponseEntity<List<TaskDTO>> fetchTaskDefaultRowByStory(@PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefaultRow(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "根据需求查询DefaultRow", tags = {"任务" } ,notes = "根据需求查询DefaultRow")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/searchdefaultrow")
	public ResponseEntity<Page<TaskDTO>> searchTaskDefaultRowByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefaultRow(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "根据需求获取项目任务", tags = {"任务" } ,notes = "根据需求获取项目任务")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/fetchprojecttask")
	public ResponseEntity<List<TaskDTO>> fetchTaskProjectTASKByStory(@PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchProjectTASK(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "根据需求查询项目任务", tags = {"任务" } ,notes = "根据需求查询项目任务")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/searchprojecttask")
	public ResponseEntity<Page<TaskDTO>> searchTaskProjectTASKByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchProjectTASK(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据需求获取根任务", tags = {"任务" } ,notes = "根据需求获取根任务")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/fetchroottask")
	public ResponseEntity<List<TaskDTO>> fetchTaskRootTaskByStory(@PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据需求查询根任务", tags = {"任务" } ,notes = "根据需求查询根任务")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/searchroottask")
	public ResponseEntity<Page<TaskDTO>> searchTaskRootTaskByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
	@ApiOperation(value = "根据需求获取任务类型分组", tags = {"任务" } ,notes = "根据需求获取任务类型分组")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/fetchtypegroup")
	public ResponseEntity<List<HashMap>> fetchTaskTypeGroupByStory(@PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(domains.getContent());
	}

	@ApiOperation(value = "根据需求查询任务类型分组", tags = {"任务" } ,notes = "根据需求查询任务类型分组")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchTaskTypeGroupByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据项目建立任务", tags = {"任务" },  notes = "根据项目建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks")
    public ResponseEntity<TaskDTO> createByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
		taskService.create(domain);
        TaskDTO dto = taskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据项目批量建立任务", tags = {"任务" },  notes = "根据项目批量建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setProject(project_id);
        }
        taskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "task" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据项目更新任务", tags = {"任务" },  notes = "根据项目更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}")
    public ResponseEntity<TaskDTO> updateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain.setId(task_id);
		taskService.update(domain);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据项目批量更新任务", tags = {"任务" },  notes = "根据项目批量更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setProject(project_id);
        }
        taskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据项目删除任务", tags = {"任务" },  notes = "根据项目删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}")
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(task_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据项目批量删除任务", tags = {"任务" },  notes = "根据项目批量删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "根据项目获取任务", tags = {"任务" },  notes = "根据项目获取任务")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}")
    public ResponseEntity<TaskDTO> getByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id) {
        Task domain = taskService.get(task_id);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目获取任务草稿", tags = {"任务" },  notes = "根据项目获取任务草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/getdraft")
    public ResponseEntity<TaskDTO> getDraftByProject(@PathVariable("project_id") BigInteger project_id) {
        Task domain = new Task();
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskMapping.toDto(taskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Activate-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/activate")
    public ResponseEntity<TaskDTO> activateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.activate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-AssignTo-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/assignto")
    public ResponseEntity<TaskDTO> assignToByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.assignTo(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Cancel-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/cancel")
    public ResponseEntity<TaskDTO> cancelByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.cancel(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @ApiOperation(value = "根据项目检查任务", tags = {"任务" },  notes = "根据项目检查任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskDTO taskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Close-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/close")
    public ResponseEntity<TaskDTO> closeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.close(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-DeleteEstimate-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/deleteestimate")
    public ResponseEntity<TaskDTO> deleteEstimateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.deleteEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-EditEstimate-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/editestimate")
    public ResponseEntity<TaskDTO> editEstimateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.editEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Finish-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/finish")
    public ResponseEntity<TaskDTO> finishByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.finish(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Pause-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/pause")
    public ResponseEntity<TaskDTO> pauseByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.pause(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RecordEstimate-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/recordestimate")
    public ResponseEntity<TaskDTO> recordEstimateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.recordEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Restart-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/restart")
    public ResponseEntity<TaskDTO> restartByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.restart(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据项目保存任务", tags = {"任务" },  notes = "根据项目保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据项目批量保存任务", tags = {"任务" },  notes = "根据项目批量保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
             domain.setProject(project_id);
        }
        taskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Start-all')")
    @ApiOperation(value = "根据项目任务", tags = {"任务" },  notes = "根据项目任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/start")
    public ResponseEntity<TaskDTO> startByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain = taskService.start(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据项目获取通过模块查询", tags = {"任务" } ,notes = "根据项目获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/fetchbymodule")
	public ResponseEntity<List<TaskDTO>> fetchTaskByModuleByProject(@PathVariable("project_id") BigInteger project_id,TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchByModule(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据项目查询通过模块查询", tags = {"任务" } ,notes = "根据项目查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchbymodule")
	public ResponseEntity<Page<TaskDTO>> searchTaskByModuleByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据项目获取DEFAULT", tags = {"任务" } ,notes = "根据项目获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/fetchdefault")
	public ResponseEntity<List<TaskDTO>> fetchTaskDefaultByProject(@PathVariable("project_id") BigInteger project_id,TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchDefault(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据项目查询DEFAULT", tags = {"任务" } ,notes = "根据项目查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchdefault")
	public ResponseEntity<Page<TaskDTO>> searchTaskDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "根据项目获取DefaultRow", tags = {"任务" } ,notes = "根据项目获取DefaultRow")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/fetchdefaultrow")
	public ResponseEntity<List<TaskDTO>> fetchTaskDefaultRowByProject(@PathVariable("project_id") BigInteger project_id,TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchDefaultRow(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "根据项目查询DefaultRow", tags = {"任务" } ,notes = "根据项目查询DefaultRow")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchdefaultrow")
	public ResponseEntity<Page<TaskDTO>> searchTaskDefaultRowByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchDefaultRow(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "根据项目获取项目任务", tags = {"任务" } ,notes = "根据项目获取项目任务")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/fetchprojecttask")
	public ResponseEntity<List<TaskDTO>> fetchTaskProjectTASKByProject(@PathVariable("project_id") BigInteger project_id,TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchProjectTASK(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "根据项目查询项目任务", tags = {"任务" } ,notes = "根据项目查询项目任务")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchprojecttask")
	public ResponseEntity<Page<TaskDTO>> searchTaskProjectTASKByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchProjectTASK(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据项目获取根任务", tags = {"任务" } ,notes = "根据项目获取根任务")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/fetchroottask")
	public ResponseEntity<List<TaskDTO>> fetchTaskRootTaskByProject(@PathVariable("project_id") BigInteger project_id,TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据项目查询根任务", tags = {"任务" } ,notes = "根据项目查询根任务")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchroottask")
	public ResponseEntity<Page<TaskDTO>> searchTaskRootTaskByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
	@ApiOperation(value = "根据项目获取任务类型分组", tags = {"任务" } ,notes = "根据项目获取任务类型分组")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/fetchtypegroup")
	public ResponseEntity<List<HashMap>> fetchTaskTypeGroupByProject(@PathVariable("project_id") BigInteger project_id,TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(domains.getContent());
	}

	@ApiOperation(value = "根据项目查询任务类型分组", tags = {"任务" } ,notes = "根据项目查询任务类型分组")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchTaskTypeGroupByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据产品需求建立任务", tags = {"任务" },  notes = "根据产品需求建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks")
    public ResponseEntity<TaskDTO> createByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
		taskService.create(domain);
        TaskDTO dto = taskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据产品需求批量建立任务", tags = {"任务" },  notes = "根据产品需求批量建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/batch")
    public ResponseEntity<Boolean> createBatchByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setStory(story_id);
        }
        taskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "task" , versionfield = "lastediteddate")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据产品需求更新任务", tags = {"任务" },  notes = "根据产品需求更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}")
    public ResponseEntity<TaskDTO> updateByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain.setId(task_id);
		taskService.update(domain);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据产品需求批量更新任务", tags = {"任务" },  notes = "根据产品需求批量更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/tasks/batch")
    public ResponseEntity<Boolean> updateBatchByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setStory(story_id);
        }
        taskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据产品需求删除任务", tags = {"任务" },  notes = "根据产品需求删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}")
    public ResponseEntity<Boolean> removeByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(task_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据产品需求批量删除任务", tags = {"任务" },  notes = "根据产品需求批量删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/tasks/batch")
    public ResponseEntity<Boolean> removeBatchByProductStory(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "根据产品需求获取任务", tags = {"任务" },  notes = "根据产品需求获取任务")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}")
    public ResponseEntity<TaskDTO> getByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id) {
        Task domain = taskService.get(task_id);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品需求获取任务草稿", tags = {"任务" },  notes = "根据产品需求获取任务草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/tasks/getdraft")
    public ResponseEntity<TaskDTO> getDraftByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id) {
        Task domain = new Task();
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskMapping.toDto(taskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Activate-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/activate")
    public ResponseEntity<TaskDTO> activateByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.activate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-AssignTo-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/assignto")
    public ResponseEntity<TaskDTO> assignToByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.assignTo(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Cancel-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/cancel")
    public ResponseEntity<TaskDTO> cancelByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.cancel(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @ApiOperation(value = "根据产品需求检查任务", tags = {"任务" },  notes = "根据产品需求检查任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskDTO taskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Close-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/close")
    public ResponseEntity<TaskDTO> closeByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.close(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-DeleteEstimate-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/deleteestimate")
    public ResponseEntity<TaskDTO> deleteEstimateByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.deleteEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-EditEstimate-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/editestimate")
    public ResponseEntity<TaskDTO> editEstimateByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.editEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Finish-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/finish")
    public ResponseEntity<TaskDTO> finishByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.finish(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Pause-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/pause")
    public ResponseEntity<TaskDTO> pauseByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.pause(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RecordEstimate-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/recordestimate")
    public ResponseEntity<TaskDTO> recordEstimateByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.recordEstimate(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Restart-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/restart")
    public ResponseEntity<TaskDTO> restartByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.restart(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据产品需求保存任务", tags = {"任务" },  notes = "根据产品需求保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/save")
    public ResponseEntity<Boolean> saveByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据产品需求批量保存任务", tags = {"任务" },  notes = "根据产品需求批量保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
             domain.setStory(story_id);
        }
        taskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Start-all')")
    @ApiOperation(value = "根据产品需求任务", tags = {"任务" },  notes = "根据产品需求任务")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/start")
    public ResponseEntity<TaskDTO> startByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setStory(story_id);
        domain = taskService.start(domain) ;
        taskdto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(taskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据产品需求获取通过模块查询", tags = {"任务" } ,notes = "根据产品需求获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/fetchbymodule")
	public ResponseEntity<List<TaskDTO>> fetchTaskByModuleByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchByModule(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据产品需求查询通过模块查询", tags = {"任务" } ,notes = "根据产品需求查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/searchbymodule")
	public ResponseEntity<Page<TaskDTO>> searchTaskByModuleByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据产品需求获取DEFAULT", tags = {"任务" } ,notes = "根据产品需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/fetchdefault")
	public ResponseEntity<List<TaskDTO>> fetchTaskDefaultByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefault(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据产品需求查询DEFAULT", tags = {"任务" } ,notes = "根据产品需求查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/searchdefault")
	public ResponseEntity<Page<TaskDTO>> searchTaskDefaultByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "根据产品需求获取DefaultRow", tags = {"任务" } ,notes = "根据产品需求获取DefaultRow")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/fetchdefaultrow")
	public ResponseEntity<List<TaskDTO>> fetchTaskDefaultRowByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefaultRow(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefaultRow-all')")
	@ApiOperation(value = "根据产品需求查询DefaultRow", tags = {"任务" } ,notes = "根据产品需求查询DefaultRow")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/searchdefaultrow")
	public ResponseEntity<Page<TaskDTO>> searchTaskDefaultRowByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchDefaultRow(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "根据产品需求获取项目任务", tags = {"任务" } ,notes = "根据产品需求获取项目任务")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/fetchprojecttask")
	public ResponseEntity<List<TaskDTO>> fetchTaskProjectTASKByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchProjectTASK(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchProjectTASK-all')")
	@ApiOperation(value = "根据产品需求查询项目任务", tags = {"任务" } ,notes = "根据产品需求查询项目任务")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/searchprojecttask")
	public ResponseEntity<Page<TaskDTO>> searchTaskProjectTASKByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchProjectTASK(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据产品需求获取根任务", tags = {"任务" } ,notes = "根据产品需求获取根任务")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/fetchroottask")
	public ResponseEntity<List<TaskDTO>> fetchTaskRootTaskByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
        List<TaskDTO> list = taskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据产品需求查询根任务", tags = {"任务" } ,notes = "根据产品需求查询根任务")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/searchroottask")
	public ResponseEntity<Page<TaskDTO>> searchTaskRootTaskByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
	@ApiOperation(value = "根据产品需求获取任务类型分组", tags = {"任务" } ,notes = "根据产品需求获取任务类型分组")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/fetchtypegroup")
	public ResponseEntity<List<HashMap>> fetchTaskTypeGroupByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(domains.getContent());
	}

	@ApiOperation(value = "根据产品需求查询任务类型分组", tags = {"任务" } ,notes = "根据产品需求查询任务类型分组")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchTaskTypeGroupByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody TaskSearchContext context) {
        context.setN_story_eq(story_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
}

