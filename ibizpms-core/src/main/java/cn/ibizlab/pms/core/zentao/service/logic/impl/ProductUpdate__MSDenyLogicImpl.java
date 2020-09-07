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

import cn.ibizlab.pms.core.zentao.service.logic.IProductUpdate__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Product;

/**
 * 关系型数据实体[Update__MSDeny] 对象
 */
@Slf4j
@Service
public class ProductUpdate__MSDenyLogicImpl implements IProductUpdate__MSDenyLogic{

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
           cn.ibizlab.pms.core.zentao.domain.Product  productupdate__msdenytemp =new cn.ibizlab.pms.core.zentao.domain.Product();
           kieSession.insert(productupdate__msdenytemp); 
           kieSession.setGlobal("productupdate__msdenytemp",productupdate__msdenytemp);
           kieSession.insert(et); 
           kieSession.setGlobal("productupdate__msdenydefault",et);
           kieSession.setGlobal("productservice",productservice);
           kieSession.setGlobal("iBzSysProductDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.productupdate__msdeny");

        }catch(Exception e){
            throw new RuntimeException("执行[行为[Update]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
