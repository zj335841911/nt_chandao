package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizplugin.client.IBIZPRO_MESSAGEFeignClient;
import cn.ibizlab.pms.core.ibizplugin.service.impl.IBIZProMessageServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizplugin.domain.IBIZProMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 *
 * @author huhai
 * 实体[消息] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IBIZProMessageExService")
public class IBIZProMessageExService extends IBIZProMessageServiceImpl {


    @Autowired
    IBIZPRO_MESSAGEFeignClient ibizproMessageFeignClient;
    /**
     * 自定义行为[MarkDone]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public IBIZProMessage markDone(IBIZProMessage et) {
        return super.markDone(et);
    }
    /**
     * 自定义行为[MarkRead]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public IBIZProMessage markRead(IBIZProMessage et) {
        return super.markRead(et);
    }
    /**
     * 自定义行为[Send]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public IBIZProMessage send(IBIZProMessage et) {

        return ibizproMessageFeignClient.send(et.getIbizproMessageid(), et);
    }
}

