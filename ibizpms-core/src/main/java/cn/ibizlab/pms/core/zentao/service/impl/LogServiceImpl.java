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
import cn.ibizlab.pms.core.zentao.domain.Log;
import cn.ibizlab.pms.core.zentao.filter.LogSearchContext;
import cn.ibizlab.pms.core.zentao.service.ILogService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.LogMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[log] 服务对象接口实现
 */
@Slf4j
@Service("LogServiceImpl")
public class LogServiceImpl extends ServiceImpl<LogMapper, Log> implements ILogService {


    private int batchSize = 500;

    @Override
    @Transactional
    public boolean create(Log et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Log> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean save(Log et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Log et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Log> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Log> list) {
        saveOrUpdateBatch(list,batchSize);
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
    public boolean update(Log et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Log> list) {
        updateBatchById(list,batchSize);
    }

    @Override
    public Log getDraft(Log et) {
        return et;
    }

    @Override
    @Transactional
    public Log get(BigInteger key) {
        Log et = getById(key);
        if(et==null){
            et=new Log();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public boolean checkKey(Log et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Log> searchDefault(LogSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Log> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Log>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



