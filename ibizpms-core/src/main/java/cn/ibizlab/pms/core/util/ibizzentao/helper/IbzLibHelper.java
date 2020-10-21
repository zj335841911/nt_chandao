package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.IbzLib;
import cn.ibizlab.pms.core.ibiz.mapper.IbzLibMapper;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.TestSuite;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class IbzLibHelper  extends ZTBaseHelper<IbzLibMapper, IbzLib>  {

    @Autowired
    TestSuiteHelper testSuiteHelper;

    @Autowired
    ActionHelper actionHelper;

    @Override
    public boolean create(IbzLib et) {
        boolean bOk = super.create(et);
        if (!bOk) {
            return bOk;
        }
        actionHelper.create("caselib", et.getId(), "opened", "", "", null, true);
        return bOk;
    }

    @Override
    public boolean edit(IbzLib et) {
        IbzLib old = new IbzLib();
        CachedBeanCopier.copy(get(et.getId()), old);

        if (!super.edit(et))
            return false;

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create("caselib", et.getId(), "edited", "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Override
    public boolean delete(Long key) {
        return testSuiteHelper.delete(key);
    }
}
