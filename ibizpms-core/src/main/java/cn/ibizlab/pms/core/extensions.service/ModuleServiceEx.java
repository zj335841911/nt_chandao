package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.ModuleServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Module;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[模块] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ModuleServiceEx")
public class ModuleServiceEx extends ModuleServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Fix]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Module fix(Module et) {
        return super.fix(et);
    }
}

