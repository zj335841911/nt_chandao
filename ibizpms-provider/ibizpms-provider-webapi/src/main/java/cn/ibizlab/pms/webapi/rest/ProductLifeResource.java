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
import cn.ibizlab.pms.core.ibiz.domain.ProductLife;
import cn.ibizlab.pms.core.ibiz.service.IProductLifeService;
import cn.ibizlab.pms.core.ibiz.filter.ProductLifeSearchContext;

@Slf4j
@Api(tags = {"ProductLife" })
@RestController("WebApi-productlife")
@RequestMapping("")
public class ProductLifeResource {

    @Autowired
    private IProductLifeService productlifeService;

    @Autowired
    @Lazy
    public ProductLifeMapping productlifeMapping;

    public ProductLifeDTO permissionDTO=new ProductLifeDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-GetRoadmap-all')")
	@ApiOperation(value = "fetchGetRoadmap", tags = {"ProductLife" } ,notes = "fetchGetRoadmap")
    @RequestMapping(method= RequestMethod.GET , value="/productlives/fetchgetroadmap")
	public ResponseEntity<List<ProductLifeDTO>> fetchGetRoadmap(ProductLifeSearchContext context) {
        Page<ProductLife> domains = productlifeService.searchGetRoadmap(context) ;
        List<ProductLifeDTO> list = productlifeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-GetRoadmap-all')")
	@ApiOperation(value = "searchGetRoadmap", tags = {"ProductLife" } ,notes = "searchGetRoadmap")
    @RequestMapping(method= RequestMethod.POST , value="/productlives/searchgetroadmap")
	public ResponseEntity<Page<ProductLifeDTO>> searchGetRoadmap(@RequestBody ProductLifeSearchContext context) {
        Page<ProductLife> domains = productlifeService.searchGetRoadmap(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productlifeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-RoadMapYear-all')")
	@ApiOperation(value = "fetchRoadMapYear", tags = {"ProductLife" } ,notes = "fetchRoadMapYear")
    @RequestMapping(method= RequestMethod.GET , value="/productlives/fetchroadmapyear")
	public ResponseEntity<List<ProductLifeDTO>> fetchRoadMapYear(ProductLifeSearchContext context) {
        Page<ProductLife> domains = productlifeService.searchRoadMapYear(context) ;
        List<ProductLifeDTO> list = productlifeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-RoadMapYear-all')")
	@ApiOperation(value = "searchRoadMapYear", tags = {"ProductLife" } ,notes = "searchRoadMapYear")
    @RequestMapping(method= RequestMethod.POST , value="/productlives/searchroadmapyear")
	public ResponseEntity<Page<ProductLifeDTO>> searchRoadMapYear(@RequestBody ProductLifeSearchContext context) {
        Page<ProductLife> domains = productlifeService.searchRoadMapYear(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productlifeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-GetRoadmap-all')")
	@ApiOperation(value = "fetchGetRoadmapByProduct", tags = {"ProductLife" } ,notes = "fetchGetRoadmapByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productlives/fetchgetroadmap")
	public ResponseEntity<List<ProductLifeDTO>> fetchProductLifeGetRoadmapByProduct(@PathVariable("product_id") BigInteger product_id,ProductLifeSearchContext context) {
        
        Page<ProductLife> domains = productlifeService.searchGetRoadmap(context) ;
        List<ProductLifeDTO> list = productlifeMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-GetRoadmap-all')")
	@ApiOperation(value = "searchGetRoadmapByProduct", tags = {"ProductLife" } ,notes = "searchGetRoadmapByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productlives/searchgetroadmap")
	public ResponseEntity<Page<ProductLifeDTO>> searchProductLifeGetRoadmapByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductLifeSearchContext context) {
        
        Page<ProductLife> domains = productlifeService.searchGetRoadmap(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productlifeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-RoadMapYear-all')")
	@ApiOperation(value = "fetchRoadMapYearByProduct", tags = {"ProductLife" } ,notes = "fetchRoadMapYearByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productlives/fetchroadmapyear")
	public ResponseEntity<List<ProductLifeDTO>> fetchProductLifeRoadMapYearByProduct(@PathVariable("product_id") BigInteger product_id,ProductLifeSearchContext context) {
        
        Page<ProductLife> domains = productlifeService.searchRoadMapYear(context) ;
        List<ProductLifeDTO> list = productlifeMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductLife-RoadMapYear-all')")
	@ApiOperation(value = "searchRoadMapYearByProduct", tags = {"ProductLife" } ,notes = "searchRoadMapYearByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productlives/searchroadmapyear")
	public ResponseEntity<Page<ProductLifeDTO>> searchProductLifeRoadMapYearByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProductLifeSearchContext context) {
        
        Page<ProductLife> domains = productlifeService.searchRoadMapYear(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productlifeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
