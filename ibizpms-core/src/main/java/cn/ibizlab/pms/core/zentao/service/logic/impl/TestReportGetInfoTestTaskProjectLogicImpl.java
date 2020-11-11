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

import cn.ibizlab.pms.core.zentao.service.logic.ITestReportGetInfoTestTaskProjectLogic;
import cn.ibizlab.pms.core.zentao.domain.TestReport;

/**
 * 关系型数据实体[GetInfoTestTaskProject] 对象
 */
@Slf4j
@Service
public class TestReportGetInfoTestTaskProjectLogicImpl implements ITestReportGetInfoTestTaskProjectLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITestReportService testreportservice;

    public cn.ibizlab.pms.core.zentao.service.ITestReportService getTestreportService() {
        return this.testreportservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITestReportService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.ITestReportService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(TestReport et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("testreportgetinfotesttaskprojectdefault",et);
           cn.ibizlab.pms.core.zentao.domain.TestTask  testreportgetinfotesttaskprojecttesttask =new cn.ibizlab.pms.core.zentao.domain.TestTask();
           kieSession.insert(testreportgetinfotesttaskprojecttesttask); 
           kieSession.setGlobal("testreportgetinfotesttaskprojecttesttask",testreportgetinfotesttaskprojecttesttask);
           kieSession.setGlobal("testreportservice",testreportservice);
           kieSession.setGlobal("iBzSysTestreportDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.testreportgetinfotesttaskproject");

        }catch(Exception e){
            throw new RuntimeException("执行[根据测试单获取相应信息（项目报告）]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null) {
                kieSession.destroy();
            }
        }
    }

}
