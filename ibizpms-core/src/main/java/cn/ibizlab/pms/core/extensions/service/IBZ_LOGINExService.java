package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.IBZ_LOGINServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.IBZ_LOGIN;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[实体] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IBZ_LOGINExService")
public class IBZ_LOGINExService extends IBZ_LOGINServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[GetUser]用户扩展
     * @param et
     * @return
     */
    @Override
    public IBZ_LOGIN getUser(IBZ_LOGIN et) {
        return super.getUser(et);
    }
    /**
     * 自定义行为[Ztlogin]用户扩展
     * @param et
     * @return
     */
    @Override
    public IBZ_LOGIN ztlogin(IBZ_LOGIN et) {
        return super.ztlogin(et);
    }
}

