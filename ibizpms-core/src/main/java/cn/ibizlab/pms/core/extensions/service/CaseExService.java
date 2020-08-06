package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.domain.TestRun;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import cn.ibizlab.pms.core.zentao.filter.TestRunSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.CaseServiceImpl;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Case;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.math.BigInteger;
import java.util.*;

/**
 * 实体[测试用例] 自定义服务对象
 */
@Slf4j
@Primary
@Service("CaseExService")
public class CaseExService extends CaseServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    @Override
    @Transactional
    public Case unlinkCase(Case et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
        jo.remove("id");
        if(et.getId() != null && et.get("task") != null) {
            Map<String,Object> params = new HashMap<>();
            params.put("case", et.getId());
            params.put("task", et.get("task"));
            String sql = "SELECT t1.`ASSIGNEDTO`, t1.`CASE`, t1.`ID`, t1.`LASTRUNDATE`, t1.`LASTRUNNER`, t1.`LASTRUNRESULT`, t1.`STATUS`, t1.`TASK`, t1.`VERSION` FROM `zt_testrun` t1  where t1.`CASE` = #{et.case} AND t1.`task` = #{et.task}";
            List<JSONObject> list = this.select(sql, params);

            if(!list.isEmpty() && list.size() > 0) {
                jo.put("id", list.get(0).get("ID"));
            }

        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.unlinkCase(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    /**
     * 自定义行为[RunCase]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Case testRunCase(Case et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
        jo.put("srfarray", et.getCasestep());
        jo.put("id", 0);
        if(et.getId() != null && et.get("task") != null) {
            Map<String,Object> params = new HashMap<>();
            params.put("case", et.getId());
            params.put("task", et.get("task"));
            String sql = "SELECT t1.`ASSIGNEDTO`, t1.`CASE`, t1.`ID`, t1.`LASTRUNDATE`, t1.`LASTRUNNER`, t1.`LASTRUNRESULT`, t1.`STATUS`, t1.`TASK`, t1.`VERSION` FROM `zt_testrun` t1  where t1.`CASE` = #{et.case} AND t1.`task` = #{et.task}";
            List<JSONObject> list = this.select(sql, params);

            if(!list.isEmpty() && list.size() > 0) {
                jo.put("id", list.get(0).get("ID"));
            }
        }

        jo.put("case", et.getId());
        jo.put("version", jo.get("version"));
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.testRunCase(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    /**
     * 自定义行为[RunCase]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Case runCase(Case et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
        jo.put("srfarray", et.getCasestep());
        jo.put("id", 0);
        jo.put("case", et.getId());
        jo.put("version", jo.get("version"));
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.runCase(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public boolean create(Case et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);

        jo.put("srfArray", getSrfArray(et.getCasestep()));
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.create(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    @Transactional
    public boolean update(Case et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);

        jo.put("srfArray", getSrfArray(et.getCasestep()));
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.edit(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    /**
     * 解析用例步骤
     *
     * @param list
     * @return
     */
    protected JSONArray getSrfArray(List<CaseStep> list) {
        JSONArray ja = new JSONArray();
        for(int i = 0; i < list.size(); i ++) {
            CaseStep caseStep = list.get(i);
            String type = caseStep.getType();
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("steps",caseStep.getDesc());
            jsonObject.put("stepType",caseStep.getType());
            jsonObject.put("expects", caseStep.getExpect());
            if("group".equals(type)){
                // 分组
                JSONArray jaChild = new JSONArray();
                for (int j = i + 1; j < list.size(); j++) {
                    CaseStep caseStep2 = list.get(j);
                    if (!"item".equals(caseStep2.getType())) {
                        break;
                    }
                    i ++;
                    JSONObject joChild = new JSONObject();
                    joChild.put("steps", caseStep2.getDesc());
                    joChild.put("stepType", caseStep2.getType());
                    joChild.put("expects", caseStep2.getExpect());
                    jaChild.add(joChild);
                }
                jsonObject.put("srfArray", jaChild);
            }
            ja.add(jsonObject);
        }
        return ja;
    }

    /**
     * 行为[Get]用户扩展
     * @param key
     * @return
     */
    @Override
    @Transactional
    public Case get(BigInteger key) {
        Case et = getById(key);
        if(et==null){
            et=new Case();
            et.setId(key);
        }
        else{
            CaseStepSearchContext context = new CaseStepSearchContext();
            context.setN_case_eq(key);
            context.setN_version_eq(et.getVersion());
            et.setCasestep(casestepService.searchDefault(context).getContent());
        }
        return et;
    }
}

