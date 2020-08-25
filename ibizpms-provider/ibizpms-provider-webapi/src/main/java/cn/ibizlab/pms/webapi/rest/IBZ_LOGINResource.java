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
import cn.ibizlab.pms.core.ibiz.domain.IBZ_LOGIN;
import cn.ibizlab.pms.core.ibiz.service.IIBZ_LOGINService;
import cn.ibizlab.pms.core.ibiz.filter.IBZ_LOGINSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"实体" })
@RestController("WebApi-ibz_login")
@RequestMapping("")
public class IBZ_LOGINResource {

    @Autowired
    public IIBZ_LOGINService ibz_loginService;

    @Autowired
    @Lazy
    public IBZ_LOGINMapping ibz_loginMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_LOGIN-GetUser-all')")
    @ApiOperation(value = "获取ZT账户登录信息", tags = {"实体" },  notes = "获取ZT账户登录信息")
	@RequestMapping(method = RequestMethod.GET, value = "/ibz_logins/{ibz_login_id}/getuser")
    public ResponseEntity<IBZ_LOGINDTO> getUser(@PathVariable("ibz_login_id") BigInteger ibz_login_id, @RequestBody IBZ_LOGINDTO ibz_logindto) {
        IBZ_LOGIN domain = ibz_loginMapping.toDomain(ibz_logindto);
domain.setId(ibz_login_id);
        domain = ibz_loginService.getUser(domain);
        ibz_logindto = ibz_loginMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibz_logindto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZ_LOGIN-Ztlogin-all')")
    @ApiOperation(value = "ZT登录", tags = {"实体" },  notes = "ZT登录")
	@RequestMapping(method = RequestMethod.POST, value = "/ibz_logins/{ibz_login_id}/ztlogin")
    public ResponseEntity<IBZ_LOGINDTO> ztlogin(@PathVariable("ibz_login_id") BigInteger ibz_login_id, @RequestBody IBZ_LOGINDTO ibz_logindto) {
        IBZ_LOGIN domain = ibz_loginMapping.toDomain(ibz_logindto);
domain.setId(ibz_login_id);
        domain = ibz_loginService.ztlogin(domain);
        ibz_logindto = ibz_loginMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibz_logindto);
    }

}

