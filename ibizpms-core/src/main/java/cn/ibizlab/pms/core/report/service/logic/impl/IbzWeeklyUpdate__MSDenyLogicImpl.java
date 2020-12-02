package cn.ibizlab.pms.core.report.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.report.service.logic.IIbzWeeklyUpdate__MSDenyLogic;
import cn.ibizlab.pms.core.report.domain.IbzWeekly;

/**
 * 关系型数据实体[Update__MSDeny] 对象
 */
@Slf4j
@Service
public class IbzWeeklyUpdate__MSDenyLogicImpl implements IIbzWeeklyUpdate__MSDenyLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.report.service.IIbzWeeklyService ibzweeklyservice;

    public cn.ibizlab.pms.core.report.service.IIbzWeeklyService getIbzweeklyService() {
        return this.ibzweeklyservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.report.service.IIbzWeeklyService iBzSysDefaultService;

    public cn.ibizlab.pms.core.report.service.IIbzWeeklyService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(IbzWeekly et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            cn.ibizlab.pms.core.report.domain.IbzWeekly ibzweeklyupdate__msdenytemp = new cn.ibizlab.pms.core.report.domain.IbzWeekly();
            kieSession.insert(ibzweeklyupdate__msdenytemp); 
            kieSession.setGlobal("ibzweeklyupdate__msdenytemp", ibzweeklyupdate__msdenytemp);
            kieSession.insert(et); 
            kieSession.setGlobal("ibzweeklyupdate__msdenydefault", et);
            kieSession.setGlobal("ibzweeklyservice", ibzweeklyservice);
            kieSession.setGlobal("iBzSysIbzweeklyDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.report.service.logic.ibzweeklyupdate__msdeny");

        } catch (Exception e) {
            throw new RuntimeException("执行[行为[Update]主状态拒绝逻辑]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
