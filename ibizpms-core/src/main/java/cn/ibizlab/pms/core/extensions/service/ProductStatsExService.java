package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.ProductStatsServiceImpl;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.ProductStats;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.math.BigInteger;
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

    @Override
    @Transactional
    public ProductStats get(BigInteger key) {
        ProductStats et = getById(key);
        if(et==null){
            et=new ProductStats();
            et.setId(key);
        }
        else{
            // 根据当前人信息获取指派给当前人员的bug数
            Map<String,Object> params = new HashMap<>();
            params.put("product", et.getId());
            params.put("curuser", AuthenticationUser.getAuthenticationUser().getLoginname());
            List<JSONObject> list = this.select("select count(1) as total from zt_bug t where t.deleted = '0' and t.product = #{et.product} and t.assignedTo = #{et.curuser}", params);
            if(!list.isEmpty() && list.size() > 0) {
                et.setAssigntomebugcnt(list.get(0).getInteger("total"));
            }
        }
        return et;
    }
}

