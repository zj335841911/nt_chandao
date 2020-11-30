package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.report.domain.IbzDaily;
import cn.ibizlab.pms.core.report.mapper.IbzDailyMapper;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;


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

    String[] diffAttrs = {"worktoday", "comment", "planstomorrow"};

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzDaily et) {
        String files = et.getFiles();
        et.setIbzdailyname(et.getAccount() + " " + et.getDate() + "的日报");
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
//        actionHelper.sendToread(et.getId(), et.getTitle(), noticeusers, et.getAssignedto(), et.getMailto(), IBugService.OBJECT_TEXT_NAME, StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, strActionText);
        return et;
    }
}

