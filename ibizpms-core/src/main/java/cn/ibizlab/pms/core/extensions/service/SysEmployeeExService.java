package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.service.impl.SysEmployeeServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TeamHelper;
import cn.ibizlab.pms.core.zentao.domain.Team;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
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

        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchBugUser(SysEmployeeSearchContext context) {
        Map<String,Object> params = context.getParams();
        if(params.get("project") != null && !"0".equals(params.get("project"))) {
            // 项目团队
            context.setN_username_in(getAccounts("project", params.get("project")));
        }
        Page<SysEmployee> page = super.searchDefault(context);
        return page;
    }

    @Override
    public Page<SysEmployee> searchProjectTeamM(SysEmployeeSearchContext context) {
        Map<String,Object> params = context.getParams();
        if(params.get("srfparentkey") != null && "0".equals(params.get("srfparentkey"))) {
            // 项目团队
            context.setN_username_notin(getAccounts("project", params.get("srfparentkey")));
        }
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchProjectTeamUser(SysEmployeeSearchContext context) {
        Map<String,Object> params = context.getParams();
        if(params.get("project") != null && "0".equals(params.get("project"))) {
            // 项目团队
            context.setN_username_in(getAccounts("project", params.get("project")));
        }
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchProjectTeamUser_Task(SysEmployeeSearchContext context) {
        Map<String,Object> params = context.getParams();
        if(params.get("srfparentkey") != null && "0".equals(params.get("srfparentkey"))) {
            // 项目团队
            context.setN_username_in(getAccounts("project", iTaskService.get(Long.parseLong(params.get("srfparentkey").toString()))));
        }
        return super.searchDefault(context);
    }

    @Override
    public Page<SysEmployee> searchTaskTeam(SysEmployeeSearchContext context) {
        Map<String,Object> params = context.getParams();
        if(params.get("multiple") != null && "0".equals(params.get("multiple"))) {
            // 项目团队
            context.setN_username_in(getAccounts("project", params.get("project")));
        }else {
            // 任务团队
            context.setN_username_in(getAccounts("task", params.get("id")));
        }
        return super.searchDefault(context);
    }

    public String getAccounts(String type, Object root) {
        String accounts = "";
        List<Team> list = teamHelper.list(new QueryWrapper<Team>().eq("type", type).eq("root", root));

        for(Team team : list) {
            if(!"".equals(accounts)) {
                accounts += ",";
            }
            accounts += team.getAccount();
        }
        return accounts;
    }
}
