package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.zentao.service.logic.ITestTaskMobTestTaskCounterLogic;
import cn.ibizlab.pms.core.zentao.domain.TestTask;

/**
 * 关系型数据实体[MobTestTaskCounter] 对象
 */
@Slf4j
@Service
public class TestTaskMobTestTaskCounterLogicImpl implements ITestTaskMobTestTaskCounterLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITestTaskService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.ITestTaskService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(TestTask et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("testtaskmobtesttaskcounterdefault", et);
            kieSession.setGlobal("iBzSysTesttaskDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.testtaskmobtesttaskcounter");

        } catch (Exception e) {
            throw new RuntimeException("执行[移动端测试版本计数器]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
