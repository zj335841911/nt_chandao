package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.zentao.service.logic.IBuildMobProjectBuildCounterLogic;
import cn.ibizlab.pms.core.zentao.domain.Build;

/**
 * 关系型数据实体[MobProjectBuildCounter] 对象
 */
@Slf4j
@Service
public class BuildMobProjectBuildCounterLogicImpl implements IBuildMobProjectBuildCounterLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IBuildService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IBuildService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(Build et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("buildmobprojectbuildcounterdefault", et);
            kieSession.setGlobal("iBzSysBuildDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.buildmobprojectbuildcounter");

        } catch (Exception e) {
            throw new RuntimeException("执行[移动端项目版本计数器]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
