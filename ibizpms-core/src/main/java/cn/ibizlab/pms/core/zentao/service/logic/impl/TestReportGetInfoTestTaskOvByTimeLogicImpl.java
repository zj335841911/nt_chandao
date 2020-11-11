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

import cn.ibizlab.pms.core.zentao.service.logic.ITestReportGetInfoTestTaskOvByTimeLogic;
import cn.ibizlab.pms.core.zentao.domain.TestReport;

/**
 * 关系型数据实体[GetInfoTestTaskOvByTime] 对象
 */
@Slf4j
@Service
public class TestReportGetInfoTestTaskOvByTimeLogicImpl implements ITestReportGetInfoTestTaskOvByTimeLogic{

    @Autowired
    private KieContainer kieContainer;


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
           kieSession.setGlobal("testreportgetinfotesttaskovbytimedefault",et);
           kieSession.setGlobal("iBzSysTestreportDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.testreportgetinfotesttaskovbytime");

        }catch(Exception e){
            throw new RuntimeException("执行[根据报告起始时间更新概况信息]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null) {
                kieSession.destroy();
            }
        }
    }

}
