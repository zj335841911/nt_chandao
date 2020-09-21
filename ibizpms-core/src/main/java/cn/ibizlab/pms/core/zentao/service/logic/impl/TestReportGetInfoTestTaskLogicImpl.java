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

import cn.ibizlab.pms.core.zentao.service.logic.ITestReportGetInfoTestTaskLogic;
import cn.ibizlab.pms.core.zentao.domain.TestReport;

/**
 * 关系型数据实体[GetInfoTestTask] 对象
 */
@Slf4j
@Service
public class TestReportGetInfoTestTaskLogicImpl implements ITestReportGetInfoTestTaskLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITestReportService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.ITestReportService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(TestReport et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("testreportgetinfotesttaskdefault",et);
           cn.ibizlab.pms.core.zentao.domain.TestTask  testreportgetinfotesttasktesttask =new cn.ibizlab.pms.core.zentao.domain.TestTask();
           kieSession.insert(testreportgetinfotesttasktesttask); 
           kieSession.setGlobal("testreportgetinfotesttasktesttask",testreportgetinfotesttasktesttask);
           kieSession.setGlobal("iBzSysTestreportDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.testreportgetinfotesttask");

        }catch(Exception e){
            throw new RuntimeException("执行[根据测试单获取相应信息]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
