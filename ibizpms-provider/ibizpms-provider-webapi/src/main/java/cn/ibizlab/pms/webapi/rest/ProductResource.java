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
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.service.IProductService;
import cn.ibizlab.pms.core.zentao.filter.ProductSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品" })
@RestController("WebApi-product")
@RequestMapping("")
public class ProductResource {

    @Autowired
    public IProductService productService;

    @Autowired
    @Lazy
    public ProductMapping productMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Create-all')")
    @ApiOperation(value = "新建产品", tags = {"产品" },  notes = "新建产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products")
    public ResponseEntity<ProductDTO> create(@RequestBody ProductDTO productdto) {
        Product domain = productMapping.toDomain(productdto);
		productService.create(domain);
        ProductDTO dto = productMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Create-all')")
    @ApiOperation(value = "批量新建产品", tags = {"产品" },  notes = "批量新建产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProductDTO> productdtos) {
        productService.createBatch(productMapping.toDomain(productdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Update-all')")
    @ApiOperation(value = "更新产品", tags = {"产品" },  notes = "更新产品")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}")
    public ResponseEntity<ProductDTO> update(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductDTO productdto) {
		Product domain  = productMapping.toDomain(productdto);
        domain .setId(product_id);
		productService.update(domain );
		ProductDTO dto = productMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Update-all')")
    @ApiOperation(value = "批量更新产品", tags = {"产品" },  notes = "批量更新产品")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProductDTO> productdtos) {
        productService.updateBatch(productMapping.toDomain(productdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Remove-all')")
    @ApiOperation(value = "删除产品", tags = {"产品" },  notes = "删除产品")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("product_id") BigInteger product_id) {
         return ResponseEntity.status(HttpStatus.OK).body(productService.remove(product_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Remove-all')")
    @ApiOperation(value = "批量删除产品", tags = {"产品" },  notes = "批量删除产品")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        productService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Get-all')")
    @ApiOperation(value = "获取产品", tags = {"产品" },  notes = "获取产品")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}")
    public ResponseEntity<ProductDTO> get(@PathVariable("product_id") BigInteger product_id) {
        Product domain = productService.get(product_id);
        ProductDTO dto = productMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取产品草稿", tags = {"产品" },  notes = "获取产品草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/products/getdraft")
    public ResponseEntity<ProductDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(productMapping.toDto(productService.getDraft(new Product())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-CancelProductTop-all')")
    @ApiOperation(value = "取消置顶", tags = {"产品" },  notes = "取消置顶")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cancelproducttop")
    public ResponseEntity<ProductDTO> cancelProductTop(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductDTO productdto) {
        Product domain = productMapping.toDomain(productdto);
domain.setId(product_id);
        domain = productService.cancelProductTop(domain);
        productdto = productMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productdto);
    }

    @ApiOperation(value = "检查产品", tags = {"产品" },  notes = "检查产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProductDTO productdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productService.checkKey(productMapping.toDomain(productdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Close-all')")
    @ApiOperation(value = "关闭", tags = {"产品" },  notes = "关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/close")
    public ResponseEntity<ProductDTO> close(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductDTO productdto) {
        Product domain = productMapping.toDomain(productdto);
domain.setId(product_id);
        domain = productService.close(domain);
        productdto = productMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-MobProductCounter-all')")
    @ApiOperation(value = "产品移动端计数器方法", tags = {"产品" },  notes = "产品移动端计数器方法")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/mobproductcounter")
    public ResponseEntity<ProductDTO> mobProductCounter(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductDTO productdto) {
        Product domain = productMapping.toDomain(productdto);
domain.setId(product_id);
        domain = productService.mobProductCounter(domain);
        productdto = productMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-ProductTop-all')")
    @ApiOperation(value = "置顶", tags = {"产品" },  notes = "置顶")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/producttop")
    public ResponseEntity<ProductDTO> productTop(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductDTO productdto) {
        Product domain = productMapping.toDomain(productdto);
domain.setId(product_id);
        domain = productService.productTop(domain);
        productdto = productMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Save-all')")
    @ApiOperation(value = "保存产品", tags = {"产品" },  notes = "保存产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/save")
    public ResponseEntity<Boolean> save(@RequestBody ProductDTO productdto) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.save(productMapping.toDomain(productdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-Save-all')")
    @ApiOperation(value = "批量保存产品", tags = {"产品" },  notes = "批量保存产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProductDTO> productdtos) {
        productService.saveBatch(productMapping.toDomain(productdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchCurProject-all')")
	@ApiOperation(value = "获取当前项目", tags = {"产品" } ,notes = "获取当前项目")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchCurProject-all')")
	@ApiOperation(value = "查询当前项目", tags = {"产品" } ,notes = "查询当前项目")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchcurproject")
	public ResponseEntity<Page<ProductDTO>> searchCurProject(@RequestBody ProductSearchContext context) {
        Page<Product> domains = productService.searchCurProject(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchCurUer-all')")
	@ApiOperation(value = "获取当前用户", tags = {"产品" } ,notes = "获取当前用户")
    @RequestMapping(method= RequestMethod.GET , value="/products/fetchcuruer")
	public ResponseEntity<List<ProductDTO>> fetchCurUer(ProductSearchContext context) {
        Page<Product> domains = productService.searchCurUer(context) ;
        List<ProductDTO> list = productMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchCurUer-all')")
	@ApiOperation(value = "查询当前用户", tags = {"产品" } ,notes = "查询当前用户")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchcuruer")
	public ResponseEntity<Page<ProductDTO>> searchCurUer(@RequestBody ProductSearchContext context) {
        Page<Product> domains = productService.searchCurUer(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"产品" } ,notes = "获取DEFAULT")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"产品" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchdefault")
	public ResponseEntity<Page<ProductDTO>> searchDefault(@RequestBody ProductSearchContext context) {
        Page<Product> domains = productService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchProductPM-all')")
	@ApiOperation(value = "获取产品总览", tags = {"产品" } ,notes = "获取产品总览")
    @RequestMapping(method= RequestMethod.GET , value="/products/fetchproductpm")
	public ResponseEntity<List<ProductDTO>> fetchProductPM(ProductSearchContext context) {
        Page<Product> domains = productService.searchProductPM(context) ;
        List<ProductDTO> list = productMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchProductPM-all')")
	@ApiOperation(value = "查询产品总览", tags = {"产品" } ,notes = "查询产品总览")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchproductpm")
	public ResponseEntity<Page<ProductDTO>> searchProductPM(@RequestBody ProductSearchContext context) {
        Page<Product> domains = productService.searchProductPM(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchStoryCurProject-all')")
	@ApiOperation(value = "获取当前项目", tags = {"产品" } ,notes = "获取当前项目")
    @RequestMapping(method= RequestMethod.GET , value="/products/fetchstorycurproject")
	public ResponseEntity<List<ProductDTO>> fetchStoryCurProject(ProductSearchContext context) {
        Page<Product> domains = productService.searchStoryCurProject(context) ;
        List<ProductDTO> list = productMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Product-searchStoryCurProject-all')")
	@ApiOperation(value = "查询当前项目", tags = {"产品" } ,notes = "查询当前项目")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchstorycurproject")
	public ResponseEntity<Page<ProductDTO>> searchStoryCurProject(@RequestBody ProductSearchContext context) {
        Page<Product> domains = productService.searchStoryCurProject(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

