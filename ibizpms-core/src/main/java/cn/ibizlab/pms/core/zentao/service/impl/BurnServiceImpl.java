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
import cn.ibizlab.pms.core.zentao.domain.Burn;
import cn.ibizlab.pms.core.zentao.filter.BurnSearchContext;
import cn.ibizlab.pms.core.zentao.service.IBurnService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.BurnMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[burn] 服务对象接口实现
 */
@Slf4j
@Service("BurnServiceImpl")
public class BurnServiceImpl extends ServiceImpl<BurnMapper, Burn> implements IBurnService {

    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.IProjectService projectService;
    @Autowired
    @Lazy
    private cn.ibizlab.pms.core.zentao.service.ITaskService taskService;

    private int batchSize = 500;

    @Override
    @Transactional
    public boolean create(Burn et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<Burn> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public Burn get(String key) {
        Burn et = getById(key);
        if(et==null){
            et=new Burn();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public boolean checkKey(Burn et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }

    @Override
    @Transactional
    public boolean remove(String key) {
        boolean result=removeById(key);
        return result ;
    }

    @Override
    public void removeBatch(Collection<String> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public boolean save(Burn et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Burn et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Burn> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Burn> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(Burn et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<Burn> list) {
        updateBatchById(list,batchSize);
    }

    @Override
    public Burn getDraft(Burn et) {
        return et;
    }


	@Override
    public List<Burn> selectByProject(BigInteger id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(BigInteger id) {
        this.remove(new QueryWrapper<Burn>().eq("project",id));
    }

	@Override
    public List<Burn> selectByTask(BigInteger id) {
        return baseMapper.selectByTask(id);
    }

    @Override
    public void removeByTask(BigInteger id) {
        this.remove(new QueryWrapper<Burn>().eq("task",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Burn> searchDefault(BurnSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Burn> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Burn>(pages.getRecords(), context.getPageable(), pages.getTotal());
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


