package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.TestReport;
import cn.ibizlab.pms.core.zentao.mapper.TestReportMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Slf4j
public class TestReportHelper extends ZTBaseHelper<TestReportMapper, TestReport> {

    @Autowired
    ActionHelper actionHelper;

    @Override
    @Transactional
    public boolean create(TestReport et) {
        boolean bOk = super.create(et);
        if (!bOk) {
            return bOk;
        }
        actionHelper.create("testreport", et.getId(), "opened", "", "", null, true);

        return true;
    }

    @Override
    @Transactional
    public boolean edit(TestReport et) {
        TestReport old = new TestReport();
        CachedBeanCopier.copy(get(et.getId()), old);

        if (!super.edit(et))
            return false;
        List<History> changes = ChangeUtil.diff(old, et,null,null,new String[]{"report"});
        Action action = actionHelper.create("testreport", et.getId(), "edited", "", "", null, true);
        if (changes.size() > 0) {
            actionHelper.logHistory(action.getId(), changes);
        }

        return true;
    }
}
