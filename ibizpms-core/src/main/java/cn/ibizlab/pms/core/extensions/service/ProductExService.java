package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.ProductServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Product;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[产品] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProductExService")
public class ProductExService extends ProductServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Product close(Product et) {
        return super.close(et);
    }
    /**
     * 自定义行为[MobProductCounter]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Product mobProductCounter(Product et) {
        return super.mobProductCounter(et);
    }
}

