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

import cn.ibizlab.pms.core.zentao.service.logic.ITaskTaskCancleFavoritesLogic;
import cn.ibizlab.pms.core.zentao.domain.Task;

/**
 * 关系型数据实体[TaskCancleFavorites] 对象
 */
@Slf4j
@Service
public class TaskTaskCancleFavoritesLogicImpl implements ITaskTaskCancleFavoritesLogic{

    @Autowired
    private KieContainer kieContainer;


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
           kieSession.setGlobal("tasktaskcanclefavoritesdefault",et);
           kieSession.setGlobal("iBzSysTaskDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.tasktaskcanclefavorites");

        }catch(Exception e){
            throw new RuntimeException("执行[任务取消收藏]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
