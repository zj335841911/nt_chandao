package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.util.zentao.job.OUSyncJob;
import cn.ibizlab.pms.core.zentao.service.impl.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[用户] 自定义服务对象
 */
@Slf4j
@Primary
@Service("UserExService")
public class UserExService extends UserServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }


    /**
     * 自定义行为[SyncAccount]用户扩展
     * 同步PMS账户到OU系统
     * @param et
     * @return
     */
    @Override
    @Transactional
    public User syncAccount(User et) {

       return null;
    }
}

