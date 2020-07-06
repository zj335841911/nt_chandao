package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.filter.StorySpecSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.StoryServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Story;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.math.BigInteger;
import java.util.*;

/**
 * 实体[需求] 自定义服务对象
 */
@Slf4j
@Primary
@Service("StoryExService")
public class StoryExService extends StoryServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story assignTo(Story et) {
        return super.assignTo(et);
    }
    /**
     * 自定义行为[BatchAssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchAssignTo(Story et) {
        return super.batchAssignTo(et);
    }
    /**
     * 自定义行为[BatchChangeBranch]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeBranch(Story et) {
        return super.batchChangeBranch(et);
    }
    /**
     * 自定义行为[BatchChangeModule]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeModule(Story et) {
        return super.batchChangeModule(et);
    }
    /**
     * 自定义行为[BatchChangePlan]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangePlan(Story et) {
        return super.batchChangePlan(et);
    }
    /**
     * 自定义行为[BatchChangeStage]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeStage(Story et) {
        return super.batchChangeStage(et);
    }
    /**
     * 自定义行为[BatchClose]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchClose(Story et) {
        return super.batchClose(et);
    }
    /**
     * 自定义行为[BatchReview]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchReview(Story et) {
        return super.batchReview(et);
    }
    /**
     * 自定义行为[Change]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story change(Story et) {
        return super.change(et);
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story close(Story et) {
        return super.close(et);
    }
    /**
     * 自定义行为[GetStorySpec]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story getStorySpec(Story et) {
        StorySpecSearchContext context = new StorySpecSearchContext();
        context.setN_story_eq(et.getId());
        context.setN_version_eq(et.getVersion());
        context.setSort("version,desc");
        StorySpec storySpec = storyspecService.searchDefault(context).getContent().get(0);
        et.setSpec(storySpec.getSpec());
        et.setVerify(storySpec.getVerify());
        return et;
    }
    /**
     * 自定义行为[Review]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story review(Story et) {
        return super.review(et);
    }

    /**
     * 预置行为[get]用户扩展
     * @param key
     * @return
     */
    @Override
    @Transactional
    public Story get(BigInteger key) {
        Story et = super.get(key);
        this.getStorySpec(et);
        return et;
    }

    @Override
    @Transactional
    public boolean create(Story et) {
        if(et.getReviewedby() != null && !"".equals(et.getReviewedby())) {
            et.setAssignedto(et.getReviewedby().split(",")[0]);

        }
        return super.create(et);
    }

    @Override
    @Transactional
    public Story linkStory(Story et) {
        cn.ibizlab.pms.util.security.AuthenticationUser user = cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser();
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        ArrayList<Map> list = (ArrayList) et.getExtensionparams().get("srfactionparam");
        jo.put("id",et.getExtensionparams().get("productplan"));
        JSONArray jsonArray = new JSONArray();
        for(Map map : list) {
            jsonArray.add(map.get("id"));
        }
        jo.put("stories[]",jsonArray);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.linkStory((String)user.getSessionParams().get("zentaosid"), jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        return et;
    }
}

