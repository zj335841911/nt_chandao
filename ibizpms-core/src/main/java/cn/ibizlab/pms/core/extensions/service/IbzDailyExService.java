package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.report.service.impl.IbzDailyServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.report.domain.IbzDaily;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[日报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbzDailyExService")
public class IbzDailyExService extends IbzDailyServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [CreateUserDaily:定时生成用户日报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily createUserDaily(IbzDaily et) {
        return super.createUserDaily(et);
    }
    /**
     * [HaveRead:已读] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily haveRead(IbzDaily et) {
        return super.haveRead(et);
    }
    /**
     * [LinkCompleteTask:关联完成任务] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily linkCompleteTask(IbzDaily et) {
        return super.linkCompleteTask(et);
    }
    /**
     * [Submit:提交] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily submit(IbzDaily et) {
        return super.submit(et);
    }
}

