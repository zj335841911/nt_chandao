package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.zentao.service.logic.IBugUpdateStoryVersionLogic;
import cn.ibizlab.pms.core.zentao.domain.Bug;

/**
 * 关系型数据实体[UpdateStoryVersion] 对象
 */
@Slf4j
@Service
public class BugUpdateStoryVersionLogicImpl implements IBugUpdateStoryVersionLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IBugService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IBugService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(Bug et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("bugupdatestoryversiondefault", et);
            kieSession.setGlobal("iBzSysBugDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.bugupdatestoryversion");

        } catch (Exception e) {
            throw new RuntimeException("执行[更新需求版本]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
