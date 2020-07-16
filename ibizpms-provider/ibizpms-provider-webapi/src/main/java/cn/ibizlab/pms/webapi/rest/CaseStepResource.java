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
import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.service.ICaseStepService;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"用例步骤" })
@RestController("WebApi-casestep")
@RequestMapping("")
public class CaseStepResource {

    @Autowired
    public ICaseStepService casestepService;

    @Autowired
    @Lazy
    public CaseStepMapping casestepMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据测试用例建立用例步骤", tags = {"用例步骤" },  notes = "根据测试用例建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> createByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
		casestepService.create(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据测试用例批量建立用例步骤", tags = {"用例步骤" },  notes = "根据测试用例批量建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> createBatchByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据测试用例更新用例步骤", tags = {"用例步骤" },  notes = "根据测试用例更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> updateByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        domain.setId(casestep_id);
		casestepService.update(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据测试用例批量更新用例步骤", tags = {"用例步骤" },  notes = "根据测试用例批量更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> updateBatchByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据测试用例删除用例步骤", tags = {"用例步骤" },  notes = "根据测试用例删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
		return ResponseEntity.status(HttpStatus.OK).body(casestepService.remove(casestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据测试用例批量删除用例步骤", tags = {"用例步骤" },  notes = "根据测试用例批量删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> removeBatchByCase(@RequestBody List<BigInteger> ids) {
        casestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "根据测试用例获取用例步骤", tags = {"用例步骤" },  notes = "根据测试用例获取用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> getByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据测试用例获取用例步骤草稿", tags = {"用例步骤" },  notes = "根据测试用例获取用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraftByCase(@PathVariable("case_id") BigInteger case_id) {
        CaseStep domain = new CaseStep();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepMapping.toDto(casestepService.getDraft(domain)));
    }

    @ApiOperation(value = "根据测试用例检查用例步骤", tags = {"用例步骤" },  notes = "根据测试用例检查用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/casesteps/checkkey")
    public ResponseEntity<Boolean> checkKeyByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(casestepService.checkKey(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据测试用例保存用例步骤", tags = {"用例步骤" },  notes = "根据测试用例保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/casesteps/save")
    public ResponseEntity<Boolean> saveByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据测试用例批量保存用例步骤", tags = {"用例步骤" },  notes = "根据测试用例批量保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
             domain.setIbizcase(case_id);
        }
        casestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据测试用例获取DEFAULT", tags = {"用例步骤" } ,notes = "根据测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/cases/{case_id}/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepDefaultByCase(@PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据测试用例查询DEFAULT", tags = {"用例步骤" } ,notes = "根据测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/cases/{case_id}/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepDefaultByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据测试用例获取版本", tags = {"用例步骤" } ,notes = "根据测试用例获取版本")
    @RequestMapping(method= RequestMethod.GET , value="/cases/{case_id}/casesteps/fetchversion")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepVersionByCase(@PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据测试用例查询版本", tags = {"用例步骤" } ,notes = "根据测试用例查询版本")
    @RequestMapping(method= RequestMethod.POST , value="/cases/{case_id}/casesteps/searchversion")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepVersionByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据产品测试用例建立用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> createByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
		casestepService.create(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据产品测试用例批量建立用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例批量建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> createBatchByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据产品测试用例更新用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> updateByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        domain.setId(casestep_id);
		casestepService.update(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据产品测试用例批量更新用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例批量更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> updateBatchByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据产品测试用例删除用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
		return ResponseEntity.status(HttpStatus.OK).body(casestepService.remove(casestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据产品测试用例批量删除用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例批量删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> removeBatchByProductCase(@RequestBody List<BigInteger> ids) {
        casestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "根据产品测试用例获取用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例获取用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> getByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品测试用例获取用例步骤草稿", tags = {"用例步骤" },  notes = "根据产品测试用例获取用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraftByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id) {
        CaseStep domain = new CaseStep();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepMapping.toDto(casestepService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品测试用例检查用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例检查用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/casesteps/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(casestepService.checkKey(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据产品测试用例保存用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/casesteps/save")
    public ResponseEntity<Boolean> saveByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据产品测试用例批量保存用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例批量保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
             domain.setIbizcase(case_id);
        }
        casestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据产品测试用例获取DEFAULT", tags = {"用例步骤" } ,notes = "根据产品测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/{case_id}/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepDefaultByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据产品测试用例查询DEFAULT", tags = {"用例步骤" } ,notes = "根据产品测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/{case_id}/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepDefaultByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据产品测试用例获取版本", tags = {"用例步骤" } ,notes = "根据产品测试用例获取版本")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/{case_id}/casesteps/fetchversion")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepVersionByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据产品测试用例查询版本", tags = {"用例步骤" } ,notes = "根据产品测试用例查询版本")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/{case_id}/casesteps/searchversion")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepVersionByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据需求测试用例建立用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> createByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
		casestepService.create(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据需求测试用例批量建立用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例批量建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> createBatchByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据需求测试用例更新用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> updateByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        domain.setId(casestep_id);
		casestepService.update(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据需求测试用例批量更新用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例批量更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> updateBatchByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据需求测试用例删除用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
		return ResponseEntity.status(HttpStatus.OK).body(casestepService.remove(casestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据需求测试用例批量删除用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例批量删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> removeBatchByStoryCase(@RequestBody List<BigInteger> ids) {
        casestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "根据需求测试用例获取用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例获取用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> getByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据需求测试用例获取用例步骤草稿", tags = {"用例步骤" },  notes = "根据需求测试用例获取用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/cases/{case_id}/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraftByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
        CaseStep domain = new CaseStep();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepMapping.toDto(casestepService.getDraft(domain)));
    }

    @ApiOperation(value = "根据需求测试用例检查用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例检查用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/casesteps/checkkey")
    public ResponseEntity<Boolean> checkKeyByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(casestepService.checkKey(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据需求测试用例保存用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/casesteps/save")
    public ResponseEntity<Boolean> saveByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据需求测试用例批量保存用例步骤", tags = {"用例步骤" },  notes = "根据需求测试用例批量保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/cases/{case_id}/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
             domain.setIbizcase(case_id);
        }
        casestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据需求测试用例获取DEFAULT", tags = {"用例步骤" } ,notes = "根据需求测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/{case_id}/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepDefaultByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据需求测试用例查询DEFAULT", tags = {"用例步骤" } ,notes = "根据需求测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/{case_id}/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepDefaultByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据需求测试用例获取版本", tags = {"用例步骤" } ,notes = "根据需求测试用例获取版本")
    @RequestMapping(method= RequestMethod.GET , value="/stories/{story_id}/cases/{case_id}/casesteps/fetchversion")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepVersionByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据需求测试用例查询版本", tags = {"用例步骤" } ,notes = "根据需求测试用例查询版本")
    @RequestMapping(method= RequestMethod.POST , value="/stories/{story_id}/cases/{case_id}/casesteps/searchversion")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepVersionByStoryCase(@PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据产品需求测试用例建立用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> createByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
		casestepService.create(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据产品需求测试用例批量建立用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例批量建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> createBatchByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据产品需求测试用例更新用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> updateByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        domain.setId(casestep_id);
		casestepService.update(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据产品需求测试用例批量更新用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例批量更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> updateBatchByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
            domain.setIbizcase(case_id);
        }
        casestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据产品需求测试用例删除用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
		return ResponseEntity.status(HttpStatus.OK).body(casestepService.remove(casestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "根据产品需求测试用例批量删除用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例批量删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/batch")
    public ResponseEntity<Boolean> removeBatchByProductStoryCase(@RequestBody List<BigInteger> ids) {
        casestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "根据产品需求测试用例获取用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例获取用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> getByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品需求测试用例获取用例步骤草稿", tags = {"用例步骤" },  notes = "根据产品需求测试用例获取用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraftByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id) {
        CaseStep domain = new CaseStep();
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepMapping.toDto(casestepService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品需求测试用例检查用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例检查用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(casestepService.checkKey(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据产品需求测试用例保存用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/save")
    public ResponseEntity<Boolean> saveByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setIbizcase(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据产品需求测试用例批量保存用例步骤", tags = {"用例步骤" },  notes = "根据产品需求测试用例批量保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
             domain.setIbizcase(case_id);
        }
        casestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据产品需求测试用例获取DEFAULT", tags = {"用例步骤" } ,notes = "根据产品需求测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepDefaultByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchDefault-all')")
	@ApiOperation(value = "根据产品需求测试用例查询DEFAULT", tags = {"用例步骤" } ,notes = "根据产品需求测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepDefaultByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据产品需求测试用例获取版本", tags = {"用例步骤" } ,notes = "根据产品需求测试用例获取版本")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/fetchversion")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepVersionByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-searchVersion-all')")
	@ApiOperation(value = "根据产品需求测试用例查询版本", tags = {"用例步骤" } ,notes = "根据产品需求测试用例查询版本")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/{story_id}/cases/{case_id}/casesteps/searchversion")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepVersionByProductStoryCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("story_id") BigInteger story_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_case_eq(case_id);
        Page<CaseStep> domains = casestepService.searchVersion(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

