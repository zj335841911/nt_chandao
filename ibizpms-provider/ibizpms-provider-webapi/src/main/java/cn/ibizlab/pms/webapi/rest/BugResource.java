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
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.service.IBugService;
import cn.ibizlab.pms.core.zentao.filter.BugSearchContext;

@Slf4j
@Api(tags = {"Bug" })
@RestController("WebApi-bug")
@RequestMapping("")
public class BugResource {

    @Autowired
    public IBugService bugService;

    @Autowired
    @Lazy
    public BugMapping bugMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "获取Bug", tags = {"Bug" },  notes = "获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/bugs/{bug_id}")
    public ResponseEntity<BugDTO> get(@PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取Bug草稿", tags = {"Bug" },  notes = "获取Bug草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(new Bug())));
    }

    @ApiOperation(value = "检查Bug", tags = {"Bug" },  notes = "检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "保存Bug", tags = {"Bug" },  notes = "保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/save")
    public ResponseEntity<Boolean> save(@RequestBody BugDTO bugdto) {
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "批量保存Bug", tags = {"Bug" },  notes = "批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.saveBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "新建Bug", tags = {"Bug" },  notes = "新建Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs")
    @Transactional
    public ResponseEntity<BugDTO> create(@RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "批量新建Bug", tags = {"Bug" },  notes = "批量新建Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/bugs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.createBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "删除Bug", tags = {"Bug" },  notes = "删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("bug_id") BigInteger bug_id) {
         return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "批量删除Bug", tags = {"Bug" },  notes = "批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "更新Bug", tags = {"Bug" },  notes = "更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> update(@PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
		Bug domain  = bugMapping.toDomain(bugdto);
        domain .setId(bug_id);
		bugService.update(domain );
		BugDTO dto = bugMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "批量更新Bug", tags = {"Bug" },  notes = "批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<BugDTO> bugdtos) {
        bugService.updateBatch(bugMapping.toDomain(bugdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchReportBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchReportBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchReleaseBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchReleaseBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildOpenBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBuildOpenBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchReleaseLeftBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchReleaseLeftBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBuildBugs(BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBuildBugs(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"Bug" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchDefault(BugSearchContext context) {
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"Bug" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchDefault(@RequestBody BugSearchContext context) {
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据产品获取Bug", tags = {"Bug" },  notes = "根据产品获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取Bug草稿", tags = {"Bug" },  notes = "根据产品获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        Bug domain = new Bug();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品检查Bug", tags = {"Bug" },  notes = "根据产品检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品保存Bug", tags = {"Bug" },  notes = "根据产品保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品批量保存Bug", tags = {"Bug" },  notes = "根据产品批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setProduct(product_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品建立Bug", tags = {"Bug" },  notes = "根据产品建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs")
    @Transactional
    public ResponseEntity<BugDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品批量建立Bug", tags = {"Bug" },  notes = "根据产品批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProduct(product_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品删除Bug", tags = {"Bug" },  notes = "根据产品删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("bug_id") BigInteger bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品批量删除Bug", tags = {"Bug" },  notes = "根据产品批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品更新Bug", tags = {"Bug" },  notes = "根据产品更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProduct(product_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品批量更新Bug", tags = {"Bug" },  notes = "根据产品批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProduct(product_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据产品获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProduct(@PathVariable("product_id") BigInteger product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据产品查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据产品获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProduct(@PathVariable("product_id") BigInteger product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据产品查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据产品获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProduct(@PathVariable("product_id") BigInteger product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据产品查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProduct(@PathVariable("product_id") BigInteger product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据产品获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProduct(@PathVariable("product_id") BigInteger product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据产品查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"Bug" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProduct(@PathVariable("product_id") BigInteger product_id,BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"Bug" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody BugSearchContext context) {
        context.setN_product_eq(product_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据产品计划获取Bug", tags = {"Bug" },  notes = "根据产品计划获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品计划获取Bug草稿", tags = {"Bug" },  notes = "根据产品计划获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/productplans/{productplan_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id) {
        Bug domain = new Bug();
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品计划检查Bug", tags = {"Bug" },  notes = "根据产品计划检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品计划保存Bug", tags = {"Bug" },  notes = "根据产品计划保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品计划批量保存Bug", tags = {"Bug" },  notes = "根据产品计划批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setPlan(productplan_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品计划建立Bug", tags = {"Bug" },  notes = "根据产品计划建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs")
    @Transactional
    public ResponseEntity<BugDTO> createByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品计划批量建立Bug", tags = {"Bug" },  notes = "根据产品计划批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品计划删除Bug", tags = {"Bug" },  notes = "根据产品计划删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品计划批量删除Bug", tags = {"Bug" },  notes = "根据产品计划批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProductPlan(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品计划更新Bug", tags = {"Bug" },  notes = "根据产品计划更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> updateByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品计划批量更新Bug", tags = {"Bug" },  notes = "根据产品计划批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据产品计划获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品计划获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据产品计划查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品计划查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据产品计划获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据产品计划查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据产品计划获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据产品计划查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品计划获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品计划查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据产品计划获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据产品计划查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品计划查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据产品计划获取DEFAULT", tags = {"Bug" } ,notes = "根据产品计划获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/productplans/{productplan_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据产品计划查询DEFAULT", tags = {"Bug" } ,notes = "根据产品计划查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/productplans/{productplan_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProductPlan(@PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据项目获取Bug", tags = {"Bug" },  notes = "根据项目获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据项目获取Bug草稿", tags = {"Bug" },  notes = "根据项目获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProject(@PathVariable("project_id") BigInteger project_id) {
        Bug domain = new Bug();
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @ApiOperation(value = "根据项目检查Bug", tags = {"Bug" },  notes = "根据项目检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据项目保存Bug", tags = {"Bug" },  notes = "根据项目保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据项目批量保存Bug", tags = {"Bug" },  notes = "根据项目批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setProject(project_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据项目建立Bug", tags = {"Bug" },  notes = "根据项目建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs")
    @Transactional
    public ResponseEntity<BugDTO> createByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据项目批量建立Bug", tags = {"Bug" },  notes = "根据项目批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProject(project_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据项目删除Bug", tags = {"Bug" },  notes = "根据项目删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("bug_id") BigInteger bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据项目批量删除Bug", tags = {"Bug" },  notes = "根据项目批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据项目更新Bug", tags = {"Bug" },  notes = "根据项目更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> updateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setProject(project_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据项目批量更新Bug", tags = {"Bug" },  notes = "根据项目批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setProject(project_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据项目获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据项目获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProject(@PathVariable("project_id") BigInteger project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据项目查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据项目查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据项目获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProject(@PathVariable("project_id") BigInteger project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据项目查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据项目获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProject(@PathVariable("project_id") BigInteger project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据项目查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据项目获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProject(@PathVariable("project_id") BigInteger project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据项目查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据项目获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProject(@PathVariable("project_id") BigInteger project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据项目查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据项目查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据项目获取DEFAULT", tags = {"Bug" } ,notes = "根据项目获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProject(@PathVariable("project_id") BigInteger project_id,BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据项目查询DEFAULT", tags = {"Bug" } ,notes = "根据项目查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody BugSearchContext context) {
        context.setN_project_eq(project_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Get-all')")
    @ApiOperation(value = "根据产品产品计划获取Bug", tags = {"Bug" },  notes = "根据产品产品计划获取Bug")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}/bugs/{bug_id}")
    public ResponseEntity<BugDTO> getByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
        Bug domain = bugService.get(bug_id);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品产品计划获取Bug草稿", tags = {"Bug" },  notes = "根据产品产品计划获取Bug草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productplans/{productplan_id}/bugs/getdraft")
    public ResponseEntity<BugDTO> getDraftByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id) {
        Bug domain = new Bug();
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugMapping.toDto(bugService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品产品计划检查Bug", tags = {"Bug" },  notes = "根据产品产品计划检查Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/checkkey")
    public ResponseEntity<Boolean> checkKeyByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugService.checkKey(bugMapping.toDomain(bugdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品产品计划保存Bug", tags = {"Bug" },  notes = "根据产品产品计划保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/save")
    public ResponseEntity<Boolean> saveByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        return ResponseEntity.status(HttpStatus.OK).body(bugService.save(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Save-all')")
    @ApiOperation(value = "根据产品产品计划批量保存Bug", tags = {"Bug" },  notes = "根据产品产品计划批量保存Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/savebatch")
    public ResponseEntity<Boolean> saveBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
             domain.setPlan(productplan_id);
        }
        bugService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品产品计划建立Bug", tags = {"Bug" },  notes = "根据产品产品计划建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs")
    @Transactional
    public ResponseEntity<BugDTO> createByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
		bugService.create(domain);
        BugDTO dto = bugMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Create-all')")
    @ApiOperation(value = "根据产品产品计划批量建立Bug", tags = {"Bug" },  notes = "根据产品产品计划批量建立Bug")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> createBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品产品计划删除Bug", tags = {"Bug" },  notes = "根据产品产品计划删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id) {
		return ResponseEntity.status(HttpStatus.OK).body(bugService.remove(bug_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Remove-all')")
    @ApiOperation(value = "根据产品产品计划批量删除Bug", tags = {"Bug" },  notes = "根据产品产品计划批量删除Bug")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> removeBatchByProductProductPlan(@RequestBody List<BigInteger> ids) {
        bugService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品产品计划更新Bug", tags = {"Bug" },  notes = "根据产品产品计划更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}/bugs/{bug_id}")
    @Transactional
    public ResponseEntity<BugDTO> updateByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @PathVariable("bug_id") BigInteger bug_id, @RequestBody BugDTO bugdto) {
        Bug domain = bugMapping.toDomain(bugdto);
        domain.setPlan(productplan_id);
        domain.setId(bug_id);
		bugService.update(domain);
        BugDTO dto = bugMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Update-all')")
    @ApiOperation(value = "根据产品产品计划批量更新Bug", tags = {"Bug" },  notes = "根据产品产品计划批量更新Bug")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productplans/{productplan_id}/bugs/batch")
    public ResponseEntity<Boolean> updateBatchByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody List<BugDTO> bugdtos) {
        List<Bug> domainlist=bugMapping.toDomain(bugdtos);
        for(Bug domain:domainlist){
            domain.setPlan(productplan_id);
        }
        bugService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据产品产品计划获取发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品产品计划获取发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/bugs/fetchreportbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReportBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReportBugs-all')")
	@ApiOperation(value = "根据产品产品计划查询发布关联Bug（未解决）", tags = {"Bug" } ,notes = "根据产品产品计划查询发布关联Bug（未解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/bugs/searchreportbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReportBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReportBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据产品产品计划获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/bugs/fetchreleasebugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseBugs-all')")
	@ApiOperation(value = "根据产品产品计划查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/bugs/searchreleasebugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据产品产品计划获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/bugs/fetchbuildopenbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildOpenBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildOpenBugs-all')")
	@ApiOperation(value = "根据产品产品计划查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/bugs/searchbuildopenbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildOpenBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildOpenBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品产品计划获取发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划获取发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/bugs/fetchreleaseleftbugs")
	public ResponseEntity<List<BugDTO>> fetchBugReleaseLeftBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-ReleaseLeftBugs-all')")
	@ApiOperation(value = "根据产品产品计划查询发布关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划查询发布关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/bugs/searchreleaseleftbugs")
	public ResponseEntity<Page<BugDTO>> searchBugReleaseLeftBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchReleaseLeftBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据产品产品计划获取版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划获取版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/bugs/fetchbuildbugs")
	public ResponseEntity<List<BugDTO>> fetchBugBuildBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-BuildBugs-all')")
	@ApiOperation(value = "根据产品产品计划查询版本关联Bug（已解决）", tags = {"Bug" } ,notes = "根据产品产品计划查询版本关联Bug（已解决）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/bugs/searchbuildbugs")
	public ResponseEntity<Page<BugDTO>> searchBugBuildBugsByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchBuildBugs(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据产品产品计划获取DEFAULT", tags = {"Bug" } ,notes = "根据产品产品计划获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productplans/{productplan_id}/bugs/fetchdefault")
	public ResponseEntity<List<BugDTO>> fetchBugDefaultByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id,BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
        List<BugDTO> list = bugMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Bug-Default-all')")
	@ApiOperation(value = "根据产品产品计划查询DEFAULT", tags = {"Bug" } ,notes = "根据产品产品计划查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productplans/{productplan_id}/bugs/searchdefault")
	public ResponseEntity<Page<BugDTO>> searchBugDefaultByProductProductPlan(@PathVariable("product_id") BigInteger product_id, @PathVariable("productplan_id") BigInteger productplan_id, @RequestBody BugSearchContext context) {
        context.setN_plan_eq(productplan_id);
        Page<Bug> domains = bugService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

