package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
@Slf4j
public class UserHelper extends ZTBaseHelper<UserMapper, User> {
    @Autowired
    ActionHelper actionHelper;
    public boolean login(String username) {
        actionHelper.create("user", 0l, "login", "", "", username, true);
        return true;
    }


}
