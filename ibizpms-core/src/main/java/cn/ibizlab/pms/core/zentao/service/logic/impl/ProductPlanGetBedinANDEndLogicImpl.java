package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;

import cn.ibizlab.pms.core.zentao.service.logic.IProductPlanGetBedinANDEndLogic;
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;

/**
 * 关系型数据实体[GetBedinANDEnd] 对象
 */
@Slf4j
@Service
public class ProductPlanGetBedinANDEndLogicImpl implements IProductPlanGetBedinANDEndLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProductPlanService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IProductPlanService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(ProductPlan et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("productplangetbedinandenddefault",et);
           kieSession.setGlobal("iBzSysProductplanDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.productplangetbedinandend");

        }catch(Exception e){
            throw new RuntimeException("执行[获取开始日期和结束日期]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
