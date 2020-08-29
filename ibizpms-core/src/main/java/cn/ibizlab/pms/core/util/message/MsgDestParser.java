package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.filter.UserSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.util.domain.EntityBase;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.math.BigInteger;

/**
 * 解析业务实体中的发件人信息，
 * 包括 代办发送、消息发送等。
 */
@Component
public class MsgDestParser {
    @Autowired
    public IUserService userService;
    public MsgDestParser() {
    }

    /**
     * 获取代办人员列表
     * @param et   业务实体
     * @return  发送者id集合，多个用分号（;）隔开
     */
    public String getTaskUserIds(EntityBase et){
        if(et instanceof Bug){
            Bug bug = (Bug)et;
            String destAccount =  bug.getAssignedto();
            if(StringUtils.isEmpty(destAccount)) {
                return null;
            }
            User dest= userService.getOne(new QueryWrapper<User>().eq("account",destAccount),false);
            if(dest!=null && dest.getId()!=null)
                return dest.getId().toString();

            return null;
        }else{
            //TODO
        }
        return null;
    }

    /**
     * 获取消息发送人员列表
     * @param et
     * @return
     */
    public String getNoticeUserIds(EntityBase et){
        //TODO
        return null;
    }
}
