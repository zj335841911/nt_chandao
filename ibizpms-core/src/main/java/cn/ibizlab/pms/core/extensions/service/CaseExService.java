package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.CaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Case;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.math.BigInteger;
import java.util.*;

/**
 * 实体[测试用例] 自定义服务对象
 */
@Slf4j
@Primary
@Service("CaseExService")
public class CaseExService extends CaseServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[RunCase]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Case runCase(Case et) {
        return super.runCase(et);
    }

    /**
     * 行为[Get]用户扩展
     * @param key
     * @return
     */
    @Override
    @Transactional
    public Case get(BigInteger key) {
        Case et = getById(key);
        if(et==null){
            et=new Case();
            et.setId(key);
        }
        else{
            CaseStepSearchContext context = new CaseStepSearchContext();
            context.setN_case_eq(key);
            context.setN_version_eq(et.getVersion());
            et.setCasestep(casestepService.searchDefault(context).getContent());
        }
        return et;
    }
}

