package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;
import cn.ibizlab.pms.core.zentao.filter.StorySpecSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.StoryServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Story;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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
        et.setTitle(storySpec.getTitle());
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
        et.setReviewedby(et.getAssignedto());
        return super.create(et);
    }

    @Override
    @Transactional
    public Story linkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if(et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for(Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            jo.put("stories",jsonArray);
        }
        if(et.get("productplan") != null) {
            jo.put("id", et.get("productplan"));
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.linkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        return et;
    }

    @Override
    @Transactional
    public Story projectLinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if(et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for(Map map : list) {
                if (map.get("id") != null) {
                    JSONObject jo2 = new JSONObject();
                    jo2.put("stories", map.get("id"));
                    if(map.get("product") != null) {
                        jo2.put("products", map.get("product"));
                    }
                    jsonArray.add(jo2);
                }
            }
            jo.put("srfarray", jsonArray);
        }
        if(et.get("project") != null) {
            jo.put("id", et.get("project"));
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.projectLinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story projectUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        jo.put("id", et.getProject());
        jo.put("story", et.getId());
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.projectUnlinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story unlinkStory(Story et) {
        if (et.get("productplan") != null) {
            et.setPlan(String.valueOf(et.get("productplan")));
        }
        return super.unlinkStory(et);
    }

    /**
     * 查询集合 任务相关需求
     */
    @Override
    public Page<Story> searchTaskRelatedStory(StorySearchContext context) {
        context.getSelectCond().clear();
        context.setQuery(context.getQuery());
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchTaskRelatedStory(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    @Override
    @Transactional
    public Story buildLinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if(et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for(Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            jo.put("stories",jsonArray);
        }
        if(jo.get("build") == null) {
            jo.put("id", et.getExtensionparams().get("build"));
        }

        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.buildLinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story buildUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();

        JSONObject jo = new JSONObject();
        if(et.getExtensionparams() != null) {
            jo.put("build", et.get("build"));
            jo.put("id",et.getId());
        }

        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.buildUnlinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }
}

