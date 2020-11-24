package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.IDocLibModuleRemove__MSDenyLogic;
import cn.ibizlab.pms.core.ibiz.domain.DocLibModule;

/**
 * 关系型数据实体[Remove__MSDeny] 对象
 */
@Slf4j
@Service
public class DocLibModuleRemove__MSDenyLogicImpl implements IDocLibModuleRemove__MSDenyLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IDocLibModuleService doclibmoduleservice;

    public cn.ibizlab.pms.core.ibiz.service.IDocLibModuleService getDoclibmoduleService() {
        return this.doclibmoduleservice;
    }


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
            cn.ibizlab.pms.core.ibiz.domain.DocLibModule doclibmoduleremove__msdenytemp = new cn.ibizlab.pms.core.ibiz.domain.DocLibModule();
            kieSession.insert(doclibmoduleremove__msdenytemp); 
            kieSession.setGlobal("doclibmoduleremove__msdenytemp", doclibmoduleremove__msdenytemp);
            kieSession.insert(et); 
            kieSession.setGlobal("doclibmoduleremove__msdenydefault", et);
            kieSession.setGlobal("doclibmoduleservice", doclibmoduleservice);
            kieSession.setGlobal("iBzSysDoclibmoduleDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.doclibmoduleremove__msdeny");

        } catch (Exception e) {
            throw new RuntimeException("执行[行为[Remove]主状态拒绝逻辑]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
