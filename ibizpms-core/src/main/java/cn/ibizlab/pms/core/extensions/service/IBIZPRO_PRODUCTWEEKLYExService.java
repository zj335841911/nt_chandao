package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IBIZPRO_PRODUCTWEEKLYServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_PRODUCTWEEKLY;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[产品周报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IBIZPRO_PRODUCTWEEKLYExService")
public class IBIZPRO_PRODUCTWEEKLYExService extends IBIZPRO_PRODUCTWEEKLYServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [SUMPRODUCTWEEKLY:统计产品周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IBIZPRO_PRODUCTWEEKLY sUMPRODUCTWEEKLY(IBIZPRO_PRODUCTWEEKLY et) {
        return super.sUMPRODUCTWEEKLY(et);
    }
}

