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
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.core.zentao.service.IProductPlanService;
import cn.ibizlab.pms.core.zentao.filter.ProductPlanSearchContext;

@Slf4j
@Api(tags = {"ProductPlan" })
@RestController("WebApi-productplan")
@RequestMapping("")
public class ProductPlanResource {

    @Autowired
    private IProductPlanService productplanService;

    @Autowired
    @Lazy
    public ProductPlanMapping productplanMapping;

    public ProductPlanDTO permissionDTO=new ProductPlanDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "Save", tags = {"ProductPlan" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/save")
    public ResponseEntity<Boolean> save(@RequestBody ProductPlanDTO productplandto) {
        return ResponseEntity.status(HttpStatus.OK).body(productplanService.save(productplanMapping.toDomain(productplandto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatch", tags = {"ProductPlan" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProductPlanDTO> productplandtos) {
        productplanService.saveBatch(productplanMapping.toDomain(productplandtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "Create", tags = {"ProductPlan" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans")
    @Transactional
    public ResponseEntity<ProductPlanDTO> create(@RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
		productplanService.create(domain);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatch", tags = {"ProductPlan" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProductPlanDTO> productplandtos) {
        productplanService.createBatch(productplanMapping.toDomain(productplandtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"ProductPlan" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("productplan_id") BigInteger productplan_id) {
         return ResponseEntity.status(HttpStatus.OK).body(productplanService.remove(productplan_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"ProductPlan" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        productplanService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"ProductPlan" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProductPlanDTO productplandto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productplanService.checkKey(productplanMapping.toDomain(productplandto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"ProductPlan" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/productplans/getdraft")
    public ResponseEntity<ProductPlanDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(productplanMapping.toDto(productplanService.getDraft(new ProductPlan())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "Update", tags = {"ProductPlan" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}")
    @Transactional
    public ResponseEntity<ProductPlanDTO> update(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody ProductPlanDTO productplandto) {
		ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setId(productplan_id);
		productplanService.update(domain);
		ProductPlanDTO dto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"ProductPlan" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProductPlanDTO> productplandtos) {
        productplanService.updateBatch(productplanMapping.toDomain(productplandtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Get-all')")
    @ApiOperation(value = "Get", tags = {"ProductPlan" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}")
    public ResponseEntity<ProductPlanDTO> get(@PathVariable("productplan_id") BigInteger productplan_id) {
        ProductPlan domain = productplanService.get(productplan_id);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"ProductPlan" } ,notes = "fetchDEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"ProductPlan" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/searchdefault")
	public ResponseEntity<Page<ProductPlanDTO>> searchDefault(@RequestBody ProductPlanSearchContext context) {
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"ProductPlan" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(productplanService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"ProductPlan" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ProductPlanDTO> productplandtos) {
        List<ProductPlan> domainlist=productplanMapping.toDomain(productplandtos);
        for(ProductPlan domain:domainlist){
             domain.setProduct(product_id);
        }
        productplanService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"ProductPlan" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans")
    @Transactional
    public ResponseEntity<ProductPlanDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
		productplanService.create(domain);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatchByProduct", tags = {"ProductPlan" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ProductPlanDTO> productplandtos) {
        List<ProductPlan> domainlist=productplanMapping.toDomain(productplandtos);
        for(ProductPlan domain:domainlist){
            domain.setProduct(product_id);
        }
        productplanService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"ProductPlan" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id) {
		return ResponseEntity.status(HttpStatus.OK).body(productplanService.remove(productplan_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"ProductPlan" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        productplanService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByProduct", tags = {"ProductPlan" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductPlanDTO productplandto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productplanService.checkKey(productplanMapping.toDomain(productplandto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-GetDraft-all')")
    @ApiOperation(value = "GetDraftByProduct", tags = {"ProductPlan" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/getdraft")
    public ResponseEntity<ProductPlanDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        ProductPlan domain = new ProductPlan();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(productplanMapping.toDto(productplanService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"ProductPlan" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}")
    @Transactional
    public ResponseEntity<ProductPlanDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody ProductPlanDTO productplandto) {
        ProductPlan domain = productplanMapping.toDomain(productplandto);
        domain.setProduct(product_id);
        domain.setId(productplan_id);
		productplanService.update(domain);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"ProductPlan" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ProductPlanDTO> productplandtos) {
        List<ProductPlan> domainlist=productplanMapping.toDomain(productplandtos);
        for(ProductPlan domain:domainlist){
            domain.setProduct(product_id);
        }
        productplanService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"ProductPlan" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}")
    public ResponseEntity<ProductPlanDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id) {
        ProductPlan domain = productplanService.get(productplan_id);
        ProductPlanDTO dto = productplanMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"ProductPlan" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/fetchdefault")
	public ResponseEntity<List<ProductPlanDTO>> fetchProductPlanDefaultByProduct(@PathVariable("product_id") BigInteger product_id,ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
        List<ProductPlanDTO> list = productplanMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductPlan-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"ProductPlan" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/searchdefault")
	public ResponseEntity<Page<ProductPlanDTO>> searchProductPlanDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductPlanSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProductPlan> domains = productplanService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productplanMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
