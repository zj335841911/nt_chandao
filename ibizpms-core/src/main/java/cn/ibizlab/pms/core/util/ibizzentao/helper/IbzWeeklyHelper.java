package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.service.ISysEmployeeService;
import cn.ibizlab.pms.core.report.domain.IbzDaily;
import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import cn.ibizlab.pms.core.report.mapper.IbzWeeklyMapper;
import cn.ibizlab.pms.core.report.service.IIbzDailyService;
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
import liquibase.pro.packaged.c;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Component
@Slf4j
public class IbzWeeklyHelper  extends ZTBaseHelper<IbzWeeklyMapper, IbzWeekly>{
    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;
    @Autowired
    ISysEmployeeService iSysEmployeeService;
    String[] diffAttrs = {"workthisweek", "comment", "plannextweek"};


    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzWeekly et) {
        String files = et.getFiles();
        DateFormat dateFormat = new SimpleDateFormat("yyyyy-MM");
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        int week = calendar.get(Calendar.WEEK_OF_MONTH); //第几周
        et.setIbzweeklyname(String.format("%1$s-%2$s月第%3$s周的周报" ,et.getIbzweeklyname(), dateFormat.format(et.getDate()),week));
        if (!SqlHelper.retBool(this.baseMapper.insert(et))){
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbzweeklyid()), et);
        fileHelper.updateObjectID(et.getIbzweeklyid(), StaticDict.File__object_type.WEEKLY.getValue(), files, "");
        actionHelper.create(StaticDict.Action__object_type.WEEKLY.getValue(), et.getIbzweeklyid(), StaticDict.Action__type.OPENED.getValue(), "", "", et.getCreateman() == null ? "admin" : et.getCreateman(), true);
        return true;
    }


    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(IbzWeekly et) {
        IbzDaily old = new IbzDaily();
        CachedBeanCopier.copy(get(et.getIbzweeklyid()), old);
        String files = et.getFiles();
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("Ibz_dailyid", et.getIbzweeklyid()))) {
            return false;
        }

        CachedBeanCopier.copy(get(et.getIbzweeklyid()), et);

        fileHelper.updateObjectID(et.getIbzweeklyid(), StaticDict.File__object_type.WEEKLY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et, null, null, diffAttrs);
        if (changes.size() > 0) {
            String strAction = StaticDict.Action__type.EDITED.getValue();
            Action action = actionHelper.create(StaticDict.Action__object_type.WEEKLY.getValue(), et.getIbzweeklyid(), strAction,
                    "", "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzWeekly submit(IbzWeekly et) {
        et.setIssubmit(StaticDict.YesNo.ITEM_1.getValue());
        IbzDaily old = new IbzDaily();
        CachedBeanCopier.copy(get(et.getIbzweeklyid()), old);
        String files = et.getFiles();
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("Ibz_dailyid", et.getIbzweeklyid()))) {
            return et;
        }
        CachedBeanCopier.copy(get(et.getIbzweeklyid()), et);
        fileHelper.updateObjectID(et.getIbzweeklyid(), StaticDict.File__object_type.WEEKLY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et, null, null, diffAttrs);
        if (changes.size() > 0) {
            String strAction = StaticDict.Action__type.SUBMIT.getValue();
            Action action = actionHelper.create(StaticDict.Action__object_type.WEEKLY.getValue(), et.getIbzweeklyid(), strAction,
                    "", "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        // 给汇报人，抄送人 待阅
        actionHelper.sendToread(et.getIbzweeklyid(), et.getIbzweeklyname(), "", et.getReportto(), et.getMailto(), IIbzDailyService.OBJECT_TEXT_NAME, StaticDict.Action__object_type.WEEKLY.getValue(), IIbzDailyService.OBJECT_SOURCE_PATH, StaticDict.Action__type.SUBMIT.getText());
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzWeekly createEveryWeekReport(IbzWeekly et){
        SysEmployeeSearchContext sysEmployeeSearchContext = new SysEmployeeSearchContext();
        String notAccount = notAccount();
        if(!"".equals(notAccount)) {
            sysEmployeeSearchContext.setN_username_notin(notAccount);
        }
        sysEmployeeSearchContext.setSize(1000);
        Page<SysEmployee> page = iSysEmployeeService.searchDefault(sysEmployeeSearchContext);
        List<SysEmployee> list = page.getContent();
        Timestamp now = ZTDateUtil.now();
        for(SysEmployee sysEmployee : list) {
            IbzWeekly ibzWeekly = new IbzWeekly();
            ibzWeekly.setIbzweeklyname(sysEmployee.getPersonname());
            ibzWeekly.setAccount(sysEmployee.getUsername());
            ibzWeekly.setDate(now);
            ibzWeekly.setIssubmit(StaticDict.YesNo.ITEM_0.getValue());
            ibzWeekly.setReportstatus(StaticDict.ReportStatus.ITEM_0.getValue());
            this.create(ibzWeekly);
        }
        return et;
    }

    public String notAccount() {
        Date today = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = sdf.format(today);
        try {
            today = sdf.parse(strDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }


        Calendar c=Calendar.getInstance();
        c.setTime(today);
        int weekday=c.get(Calendar.DAY_OF_WEEK);  //今天是周几
        c.add(Calendar.DAY_OF_MONTH,weekday == 0 ? 0 : (8-weekday));
        Date sunday = c.getTime();
        c.add(Calendar.DAY_OF_MONTH,-6);
        Date monday = c.getTime();

//        String sql = String.format(" where date >= %1$s && date <= %2$s",monday,sunday);
        String notaccount = "";
//        List<IbzWeekly> list = this.list(new QueryWrapper<IbzWeekly>().last(" where DATE_FORMAT(date,'%Y-%m-%d') >= DATE_FORMAT("+monday+",'%Y-%m-%d') && DATE_FORMAT(date,'%Y-%m-%d') <= DATE_FORMAT("+sunday+",'%Y-%m-%d')"));
        List<IbzWeekly> list = this.list(new QueryWrapper<IbzWeekly>().last("where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date"));
        for(IbzWeekly ibzWeekly : list) {
            long date = ibzWeekly.getDate().getTime();
            if (date >= monday.getTime() && date <= sunday.getTime()) {
                if ("".equals(notaccount)) {
                    notaccount += ibzWeekly.getAccount();
                    continue;
                }
                notaccount += ";" + ibzWeekly.getAccount();
            }
        }

        return notaccount;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzWeekly haveRead(IbzWeekly et) {
        CachedBeanCopier.copy(get(et.getIbzweeklyid()), et);
        List<Action> list = actionHelper.list(new QueryWrapper<Action>().eq("objecttype", StaticDict.Action__object_type.WEEKLY.getValue()).eq("action", StaticDict.Action__type.READ.getValue()).eq("actor", AuthenticationUser.getAuthenticationUser().getUsername()).eq("objectid", et.getIbzweeklyid()));
        if(list.size() == 0) {
            actionHelper.create(StaticDict.Action__object_type.WEEKLY.getValue(), et.getIbzweeklyid(), StaticDict.Action__type.READ.getValue(), "", "", null, true);
        }
        return et;
    }
}
