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

import cn.ibizlab.pms.core.zentao.service.logic.IReleaseUpdate__MSDenyLogic;
import cn.ibizlab.pms.core.zentao.domain.Release;

/**
 * 关系型数据实体[Update__MSDeny] 对象
 */
@Slf4j
@Service
public class ReleaseUpdate__MSDenyLogicImpl implements IReleaseUpdate__MSDenyLogic{

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IReleaseService releaseservice;

    public cn.ibizlab.pms.core.zentao.service.IReleaseService getReleaseService() {
        return this.releaseservice;
    }


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IReleaseService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IReleaseService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(Release et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("releaseupdate__msdenydefault",et);
           cn.ibizlab.pms.core.zentao.domain.Release  releaseupdate__msdenytemp =new cn.ibizlab.pms.core.zentao.domain.Release();
           kieSession.insert(releaseupdate__msdenytemp); 
           kieSession.setGlobal("releaseupdate__msdenytemp",releaseupdate__msdenytemp);
           kieSession.setGlobal("releaseservice",releaseservice);
           kieSession.setGlobal("iBzSysReleaseDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.releaseupdate__msdeny");

        }catch(Exception e){
            throw new RuntimeException("执行[行为[Update]主状态拒绝逻辑]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
