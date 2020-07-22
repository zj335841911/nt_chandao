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
import cn.ibizlab.pms.core.zentao.domain.Todo;
import cn.ibizlab.pms.core.zentao.service.ITodoService;
import cn.ibizlab.pms.core.zentao.filter.TodoSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"待办事宜表" })
@RestController("WebApi-todo")
@RequestMapping("")
public class TodoResource {

    @Autowired
    public ITodoService todoService;

    @Autowired
    @Lazy
    public TodoMapping todoMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Create-all')")
    @ApiOperation(value = "新建待办事宜表", tags = {"待办事宜表" },  notes = "新建待办事宜表")
	@RequestMapping(method = RequestMethod.POST, value = "/todos")
    @Transactional
    public ResponseEntity<TodoDTO> create(@RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
		todoService.create(domain);
        TodoDTO dto = todoMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Create-all')")
    @ApiOperation(value = "批量新建待办事宜表", tags = {"待办事宜表" },  notes = "批量新建待办事宜表")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TodoDTO> tododtos) {
        todoService.createBatch(todoMapping.toDomain(tododtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Update-all')")
    @ApiOperation(value = "更新待办事宜表", tags = {"待办事宜表" },  notes = "更新待办事宜表")
	@RequestMapping(method = RequestMethod.PUT, value = "/todos/{todo_id}")
    @Transactional
    public ResponseEntity<TodoDTO> update(@PathVariable("todo_id") BigInteger todo_id, @RequestBody TodoDTO tododto) {
		Todo domain  = todoMapping.toDomain(tododto);
        domain .setId(todo_id);
		todoService.update(domain );
		TodoDTO dto = todoMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Update-all')")
    @ApiOperation(value = "批量更新待办事宜表", tags = {"待办事宜表" },  notes = "批量更新待办事宜表")
	@RequestMapping(method = RequestMethod.PUT, value = "/todos/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TodoDTO> tododtos) {
        todoService.updateBatch(todoMapping.toDomain(tododtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Remove-all')")
    @ApiOperation(value = "删除待办事宜表", tags = {"待办事宜表" },  notes = "删除待办事宜表")
	@RequestMapping(method = RequestMethod.DELETE, value = "/todos/{todo_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("todo_id") BigInteger todo_id) {
         return ResponseEntity.status(HttpStatus.OK).body(todoService.remove(todo_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Remove-all')")
    @ApiOperation(value = "批量删除待办事宜表", tags = {"待办事宜表" },  notes = "批量删除待办事宜表")
	@RequestMapping(method = RequestMethod.DELETE, value = "/todos/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        todoService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Get-all')")
    @ApiOperation(value = "获取待办事宜表", tags = {"待办事宜表" },  notes = "获取待办事宜表")
	@RequestMapping(method = RequestMethod.GET, value = "/todos/{todo_id}")
    public ResponseEntity<TodoDTO> get(@PathVariable("todo_id") BigInteger todo_id) {
        Todo domain = todoService.get(todo_id);
        TodoDTO dto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取待办事宜表草稿", tags = {"待办事宜表" },  notes = "获取待办事宜表草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/todos/getdraft")
    public ResponseEntity<TodoDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(todoMapping.toDto(todoService.getDraft(new Todo())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-AssignTo-all')")
    @ApiOperation(value = "AssignTo", tags = {"待办事宜表" },  notes = "AssignTo")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/assignto")
    @Transactional
    public ResponseEntity<TodoDTO> assignTo(@PathVariable("todo_id") BigInteger todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
domain.setId(todo_id);
        domain = todoService.assignTo(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }

    @ApiOperation(value = "检查待办事宜表", tags = {"待办事宜表" },  notes = "检查待办事宜表")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TodoDTO tododto) {
        return  ResponseEntity.status(HttpStatus.OK).body(todoService.checkKey(todoMapping.toDomain(tododto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Finish-all')")
    @ApiOperation(value = "Finish", tags = {"待办事宜表" },  notes = "Finish")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/finish")
    @Transactional
    public ResponseEntity<TodoDTO> finish(@PathVariable("todo_id") BigInteger todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
domain.setId(todo_id);
        domain = todoService.finish(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Save-all')")
    @ApiOperation(value = "保存待办事宜表", tags = {"待办事宜表" },  notes = "保存待办事宜表")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/save")
    public ResponseEntity<Boolean> save(@RequestBody TodoDTO tododto) {
        return ResponseEntity.status(HttpStatus.OK).body(todoService.save(todoMapping.toDomain(tododto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Save-all')")
    @ApiOperation(value = "批量保存待办事宜表", tags = {"待办事宜表" },  notes = "批量保存待办事宜表")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TodoDTO> tododtos) {
        todoService.saveBatch(todoMapping.toDomain(tododtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"待办事宜表" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/todos/fetchdefault")
	public ResponseEntity<List<TodoDTO>> fetchDefault(TodoSearchContext context) {
        Page<Todo> domains = todoService.searchDefault(context) ;
        List<TodoDTO> list = todoMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"待办事宜表" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/todos/searchdefault")
	public ResponseEntity<Page<TodoDTO>> searchDefault(@RequestBody TodoSearchContext context) {
        Page<Todo> domains = todoService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(todoMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

