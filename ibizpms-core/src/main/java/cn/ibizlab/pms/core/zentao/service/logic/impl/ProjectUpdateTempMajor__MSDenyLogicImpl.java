package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.zentao.service.logic.IProjectUpdateTempMajor__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Project;

/**
 * 关系型数据实体[UpdateTempMajor__MSDeny] 对象
 */
@Slf4j
@Service
public class ProjectUpdateTempMajor__MSDenyLogicImpl implements IProjectUpdateTempMajor__MSDenyLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProjectService projectservice;

    public cn.ibizlab.pms.core.zentao.service.IProjectService getProjectService() {
        return this.projectservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IProjectService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IProjectService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(Project et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("projectupdatetempmajor__msdenydefault", et);
            cn.ibizlab.pms.core.zentao.domain.Project projectupdatetempmajor__msdenytemp = new cn.ibizlab.pms.core.zentao.domain.Project();
            kieSession.insert(projectupdatetempmajor__msdenytemp); 
            kieSession.setGlobal("projectupdatetempmajor__msdenytemp", projectupdatetempmajor__msdenytemp);
            kieSession.setGlobal("projectservice", projectservice);
            kieSession.setGlobal("iBzSysProjectDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.projectupdatetempmajor__msdeny");

        } catch (Exception e) {
            throw new RuntimeException("执行[行为[UpdateTempMajor]主状态拒绝逻辑]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
