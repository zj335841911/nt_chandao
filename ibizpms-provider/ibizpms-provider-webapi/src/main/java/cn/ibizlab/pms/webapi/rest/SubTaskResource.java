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
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;

@Slf4j
@Api(tags = {"任务" })
@RestController("WebApi-subtask")
@RequestMapping("")
public class SubTaskResource {

    @Autowired
    public ITaskService taskService;

    @Autowired
    @Lazy
    public SubTaskMapping subtaskMapping;

    @ApiOperation(value = "根据任务获取任务草稿", tags = {"任务" },  notes = "根据任务获取任务草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}/subtasks/getdraft")
    public ResponseEntity<SubTaskDTO> getDraftByTask(@PathVariable("task_id") BigInteger task_id) {
        Task domain = new Task();
        domain.setParent(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskMapping.toDto(taskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Close-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/close")
    @Transactional
    public ResponseEntity<SubTaskDTO> closeByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.close(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Pause-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/pause")
    @Transactional
    public ResponseEntity<SubTaskDTO> pauseByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.pause(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Start-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/start")
    @Transactional
    public ResponseEntity<SubTaskDTO> startByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.start(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-AssignTo-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/assignto")
    @Transactional
    public ResponseEntity<SubTaskDTO> assignToByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.assignTo(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据任务删除任务", tags = {"任务" },  notes = "根据任务删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}/subtasks/{subtask_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(subtask_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据任务批量删除任务", tags = {"任务" },  notes = "根据任务批量删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}/subtasks/batch")
    public ResponseEntity<Boolean> removeBatchByTask(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据任务更新任务", tags = {"任务" },  notes = "根据任务更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}/subtasks/{subtask_id}")
    @Transactional
    public ResponseEntity<SubTaskDTO> updateByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain.setId(subtask_id);
		taskService.update(domain);
        SubTaskDTO dto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据任务批量更新任务", tags = {"任务" },  notes = "根据任务批量更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}/subtasks/batch")
    public ResponseEntity<Boolean> updateBatchByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody List<SubTaskDTO> subtaskdtos) {
        List<Task> domainlist=subtaskMapping.toDomain(subtaskdtos);
        for(Task domain:domainlist){
            domain.setParent(task_id);
        }
        taskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Cancel-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/cancel")
    @Transactional
    public ResponseEntity<SubTaskDTO> cancelByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.cancel(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-DeleteEstimate-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/deleteestimate")
    @Transactional
    public ResponseEntity<SubTaskDTO> deleteEstimateByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.deleteEstimate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Restart-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/restart")
    @Transactional
    public ResponseEntity<SubTaskDTO> restartByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.restart(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-EditEstimate-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/editestimate")
    @Transactional
    public ResponseEntity<SubTaskDTO> editEstimateByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.editEstimate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据任务保存任务", tags = {"任务" },  notes = "根据任务保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/save")
    public ResponseEntity<Boolean> saveByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据任务批量保存任务", tags = {"任务" },  notes = "根据任务批量保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody List<SubTaskDTO> subtaskdtos) {
        List<Task> domainlist=subtaskMapping.toDomain(subtaskdtos);
        for(Task domain:domainlist){
             domain.setParent(task_id);
        }
        taskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "根据任务获取任务", tags = {"任务" },  notes = "根据任务获取任务")
	@RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}/subtasks/{subtask_id}")
    public ResponseEntity<SubTaskDTO> getByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id) {
        Task domain = taskService.get(subtask_id);
        SubTaskDTO dto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RecordEstimate-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/recordestimate")
    @Transactional
    public ResponseEntity<SubTaskDTO> recordEstimateByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.recordEstimate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @ApiOperation(value = "根据任务检查任务", tags = {"任务" },  notes = "根据任务检查任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody SubTaskDTO subtaskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(subtaskMapping.toDomain(subtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据任务建立任务", tags = {"任务" },  notes = "根据任务建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks")
    @Transactional
    public ResponseEntity<SubTaskDTO> createByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
		taskService.create(domain);
        SubTaskDTO dto = subtaskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据任务批量建立任务", tags = {"任务" },  notes = "根据任务批量建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/batch")
    public ResponseEntity<Boolean> createBatchByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody List<SubTaskDTO> subtaskdtos) {
        List<Task> domainlist=subtaskMapping.toDomain(subtaskdtos);
        for(Task domain:domainlist){
            domain.setParent(task_id);
        }
        taskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Finish-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/finish")
    @Transactional
    public ResponseEntity<SubTaskDTO> finishByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.finish(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Activate-all')")
    @ApiOperation(value = "根据任务任务", tags = {"任务" },  notes = "根据任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/subtasks/{subtask_id}/activate")
    @Transactional
    public ResponseEntity<SubTaskDTO> activateByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.activate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据任务获取根任务", tags = {"任务" } ,notes = "根据任务获取根任务")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/subtasks/fetchroottask")
	public ResponseEntity<List<SubTaskDTO>> fetchSubTaskRootTaskByTask(@PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
        List<SubTaskDTO> list = subtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据任务查询根任务", tags = {"任务" } ,notes = "根据任务查询根任务")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/subtasks/searchroottask")
	public ResponseEntity<Page<SubTaskDTO>> searchSubTaskRootTaskByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据任务获取通过模块查询", tags = {"任务" } ,notes = "根据任务获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/subtasks/fetchbymodule")
	public ResponseEntity<List<SubTaskDTO>> fetchSubTaskByModuleByTask(@PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchByModule(context) ;
        List<SubTaskDTO> list = subtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据任务查询通过模块查询", tags = {"任务" } ,notes = "根据任务查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/subtasks/searchbymodule")
	public ResponseEntity<Page<SubTaskDTO>> searchSubTaskByModuleByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchTypeGroup-all')")
	@ApiOperation(value = "根据任务获取任务类型分组", tags = {"任务" } ,notes = "根据任务获取任务类型分组")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/subtasks/fetchtypegroup")
	public ResponseEntity<List<HashMap>> fetchSubTaskTypeGroupByTask(@PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(domains.getContent());
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchTypeGroup-all')")
	@ApiOperation(value = "根据任务查询任务类型分组", tags = {"任务" } ,notes = "根据任务查询任务类型分组")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/subtasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchSubTaskTypeGroupByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据任务获取DEFAULT", tags = {"任务" } ,notes = "根据任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/subtasks/fetchdefault")
	public ResponseEntity<List<SubTaskDTO>> fetchSubTaskDefaultByTask(@PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchDefault(context) ;
        List<SubTaskDTO> list = subtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据任务查询DEFAULT", tags = {"任务" } ,notes = "根据任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/subtasks/searchdefault")
	public ResponseEntity<Page<SubTaskDTO>> searchSubTaskDefaultByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @ApiOperation(value = "根据项目任务获取任务草稿", tags = {"任务" },  notes = "根据项目任务获取任务草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}/subtasks/getdraft")
    public ResponseEntity<SubTaskDTO> getDraftByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id) {
        Task domain = new Task();
        domain.setParent(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskMapping.toDto(taskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Close-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/close")
    @Transactional
    public ResponseEntity<SubTaskDTO> closeByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.close(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Pause-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/pause")
    @Transactional
    public ResponseEntity<SubTaskDTO> pauseByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.pause(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Start-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/start")
    @Transactional
    public ResponseEntity<SubTaskDTO> startByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.start(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-AssignTo-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/assignto")
    @Transactional
    public ResponseEntity<SubTaskDTO> assignToByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.assignTo(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据项目任务删除任务", tags = {"任务" },  notes = "根据项目任务删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(subtask_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "根据项目任务批量删除任务", tags = {"任务" },  notes = "根据项目任务批量删除任务")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}/subtasks/batch")
    public ResponseEntity<Boolean> removeBatchByProjectTask(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据项目任务更新任务", tags = {"任务" },  notes = "根据项目任务更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}")
    @Transactional
    public ResponseEntity<SubTaskDTO> updateByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain.setId(subtask_id);
		taskService.update(domain);
        SubTaskDTO dto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "根据项目任务批量更新任务", tags = {"任务" },  notes = "根据项目任务批量更新任务")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}/subtasks/batch")
    public ResponseEntity<Boolean> updateBatchByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<SubTaskDTO> subtaskdtos) {
        List<Task> domainlist=subtaskMapping.toDomain(subtaskdtos);
        for(Task domain:domainlist){
            domain.setParent(task_id);
        }
        taskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Cancel-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/cancel")
    @Transactional
    public ResponseEntity<SubTaskDTO> cancelByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.cancel(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-DeleteEstimate-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/deleteestimate")
    @Transactional
    public ResponseEntity<SubTaskDTO> deleteEstimateByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.deleteEstimate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Restart-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/restart")
    @Transactional
    public ResponseEntity<SubTaskDTO> restartByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.restart(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-EditEstimate-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/editestimate")
    @Transactional
    public ResponseEntity<SubTaskDTO> editEstimateByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.editEstimate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据项目任务保存任务", tags = {"任务" },  notes = "根据项目任务保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/save")
    public ResponseEntity<Boolean> saveByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "根据项目任务批量保存任务", tags = {"任务" },  notes = "根据项目任务批量保存任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<SubTaskDTO> subtaskdtos) {
        List<Task> domainlist=subtaskMapping.toDomain(subtaskdtos);
        for(Task domain:domainlist){
             domain.setParent(task_id);
        }
        taskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "根据项目任务获取任务", tags = {"任务" },  notes = "根据项目任务获取任务")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}")
    public ResponseEntity<SubTaskDTO> getByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id) {
        Task domain = taskService.get(subtask_id);
        SubTaskDTO dto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RecordEstimate-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/recordestimate")
    @Transactional
    public ResponseEntity<SubTaskDTO> recordEstimateByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.recordEstimate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @ApiOperation(value = "根据项目任务检查任务", tags = {"任务" },  notes = "根据项目任务检查任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody SubTaskDTO subtaskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(subtaskMapping.toDomain(subtaskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据项目任务建立任务", tags = {"任务" },  notes = "根据项目任务建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks")
    @Transactional
    public ResponseEntity<SubTaskDTO> createByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
		taskService.create(domain);
        SubTaskDTO dto = subtaskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "根据项目任务批量建立任务", tags = {"任务" },  notes = "根据项目任务批量建立任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/batch")
    public ResponseEntity<Boolean> createBatchByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<SubTaskDTO> subtaskdtos) {
        List<Task> domainlist=subtaskMapping.toDomain(subtaskdtos);
        for(Task domain:domainlist){
            domain.setParent(task_id);
        }
        taskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Finish-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/finish")
    @Transactional
    public ResponseEntity<SubTaskDTO> finishByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.finish(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Activate-all')")
    @ApiOperation(value = "根据项目任务任务", tags = {"任务" },  notes = "根据项目任务任务")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/subtasks/{subtask_id}/activate")
    @Transactional
    public ResponseEntity<SubTaskDTO> activateByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("subtask_id") BigInteger subtask_id, @RequestBody SubTaskDTO subtaskdto) {
        Task domain = subtaskMapping.toDomain(subtaskdto);
        domain.setParent(task_id);
        domain = taskService.activate(domain) ;
        subtaskdto = subtaskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(subtaskdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据项目任务获取根任务", tags = {"任务" } ,notes = "根据项目任务获取根任务")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/subtasks/fetchroottask")
	public ResponseEntity<List<SubTaskDTO>> fetchSubTaskRootTaskByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
        List<SubTaskDTO> list = subtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchRootTask-all')")
	@ApiOperation(value = "根据项目任务查询根任务", tags = {"任务" } ,notes = "根据项目任务查询根任务")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/subtasks/searchroottask")
	public ResponseEntity<Page<SubTaskDTO>> searchSubTaskRootTaskByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据项目任务获取通过模块查询", tags = {"任务" } ,notes = "根据项目任务获取通过模块查询")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/subtasks/fetchbymodule")
	public ResponseEntity<List<SubTaskDTO>> fetchSubTaskByModuleByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchByModule(context) ;
        List<SubTaskDTO> list = subtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchByModule-all')")
	@ApiOperation(value = "根据项目任务查询通过模块查询", tags = {"任务" } ,notes = "根据项目任务查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/subtasks/searchbymodule")
	public ResponseEntity<Page<SubTaskDTO>> searchSubTaskByModuleByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchTypeGroup-all')")
	@ApiOperation(value = "根据项目任务获取任务类型分组", tags = {"任务" } ,notes = "根据项目任务获取任务类型分组")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/subtasks/fetchtypegroup")
	public ResponseEntity<List<HashMap>> fetchSubTaskTypeGroupByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(domains.getContent());
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchTypeGroup-all')")
	@ApiOperation(value = "根据项目任务查询任务类型分组", tags = {"任务" } ,notes = "根据项目任务查询任务类型分组")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/subtasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchSubTaskTypeGroupByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据项目任务获取DEFAULT", tags = {"任务" } ,notes = "根据项目任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/subtasks/fetchdefault")
	public ResponseEntity<List<SubTaskDTO>> fetchSubTaskDefaultByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id,TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchDefault(context) ;
        List<SubTaskDTO> list = subtaskMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-searchDefault-all')")
	@ApiOperation(value = "根据项目任务查询DEFAULT", tags = {"任务" } ,notes = "根据项目任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/subtasks/searchdefault")
	public ResponseEntity<Page<SubTaskDTO>> searchSubTaskDefaultByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskSearchContext context) {
        context.setN_parent_eq(task_id);
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subtaskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
