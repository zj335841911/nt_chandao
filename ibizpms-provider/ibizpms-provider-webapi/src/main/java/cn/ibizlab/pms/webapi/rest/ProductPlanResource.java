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
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.core.zentao.service.IProductPlanService;
import cn.ibizlab.pms.core.zentao.filter.ProductPlanSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品计划" })
@RestController("WebApi-productplan")
@RequestMapping("")
public class ProductPlanResource {

    @Autowired
    public IProductPlanService productplanService;

    @Autowired
    @Lazy
    public ProductPlanMapping productplanMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "新建产品计划", tags = {"产品计划" },  notes = "新建产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans")
    public ResponseEntity<ProductPlanDTO> create(@RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
		productplanService.create(domain);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "批量新建产品计划", tags = {"产品计划" },  notes = "批量新建产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProductPlanDTO> productplandtos) {
        productplanService.createBatch(productplanMapping.toDomain(productplandtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "更新产品计划", tags = {"产品计划" },  notes = "更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}")
    public ResponseEntity<ProductPlanDTO> update(@PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
		ProductPlan domain  = productplanMapping.toDomain(productplandto);
        domain .setId(productplan_id);
		productplanService.update(domain );
		ProductPlanDTO dto = productplanMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "批量更新产品计划", tags = {"产品计划" },  notes = "批量更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProductPlanDTO> productplandtos) {
        productplanService.updateBatch(productplanMapping.toDomain(productplandtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "删除产品计划", tags = {"产品计划" },  notes = "删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("productplan_id") Long productplan_id) {
         return ResponseEntity.status(HttpStatus.OK).body(productplanService.remove(productplan_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "批量删除产品计划", tags = {"产品计划" },  notes = "批量删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        productplanService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Get-all')")
    @ApiOperation(value = "获取产品计划", tags = {"产品计划" },  notes = "获取产品计划")
	@RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}")
    public ResponseEntity<ProductPlanDTO> get(@PathVariable("productplan_id") Long productplan_id) {
        ProductPlan domain = productplanService.get(productplan_id);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取产品计划草稿", tags = {"产品计划" },  notes = "获取产品计划草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/productplans/getdraft")
    public ResponseEntity<ProductPlanDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(productplanMapping.toDto(productplanService.getDraft(new ProductPlan())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-BatchUnlinkBug-all')")
    @ApiOperation(value = "批量解除关联Bug", tags = {"产品计划" },  notes = "批量解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/batchunlinkbug")
    public ResponseEntity<ProductPlanDTO> batchUnlinkBug(@PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setId(productplan_id);
        domain = productplanService.batchUnlinkBug(domain);
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-BatchUnlinkStory-all')")
    @ApiOperation(value = "批量解除关联需求", tags = {"产品计划" },  notes = "批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/batchunlinkstory")
    public ResponseEntity<ProductPlanDTO> batchUnlinkStory(@PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setId(productplan_id);
        domain = productplanService.batchUnlinkStory(domain);
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @ApiOperation(value = "检查产品计划", tags = {"产品计划" },  notes = "检查产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProductPlanDTO productplandto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productplanService.checkKey(productplanMapping.toDomain(productplandto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-LinkBug-all')")
    @ApiOperation(value = "关联Bug", tags = {"产品计划" },  notes = "关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/linkbug")
    public ResponseEntity<ProductPlanDTO> linkBug(@PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setId(productplan_id);
        domain = productplanService.linkBug(domain);
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-LinkStory-all')")
    @ApiOperation(value = "关联需求", tags = {"产品计划" },  notes = "关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/linkstory")
    public ResponseEntity<ProductPlanDTO> linkStory(@PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setId(productplan_id);
        domain = productplanService.linkStory(domain);
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "保存产品计划", tags = {"产品计划" },  notes = "保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/save")
    public ResponseEntity<Boolean> save(@RequestBody ProductPlanDTO productplandto) {
        return ResponseEntity.status(HttpStatus.OK).body(productplanService.save(productplanMapping.toDomain(productplandto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "批量保存产品计划", tags = {"产品计划" },  notes = "批量保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProductPlanDTO> productplandtos) {
        productplanService.saveBatch(productplanMapping.toDomain(productplandtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-UnlinkBug-all')")
    @ApiOperation(value = "解除关联Bug", tags = {"产品计划" },  notes = "解除关联Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/unlinkbug")
    public ResponseEntity<ProductPlanDTO> unlinkBug(@PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setId(productplan_id);
        domain = productplanService.unlinkBug(domain);
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-UnlinkStory-all')")
    @ApiOperation(value = "解除关联需求", tags = {"产品计划" },  notes = "解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/unlinkstory")
    public ResponseEntity<ProductPlanDTO> unlinkStory(@PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setId(productplan_id);
        domain = productplanService.unlinkStory(domain);
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "获取CurProductPlan", tags = {"产品计划" } ,notes = "获取CurProductPlan")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/fetchcurproductplan")
	public ResponseEntity<List<ProductPlanDTO>> fetchCurProductPlan(ProductPlanSearchContext context) {
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
        List<ProductPlanDTO> list = productplanMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "查询CurProductPlan", tags = {"产品计划" } ,notes = "查询CurProductPlan")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/searchcurproductplan")
	public ResponseEntity<Page<ProductPlanDTO>> searchCurProductPlan(@RequestBody ProductPlanSearchContext context) {
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"产品计划" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/fetchdefault")
	public ResponseEntity<List<ProductPlanDTO>> fetchDefault(ProductPlanSearchContext context) {
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
        List<ProductPlanDTO> list = productplanMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"产品计划" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/searchdefault")
	public ResponseEntity<Page<ProductPlanDTO>> searchDefault(@RequestBody ProductPlanSearchContext context) {
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchProjectPlan-all')")
	@ApiOperation(value = "获取项目计划列表", tags = {"产品计划" } ,notes = "获取项目计划列表")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/fetchprojectplan")
	public ResponseEntity<List<ProductPlanDTO>> fetchProjectPlan(ProductPlanSearchContext context) {
        Page<ProductPlan> domains = productplanService.searchProjectPlan(context) ;
        List<ProductPlanDTO> list = productplanMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchProjectPlan-all')")
	@ApiOperation(value = "查询项目计划列表", tags = {"产品计划" } ,notes = "查询项目计划列表")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/searchprojectplan")
	public ResponseEntity<Page<ProductPlanDTO>> searchProjectPlan(@RequestBody ProductPlanSearchContext context) {
        Page<ProductPlan> domains = productplanService.searchProjectPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "根据产品建立产品计划", tags = {"产品计划" },  notes = "根据产品建立产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans")
    public ResponseEntity<ProductPlanDTO> createByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
		productplanService.create(domain);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "根据产品批量建立产品计划", tags = {"产品计划" },  notes = "根据产品批量建立产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<ProductPlanDTO> productplandtos) {
        List<ProductPlan> domainlist=productplanMapping.toDomain(productplandtos);
        for(ProductPlan domain:domainlist){
            domain.setProduct(product_id);
        }
        productplanService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "根据产品更新产品计划", tags = {"产品计划" },  notes = "根据产品更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}")
    public ResponseEntity<ProductPlanDTO> updateByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain.setId(productplan_id);
		productplanService.update(domain);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "根据产品批量更新产品计划", tags = {"产品计划" },  notes = "根据产品批量更新产品计划")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<ProductPlanDTO> productplandtos) {
        List<ProductPlan> domainlist=productplanMapping.toDomain(productplandtos);
        for(ProductPlan domain:domainlist){
            domain.setProduct(product_id);
        }
        productplanService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "根据产品删除产品计划", tags = {"产品计划" },  notes = "根据产品删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}")
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id) {
		return ResponseEntity.status(HttpStatus.OK).body(productplanService.remove(productplan_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "根据产品批量删除产品计划", tags = {"产品计划" },  notes = "根据产品批量删除产品计划")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<Long> ids) {
        productplanService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Get-all')")
    @ApiOperation(value = "根据产品获取产品计划", tags = {"产品计划" },  notes = "根据产品获取产品计划")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}")
    public ResponseEntity<ProductPlanDTO> getByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id) {
        ProductPlan domain = productplanService.get(productplan_id);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取产品计划草稿", tags = {"产品计划" },  notes = "根据产品获取产品计划草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/getdraft")
    public ResponseEntity<ProductPlanDTO> getDraftByProduct(@PathVariable("product_id") Long product_id) {
        ProductPlan domain = new ProductPlan();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(productplanMapping.toDto(productplanService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-BatchUnlinkBug-all')")
    @ApiOperation(value = "根据产品产品计划", tags = {"产品计划" },  notes = "根据产品产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/batchunlinkbug")
    public ResponseEntity<ProductPlanDTO> batchUnlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain = productplanService.batchUnlinkBug(domain) ;
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-BatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品产品计划", tags = {"产品计划" },  notes = "根据产品产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/batchunlinkstory")
    public ResponseEntity<ProductPlanDTO> batchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain = productplanService.batchUnlinkStory(domain) ;
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @ApiOperation(value = "根据产品检查产品计划", tags = {"产品计划" },  notes = "根据产品检查产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductPlanDTO productplandto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productplanService.checkKey(productplanMapping.toDomain(productplandto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-LinkBug-all')")
    @ApiOperation(value = "根据产品产品计划", tags = {"产品计划" },  notes = "根据产品产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/linkbug")
    public ResponseEntity<ProductPlanDTO> linkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain = productplanService.linkBug(domain) ;
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-LinkStory-all')")
    @ApiOperation(value = "根据产品产品计划", tags = {"产品计划" },  notes = "根据产品产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/linkstory")
    public ResponseEntity<ProductPlanDTO> linkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain = productplanService.linkStory(domain) ;
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "根据产品保存产品计划", tags = {"产品计划" },  notes = "根据产品保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(productplanService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "根据产品批量保存产品计划", tags = {"产品计划" },  notes = "根据产品批量保存产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<ProductPlanDTO> productplandtos) {
        List<ProductPlan> domainlist=productplanMapping.toDomain(productplandtos);
        for(ProductPlan domain:domainlist){
             domain.setProduct(product_id);
        }
        productplanService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-UnlinkBug-all')")
    @ApiOperation(value = "根据产品产品计划", tags = {"产品计划" },  notes = "根据产品产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/unlinkbug")
    public ResponseEntity<ProductPlanDTO> unlinkBugByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain = productplanService.unlinkBug(domain) ;
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-UnlinkStory-all')")
    @ApiOperation(value = "根据产品产品计划", tags = {"产品计划" },  notes = "根据产品产品计划")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/unlinkstory")
    public ResponseEntity<ProductPlanDTO> unlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productplan_id") Long productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain = productplanService.unlinkStory(domain) ;
        productplandto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productplandto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "根据产品获取CurProductPlan", tags = {"产品计划" } ,notes = "根据产品获取CurProductPlan")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/fetchcurproductplan")
	public ResponseEntity<List<ProductPlanDTO>> fetchProductPlanCurProductPlanByProduct(@PathVariable("product_id") Long product_id,ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
        List<ProductPlanDTO> list = productplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchCurProductPlan-all')")
	@ApiOperation(value = "根据产品查询CurProductPlan", tags = {"产品计划" } ,notes = "根据产品查询CurProductPlan")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/searchcurproductplan")
	public ResponseEntity<Page<ProductPlanDTO>> searchProductPlanCurProductPlanByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchCurProductPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"产品计划" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/fetchdefault")
	public ResponseEntity<List<ProductPlanDTO>> fetchProductPlanDefaultByProduct(@PathVariable("product_id") Long product_id,ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
        List<ProductPlanDTO> list = productplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"产品计划" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/searchdefault")
	public ResponseEntity<Page<ProductPlanDTO>> searchProductPlanDefaultByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchProjectPlan-all')")
	@ApiOperation(value = "根据产品获取项目计划列表", tags = {"产品计划" } ,notes = "根据产品获取项目计划列表")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/fetchprojectplan")
	public ResponseEntity<List<ProductPlanDTO>> fetchProductPlanProjectPlanByProduct(@PathVariable("product_id") Long product_id,ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchProjectPlan(context) ;
        List<ProductPlanDTO> list = productplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-searchProjectPlan-all')")
	@ApiOperation(value = "根据产品查询项目计划列表", tags = {"产品计划" } ,notes = "根据产品查询项目计划列表")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/searchprojectplan")
	public ResponseEntity<Page<ProductPlanDTO>> searchProductPlanProjectPlanByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchProjectPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

