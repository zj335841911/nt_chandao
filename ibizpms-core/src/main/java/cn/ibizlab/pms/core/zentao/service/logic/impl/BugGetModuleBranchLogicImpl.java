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

import cn.ibizlab.pms.core.zentao.service.logic.IBugGetModuleBranchLogic;
import cn.ibizlab.pms.core.zentao.domain.Bug;

/**
 * 关系型数据实体[GetModuleBranch] 对象
 */
@Slf4j
@Service
public class BugGetModuleBranchLogicImpl implements IBugGetModuleBranchLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleservice;

    public cn.ibizlab.pms.core.zentao.service.IModuleService getModuleService() {
        return this.moduleservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IBugService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IBugService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(Bug et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("buggetmodulebranchdefault",et);
           cn.ibizlab.pms.core.zentao.domain.Module  buggetmodulebranchmodule =new cn.ibizlab.pms.core.zentao.domain.Module();
           kieSession.insert(buggetmodulebranchmodule); 
           kieSession.setGlobal("buggetmodulebranchmodule",buggetmodulebranchmodule);
           kieSession.setGlobal("moduleservice",moduleservice);
           kieSession.setGlobal("iBzSysBugDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.buggetmodulebranch");

        }catch(Exception e){
            throw new RuntimeException("执行[获取模块的平台]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
