package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.service.impl.SysEmployeeServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TeamHelper;
import cn.ibizlab.pms.core.zentao.domain.Team;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@Primary
@Service("SysEmployeeExService")
public class SysEmployeeExService extends SysEmployeeServiceImpl {

    @Autowired
    TeamHelper teamHelper;

    @Autowired
    ITaskService iTaskService;

    @Override
    public Page<SysEmployee> searchDefault(SysEmployeeSearchContext context) {
        log.info("SysEmployeeExService：searchDefault");
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchBugUser(SysEmployeeSearchContext context) {
        Map<String,Object> params = context.getParams();
        log.info("SysEmployeeExService：searchBugUser");
        if(params.get("project") != null && !"0".equals(params.get("project"))) {
            // 项目团队
            log.info("SysEmployeeExService：searchBugUser-" + params.get("project").toString());
            context.setN_username_in(getAccounts(StaticDict.Team__type.PROJECT.getValue(), params.get("project")));
        }
        Page<SysEmployee> page = super.searchDefault(context);
        return page;
    }

    @Override
    public Page<SysEmployee> searchProjectTeamM(SysEmployeeSearchContext context) {
        log.info("SysEmployeeExService：searchProjectTeamM");
        Map<String,Object> params = context.getParams();
        if(params.get("srfparentkey") != null && !"0".equals(params.get("srfparentkey"))) {
            // 项目团队
            context.setN_username_notin(getAccounts(StaticDict.Team__type.PROJECT.getValue(), params.get("srfparentkey"), params.get("account") != null ?  params.get("account").toString() : null));

        }
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchProjectTeamUser(SysEmployeeSearchContext context) {
        log.info("SysEmployeeExService：searchProjectTeamUser");
        Map<String,Object> params = context.getParams();
        if(params.get("project") != null && !"0".equals(params.get("project"))) {
            // 项目团队
            context.setN_username_in(getAccounts(StaticDict.Team__type.PROJECT.getValue(), params.get("project")));
            if(params.get("account") != null) {
                context.setN_username_notin(params.get("account").toString().replace(",",";"));
            }

        }
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchProjectTeamUser_Task(SysEmployeeSearchContext context) {
        log.info("SysEmployeeExService：searchProjectTeamUser_Task");
        Map<String,Object> params = context.getParams();
        if(params.get("srfparentkey") != null && !"0".equals(params.get("srfparentkey"))) {
            // 项目团队
            context.setN_username_in(getAccounts(StaticDict.Team__type.PROJECT.getValue(), iTaskService.get(Long.parseLong(params.get("srfparentkey").toString())).getProject()));
            if(params.get("account") != null) {
                context.setN_username_notin(params.get("account").toString().replace(",",";"));
            }
        }
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchTaskMTeam(SysEmployeeSearchContext context) {
        log.info("SysEmployeeExService：searchTaskTeam");
        Map<String,Object> params = context.getParams();
        if((params.get("multiple") == null && params.get("project") != null) || (params.get("multiple") != null && "0".equals(params.get("multiple")))) {
            // 项目团队
            log.info("SysEmployeeExService：SysEmployeeExService-" + params.get("project").toString());
            context.setN_username_in(getAccounts(StaticDict.Team__type.PROJECT.getValue(), params.get("project")));
        }else {
            // 任务团队
            log.info("SysEmployeeExService：SysEmployeeExService-" + params.get("id").toString());
            if(teamHelper.list(new QueryWrapper<Team>().eq("type", StaticDict.Team__type.TASK.getValue()).gt("`left`", 0).notIn("account", AuthenticationUser.getAuthenticationUser().getLoginname()).eq("root", params.get("id").toString())).size() == 0) {
                context.setN_username_in(getAccounts(StaticDict.Team__type.PROJECT.getValue(), params.get("project")));
            }else {
                context.setN_username_in(getAccounts(StaticDict.Team__type.TASK.getValue(), params.get("id")));
            }
        }
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchTaskTeam(SysEmployeeSearchContext context) {
        log.info("SysEmployeeExService：searchTaskTeam");
        Map<String,Object> params = context.getParams();
        if((params.get("multiple") == null && params.get("project") != null) || (params.get("multiple") != null && "0".equals(params.get("multiple")))) {
            // 项目团队
            log.info("SysEmployeeExService：SysEmployeeExService-" + params.get("project").toString());
            context.setN_username_in(getAccounts(StaticDict.Team__type.PROJECT.getValue(), params.get("project")));
        }else {
            // 任务团队
            log.info("SysEmployeeExService：SysEmployeeExService-" + params.get("id").toString());
            context.setN_username_in(getAccounts(StaticDict.Team__type.TASK.getValue(), params.get("id")));
        }
        return super.searchDefault(context);
    }

    public String getAccounts(String type, Object root) {
        String accounts = "";
        List<Team> list = teamHelper.list(new QueryWrapper<Team>().eq("type", type).eq("root", root));

        for(Team team : list) {
            if(!"".equals(accounts)) {
                accounts += ";";
            }
            accounts += team.getAccount();
        }
        return accounts;
    }

    public String getAccounts(String type, Object root, String account) {
        String accounts = "";
        List<Team> list = teamHelper.list(new QueryWrapper<Team>().eq("type", type).eq("root", root));

        for(Team team : list) {
            if(account == null || !team.getAccount().equals(account)) {
                if (!"".equals(accounts)) {
                    accounts += ";";
                }
                accounts += team.getAccount();
            }
        }
        return accounts;
    }
}
