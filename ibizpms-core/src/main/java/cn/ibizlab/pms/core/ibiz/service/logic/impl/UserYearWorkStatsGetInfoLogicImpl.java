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

import cn.ibizlab.pms.core.ibiz.service.logic.IUserYearWorkStatsGetInfoLogic;
import cn.ibizlab.pms.core.ibiz.domain.UserYearWorkStats;

/**
 * 关系型数据实体[GetInfo] 对象
 */
@Slf4j
@Service
public class UserYearWorkStatsGetInfoLogicImpl implements IUserYearWorkStatsGetInfoLogic {

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService useryearworkstatsservice;

    public cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService getUseryearworkstatsService() {
        return this.useryearworkstatsservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(UserYearWorkStats et) {

          KieSession kieSession = null;
        try{
           kieSession = kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("useryearworkstatsgetinfodefault", et);
           kieSession.setGlobal("useryearworkstatsservice", useryearworkstatsservice);
           kieSession.setGlobal("iBzSysUseryearworkstatsDefaultService", iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.useryearworkstatsgetinfo");

        }catch(Exception e) {
            throw new RuntimeException("执行[获取相关信息]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null) {
                kieSession.destroy();
            }
        }
    }

}
