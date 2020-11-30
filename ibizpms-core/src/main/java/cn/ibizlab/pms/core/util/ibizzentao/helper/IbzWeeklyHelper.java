package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import cn.ibizlab.pms.core.report.mapper.IbzWeeklyMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;


@Component
@Slf4j
public class IbzWeeklyHelper  extends ZTBaseHelper<IbzWeeklyMapper, IbzWeekly>{
    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;
    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(IbzWeekly et) {


        String files = et.getFiles();
        if (!SqlHelper.retBool(this.baseMapper.insert(et))){
            return false;
        }
        fileHelper.updateObjectID(et.getIbzweeklyid(), StaticDict.File__object_type.WEEKLY.getValue(), files, "");
        actionHelper.create(StaticDict.Action__object_type.WEEKLY.getValue(), et.getIbzweeklyid(), StaticDict.Action__type.OPENED.getValue(), "", "", et.getCreateman() == null ? "admin" : et.getCreateman(), true);
        return true;
    }


//    @Override
//    @Transactional(rollbackFor = Exception.class)
    public IbzWeekly submit(IbzWeekly et){
        return null;
    }
}
