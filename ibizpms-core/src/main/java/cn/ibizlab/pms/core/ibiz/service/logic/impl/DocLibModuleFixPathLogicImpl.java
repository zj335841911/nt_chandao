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

import cn.ibizlab.pms.core.ibiz.service.logic.IDocLibModuleFixPathLogic;
import cn.ibizlab.pms.core.ibiz.domain.DocLibModule;

/**
 * 关系型数据实体[FixPath] 对象
 */
@Slf4j
@Service
public class DocLibModuleFixPathLogicImpl implements IDocLibModuleFixPathLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IModuleService moduleservice;

    public cn.ibizlab.pms.core.zentao.service.IModuleService getModuleService() {
        return this.moduleservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IDocLibModuleService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IDocLibModuleService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(DocLibModule et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           cn.ibizlab.pms.core.zentao.domain.Module  doclibmodulefixpathzt_module =new cn.ibizlab.pms.core.zentao.domain.Module();
           kieSession.insert(doclibmodulefixpathzt_module); 
           kieSession.setGlobal("doclibmodulefixpathzt_module",doclibmodulefixpathzt_module);
           kieSession.insert(et); 
           kieSession.setGlobal("doclibmodulefixpathdefault",et);
           kieSession.setGlobal("moduleservice",moduleservice);
           kieSession.setGlobal("iBzSysDoclibmoduleDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.doclibmodulefixpath");

        }catch(Exception e){
            throw new RuntimeException("执行[重建模块路径]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
