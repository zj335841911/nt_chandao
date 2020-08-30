package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.filter.UserSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.core.zentao.service.logic.impl.TodoGetTODOTitleLogicImpl;
import cn.ibizlab.pms.util.domain.EntityBase;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import liquibase.pro.packaged.S;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import rx.internal.operators.SingleTakeUntilCompletable;

import java.math.BigInteger;
import java.util.*;

/**
 * 解析业务实体中的发件人信息，
 * 包括 待办发送、消息发送等。
 */
@Slf4j
@Component
public class MsgDestParser {
    @Autowired
    public IUserService userService;

    public MsgDestParser() {
    }

    /**
     * 获取待办人员列表
     *
     * @param et 业务实体
     * @return 发送者id集合，多个用分号（,）隔开
     */
    public String getTaskUserIds(EntityBase et) {
        Set<String> accounts = null;
        if (et instanceof Story) {
            Story story = (Story) et;
            String assignedto = story.getAssignedto();
            String reviewedby = story.getReviewedby();
            accounts = getAccountSet(assignedto, reviewedby);

        } else if (et instanceof Bug) {
            Bug bug = (Bug) et;
            String assignedto = bug.getAssignedto();
            accounts = getAccountSet(assignedto);
        } else if (et instanceof Task){
            Task task = (Task)et;
            String assignedto = task.getAssignedto();
            accounts = getAccountSet(assignedto);

            //TODO 多人任务。
//            List<TaskTeam> team = task.getTaskteam();
//            Set<String> teamAccounts = new HashSet<>();
//            for(TaskTeam member: team){
//                teamAccounts.add(member.getAccount());
//            }
//            if(!CollectionUtils.isEmpty(teamAccounts)){
//                accounts = teamAccounts;
//            }

        }else if (et instanceof Todo){
            Todo todo = (Todo)et;
            String assignedto = todo.getAssignedto();
            accounts = getAccountSet(assignedto);
        }

        String ids = queryIds(accounts);
        log.info("发送待办IDs：[{}]", ids);
        return String.join(",", ids);
    }

    /**
     * 获取消息发送人员列表
     *
     * @param et 业务实体
     * @return 发送者id集合，多个用分号（,）隔开
     */
    public String getNoticeUserIds(EntityBase et) {

        String mailto = et.get("mailto")==null?null:String.valueOf(et.get("mailto"));

        String ids = queryIds(getAccountSet(mailto));
        log.info("发送通知IDs:[{}]", ids);
        return ids;
    }

    private String queryIds(Set<String> accountList) {
        if (CollectionUtils.isEmpty(accountList))
            return null;

        List<User> destIds = userService.list(new QueryWrapper<User>().in("account", accountList));

        if (CollectionUtils.isEmpty(destIds))
            return null;

        StringBuilder builder = new StringBuilder();
        for (User user : destIds) {
            builder.append(",").append(user.getId());
        }
        return builder.substring(1);
    }

    /**
     * 账户信息去重
     *
     * @param strings
     * @return
     */
    public static Set<String> getAccountSet(String... strings) {
        Set<String> set = new HashSet<>();
        if (strings == null)
            return null;

        for (int i = 0; i < strings.length; i++) {
            if (!StringUtils.isEmpty(strings[i])) {
                set.addAll(Arrays.asList(strings[i].split(",")));
            }
        }
        return set;
    }
}

