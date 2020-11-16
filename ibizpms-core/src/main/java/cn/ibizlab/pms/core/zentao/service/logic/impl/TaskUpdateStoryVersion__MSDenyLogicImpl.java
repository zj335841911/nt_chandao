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

import cn.ibizlab.pms.core.zentao.service.logic.ITaskUpdateStoryVersion__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Task;

/**
 * 关系型数据实体[UpdateStoryVersion__MSDeny] 对象
 */
@Slf4j
@Service
public class TaskUpdateStoryVersion__MSDenyLogicImpl implements ITaskUpdateStoryVersion__MSDenyLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITaskService taskservice;

    public cn.ibizlab.pms.core.zentao.service.ITaskService getTaskService() {
        return this.taskservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITaskService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.ITaskService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(Task et) {

          KieSession kieSession = null;
        try{
           kieSession = kieContainer.newKieSession();
           cn.ibizlab.pms.core.zentao.domain.Task taskupdatestoryversion__msdenytemp = new cn.ibizlab.pms.core.zentao.domain.Task();
           kieSession.insert(taskupdatestoryversion__msdenytemp); 
           kieSession.setGlobal("taskupdatestoryversion__msdenytemp", taskupdatestoryversion__msdenytemp);
           kieSession.insert(et); 
           kieSession.setGlobal("taskupdatestoryversion__msdenydefault", et);
           kieSession.setGlobal("taskservice", taskservice);
           kieSession.setGlobal("iBzSysTaskDefaultService", iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.taskupdatestoryversion__msdeny");

        }catch(Exception e) {
            throw new RuntimeException("执行[行为[updateStoryVersion]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null) {
                kieSession.destroy();
            }
        }
    }

}
