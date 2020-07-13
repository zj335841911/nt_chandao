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

import cn.ibizlab.pms.core.zentao.service.logic.ITaskUpdate__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Task;

/**
 * 关系型数据实体[Update__MSDeny] 对象
 */
@Slf4j
@Service
public class TaskUpdate__MSDenyLogicImpl implements ITaskUpdate__MSDenyLogic{

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
           cn.ibizlab.pms.core.zentao.domain.Task  taskupdate__msdenytemp =new cn.ibizlab.pms.core.zentao.domain.Task();
           kieSession.insert(taskupdate__msdenytemp); 
           kieSession.setGlobal("taskupdate__msdenytemp",taskupdate__msdenytemp);
           kieSession.insert(et); 
           kieSession.setGlobal("taskupdate__msdenydefault",et);
           kieSession.setGlobal("taskservice",taskservice);
           kieSession.setGlobal("iBzSysTaskDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.taskupdate__msdeny");

        }catch(Exception e){
            throw new RuntimeException("执行[行为[Update]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
