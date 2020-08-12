package cn.ibizlab.pms.core.zentao.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;
import cn.ibizlab.pms.core.zentao.service.IStoryService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.StoryMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[需求] 服务对象接口实现
 */
@Slf4j
@Service("StoryServiceImpl")
public class StoryServiceImpl extends ServiceImpl<StoryMapper, Story> implements IStoryService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ICaseService caseService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectStoryService projectstoryService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStorySpecService storyspecService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStoryStageService storystageService;

    protected cn.ibizlab.pms.core.zentao.service.IStoryService storyService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITaskService taskService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IProductModuleService productmoduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IStorybuildUnlinkStorysLogic buildunlinkstorysLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IStoryGetStorySpecsLogic getstoryspecsLogic;

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.logic.IStoryprojectUnlinkStorysLogic projectunlinkstorysLogic;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes()); 
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.create(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "create"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void createBatch(List<Story> list) {

    }
    @Override
    @Transactional
    public boolean update(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.edit(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "update"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void updateBatch(List<Story> list) {

    }
    @Override
    @Transactional
    public boolean remove(BigInteger key) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        Story et = this.get(key);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.delete(zentaoSid, (JSONObject) JSONObject.toJSON(et), rst);
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public void removeBatch(Collection<BigInteger> idList){
        if (idList != null && !idList.isEmpty()) {
            for (BigInteger id : idList) {
                this.remove(id);
            }
        }
    }
    @Override
    @Transactional
    public Story get(BigInteger key) {
        Story tempET=new Story();
        tempET.set("id",key);
        Story et = getById(key);
        if(et==null){
            et=new Story();
            et.setId(key);
        }
        else{
        }
        return et;
    }

    @Override
    public Story getDraft(Story et) {
        fillParentData(et);
        return et;
    }

    @Override
    @Transactional
    public Story activate(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.activate(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "activate"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story assignTo(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.assignTo(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "assignTo"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story batchAssignTo(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story batchChangeBranch(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story batchChangeModule(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story batchChangePlan(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story batchChangeStage(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story batchClose(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story batchReview(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story batchUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.batchUnlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "batchUnlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story bugToStory(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story buildBatchUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.buildBatchUnlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "buildBatchUnlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story buildLinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.buildLinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "buildLinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story buildUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.buildUnlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "buildUnlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story buildUnlinkStorys(Story et) {
        buildunlinkstorysLogic.execute(et);
         return et ;
    }

    @Override
    @Transactional
    public Story change(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.change(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "change"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    public boolean checkKey(Story et) {
        return (!ObjectUtils.isEmpty(et.getId()))&&(!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public Story close(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.close(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "close"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story getStorySpec(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story getStorySpecs(Story et) {
        getstoryspecsLogic.execute(et);
         return et ;
    }

    @Override
    @Transactional
    public Story importPlanStories(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.importPlanStories(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "importPlanStories"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story linkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.linkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "linkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story projectBatchUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.projectBatchUnlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "projectBatchUnlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story projectLinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.projectLinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "projectLinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story projectUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.projectUnlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "projectUnlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story projectUnlinkStorys(Story et) {
        projectunlinkstorysLogic.execute(et);
         return et ;
    }

    @Override
    @Transactional
    public Story releaseBatchUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.releaseBatchUnlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "releaseBatchUnlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story releaseLinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.releaseLinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "releaseLinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story releaseUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.releaseUnlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "releaseUnlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story resetReviewedBy(Story et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story review(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.review(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "review"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public boolean save(Story et) {
        if(!saveOrUpdate(et))
            return false;
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(Story et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    public boolean saveBatch(Collection<Story> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Override
    public void saveBatch(List<Story> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list,batchSize);
    }

    @Override
    @Transactional
    public Story unlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.unlinkStory(zentaoSid, cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(et, "unlinkStory"), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }


	@Override
    public List<Story> selectByModule(BigInteger id) {
        return baseMapper.selectByModule(id);
    }

    @Override
    public void removeByModule(BigInteger id) {
        this.remove(new QueryWrapper<Story>().eq("module",id));
    }

	@Override
    public List<Story> selectByBranch(BigInteger id) {
        return baseMapper.selectByBranch(id);
    }

    @Override
    public void removeByBranch(BigInteger id) {
        this.remove(new QueryWrapper<Story>().eq("branch",id));
    }

	@Override
    public List<Story> selectByFrombug(BigInteger id) {
        return baseMapper.selectByFrombug(id);
    }

    @Override
    public void removeByFrombug(BigInteger id) {
        this.remove(new QueryWrapper<Story>().eq("frombug",id));
    }

	@Override
    public List<Story> selectByTobug(BigInteger id) {
        return baseMapper.selectByTobug(id);
    }

    @Override
    public void removeByTobug(BigInteger id) {
        this.remove(new QueryWrapper<Story>().eq("tobug",id));
    }

	@Override
    public List<Story> selectByProduct(BigInteger id) {
        return baseMapper.selectByProduct(id);
    }

    @Override
    public void removeByProduct(BigInteger id) {
        this.remove(new QueryWrapper<Story>().eq("product",id));
    }

	@Override
    public List<Story> selectByDuplicatestory(BigInteger id) {
        return baseMapper.selectByDuplicatestory(id);
    }

    @Override
    public void removeByDuplicatestory(BigInteger id) {
        this.remove(new QueryWrapper<Story>().eq("duplicatestory",id));
    }

	@Override
    public List<Story> selectByParent(BigInteger id) {
        return baseMapper.selectByParent(id);
    }

    @Override
    public void removeByParent(BigInteger id) {
        this.remove(new QueryWrapper<Story>().eq("parent",id));
    }


    /**
     * 查询集合 版本关联已完成的需求（选择数据源）
     */
    @Override
    public Page<Story> searchBuildLinkCompletedStories(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchBuildLinkCompletedStories(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 版本可关联的需求（产品内）
     */
    @Override
    public Page<Story> searchBuildLinkableStories(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchBuildLinkableStories(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 获取版本相关需求
     */
    @Override
    public Page<Story> searchBuildStories(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchBuildStories(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 通过模块查询
     */
    @Override
    public Page<Story> searchByModule(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchByModule(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Story> searchDefault(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 获取产品需求
     */
    @Override
    public Page<Story> searchGetProductStories(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchGetProductStories(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目关联需求
     */
    @Override
    public Page<Story> searchProjectLinkStory(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchProjectLinkStory(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目相关需求
     */
    @Override
    public Page<Story> searchProjectStories(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchProjectStories(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 获取产品发布相关需求
     */
    @Override
    public Page<Story> searchReleaseStories(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchReleaseStories(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 通过模块查询
     */
    @Override
    public Page<Story> searchReportStories(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchReportStories(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 获取产品发布相关需求
     */
    @Override
    public Page<Story> searchStoryChild(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchStoryChild(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 获取产品发布相关需求
     */
    @Override
    public Page<Story> searchStoryRelated(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchStoryRelated(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 任务相关需求
     */
    @Override
    public Page<Story> searchTaskRelatedStory(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages=baseMapper.searchTaskRelatedStory(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Story et){
        //实体关系[DER1N_ZT_STORY_IBZ_PRODUCTMODULE_MODULE]
        if(!ObjectUtils.isEmpty(et.getModule())){
            cn.ibizlab.pms.core.ibiz.domain.ProductModule ibzproductmodule=et.getIbzproductmodule();
            if(ObjectUtils.isEmpty(ibzproductmodule)){
                cn.ibizlab.pms.core.ibiz.domain.ProductModule majorEntity=productmoduleService.get(et.getModule());
                et.setIbzproductmodule(majorEntity);
                ibzproductmodule=majorEntity;
            }
            et.setPath(ibzproductmodule.getPath());
            et.setModulename(ibzproductmodule.getName());
        }
        //实体关系[DER1N_ZT_STORY_ZT_BRANCH_BRANCH]
        if(!ObjectUtils.isEmpty(et.getBranch())){
            cn.ibizlab.pms.core.zentao.domain.Branch ztbranch=et.getZtbranch();
            if(ObjectUtils.isEmpty(ztbranch)){
                cn.ibizlab.pms.core.zentao.domain.Branch majorEntity=branchService.get(et.getBranch());
                et.setZtbranch(majorEntity);
                ztbranch=majorEntity;
            }
            et.setBranchname(ztbranch.getName());
        }
        //实体关系[DER1N_ZT_STORY_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
        }
        //实体关系[DER1N__ZT_STORY__ZT_STORY__PARENT]
        if(!ObjectUtils.isEmpty(et.getParent())){
            cn.ibizlab.pms.core.zentao.domain.Story ztparent=et.getZtparent();
            if(ObjectUtils.isEmpty(ztparent)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getParent());
                et.setZtparent(majorEntity);
                ztparent=majorEntity;
            }
            et.setParentname(ztparent.getTitle());
        }
    }




    @Override
    public List<JSONObject> select(String sql, Map param){
        return this.baseMapper.selectBySQL(sql,param);
    }

    @Override
    @Transactional
    public boolean execute(String sql , Map param){
        if (sql == null || sql.isEmpty()) {
            return false;
        }
        if (sql.toLowerCase().trim().startsWith("insert")) {
            return this.baseMapper.insertBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("update")) {
            return this.baseMapper.updateBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("delete")) {
            return this.baseMapper.deleteBySQL(sql,param);
        }
        log.warn("暂未支持的SQL语法");
        return true;
    }


}



