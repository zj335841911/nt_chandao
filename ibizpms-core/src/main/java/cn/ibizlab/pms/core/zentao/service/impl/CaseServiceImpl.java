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
import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.filter.CaseSearchContext;
import cn.ibizlab.pms.core.zentao.service.ICaseService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.CaseMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[测试用例] 服务对象接口实现
 */
@Slf4j
@Service("CaseServiceImpl")
public class CaseServiceImpl extends ServiceImpl<CaseMapper, Case> implements ICaseService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ICaseStepService casestepService;

    protected cn.ibizlab.pms.core.zentao.service.ICaseService caseService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ISuiteCaseService suitecaseService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestResultService testresultService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestRunService testrunService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStoryService storyService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestSuiteService testsuiteService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(Case et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.create((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void createBatch(List<Case> list) {

    }
    @Override
    @Transactional
    public boolean update(Case et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.edit((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void updateBatch(List<Case> list) {

    }
    @Override
    @Transactional
    public boolean remove(BigInteger key) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        Case et = this.get(key);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.delete((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
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
    public Case get(BigInteger key) {
        Case et = getById(key);
        if(et==null){
            et=new Case();
            et.setId(key);
        }
        else{
            et.setCasestep(casestepService.selectByIbizcase(key));
        }
        return et;
    }

    @Override
    public Case getDraft(Case et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(Case et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public Case runCase(Case et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser(); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.runCase((String)user.getSessionParams().get("zentaosid"), (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public boolean save(Case et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional(
            rollbackFor = {Exception.class}
    )
    public boolean saveOrUpdate(Case et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Case> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Case> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }


	@Override
    public List<Case> selectByBranch(BigInteger id) {
        return baseMapper.selectByBranch(id);
    }

    @Override
    public void removeByBranch(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("branch",id));
    }

	@Override
    public List<Case> selectByFrombug(BigInteger id) {
        return baseMapper.selectByFrombug(id);
    }

    @Override
    public void removeByFrombug(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("frombug",id));
    }

	@Override
    public List<Case> selectByFromcaseid(BigInteger id) {
        return baseMapper.selectByFromcaseid(id);
    }

    @Override
    public void removeByFromcaseid(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("fromcaseid",id));
    }

	@Override
    public List<Case> selectByModule(BigInteger id) {
        return baseMapper.selectByModule(id);
    }

    @Override
    public void removeByModule(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("module",id));
    }

	@Override
    public List<Case> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("product",id));
    }

	@Override
    public List<Case> selectByStory(BigInteger id) {
        return baseMapper.selectByStory(id);
    }

    @Override
    public void removeByStory(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("story",id));
    }

	@Override
    public List<Case> selectByLib(BigInteger id) {
        return baseMapper.selectByLib(id);
    }

    @Override
    public void removeByLib(BigInteger id) {
        this.remove(new QueryWrapper<Case>().eq("lib",id));
    }


    /**
     * 查询集合 套件关联用例
     */
    @Override
    public Page<Case> searchCurSuite(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchCurSuite(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试单关联用例
     */
    @Override
    public Page<Case> searchCurTestTask(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchCurTestTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Case> searchDefault(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Case et){
        //实体关系[DER1N_ZT_CASE_ZT_CASE_FROMCAEID]
        if(!ObjectUtils.isEmpty(et.getFromcaseid())){
            cn.ibizlab.pms.core.zentao.domain.Case ztfromcase=et.getZtfromcase();
            if(ObjectUtils.isEmpty(ztfromcase)){
                cn.ibizlab.pms.core.zentao.domain.Case majorEntity=caseService.get(et.getFromcaseid());
                et.setZtfromcase(majorEntity);
                ztfromcase=majorEntity;
            }
            et.setFromcaseversion(ztfromcase.getVersion());
        }
        //实体关系[DER1N_ZT_CASE_ZT_MODULE_MODULE]
        if(!ObjectUtils.isEmpty(et.getModule())){
            cn.ibizlab.pms.core.zentao.domain.Module ztmodule=et.getZtmodule();
            if(ObjectUtils.isEmpty(ztmodule)){
                cn.ibizlab.pms.core.zentao.domain.Module majorEntity=moduleService.get(et.getModule());
                et.setZtmodule(majorEntity);
                ztmodule=majorEntity;
            }
            et.setModulename(ztmodule.getName());
        }
        //实体关系[DER1N_ZT_CASE_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
        }
        //实体关系[DER1N_ZT_CASE_ZT_STORY_STORY]
        if(!ObjectUtils.isEmpty(et.getStory())){
            cn.ibizlab.pms.core.zentao.domain.Story ztstory=et.getZtstory();
            if(ObjectUtils.isEmpty(ztstory)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getStory());
                et.setZtstory(majorEntity);
                ztstory=majorEntity;
            }
            et.setStoryversion(ztstory.getVersion());
            et.setStoryname(ztstory.getTitle());
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


