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

import cn.ibizlab.pms.core.ibiz.service.logic.IProjectTeamGetUserRoleLogic;
import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;

/**
 * 关系型数据实体[GetUserRole] 对象
 */
@Slf4j
@Service
public class ProjectTeamGetUserRoleLogicImpl implements IProjectTeamGetUserRoleLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IProjectTeamService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IProjectTeamService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(ProjectTeam et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("projectteamgetuserroledefault",et);
           kieSession.setGlobal("iBzSysProjectteamDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.projectteamgetuserrole");

        }catch(Exception e){
            throw new RuntimeException("执行[获取成员角色]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
