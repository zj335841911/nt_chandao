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
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.service.ITaskEstimateService;
import cn.ibizlab.pms.core.zentao.filter.TaskEstimateSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"任务预计" })
@RestController("WebApi-taskestimate")
@RequestMapping("")
public class TaskEstimateResource {

    @Autowired
    public ITaskEstimateService taskestimateService;

    @Autowired
    @Lazy
    public TaskEstimateMapping taskestimateMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据任务建立任务预计", tags = {"任务预计" },  notes = "根据任务建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/taskestimates")
    public ResponseEntity<TaskEstimateDTO> createByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
		taskestimateService.create(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据任务批量建立任务预计", tags = {"任务预计" },  notes = "根据任务批量建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> createBatchByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据任务更新任务预计", tags = {"任务预计" },  notes = "根据任务更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> updateByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        domain.setId(taskestimate_id);
		taskestimateService.update(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据任务批量更新任务预计", tags = {"任务预计" },  notes = "根据任务批量更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> updateBatchByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据任务删除任务预计", tags = {"任务预计" },  notes = "根据任务删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<Boolean> removeByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.remove(taskestimate_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据任务批量删除任务预计", tags = {"任务预计" },  notes = "根据任务批量删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> removeBatchByTask(@RequestBody List<BigInteger> ids) {
        taskestimateService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Get-all')")
    @ApiOperation(value = "根据任务获取任务预计", tags = {"任务预计" },  notes = "根据任务获取任务预计")
	@RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> getByTask(@PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
        TaskEstimate domain = taskestimateService.get(taskestimate_id);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据任务获取任务预计草稿", tags = {"任务预计" },  notes = "根据任务获取任务预计草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/tasks/{task_id}/taskestimates/getdraft")
    public ResponseEntity<TaskEstimateDTO> getDraftByTask(@PathVariable("task_id") BigInteger task_id) {
        TaskEstimate domain = new TaskEstimate();
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateMapping.toDto(taskestimateService.getDraft(domain)));
    }

    @ApiOperation(value = "根据任务检查任务预计", tags = {"任务预计" },  notes = "根据任务检查任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/taskestimates/checkkey")
    public ResponseEntity<Boolean> checkKeyByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskestimateService.checkKey(taskestimateMapping.toDomain(taskestimatedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据任务保存任务预计", tags = {"任务预计" },  notes = "根据任务保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/taskestimates/save")
    public ResponseEntity<Boolean> saveByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据任务批量保存任务预计", tags = {"任务预计" },  notes = "根据任务批量保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/tasks/{task_id}/taskestimates/savebatch")
    public ResponseEntity<Boolean> saveBatchByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
             domain.setTask(task_id);
        }
        taskestimateService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据任务获取DEFAULT", tags = {"任务预计" } ,notes = "根据任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/taskestimates/fetchdefault")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultByTask(@PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据任务查询DEFAULT", tags = {"任务预计" } ,notes = "根据任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/taskestimates/searchdefault")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据任务获取DEFAULT1", tags = {"任务预计" } ,notes = "根据任务获取DEFAULT1")
    @RequestMapping(method= RequestMethod.GET , value="/tasks/{task_id}/taskestimates/fetchdefaults")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultsByTask(@PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据任务查询DEFAULT1", tags = {"任务预计" } ,notes = "根据任务查询DEFAULT1")
    @RequestMapping(method= RequestMethod.POST , value="/tasks/{task_id}/taskestimates/searchdefaults")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultsByTask(@PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据需求任务建立任务预计", tags = {"任务预计" },  notes = "根据需求任务建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/taskestimates")
    public ResponseEntity<TaskEstimateDTO> createByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
		taskestimateService.create(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据需求任务批量建立任务预计", tags = {"任务预计" },  notes = "根据需求任务批量建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> createBatchByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据需求任务更新任务预计", tags = {"任务预计" },  notes = "根据需求任务更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> updateByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        domain.setId(taskestimate_id);
		taskestimateService.update(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据需求任务批量更新任务预计", tags = {"任务预计" },  notes = "根据需求任务批量更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> updateBatchByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据需求任务删除任务预计", tags = {"任务预计" },  notes = "根据需求任务删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<Boolean> removeByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.remove(taskestimate_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据需求任务批量删除任务预计", tags = {"任务预计" },  notes = "根据需求任务批量删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> removeBatchByStoryTask(@RequestBody List<BigInteger> ids) {
        taskestimateService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Get-all')")
    @ApiOperation(value = "根据需求任务获取任务预计", tags = {"任务预计" },  notes = "根据需求任务获取任务预计")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> getByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
        TaskEstimate domain = taskestimateService.get(taskestimate_id);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据需求任务获取任务预计草稿", tags = {"任务预计" },  notes = "根据需求任务获取任务预计草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/getdraft")
    public ResponseEntity<TaskEstimateDTO> getDraftByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id) {
        TaskEstimate domain = new TaskEstimate();
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateMapping.toDto(taskestimateService.getDraft(domain)));
    }

    @ApiOperation(value = "根据需求任务检查任务预计", tags = {"任务预计" },  notes = "根据需求任务检查任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey")
    public ResponseEntity<Boolean> checkKeyByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskestimateService.checkKey(taskestimateMapping.toDomain(taskestimatedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据需求任务保存任务预计", tags = {"任务预计" },  notes = "根据需求任务保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/save")
    public ResponseEntity<Boolean> saveByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据需求任务批量保存任务预计", tags = {"任务预计" },  notes = "根据需求任务批量保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch")
    public ResponseEntity<Boolean> saveBatchByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
             domain.setTask(task_id);
        }
        taskestimateService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据需求任务获取DEFAULT", tags = {"任务预计" } ,notes = "根据需求任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据需求任务查询DEFAULT", tags = {"任务预计" } ,notes = "根据需求任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据需求任务获取DEFAULT1", tags = {"任务预计" } ,notes = "根据需求任务获取DEFAULT1")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultsByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据需求任务查询DEFAULT1", tags = {"任务预计" } ,notes = "根据需求任务查询DEFAULT1")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultsByStoryTask(@PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据项目任务建立任务预计", tags = {"任务预计" },  notes = "根据项目任务建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/taskestimates")
    public ResponseEntity<TaskEstimateDTO> createByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
		taskestimateService.create(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据项目任务批量建立任务预计", tags = {"任务预计" },  notes = "根据项目任务批量建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> createBatchByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据项目任务更新任务预计", tags = {"任务预计" },  notes = "根据项目任务更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> updateByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        domain.setId(taskestimate_id);
		taskestimateService.update(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据项目任务批量更新任务预计", tags = {"任务预计" },  notes = "根据项目任务批量更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> updateBatchByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据项目任务删除任务预计", tags = {"任务预计" },  notes = "根据项目任务删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<Boolean> removeByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.remove(taskestimate_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据项目任务批量删除任务预计", tags = {"任务预计" },  notes = "根据项目任务批量删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> removeBatchByProjectTask(@RequestBody List<BigInteger> ids) {
        taskestimateService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Get-all')")
    @ApiOperation(value = "根据项目任务获取任务预计", tags = {"任务预计" },  notes = "根据项目任务获取任务预计")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> getByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
        TaskEstimate domain = taskestimateService.get(taskestimate_id);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目任务获取任务预计草稿", tags = {"任务预计" },  notes = "根据项目任务获取任务预计草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/getdraft")
    public ResponseEntity<TaskEstimateDTO> getDraftByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id) {
        TaskEstimate domain = new TaskEstimate();
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateMapping.toDto(taskestimateService.getDraft(domain)));
    }

    @ApiOperation(value = "根据项目任务检查任务预计", tags = {"任务预计" },  notes = "根据项目任务检查任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/checkkey")
    public ResponseEntity<Boolean> checkKeyByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskestimateService.checkKey(taskestimateMapping.toDomain(taskestimatedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据项目任务保存任务预计", tags = {"任务预计" },  notes = "根据项目任务保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/save")
    public ResponseEntity<Boolean> saveByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据项目任务批量保存任务预计", tags = {"任务预计" },  notes = "根据项目任务批量保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/tasks/{task_id}/taskestimates/savebatch")
    public ResponseEntity<Boolean> saveBatchByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
             domain.setTask(task_id);
        }
        taskestimateService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据项目任务获取DEFAULT", tags = {"任务预计" } ,notes = "根据项目任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/taskestimates/fetchdefault")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据项目任务查询DEFAULT", tags = {"任务预计" } ,notes = "根据项目任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/taskestimates/searchdefault")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据项目任务获取DEFAULT1", tags = {"任务预计" } ,notes = "根据项目任务获取DEFAULT1")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/tasks/{task_id}/taskestimates/fetchdefaults")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultsByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据项目任务查询DEFAULT1", tags = {"任务预计" } ,notes = "根据项目任务查询DEFAULT1")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/tasks/{task_id}/taskestimates/searchdefaults")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultsByProjectTask(@PathVariable("project_id") BigInteger project_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据产品需求任务建立任务预计", tags = {"任务预计" },  notes = "根据产品需求任务建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates")
    public ResponseEntity<TaskEstimateDTO> createByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
		taskestimateService.create(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Create-all')")
    @ApiOperation(value = "根据产品需求任务批量建立任务预计", tags = {"任务预计" },  notes = "根据产品需求任务批量建立任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> createBatchByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据产品需求任务更新任务预计", tags = {"任务预计" },  notes = "根据产品需求任务更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> updateByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        domain.setId(taskestimate_id);
		taskestimateService.update(domain);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Update-all')")
    @ApiOperation(value = "根据产品需求任务批量更新任务预计", tags = {"任务预计" },  notes = "根据产品需求任务批量更新任务预计")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> updateBatchByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
            domain.setTask(task_id);
        }
        taskestimateService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据产品需求任务删除任务预计", tags = {"任务预计" },  notes = "根据产品需求任务删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<Boolean> removeByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
		return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.remove(taskestimate_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Remove-all')")
    @ApiOperation(value = "根据产品需求任务批量删除任务预计", tags = {"任务预计" },  notes = "根据产品需求任务批量删除任务预计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/batch")
    public ResponseEntity<Boolean> removeBatchByProductStoryTask(@RequestBody List<BigInteger> ids) {
        taskestimateService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Get-all')")
    @ApiOperation(value = "根据产品需求任务获取任务预计", tags = {"任务预计" },  notes = "根据产品需求任务获取任务预计")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/{taskestimate_id}")
    public ResponseEntity<TaskEstimateDTO> getByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @PathVariable("taskestimate_id") BigInteger taskestimate_id) {
        TaskEstimate domain = taskestimateService.get(taskestimate_id);
        TaskEstimateDTO dto = taskestimateMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品需求任务获取任务预计草稿", tags = {"任务预计" },  notes = "根据产品需求任务获取任务预计草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/getdraft")
    public ResponseEntity<TaskEstimateDTO> getDraftByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id) {
        TaskEstimate domain = new TaskEstimate();
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateMapping.toDto(taskestimateService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品需求任务检查任务预计", tags = {"任务预计" },  notes = "根据产品需求任务检查任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(taskestimateService.checkKey(taskestimateMapping.toDomain(taskestimatedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据产品需求任务保存任务预计", tags = {"任务预计" },  notes = "根据产品需求任务保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/save")
    public ResponseEntity<Boolean> saveByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateDTO taskestimatedto) {
        TaskEstimate domain = taskestimateMapping.toDomain(taskestimatedto);
        domain.setTask(task_id);
        return ResponseEntity.status(HttpStatus.OK).body(taskestimateService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-Save-all')")
    @ApiOperation(value = "根据产品需求任务批量保存任务预计", tags = {"任务预计" },  notes = "根据产品需求任务批量保存任务预计")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody List<TaskEstimateDTO> taskestimatedtos) {
        List<TaskEstimate> domainlist=taskestimateMapping.toDomain(taskestimatedtos);
        for(TaskEstimate domain:domainlist){
             domain.setTask(task_id);
        }
        taskestimateService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据产品需求任务获取DEFAULT", tags = {"任务预计" } ,notes = "根据产品需求任务获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefault")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefault-all')")
	@ApiOperation(value = "根据产品需求任务查询DEFAULT", tags = {"任务预计" } ,notes = "根据产品需求任务查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefault")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据产品需求任务获取DEFAULT1", tags = {"任务预计" } ,notes = "根据产品需求任务获取DEFAULT1")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/fetchdefaults")
	public ResponseEntity<List<TaskEstimateDTO>> fetchTaskEstimateDefaultsByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id,TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
        List<TaskEstimateDTO> list = taskestimateMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TaskEstimate-searchDefaults-all')")
	@ApiOperation(value = "根据产品需求任务查询DEFAULT1", tags = {"任务预计" } ,notes = "根据产品需求任务查询DEFAULT1")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/tasks/{task_id}/taskestimates/searchdefaults")
	public ResponseEntity<Page<TaskEstimateDTO>> searchTaskEstimateDefaultsByProductStoryTask(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("task_id") BigInteger task_id, @RequestBody TaskEstimateSearchContext context) {
        context.setN_task_eq(task_id);
        Page<TaskEstimate> domains = taskestimateService.searchDefaults(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(taskestimateMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

