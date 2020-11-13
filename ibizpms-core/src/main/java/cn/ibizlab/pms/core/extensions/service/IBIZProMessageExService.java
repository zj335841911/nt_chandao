package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizplugin.client.IBIZProMessageFeignClient;
import cn.ibizlab.pms.core.ibizplugin.service.impl.IBIZProMessageServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizplugin.domain.IBIZProMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

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
    IBIZProMessageFeignClient ibizproMessageFeignClient;
    /**
     * 自定义行为[MarkDone]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(readOnly = true)
    public IBIZProMessage markDone(IBIZProMessage et) {
        return super.markDone(et);
    }
    /**
     * 自定义行为[MarkRead]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(readOnly = true)
    public IBIZProMessage markRead(IBIZProMessage et) {
        return super.markRead(et);
    }
    /**
     * 自定义行为[Send]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(readOnly = true)
    public IBIZProMessage send(IBIZProMessage et) {

        return ibizproMessageFeignClient.send("pms", et);
    }
}

