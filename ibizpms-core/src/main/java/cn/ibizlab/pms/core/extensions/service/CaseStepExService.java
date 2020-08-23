package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.util.zentao.helper.ZenTaoHttpHelper;
import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.CaseStepServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 实体[用例步骤] 自定义服务对象
 */
@Slf4j
@Primary
@Service("CaseStepExService")
public class CaseStepExService extends CaseStepServiceImpl {

    /**
     * 查询集合 当前测试步骤
     */
    @Override
    public Page<CaseStep> searchCurTest(CaseStepSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<CaseStep> pages=baseMapper.searchCurTest(context.getPages(),context,context.getSelectCond());
        List<CaseStep> list = pages.getRecords();
        JSONArray jsonArray = new JSONArray();
        if(!list.isEmpty() && list.size() > 0) {
            try {
                jsonArray = ZenTaoHttpHelper.formatCaseSteps(list.get(0).getSteps());
            }catch (Exception e) {
                log.warn(e.getMessage(), e);
            }
        }
        List<CaseStep> list1 = new ArrayList<>();
        if(jsonArray != null && !jsonArray.isEmpty() && jsonArray.size() > 0) {
            for(CaseStep caseStep : list) {
                caseStep.setSteps("");
                for (int i = 0; i < jsonArray.size(); i++) {
                    JSONObject jo = (JSONObject) jsonArray.get(i);
                    if (String.valueOf(jo.get("id")).equals(String.valueOf(caseStep.getId()))) {
                      caseStep.setSteps(jo.getString("result"));
                      caseStep.setReals(jo.getString("comment"));
                      break;
                    }
                }
                list1.add(caseStep);
            }
        }
        pages.getRecords().clear();
        pages.setRecords(list1);
        return new PageImpl<CaseStep>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}
