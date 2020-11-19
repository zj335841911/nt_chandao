package cn.ibizlab.pms.core.zentao.service.logic.impl;

import java.util.Map;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;
import cn.ibizlab.pms.core.zentao.service.logic.ITodoGetTODOTitleLogic;
import cn.ibizlab.pms.core.zentao.domain.Todo;

/**
 * 关系型数据实体[GetTODOTitle] 对象
 */
@Slf4j
@Service
public class TodoGetTODOTitleLogicImpl implements ITodoGetTODOTitleLogic {

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.zentao.service.ITodoService iBzSysDefaultService;

    public cn.ibizlab.pms.core.zentao.service.ITodoService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    @Override
    public void execute(Todo et) {

        KieSession kieSession = null;
        try {
            kieSession = kieContainer.newKieSession();
            kieSession.insert(et); 
            kieSession.setGlobal("todogettodotitledefault", et);
            kieSession.setGlobal("iBzSysTodoDefaultService", iBzSysDefaultService);
            kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
            kieSession.startProcess("cn.ibizlab.pms.core.zentao.service.logic.todogettodotitle");

        } catch (Exception e) {
            throw new RuntimeException("执行[获取待办名称]处理逻辑发生异常" + e);
        } finally {
            if(kieSession != null) {
                kieSession.destroy();
            }
        }
    }
}
