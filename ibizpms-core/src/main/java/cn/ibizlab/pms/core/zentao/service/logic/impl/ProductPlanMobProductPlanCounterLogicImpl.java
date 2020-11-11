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

import cn.ibizlab.pms.core.zentao.service.logic.IProductPlanMobProductPlanCounterLogic;
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;

/**
 * 关系型数据实体[MobProductPlanCounter] 对象
 */
@Slf4j
@Service
public class ProductPlanMobProductPlanCounterLogicImpl implements IProductPlanMobProductPlanCounterLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProductPlanService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IProductPlanService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(ProductPlan et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("productplanmobproductplancounterdefault",et);
           kieSession.setGlobal("iBzSysProductplanDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.productplanmobproductplancounter");

        }catch(Exception e){
            throw new RuntimeException("执行[移动端产品计划计数器]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null) {
                kieSession.destroy();
            }
        }
    }

}
