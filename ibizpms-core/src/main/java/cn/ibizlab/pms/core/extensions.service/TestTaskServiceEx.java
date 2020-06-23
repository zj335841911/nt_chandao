package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.TestTaskServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.TestTask;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

/**
 * 实体[测试版本] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TestTaskServiceEx")
public class TestTaskServiceEx extends TestTaskServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Block]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public TestTask block(TestTask et) {
        return super.block(et);
    }
    /**
     * 自定义行为[Start]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public TestTask start(TestTask et) {
        return super.start(et);
    }
    /**
     * 自定义行为[Activate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public TestTask activate(TestTask et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public TestTask close(TestTask et) {
        return super.close(et);
    }
}


