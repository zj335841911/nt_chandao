package cn.ibizlab.pms.core.zentao.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.filter.ProductSearchContext;
import cn.ibizlab.pms.core.zentao.service.IProductService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.ProductMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[产品] 服务对象接口实现
 */
@Slf4j
@Service("ProductServiceImpl")
public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements IProductService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.ibiz.service.IProductModuleService productmoduleService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IBuildService buildService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ICaseService caseService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocLibService doclibService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocService docService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductPlanService productplanService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectProductService projectproductService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectStoryService projectstoryService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IReleaseService releaseService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IStoryService storyService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ISuiteCaseService suitecaseService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestReportService testreportService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestSuiteService testsuiteService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITestTaskService testtaskService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;

    private int batchSize = 500;

    @Override
    @Transactional
    public Product get(BigInteger key) {
        Product et = getById(key);
        if(et==null){
            et=new Product();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    @Transactional
    public boolean save(Product et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Product et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Product> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Product> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    public boolean checkKey(Product et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }

    @Override
    public Product getDraft(Product et) {
        fillParentData(et);
        return et;
    }

    @Override
    @Transactional
    public boolean update(Product et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Product> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public boolean remove(BigInteger key) {
        boolean result=removeById(key);
        return result ;
    }

    @Override
    public void removeBatch(Collection<BigInteger> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public boolean create(Product et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Product> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }


	@Override
    public List<Product> selectByLine(BigInteger id) {
        return baseMapper.selectByLine(id);
    }

    @Override
    public void removeByLine(BigInteger id) {
        this.remove(new QueryWrapper<Product>().eq("line",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Product> searchDefault(ProductSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Product> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Product>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 当前项目
     */
    @Override
    public Page<Product> searchCurProject(ProductSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Product> pages=baseMapper.searchCurProject(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Product>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Product et){
        //实体关系[DER1N_ZT_PRODUCT_ZT_MODULE_LINE]
        if(!ObjectUtils.isEmpty(et.getLine())){
            cn.ibizlab.pms.core.zentao.domain.Module moduleline=et.getModuleline();
            if(ObjectUtils.isEmpty(moduleline)){
                cn.ibizlab.pms.core.zentao.domain.Module majorEntity=moduleService.get(et.getLine());
                et.setModuleline(majorEntity);
                moduleline=majorEntity;
            }
            et.setLinename(moduleline.getName());
        }
    }

    @Override
    public List<JSONObject> select(String sql, Map param){
        return this.baseMapper.selectBySQL(sql,param);
    }

    @Override
    @Transactional
    public boolean execute(String sql , Map param){
        if (sql == null || sql.isEmpty()) {
            return false;
        }
        if (sql.toLowerCase().trim().startsWith("insert")) {
            return this.baseMapper.insertBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("update")) {
            return this.baseMapper.updateBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("delete")) {
            return this.baseMapper.deleteBySQL(sql,param);
        }
        log.warn("暂未支持的SQL语法");
        return true;
    }

}


