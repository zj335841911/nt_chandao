package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.service.ISysEmployeeService;
import cn.ibizlab.pms.core.report.domain.IbzDaily;
import cn.ibizlab.pms.core.report.domain.IbzMonthly;
import cn.ibizlab.pms.core.report.domain.IbzReportRoleConfig;
import cn.ibizlab.pms.core.report.mapper.IbzMonthlyMapper;
import cn.ibizlab.pms.core.report.service.IIbzMonthlyService;
import cn.ibizlab.pms.core.report.service.IIbzReportRoleConfigService;
import cn.ibizlab.pms.core.uaa.domain.SysUserRole;
import cn.ibizlab.pms.core.uaa.filter.SysUserRoleSearchContext;
import cn.ibizlab.pms.core.uaa.service.ISysUserRoleService;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * @author 吴龙虎
 */

@Component
@Slf4j
public class IbzMonthlyHelper extends ZTBaseHelper<IbzMonthlyMapper, IbzMonthly> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    ISysEmployeeService iSysEmployeeService;

    @Autowired
    IIbzReportRoleConfigService iIbzReportRoleConfigService;

    @Autowired
    ISysUserRoleService iSysUserRoleService;

    String[] diffAttrs = {"workthismonth", "comment", "plansnextmonth"};

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzMonthly et) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM");
        List<IbzMonthly> monthlyList = this.list(new QueryWrapper<IbzMonthly>().eq("account", et.getAccount()).last(" and DATE_FORMAT(date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m')"));
        if (monthlyList.size() > 0) {
            throw new BadRequestAlertException("你的" + dateFormat.format(et.getDate()) + "的月报已经存在，请勿重复创建！", StaticDict.ReportType.MONTHLY.getValue(), "");
        }

        et.setIbzmonthlyname(String.format("%1$s-%2$s的月报" ,et.getIbzmonthlyname(), dateFormat.format(et.getDate())));
        String files = et.getFiles();
        if (!SqlHelper.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), et);
        fileHelper.updateObjectID(et.getIbzmonthlyid(), StaticDict.File__object_type.MONTHLY.getValue(), files, "");
        actionHelper.create(StaticDict.Action__object_type.MONTHLY.getValue(), et.getIbzmonthlyid(), StaticDict.Action__type.OPENED.getValue(), "", "", null, true);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(IbzMonthly et) {
        IbzMonthly old = new IbzMonthly();
        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), old);
        String files = et.getFiles();
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("Ibz_monthlyid", et.getIbzmonthlyid()))) {
            return false;
        }

        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), et);

        fileHelper.updateObjectID(et.getIbzmonthlyid(), StaticDict.File__object_type.MONTHLY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
        if (changes.size() > 0) {
            String strAction = StaticDict.Action__type.EDITED.getValue();
            Action action = actionHelper.create(StaticDict.Action__object_type.MONTHLY.getValue(), et.getIbzmonthlyid(), strAction,
                    "", "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzMonthly submit(IbzMonthly et) {
        et.setIssubmit(StaticDict.YesNo.ITEM_1.getValue());
        IbzMonthly old = new IbzMonthly();
        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), old);
        String files = et.getFiles();
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("Ibz_monthlyid", et.getIbzmonthlyid()))) {
            return et;
        }
        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), et);
        fileHelper.updateObjectID(et.getIbzmonthlyid(), StaticDict.File__object_type.MONTHLY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et, null, null, diffAttrs);
        if (changes.size() > 0) {
            String strAction = StaticDict.Action__type.SUBMIT.getValue();
            Action action = actionHelper.create(StaticDict.Action__object_type.MONTHLY.getValue(), et.getIbzmonthlyid(), strAction,
                    "", "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }

        // 给汇报人，抄送人 发送待阅
        actionHelper.sendToread(et.getIbzmonthlyid(), et.getIbzmonthlyname(), "", et.getReportto(), et.getMailto(), IIbzMonthlyService.OBJECT_TEXT_NAME, StaticDict.Action__object_type.MONTHLY.getValue(), IIbzMonthlyService.OBJECT_SOURCE_PATH, StaticDict.Action__type.SUBMIT.getText());
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzMonthly haveRead(IbzMonthly et) {
        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), et);
        List<Action> list = actionHelper.list(new QueryWrapper<Action>().eq("objecttype", StaticDict.Action__object_type.MONTHLY.getValue()).eq("action", StaticDict.Action__type.READ.getValue()).eq("actor", AuthenticationUser.getAuthenticationUser().getUsername()).eq("objectid", et.getIbzmonthlyid()));
        if (list.size() == 0) {
            actionHelper.create(StaticDict.Action__object_type.MONTHLY.getValue(), et.getIbzmonthlyid(), StaticDict.Action__type.READ.getValue(), "", "", null, true);
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzMonthly createUserMonthly(IbzMonthly et) {
        // 月报角色 遍历角色
        List<IbzReportRoleConfig> iIbzReportRoleConfigList = iIbzReportRoleConfigService.list(new QueryWrapper<IbzReportRoleConfig>().eq("type", StaticDict.ReportType.MONTHLY.getValue()).orderByDesc("updatedate"));

        if(iIbzReportRoleConfigList.size() == 0 || iIbzReportRoleConfigList.get(0).getReportRole() == null) {
            return et;
        }
        String[] roleIds = iIbzReportRoleConfigList.get(0).getReportRole().split(",");

        for (String roleId : roleIds) {
            SysUserRoleSearchContext sysUserRoleSearchContext = new SysUserRoleSearchContext();
            sysUserRoleSearchContext.setN_sys_roleid_eq(roleId);
            Page<SysUserRole> userRolePage = iSysUserRoleService.searchDefault(sysUserRoleSearchContext);
            List<SysUserRole> userRoleList = userRolePage.getContent();
            if (userRoleList.size() == 0) {
                continue;
            }
            String account = "";
            for (SysUserRole sysUserRole : userRoleList) {
                if (sysUserRole.getLoginname() == null) {
                    continue;
                }
                if ("".equals(account)) {
                    account += sysUserRole.getLoginname();
                    continue;
                }
                account += ";" + sysUserRole.getLoginname();
            }
            if ("".equals(account)) {
                continue;
            }

            SysEmployeeSearchContext sysEmployeeSearchContext = new SysEmployeeSearchContext();
            String notAccount = notAccount();
            if (!"".equals(notAccount)) {
                sysEmployeeSearchContext.setN_username_notin(notAccount);
            }
            sysEmployeeSearchContext.setN_username_in(account);
            sysEmployeeSearchContext.setSize(1000);
            Page<SysEmployee> page = iSysEmployeeService.searchDefault(sysEmployeeSearchContext);
            List<SysEmployee> list = page.getContent();
            Timestamp now = ZTDateUtil.now();
            for (SysEmployee sysEmployee : list) {
                IbzMonthly ibzMonthly = new IbzMonthly();
                ibzMonthly.setIbzmonthlyname(sysEmployee.getPersonname());
                ibzMonthly.setAccount(sysEmployee.getUsername());
                ibzMonthly.setDate(now);
                ibzMonthly.setIssubmit(StaticDict.YesNo.ITEM_0.getValue());
                ibzMonthly.setReportstatus(StaticDict.ReportStatus.ITEM_0.getValue());
                this.create(ibzMonthly);
            }
        }
        return et;
    }

    private String notAccount() {
        String notaccount = "";
        List<IbzMonthly> list = this.list(new QueryWrapper<IbzMonthly>().last(" where DATE_FORMAT(date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m')"));
        for (IbzMonthly ibzMonthly : list) {
            if ("".equals(notaccount)) {
                notaccount += ibzMonthly.getAccount();
                continue;
            }
            notaccount += ";" + ibzMonthly.getAccount();
        }

        return notaccount;
    }

    @Transactional
    public IbzMonthly pushUserMonthly(IbzMonthly et) {
        List<IbzMonthly> list = this.list(new QueryWrapper<IbzMonthly>().last(" where issubmit = '0' and DATE_FORMAT(date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m')"));
        for (IbzMonthly ibzMonthly : list) {
            actionHelper.sendToread(ibzMonthly.getIbzmonthlyid(), ibzMonthly.getIbzmonthlyname(), ibzMonthly.getAccount(), "", "", IIbzMonthlyService.OBJECT_TEXT_NAME, StaticDict.Action__object_type.MONTHLY.getValue(), IIbzMonthlyService.OBJECT_SOURCE_PATH, StaticDict.Action__type.REMIND.getText());
        }
        return et;
    }
}
