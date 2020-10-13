package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.CaseMapper;
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
public class CaseHelper extends ZTBaseHelper<CaseMapper, Case> {


    @Autowired
    ActionHelper actionHelper;

    @Autowired
    CaseHelper caseHelper;

    @Autowired
    CaseStepHelper caseStepHelper;

    @Autowired
    TestTaskHelper testTaskHelper;

    @Autowired
    TestSuiteHelper testSuiteHelper;

    @Autowired
    TestRunHelper testRunHelper;

    @Autowired
    SuiteCaseHelper suiteCaseHelper;

    @Override
    @Transactional
    public boolean create(Case et) {


        if(et.getFromcaseid()!=0){
            Case cas = caseHelper.get(et.getFromcaseid());
            et.setFromcaseversion(cas.getVersion());
        }

        boolean bOk = super.create(et);
        if (!bOk)
            return bOk;

        if (et.getCasestep() != null) {
            for (CaseStep caseStep : et.getCasestep()) {
//                if(StringUtils.isBlank(caseStep.getDesc()))
//                    continue;
                caseStep.setIbizcase(et.getId());
                caseStep.setVersion(et.getVersion());
                caseStepHelper.create(caseStep);
            }
        }


        return bOk;
    }

    @Override
    @Transactional
    public boolean edit(Case et) {
        String comment = et.getComment() == null ? "" : et.getComment();
        List<CaseStep> caseSteps = et.getCasestep() ;
        Case old = new Case();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setVersion(old.getVersion() + 1);
        boolean bOk = super.edit(et);
        if (!bOk)
            return bOk;

        if (caseSteps != null) {
            for (CaseStep caseStep : caseSteps) {
//                if(StringUtils.isBlank(caseStep.getDesc()))
//                    continue;
                caseStep.setIbizcase(et.getId());
                caseStep.setVersion(et.getVersion());
                caseStepHelper.create(caseStep);
            }
        }

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create("case", et.getId(), "edited", comment, "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }

        return true;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        return super.delete(key);
    }

    @Transactional
    public Case linkCase(Case et) {
        TestTask testTask = new TestTask();
        testTask.setId(Long.parseLong(et.getTask()));
        if (et.get("ids") == null)
            return et;
        testTask.set("cases",et.get("ids"));
        testTaskHelper.linkCase(testTask);
        return et ;
    }

    @Transactional
    public Case unlinkCase(Case et) {
        testRunHelper.delete(et.getId());
        return et ;
    }

    @Transactional
    public Case runCase(Case et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Case unlinkSuiteCase(Case et) {
        suiteCaseHelper.remove(new QueryWrapper<SuiteCase>().eq("suite",et.get("suite")).eq("`case`",et.get("case"))) ;
        return et ;
    }

    @Transactional
    public Case testRunCase(Case et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Case testsuitelinkCase(Case et) {
        if (et.get("suite") == null)
            return et;
        if (et.get("ids") == null)
            return et;
        TestSuite testSuite = new TestSuite();
        testSuite.setId(Long.parseLong(et.get("suite").toString().split(",")[0]));
        testSuite.set("cases",et.get("ids"));
        testSuiteHelper.linkCase(testSuite);
        return et ;
    }

    @Transactional
    public Case confirmChange(Case et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Case confirmstorychange(Case et) {
        throw new RuntimeException("未实现");
    }

}
