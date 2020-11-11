package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.service.ISysEmployeeService;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;


@Component
@Slf4j
public class UserHelper extends ZTBaseHelper<UserMapper, User> {
    @Autowired
    ActionHelper actionHelper;

    @Autowired
    ISysEmployeeService sysEmployeeService;

    public boolean login(String username) {
        actionHelper.create(StaticDict.Action__object_type.USER.getValue(), 0l, StaticDict.Action__type.LOGIN.getValue(), "", "", username, true);
        return true;
    }

    public String ccUsers(String noticeUsers) {
        SysEmployeeSearchContext sysEmployeeSearchContext = new SysEmployeeSearchContext();
        sysEmployeeSearchContext.setN_username_in(noticeUsers);
        sysEmployeeSearchContext.setN_username_notin(AuthenticationUser.getAuthenticationUser().getUsername());
        Page<SysEmployee> pages = sysEmployeeService.searchDefault(sysEmployeeSearchContext);
        String users = "";
        for(SysEmployee sysEmployee : pages.getContent()) {
            if(!"".equals(users)) {
                users += ",";
            }
            users += sysEmployee.getUserid();
        }
        return users;
    }

    public String toUser(String assignedto) {
        SysEmployeeSearchContext sysEmployeeSearchContext = new SysEmployeeSearchContext();
        sysEmployeeSearchContext.setN_username_eq(assignedto);
        sysEmployeeSearchContext.setN_username_notin(AuthenticationUser.getAuthenticationUser().getUsername());
        Page<SysEmployee> pages = sysEmployeeService.searchDefault(sysEmployeeSearchContext);
        if(pages.getContent().size() > 0) {
            return pages.getContent().get(0).getUserid();
        }
        return "";
    }


}
