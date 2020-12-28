package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.IbzAgent;
import cn.ibizlab.pms.core.ibiz.mapper.IbzAgentMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author wulonghu
 */
@Component
@Slf4j
public class IbzAgentHelper extends ZTBaseHelper<IbzAgentMapper, IbzAgent> {

    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzAgent et) {
        throw new RuntimeException("未实现");
    }
}
