package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.TodoServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Todo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[待办事宜表] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TodoExService")
public class TodoExService extends TodoServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo assignTo(Todo et) {
        return super.assignTo(et);
    }
    /**
     * 自定义行为[Finish]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo finish(Todo et) {
        return super.finish(et);
    }
}

