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
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.filter.DocLibSearchContext;
import cn.ibizlab.pms.core.zentao.service.IDocLibService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.DocLibMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[文档库] 服务对象接口实现
 */
@Slf4j
@Service("DocLibServiceImpl")
public class DocLibServiceImpl extends ServiceImpl<DocLibMapper, DocLib> implements IDocLibService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IDocLibModuleService doclibmoduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IDocService docService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(DocLib et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<DocLib> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(DocLib et) {
        fillParentData(et);
         if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<DocLib> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public boolean remove(Long key) {
        boolean result=removeById(key);
        return result ;
    }

    @Override
    @Transactional
    public void removeBatch(Collection<Long> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public DocLib get(Long key) {
        DocLib et = getById(key);
        if(et==null){
            et=new DocLib();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public DocLib getDraft(DocLib et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(DocLib et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(DocLib et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(DocLib et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<DocLib> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    @Transactional
    public void saveBatch(List<DocLib> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<DocLib> selectByProduct(Long id) {
        return baseMapper.selectByProduct(id);
    }
    @Override
    public void removeByProduct(Long id) {
        this.remove(new QueryWrapper<DocLib>().eq("product",id));
    }

	@Override
    public List<DocLib> selectByProject(Long id) {
        return baseMapper.selectByProject(id);
    }
    @Override
    public void removeByProject(Long id) {
        this.remove(new QueryWrapper<DocLib>().eq("project",id));
    }


    /**
     * 查询集合 自定义文档库
     */
    @Override
    public Page<DocLib> searchByCustom(DocLibSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<DocLib> pages=baseMapper.searchByCustom(context.getPages(),context,context.getSelectCond());
        return new PageImpl<DocLib>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 产品文档库
     */
    @Override
    public Page<DocLib> searchByProduct(DocLibSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<DocLib> pages=baseMapper.searchByProduct(context.getPages(),context,context.getSelectCond());
        return new PageImpl<DocLib>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目文件库
     */
    @Override
    public Page<DocLib> searchByProject(DocLibSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<DocLib> pages=baseMapper.searchByProject(context.getPages(),context,context.getSelectCond());
        return new PageImpl<DocLib>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<DocLib> searchDefault(DocLibSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<DocLib> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<DocLib>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(DocLib et){
        //实体关系[DER1N_ZT_DOCLIB_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztProduct=et.getZtProduct();
            if(ObjectUtils.isEmpty(ztProduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtProduct(majorEntity);
                ztProduct=majorEntity;
            }
            et.setProductname(ztProduct.getName());
        }
        //实体关系[DER1N_ZT_DOCLIB_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztProject=et.getZtProject();
            if(ObjectUtils.isEmpty(ztProject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtProject(majorEntity);
                ztProject=majorEntity;
            }
            et.setProjectname(ztProject.getName());
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



