package cn.ibizlab.pms.core.ibiz.service.logic.impl;

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

import cn.ibizlab.pms.core.ibiz.service.logic.IIbzLibModuleRemoveModuleLogic;
import cn.ibizlab.pms.core.ibiz.domain.IbzLibModule;

/**
 * 关系型数据实体[RemoveModule] 对象
 */
@Slf4j
@Service
public class IbzLibModuleRemoveModuleLogicImpl implements IIbzLibModuleRemoveModuleLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleservice;

    public cn.ibizlab.pms.core.zentao.service.IModuleService getModuleService() {
        return this.moduleservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IIbzLibModuleService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IIbzLibModuleService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(IbzLibModule et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("ibzlibmoduleremovemoduledefault",et);
           cn.ibizlab.pms.core.zentao.domain.Module  ibzlibmoduleremovemodulemodule =new cn.ibizlab.pms.core.zentao.domain.Module();
           kieSession.insert(ibzlibmoduleremovemodulemodule); 
           kieSession.setGlobal("ibzlibmoduleremovemodulemodule",ibzlibmoduleremovemodulemodule);
           kieSession.setGlobal("moduleservice",moduleservice);
           kieSession.setGlobal("iBzSysIbzlibmoduleDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.ibzlibmoduleremovemodule");

        }catch(Exception e){
            throw new RuntimeException("执行[删除模块]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
