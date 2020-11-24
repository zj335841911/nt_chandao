package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.IProjectTeamGetProjectDaysLogic;
import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;

/**
 * 关系型数据实体[GetProjectDays] 对象
 */
@Slf4j
@Service
public class ProjectTeamGetProjectDaysLogicImpl implements IProjectTeamGetProjectDaysLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IProjectTeamService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IProjectTeamService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(ProjectTeam et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("projectteamgetprojectdaysdefault", et);
            kieSession.setGlobal("iBzSysProjectteamDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.projectteamgetprojectdays");

        } catch (Exception e) {
            throw new RuntimeException("执行[获取项目的可用工日]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
