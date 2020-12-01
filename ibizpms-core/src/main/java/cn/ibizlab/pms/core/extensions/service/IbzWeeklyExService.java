package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.report.service.impl.IbzWeeklyServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[周报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbzWeeklyExService")
public class IbzWeeklyExService extends IbzWeeklyServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [CreateEveryWeekReport:定时生成每周周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly createEveryWeekReport(IbzWeekly et) {
        return super.createEveryWeekReport(et);
    }
    /**
     * [Submit:提交] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly submit(IbzWeekly et) {
        return super.submit(et);
    }
}

