package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.ReleaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Release;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[发布] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ReleaseServiceEx")
public class ReleaseServiceEx extends ReleaseServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Activate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release activate(Release et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[ChangeStatus]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release changeStatus(Release et) {
        return super.changeStatus(et);
    }
    /**
     * 自定义行为[Terminate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release terminate(Release et) {
        return super.terminate(et);
    }
}

