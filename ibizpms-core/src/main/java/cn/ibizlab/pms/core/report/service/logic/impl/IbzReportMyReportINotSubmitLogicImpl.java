package cn.ibizlab.pms.core.report.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.report.service.logic.IIbzReportMyReportINotSubmitLogic;
import cn.ibizlab.pms.core.report.domain.IbzReport;

/**
 * 关系型数据实体[MyReportINotSubmit] 对象
 */
@Slf4j
@Service
public class IbzReportMyReportINotSubmitLogicImpl implements IIbzReportMyReportINotSubmitLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.report.service.IIbzReportService iBzSysDefaultService;

    public cn.ibizlab.pms.core.report.service.IIbzReportService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(IbzReport et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("ibzreportmyreportinotsubmitdefault", et);
            kieSession.setGlobal("iBzSysIbzreportDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.report.service.logic.ibzreportmyreportinotsubmit");

        } catch (Exception e) {
            throw new RuntimeException("执行[我未提交的（计数器）]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
