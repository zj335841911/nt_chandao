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
import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.service.IProjectProductService;
import cn.ibizlab.pms.core.zentao.filter.ProjectProductSearchContext;

@Slf4j
@Api(tags = {"ProjectProduct" })
@RestController("WebApi-projectproduct")
@RequestMapping("")
public class ProjectProductResource {

    @Autowired
    private IProjectProductService projectproductService;

    @Autowired
    @Lazy
    public ProjectProductMapping projectproductMapping;

    public ProjectProductDTO permissionDTO=new ProjectProductDTO();

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-GetDraft-all')")
    @ApiOperation(value = "GetDraft", tags = {"ProjectProduct" },  notes = "GetDraft")
	@RequestMapping(method = RequestMethod.GET, value = "/projectproducts/getdraft")
    public ResponseEntity<ProjectProductDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(projectproductMapping.toDto(projectproductService.getDraft(new ProjectProduct())));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Save-all')")
    @ApiOperation(value = "Save", tags = {"ProjectProduct" },  notes = "Save")
	@RequestMapping(method = RequestMethod.POST, value = "/projectproducts/save")
    public ResponseEntity<Boolean> save(@RequestBody ProjectProductDTO projectproductdto) {
        return ResponseEntity.status(HttpStatus.OK).body(projectproductService.save(projectproductMapping.toDomain(projectproductdto)));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatch", tags = {"ProjectProduct" },  notes = "SaveBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/projectproducts/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProjectProductDTO> projectproductdtos) {
        projectproductService.saveBatch(projectproductMapping.toDomain(projectproductdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-CheckKey-all')")
    @ApiOperation(value = "CheckKey", tags = {"ProjectProduct" },  notes = "CheckKey")
	@RequestMapping(method = RequestMethod.POST, value = "/projectproducts/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProjectProductDTO projectproductdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(projectproductService.checkKey(projectproductMapping.toDomain(projectproductdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Get-all')")
    @ApiOperation(value = "Get", tags = {"ProjectProduct" },  notes = "Get")
	@RequestMapping(method = RequestMethod.GET, value = "/projectproducts/{projectproduct_id}")
    public ResponseEntity<ProjectProductDTO> get(@PathVariable("projectproduct_id") String projectproduct_id) {
        ProjectProduct domain = projectproductService.get(projectproduct_id);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Create-all')")
    @ApiOperation(value = "Create", tags = {"ProjectProduct" },  notes = "Create")
	@RequestMapping(method = RequestMethod.POST, value = "/projectproducts")
    @Transactional
    public ResponseEntity<ProjectProductDTO> create(@RequestBody ProjectProductDTO projectproductdto) {
        ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
		projectproductService.create(domain);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatch", tags = {"ProjectProduct" },  notes = "createBatch")
	@RequestMapping(method = RequestMethod.POST, value = "/projectproducts/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProjectProductDTO> projectproductdtos) {
        projectproductService.createBatch(projectproductMapping.toDomain(projectproductdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Remove-all')")
    @ApiOperation(value = "Remove", tags = {"ProjectProduct" },  notes = "Remove")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projectproducts/{projectproduct_id}")
    @Transactional
    public ResponseEntity<Boolean> remove(@PathVariable("projectproduct_id") String projectproduct_id) {
         return ResponseEntity.status(HttpStatus.OK).body(projectproductService.remove(projectproduct_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatch", tags = {"ProjectProduct" },  notes = "RemoveBatch")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projectproducts/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        projectproductService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Update-all')")
    @ApiOperation(value = "Update", tags = {"ProjectProduct" },  notes = "Update")
	@RequestMapping(method = RequestMethod.PUT, value = "/projectproducts/{projectproduct_id}")
    @Transactional
    public ResponseEntity<ProjectProductDTO> update(@PathVariable("projectproduct_id") String projectproduct_id, @RequestBody ProjectProductDTO projectproductdto) {
		ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
        domain.setId(projectproduct_id);
		projectproductService.update(domain);
		ProjectProductDTO dto = projectproductMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatch", tags = {"ProjectProduct" },  notes = "UpdateBatch")
	@RequestMapping(method = RequestMethod.PUT, value = "/projectproducts/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProjectProductDTO> projectproductdtos) {
        projectproductService.updateBatch(projectproductMapping.toDomain(projectproductdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-RelationPlan-all')")
	@ApiOperation(value = "fetch关联计划", tags = {"ProjectProduct" } ,notes = "fetch关联计划")
    @RequestMapping(method= RequestMethod.GET , value="/projectproducts/fetchrelationplan")
	public ResponseEntity<List<ProjectProductDTO>> fetchRelationPlan(ProjectProductSearchContext context) {
        Page<ProjectProduct> domains = projectproductService.searchRelationPlan(context) ;
        List<ProjectProductDTO> list = projectproductMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-RelationPlan-all')")
	@ApiOperation(value = "search关联计划", tags = {"ProjectProduct" } ,notes = "search关联计划")
    @RequestMapping(method= RequestMethod.POST , value="/projectproducts/searchrelationplan")
	public ResponseEntity<Page<ProjectProductDTO>> searchRelationPlan(@RequestBody ProjectProductSearchContext context) {
        Page<ProjectProduct> domains = projectproductService.searchRelationPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectproductMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Default-all')")
	@ApiOperation(value = "fetchDEFAULT", tags = {"ProjectProduct" } ,notes = "fetchDEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/projectproducts/fetchdefault")
	public ResponseEntity<List<ProjectProductDTO>> fetchDefault(ProjectProductSearchContext context) {
        Page<ProjectProduct> domains = projectproductService.searchDefault(context) ;
        List<ProjectProductDTO> list = projectproductMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Default-all')")
	@ApiOperation(value = "searchDEFAULT", tags = {"ProjectProduct" } ,notes = "searchDEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/projectproducts/searchdefault")
	public ResponseEntity<Page<ProjectProductDTO>> searchDefault(@RequestBody ProjectProductSearchContext context) {
        Page<ProjectProduct> domains = projectproductService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectproductMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-GetDraft-all')")
    @ApiOperation(value = "GetDraftByProduct", tags = {"ProjectProduct" },  notes = "GetDraftByProduct")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/projectproducts/getdraft")
    public ResponseEntity<ProjectProductDTO> getDraftByProduct(@PathVariable("product_id") BigInteger product_id) {
        ProjectProduct domain = new ProjectProduct();
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(projectproductMapping.toDto(projectproductService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Save-all')")
    @ApiOperation(value = "SaveByProduct", tags = {"ProjectProduct" },  notes = "SaveByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/projectproducts/save")
    public ResponseEntity<Boolean> saveByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProjectProductDTO projectproductdto) {
        ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(projectproductService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatchByProduct", tags = {"ProjectProduct" },  notes = "SaveBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/projectproducts/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ProjectProductDTO> projectproductdtos) {
        List<ProjectProduct> domainlist=projectproductMapping.toDomain(projectproductdtos);
        for(ProjectProduct domain:domainlist){
             domain.setProduct(product_id);
        }
        projectproductService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByProduct", tags = {"ProjectProduct" },  notes = "CheckKeyByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/projectproducts/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProjectProductDTO projectproductdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(projectproductService.checkKey(projectproductMapping.toDomain(projectproductdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Get-all')")
    @ApiOperation(value = "GetByProduct", tags = {"ProjectProduct" },  notes = "GetByProduct")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/projectproducts/{projectproduct_id}")
    public ResponseEntity<ProjectProductDTO> getByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("projectproduct_id") String projectproduct_id) {
        ProjectProduct domain = projectproductService.get(projectproduct_id);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Create-all')")
    @ApiOperation(value = "CreateByProduct", tags = {"ProjectProduct" },  notes = "CreateByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/projectproducts")
    @Transactional
    public ResponseEntity<ProjectProductDTO> createByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProjectProductDTO projectproductdto) {
        ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
        domain.setProduct(product_id);
		projectproductService.create(domain);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatchByProduct", tags = {"ProjectProduct" },  notes = "createBatchByProduct")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/projectproducts/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ProjectProductDTO> projectproductdtos) {
        List<ProjectProduct> domainlist=projectproductMapping.toDomain(projectproductdtos);
        for(ProjectProduct domain:domainlist){
            domain.setProduct(product_id);
        }
        projectproductService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Remove-all')")
    @ApiOperation(value = "RemoveByProduct", tags = {"ProjectProduct" },  notes = "RemoveByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/projectproducts/{projectproduct_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("projectproduct_id") String projectproduct_id) {
		return ResponseEntity.status(HttpStatus.OK).body(projectproductService.remove(projectproduct_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByProduct", tags = {"ProjectProduct" },  notes = "RemoveBatchByProduct")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/projectproducts/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<String> ids) {
        projectproductService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Update-all')")
    @ApiOperation(value = "UpdateByProduct", tags = {"ProjectProduct" },  notes = "UpdateByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/projectproducts/{projectproduct_id}")
    @Transactional
    public ResponseEntity<ProjectProductDTO> updateByProduct(@PathVariable("product_id") BigInteger product_id, @PathVariable("projectproduct_id") String projectproduct_id, @RequestBody ProjectProductDTO projectproductdto) {
        ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
        domain.setProduct(product_id);
        domain.setId(projectproduct_id);
		projectproductService.update(domain);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatchByProduct", tags = {"ProjectProduct" },  notes = "UpdateBatchByProduct")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/projectproducts/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody List<ProjectProductDTO> projectproductdtos) {
        List<ProjectProduct> domainlist=projectproductMapping.toDomain(projectproductdtos);
        for(ProjectProduct domain:domainlist){
            domain.setProduct(product_id);
        }
        projectproductService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-RelationPlan-all')")
	@ApiOperation(value = "fetch关联计划ByProduct", tags = {"ProjectProduct" } ,notes = "fetch关联计划ByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/projectproducts/fetchrelationplan")
	public ResponseEntity<List<ProjectProductDTO>> fetchProjectProductRelationPlanByProduct(@PathVariable("product_id") BigInteger product_id,ProjectProductSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProjectProduct> domains = projectproductService.searchRelationPlan(context) ;
        List<ProjectProductDTO> list = projectproductMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-RelationPlan-all')")
	@ApiOperation(value = "search关联计划ByProduct", tags = {"ProjectProduct" } ,notes = "search关联计划ByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/projectproducts/searchrelationplan")
	public ResponseEntity<Page<ProjectProductDTO>> searchProjectProductRelationPlanByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProjectProductSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProjectProduct> domains = projectproductService.searchRelationPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectproductMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProduct", tags = {"ProjectProduct" } ,notes = "fetchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/projectproducts/fetchdefault")
	public ResponseEntity<List<ProjectProductDTO>> fetchProjectProductDefaultByProduct(@PathVariable("product_id") BigInteger product_id,ProjectProductSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProjectProduct> domains = projectproductService.searchDefault(context) ;
        List<ProjectProductDTO> list = projectproductMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProduct", tags = {"ProjectProduct" } ,notes = "searchDEFAULTByProduct")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/projectproducts/searchdefault")
	public ResponseEntity<Page<ProjectProductDTO>> searchProjectProductDefaultByProduct(@PathVariable("product_id") BigInteger product_id, @RequestBody ProjectProductSearchContext context) {
        context.setN_product_eq(product_id);
        Page<ProjectProduct> domains = projectproductService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectproductMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-GetDraft-all')")
    @ApiOperation(value = "GetDraftByProject", tags = {"ProjectProduct" },  notes = "GetDraftByProject")
    @RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/projectproducts/getdraft")
    public ResponseEntity<ProjectProductDTO> getDraftByProject(@PathVariable("project_id") BigInteger project_id) {
        ProjectProduct domain = new ProjectProduct();
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(projectproductMapping.toDto(projectproductService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Save-all')")
    @ApiOperation(value = "SaveByProject", tags = {"ProjectProduct" },  notes = "SaveByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectproducts/save")
    public ResponseEntity<Boolean> saveByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectProductDTO projectproductdto) {
        ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
        domain.setProject(project_id);
        return ResponseEntity.status(HttpStatus.OK).body(projectproductService.save(domain));
    }

    @PreAuthorize("hasPermission('Save',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "SaveBatchByProject", tags = {"ProjectProduct" },  notes = "SaveBatchByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectproducts/savebatch")
    public ResponseEntity<Boolean> saveBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<ProjectProductDTO> projectproductdtos) {
        List<ProjectProduct> domainlist=projectproductMapping.toDomain(projectproductdtos);
        for(ProjectProduct domain:domainlist){
             domain.setProject(project_id);
        }
        projectproductService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-CheckKey-all')")
    @ApiOperation(value = "CheckKeyByProject", tags = {"ProjectProduct" },  notes = "CheckKeyByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectproducts/checkkey")
    public ResponseEntity<Boolean> checkKeyByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectProductDTO projectproductdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(projectproductService.checkKey(projectproductMapping.toDomain(projectproductdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Get-all')")
    @ApiOperation(value = "GetByProject", tags = {"ProjectProduct" },  notes = "GetByProject")
	@RequestMapping(method = RequestMethod.GET, value = "/projects/{project_id}/projectproducts/{projectproduct_id}")
    public ResponseEntity<ProjectProductDTO> getByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("projectproduct_id") String projectproduct_id) {
        ProjectProduct domain = projectproductService.get(projectproduct_id);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Create-all')")
    @ApiOperation(value = "CreateByProject", tags = {"ProjectProduct" },  notes = "CreateByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectproducts")
    @Transactional
    public ResponseEntity<ProjectProductDTO> createByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectProductDTO projectproductdto) {
        ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
        domain.setProject(project_id);
		projectproductService.create(domain);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Create',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "createBatchByProject", tags = {"ProjectProduct" },  notes = "createBatchByProject")
	@RequestMapping(method = RequestMethod.POST, value = "/projects/{project_id}/projectproducts/batch")
    public ResponseEntity<Boolean> createBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<ProjectProductDTO> projectproductdtos) {
        List<ProjectProduct> domainlist=projectproductMapping.toDomain(projectproductdtos);
        for(ProjectProduct domain:domainlist){
            domain.setProject(project_id);
        }
        projectproductService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Remove-all')")
    @ApiOperation(value = "RemoveByProject", tags = {"ProjectProduct" },  notes = "RemoveByProject")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/projectproducts/{projectproduct_id}")
    @Transactional
    public ResponseEntity<Boolean> removeByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("projectproduct_id") String projectproduct_id) {
		return ResponseEntity.status(HttpStatus.OK).body(projectproductService.remove(projectproduct_id));
    }

    @PreAuthorize("hasPermission('Remove',{'Sql',this.humanMapping,this.permissionDTO,#ids})")
    @ApiOperation(value = "RemoveBatchByProject", tags = {"ProjectProduct" },  notes = "RemoveBatchByProject")
	@RequestMapping(method = RequestMethod.DELETE, value = "/projects/{project_id}/projectproducts/batch")
    public ResponseEntity<Boolean> removeBatchByProject(@RequestBody List<String> ids) {
        projectproductService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Update-all')")
    @ApiOperation(value = "UpdateByProject", tags = {"ProjectProduct" },  notes = "UpdateByProject")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/projectproducts/{projectproduct_id}")
    @Transactional
    public ResponseEntity<ProjectProductDTO> updateByProject(@PathVariable("project_id") BigInteger project_id, @PathVariable("projectproduct_id") String projectproduct_id, @RequestBody ProjectProductDTO projectproductdto) {
        ProjectProduct domain = projectproductMapping.toDomain(projectproductdto);
        domain.setProject(project_id);
        domain.setId(projectproduct_id);
		projectproductService.update(domain);
        ProjectProductDTO dto = projectproductMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission('Update',{'Sql',this.humanMapping,#humandtos})")
    @ApiOperation(value = "UpdateBatchByProject", tags = {"ProjectProduct" },  notes = "UpdateBatchByProject")
	@RequestMapping(method = RequestMethod.PUT, value = "/projects/{project_id}/projectproducts/batch")
    public ResponseEntity<Boolean> updateBatchByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody List<ProjectProductDTO> projectproductdtos) {
        List<ProjectProduct> domainlist=projectproductMapping.toDomain(projectproductdtos);
        for(ProjectProduct domain:domainlist){
            domain.setProject(project_id);
        }
        projectproductService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-RelationPlan-all')")
	@ApiOperation(value = "fetch关联计划ByProject", tags = {"ProjectProduct" } ,notes = "fetch关联计划ByProject")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/projectproducts/fetchrelationplan")
	public ResponseEntity<List<ProjectProductDTO>> fetchProjectProductRelationPlanByProject(@PathVariable("project_id") BigInteger project_id,ProjectProductSearchContext context) {
        context.setN_project_eq(project_id);
        Page<ProjectProduct> domains = projectproductService.searchRelationPlan(context) ;
        List<ProjectProductDTO> list = projectproductMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-RelationPlan-all')")
	@ApiOperation(value = "search关联计划ByProject", tags = {"ProjectProduct" } ,notes = "search关联计划ByProject")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/projectproducts/searchrelationplan")
	public ResponseEntity<Page<ProjectProductDTO>> searchProjectProductRelationPlanByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectProductSearchContext context) {
        context.setN_project_eq(project_id);
        Page<ProjectProduct> domains = projectproductService.searchRelationPlan(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectproductMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Default-all')")
	@ApiOperation(value = "fetchDEFAULTByProject", tags = {"ProjectProduct" } ,notes = "fetchDEFAULTByProject")
    @RequestMapping(method= RequestMethod.GET , value="/projects/{project_id}/projectproducts/fetchdefault")
	public ResponseEntity<List<ProjectProductDTO>> fetchProjectProductDefaultByProject(@PathVariable("project_id") BigInteger project_id,ProjectProductSearchContext context) {
        context.setN_project_eq(project_id);
        Page<ProjectProduct> domains = projectproductService.searchDefault(context) ;
        List<ProjectProductDTO> list = projectproductMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProjectProduct-Default-all')")
	@ApiOperation(value = "searchDEFAULTByProject", tags = {"ProjectProduct" } ,notes = "searchDEFAULTByProject")
    @RequestMapping(method= RequestMethod.POST , value="/projects/{project_id}/projectproducts/searchdefault")
	public ResponseEntity<Page<ProjectProductDTO>> searchProjectProductDefaultByProject(@PathVariable("project_id") BigInteger project_id, @RequestBody ProjectProductSearchContext context) {
        context.setN_project_eq(project_id);
        Page<ProjectProduct> domains = projectproductService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(projectproductMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}
