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

import cn.ibizlab.pms.core.ibiz.service.logic.IIbzMyTerritoryMyTerritoryCountLogic;
import cn.ibizlab.pms.core.ibiz.domain.IbzMyTerritory;

/**
 * 关系型数据实体[MyTerritoryCount] 对象
 */
@Slf4j
@Service
public class IbzMyTerritoryMyTerritoryCountLogicImpl implements IIbzMyTerritoryMyTerritoryCountLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IIbzMyTerritoryService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IIbzMyTerritoryService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(IbzMyTerritory et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("ibzmyterritorymyterritorycountdefault",et);
           kieSession.setGlobal("iBzSysIbzmyterritoryDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.ibzmyterritorymyterritorycount");

        }catch(Exception e){
            throw new RuntimeException("执行[我的地盘移动端计数器]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
