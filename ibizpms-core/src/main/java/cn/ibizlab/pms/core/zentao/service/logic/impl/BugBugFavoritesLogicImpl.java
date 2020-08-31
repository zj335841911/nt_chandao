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

import cn.ibizlab.pms.core.zentao.service.logic.IBugBugFavoritesLogic;
import cn.ibizlab.pms.core.zentao.domain.Bug;

/**
 * 关系型数据实体[BugFavorites] 对象
 */
@Slf4j
@Service
public class BugBugFavoritesLogicImpl implements IBugBugFavoritesLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IIbzFavoritesService ibzfavoritesservice;

    public cn.ibizlab.pms.core.ibiz.service.IIbzFavoritesService getIbzfavoritesService() {
        return this.ibzfavoritesservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IBugService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IBugService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(Bug et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           cn.ibizlab.pms.core.ibiz.domain.IbzFavorites  bugbugfavoritesibzfavorites =new cn.ibizlab.pms.core.ibiz.domain.IbzFavorites();
           kieSession.insert(bugbugfavoritesibzfavorites); 
           kieSession.setGlobal("bugbugfavoritesibzfavorites",bugbugfavoritesibzfavorites);
           kieSession.insert(et); 
           kieSession.setGlobal("bugbugfavoritesdefault",et);
           kieSession.setGlobal("ibzfavoritesservice",ibzfavoritesservice);
           kieSession.setGlobal("iBzSysBugDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.bugbugfavorites");

        }catch(Exception e){
            throw new RuntimeException("执行[Bug收藏]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
