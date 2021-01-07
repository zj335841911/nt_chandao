package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.IIbzLibModuleFixPathLogic;
import cn.ibizlab.pms.core.ibiz.domain.IbzLibModule;

/**
 * 关系型数据实体[FixPath] 对象
 */
@Slf4j
@Service
public class IbzLibModuleFixPathLogicImpl implements IIbzLibModuleFixPathLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleservice;

    public cn.ibizlab.pms.core.zentao.service.IModuleService getModuleService() {
        return this.moduleservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IIbzLibModuleService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IIbzLibModuleService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(IbzLibModule et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("ibzlibmodulefixpathdefault", et);
            cn.ibizlab.pms.core.zentao.domain.Module ibzlibmodulefixpathzt_module = new cn.ibizlab.pms.core.zentao.domain.Module();
            kieSession.insert(ibzlibmodulefixpathzt_module); 
            kieSession.setGlobal("ibzlibmodulefixpathzt_module", ibzlibmodulefixpathzt_module);
            kieSession.setGlobal("moduleservice", moduleservice);
            kieSession.setGlobal("iBzSysIbzlibmoduleDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.ibzlibmodulefixpath");

        } catch (Exception e) {
            throw new RuntimeException("执行[重建模块路径]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}