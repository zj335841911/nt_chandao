package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.TeamServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Team;
import org.springframework.stereotype.Service;
import io.seata.spring.annotation.GlobalTransactional;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[群组] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TeamExService")
public class TeamExService extends TeamServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[ManagePorjectMembers]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Team managePorjectMembers(Team et) {
        return super.managePorjectMembers(et);
    }
    /**
     * 自定义行为[UnlinkPorjectMember]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Team unlinkPorjectMember(Team et) {
        return super.unlinkPorjectMember(et);
    }
}

