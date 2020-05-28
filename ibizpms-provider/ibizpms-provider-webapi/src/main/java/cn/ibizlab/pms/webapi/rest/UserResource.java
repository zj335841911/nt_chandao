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
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.core.zentao.filter.UserSearchContext;

@Slf4j
@Api(tags = {"User" })
@RestController("WebApi-user")
@RequestMapping("")
public class UserResource {

    @Autowired
    public IUserService userService;

    @Autowired
    @Lazy
    public UserMapping userMapping;

    @ApiOperation(value = "CheckKey", tags = {"User" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/users/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody UserDTO userdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(userService.checkKey(userMapping.toDomain(userdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"User" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/users/{user_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("user_id") BigInteger user_id) {
         return ResponseEntity.status(HttpStatus.OK).body(userService.remove(user_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Remove-all')")
    @ApiOperation(value = "RemoveBatch", tags = {"User" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/users/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        userService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Create-all')")
    @ApiOperation(value = "Create", tags = {"User" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/users")
    @Transactional
    public ResponseEntity<UserDTO> create(@RequestBody UserDTO userdto) {
        User domain = userMapping.toDomain(userdto);
		userService.create(domain);
        UserDTO dto = userMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Create-all')")
    @ApiOperation(value = "createBatch", tags = {"User" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/users/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<UserDTO> userdtos) {
        userService.createBatch(userMapping.toDomain(userdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Get-all')")
    @ApiOperation(value = "Get", tags = {"User" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/users/{user_id}")
    public ResponseEntity<UserDTO> get(@PathVariable("user_id") BigInteger user_id) {
        User domain = userService.get(user_id);
        UserDTO dto = userMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Update-all')")
    @ApiOperation(value = "Update", tags = {"User" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/users/{user_id}")
    @Transactional
    public ResponseEntity<UserDTO> update(@PathVariable("user_id") BigInteger user_id, @RequestBody UserDTO userdto) {
		User domain  = userMapping.toDomain(userdto);
        domain .setId(user_id);
		userService.update(domain );
		UserDTO dto = userMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Update-all')")
    @ApiOperation(value = "UpdateBatch", tags = {"User" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/users/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<UserDTO> userdtos) {
        userService.updateBatch(userMapping.toDomain(userdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Save-all')")
    @ApiOperation(value = "Save", tags = {"User" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/users/save")
    public ResponseEntity<Boolean> save(@RequestBody UserDTO userdto) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.save(userMapping.toDomain(userdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Save-all')")
    @ApiOperation(value = "SaveBatch", tags = {"User" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/users/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<UserDTO> userdtos) {
        userService.saveBatch(userMapping.toDomain(userdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "GetDraft", tags = {"User" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/users/getdraft")
    public ResponseEntity<UserDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(userMapping.toDto(userService.getDraft(new User())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"User" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/users/fetchdefault")
	public ResponseEntity<List<UserDTO>> fetchDefault(UserSearchContext context) {
        Page<User> domains = userService.searchDefault(context) ;
        List<UserDTO> list = userMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-User-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"User" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/users/searchdefault")
	public ResponseEntity<Page<UserDTO>> searchDefault(@RequestBody UserSearchContext context) {
        Page<User> domains = userService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(userMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
