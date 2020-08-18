package cn.ibizlab.pms.core.ibiz.service.impl;

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
import cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseStep;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibCaseStepSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IIbzLibCaseStepService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.IbzLibCaseStepMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[用例库用例步骤] 服务对象接口实现
 */
@Slf4j
@Service("IbzLibCaseStepServiceImpl")
public class IbzLibCaseStepServiceImpl extends ServiceImpl<IbzLibCaseStepMapper, IbzLibCaseStep> implements IIbzLibCaseStepService {


    protected cn.ibizlab.pms.core.ibiz.service.IIbzLibCaseStepService ibzlibcasestepService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IIbzCaseService ibzcaseService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IbzLibCaseStep et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<IbzLibCaseStep> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(IbzLibCaseStep et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<IbzLibCaseStep> list) {
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
    public IbzLibCaseStep get(BigInteger key) {
        IbzLibCaseStep et = getById(key);
        if(et==null){
            et=new IbzLibCaseStep();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public IbzLibCaseStep getDraft(IbzLibCaseStep et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(IbzLibCaseStep et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(IbzLibCaseStep et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IbzLibCaseStep et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<IbzLibCaseStep> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<IbzLibCaseStep> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<IbzLibCaseStep> selectByParent(BigInteger id) {
        return baseMapper.selectByParent(id);
    }

    @Override
    public void removeByParent(BigInteger id) {
        this.remove(new QueryWrapper<IbzLibCaseStep>().eq("parent",id));
    }

	@Override
    public List<IbzLibCaseStep> selectByIbizcase(BigInteger id) {
        return baseMapper.selectByIbizcase(id);
    }

    @Override
    public void removeByIbizcase(BigInteger id) {
        this.remove(new QueryWrapper<IbzLibCaseStep>().eq("case",id));
    }

    @Autowired
    @Lazy
    IIbzLibCaseStepService proxyService;
	@Override
    public void saveByIbizcase(BigInteger id,List<IbzLibCaseStep> list) {
        if(list==null)
            return;
        Set<BigInteger> delIds=new HashSet<BigInteger>();
        List<IbzLibCaseStep> _update=new ArrayList<IbzLibCaseStep>();
        List<IbzLibCaseStep> _create=new ArrayList<IbzLibCaseStep>();
        for(IbzLibCaseStep before:selectByIbizcase(id)){
            delIds.add(before.getId());
        }
        for(IbzLibCaseStep sub:list) {
            sub.setIbizcase(id);
            if(ObjectUtils.isEmpty(sub.getId()))
                sub.setId((BigInteger)sub.getDefaultKey(true));
            if(delIds.contains(sub.getId())) {
                delIds.remove(sub.getId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0)
            proxyService.updateBatch(_update);
        if(_create.size()>0)
            proxyService.createBatch(_create);
        if(delIds.size()>0)
            proxyService.removeBatch(delIds);
	}


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<IbzLibCaseStep> searchDefault(IbzLibCaseStepSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzLibCaseStep> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzLibCaseStep>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(IbzLibCaseStep et){
        //实体关系[DER1N_IBZ_CASESTEP_IBZ_CASE_CASE]
        if(!ObjectUtils.isEmpty(et.getIbizcase())){
            cn.ibizlab.pms.core.ibiz.domain.IbzCase ibzcase=et.getIbzcase();
            if(ObjectUtils.isEmpty(ibzcase)){
                cn.ibizlab.pms.core.ibiz.domain.IbzCase majorEntity=ibzcaseService.get(et.getIbizcase());
                et.setIbzcase(majorEntity);
                ibzcase=majorEntity;
            }
            et.setVersion(ibzcase.getVersion());
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



