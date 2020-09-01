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
import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProProductSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品（开发系统）" })
@RestController("WebApi-ibzproproduct")
@RequestMapping("")
public class IBZProProductResource {

    @Autowired
    public IIBZProProductService ibzproproductService;

    @Autowired
    @Lazy
    public IBZProProductMapping ibzproproductMapping;

    @PreAuthorize("hasPermission(this.ibzproproductMapping.toDomain(#ibzproproductdto),'pms-IBZProProduct-Create')")
    @ApiOperation(value = "新建产品（开发系统）", tags = {"产品（开发系统）" },  notes = "新建产品（开发系统）")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproproducts")
    public ResponseEntity<IBZProProductDTO> create(@RequestBody IBZProProductDTO ibzproproductdto) {
        IBZProProduct domain = ibzproproductMapping.toDomain(ibzproproductdto);
		ibzproproductService.create(domain);
        IBZProProductDTO dto = ibzproproductMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzproproductMapping.toDomain(#ibzproproductdtos),'pms-IBZProProduct-Create')")
    @ApiOperation(value = "批量新建产品（开发系统）", tags = {"产品（开发系统）" },  notes = "批量新建产品（开发系统）")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproproducts/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IBZProProductDTO> ibzproproductdtos) {
        ibzproproductService.createBatch(ibzproproductMapping.toDomain(ibzproproductdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "ibzproproduct" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.ibzproproductService.get(#ibzproproduct_id),'pms-IBZProProduct-Update')")
    @ApiOperation(value = "更新产品（开发系统）", tags = {"产品（开发系统）" },  notes = "更新产品（开发系统）")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzproproducts/{ibzproproduct_id}")
    public ResponseEntity<IBZProProductDTO> update(@PathVariable("ibzproproduct_id") String ibzproproduct_id, @RequestBody IBZProProductDTO ibzproproductdto) {
		IBZProProduct domain  = ibzproproductMapping.toDomain(ibzproproductdto);
        domain .setIbzproProductid(ibzproproduct_id);
		ibzproproductService.update(domain );
		IBZProProductDTO dto = ibzproproductMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzproproductService.getIbzproproductByEntities(this.ibzproproductMapping.toDomain(#ibzproproductdtos)),'pms-IBZProProduct-Update')")
    @ApiOperation(value = "批量更新产品（开发系统）", tags = {"产品（开发系统）" },  notes = "批量更新产品（开发系统）")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzproproducts/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IBZProProductDTO> ibzproproductdtos) {
        ibzproproductService.updateBatch(ibzproproductMapping.toDomain(ibzproproductdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibzproproductService.get(#ibzproproduct_id),'pms-IBZProProduct-Remove')")
    @ApiOperation(value = "删除产品（开发系统）", tags = {"产品（开发系统）" },  notes = "删除产品（开发系统）")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzproproducts/{ibzproproduct_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibzproproduct_id") String ibzproproduct_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzproproductService.remove(ibzproproduct_id));
    }

    @PreAuthorize("hasPermission(this.ibzproproductService.getIbzproproductByIds(#ids),'pms-IBZProProduct-Remove')")
    @ApiOperation(value = "批量删除产品（开发系统）", tags = {"产品（开发系统）" },  notes = "批量删除产品（开发系统）")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzproproducts/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        ibzproproductService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibzproproductMapping.toDomain(returnObject.body),'pms-IBZProProduct-Get')")
    @ApiOperation(value = "获取产品（开发系统）", tags = {"产品（开发系统）" },  notes = "获取产品（开发系统）")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzproproducts/{ibzproproduct_id}")
    public ResponseEntity<IBZProProductDTO> get(@PathVariable("ibzproproduct_id") String ibzproproduct_id) {
        IBZProProduct domain = ibzproproductService.get(ibzproproduct_id);
        IBZProProductDTO dto = ibzproproductMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取产品（开发系统）草稿", tags = {"产品（开发系统）" },  notes = "获取产品（开发系统）草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzproproducts/getdraft")
    public ResponseEntity<IBZProProductDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibzproproductMapping.toDto(ibzproproductService.getDraft(new IBZProProduct())));
    }

    @ApiOperation(value = "检查产品（开发系统）", tags = {"产品（开发系统）" },  notes = "检查产品（开发系统）")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproproducts/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IBZProProductDTO ibzproproductdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzproproductService.checkKey(ibzproproductMapping.toDomain(ibzproproductdto)));
    }

    @PreAuthorize("hasPermission(this.ibzproproductMapping.toDomain(#ibzproproductdto),'pms-IBZProProduct-Save')")
    @ApiOperation(value = "保存产品（开发系统）", tags = {"产品（开发系统）" },  notes = "保存产品（开发系统）")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproproducts/save")
    public ResponseEntity<Boolean> save(@RequestBody IBZProProductDTO ibzproproductdto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibzproproductService.save(ibzproproductMapping.toDomain(ibzproproductdto)));
    }

    @PreAuthorize("hasPermission(this.ibzproproductMapping.toDomain(#ibzproproductdtos),'pms-IBZProProduct-Save')")
    @ApiOperation(value = "批量保存产品（开发系统）", tags = {"产品（开发系统）" },  notes = "批量保存产品（开发系统）")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproproducts/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IBZProProductDTO> ibzproproductdtos) {
        ibzproproductService.saveBatch(ibzproproductMapping.toDomain(ibzproproductdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZProProduct-searchDefault-all') and hasPermission(#context,'pms-IBZProProduct-Get')")
	@ApiOperation(value = "获取数据集", tags = {"产品（开发系统）" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibzproproducts/fetchdefault")
	public ResponseEntity<List<IBZProProductDTO>> fetchDefault(IBZProProductSearchContext context) {
        Page<IBZProProduct> domains = ibzproproductService.searchDefault(context) ;
        List<IBZProProductDTO> list = ibzproproductMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBZProProduct-searchDefault-all') and hasPermission(#context,'pms-IBZProProduct-Get')")
	@ApiOperation(value = "查询数据集", tags = {"产品（开发系统）" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibzproproducts/searchdefault")
	public ResponseEntity<Page<IBZProProductDTO>> searchDefault(@RequestBody IBZProProductSearchContext context) {
        Page<IBZProProduct> domains = ibzproproductService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzproproductMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

