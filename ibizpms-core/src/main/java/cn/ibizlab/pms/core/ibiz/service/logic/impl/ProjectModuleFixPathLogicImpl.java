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

import cn.ibizlab.pms.core.ibiz.service.logic.IProjectModuleFixPathLogic;
import cn.ibizlab.pms.core.ibiz.domain.ProjectModule;

/**
 * 关系型数据实体[FixPath] 对象
 */
@Slf4j
@Service
public class ProjectModuleFixPathLogicImpl implements IProjectModuleFixPathLogic{

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

    public void execute(ProjectModule et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           cn.ibizlab.pms.core.zentao.domain.Module  projectmodulefixpathzt_module =new cn.ibizlab.pms.core.zentao.domain.Module();
           kieSession.insert(projectmodulefixpathzt_module); 
           kieSession.setGlobal("projectmodulefixpathzt_module",projectmodulefixpathzt_module);
           kieSession.insert(et); 
           kieSession.setGlobal("projectmodulefixpathdefault",et);
           kieSession.setGlobal("moduleservice",moduleservice);
           kieSession.setGlobal("iBzSysProjectmoduleDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.projectmodulefixpath");

        }catch(Exception e){
            throw new RuntimeException("执行[重建模块路径]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
