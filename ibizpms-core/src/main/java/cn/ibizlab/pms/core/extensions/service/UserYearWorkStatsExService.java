package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.UserYearWorkStatsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.UserYearWorkStats;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[用户年度工作内容统计] 自定义服务对象
 */
@Slf4j
@Primary
@Service("UserYearWorkStatsExService")
public class UserYearWorkStatsExService extends UserYearWorkStatsServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[GetUserYearAction]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public UserYearWorkStats getUserYearAction(UserYearWorkStats et) {
        return super.getUserYearAction(et);
    }
    /**
     * 自定义行为[UpdateTitleByYear]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public UserYearWorkStats updateTitleByYear(UserYearWorkStats et) {
        return super.updateTitleByYear(et);
    }
}

