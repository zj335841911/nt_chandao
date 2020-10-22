package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.errors.InternalServerErrorException;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.List;

@Component
@Slf4j
public class UserHelper extends ZTBaseHelper<UserMapper, User> {
    @Autowired
    ActionHelper actionHelper;
    public boolean login(User et) {
        actionHelper.create("user", et.getId(), "login", "", "", null, true);
        return true;
    }

    public User getUserInfo(String loginname) {
        if(StringUtils.isEmpty(loginname)){
            throw new InternalServerErrorException("账户名不能为空");
        }
        IUserService userService = SpringContextHolder.getBean(IUserService.class);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("account",loginname).or().eq("commiter", loginname);
//        //兼容测试环境及生产环境
//        queryWrapper.eq("account",loginname).or().like("commiter", loginname);
        List<User> users = userService.list(queryWrapper);

        User ztUser = null;
        if (CollectionUtils.isEmpty(users)) {

        } else if (users.size() > 1) {
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0012, null, null);
        } else {
            ztUser = users.get(0);
            //兼容测试及生产环境
            for(String commiter:ztUser.getCommiter().split(";")){
                if(loginname.equals(commiter)){
                    return ztUser;
                }
            }
            return null;
        }
        if (ztUser == null || ztUser.getCommiter() == null) {
            //（二期）没有对应账号，后台新建账号，再登录
            throw new BadRequestAlertException(ZenTaoMessage.MSG_ERROR_0010, null, null);
        }
        return ztUser;
    }
}
