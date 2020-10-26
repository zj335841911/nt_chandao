package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.TestSuiteMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Slf4j
public class TestSuiteHelper extends ZTBaseHelper<TestSuiteMapper, TestSuite> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    CaseHelper caseHelper;

    @Autowired
    SuiteCaseHelper suiteCaseHelper;

    @Override
    @Transactional
    public boolean create(TestSuite et) {

        boolean bOk = super.create(et);
        if (!bOk) {
            return bOk;
        }
        actionHelper.create("testsuite", et.getId(), "opened", "", "", null, true);

        return true;
    }

    @Override
    @Transactional
    public boolean edit(TestSuite et) {

        TestSuite old = new TestSuite();
        CachedBeanCopier.copy(get(et.getId()), old);

        if (!super.edit(et))
            return false;

        List<History> changes = ChangeUtil.diff(old, et,null,null,new String[]{"desc"});
        if (changes.size() > 0) {
            Action action = actionHelper.create("testsuite", et.getId(), "edited", "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Transactional
    public TestSuite linkCase(TestSuite et) {
        if (et.get("cases") == null)
            return et;
        int i = 0;
        String[] versions = et.get("versions").toString().split(",");
        for (String caseId : et.get("cases").toString().split(",")) {
            Case cas = caseHelper.get(Long.parseLong(caseId));
            Integer version = cas.getVersion();
            if(versions.length > i && versions[i] != null && !"".equals(versions[i])) {
                version = Integer.parseInt(versions[i]);
            }
            SuiteCase suiteCase = suiteCaseHelper.getOne(new QueryWrapper<SuiteCase>().eq("suite", et.getId()).eq("`case`", cas.getId()).eq("`version`", version).last("limit 0,1"));
            if (suiteCase == null) {
                suiteCase = new SuiteCase();
                suiteCase.setSuite(et.getId());
                suiteCase.setIbizcase(cas.getId());
                suiteCase.setVersion(version);
                suiteCaseHelper.create(suiteCase);
            }
            i ++;
        }
        return et;
    }

    @Transactional
    public TestSuite unlinkCase(TestSuite et) {
        return et;
    }
}
