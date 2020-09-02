package cn.ibizlab.pms.core.ibizpro.service.impl;

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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStorySearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibizpro.mapper.IBZProStoryMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[需求] 服务对象接口实现
 */
@Slf4j
@Service("IBZProStoryServiceImpl")
public class IBZProStoryServiceImpl extends ServiceImpl<IBZProStoryMapper, IBZProStory> implements IIBZProStoryService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService ibzproproductService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryModuleService ibzprostorymoduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStoryService storyService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IBZProStory et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostoryid()),et);
        return true;
    }

    @Override
    public void createBatch(List<IBZProStory> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(IBZProStory et) {
        fillParentData(et);
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("ibzpro_storyid",et.getIbzprostoryid())))
            return false;
        CachedBeanCopier.copy(get(et.getIbzprostoryid()),et);
        return true;
    }

    @Override
    public void updateBatch(List<IBZProStory> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list,batchSize);
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
    public IBZProStory get(String key) {
        IBZProStory et = getById(key);
        if(et==null){
            et=new IBZProStory();
            et.setIbzprostoryid(key);
        }
        else{
        }
        return et;
    }

    @Override
    public IBZProStory getDraft(IBZProStory et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(IBZProStory et) {
        return (!ObjectUtils.isEmpty(et.getIbzprostoryid()))&&(!Objects.isNull(this.getById(et.getIbzprostoryid())));
    }
    @Override
    @Transactional
    public IBZProStory push(IBZProStory et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean save(IBZProStory et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IBZProStory et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<IBZProStory> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<IBZProStory> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<IBZProStory> selectByProduct(String ibzpro_productid) {
        return baseMapper.selectByProduct(ibzpro_productid);
    }

    @Override
    public void removeByProduct(String ibzpro_productid) {
        this.remove(new QueryWrapper<IBZProStory>().eq("product",ibzpro_productid));
    }

	@Override
    public List<IBZProStory> selectByStorymodule(String ibzprostorymoduleid) {
        return baseMapper.selectByStorymodule(ibzprostorymoduleid);
    }

    @Override
    public void removeByStorymodule(String ibzprostorymoduleid) {
        this.remove(new QueryWrapper<IBZProStory>().eq("storymodule",ibzprostorymoduleid));
    }

	@Override
    public List<IBZProStory> selectByPmsstory(BigInteger id) {
        return baseMapper.selectByPmsstory(id);
    }

    @Override
    public void removeByPmsstory(BigInteger id) {
        this.remove(new QueryWrapper<IBZProStory>().eq("pmsstory",id));
    }


    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBZProStory> searchDefault(IBZProStorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBZProStory> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IBZProStory>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(IBZProStory et){
        //实体关系[DER1N_IBZPRO_STORY_IBZPRO_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct ibzproProduct=et.getIbzproProduct();
            if(ObjectUtils.isEmpty(ibzproProduct)){
                cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct majorEntity=ibzproproductService.get(et.getProduct());
                et.setIbzproProduct(majorEntity);
                ibzproProduct=majorEntity;
            }
            et.setProductname(ibzproProduct.getIbzproProductname());
        }
        //实体关系[DER1N_IBZPRO_STORY_IBZPRO_STORYMODULE_STORYMODULE]
        if(!ObjectUtils.isEmpty(et.getStorymodule())){
            cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule ibzproStorymodule=et.getIbzproStorymodule();
            if(ObjectUtils.isEmpty(ibzproStorymodule)){
                cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule majorEntity=ibzprostorymoduleService.get(et.getStorymodule());
                et.setIbzproStorymodule(majorEntity);
                ibzproStorymodule=majorEntity;
            }
            et.setStorymodulename(ibzproStorymodule.getIbzprostorymodulename());
        }
        //实体关系[DER1N_IBZPRO_STORY_ZT_STORY_PMSSTORY]
        if(!ObjectUtils.isEmpty(et.getPmsstory())){
            cn.ibizlab.pms.core.zentao.domain.Story ztStory=et.getZtStory();
            if(ObjectUtils.isEmpty(ztStory)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getPmsstory());
                et.setZtStory(majorEntity);
                ztStory=majorEntity;
            }
            et.setPmsstoryname(ztStory.getTitle());
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

    @Override
    public List<IBZProStory> getIbzprostoryByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IBZProStory> getIbzprostoryByEntities(List<IBZProStory> entities) {
        List ids =new ArrayList();
        for(IBZProStory entity : entities){
            Serializable id=entity.getIbzprostoryid();
            if(!ObjectUtils.isEmpty(id)){
                ids.add(id);
            }
        }
        if(ids.size()>0)
           return this.listByIds(ids);
        else
           return entities;
    }

}



