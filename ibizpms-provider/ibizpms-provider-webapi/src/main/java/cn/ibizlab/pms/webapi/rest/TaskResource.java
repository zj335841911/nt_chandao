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
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;

@Slf4j
@Api(tags = {"Task" })
@RestController("WebApi-task")
@RequestMapping("")
public class TaskResource {

    @Autowired
    private ITaskService taskService;

    @Autowired
    @Lazy
    public TaskMapping taskMapping;

    public TaskDTO permissionDTO=new TaskDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"Task" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/tasks/getdraft")
    public ResponseEntity<TaskDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(taskMapping.toDto(taskService.getDraft(new Task())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Task" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("task_id") BigInteger task_id) {
         return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(task_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.taskMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"Task" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "Update", tags = {"Task" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}")
    @Transactional
    public ResponseEntity<TaskDTO> update(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
		Task domain  = taskMapping.toDomain(taskdto);
        domain .setId(task_id);
		taskService.update(domain );
		TaskDTO dto = taskMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.taskMapping,#taskdtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"Task" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TaskDTO> taskdtos) {
        taskService.updateBatch(taskMapping.toDomain(taskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "Save", tags = {"Task" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/save")
    public ResponseEntity<Boolean> save(@RequestBody TaskDTO taskdto) {
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.taskMapping,#taskdtos})")
    @ApiOperation(value = "SaveBatch", tags = {"Task" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TaskDTO> taskdtos) {
        taskService.saveBatch(taskMapping.toDomain(taskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "Get", tags = {"Task" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}")
    public ResponseEntity<TaskDTO> get(@PathVariable("task_id") BigInteger task_id) {
        Task domain = taskService.get(task_id);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"Task" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TaskDTO taskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "Create", tags = {"Task" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks")
    @Transactional
    public ResponseEntity<TaskDTO> create(@RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
		taskService.create(domain);
        TaskDTO dto = taskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.taskMapping,#taskdtos})")
    @ApiOperation(value = "createBatch", tags = {"Task" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TaskDTO> taskdtos) {
        taskService.createBatch(taskMapping.toDomain(taskdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RootTask-all')")
	@ApiOperation(value = "fetch根任务", tags = {"Task" } ,notes = "fetch根任务")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RootTask-all')")
	@ApiOperation(value = "search根任务", tags = {"Task" } ,notes = "search根任务")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchroottask")
	public ResponseEntity<Page<TaskDTO>> searchRootTask(@RequestBody TaskSearchContext context) {
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-TypeGroup-all')")
	@ApiOperation(value = "fetch任务类型分组", tags = {"Task" } ,notes = "fetch任务类型分组")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/fetchtypegroup")
	public ResponseEntity<List<HashMap>> fetchTypeGroup(TaskSearchContext context) {
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(domains.getContent());
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-TypeGroup-all')")
	@ApiOperation(value = "search任务类型分组", tags = {"Task" } ,notes = "search任务类型分组")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchTypeGroup(@RequestBody TaskSearchContext context) {
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Task" } ,notes = "fetchDEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Task" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/searchdefault")
	public ResponseEntity<Page<TaskDTO>> searchDefault(@RequestBody TaskSearchContext context) {
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-GetDraft-all')")
    @ApiOperation(value = "GetDraftByProject", tags = {"Task" },  notes = "GetDraftByProject")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/getdraft")
    public ResponseEntity<TaskDTO> getDraftByProject(@PathVariable("project_id") BigInteger project_id) {
        Task domain = new Task();
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskMapping.toDto(taskService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Remove-all')")
    @ApiOperation(value = "RemoveByProject", tags = {"Task" },  notes = "RemoveByProject")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskService.remove(task_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.taskMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByProject", tags = {"Task" },  notes = "RemoveBatchByProject")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<BigInteger> ids) {
        taskService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Update-all')")
    @ApiOperation(value = "UpdateByProject", tags = {"Task" },  notes = "UpdateByProject")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}")
    @Transactional
    public ResponseEntity<TaskDTO> updateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        domain.setId(task_id);
		taskService.update(domain);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.taskMapping,#taskdtos})")
    @ApiOperation(value = "UpdateBatchByProject", tags = {"Task" },  notes = "UpdateBatchByProject")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setProject(project_id);
        }
        taskService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Save-all')")
    @ApiOperation(value = "SaveByProject", tags = {"Task" },  notes = "SaveByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.taskMapping,#taskdtos})")
    @ApiOperation(value = "SaveBatchByProject", tags = {"Task" },  notes = "SaveBatchByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
             domain.setProject(project_id);
        }
        taskService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Get-all')")
    @ApiOperation(value = "GetByProject", tags = {"Task" },  notes = "GetByProject")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}")
    public ResponseEntity<TaskDTO> getByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id) {
        Task domain = taskService.get(task_id);
        TaskDTO dto = taskMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByProject", tags = {"Task" },  notes = "CheckKeyByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskDTO taskdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskService.checkKey(taskMapping.toDomain(taskdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Create-all')")
    @ApiOperation(value = "CreateByProject", tags = {"Task" },  notes = "CreateByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks")
    @Transactional
    public ResponseEntity<TaskDTO> createByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskDTO taskdto) {
        Task domain = taskMapping.toDomain(taskdto);
        domain.setProject(project_id);
		taskService.create(domain);
        TaskDTO dto = taskMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.taskMapping,#taskdtos})")
    @ApiOperation(value = "createBatchByProject", tags = {"Task" },  notes = "createBatchByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<TaskDTO> taskdtos) {
        List<Task> domainlist=taskMapping.toDomain(taskdtos);
        for(Task domain:domainlist){
            domain.setProject(project_id);
        }
        taskService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RootTask-all')")
	@ApiOperation(value = "fetch根任务ByProject", tags = {"Task" } ,notes = "fetch根任务ByProject")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-RootTask-all')")
	@ApiOperation(value = "search根任务ByProject", tags = {"Task" } ,notes = "search根任务ByProject")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchroottask")
	public ResponseEntity<Page<TaskDTO>> searchTaskRootTaskByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchRootTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-TypeGroup-all')")
	@ApiOperation(value = "fetch任务类型分组ByProject", tags = {"Task" } ,notes = "fetch任务类型分组ByProject")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-TypeGroup-all')")
	@ApiOperation(value = "search任务类型分组ByProject", tags = {"Task" } ,notes = "search任务类型分组ByProject")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchtypegroup")
	public ResponseEntity<Page<HashMap>> searchTaskTypeGroupByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<HashMap> domains = taskService.searchTypeGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(domains.getContent(), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProject", tags = {"Task" } ,notes = "fetchDEFAULTByProject")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Task-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProject", tags = {"Task" } ,notes = "searchDEFAULTByProject")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/searchdefault")
	public ResponseEntity<Page<TaskDTO>> searchTaskDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody TaskSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Task> domains = taskService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
