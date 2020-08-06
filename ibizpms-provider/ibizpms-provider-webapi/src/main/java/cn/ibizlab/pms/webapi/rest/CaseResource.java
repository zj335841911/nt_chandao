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
import cn.ibizlab.pms.util.annotation.VersionCheck;
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

    @ApiOperation(value = "获取测试用例草稿", tags = {"测试用例" },  notes = "获取测试用例草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(new Case())));
    }

    @ApiOperation(value = "检查测试用例", tags = {"测试用例" },  notes = "检查测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-ConfirmChange-all')")
    @ApiOperation(value = "确认用例变更", tags = {"测试用例" },  notes = "确认用例变更")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/confirmchange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmChange(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
domain.setId(case_id);
        domain = caseService.confirmChange(domain);
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Confirmstorychange-all')")
    @ApiOperation(value = "确认需求变更", tags = {"测试用例" },  notes = "确认需求变更")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/confirmstorychange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmstorychange(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
domain.setId(case_id);
        domain = caseService.confirmstorychange(domain);
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-LinkCase-all')")
    @ApiOperation(value = "测试单关联测试用例", tags = {"测试用例" },  notes = "测试单关联测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/linkcase")
    @Transactional
    public ResponseEntity<CaseDTO> linkCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
domain.setId(case_id);
        domain = caseService.linkCase(domain);
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-RunCase-all')")
    @ApiOperation(value = "执行测试", tags = {"测试用例" },  notes = "执行测试")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/runcase")
    @Transactional
    public ResponseEntity<CaseDTO> runCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
domain.setId(case_id);
        domain = caseService.runCase(domain);
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-TestRunCase-all')")
    @ApiOperation(value = "执行测试", tags = {"测试用例" },  notes = "执行测试")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/testruncase")
    @Transactional
    public ResponseEntity<CaseDTO> testRunCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
domain.setId(case_id);
        domain = caseService.testRunCase(domain);
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-UnlinkCase-all')")
    @ApiOperation(value = "移除用例", tags = {"测试用例" },  notes = "移除用例")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/unlinkcase")
    @Transactional
    public ResponseEntity<CaseDTO> unlinkCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
domain.setId(case_id);
        domain = caseService.unlinkCase(domain);
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "获取批量新建用例", tags = {"测试用例" } ,notes = "获取批量新建用例")
    @RequestMapping(method= RequestMethod.GET , value="/cases/fetchbatchnew")
	public ResponseEntity<List<CaseDTO>> fetchBatchNew(CaseSearchContext context) {
        Page<Case> domains = caseService.searchBatchNew(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "查询批量新建用例", tags = {"测试用例" } ,notes = "查询批量新建用例")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchbatchnew")
	public ResponseEntity<Page<CaseDTO>> searchBatchNew(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchBatchNew(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "获取套件关联用例", tags = {"测试用例" } ,notes = "获取套件关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/cases/fetchcursuite")
	public ResponseEntity<List<CaseDTO>> fetchCurSuite(CaseSearchContext context) {
        Page<Case> domains = caseService.searchCurSuite(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "查询套件关联用例", tags = {"测试用例" } ,notes = "查询套件关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchcursuite")
	public ResponseEntity<Page<CaseDTO>> searchCurSuite(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchCurSuite(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
	@ApiOperation(value = "查询测试单关联用例", tags = {"测试用例" } ,notes = "查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCurTestTask(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试用例" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchDefault(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "获取测试单关联用例", tags = {"测试用例" } ,notes = "获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/cases/fetchnotcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchNotCurTestTask(CaseSearchContext context) {
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "查询测试单关联用例", tags = {"测试用例" } ,notes = "查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/cases/searchnotcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchNotCurTestTask(@RequestBody CaseSearchContext context) {
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
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

    @ApiOperation(value = "根据产品获取测试用例草稿", tags = {"测试用例" },  notes = "根据产品获取测试用例草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Case domain = new Case();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品检查测试用例", tags = {"测试用例" },  notes = "根据产品检查测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-ConfirmChange-all')")
    @ApiOperation(value = "根据产品测试用例", tags = {"测试用例" },  notes = "根据产品测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/confirmchange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmChangeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain = caseService.confirmChange(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Confirmstorychange-all')")
    @ApiOperation(value = "根据产品测试用例", tags = {"测试用例" },  notes = "根据产品测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/confirmstorychange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmstorychangeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain = caseService.confirmstorychange(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-LinkCase-all')")
    @ApiOperation(value = "根据产品测试用例", tags = {"测试用例" },  notes = "根据产品测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/linkcase")
    @Transactional
    public ResponseEntity<CaseDTO> linkCaseByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain = caseService.linkCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-RunCase-all')")
    @ApiOperation(value = "根据产品测试用例", tags = {"测试用例" },  notes = "根据产品测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/runcase")
    @Transactional
    public ResponseEntity<CaseDTO> runCaseByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain = caseService.runCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-TestRunCase-all')")
    @ApiOperation(value = "根据产品测试用例", tags = {"测试用例" },  notes = "根据产品测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/testruncase")
    @Transactional
    public ResponseEntity<CaseDTO> testRunCaseByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain = caseService.testRunCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-UnlinkCase-all')")
    @ApiOperation(value = "根据产品测试用例", tags = {"测试用例" },  notes = "根据产品测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/unlinkcase")
    @Transactional
    public ResponseEntity<CaseDTO> unlinkCaseByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setProduct(product_id);
        domain = caseService.unlinkCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "根据产品获取批量新建用例", tags = {"测试用例" } ,notes = "根据产品获取批量新建用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/fetchbatchnew")
	public ResponseEntity<List<CaseDTO>> fetchCaseBatchNewByProduct(@PathVariable("product_id") BigInteger product_id,CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchBatchNew(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "根据产品查询批量新建用例", tags = {"测试用例" } ,notes = "根据产品查询批量新建用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchbatchnew")
	public ResponseEntity<Page<CaseDTO>> searchCaseBatchNewByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchBatchNew(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "根据产品获取套件关联用例", tags = {"测试用例" } ,notes = "根据产品获取套件关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/fetchcursuite")
	public ResponseEntity<List<CaseDTO>> fetchCaseCurSuiteByProduct(@PathVariable("product_id") BigInteger product_id,CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchCurSuite(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "根据产品查询套件关联用例", tags = {"测试用例" } ,notes = "根据产品查询套件关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchcursuite")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurSuiteByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchCurSuite(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
	@ApiOperation(value = "根据产品查询测试单关联用例", tags = {"测试用例" } ,notes = "根据产品查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurTestTaskByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"测试用例" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchCaseDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "根据产品获取测试单关联用例", tags = {"测试用例" } ,notes = "根据产品获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/fetchnotcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchCaseNotCurTestTaskByProduct(@PathVariable("product_id") BigInteger product_id,CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "根据产品查询测试单关联用例", tags = {"测试用例" } ,notes = "根据产品查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/searchnotcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCaseNotCurTestTaskByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody CaseSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "根据需求建立测试用例", tags = {"测试用例" },  notes = "根据需求建立测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases")
    @Transactional
    public ResponseEntity<CaseDTO> createByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
		caseService.create(domain);
        CaseDTO dto = caseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "根据需求批量建立测试用例", tags = {"测试用例" },  notes = "根据需求批量建立测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/batch")
    public ResponseEntity<Boolean> createBatchByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setStory(story_id);
        }
        caseService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "根据需求更新测试用例", tags = {"测试用例" },  notes = "根据需求更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<CaseDTO> updateByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain.setId(case_id);
		caseService.update(domain);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "根据需求批量更新测试用例", tags = {"测试用例" },  notes = "根据需求批量更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/cases/batch")
    public ResponseEntity<Boolean> updateBatchByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setStory(story_id);
        }
        caseService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "根据需求删除测试用例", tags = {"测试用例" },  notes = "根据需求删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
		return ResponseEntity.status(HttpStatus.OK).body(caseService.remove(case_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "根据需求批量删除测试用例", tags = {"测试用例" },  notes = "根据需求批量删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/cases/batch")
    public ResponseEntity<Boolean> removeBatchByStory(@RequestBody List<BigInteger> ids) {
        caseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Get-all')")
    @ApiOperation(value = "根据需求获取测试用例", tags = {"测试用例" },  notes = "根据需求获取测试用例")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/cases/{case_id}")
    public ResponseEntity<CaseDTO> getByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
        Case domain = caseService.get(case_id);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据需求获取测试用例草稿", tags = {"测试用例" },  notes = "根据需求获取测试用例草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraftByStory(@PathVariable("story_id") BigInteger story_id) {
        Case domain = new Case();
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(domain)));
    }

    @ApiOperation(value = "根据需求检查测试用例", tags = {"测试用例" },  notes = "根据需求检查测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/checkkey")
    public ResponseEntity<Boolean> checkKeyByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-ConfirmChange-all')")
    @ApiOperation(value = "根据需求测试用例", tags = {"测试用例" },  notes = "根据需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/confirmchange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmChangeByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.confirmChange(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Confirmstorychange-all')")
    @ApiOperation(value = "根据需求测试用例", tags = {"测试用例" },  notes = "根据需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/confirmstorychange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmstorychangeByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.confirmstorychange(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-LinkCase-all')")
    @ApiOperation(value = "根据需求测试用例", tags = {"测试用例" },  notes = "根据需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/linkcase")
    @Transactional
    public ResponseEntity<CaseDTO> linkCaseByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.linkCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-RunCase-all')")
    @ApiOperation(value = "根据需求测试用例", tags = {"测试用例" },  notes = "根据需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/runcase")
    @Transactional
    public ResponseEntity<CaseDTO> runCaseByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.runCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "根据需求保存测试用例", tags = {"测试用例" },  notes = "根据需求保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/save")
    public ResponseEntity<Boolean> saveByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "根据需求批量保存测试用例", tags = {"测试用例" },  notes = "根据需求批量保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/savebatch")
    public ResponseEntity<Boolean> saveBatchByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
             domain.setStory(story_id);
        }
        caseService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-TestRunCase-all')")
    @ApiOperation(value = "根据需求测试用例", tags = {"测试用例" },  notes = "根据需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/testruncase")
    @Transactional
    public ResponseEntity<CaseDTO> testRunCaseByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.testRunCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-UnlinkCase-all')")
    @ApiOperation(value = "根据需求测试用例", tags = {"测试用例" },  notes = "根据需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/unlinkcase")
    @Transactional
    public ResponseEntity<CaseDTO> unlinkCaseByStory(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.unlinkCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "根据需求获取批量新建用例", tags = {"测试用例" } ,notes = "根据需求获取批量新建用例")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/fetchbatchnew")
	public ResponseEntity<List<CaseDTO>> fetchCaseBatchNewByStory(@PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchBatchNew(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "根据需求查询批量新建用例", tags = {"测试用例" } ,notes = "根据需求查询批量新建用例")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/searchbatchnew")
	public ResponseEntity<Page<CaseDTO>> searchCaseBatchNewByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchBatchNew(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "根据需求获取套件关联用例", tags = {"测试用例" } ,notes = "根据需求获取套件关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/fetchcursuite")
	public ResponseEntity<List<CaseDTO>> fetchCaseCurSuiteByStory(@PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurSuite(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "根据需求查询套件关联用例", tags = {"测试用例" } ,notes = "根据需求查询套件关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/searchcursuite")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurSuiteByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurSuite(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
	@ApiOperation(value = "根据需求获取测试单关联用例", tags = {"测试用例" } ,notes = "根据需求获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/fetchcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchCaseCurTestTaskByStory(@PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
	@ApiOperation(value = "根据需求查询测试单关联用例", tags = {"测试用例" } ,notes = "根据需求查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/searchcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurTestTaskByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
	@ApiOperation(value = "根据需求获取DEFAULT", tags = {"测试用例" } ,notes = "根据需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/fetchdefault")
	public ResponseEntity<List<CaseDTO>> fetchCaseDefaultByStory(@PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchDefault(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
	@ApiOperation(value = "根据需求查询DEFAULT", tags = {"测试用例" } ,notes = "根据需求查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchCaseDefaultByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "根据需求获取测试单关联用例", tags = {"测试用例" } ,notes = "根据需求获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/fetchnotcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchCaseNotCurTestTaskByStory(@PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "根据需求查询测试单关联用例", tags = {"测试用例" } ,notes = "根据需求查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/searchnotcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCaseNotCurTestTaskByStory(@PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "根据产品需求建立测试用例", tags = {"测试用例" },  notes = "根据产品需求建立测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases")
    @Transactional
    public ResponseEntity<CaseDTO> createByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
		caseService.create(domain);
        CaseDTO dto = caseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Create-all')")
    @ApiOperation(value = "根据产品需求批量建立测试用例", tags = {"测试用例" },  notes = "根据产品需求批量建立测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/batch")
    public ResponseEntity<Boolean> createBatchByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setStory(story_id);
        }
        caseService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "根据产品需求更新测试用例", tags = {"测试用例" },  notes = "根据产品需求更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<CaseDTO> updateByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain.setId(case_id);
		caseService.update(domain);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Update-all')")
    @ApiOperation(value = "根据产品需求批量更新测试用例", tags = {"测试用例" },  notes = "根据产品需求批量更新测试用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/cases/batch")
    public ResponseEntity<Boolean> updateBatchByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
            domain.setStory(story_id);
        }
        caseService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "根据产品需求删除测试用例", tags = {"测试用例" },  notes = "根据产品需求删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
		return ResponseEntity.status(HttpStatus.OK).body(caseService.remove(case_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Remove-all')")
    @ApiOperation(value = "根据产品需求批量删除测试用例", tags = {"测试用例" },  notes = "根据产品需求批量删除测试用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/cases/batch")
    public ResponseEntity<Boolean> removeBatchByProductStory(@RequestBody List<BigInteger> ids) {
        caseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Get-all')")
    @ApiOperation(value = "根据产品需求获取测试用例", tags = {"测试用例" },  notes = "根据产品需求获取测试用例")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}")
    public ResponseEntity<CaseDTO> getByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
        Case domain = caseService.get(case_id);
        CaseDTO dto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品需求获取测试用例草稿", tags = {"测试用例" },  notes = "根据产品需求获取测试用例草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/cases/getdraft")
    public ResponseEntity<CaseDTO> getDraftByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id) {
        Case domain = new Case();
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseMapping.toDto(caseService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品需求检查测试用例", tags = {"测试用例" },  notes = "根据产品需求检查测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseDTO casedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(caseService.checkKey(caseMapping.toDomain(casedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-ConfirmChange-all')")
    @ApiOperation(value = "根据产品需求测试用例", tags = {"测试用例" },  notes = "根据产品需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/confirmchange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmChangeByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.confirmChange(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Confirmstorychange-all')")
    @ApiOperation(value = "根据产品需求测试用例", tags = {"测试用例" },  notes = "根据产品需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/confirmstorychange")
    @Transactional
    public ResponseEntity<CaseDTO> confirmstorychangeByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.confirmstorychange(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-LinkCase-all')")
    @ApiOperation(value = "根据产品需求测试用例", tags = {"测试用例" },  notes = "根据产品需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/linkcase")
    @Transactional
    public ResponseEntity<CaseDTO> linkCaseByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.linkCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-RunCase-all')")
    @ApiOperation(value = "根据产品需求测试用例", tags = {"测试用例" },  notes = "根据产品需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/runcase")
    @Transactional
    public ResponseEntity<CaseDTO> runCaseByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.runCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "根据产品需求保存测试用例", tags = {"测试用例" },  notes = "根据产品需求保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/save")
    public ResponseEntity<Boolean> saveByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        return ResponseEntity.status(HttpStatus.OK).body(caseService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-Save-all')")
    @ApiOperation(value = "根据产品需求批量保存测试用例", tags = {"测试用例" },  notes = "根据产品需求批量保存测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody List<CaseDTO> casedtos) {
        List<Case> domainlist=caseMapping.toDomain(casedtos);
        for(Case domain:domainlist){
             domain.setStory(story_id);
        }
        caseService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-TestRunCase-all')")
    @ApiOperation(value = "根据产品需求测试用例", tags = {"测试用例" },  notes = "根据产品需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/testruncase")
    @Transactional
    public ResponseEntity<CaseDTO> testRunCaseByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.testRunCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-UnlinkCase-all')")
    @ApiOperation(value = "根据产品需求测试用例", tags = {"测试用例" },  notes = "根据产品需求测试用例")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/unlinkcase")
    @Transactional
    public ResponseEntity<CaseDTO> unlinkCaseByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseDTO casedto) {
        Case domain = caseMapping.toDomain(casedto);
        domain.setStory(story_id);
        domain = caseService.unlinkCase(domain) ;
        casedto = caseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(casedto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "根据产品需求获取批量新建用例", tags = {"测试用例" } ,notes = "根据产品需求获取批量新建用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/fetchbatchnew")
	public ResponseEntity<List<CaseDTO>> fetchCaseBatchNewByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchBatchNew(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchBatchNew-all')")
	@ApiOperation(value = "根据产品需求查询批量新建用例", tags = {"测试用例" } ,notes = "根据产品需求查询批量新建用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/searchbatchnew")
	public ResponseEntity<Page<CaseDTO>> searchCaseBatchNewByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchBatchNew(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "根据产品需求获取套件关联用例", tags = {"测试用例" } ,notes = "根据产品需求获取套件关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/fetchcursuite")
	public ResponseEntity<List<CaseDTO>> fetchCaseCurSuiteByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurSuite(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurSuite-all')")
	@ApiOperation(value = "根据产品需求查询套件关联用例", tags = {"测试用例" } ,notes = "根据产品需求查询套件关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/searchcursuite")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurSuiteByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurSuite(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
	@ApiOperation(value = "根据产品需求获取测试单关联用例", tags = {"测试用例" } ,notes = "根据产品需求获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/fetchcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchCaseCurTestTaskByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchCurTestTask-all')")
	@ApiOperation(value = "根据产品需求查询测试单关联用例", tags = {"测试用例" } ,notes = "根据产品需求查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/searchcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCaseCurTestTaskByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
	@ApiOperation(value = "根据产品需求获取DEFAULT", tags = {"测试用例" } ,notes = "根据产品需求获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/fetchdefault")
	public ResponseEntity<List<CaseDTO>> fetchCaseDefaultByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchDefault(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchDefault-all')")
	@ApiOperation(value = "根据产品需求查询DEFAULT", tags = {"测试用例" } ,notes = "根据产品需求查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/searchdefault")
	public ResponseEntity<Page<CaseDTO>> searchCaseDefaultByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "根据产品需求获取测试单关联用例", tags = {"测试用例" } ,notes = "根据产品需求获取测试单关联用例")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/fetchnotcurtesttask")
	public ResponseEntity<List<CaseDTO>> fetchCaseNotCurTestTaskByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id,CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
        List<CaseDTO> list = caseMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Case-searchNotCurTestTask-all')")
	@ApiOperation(value = "根据产品需求查询测试单关联用例", tags = {"测试用例" } ,notes = "根据产品需求查询测试单关联用例")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/searchnotcurtesttask")
	public ResponseEntity<Page<CaseDTO>> searchCaseNotCurTestTaskByProductStory(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @RequestBody CaseSearchContext context) {
        context.setN_story_eq(story_id);
        Page<Case> domains = caseService.searchNotCurTestTask(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(caseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

