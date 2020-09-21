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

import cn.ibizlab.pms.core.zentao.service.logic.ICasecaseFavoriteLogic;
import cn.ibizlab.pms.core.zentao.domain.Case;

/**
 * 关系型数据实体[caseFavorite] 对象
 */
@Slf4j
@Service
public class CasecaseFavoriteLogicImpl implements ICasecaseFavoriteLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IIbzFavoritesService ibzfavoritesservice;

    public cn.ibizlab.pms.core.ibiz.service.IIbzFavoritesService getIbzfavoritesService() {
        return this.ibzfavoritesservice;
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
           kieSession.insert(et); 
           kieSession.setGlobal("casecasefavoritedefault",et);
           cn.ibizlab.pms.core.ibiz.domain.IbzFavorites  casecasefavoriteibzfavorite =new cn.ibizlab.pms.core.ibiz.domain.IbzFavorites();
           kieSession.insert(casecasefavoriteibzfavorite); 
           kieSession.setGlobal("casecasefavoriteibzfavorite",casecasefavoriteibzfavorite);
           kieSession.setGlobal("ibzfavoritesservice",ibzfavoritesservice);
           kieSession.setGlobal("iBzSysCaseDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.casecasefavorite");

        }catch(Exception e){
            throw new RuntimeException("执行[用例收藏]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
