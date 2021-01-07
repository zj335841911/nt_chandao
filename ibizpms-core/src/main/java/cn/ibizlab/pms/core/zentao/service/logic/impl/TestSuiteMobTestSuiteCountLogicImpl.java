package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.zentao.service.logic.ITestSuiteMobTestSuiteCountLogic;
import cn.ibizlab.pms.core.zentao.domain.TestSuite;

/**
 * 关系型数据实体[MobTestSuiteCount] 对象
 */
@Slf4j
@Service
public class TestSuiteMobTestSuiteCountLogicImpl implements ITestSuiteMobTestSuiteCountLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITestSuiteService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.ITestSuiteService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(TestSuite et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("testsuitemobtestsuitecountdefault", et);
            kieSession.setGlobal("iBzSysTestsuiteDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.testsuitemobtestsuitecount");

        } catch (Exception e) {
            throw new RuntimeException("执行[移动端测试套件计数器]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}