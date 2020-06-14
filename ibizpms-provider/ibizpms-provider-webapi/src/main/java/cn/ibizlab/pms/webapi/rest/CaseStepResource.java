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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "获取用例步骤", tags = {"用例步骤" },  notes = "获取用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> get(@PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "更新用例步骤", tags = {"用例步骤" },  notes = "更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> update(@PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
		CaseStep domain  = casestepMapping.toDomain(casestepdto);
        domain .setId(casestep_id);
		casestepService.update(domain );
		CaseStepDTO dto = casestepMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "批量更新用例步骤", tags = {"用例步骤" },  notes = "批量更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/casesteps/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CaseStepDTO> casestepdtos) {
        casestepService.updateBatch(casestepMapping.toDomain(casestepdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "获取用例步骤草稿", tags = {"用例步骤" },  notes = "获取用例步骤草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(casestepMapping.toDto(casestepService.getDraft(new CaseStep())));
    }

    @ApiOperation(value = "检查用例步骤", tags = {"用例步骤" },  notes = "检查用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CaseStepDTO casestepdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(casestepService.checkKey(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "保存用例步骤", tags = {"用例步骤" },  notes = "保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/save")
    public ResponseEntity<Boolean> save(@RequestBody CaseStepDTO casestepdto) {
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(casestepMapping.toDomain(casestepdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "批量保存用例步骤", tags = {"用例步骤" },  notes = "批量保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CaseStepDTO> casestepdtos) {
        casestepService.saveBatch(casestepMapping.toDomain(casestepdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "新建用例步骤", tags = {"用例步骤" },  notes = "新建用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> create(@RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
		casestepService.create(domain);
        CaseStepDTO dto = casestepMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "批量新建用例步骤", tags = {"用例步骤" },  notes = "批量新建用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/casesteps/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CaseStepDTO> casestepdtos) {
        casestepService.createBatch(casestepMapping.toDomain(casestepdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "删除用例步骤", tags = {"用例步骤" },  notes = "删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("casestep_id") BigInteger casestep_id) {
         return ResponseEntity.status(HttpStatus.OK).body(casestepService.remove(casestep_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Remove-all')")
    @ApiOperation(value = "批量删除用例步骤", tags = {"用例步骤" },  notes = "批量删除用例步骤")
	@RequestMapping(method = RequestMethod.DELETE, value = "/casesteps/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        casestepService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"用例步骤" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchDefault(CaseStepSearchContext context) {
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"用例步骤" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchDefault(@RequestBody CaseStepSearchContext context) {
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "根据测试用例获取用例步骤", tags = {"用例步骤" },  notes = "根据测试用例获取用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> getByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据测试用例更新用例步骤", tags = {"用例步骤" },  notes = "根据测试用例更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> updateByCase(@PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setParent(case_id);
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
            domain.setParent(case_id);
        }
        casestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "根据测试用例获取用例步骤草稿", tags = {"用例步骤" },  notes = "根据测试用例获取用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/cases/{case_id}/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraftByCase(@PathVariable("case_id") BigInteger case_id) {
        CaseStep domain = new CaseStep();
        domain.setParent(case_id);
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
        domain.setParent(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据测试用例批量保存用例步骤", tags = {"用例步骤" },  notes = "根据测试用例批量保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
             domain.setParent(case_id);
        }
        casestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据测试用例建立用例步骤", tags = {"用例步骤" },  notes = "根据测试用例建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/cases/{case_id}/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> createByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setParent(case_id);
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
            domain.setParent(case_id);
        }
        casestepService.createBatch(domainlist);
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "根据测试用例获取DEFAULT", tags = {"用例步骤" } ,notes = "根据测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/cases/{case_id}/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepDefaultByCase(@PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_parent_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "根据测试用例查询DEFAULT", tags = {"用例步骤" } ,notes = "根据测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/cases/{case_id}/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepDefaultByCase(@PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_parent_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Get-all')")
    @ApiOperation(value = "根据产品测试用例获取用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例获取用例步骤")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}")
    public ResponseEntity<CaseStepDTO> getByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id) {
        CaseStep domain = casestepService.get(casestep_id);
        CaseStepDTO dto = casestepMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Update-all')")
    @ApiOperation(value = "根据产品测试用例更新用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例更新用例步骤")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/cases/{case_id}/casesteps/{casestep_id}")
    @Transactional
    public ResponseEntity<CaseStepDTO> updateByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @PathVariable("casestep_id") BigInteger casestep_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setParent(case_id);
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
            domain.setParent(case_id);
        }
        casestepService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "根据产品测试用例获取用例步骤草稿", tags = {"用例步骤" },  notes = "根据产品测试用例获取用例步骤草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/cases/{case_id}/casesteps/getdraft")
    public ResponseEntity<CaseStepDTO> getDraftByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id) {
        CaseStep domain = new CaseStep();
        domain.setParent(case_id);
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
        domain.setParent(case_id);
        return ResponseEntity.status(HttpStatus.OK).body(casestepService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Save-all')")
    @ApiOperation(value = "根据产品测试用例批量保存用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例批量保存用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/casesteps/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody List<CaseStepDTO> casestepdtos) {
        List<CaseStep> domainlist=casestepMapping.toDomain(casestepdtos);
        for(CaseStep domain:domainlist){
             domain.setParent(case_id);
        }
        casestepService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Create-all')")
    @ApiOperation(value = "根据产品测试用例建立用例步骤", tags = {"用例步骤" },  notes = "根据产品测试用例建立用例步骤")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/cases/{case_id}/casesteps")
    @Transactional
    public ResponseEntity<CaseStepDTO> createByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepDTO casestepdto) {
        CaseStep domain = casestepMapping.toDomain(casestepdto);
        domain.setParent(case_id);
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
            domain.setParent(case_id);
        }
        casestepService.createBatch(domainlist);
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

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "根据产品测试用例获取DEFAULT", tags = {"用例步骤" } ,notes = "根据产品测试用例获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/cases/{case_id}/casesteps/fetchdefault")
	public ResponseEntity<List<CaseStepDTO>> fetchCaseStepDefaultByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id,CaseStepSearchContext context) {
        context.setN_parent_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
        List<CaseStepDTO> list = casestepMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-CaseStep-Default-all')")
	@ApiOperation(value = "根据产品测试用例查询DEFAULT", tags = {"用例步骤" } ,notes = "根据产品测试用例查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/cases/{case_id}/casesteps/searchdefault")
	public ResponseEntity<Page<CaseStepDTO>> searchCaseStepDefaultByProductCase(@PathVariable("product_id") BigInteger product_id, @PathVariable("case_id") BigInteger case_id, @RequestBody CaseStepSearchContext context) {
        context.setN_parent_eq(case_id);
        Page<CaseStep> domains = casestepService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(casestepMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

