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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.filter.UserSearchContext;
import cn.ibizlab.pms.core.zentao.service.IUserService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[用户] 服务对象接口实现
 */
@Slf4j
@Service("UserServiceImpl")
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(User et) {
        if(!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void createBatch(List<User> list) {
        this.saveBatch(list,batchSize);
    }

    @Override
    @Transactional
    public boolean update(User et) {
        if(!update(et,(Wrapper) et.getUpdateWrapper(true).eq("id",et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()),et);
        return true;
    }

    @Override
    public void updateBatch(List<User> list) {
        updateBatchById(list,batchSize);
    }

    @Override
    @Transactional
    public boolean remove(Long key) {
        boolean result=removeById(key);
        return result ;
    }

    @Override
    public void removeBatch(Collection<Long> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public User get(Long key) {
        User et = getById(key);
        if(et==null){
            et=new User();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public User getDraft(User et) {
        return et;
    }

    @Override
    public boolean checkKey(User et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public User getByCommiter(User et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean save(User et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(User et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<User> list) {
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<User> list) {
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public User syncAccount(User et) {
        //自定义代码
        return et;
    }



    /**
     * 查询集合 Bug用户
     */
    @Override
    public Page<User> searchBugUser(UserSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> pages=baseMapper.searchBugUser(context.getPages(),context,context.getSelectCond());
        return new PageImpl<User>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<User> searchDefault(UserSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<User>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 根据源代码账户获取登录名
     */
    @Override
    public Page<User> searchGetByCommiter(UserSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> pages=baseMapper.searchGetByCommiter(context.getPages(),context,context.getSelectCond());
        return new PageImpl<User>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目团队管理
     */
    @Override
    public Page<User> searchProjectTeamM(UserSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> pages=baseMapper.searchProjectTeamM(context.getPages(),context,context.getSelectCond());
        return new PageImpl<User>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目团队成员
     */
    @Override
    public Page<User> searchProjectTeamUser(UserSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> pages=baseMapper.searchProjectTeamUser(context.getPages(),context,context.getSelectCond());
        return new PageImpl<User>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目团队成员
     */
    @Override
    public Page<User> searchProjectTeamUser_Task(UserSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> pages=baseMapper.searchProjectTeamUser_Task(context.getPages(),context,context.getSelectCond());
        return new PageImpl<User>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 TASKTEAM
     */
    @Override
    public Page<User> searchTaskTeam(UserSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> pages=baseMapper.searchTaskTeam(context.getPages(),context,context.getSelectCond());
        return new PageImpl<User>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



