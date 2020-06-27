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
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.core.zentao.service.IProductPlanService;
import cn.ibizlab.pms.core.zentao.filter.ProductPlanSearchContext;

@Slf4j
@Api(tags = {"产品计划" })
@RestController("WebApi-subproductplan")
@RequestMapping("")
public class SubProductPlanResource {

    @Autowired
    public IProductPlanService productplanService;

    @Autowired
    @Lazy
    public SubProductPlanMapping subproductplanMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "根据产品计划保存产品计划", tags = {"产品计划" },  notes = "根据产品计划保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/subproductplans/save")
    public ResponseEntity<Boolean> saveByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        ProductPlan domain = subproductplanMapping.toDomain(subproductplandto);
        domain.setParent(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(productplanService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "根据产品计划批量保存产品计划", tags = {"产品计划" },  notes = "根据产品计划批量保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/subproductplans/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<SubProductPlanDTO> subproductplandtos) {
        List<ProductPlan> domainlist=subproductplanMapping.toDomain(subproductplandtos);
        for(ProductPlan domain:domainlist){
             domain.setParent(productplan_id);
        }
        productplanService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "根据产品计划建立产品计划", tags = {"产品计划" },  notes = "根据产品计划建立产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/subproductplans")
    @Transactional
    public ResponseEntity<SubProductPlanDTO> createByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        ProductPlan domain = subproductplanMapping.toDomain(subproductplandto);
        domain.setParent(productplan_id);
		productplanService.create(domain);
        SubProductPlanDTO dto = subproductplanMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "根据产品计划批量建立产品计划", tags = {"产品计划" },  notes = "根据产品计划批量建立产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/subproductplans/batch")
    public ResponseEntity<Boolean> createBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<SubProductPlanDTO> subproductplandtos) {
        List<ProductPlan> domainlist=subproductplanMapping.toDomain(subproductplandtos);
        for(ProductPlan domain:domainlist){
            domain.setParent(productplan_id);
        }
        productplanService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "根据产品计划删除产品计划", tags = {"产品计划" },  notes = "根据产品计划删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}/subproductplans/{subproductplan_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("subproductplan_id") BigInteger subproductplan_id) {
		return ResponseEntity.status(HttpStatus.OK).body(productplanService.remove(subproductplan_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "根据产品计划批量删除产品计划", tags = {"产品计划" },  notes = "根据产品计划批量删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}/subproductplans/batch")
    public ResponseEntity<Boolean> removeBatchByProductPlan(@RequestBody List<BigInteger> ids) {
        productplanService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "根据产品计划检查产品计划", tags = {"产品计划" },  notes = "根据产品计划检查产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/subproductplans/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productplanService.checkKey(subproductplanMapping.toDomain(subproductplandto)));
    }

    @ApiOperation(value = "根据产品计划获取产品计划草稿", tags = {"产品计划" },  notes = "根据产品计划获取产品计划草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}/subproductplans/getdraft")
    public ResponseEntity<SubProductPlanDTO> getDraftByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id) {
        ProductPlan domain = new ProductPlan();
        domain.setParent(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(subproductplanMapping.toDto(productplanService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "根据产品计划更新产品计划", tags = {"产品计划" },  notes = "根据产品计划更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}/subproductplans/{subproductplan_id}")
    @Transactional
    public ResponseEntity<SubProductPlanDTO> updateByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("subproductplan_id") BigInteger subproductplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        ProductPlan domain = subproductplanMapping.toDomain(subproductplandto);
        domain.setParent(productplan_id);
        domain.setId(subproductplan_id);
		productplanService.update(domain);
        SubProductPlanDTO dto = subproductplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "根据产品计划批量更新产品计划", tags = {"产品计划" },  notes = "根据产品计划批量更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}/subproductplans/batch")
    public ResponseEntity<Boolean> updateBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<SubProductPlanDTO> subproductplandtos) {
        List<ProductPlan> domainlist=subproductplanMapping.toDomain(subproductplandtos);
        for(ProductPlan domain:domainlist){
            domain.setParent(productplan_id);
        }
        productplanService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Get-all')")
    @ApiOperation(value = "根据产品计划获取产品计划", tags = {"产品计划" },  notes = "根据产品计划获取产品计划")
	@RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}/subproductplans/{subproductplan_id}")
    public ResponseEntity<SubProductPlanDTO> getByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("subproductplan_id") BigInteger subproductplan_id) {
        ProductPlan domain = productplanService.get(subproductplan_id);
        SubProductPlanDTO dto = subproductplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "根据产品计划获取DEFAULT", tags = {"产品计划" } ,notes = "根据产品计划获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/subproductplans/fetchdefault")
	public ResponseEntity<List<SubProductPlanDTO>> fetchSubProductPlanDefaultByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
        List<SubProductPlanDTO> list = subproductplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "根据产品计划查询DEFAULT", tags = {"产品计划" } ,notes = "根据产品计划查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/subproductplans/searchdefault")
	public ResponseEntity<Page<SubProductPlanDTO>> searchSubProductPlanDefaultByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subproductplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "根据产品计划获取CurProductPlan", tags = {"产品计划" } ,notes = "根据产品计划获取CurProductPlan")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/subproductplans/fetchcurproductplan")
	public ResponseEntity<List<SubProductPlanDTO>> fetchSubProductPlanCurProductPlanByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
        List<SubProductPlanDTO> list = subproductplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "根据产品计划查询CurProductPlan", tags = {"产品计划" } ,notes = "根据产品计划查询CurProductPlan")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/subproductplans/searchcurproductplan")
	public ResponseEntity<Page<SubProductPlanDTO>> searchSubProductPlanCurProductPlanByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subproductplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "根据产品产品计划保存产品计划", tags = {"产品计划" },  notes = "根据产品产品计划保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/save")
    public ResponseEntity<Boolean> saveByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        ProductPlan domain = subproductplanMapping.toDomain(subproductplandto);
        domain.setParent(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(productplanService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "根据产品产品计划批量保存产品计划", tags = {"产品计划" },  notes = "根据产品产品计划批量保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<SubProductPlanDTO> subproductplandtos) {
        List<ProductPlan> domainlist=subproductplanMapping.toDomain(subproductplandtos);
        for(ProductPlan domain:domainlist){
             domain.setParent(productplan_id);
        }
        productplanService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "根据产品产品计划建立产品计划", tags = {"产品计划" },  notes = "根据产品产品计划建立产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans")
    @Transactional
    public ResponseEntity<SubProductPlanDTO> createByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        ProductPlan domain = subproductplanMapping.toDomain(subproductplandto);
        domain.setParent(productplan_id);
		productplanService.create(domain);
        SubProductPlanDTO dto = subproductplanMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "根据产品产品计划批量建立产品计划", tags = {"产品计划" },  notes = "根据产品产品计划批量建立产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/batch")
    public ResponseEntity<Boolean> createBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<SubProductPlanDTO> subproductplandtos) {
        List<ProductPlan> domainlist=subproductplanMapping.toDomain(subproductplandtos);
        for(ProductPlan domain:domainlist){
            domain.setParent(productplan_id);
        }
        productplanService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "根据产品产品计划删除产品计划", tags = {"产品计划" },  notes = "根据产品产品计划删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("subproductplan_id") BigInteger subproductplan_id) {
		return ResponseEntity.status(HttpStatus.OK).body(productplanService.remove(subproductplan_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "根据产品产品计划批量删除产品计划", tags = {"产品计划" },  notes = "根据产品产品计划批量删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/batch")
    public ResponseEntity<Boolean> removeBatchByProductProductPlan(@RequestBody List<BigInteger> ids) {
        productplanService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "根据产品产品计划检查产品计划", tags = {"产品计划" },  notes = "根据产品产品计划检查产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productplanService.checkKey(subproductplanMapping.toDomain(subproductplandto)));
    }

    @ApiOperation(value = "根据产品产品计划获取产品计划草稿", tags = {"产品计划" },  notes = "根据产品产品计划获取产品计划草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/getdraft")
    public ResponseEntity<SubProductPlanDTO> getDraftByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id) {
        ProductPlan domain = new ProductPlan();
        domain.setParent(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(subproductplanMapping.toDto(productplanService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "根据产品产品计划更新产品计划", tags = {"产品计划" },  notes = "根据产品产品计划更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}")
    @Transactional
    public ResponseEntity<SubProductPlanDTO> updateByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("subproductplan_id") BigInteger subproductplan_id, @RequestBody SubProductPlanDTO subproductplandto) {
        ProductPlan domain = subproductplanMapping.toDomain(subproductplandto);
        domain.setParent(productplan_id);
        domain.setId(subproductplan_id);
		productplanService.update(domain);
        SubProductPlanDTO dto = subproductplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "根据产品产品计划批量更新产品计划", tags = {"产品计划" },  notes = "根据产品产品计划批量更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/batch")
    public ResponseEntity<Boolean> updateBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<SubProductPlanDTO> subproductplandtos) {
        List<ProductPlan> domainlist=subproductplanMapping.toDomain(subproductplandtos);
        for(ProductPlan domain:domainlist){
            domain.setParent(productplan_id);
        }
        productplanService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Get-all')")
    @ApiOperation(value = "根据产品产品计划获取产品计划", tags = {"产品计划" },  notes = "根据产品产品计划获取产品计划")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}/subproductplans/{subproductplan_id}")
    public ResponseEntity<SubProductPlanDTO> getByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("subproductplan_id") BigInteger subproductplan_id) {
        ProductPlan domain = productplanService.get(subproductplan_id);
        SubProductPlanDTO dto = subproductplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "根据产品产品计划获取DEFAULT", tags = {"产品计划" } ,notes = "根据产品产品计划获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/subproductplans/fetchdefault")
	public ResponseEntity<List<SubProductPlanDTO>> fetchSubProductPlanDefaultByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
        List<SubProductPlanDTO> list = subproductplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "根据产品产品计划查询DEFAULT", tags = {"产品计划" } ,notes = "根据产品产品计划查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/subproductplans/searchdefault")
	public ResponseEntity<Page<SubProductPlanDTO>> searchSubProductPlanDefaultByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subproductplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "根据产品产品计划获取CurProductPlan", tags = {"产品计划" } ,notes = "根据产品产品计划获取CurProductPlan")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/subproductplans/fetchcurproductplan")
	public ResponseEntity<List<SubProductPlanDTO>> fetchSubProductPlanCurProductPlanByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
        List<SubProductPlanDTO> list = subproductplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "根据产品产品计划查询CurProductPlan", tags = {"产品计划" } ,notes = "根据产品产品计划查询CurProductPlan")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/subproductplans/searchcurproductplan")
	public ResponseEntity<Page<SubProductPlanDTO>> searchSubProductPlanCurProductPlanByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_parent_eq(productplan_id);
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(subproductplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

