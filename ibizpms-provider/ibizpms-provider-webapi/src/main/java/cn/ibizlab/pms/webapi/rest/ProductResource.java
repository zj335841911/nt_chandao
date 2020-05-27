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
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.service.IProductService;
import cn.ibizlab.pms.core.zentao.filter.ProductSearchContext;

@Slf4j
@Api(tags = {"Product" })
@RestController("WebApi-product")
@RequestMapping("")
public class ProductResource {

    @Autowired
    public IProductService productService;

    @Autowired
    @Lazy
    public ProductMapping productMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Get-all')")
    @ApiOperation(value = "Get", tags = {"Product" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}")
    public ResponseEntity<ProductDTO> get(@PathVariable("product_id") BigInteger product_id) {
        Product domain = productService.get(product_id);
        ProductDTO dto = productMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Save-all')")
    @ApiOperation(value = "Save", tags = {"Product" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/products/save")
    public ResponseEntity<Boolean> save(@RequestBody ProductDTO productdto) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.save(productMapping.toDomain(productdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Save-all')")
    @ApiOperation(value = "SaveBatch", tags = {"Product" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/products/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProductDTO> productdtos) {
        productService.saveBatch(productMapping.toDomain(productdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "CheckKey", tags = {"Product" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/products/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProductDTO productdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productService.checkKey(productMapping.toDomain(productdto)));
    }

    @ApiOperation(value = "GetDraft", tags = {"Product" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/products/getdraft")
    public ResponseEntity<ProductDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(productMapping.toDto(productService.getDraft(new Product())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Update-all')")
    @ApiOperation(value = "Update", tags = {"Product" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}")
    @Transactional
    public ResponseEntity<ProductDTO> update(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductDTO productdto) {
		Product domain  = productMapping.toDomain(productdto);
        domain .setId(product_id);
		productService.update(domain );
		ProductDTO dto = productMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Update-all')")
    @ApiOperation(value = "UpdateBatch", tags = {"Product" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProductDTO> productdtos) {
        productService.updateBatch(productMapping.toDomain(productdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"Product" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("product_id") BigInteger product_id) {
         return ResponseEntity.status(HttpStatus.OK).body(productService.remove(product_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Remove-all')")
    @ApiOperation(value = "RemoveBatch", tags = {"Product" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        productService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Create-all')")
    @ApiOperation(value = "Create", tags = {"Product" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/products")
    @Transactional
    public ResponseEntity<ProductDTO> create(@RequestBody ProductDTO productdto) {
        Product domain = productMapping.toDomain(productdto);
		productService.create(domain);
        ProductDTO dto = productMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Create-all')")
    @ApiOperation(value = "createBatch", tags = {"Product" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/products/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProductDTO> productdtos) {
        productService.createBatch(productMapping.toDomain(productdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"Product" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/fetchdefault")
	public ResponseEntity<List<ProductDTO>> fetchDefault(ProductSearchContext context) {
        Page<Product> domains = productService.searchDefault(context) ;
        List<ProductDTO> list = productMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"Product" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchdefault")
	public ResponseEntity<Page<ProductDTO>> searchDefault(@RequestBody ProductSearchContext context) {
        Page<Product> domains = productService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-CurProject-all')")
	@ApiOperation(value = "fetch当前项目", tags = {"Product" } ,notes = "fetch当前项目")
    @RequestMapping(method= RequestMethod.GET , value="/products/fetchcurproject")
	public ResponseEntity<List<ProductDTO>> fetchCurProject(ProductSearchContext context) {
        Page<Product> domains = productService.searchCurProject(context) ;
        List<ProductDTO> list = productMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-CurProject-all')")
	@ApiOperation(value = "search当前项目", tags = {"Product" } ,notes = "search当前项目")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchcurproject")
	public ResponseEntity<Page<ProductDTO>> searchCurProject(@RequestBody ProductSearchContext context) {
        Page<Product> domains = productService.searchCurProject(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

