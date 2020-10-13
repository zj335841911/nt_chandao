package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.Im_message;
import cn.ibizlab.pms.core.zentao.mapper.Im_messageMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Slf4j
public class MessageHelper extends ZTBaseHelper<Im_messageMapper, Im_message> {

    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(Im_message et) {
        return this.internalUpdate(et);
    }


    @Transactional
    public void send(String objectType, Long objectID, String actionType, Long actionID, String actor) {
        //全局配置
        JSONObject setting = new JSONObject();
        log.info("发送消息：未实现。");
    }
}