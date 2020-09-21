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

import cn.ibizlab.pms.core.zentao.service.logic.IProjectUpdateOrder__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Project;

/**
 * 关系型数据实体[UpdateOrder__MSDeny] 对象
 */
@Slf4j
@Service
public class ProjectUpdateOrder__MSDenyLogicImpl implements IProjectUpdateOrder__MSDenyLogic{

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
           kieSession.insert(et); 
           kieSession.setGlobal("projectupdateorder__msdenydefault",et);
           cn.ibizlab.pms.core.zentao.domain.Project  projectupdateorder__msdenytemp =new cn.ibizlab.pms.core.zentao.domain.Project();
           kieSession.insert(projectupdateorder__msdenytemp); 
           kieSession.setGlobal("projectupdateorder__msdenytemp",projectupdateorder__msdenytemp);
           kieSession.setGlobal("projectservice",projectservice);
           kieSession.setGlobal("iBzSysProjectDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.projectupdateorder__msdeny");

        }catch(Exception e){
            throw new RuntimeException("执行[行为[UpdateOrder]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}