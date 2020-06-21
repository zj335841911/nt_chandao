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
import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.service.ICaseService;
import cn.ibizlab.pms.core.zentao.filter.CaseSearchContext;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.service.ICaseStepService;

@Slf4j
@Api(tags = {"测试用例" })
@RestController("WebApi-case")
@RequestMapping("")
public class CaseResource {

    @Autowired
    public ICaseService caseService;

    @Autowired
    @Lazy
    public CaseMapping caseMapping;

    @Autowired
    private ICaseStepService casestepService;

    @ApiOperation(value = "获取测试用例草稿", tags = {"测试用例" },  notes = "获取测试用例草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(new Case())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "保存测试用例", tags = {"测试用例" },  notes = "保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/save")
    public ResponseEntity<Boolean> save(@RequestBody CaseDTO casedto) {
        return ResponseEntity.status(HttpStatus.OK).body(caseService.save(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "批量保存测试用例", tags = {"测试用例" },  notes = "批量保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CaseDTO> casedtos) {
        caseService.saveBatch(caseMapping.toDomain(casedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "新建测试用例", tags = {"测试用例" },  notes = "新建测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases")
    @Transactional
    public ResponseEntity<CaseDTO> create(@RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
		caseService.create(domain);
        CaseDTO dto = caseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "批量新建测试用例", tags = {"测试用例" },  notes = "批量新建测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CaseDTO> casedtos) {
        caseService.createBatch(caseMapping.toDomain(casedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查测试用例", tags = {"测试用例" },  notes = "检查测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "删除测试用例", tags = {"测试用例" },  notes = "删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/{case_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("case_id") BigInteger case_id) {
         return ResponseEntity.status(HttpStatus.OK).body(caseService.remove(case_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "批量删除测试用例", tags = {"测试用例" },  notes = "批量删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        caseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Get-all')")
    @ApiOperation(value = "获取测试用例", tags = {"测试用例" },  notes = "获取测试用例")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}")
    public ResponseEntity<CaseDTO> get(@PathVariable("case_id") BigInteger case_id) {
        Case domain = caseService.get(case_id);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "更新测试用例", tags = {"测试用例" },  notes = "更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/{case_id}")
    @Transactional
    public ResponseEntity<CaseDTO> update(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
		Case domain  = caseMapping.toDomain(casedto);
        domain .setId(case_id);
		caseService.update(domain );
		CaseDTO dto = caseMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "批量更新测试用例", tags = {"测试用例" },  notes = "批量更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CaseDTO> casedtos) {
        caseService.updateBatch(caseMapping.toDomain(casedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurTestTask-all')")
	@ApiOperation(value = "获取测试单关联用例", tags = {"测试用例" } ,notes = "获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/cases/fetchcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchCurTestTask(CaseSearchContext context) {
        Page<Case> domains = caseService.searchCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurTestTask-all')")
	@ApiOperation(value = "查询测试单关联用例", tags = {"测试用例" } ,notes = "查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCurTestTask(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"测试用例" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/cases/fetchdefault")
	public ResponseEntity<List<CaseDTO>> fetchDefault(CaseSearchContext context) {
        Page<Case> domains = caseService.searchDefault(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试用例" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchDefault(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurSuit-all')")
	@ApiOperation(value = "获取套件关联用例", tags = {"测试用例" } ,notes = "获取套件关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/cases/fetchcursuit")
	public ResponseEntity<List<CaseDTO>> fetchCurSuit(CaseSearchContext context) {
        Page<Case> domains = caseService.searchCurSuit(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurSuit-all')")
	@ApiOperation(value = "查询套件关联用例", tags = {"测试用例" } ,notes = "查询套件关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchcursuit")
	public ResponseEntity<Page<CaseDTO>> searchCurSuit(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchCurSuit(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @ApiOperation(value = "根据产品获取测试用例草稿", tags = {"测试用例" },  notes = "根据产品获取测试用例草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Case domain = new Case();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "根据产品保存测试用例", tags = {"测试用例" },  notes = "根据产品保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "根据产品批量保存测试用例", tags = {"测试用例" },  notes = "根据产品批量保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
             domain.setProduct(product_id);
        }
        caseService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "根据产品建立测试用例", tags = {"测试用例" },  notes = "根据产品建立测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases")
    @Transactional
    public ResponseEntity<CaseDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
		caseService.create(domain);
        CaseDTO dto = caseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "根据产品批量建立测试用例", tags = {"测试用例" },  notes = "根据产品批量建立测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setProduct(product_id);
        }
        caseService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "根据产品检查测试用例", tags = {"测试用例" },  notes = "根据产品检查测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "根据产品删除测试用例", tags = {"测试用例" },  notes = "根据产品删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id) {
		return ResponseEntity.status(HttpStatus.OK).body(caseService.remove(case_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "根据产品批量删除测试用例", tags = {"测试用例" },  notes = "根据产品批量删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        caseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Get-all')")
    @ApiOperation(value = "根据产品获取测试用例", tags = {"测试用例" },  notes = "根据产品获取测试用例")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}")
    public ResponseEntity<CaseDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id) {
        Case domain = caseService.get(case_id);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "根据产品更新测试用例", tags = {"测试用例" },  notes = "根据产品更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<CaseDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain.setId(case_id);
		caseService.update(domain);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "根据产品批量更新测试用例", tags = {"测试用例" },  notes = "根据产品批量更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setProduct(product_id);
        }
        caseService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurTestTask-all')")
	@ApiOperation(value = "根据产品获取测试单关联用例", tags = {"测试用例" } ,notes = "根据产品获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/fetchcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchCaseCurTestTaskByProduct(@PathVariable("product_id") BigInteger product_id,CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurTestTask-all')")
	@ApiOperation(value = "根据产品查询测试单关联用例", tags = {"测试用例" } ,notes = "根据产品查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurTestTaskByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"测试用例" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/fetchdefault")
	public ResponseEntity<List<CaseDTO>> fetchCaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id,CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchDefault(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Default-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"测试用例" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchCaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurSuit-all')")
	@ApiOperation(value = "根据产品获取套件关联用例", tags = {"测试用例" } ,notes = "根据产品获取套件关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/fetchcursuit")
	public ResponseEntity<List<CaseDTO>> fetchCaseCurSuitByProduct(@PathVariable("product_id") BigInteger product_id,CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchCurSuit(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-CurSuit-all')")
	@ApiOperation(value = "根据产品查询套件关联用例", tags = {"测试用例" } ,notes = "根据产品查询套件关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchcursuit")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurSuitByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchCurSuit(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

