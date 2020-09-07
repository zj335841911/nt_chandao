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

import cn.ibizlab.pms.core.zentao.service.logic.IProductRemove__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Product;

/**
 * 关系型数据实体[Remove__MSDeny] 对象
 */
@Slf4j
@Service
public class ProductRemove__MSDenyLogicImpl implements IProductRemove__MSDenyLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProductService productservice;

    public cn.ibizlab.pms.core.zentao.service.IProductService getProductService() {
        return this.productservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProductService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IProductService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(Product et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           cn.ibizlab.pms.core.zentao.domain.Product  productremove__msdenytemp =new cn.ibizlab.pms.core.zentao.domain.Product();
           kieSession.insert(productremove__msdenytemp); 
           kieSession.setGlobal("productremove__msdenytemp",productremove__msdenytemp);
           kieSession.insert(et); 
           kieSession.setGlobal("productremove__msdenydefault",et);
           kieSession.setGlobal("productservice",productservice);
           kieSession.setGlobal("iBzSysProductDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.productremove__msdeny");

        }catch(Exception e){
            throw new RuntimeException("执行[行为[Remove]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
