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
import cn.ibizlab.pms.core.zentao.domain.Doc;
import cn.ibizlab.pms.core.zentao.filter.DocSearchContext;
import cn.ibizlab.pms.core.zentao.service.IDocService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.DocMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[文档] 服务对象接口实现
 */
@Slf4j
@Service("DocServiceImpl")
public class DocServiceImpl extends ServiceImpl<DocMapper, Doc> implements IDocService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocContentService doccontentService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocLibService doclibService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    private int batchSize = 500;

    @Override
    public Doc getDraft(Doc et) {
        return et;
    }

    @Override
    public boolean checkKey(Doc et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(Doc et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Doc et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Doc> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Doc> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean create(Doc et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Doc> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public Doc get(BigInteger key) {
        Doc et = getById(key);
        if(et==null){
            et=new Doc();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    @Transactional
    public boolean update(Doc et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Doc> list) {
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
    public List<Doc> selectByLib(BigInteger id) {
        return baseMapper.selectByLib(id);
    }

    @Override
    public void removeByLib(BigInteger id) {
        this.remove(new QueryWrapper<Doc>().eq("lib",id));
    }

	@Override
    public List<Doc> selectByModule(BigInteger id) {
        return baseMapper.selectByModule(id);
    }

    @Override
    public void removeByModule(BigInteger id) {
        this.remove(new QueryWrapper<Doc>().eq("module",id));
    }

	@Override
    public List<Doc> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<Doc>().eq("product",id));
    }

	@Override
    public List<Doc> selectByProject(BigInteger id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(BigInteger id) {
        this.remove(new QueryWrapper<Doc>().eq("project",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Doc> searchDefault(DocSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Doc> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Doc>(pages.getRecords(), context.getPageable(), pages.getTotal());
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


