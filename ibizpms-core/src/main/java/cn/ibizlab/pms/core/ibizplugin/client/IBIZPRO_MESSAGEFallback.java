package cn.ibizlab.pms.core.ibizplugin.client;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import cn.ibizlab.pms.core.ibizplugin.domain.IBIZProMessage;
import cn.ibizlab.pms.core.ibizplugin.filter.IBIZProMessageSearchContext;
import org.springframework.stereotype.Component;

/**
 * 实体[IBIZPRO_MESSAGE] 服务对象接口
 */
@Component
public class IBIZPRO_MESSAGEFallback implements IBIZPRO_MESSAGEFeignClient {

    public Page<IBIZProMessage> select() {
        return null;
    }

    public IBIZProMessage create(IBIZProMessage ibizpromessage) {
        return null;
    }
    public Boolean createBatch(List<IBIZProMessage> ibizpromessages) {
        return false;
    }

    public IBIZProMessage update(String ibizpro_messageid, IBIZProMessage ibizpromessage) {
        return null;
    }
    public Boolean updateBatch(List<IBIZProMessage> ibizpromessages) {
        return false;
    }


    public Boolean remove(String ibizpro_messageid) {
        return false;
    }
    public Boolean removeBatch(Collection<String> idList) {
        return false;
    }

    public IBIZProMessage get(String ibizpro_messageid) {
        return null;
    }


    public String getByCodeName(String codeName) {
            return null;
    }


    public IBIZProMessage getDraft(){
        return null;
    }



    public Boolean checkKey(IBIZProMessage ibizpromessage) {
        return false;
    }


    public IBIZProMessage markDone( String ibizpro_messageid, IBIZProMessage ibizpromessage) {
        return null;
    }

    public IBIZProMessage markRead( String ibizpro_messageid, IBIZProMessage ibizpromessage) {
        return null;
    }

    public Boolean save(IBIZProMessage ibizpromessage) {
        return false;
    }
    public Boolean saveBatch(List<IBIZProMessage> ibizpromessages) {
        return false;
    }

    public IBIZProMessage send( String ibizpro_messageid, IBIZProMessage ibizpromessage) {
        return null;
    }

    public Page<IBIZProMessage> searchDefault(IBIZProMessageSearchContext context) {
        return null;
    }


}
