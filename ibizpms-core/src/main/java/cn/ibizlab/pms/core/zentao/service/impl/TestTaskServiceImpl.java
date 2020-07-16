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
import cn.ibizlab.pms.core.zentao.domain.TestTask;
import cn.ibizlab.pms.core.zentao.filter.TestTaskSearchContext;
import cn.ibizlab.pms.core.zentao.service.ITestTaskService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.TestTaskMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[测试版本] 服务对象接口实现
 */
@Slf4j
@Service("TestTaskServiceImpl")
public class TestTaskServiceImpl extends ServiceImpl<TestTaskMapper, TestTask> implements ITestTaskService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestRunService testrunService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBuildService buildService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(TestTask et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTestTaskHelper.create((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void createBatch(List<TestTask> list) {

    }
    @Override
    @Transactional
    public boolean update(TestTask et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTestTaskHelper.edit((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void updateBatch(List<TestTask> list) {

    }
    @Override
    @Transactional
    public boolean remove(BigInteger key) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        TestTask et = this.get(key);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTestTaskHelper.delete((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void removeBatch(Collection<BigInteger> idList){
        if (idList != null && !idList.isEmpty()) {
            for (BigInteger id : idList) {
                this.remove(id);
            }
        }
    }
    @Override
    @Transactional
    public TestTask get(BigInteger key) {
        TestTask et = getById(key);
        if(et==null){
            et=new TestTask();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public TestTask getDraft(TestTask et) {
        fillParentData(et);
        return et;
    }

    @Override
    @Transactional
    public TestTask activate(TestTask et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTestTaskHelper.activate((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public TestTask block(TestTask et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTestTaskHelper.block((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    public boolean checkKey(TestTask et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public TestTask close(TestTask et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTestTaskHelper.close((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public boolean save(TestTask et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(TestTask et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<TestTask> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<TestTask> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public TestTask start(TestTask et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTestTaskHelper.start((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }


	@Override
    public List<TestTask> selectByBuild(BigInteger id) {
        return baseMapper.selectByBuild(id);
    }

    @Override
    public void removeByBuild(BigInteger id) {
        this.remove(new QueryWrapper<TestTask>().eq("build",id));
    }

	@Override
    public List<TestTask> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<TestTask>().eq("product",id));
    }

	@Override
    public List<TestTask> selectByProject(BigInteger id) {
        return baseMapper.selectByProject(id);
    }

    @Override
    public void removeByProject(BigInteger id) {
        this.remove(new QueryWrapper<TestTask>().eq("project",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<TestTask> searchDefault(TestTaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestTask> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestTask>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(TestTask et){
        //实体关系[DER1N_ZT_TESTTASK_ZT_BUILD_BUILD]
        if(!ObjectUtils.isEmpty(et.getBuild())){
            cn.ibizlab.pms.core.zentao.domain.Build ztbuild=et.getZtbuild();
            if(ObjectUtils.isEmpty(ztbuild)){
                cn.ibizlab.pms.core.zentao.domain.Build majorEntity=buildService.get(et.getBuild());
                et.setZtbuild(majorEntity);
                ztbuild=majorEntity;
            }
            et.setBuildname(ztbuild.getName());
        }
        //实体关系[DER1N_ZT_TESTTASK_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
        }
        //实体关系[DER1N_ZT_TESTTASK_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if(ObjectUtils.isEmpty(ztproject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject=majorEntity;
            }
            et.setProjecttname(ztproject.getName());
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


