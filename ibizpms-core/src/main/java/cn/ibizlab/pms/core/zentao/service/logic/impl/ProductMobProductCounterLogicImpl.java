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

import cn.ibizlab.pms.core.zentao.service.logic.IProductMobProductCounterLogic;
import cn.ibizlab.pms.core.zentao.domain.Product;

/**
 * 关系型数据实体[MobProductCounter] 对象
 */
@Slf4j
@Service
public class ProductMobProductCounterLogicImpl implements IProductMobProductCounterLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProductService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IProductService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(Product et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("productmobproductcounterdefault",et);
           kieSession.setGlobal("iBzSysProductDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.productmobproductcounter");

        }catch(Exception e){
            throw new RuntimeException("执行[移动端产品计数器]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
