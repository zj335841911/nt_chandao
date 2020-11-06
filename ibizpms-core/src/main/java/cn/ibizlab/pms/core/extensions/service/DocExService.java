package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.DocServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Doc;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[文档] 自定义服务对象
 */
@Slf4j
@Primary
@Service("DocExService")
public class DocExService extends DocServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[ByVersionUpdateContext]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Doc byVersionUpdateContext(Doc et) {
        return super.byVersionUpdateContext(et);
    }
}

