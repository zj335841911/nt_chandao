package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.CaseMapper;
import cn.ibizlab.pms.core.zentao.service.IStoryService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.phprpc.util.PHPSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @Autowired
    TestResultHelper testResultHelper;

    @Override
    @Transactional
    public boolean create(Case et) {
        List<CaseStep> caseSteps = et.getCasestep();
        if(et.getFromcaseid()!=0){
            Case cas = caseHelper.get(et.getFromcaseid());
            et.setFromcaseversion(cas.getVersion());
        }
        if(et.getStory() != null && et.getStory() != 0)
            et.setStoryversion(storyHelper.get(et.getStory()).getVersion());
        boolean bOk = super.create(et);
        if (!bOk)
            return bOk;
        createCaseStep(et,caseSteps);
        actionHelper.create("case",et.getId(),"opened","","",null,true);

        return bOk;
    }

    public void createCaseStep(Case et, List<CaseStep> caseSteps) {
        if (caseSteps != null) {
            Long parent = 0l;
            for (CaseStep caseStep : caseSteps) {
                if(StringUtils.isBlank(caseStep.getDesc()))
                    continue;
                caseStep.setType(caseStep.getType() != null && "item".equals(caseStep.getType()) && parent == 0 ? "step" : caseStep.getType());
                String type = caseStep.getType();
                if("item".equals(type)) {
                    caseStep.setParent(parent);
                }
                caseStep.setIbizcase(et.getId());
                caseStep.setVersion(et.getVersion());
                caseStepHelper.create(caseStep);
                if("group".equals(type)) parent = caseStep.getId();
                if("step".equals(type)) parent = 0l;
            }
        }
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

        createCaseStep(et,caseSteps);

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
//        Case old = new Case();
//        CachedBeanCopier.copy(get(et.getId()),old);
        createResult(et);

        return et;
    }

    public void createResult(Case et) {
        Long caseId = Long.parseLong(et.get("case").toString());
        if(caseId == null || caseId == 0l) return;
        Long runId = et.getId();

        Map<Integer, Object> stepResults = new HashMap<>();
        List<CaseStep> caseSteps = et.getCasestep();
        et = this.get(caseId);
        String caseResult = "pass";

        if(caseSteps != null) {
            for(CaseStep caseStep : caseSteps) {
                if(caseStep.getSteps() == null || "".equals(caseStep.getSteps())) {
                    if(caseStep.getReals() == null || "".equals(caseStep.getReals())) {
                        caseStep.setSteps("pass");
                    }else {
                        caseStep.setSteps("fail");
                    }
                }
                if(!"n/a".equals(caseStep.getSteps()) && !"pass".equals(caseStep.getSteps())) {
                    caseResult = caseStep.getSteps();
                    break;
                }
            }
            for(CaseStep caseStep : caseSteps) {
                if(caseStep.getSteps() == null || "".equals(caseStep.getSteps())) {
                    if(caseStep.getReals() == null || "".equals(caseStep.getReals())) {
                        caseStep.setSteps("pass");
                    }else {
                        caseStep.setSteps("fail");
                    }
                }
                Map<String, String> jsonObject = new HashMap<>();
                jsonObject.put("real",caseStep.getReals() != null ? caseStep.getReals() : "");
                jsonObject.put("result",caseStep.getSteps());
                stepResults.put(Integer.parseInt(String.valueOf(caseStep.getId())), jsonObject);
            }
        }
        PHPSerializerHelper phpSerializer = new PHPSerializerHelper();
        String ss = "";
        try {
            ss = new String(phpSerializer.serialize(stepResults), "UTF-8");
       } catch (Exception e) {
            e.printStackTrace();
        }
        TestResult testResult = new TestResult();
        testResult.setRun(runId);
        testResult.setCaseresult(caseResult);
        testResult.setStepresults(ss);
        testResult.setIbizcase(caseId);
        testResult.setVersion(et.getVersion());
        testResult.setLastrunner(AuthenticationUser.getAuthenticationUser().getUsername());
        testResult.setDate(ZTDateUtil.now());
        testResultHelper.create(testResult);
        Case cases = new Case();
        cases.setId(caseId);
        cases.setLastrunner(AuthenticationUser.getAuthenticationUser().getUsername());
        cases.setLastrundate(ZTDateUtil.now());
        cases.setLastrunresult(caseResult);
        this.internalUpdate(cases);
        if(runId != null && runId != 0) {
            TestRun testRun = new TestRun();
            testRun.setId(runId);
            testRun.setStatus("blocked".equals(caseResult) ? "blocked" : "done");
            testRun.setLastrundate(ZTDateUtil.now());
            testRun.setLastrunner(AuthenticationUser.getAuthenticationUser().getUsername());
            testRun.setLastrunresult(caseResult);
            testRunHelper.internalUpdate(testRun);
        }
    }

    @Transactional
    public Case unlinkSuiteCase(Case et) {
        suiteCaseHelper.remove(new QueryWrapper<SuiteCase>().eq("suite",et.get("suite")).eq("`case`",et.get("case"))) ;
        return et ;
    }

    @Transactional
    public Case testRunCase(Case et) {
//        throw new RuntimeException("未实现");
        createResult(et);
        return et;
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
        Case cas = this.getById(et.getId());
        TestRun testRun = new TestRun();
        testRun.setVersion(cas.getVersion());
        Map<String,Object> param = new HashMap<>();
        param.put("`case`",cas.getId());
        param.put("task", et.getTask());
        testRunHelper.update(testRun,(Wrapper) testRun.getUpdateWrapper(true).allEq(param));
        // throw new RuntimeException("未实现");
        return et;
    }

    @Autowired
    StoryHelper storyHelper;

    @Transactional
    public Case confirmstorychange(Case et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Case old = new Case();
        CachedBeanCopier.copy(get(et.getId()), old);
        if (old.getStory() != 0) {
            Story story = storyHelper.getById(old.getStory());
            old.setStoryversion(story.getVersion());
        }
        caseHelper.internalUpdate(old);
        actionHelper.create("case",et.getId(),"confirmed",comment,"",null,true);
        //throw new RuntimeException("未实现");
        return et;
    }

}
