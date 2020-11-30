package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.report.domain.IbzMonthly;
import cn.ibizlab.pms.core.report.mapper.IbzMonthlyMapper;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

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

    String[] diffAttrs = {"workthismonth", "comment", "plansnextmonth"};

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzMonthly et) {
        et.setDate(et.getCreatedate());
        et.setAccount(AuthenticationUser.getAuthenticationUser().getPersonname());
        et.setIbzmonthlyname(et.getAccount() + "的月报-" + et.getDate());
        if (et.getIssubmit() == null) {
            et.setIssubmit("0");
        }
        String files = et.getFiles();
        if (!SqlHelper.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), et);
        fileHelper.updateObjectID(et.getIbzmonthlyid(), StaticDict.File__object_type.MONTHLY.getValue(), files, "");
        actionHelper.create(StaticDict.Action__object_type.MONTHLY.getValue(), et.getIbzmonthlyid(), StaticDict.Action__type.OPENED.getValue(), "", "", et.getCreateman() == null ? "admin" : et.getCreateman(), true);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(IbzMonthly et) {
        IbzMonthly old = new IbzMonthly();
        CachedBeanCopier.copy(get(et.getIbzmonthlyid()), old);
        String files = et.getFiles();
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("Ibz_dailyid", et.getIbzmonthlyid()))) {
            return false;
        }
        if (hasId()) {
            CachedBeanCopier.copy(get(et.getIbzmonthlyid()), et);
        }
        fileHelper.updateObjectID(et.getIbzmonthlyid(), StaticDict.File__object_type.DAILY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
        if (changes.size() > 0) {
            String strAction = StaticDict.Action__type.EDITED.getValue();
            Action action = actionHelper.create(StaticDict.Action__object_type.DAILY.getValue(), et.getIbzmonthlyid(), strAction,
                    "", "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public IbzMonthly submit(IbzMonthly et) {
        return et;
    }
}
