package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.TestTaskMapper;
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
public class TestTaskHelper extends ZTBaseHelper<TestTaskMapper, TestTask> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    TestRunHelper testRunHelper;

    @Autowired
    CaseHelper caseHelper;

    @Override
    @Transactional
    public boolean create(TestTask et) {
        boolean bOk = super.create(et);
        if (!bOk) {
            return bOk;
        }
        actionHelper.create("testtask", et.getId(), "opened", "", "", null, true);

        return true ;
    }

    @Override
    @Transactional
    public boolean edit(TestTask et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        TestTask old = new TestTask();
        CachedBeanCopier.copy(get(et.getId()), old);

        if(!super.edit(et))
            return false ;

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("testtask", et.getId(), "Blocked",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Transactional
    public TestTask start(TestTask et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        TestTask old =new TestTask();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("doing");
        internalUpdate(et);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("testtask", et.getId(), "Started",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public TestTask block(TestTask et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        TestTask old =new TestTask();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("blocked");
        internalUpdate(et);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("testtask", et.getId(), "Blocked",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public TestTask close(TestTask et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        TestTask old =new TestTask();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("done");
        internalUpdate(et);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("testtask", et.getId(), "Closed",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public TestTask activate(TestTask et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        TestTask old =new TestTask();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("doing");
        internalUpdate(et);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("testtask", et.getId(), "Activated",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public TestTask linkCase(TestTask et) {
        if (et.get("cases") == null)
            return et;
        for (String caseId : et.get("cases").toString().split(",")) {
            Case cas = caseHelper.get(Long.parseLong(caseId));
            TestRun testRun = testRunHelper.getOne(new QueryWrapper<TestRun>().eq("task",et.getId()).eq("`case`",cas.getId()).eq("`version`",cas.getVersion()).last("limit 0,1"));
            if(testRun==null){
                testRun = new TestRun();
                testRun.setTask(et.getId());
                testRun.setIbizcase(cas.getId());
                testRun.setVersion(cas.getVersion());
                testRun.setStatus("wait");
                testRunHelper.create(testRun) ;
            }
        }
        return et ;
    }

    @Transactional
    public TestTask unlinkCase(TestTask et) {
        if (et.get("cases") == null)
            return et;
        for (String caseId : et.get("cases").toString().split(",")) {
            Case cas = caseHelper.get(Long.parseLong(caseId));
            testRunHelper.remove(new QueryWrapper<TestRun>().eq("task",et.getId()).eq("`case`",cas.getId()).eq("`version`",cas.getVersion()));
        }
        return et ;
    }
}
