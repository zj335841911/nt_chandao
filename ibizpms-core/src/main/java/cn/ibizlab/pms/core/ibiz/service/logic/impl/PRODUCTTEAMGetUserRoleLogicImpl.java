package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.ibiz.service.logic.IPRODUCTTEAMGetUserRoleLogic;
import cn.ibizlab.pms.core.ibiz.domain.PRODUCTTEAM;

/**
 * 关系型数据实体[GetUserRole] 对象
 */
@Slf4j
@Service
public class PRODUCTTEAMGetUserRoleLogicImpl implements IPRODUCTTEAMGetUserRoleLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IPRODUCTTEAMService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IPRODUCTTEAMService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(PRODUCTTEAM et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("productteamgetuserroledefault", et);
            kieSession.setGlobal("iBzSysProductteamDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.productteamgetuserrole");

        } catch (Exception e) {
            throw new RuntimeException("执行[获取成员角色]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
