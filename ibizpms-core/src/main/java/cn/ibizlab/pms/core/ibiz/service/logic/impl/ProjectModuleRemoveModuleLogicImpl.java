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

import cn.ibizlab.pms.core.ibiz.service.logic.IProjectModuleRemoveModuleLogic;
import cn.ibizlab.pms.core.ibiz.domain.ProjectModule;

/**
 * 关系型数据实体[RemoveModule] 对象
 */
@Slf4j
@Service
public class ProjectModuleRemoveModuleLogicImpl implements IProjectModuleRemoveModuleLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleservice;

    public cn.ibizlab.pms.core.zentao.service.IModuleService getModuleService() {
        return this.moduleservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IProjectModuleService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IProjectModuleService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(ProjectModule et) {

          KieSession kieSession = null;
        try{
           kieSession = kieContainer.newKieSession();
           cn.ibizlab.pms.core.zentao.domain.Module projectmoduleremovemodulemodule = new cn.ibizlab.pms.core.zentao.domain.Module();
           kieSession.insert(projectmoduleremovemodulemodule); 
           kieSession.setGlobal("projectmoduleremovemodulemodule", projectmoduleremovemodulemodule);
           kieSession.insert(et); 
           kieSession.setGlobal("projectmoduleremovemoduledefault", et);
           kieSession.setGlobal("moduleservice", moduleservice);
           kieSession.setGlobal("iBzSysProjectmoduleDefaultService", iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.projectmoduleremovemodule");

        }catch(Exception e) {
            throw new RuntimeException("执行[删除模块]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null) {
                kieSession.destroy();
            }
        }
    }

}
