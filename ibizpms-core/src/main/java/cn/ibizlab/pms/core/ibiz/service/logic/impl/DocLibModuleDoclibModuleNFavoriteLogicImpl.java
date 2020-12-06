package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.IDocLibModuleDoclibModuleNFavoriteLogic;
import cn.ibizlab.pms.core.ibiz.domain.DocLibModule;

/**
 * 关系型数据实体[DoclibModuleNFavorite] 对象
 */
@Slf4j
@Service
public class DocLibModuleDoclibModuleNFavoriteLogicImpl implements IDocLibModuleDoclibModuleNFavoriteLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IDocLibModuleService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IDocLibModuleService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(DocLibModule et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("doclibmoduledoclibmodulenfavoritedefault", et);
            kieSession.setGlobal("iBzSysDoclibmoduleDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.doclibmoduledoclibmodulenfavorite");

        } catch (Exception e) {
            throw new RuntimeException("执行[文档库取消收藏]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
