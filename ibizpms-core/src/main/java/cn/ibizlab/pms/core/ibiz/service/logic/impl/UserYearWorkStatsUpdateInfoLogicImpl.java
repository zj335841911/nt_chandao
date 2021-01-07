package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.IUserYearWorkStatsUpdateInfoLogic;
import cn.ibizlab.pms.core.ibiz.domain.UserYearWorkStats;

/**
 * 关系型数据实体[UpdateInfo] 对象
 */
@Slf4j
@Service
public class UserYearWorkStatsUpdateInfoLogicImpl implements IUserYearWorkStatsUpdateInfoLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService useryearworkstatsservice;

    public cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService getUseryearworkstatsService() {
        return this.useryearworkstatsservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(UserYearWorkStats et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("useryearworkstatsupdateinfodefault", et);
            kieSession.setGlobal("useryearworkstatsservice", useryearworkstatsservice);
            kieSession.setGlobal("iBzSysUseryearworkstatsDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.useryearworkstatsupdateinfo");

        } catch (Exception e) {
            throw new RuntimeException("执行[更新相关信息]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}