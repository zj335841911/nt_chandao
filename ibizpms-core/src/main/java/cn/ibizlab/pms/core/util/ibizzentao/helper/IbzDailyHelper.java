package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.report.domain.IbzDaily;
import cn.ibizlab.pms.core.report.mapper.IbzDailyMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

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

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzDaily et) {
        String files = et.getFiles();
        if (!super.create(et)) {
            return false;
        }
        fileHelper.updateObjectID(et.getIbzdailyid(), StaticDict.File__object_type.DAILY.getValue(), files, "");
        actionHelper.create(StaticDict.Action__object_type.DAILY.getValue(), et.getIbzdailyid(), StaticDict.Action__type.OPENED.getValue(), "", "", et.getCreateman() == null ? "admin" : et.getCreateman(), true);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(IbzDaily et) {
        return super.edit(et);
    }
}
