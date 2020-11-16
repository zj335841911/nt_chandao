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

import cn.ibizlab.pms.core.ibiz.service.logic.ISysUpdateLogUpdateLastedLogic;
import cn.ibizlab.pms.core.ibiz.domain.SysUpdateLog;

/**
 * 关系型数据实体[UpdateLasted] 对象
 */
@Slf4j
@Service
public class SysUpdateLogUpdateLastedLogicImpl implements ISysUpdateLogUpdateLastedLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.ISysUpdateLogService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.ISysUpdateLogService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(SysUpdateLog et) {

          KieSession kieSession = null;
        try{
           kieSession = kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("sysupdatelogupdatelasteddefault", et);
           kieSession.setGlobal("iBzSysSysupdatelogDefaultService", iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.sysupdatelogupdatelasted");

        }catch(Exception e) {
            throw new RuntimeException("执行[更新最新更新标识]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null) {
                kieSession.destroy();
            }
        }
    }

}
