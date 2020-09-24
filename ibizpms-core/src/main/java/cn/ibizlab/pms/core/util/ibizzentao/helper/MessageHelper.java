package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.Im_message;
import cn.ibizlab.pms.core.zentao.mapper.Im_messageMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Slf4j
public class MessageHelper extends ServiceImpl<Im_messageMapper, Im_message> {

    @Transactional
    public Im_message get(Long key) {
        Im_message et = getById(key);
        if (et == null) {
            et = new Im_message();
            et.setId(key);
        } else {
        }
        return et;
    }

    @Transactional
    public boolean create(Im_message et) {
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Transactional
    public boolean internalUpdate(Im_message et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(Im_message et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    /**
     * delete 删除
     *
     * @param key
     * @return
     */
    @Transactional
    public boolean delete(Long key) {
        boolean result = removeById(key);
        return result;
    }


    @Transactional
    public void send(String objectType, Long objectID, String actionType, Long actionID, String actor )
    {
        //全局配置
        JSONObject setting = new JSONObject();
        log.info("发送消息：未实现。");
    }
}