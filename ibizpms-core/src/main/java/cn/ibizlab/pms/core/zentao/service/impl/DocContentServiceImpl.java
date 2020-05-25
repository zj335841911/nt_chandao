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
import cn.ibizlab.pms.core.zentao.domain.DocContent;
import cn.ibizlab.pms.core.zentao.filter.DocContentSearchContext;
import cn.ibizlab.pms.core.zentao.service.IDocContentService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.DocContentMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[文档内容] 服务对象接口实现
 */
@Slf4j
@Service("DocContentServiceImpl")
public class DocContentServiceImpl extends ServiceImpl<DocContentMapper, DocContent> implements IDocContentService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IDocService docService;

    private int batchSize = 500;

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
    public boolean update(DocContent et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<DocContent> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public boolean create(DocContent et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<DocContent> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public DocContent get(BigInteger key) {
        DocContent et = getById(key);
        if(et==null){
            et=new DocContent();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public DocContent getDraft(DocContent et) {
        fillParentData(et);
        return et;
    }

    @Override
    @Transactional
    public boolean save(DocContent et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(DocContent et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<DocContent> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<DocContent> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    public boolean checkKey(DocContent et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }


	@Override
    public List<DocContent> selectByDoc(BigInteger id) {
        return baseMapper.selectByDoc(id);
    }

    @Override
    public void removeByDoc(BigInteger id) {
        this.remove(new QueryWrapper<DocContent>().eq("doc",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<DocContent> searchDefault(DocContentSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<DocContent> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<DocContent>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(DocContent et){
        //实体关系[DER1N_ZT_DOCCONTENT_ZT_DOC_DOC]
        if(!ObjectUtils.isEmpty(et.getDoc())){
            cn.ibizlab.pms.core.zentao.domain.Doc ztDoc=et.getZtDoc();
            if(ObjectUtils.isEmpty(ztDoc)){
                cn.ibizlab.pms.core.zentao.domain.Doc majorEntity=docService.get(et.getDoc());
                et.setZtDoc(majorEntity);
                ztDoc=majorEntity;
            }
            et.setVersion(ztDoc.getVersion());
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


