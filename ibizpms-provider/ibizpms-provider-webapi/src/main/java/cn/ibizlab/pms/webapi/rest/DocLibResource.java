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
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.service.IDocLibService;
import cn.ibizlab.pms.core.zentao.filter.DocLibSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"文档库" })
@RestController("WebApi-doclib")
@RequestMapping("")
public class DocLibResource {

    @Autowired
    public IDocLibService doclibService;

    @Autowired
    @Lazy
    public DocLibMapping doclibMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Create-all')")
    @ApiOperation(value = "新建文档库", tags = {"文档库" },  notes = "新建文档库")
	@RequestMapping(method = RequestMethod.POST, value = "/doclibs")
    public ResponseEntity<DocLibDTO> create(@RequestBody DocLibDTO doclibdto) {
        DocLib domain = doclibMapping.toDomain(doclibdto);
		doclibService.create(domain);
        DocLibDTO dto = doclibMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Create-all')")
    @ApiOperation(value = "批量新建文档库", tags = {"文档库" },  notes = "批量新建文档库")
	@RequestMapping(method = RequestMethod.POST, value = "/doclibs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<DocLibDTO> doclibdtos) {
        doclibService.createBatch(doclibMapping.toDomain(doclibdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Update-all')")
    @ApiOperation(value = "更新文档库", tags = {"文档库" },  notes = "更新文档库")
	@RequestMapping(method = RequestMethod.PUT, value = "/doclibs/{doclib_id}")
    public ResponseEntity<DocLibDTO> update(@PathVariable("doclib_id") Long doclib_id, @RequestBody DocLibDTO doclibdto) {
		DocLib domain  = doclibMapping.toDomain(doclibdto);
        domain .setId(doclib_id);
		doclibService.update(domain );
		DocLibDTO dto = doclibMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Update-all')")
    @ApiOperation(value = "批量更新文档库", tags = {"文档库" },  notes = "批量更新文档库")
	@RequestMapping(method = RequestMethod.PUT, value = "/doclibs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<DocLibDTO> doclibdtos) {
        doclibService.updateBatch(doclibMapping.toDomain(doclibdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Remove-all')")
    @ApiOperation(value = "删除文档库", tags = {"文档库" },  notes = "删除文档库")
	@RequestMapping(method = RequestMethod.DELETE, value = "/doclibs/{doclib_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("doclib_id") Long doclib_id) {
         return ResponseEntity.status(HttpStatus.OK).body(doclibService.remove(doclib_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Remove-all')")
    @ApiOperation(value = "批量删除文档库", tags = {"文档库" },  notes = "批量删除文档库")
	@RequestMapping(method = RequestMethod.DELETE, value = "/doclibs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        doclibService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Get-all')")
    @ApiOperation(value = "获取文档库", tags = {"文档库" },  notes = "获取文档库")
	@RequestMapping(method = RequestMethod.GET, value = "/doclibs/{doclib_id}")
    public ResponseEntity<DocLibDTO> get(@PathVariable("doclib_id") Long doclib_id) {
        DocLib domain = doclibService.get(doclib_id);
        DocLibDTO dto = doclibMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取文档库草稿", tags = {"文档库" },  notes = "获取文档库草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/doclibs/getdraft")
    public ResponseEntity<DocLibDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(doclibMapping.toDto(doclibService.getDraft(new DocLib())));
    }

    @ApiOperation(value = "检查文档库", tags = {"文档库" },  notes = "检查文档库")
	@RequestMapping(method = RequestMethod.POST, value = "/doclibs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody DocLibDTO doclibdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(doclibService.checkKey(doclibMapping.toDomain(doclibdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Save-all')")
    @ApiOperation(value = "保存文档库", tags = {"文档库" },  notes = "保存文档库")
	@RequestMapping(method = RequestMethod.POST, value = "/doclibs/save")
    public ResponseEntity<Boolean> save(@RequestBody DocLibDTO doclibdto) {
        return ResponseEntity.status(HttpStatus.OK).body(doclibService.save(doclibMapping.toDomain(doclibdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-Save-all')")
    @ApiOperation(value = "批量保存文档库", tags = {"文档库" },  notes = "批量保存文档库")
	@RequestMapping(method = RequestMethod.POST, value = "/doclibs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<DocLibDTO> doclibdtos) {
        doclibService.saveBatch(doclibMapping.toDomain(doclibdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"文档库" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/doclibs/fetchdefault")
	public ResponseEntity<List<DocLibDTO>> fetchDefault(DocLibSearchContext context) {
        Page<DocLib> domains = doclibService.searchDefault(context) ;
        List<DocLibDTO> list = doclibMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-DocLib-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"文档库" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/doclibs/searchdefault")
	public ResponseEntity<Page<DocLibDTO>> searchDefault(@RequestBody DocLibSearchContext context) {
        Page<DocLib> domains = doclibService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(doclibMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

