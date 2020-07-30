package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.ProductStatsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.ProductStats;
import org.springframework.stereotype.Service;
import io.seata.spring.annotation.GlobalTransactional;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[产品统计] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProductStatsExService")
public class ProductStatsExService extends ProductStatsServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[GetTestStats]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductStats getTestStats(ProductStats et) {
        return super.getTestStats(et);
    }
}

