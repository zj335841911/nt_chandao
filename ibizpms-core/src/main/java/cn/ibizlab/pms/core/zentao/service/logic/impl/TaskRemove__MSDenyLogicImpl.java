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

import cn.ibizlab.pms.core.zentao.service.logic.ITaskRemove__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Task;

/**
 * 关系型数据实体[Remove__MSDeny] 对象
 */
@Slf4j
@Service
public class TaskRemove__MSDenyLogicImpl implements ITaskRemove__MSDenyLogic{

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

    public void execute(Task et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("taskremove__msdenydefault",et);
           cn.ibizlab.pms.core.zentao.domain.Task  taskremove__msdenytemp =new cn.ibizlab.pms.core.zentao.domain.Task();
           kieSession.insert(taskremove__msdenytemp); 
           kieSession.setGlobal("taskremove__msdenytemp",taskremove__msdenytemp);
           kieSession.setGlobal("taskservice",taskservice);
           kieSession.setGlobal("iBzSysTaskDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.taskremove__msdeny");

        }catch(Exception e){
            throw new RuntimeException("执行[行为[Remove]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
