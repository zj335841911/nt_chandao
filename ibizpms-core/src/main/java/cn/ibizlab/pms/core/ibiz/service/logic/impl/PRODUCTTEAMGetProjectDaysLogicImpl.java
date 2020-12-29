package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.IPRODUCTTEAMGetProjectDaysLogic;
import cn.ibizlab.pms.core.ibiz.domain.PRODUCTTEAM;

/**
 * 关系型数据实体[GetProjectDays] 对象
 */
@Slf4j
@Service
public class PRODUCTTEAMGetProjectDaysLogicImpl implements IPRODUCTTEAMGetProjectDaysLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProductService productservice;

    public cn.ibizlab.pms.core.zentao.service.IProductService getProductService() {
        return this.productservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IPRODUCTTEAMService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IPRODUCTTEAMService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(PRODUCTTEAM et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            cn.ibizlab.pms.core.zentao.domain.Product productteamgetprojectdaysproduct = new cn.ibizlab.pms.core.zentao.domain.Product();
            kieSession.insert(productteamgetprojectdaysproduct); 
            kieSession.setGlobal("productteamgetprojectdaysproduct", productteamgetprojectdaysproduct);
            kieSession.insert(et); 
            kieSession.setGlobal("productteamgetprojectdaysdefault", et);
            kieSession.setGlobal("productservice", productservice);
            kieSession.setGlobal("iBzSysProductteamDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.productteamgetprojectdays");

        } catch (Exception e) {
            throw new RuntimeException("执行[获取项目的可用工日]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
