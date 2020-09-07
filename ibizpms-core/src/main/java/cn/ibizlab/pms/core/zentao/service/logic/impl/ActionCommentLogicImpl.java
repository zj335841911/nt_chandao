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

import cn.ibizlab.pms.core.zentao.service.logic.IActionCommentLogic;
import cn.ibizlab.pms.core.zentao.domain.Action;

/**
 * 关系型数据实体[Comment] 对象
 */
@Slf4j
@Service
public class ActionCommentLogicImpl implements IActionCommentLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IActionService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IActionService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(Action et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("actioncommentdefault",et);
           kieSession.setGlobal("iBzSysActionDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.actioncomment");

        }catch(Exception e){
            throw new RuntimeException("执行[Comment]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
