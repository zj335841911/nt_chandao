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
        if (hasId()) {
            CachedBeanCopier.copy(get(et.getIbzdailyid()), et);
        }
        fileHelper.updateObjectID(et.getIbzdailyid(), StaticDict.File__object_type.DAILY.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
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


    public IbzDaily submit(IbzDaily et){
       return et;
    }
}
