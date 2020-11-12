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
import cn.ibizlab.pms.core.zentao.domain.Doc;
import cn.ibizlab.pms.core.zentao.service.IDocService;
import cn.ibizlab.pms.core.zentao.filter.DocSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"文档" })
@RestController("WebApi-doc")
@RequestMapping("")
public class DocResource {

    @Autowired
    public IDocService docService;

    @Autowired
    @Lazy
    public DocMapping docMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Create-all')")
    @ApiOperation(value = "新建文档", tags = {"文档" },  notes = "新建文档")
	@RequestMapping(method = RequestMethod.POST, value = "/docs")
    public ResponseEntity<DocDTO> create(@Validated @RequestBody DocDTO docdto) {
        Doc domain = docMapping.toDomain(docdto);
		docService.create(domain);
        DocDTO dto = docMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Create-all')")
    @ApiOperation(value = "批量新建文档", tags = {"文档" },  notes = "批量新建文档")
	@RequestMapping(method = RequestMethod.POST, value = "/docs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<DocDTO> docdtos) {
        docService.createBatch(docMapping.toDomain(docdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Update-all')")
    @ApiOperation(value = "更新文档", tags = {"文档" },  notes = "更新文档")
	@RequestMapping(method = RequestMethod.PUT, value = "/docs/{doc_id}")
    public ResponseEntity<DocDTO> update(@PathVariable("doc_id") Long doc_id, @RequestBody DocDTO docdto) {
		Doc domain  = docMapping.toDomain(docdto);
        domain .setId(doc_id);
		docService.update(domain );
		DocDTO dto = docMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Update-all')")
    @ApiOperation(value = "批量更新文档", tags = {"文档" },  notes = "批量更新文档")
	@RequestMapping(method = RequestMethod.PUT, value = "/docs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<DocDTO> docdtos) {
        docService.updateBatch(docMapping.toDomain(docdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Remove-all')")
    @ApiOperation(value = "删除文档", tags = {"文档" },  notes = "删除文档")
	@RequestMapping(method = RequestMethod.DELETE, value = "/docs/{doc_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("doc_id") Long doc_id) {
         return ResponseEntity.status(HttpStatus.OK).body(docService.remove(doc_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Remove-all')")
    @ApiOperation(value = "批量删除文档", tags = {"文档" },  notes = "批量删除文档")
	@RequestMapping(method = RequestMethod.DELETE, value = "/docs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        docService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Get-all')")
    @ApiOperation(value = "获取文档", tags = {"文档" },  notes = "获取文档")
	@RequestMapping(method = RequestMethod.GET, value = "/docs/{doc_id}")
    public ResponseEntity<DocDTO> get(@PathVariable("doc_id") Long doc_id) {
        Doc domain = docService.get(doc_id);
        DocDTO dto = docMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取文档草稿", tags = {"文档" },  notes = "获取文档草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/docs/getdraft")
    public ResponseEntity<DocDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(docMapping.toDto(docService.getDraft(new Doc())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-ByVersionUpdateContext-all')")
    @ApiOperation(value = "根据版本更新正文信息", tags = {"文档" },  notes = "根据版本更新正文信息")
	@RequestMapping(method = RequestMethod.PUT, value = "/docs/{doc_id}/byversionupdatecontext")
    public ResponseEntity<DocDTO> byVersionUpdateContext(@PathVariable("doc_id") Long doc_id, @RequestBody DocDTO docdto) {
        Doc domain = docMapping.toDomain(docdto);
        domain.setId(doc_id);
        domain = docService.byVersionUpdateContext(domain);
        docdto = docMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(docdto);
    }

    @ApiOperation(value = "检查文档", tags = {"文档" },  notes = "检查文档")
	@RequestMapping(method = RequestMethod.POST, value = "/docs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody DocDTO docdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(docService.checkKey(docMapping.toDomain(docdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Save-all')")
    @ApiOperation(value = "保存文档", tags = {"文档" },  notes = "保存文档")
	@RequestMapping(method = RequestMethod.POST, value = "/docs/save")
    public ResponseEntity<Boolean> save(@RequestBody DocDTO docdto) {
        return ResponseEntity.status(HttpStatus.OK).body(docService.save(docMapping.toDomain(docdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-Save-all')")
    @ApiOperation(value = "批量保存文档", tags = {"文档" },  notes = "批量保存文档")
	@RequestMapping(method = RequestMethod.POST, value = "/docs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<DocDTO> docdtos) {
        docService.saveBatch(docMapping.toDomain(docdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchChildDocLibDoc-all')")
	@ApiOperation(value = "获取文档库文档（子库）", tags = {"文档" } ,notes = "获取文档库文档（子库）")
    @RequestMapping(method= RequestMethod.GET , value="/docs/fetchchilddoclibdoc")
	public ResponseEntity<List<DocDTO>> fetchChildDocLibDoc(DocSearchContext context) {
        Page<Doc> domains = docService.searchChildDocLibDoc(context) ;
        List<DocDTO> list = docMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchChildDocLibDoc-all')")
	@ApiOperation(value = "查询文档库文档（子库）", tags = {"文档" } ,notes = "查询文档库文档（子库）")
    @RequestMapping(method= RequestMethod.POST , value="/docs/searchchilddoclibdoc")
	public ResponseEntity<Page<DocDTO>> searchChildDocLibDoc(@RequestBody DocSearchContext context) {
        Page<Doc> domains = docService.searchChildDocLibDoc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(docMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"文档" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/docs/fetchdefault")
	public ResponseEntity<List<DocDTO>> fetchDefault(DocSearchContext context) {
        Page<Doc> domains = docService.searchDefault(context) ;
        List<DocDTO> list = docMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"文档" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/docs/searchdefault")
	public ResponseEntity<Page<DocDTO>> searchDefault(@RequestBody DocSearchContext context) {
        Page<Doc> domains = docService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(docMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchDocLibDoc-all')")
	@ApiOperation(value = "获取文档库文档", tags = {"文档" } ,notes = "获取文档库文档")
    @RequestMapping(method= RequestMethod.GET , value="/docs/fetchdoclibdoc")
	public ResponseEntity<List<DocDTO>> fetchDocLibDoc(DocSearchContext context) {
        Page<Doc> domains = docService.searchDocLibDoc(context) ;
        List<DocDTO> list = docMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchDocLibDoc-all')")
	@ApiOperation(value = "查询文档库文档", tags = {"文档" } ,notes = "查询文档库文档")
    @RequestMapping(method= RequestMethod.POST , value="/docs/searchdoclibdoc")
	public ResponseEntity<Page<DocDTO>> searchDocLibDoc(@RequestBody DocSearchContext context) {
        Page<Doc> domains = docService.searchDocLibDoc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(docMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchDocModuleDoc-all')")
	@ApiOperation(value = "获取文档库分类文档", tags = {"文档" } ,notes = "获取文档库分类文档")
    @RequestMapping(method= RequestMethod.GET , value="/docs/fetchdocmoduledoc")
	public ResponseEntity<List<DocDTO>> fetchDocModuleDoc(DocSearchContext context) {
        Page<Doc> domains = docService.searchDocModuleDoc(context) ;
        List<DocDTO> list = docMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Doc-searchDocModuleDoc-all')")
	@ApiOperation(value = "查询文档库分类文档", tags = {"文档" } ,notes = "查询文档库分类文档")
    @RequestMapping(method= RequestMethod.POST , value="/docs/searchdocmoduledoc")
	public ResponseEntity<Page<DocDTO>> searchDocModuleDoc(@RequestBody DocSearchContext context) {
        Page<Doc> domains = docService.searchDocModuleDoc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(docMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

