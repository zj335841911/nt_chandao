package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.zentao.service.logic.IDocLibCurUserIsFLogic;
import cn.ibizlab.pms.core.zentao.domain.DocLib;

/**
 * 关系型数据实体[CurUserIsF] 对象
 */
@Slf4j
@Service
public class DocLibCurUserIsFLogicImpl implements IDocLibCurUserIsFLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.IDocLibService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.IDocLibService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(DocLib et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("doclibcuruserisfdefault", et);
            kieSession.setGlobal("iBzSysDoclibDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.doclibcuruserisf");

        } catch (Exception e) {
            throw new RuntimeException("执行[当前是否收藏文档库]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
