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
import cn.ibizlab.pms.core.zentao.domain.Im_conferenceaction;
import cn.ibizlab.pms.core.zentao.filter.Im_conferenceactionSearchContext;
import cn.ibizlab.pms.core.zentao.service.IIm_conferenceactionService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.Im_conferenceactionMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[im_conferenceaction] 服务对象接口实现
 */
@Slf4j
@Service("Im_conferenceactionServiceImpl")
public class Im_conferenceactionServiceImpl extends ServiceImpl<Im_conferenceactionMapper, Im_conferenceaction> implements IIm_conferenceactionService {


    private int batchSize = 500;

    @Override
    public boolean checkKey(Im_conferenceaction et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }

    @Override
    @Transactional
    public boolean create(Im_conferenceaction et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Im_conferenceaction> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean save(Im_conferenceaction et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Im_conferenceaction et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Im_conferenceaction> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Im_conferenceaction> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public Im_conferenceaction get(BigInteger key) {
        Im_conferenceaction et = getById(key);
        if(et==null){
            et=new Im_conferenceaction();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public Im_conferenceaction getDraft(Im_conferenceaction et) {
        return et;
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
    public boolean update(Im_conferenceaction et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Im_conferenceaction> list) {
        updateBatchById(list,batchSize);
    }



    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Im_conferenceaction> searchDefault(Im_conferenceactionSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Im_conferenceaction> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Im_conferenceaction>(pages.getRecords(), context.getPageable(), pages.getTotal());
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


