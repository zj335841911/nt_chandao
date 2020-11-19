package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.ITestModuleRemoveModuleLogic;
import cn.ibizlab.pms.core.ibiz.domain.TestModule;

/**
 * 关系型数据实体[RemoveModule] 对象
 */
@Slf4j
@Service
public class TestModuleRemoveModuleLogicImpl implements ITestModuleRemoveModuleLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleservice;

    public cn.ibizlab.pms.core.zentao.service.IModuleService getModuleService() {
        return this.moduleservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.ITestModuleService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.ITestModuleService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(TestModule et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("testmoduleremovemoduledefault", et);
            cn.ibizlab.pms.core.zentao.domain.Module testmoduleremovemodulemodule = new cn.ibizlab.pms.core.zentao.domain.Module();
            kieSession.insert(testmoduleremovemodulemodule); 
            kieSession.setGlobal("testmoduleremovemodulemodule", testmoduleremovemodulemodule);
            kieSession.setGlobal("moduleservice", moduleservice);
            kieSession.setGlobal("iBzSysTestmoduleDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.testmoduleremovemodule");

        } catch (Exception e) {
            throw new RuntimeException("执行[删除模块]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
