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

import cn.ibizlab.pms.core.ibiz.service.logic.IProductStatsGetCurUserBugCntLogic;
import cn.ibizlab.pms.core.ibiz.domain.ProductStats;

/**
 * 关系型数据实体[GetCurUserBugCnt] 对象
 */
@Slf4j
@Service
public class ProductStatsGetCurUserBugCntLogicImpl implements IProductStatsGetCurUserBugCntLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IProductStatsService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IProductStatsService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(ProductStats et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("productstatsgetcuruserbugcntdefault",et);
           kieSession.setGlobal("iBzSysProductstatsDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.productstatsgetcuruserbugcnt");

        }catch(Exception e){
            throw new RuntimeException("执行[获取当前用户的Bug数]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
