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

import cn.ibizlab.pms.core.zentao.service.logic.ICaseunlinkCasesLogic;
import cn.ibizlab.pms.core.zentao.domain.Case;

/**
 * 关系型数据实体[unlinkCases] 对象
 */
@Slf4j
@Service
public class CaseunlinkCasesLogicImpl implements ICaseunlinkCasesLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ICaseService caseservice;

    public cn.ibizlab.pms.core.zentao.service.ICaseService getCaseService() {
        return this.caseservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ICaseService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.ICaseService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(Case et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           cn.ibizlab.pms.core.zentao.domain.TestRun  caseunlinkcasestestrun =new cn.ibizlab.pms.core.zentao.domain.TestRun();
           kieSession.insert(caseunlinkcasestestrun); 
           kieSession.setGlobal("caseunlinkcasestestrun",caseunlinkcasestestrun);
           kieSession.insert(et); 
           kieSession.setGlobal("caseunlinkcasesdefault",et);
           kieSession.setGlobal("caseservice",caseservice);
           kieSession.setGlobal("iBzSysCaseDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.caseunlinkcases");

        }catch(Exception e){
            throw new RuntimeException("执行[unlinkCases]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
