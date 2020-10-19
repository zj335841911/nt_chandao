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

    /**
     * 行为[Get]用户扩展
     * @param key
     * @return
     */
    @Override
    @Transactional
    public Case get(Long key) {
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

//    @Override
//    @Transactional
//    public Case testsuitelinkCase(Case et) {
//        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
//        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
//        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
//
//        if(et.get("suite") != null) {
//            jo.put("id", String.valueOf(et.get("suite")).split(",")[0]);
//        }
//        JSONArray jsonArray = new JSONArray();
//
//        if(et.get("ids") != null && et.get("versions") != null) {
//            String[] cases = String.valueOf(et.get("ids")).split(",");
//            String[] versions = String.valueOf(et.get("versions")).split(",");
//            if(cases.length == versions.length) {
//                for(int i = 0; i < cases.length; i ++) {
//                    JSONObject jsonObject = new JSONObject();
//                    jsonObject.put("cases", cases[i]);
//                    jsonObject.put("versions", versions[i]);
//                    jsonArray.add(jsonObject);
//                }
//            }
//
//        }
//        jo.put("srfarray", jsonArray);
//        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.testsuitelinkCase(zentaoSid, jo, rst);
//        if (bRst && rst.getEtId() != null) {
//            et = this.get(rst.getEtId());
//        }
//        et.set("ztrst", rst);
//        return et;
//    }
//
//    @Override
//    @Transactional
//    public Case linkCase(Case et) {
//        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
//        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
//        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
//
//        if(et.get("task") != null) {
//            jo.put("id", String.valueOf(et.get("task")).split(",")[0]);
//        }
//        JSONArray jsonArray = new JSONArray();
//
//        if(et.get("ids") != null && et.get("versions") != null) {
//            String[] cases = String.valueOf(et.get("ids")).split(",");
//            String[] versions = String.valueOf(et.get("versions")).split(",");
//            if(cases.length == versions.length) {
//                for(int i = 0; i < cases.length; i ++) {
//                    JSONObject jsonObject = new JSONObject();
//                    jsonObject.put("cases", cases[i]);
//                    jsonObject.put("versions", versions[i]);
//                    jsonArray.add(jsonObject);
//                }
//            }
//
//        }
//        jo.put("srfarray", jsonArray);
//        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTCaseHelper.linkCase(zentaoSid, jo, rst);
//        if (bRst && rst.getEtId() != null) {
//            et = this.get(rst.getEtId());
//        }
//        et.set("ztrst", rst);
//        return et;
//    }

}

