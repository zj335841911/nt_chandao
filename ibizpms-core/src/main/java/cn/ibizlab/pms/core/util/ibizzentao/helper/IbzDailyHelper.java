package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.service.ISysEmployeeService;
import cn.ibizlab.pms.core.report.domain.IbzDaily;
import cn.ibizlab.pms.core.report.domain.IbzReportRoleConfig;
import cn.ibizlab.pms.core.report.mapper.IbzDailyMapper;
import cn.ibizlab.pms.core.report.service.IIbzDailyService;
import cn.ibizlab.pms.core.report.service.IIbzReportRoleConfigService;
import cn.ibizlab.pms.core.uaa.domain.SysUserRole;
import cn.ibizlab.pms.core.uaa.filter.SysUserRoleSearchContext;
import cn.ibizlab.pms.core.uaa.service.ISysUserRoleService;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.util.dict.StaticDict;
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
 * @author 胡维
 */

@Component
@Slf4j
public class IbzDailyHelper extends ZTBaseHelper<IbzDailyMapper, IbzDaily> {
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

    String[] diffAttrs = {"worktoday", "comment", "planstomorrow"};

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzDaily et) {
        String files = et.getFiles();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        et.setIbzdailyname(String.format("%1$s-%2$s的日报", et.getIbzdailyname(), dateFormat.format(et.getDate())));
        if (!SqlHelper.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbzdailyid()), et);
        fileHelper.updateObjectID(et.getIbzdailyid(), StaticDict.File__object_type.DAILY.getValue(), files, "");
        actionHelper.create(StaticDict.Action__object_type.DAILY.getValue(), et.getIbzdailyid(), StaticDict.Action__type.OPENED.getValue(), "", "", null, true);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(IbzDaily et) {
        IbzDaily old = new IbzDaily();
        CachedBeanCopier.copy(get(et.getIbzdailyid()), old);
        String files = et.getFiles();
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("Ibz_dailyid", et.getIbzdailyid()))) {
            return false;
        }

        CachedBeanCopier.copy(get(et.getIbzdailyid()), et);

        fileHelper.updateObjectID(et.getIbzdailyid(), StaticDict.File__object_type.DAILY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et, null, null, diffAttrs);
        if (changes.size() > 0) {
            String strAction = StaticDict.Action__type.EDITED.getValue();
            Action action = actionHelper.create(StaticDict.Action__object_type.DAILY.getValue(), et.getIbzdailyid(), strAction,
                    "", "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzDaily submit(IbzDaily et) {
        et.setIssubmit(StaticDict.YesNo.ITEM_1.getValue());
        IbzDaily old = new IbzDaily();
        CachedBeanCopier.copy(get(et.getIbzdailyid()), old);
        String files = et.getFiles();
        et.setSubmittime(ZTDateUtil.now());
        boolean flag = (old.getWorktoday() == null && old.getTodaytask() == null) || old.getReportto() == null;
        if(flag) {
            throw new RuntimeException("请填写今日工作或今日完成任务并且指定汇报人后提交！");
        }
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("Ibz_dailyid", et.getIbzdailyid()))) {
            return et;
        }
        CachedBeanCopier.copy(get(et.getIbzdailyid()), et);
        fileHelper.updateObjectID(et.getIbzdailyid(), StaticDict.File__object_type.DAILY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et, null, null, diffAttrs);
        if (changes.size() > 0) {
            String strAction = StaticDict.Action__type.SUBMIT.getValue();
            Action action = actionHelper.create(StaticDict.Action__object_type.DAILY.getValue(), et.getIbzdailyid(), strAction,
                    "", "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        // 给汇报人，抄送人 待阅
        actionHelper.sendToread(et.getIbzdailyid(), et.getIbzdailyname(), "", et.getReportto(), et.getMailto(), IIbzDailyService.OBJECT_TEXT_NAME, StaticDict.Action__object_type.DAILY.getValue(), IIbzDailyService.OBJECT_SOURCE_PATH, StaticDict.Action__type.SUBMIT.getText());
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzDaily haveRead(IbzDaily et) {
        CachedBeanCopier.copy(get(et.getIbzdailyid()), et);
        String curAccount = AuthenticationUser.getAuthenticationUser().getUsername();
        if (curAccount == null) {
            return et;
        }
        boolean exits = curAccount.equals(et.getReportto()) || (et.getMailto() != null && et.getMailto().contains(curAccount));
        if(exits) {
            List<Action> list = actionHelper.list(new QueryWrapper<Action>().eq("objecttype", StaticDict.Action__object_type.DAILY.getValue()).eq("action", StaticDict.Action__type.READ.getValue()).eq("actor", AuthenticationUser.getAuthenticationUser().getUsername()).eq("objectid", et.getIbzdailyid()));
            if (list.size() == 0) {
                actionHelper.create(StaticDict.Action__object_type.DAILY.getValue(), et.getIbzdailyid(), StaticDict.Action__type.READ.getValue(), "", "", null, true);
            }
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzDaily createUserDaily(IbzDaily et) {
        List<IbzReportRoleConfig> reportRoleConfigList = iIbzReportRoleConfigService.list(new QueryWrapper<IbzReportRoleConfig>().eq(ZTBaseHelper.FIELD_TYPE, StaticDict.ReportType.DAILY.getValue()).orderByDesc("updatedate"));
        if (reportRoleConfigList.size() == 0 || reportRoleConfigList.get(0).getReportRole() == null) {
            return et;
        }
        String[] roleIds = reportRoleConfigList.get(0).getReportRole().split(",");
        for (String roleId : roleIds) {
            SysUserRoleSearchContext sysUserRoleSearchContext = new SysUserRoleSearchContext();
            sysUserRoleSearchContext.setN_sys_roleid_eq(roleId);
            Page<SysUserRole> sysUserRoles = iSysUserRoleService.searchDefault(sysUserRoleSearchContext);
            List<SysUserRole> sysUserRoleList = sysUserRoles.getContent();
            if (sysUserRoleList.size() == 0) {
                continue;
            }
            String account = "";
            for (SysUserRole sysUserRole : sysUserRoleList) {
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
                IbzDaily ibzDaily = new IbzDaily();
                ibzDaily.setIbzdailyname(sysEmployee.getPersonname());
                ibzDaily.setAccount(sysEmployee.getUsername());
                ibzDaily.setDate(now);
                ibzDaily.setIssubmit(StaticDict.YesNo.ITEM_0.getValue());
                ibzDaily.setReportstatus(StaticDict.ReportStatus.ITEM_0.getValue());
                this.create(ibzDaily);
            }
        }
        return et;
    }

    public String notAccount() {
        String notaccount = "";
        List<IbzDaily> list = this.list(new QueryWrapper<IbzDaily>().last(" where DATE_FORMAT(date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d')"));
        for (IbzDaily ibzDaily : list) {
            if ("".equals(notaccount)) {
                notaccount += ibzDaily.getAccount();
                continue;
            }
            notaccount += ";" + ibzDaily.getAccount();
        }

        return notaccount;
    }

    public IbzDaily pushUserDaily(IbzDaily et) {
        List<IbzDaily> list = this.list(new QueryWrapper<IbzDaily>().eq("issubmit", StaticDict.YesNo.ITEM_0.getValue()).last(" and DATE_FORMAT(date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d')"));
        for (IbzDaily ibzDaily : list) {
            actionHelper.sendToread(ibzDaily.getIbzdailyid(), "您的"+ibzDaily.getDate()+"的日报还未提交，请及时填写！", ibzDaily.getAccount(), "", "", IIbzDailyService.OBJECT_TEXT_NAME, StaticDict.Action__object_type.DAILY.getValue(), IIbzDailyService.OBJECT_SOURCE_PATH, StaticDict.Action__type.REMIND.getText());
        }

        return et;
    }
}

