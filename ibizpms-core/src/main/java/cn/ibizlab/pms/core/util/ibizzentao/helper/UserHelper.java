package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
@Slf4j
public class UserHelper extends ZTBaseHelper<UserMapper, User> {
    @Autowired
    ActionHelper actionHelper;
    public boolean login(String username) {
        actionHelper.create(StaticDict.Action__object_type.USER.getValue(), 0l, StaticDict.Action__type.LOGIN.getValue(), "", "", username, true);
        return true;
    }


}
