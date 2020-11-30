package cn.ibizlab.pms.core.report.service.impl;

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
import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import cn.ibizlab.pms.core.report.filter.IbzWeeklySearchContext;
import cn.ibizlab.pms.core.report.service.IIbzWeeklyService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.report.mapper.IbzWeeklyMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[周报] 服务对象接口实现
 */
@Slf4j
@Service("IbzWeeklyServiceImpl")
public class IbzWeeklyServiceImpl extends ServiceImpl<IbzWeeklyMapper, IbzWeekly> implements IIbzWeeklyService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IbzWeekly et) {
        if (!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbzweeklyid()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<IbzWeekly> list) {
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(IbzWeekly et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("ibz_weeklyid", et.getIbzweeklyid()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbzweeklyid()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<IbzWeekly> list) {
        updateBatchById(list, batchSize);
    }

    @Override
    @Transactional
    public boolean remove(String key) {
        boolean result = removeById(key);
        return result;
    }

    @Override
    @Transactional
    public void removeBatch(Collection<String> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public IbzWeekly get(String key) {
        IbzWeekly et = getById(key);
        if (et == null) {
            et = new IbzWeekly();
            et.setIbzweeklyid(key);
        }
        else {
        }
        return et;
    }

    @Override
    public IbzWeekly getDraft(IbzWeekly et) {
        return et;
    }

    @Override
    public boolean checkKey(IbzWeekly et) {
        return (!ObjectUtils.isEmpty(et.getIbzweeklyid())) && (!Objects.isNull(this.getById(et.getIbzweeklyid())));
    }
    @Override
    @Transactional
    public boolean save(IbzWeekly et) {
        if (!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IbzWeekly et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<IbzWeekly> list) {
        saveOrUpdateBatch(list, batchSize);
        return true;
    }

    @Override
    @Transactional
    public void saveBatch(List<IbzWeekly> list) {
        saveOrUpdateBatch(list, batchSize);
    }



    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IbzWeekly> searchDefault(IbzWeeklySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzWeekly> pages=baseMapper.searchDefault(context.getPages(), context, context.getSelectCond());
        return new PageImpl<IbzWeekly>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }







    @Override
    public List<JSONObject> select(String sql, Map param) {
        return this.baseMapper.selectBySQL(sql, param);
    }

    @Override
    @Transactional
    public boolean execute(String sql, Map param) {
        if (sql == null || sql.isEmpty()) {
            return false;
        }
        if (sql.toLowerCase().trim().startsWith("insert")) {
            return this.baseMapper.insertBySQL(sql, param);
        }
        if (sql.toLowerCase().trim().startsWith("update")) {
            return this.baseMapper.updateBySQL(sql, param);
        }
        if (sql.toLowerCase().trim().startsWith("delete")) {
            return this.baseMapper.deleteBySQL(sql, param);
        }
        log.warn("暂未支持的SQL语法");
        return true;
    }

    @Override
    public List<IbzWeekly> getIbzweeklyByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IbzWeekly> getIbzweeklyByEntities(List<IbzWeekly> entities) {
        List ids =new ArrayList();
        for(IbzWeekly entity : entities){
            Serializable id=entity.getIbzweeklyid();
            if (!ObjectUtils.isEmpty(id)) {
                ids.add(id);
            }
        }
        if (ids.size() > 0) {
            return this.listByIds(ids);
        }
        else {
            return entities;
        }
    }




}



