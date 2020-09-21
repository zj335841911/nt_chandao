package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;

import cn.ibizlab.pms.core.zentao.service.logic.IProjectUpdateCycle__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Project;

/**
 * 关系型数据实体[UpdateCycle__MSDeny] 对象
 */
@Slf4j
@Service
public class ProjectUpdateCycle__MSDenyLogicImpl implements IProjectUpdateCycle__MSDenyLogic{

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

    public void execute(Project et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           cn.ibizlab.pms.core.zentao.domain.Project  projectupdatecycle__msdenytemp =new cn.ibizlab.pms.core.zentao.domain.Project();
           kieSession.insert(projectupdatecycle__msdenytemp); 
           kieSession.setGlobal("projectupdatecycle__msdenytemp",projectupdatecycle__msdenytemp);
           kieSession.insert(et); 
           kieSession.setGlobal("projectupdatecycle__msdenydefault",et);
           kieSession.setGlobal("projectservice",projectservice);
           kieSession.setGlobal("iBzSysProjectDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.projectupdatecycle__msdeny");

        }catch(Exception e){
            throw new RuntimeException("执行[行为[UpdateCycle]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
