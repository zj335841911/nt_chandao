package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.StoryMapper;
import cn.ibizlab.pms.core.zentao.service.IStoryService;
import cn.ibizlab.pms.core.zentao.service.IStoryStageService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.*;

@Component
@Slf4j
public class StoryHelper extends ZTBaseHelper<StoryMapper, Story> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    StorySpecHelper storySpecHelper;

    @Autowired
    StoryStageHelper storyStageHelper;

    @Autowired
    IStoryStageService iStoryStageService;

    @Autowired
    ProjectStoryHelper projectStoryHelper;

    @Autowired
    ProjectProductHelper peojectProductHelper;

    @Autowired
    ProductPlanHelper productPlanHelper;

    @Autowired
    BuildHelper buildHelper;

    @Autowired
    BugHelper bugHelper;

    @Autowired
    ReleaseHelper releaseHelper;

    @Autowired
    IStoryService iStoryService;

    @Autowired
    ProductHelper productHelper;

    @Transactional
    public boolean create(Story et) {
        String strSpec = et.getSpec();
        String strVerify = et.getVerify();
        fileHelper.processImgURL(et, null, null);
        et.setVersion(1);
        et.setAssigneddate(et.getAssignedto() != null ? ZTDateUtil.now() : ZTDateUtil.nul());
        et.setStatus((et.getNeednotreview() == null || "".equals(et.getNeednotreview()) || !"1".equals(et.getNeednotreview())) ? "draft" : "active");
        if("draft".equals(et.getStatus())) {
            if(et.getAssignedto() == null || "".equals(et.getAssignedto())) {
                et.setReviewedby(productHelper.get(et.getProduct()).getPo());
            }else
                et.setReviewedby(et.getAssignedto());

        }
        et.setStage(et.getProject() != null && et.getProject() > 0 ? "projected" : et.getPlan() != null && !"".equals(et.getPlan()) && !"0".equals(et.getPlan()) ? "planned" : "wait");
        super.create(et);
        fileHelper.updateObjectID(null, et.getId(), "story");
        fileHelper.saveUpload("story", et.getId(), "", "", "");

        //storyspec create
        StorySpec storySpec = new StorySpec();
        storySpec.setStory(et.getId());
        storySpec.setTitle(et.getTitle());
        storySpec.setSpec(strSpec);
        storySpec.setVerify(strVerify);
        storySpec.setVersion(1);
        storySpecHelper.create(storySpec);

        if (et.getProject() != null && et.getProject() != 0l && StringUtils.compare(et.getStage(), "draft") != 0) {
            //projectstroy
            ProjectStory projectStory = new ProjectStory();
            projectStory.setProject(et.getProject());
            projectStory.setProduct(et.getProduct());
            projectStory.setStory(et.getId());
            projectStory.setOrder(1);
            projectStory.setVersion(1);
            projectStoryHelper.create(projectStory);
        }

        String action = "Opened";
        String extra = "";
        if (et.getFrombug() != null && et.getFrombug() != 0) {
            action = "Frombug";
            extra = String.valueOf(et.getFrombug());
            Bug bug = new Bug();
            bug.setId(et.getFrombug());
            bug.setTostory(et.getId());
            bug.setStatus("closed");
            bug.setResolution("tostory");
            bug.setResolvedby(AuthenticationUser.getAuthenticationUser().getUsername());
            bug.setResolveddate(ZTDateUtil.now());
            bug.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
            bug.setCloseddate(ZTDateUtil.now());
            bug.setAssignedto("closed");
            bug.setAssigneddate(ZTDateUtil.now());
            bugHelper.internalUpdate(bug);

            /* add files to story from bug. */

            actionHelper.create("bug", et.getFrombug(), "ToStory", "", String.valueOf(et.getId()), AuthenticationUser.getAuthenticationUser().getUsername(), true);

            actionHelper.create("bug", et.getFrombug(), "Closed", "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);

        }

        setStage(et);

        actionHelper.create("story", et.getId(), action, "", extra, AuthenticationUser.getAuthenticationUser().getUsername(), true);

        return true;
    }

    public boolean batchCreate(List<Story> stories) {
        boolean flag = true;

        Long branch = 0l;
        Long product = stories.get(0).getProduct() == 0 ? this.get(stories.get(0).getParent()).getProduct() : stories.get(0).getProduct();
        Timestamp nowDate = ZTDateUtil.now();
        Long module = 0l;
        String plan = "0";
        int pri = 0;
        String source = "";
        Long storyId = stories.get(0).getParent();
        List<Story> storyList = new ArrayList<>();
        for(Story story : stories) {
            if(story.getTitle() == null || "".equals(story.getTitle())) continue;
            story.setModule(story.getModule() != null ? story.getModule() : module);
            story.setPlan(story.getPlan() != null ? story.getPlan() : plan);
            story.setType("story");
            story.setProduct(product);
            story.setSource(story.getSource() != null ? story.getSource() : source);
            story.setPri(story.getPri() != null ? story.getPri() : pri);
            story.setNeednotreview(story.getNeednotreview() != null &&  "0".equals(story.getNeednotreview()) ? "1": null);
//            story.setStatus(story.getNeednotreview() != null && "0".equals(story.getNeednotreview()) ? "active" : "draft");
//            story.setReviewedby(story.getNeednotreview() != null && "0".equals(story.getNeednotreview()) ? "" : AuthenticationUser.getAuthenticationUser().getLoginname());
            story.setOpenedby(AuthenticationUser.getAuthenticationUser().getLoginname());
            story.setAssignedto("");
            story.setReviewedby("");
            story.setOpeneddate(nowDate);
            story.setBranch(story.getBranch() != null ? story.getBranch() : branch);
            story.setVersion(1);
            storyList.add(story);
        }
        String storyIds = "";

        for(Story story : storyList) {
            if(!this.create(story)) {
                continue;
            }
            if(!"".equals(storyIds))  storyIds += ",";

            storyIds += story.getId();
        }
        if(!"".equals(storyIds) && storyId != null) subdivide(storyId,storyIds);
        return flag;
    }

    public void subdivide(Long storyId, String stories) {
        Timestamp nowDate = ZTDateUtil.now();
        Story story = this.get(storyId);
        computeEstimate(storyId);
        Story newStory = new Story();
        newStory.setParent(-1l);
        newStory.setPlan("0");
        newStory.setLastediteddate(nowDate);
        newStory.setLasteditedby(AuthenticationUser.getAuthenticationUser().getLoginname());
        newStory.setId(storyId);
        newStory.setChildstories(story.getChildstories() != null && !"".equals(story.getChildstories()) ? story.getChildstories() + "," + stories : stories);
        this.internalUpdate(newStory);
        List<History> changes = ChangeUtil.diff(story, newStory);
        if(changes.size() > 0) {
            Action action = actionHelper.create("story", story.getId(), "createChildrenStory",
                    "" , stories, AuthenticationUser.getAuthenticationUser().getUsername(), true);
            actionHelper.logHistory(action.getId(), changes);
        }

    }


    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(Story et) {
        Story old = new Story();
        CachedBeanCopier.copy(this.get(et.getId()), old);
        //stages 处理

        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);

        if (et.getProduct() != old.getProduct()) {
            UpdateWrapper<ProjectStory> updateWrapper = new UpdateWrapper<ProjectStory>();
            updateWrapper.set("product", et.getProduct());
            updateWrapper.eq("story", et.getId());
            projectStoryHelper.update(updateWrapper);

            //projectProduct 处理
            //需求相关项目  挪至  新的product
            ArrayList<Long> projects = new ArrayList();
            List<ProjectStory> projectStories = projectStoryHelper.list(new QueryWrapper<ProjectStory>().select("distinct project").eq("story", et.getId()));
            for (ProjectStory projectStory : projectStories) {
                projects.add(projectStory.getProject());
            }
            List<ProjectProduct> projectProducts = peojectProductHelper.list(new QueryWrapper<ProjectProduct>().eq("product", old.getProduct()).in("project", projects).ne("product", et.getProduct()));
            for (ProjectProduct projectProduct : projectProducts) {
                projectProduct.setProduct(et.getProduct());
                peojectProductHelper.create(projectProduct);
            }
        }

        //
        boolean changed = et.getParent() != old.getParent();
        if (old.getParent() > 0) {

            updateParentStatus(et, this.get(old.getParent()), changed);

            if (changed) {
                Story oldParentStory = this.get(old.getParent());
                List<Story> oldChildren = this.list(new QueryWrapper<Story>().eq("parent", old.getParent()));
                if (oldChildren.size() == 0) {
                    Story update = new Story();
                    update.setId(old.getParent());
                    update.setParent(0l);
                    this.internalUpdate(update);
                }
                StringBuilder strChildStories = new StringBuilder();
                for (Story child : oldChildren) {
                    strChildStories.append(child.getId()).append(",");
                }
                Story newParentStory = new Story();
                newParentStory.setId(old.getParent());
                newParentStory.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
                newParentStory.setLastediteddate(ZTDateUtil.now());
                newParentStory.setChildstories(strChildStories.substring(0, strChildStories.length() - 1).toString());
                this.internalUpdate(newParentStory);

                actionHelper.create("story", et.getId(), "unlinkParentStory", "", String.valueOf(old.getParent()), AuthenticationUser.getAuthenticationUser().getUsername(), false);

                Action action = actionHelper.create("story", old.getParent(), "unLinkChildrenStory", "", String.valueOf(et.getId()), AuthenticationUser.getAuthenticationUser().getUsername(), false);

                List<History> changes = ChangeUtil.diff(oldParentStory, newParentStory, new String[]{"lasteditedby", "lastediteddate", "spec", "verify"});
                if (changes.size() > 0) {
                    actionHelper.logHistory(action.getId(), changes);
                }
            }
        }
        if (et.getParent() > 0) {
            updateParentStatus(et, null, changed);
            if (changed) {
                Story oldParentStory = this.get(et.getParent());
                List<Story> children = this.list(new QueryWrapper<Story>().eq("parent", et.getParent()));
                StringBuilder strChildStories = new StringBuilder();
                for (Story child : children) {
                    strChildStories.append(child.getId()).append(",");
                }
                Story newParentStory = new Story();
                newParentStory.setId(et.getParent());
                newParentStory.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
                newParentStory.setLastediteddate(ZTDateUtil.now());
                newParentStory.setChildstories(strChildStories.substring(0, strChildStories.length() - 1).toString());
                this.internalUpdate(newParentStory);

                actionHelper.create("story", et.getId(), "linkParentStory", "", String.valueOf(et.getParent()), AuthenticationUser.getAuthenticationUser().getUsername(), false);

                Action action = actionHelper.create("story", et.getParent(), "linkChildStory", "", String.valueOf(et.getId()), AuthenticationUser.getAuthenticationUser().getUsername(), false);

                List<History> changes = ChangeUtil.diff(oldParentStory, newParentStory, new String[]{"lasteditedby", "lastediteddate", "spec", "verify"});
                if (changes.size() > 0) {
                    actionHelper.logHistory(action.getId(), changes);
                }
            }
        }

        List<History> changes = ChangeUtil.diff(old, et, new String[]{"lasteditedby", "lastediteddate", "spec", "verify"});
        if (StringUtils.isNotBlank(et.getComment()) || changes.size() > 0) {
            String strAction = changes.size() > 0 ? "Edited" : "Commented";
            Action action = actionHelper.create("story", et.getId(), strAction,
                    StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        Story old = this.get(key);
        boolean bOk = super.delete(key);
        if (old.getParent() > 0) {
            updateParentStatus(old, null, true);
            actionHelper.create("story", key, "deleteChildrenStory", "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);
        }
        return bOk;
    }

    @Transactional
    public Story activate(Story et) {
        Story old = new Story();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setStatus("active");
        et.setClosedreason("");
        et.setCloseddate(ZTDateUtil.nul());
        et.setClosedby("");
        et.setRevieweddate(ZTDateUtil.nul());
        et.setReviewedby("");
        et.setAssigneddate(ZTDateUtil.now());
        if (StringUtils.isBlank(et.getAssignedto()))
            et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        this.internalUpdate(et);
        setStage(et);
        if(et.getParent() > 0)
            updateParentStatus(et, this.get(et.getParent()), false);

        List<History> changes = ChangeUtil.diff(old, et, null, new String[]{"status", "stage", "assignedto", "closedby", "closedreason", "closeddate"}, null);
        if (changes.size() > 0) {
            Action action = actionHelper.create("story", et.getId(), "Activated", StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "", String.valueOf(et.getParent()), AuthenticationUser.getAuthenticationUser().getUsername(), false);
            actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Story change(Story et) {
        String comment = et.getComment() == null ? "" : et.getComment();
        Story old = new Story();
        CachedBeanCopier.copy(this.get(et.getId()), old);
        StorySpec oldStorySpec = storySpecHelper.getOne(new QueryWrapper<StorySpec>().eq("story", old.getId()).eq("version", old.getVersion()));
        if (oldStorySpec != null) {
            old.setSpec(oldStorySpec.getSpec());
            old.setVerify(oldStorySpec.getVerify());
        }


        if(!old.getTitle().equals(et.getTitle()) || ((et.getSpec() == null && old.getSpec() != null) || (et.getSpec() != null && !et.getSpec().equals(old.getSpec()))) || ((et.getVerify() == null && old.getVerify() != null) || (et.getVerify() != null && !et.getVerify().equals(old.getVerify())))) {
            et.setVersion(oldStorySpec != null ? oldStorySpec.getVersion() + 1 : et.getVersion() + 1);

            //相关 spec 处理
            oldStorySpec.setStory(et.getId());
            oldStorySpec.setTitle(et.getTitle());
            oldStorySpec.setVerify(et.getVerify());
            oldStorySpec.setSpec(et.getSpec());
            oldStorySpec.setVersion(et.getVersion());
            storySpecHelper.create(oldStorySpec);
            if((et.getNeednotreview() == null || "".equals(et.getNeednotreview())) && "active".equals(et.getStatus())) {
                et.setStatus("changed");
            }
        }

        //
        et.setAssignedto((et.getAssignedto() == null || "".equals(et.getAssignedto()))? old.getAssignedto() : et.getAssignedto());

        this.internalUpdate(et);
        et.setTitle(oldStorySpec.getTitle());
        et.setSpec(oldStorySpec.getSpec());
        et.setVerify(oldStorySpec.getVerify());
        List<History> changes = ChangeUtil.diff(old, et, new String[]{"lasteditedby", "lastediteddate", "versionc"}, null, new String[]{"title", "spec", "verify"});

        if (StringUtils.isNotBlank(comment) || changes.size() > 0) {
            String strAction = changes.size() > 0 ? "Changed" : "Commented";
            Action action = actionHelper.create("story", et.getId(), strAction,
                    comment, "", AuthenticationUser.getAuthenticationUser().getUsername(), true);
            actionHelper.logHistory(action.getId(), changes);
        }


        return et;
    }

    @Transactional
    public Story close(Story et) {
        String comment = et.getComment() == null ? "" : et.getComment();
        Story old = new Story();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        et.setCloseddate(ZTDateUtil.nul());
        et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setStatus("closed");
        et.setStage("closed");
        et.setAssigneddate(ZTDateUtil.now());

        internalUpdate(et);
        if(et.getParent() > 0)
            updateParentStatus(et, this.get(et.getParent()), false);
        List<History> changes = ChangeUtil.diff(old, et, null, new String[]{"status", "stage", "assignedto", "closedby", "closedreason", "closeddate"}, null);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("story", et.getId(), "Closed",
                    comment, et.getClosedreason(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Story assignTo(Story et) {
        String comment = et.getComment() == null ? "" : et.getComment();
        Story old = new Story();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        if (StringUtils.compare(et.getAssignedto(), old.getAssignedto()) == 0)
            return et;

        et.setAssigneddate(ZTDateUtil.now());
        internalUpdate(et);

        List<History> changes = ChangeUtil.diff(old, et, new String[]{"lasteditedby", "assigneddate", "lastediteddate", "spec", "verify"});
        if (changes.size() > 0) {
            Action action = actionHelper.create("story", et.getId(), "Assigned",
                    comment, et.getAssignedto(), null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;

    }

    @Transactional
    public Story review(Story et) {
        String comment = et.getComment() == null ? "" : et.getComment();
        String result = et.getResult();
        Story old = new Story();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        if (et.getRevieweddate() == null)
            et.setRevieweddate(ZTDateUtil.now());
        if (StringUtils.compare(result, "pass") == 0) {
            if (StringUtils.compare(old.getStatus(), "draft") == 0 || StringUtils.compare(old.getStatus(), "changed") == 0)
                et.setStatus("active");
        } else if (StringUtils.compare(result, "reject") == 0) {
            et.setCloseddate(ZTDateUtil.nul());
            et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
            et.setStatus("closed");
            et.setStage("closed");
            et.setAssignedto("closed");
        } else if (StringUtils.compare(result, "revert") == 0) {
            et.setStatus("active");
            StorySpec oldStorySpec = storySpecHelper.getOne(new QueryWrapper<StorySpec>().eq("story", old.getId()).eq("version", et.getPreversion()));
            et.setTitle(oldStorySpec.getTitle());
            et.setVersion(oldStorySpec.getVersion());
        }

        internalUpdate(et);

        List<History> changes = ChangeUtil.diff(old, et, new String[]{"lasteditedby", "lastediteddate"});
        if (changes.size() > 0) {
            Action action = actionHelper.create("story", et.getId(), "Reviewed",
                    comment, result, null, true);
            if (StringUtils.compare(result, "reject") == 0) {
                action = actionHelper.create("story", et.getId(), "Closed",
                        "", et.getClosedreason(), null, true);
            }
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        if("reject".equals(result)) {

            this.setStage(et);

        }
        return et;
    }

    @Transactional
    public Story linkStory(Story et) {
        ProductPlan productPlan = new ProductPlan();
        productPlan.setProduct(et.getProduct());
        productPlan.setId(Long.parseLong(et.get("productplan").toString()));
        String stories = "";
        ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
        for (Map data : list) {
            if (stories.length() > 0)
                stories += ",";
            stories += data.get("id");
        }
        productPlan.set("stories", stories);

        cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).linkStory(productPlan);
        return et;
    }

    @Transactional
    public Story batchUnlinkStory(Story et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Story unlinkStory(Story et) {
        //et = this.get(et.getId());

        if(et.getPlan() == null &&  et.get("productplan") == null) return et;

        ProductPlan productPlan = new ProductPlan();

        productPlan.setId(Long.parseLong(et.getPlan() == null ? et.get("productplan").toString(): et.getPlan()));
        productPlan = productPlanHelper.get(productPlan.getId());
        productPlan.setOrder(productPlan.getOrder().replace(et.getId() + ",", ""));
        productPlanHelper.internalUpdate(productPlan);

        et.setPlan("");
        this.internalUpdate(et);
        actionHelper.create("story", et.getId(), "unlinkedfromplan",
                "",
                et.getPlan(),
                AuthenticationUser.getAuthenticationUser().getUsername(),
                false);


        return et;
    }

    @Transactional
    public Story projectLinkStory(Story et) {
        Project project = new Project();
        project.setId(et.getProject());

        String stories = "";
        ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
        for (Map data : list) {
            if (stories.length() > 0)
                stories += ",";
            stories += data.get("id");
        }
        project.set("stories", stories);

        cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).linkStory(project);
        return et;
    }

    @Transactional
    public Story projectUnlinkStory(Story et) {
        Project project = new Project();
        project.setId(et.getProject());
        project.set("story", et.getId());
        cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).unlinkStory(project);
        return et;
    }

    @Transactional
    public Story projectBatchUnlinkStory(Story et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Story releaseLinkStory(Story et) {
        if(et.get("release") == null)
            return et;
        Release release = new Release();
        release.setId(Long.parseLong(et.get("release").toString()));
        release.set("srfactionparam",et.get("srfactionparam"));
        cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ReleaseHelper.class).linkStory(release);
        return et;
//        throw new RuntimeException("未实现");
    }

    @Transactional
    public Story releaseUnlinkStory(Story et) {
        //et = this.get(et.getId());
        if(et.getId() == null &&  et.get("release") == null) return et;
        Release release = releaseHelper.get(Long.parseLong(et.get("release").toString()));
        Release releaseUpdate = new Release();
        releaseUpdate.setId(release.getId());
        String stories = release.getStories();
        stories = ("," + stories + ",").replace("," + String.valueOf(et.getId()) + ",", ",");
        String regex = "^,*|,*$";
        stories = stories.replaceAll(regex, "");
        releaseUpdate.setStories(stories);
        releaseHelper.internalUpdate(releaseUpdate);
        actionHelper.create("story", et.getId(), "unlinkedfromrelease",
                "",
                et.get("release").toString(),
                AuthenticationUser.getAuthenticationUser().getLoginname(),
                false);
        this.setStage(et);
        return et;
//        throw new RuntimeException("未实现");
    }

    @Transactional
    public Story releaseBatchUnlinkStory(Story et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Story buildLinkStory(Story et) {
        if (et.get("build") == null || et.get("srfactionparam") == null)
            return et;
        Build build = new Build();
        build.setId(Long.parseLong(et.get("build").toString()));
        String stories = "";
        ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
        for (Map data : list) {
            if (stories.length() > 0)
                stories += ",";
            stories += data.get("id");
        }
        build.set("stories", stories);
        buildHelper.linkStory(build);
        return et;
    }

    @Transactional
    public Story buildUnlinkStory(Story et) {
        if (et.get("build") == null)
            return et;
        Build build = new Build();
        build.setId(Long.parseLong(et.get("build").toString()));
        build.set("stories", et.getId());
        buildHelper.unlinkStory(build);
        return et;
    }

    @Transactional
    public Story buildBatchUnlinkStory(Story et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Story importPlanStories(Story et) {
        Project project = new Project();
        project.setId(et.getProject());
        project.setPlans(et.getPlan());
        cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).importPlanStories(project);
        return et;
    }

    @Transactional
    public Story setStage(Story et) {
        log.info("setStage：未实现");
//        StoryStageSearchContext context = new StoryStageSearchContext();
//        context.setN_story_eq(et.getId());
//        List<StoryStage> oldStages = iStoryStageService.searchDefault(context).getContent();
        iStoryStageService.removeByStory(et.getId());

        et = this.get(et.getId());
        if(et.getStagedby() != null && !"".equals(et.getStagedby())) return et;

        Product product = et.getZtproduct();
        boolean hasBranch = (!"normal".equals(product.getType()) && (et.getBranch() == null));

        String releaseSql = String.format("select DISTINCT branch,'released' as stage from zt_release where deleted = '0' and CONCAT(',', stories, ',') like %1$s ","CONCAT('%,'," + et.getId() + ",',%')");
        List<JSONObject> releaseList = iStoryStageService.select(releaseSql, null);
        if(releaseList.size() > 0) {
            if(hasBranch) {
                for(JSONObject jsonObject : releaseList) {
                    StoryStage storyStage = new StoryStage();
                    storyStage.setStory(et.getId());
                    storyStage.setBranch(jsonObject.getLongValue("branch"));
                    storyStage.setStage("released");
                    storyStageHelper.create(storyStage);
                }
            }else {
                Story story = new Story();
                story.setStage("released");
                story.setId(et.getId());
                this.internalUpdate(story);
            }
            return et;
        }

        String projectSql = String.format("select DISTINCT t1.project,t3.branch from zt_projectstory t1 left join zt_project t2 on t1.project = t2.id left join zt_projectproduct t3 on t1.project = t3.project where t1.story = %1$s and t2.deleted = '0'", et.getId());
        List<JSONObject> objectList = iStoryService.select(projectSql, null);
        String projectids = "0";
        for(JSONObject jsonObject : objectList) {
            if(!"".equals(projectids)) {
                projectids += ",";
            }
            projectids += jsonObject.get("project");
        }

        String taskSql = String.format("select DISTINCT t1.project,t3.branch,case when t1.develdone = t1.devel and t1.devel > 0 and t1.testdone = t1.test and t1.test > 0 then 'tested' when (t1.develwait > 0 or t1.develdoing > 0) and t1.testdone = t1.test and t1.test > 0 then 'testing' when t1.testdoing > 0 then 'testing' when t1.develdone = t1.devel and t1.devel > 0 and t1.testwait > 0 and t1.testdone > 0 then 'testing' when t1.develdone = t1.devel and t1.devel > 0 and t1.testwait = t1.test then 'developed' when t1.develwait > 0 and t1.develdone > 0 and t1.testwait = t1.test then 'developing' when t1.develdoing > 0 and t1.testwait = t1.test then 'developing' else 'projected' end as stage from (SELECT t.project, sum( IF ( t.type = 'devel' AND t.`status` = 'wait', t.ss, 0 ) ) AS develwait, sum( IF ( t.type = 'devel' AND t.`status` = 'done', t.ss, 0 ) ) AS develdone,sum( IF ( t.type = 'devel' AND t.`status` = 'doing', t.ss, 0 ) ) AS develdoing, sum( IF ( t.type = 'devel' AND t.`status` = 'pause', t.ss, 0 ) ) AS develpause, sum( IF ( t.type = 'test' AND t.`status` = 'wait', t.ss, 0 ) ) AS testwait, sum( IF ( t.type = 'test' AND t.`status` = 'done', t.ss, 0 ) ) AS testdone, sum( IF ( t.type = 'test' AND t.`status` = 'doing', t.ss, 0 ) ) AS testdoing, sum( IF ( t.type = 'test' AND t.`status` = 'pause', t.ss, 0 ) ) AS testpause, sum( IF ( t.type = 'test', t.ss, 0 ) ) AS test, sum( IF ( t.type = 'devel', t.ss, 0 ) ) AS devel FROM ( SELECT type,project,CASE WHEN `status` IS NULL OR `status` = '' THEN 'wait'  WHEN `status` = 'closed' THEN 'done' ELSE `status`  END `status`, 1 ss  FROM zt_task  WHERE story = %1$s  AND type IN ( 'devel', 'test' )  AND `status` <> 'cancel'  AND closedReason <> 'cancel'  AND deleted = '0'  AND FIND_IN_SET(project,'%2$s')  ) t  GROUP BY t.project) t1 left JOIN zt_projectproduct t3 on t3.project=t1.project", et.getId(), projectids);
        List<JSONObject> taskList = iStoryService.select(taskSql, null);

        if((taskList.isEmpty() || taskList.size() == 0) && objectList.size() > 0) {
           if(hasBranch) {
               for(JSONObject jsonObject : objectList) {
                   // 插入需求阶段
                   StoryStage storyStage = new StoryStage();
                   storyStage.setStory(et.getId());
                   storyStage.setBranch(jsonObject.getLongValue("branch"));
                   storyStage.setStage("projected");
                   storyStageHelper.create(storyStage);
               }
           }

            Story story = new Story();
            story.setStage("projected");
            story.setId(et.getId());
            this.internalUpdate(story);
        }else if(taskList.size() > 0){
            if(hasBranch) {
                for(JSONObject jsonObject : taskList) {
                    // 插入需求阶段
                    StoryStage storyStage = new StoryStage();
                    storyStage.setStory(et.getId());
                    storyStage.setBranch(jsonObject.getLongValue("branch"));
                    storyStage.setStage(jsonObject.getString("stage"));
                    storyStageHelper.create(storyStage);
                }

            }
            Story story = new Story();
            story.setStage(taskList.get(0).getString("stage"));
            story.setId(et.getId());
            this.internalUpdate(story);
            return et;
        }

        Map<Long,String> stages = new HashMap<>();

        if(hasBranch && (et.getPlan() != null  || !"".equals(et.getPlan()))) {
            String planSql = String.format("select DISTINCT branch from zt_productplan where FIND_IN_SET(id, %1$s) ", et.getPlan());
            List<JSONObject> planList = iStoryService.select(planSql, null);
            for(JSONObject jsonObject : planList) {
                stages.put(jsonObject.getLongValue("branch"), "planned");
            }
        }
        if(objectList.size() > 0) {
            if(et.getPlan() == null || "".equals(et.getPlan())) {
                Story story = new Story();
                story.setStage("wait");
                story.setId(et.getId());
                this.internalUpdate(story);
            }else if(!"0".equals(et.getPlan())){
                Story story = new Story();
                story.setStage("planned");
                story.setId(et.getId());
                this.internalUpdate(story);
            }
            if(hasBranch) {
                iStoryStageService.removeByStory(et.getId());
                for (Long branch : stages.keySet()) {
                    String stage = stages.get(branch);

                    StoryStage storyStage = new StoryStage();
                    storyStage.setStory(et.getId());
                    storyStage.setBranch(branch);
                    storyStage.setStage(stage);
                    storyStageHelper.create(storyStage);
                }
            }
        }else {
            if(et.getPlan() != null && !"".equals(et.getPlan()) && !"0".equals(et.getPlan())){
                Story story = new Story();
                story.setStage("planned");
                story.setId(et.getId());
                this.internalUpdate(story);
            }
        }
        return et;
    }

    @Transactional
    public void updateParentStatus(Story story, Story parentStory, boolean changed) {
        log.info("updateParentStatus：未实现");

        if (parentStory == null) parentStory = this.get(story.getParent());

        if(parentStory == null) {
            Story story1 = new Story();
            story1.setParent(0l);
            story1.setId(story.getId());
            this.internalUpdate(story1);
            return;
        }
        if(parentStory.getParent() != -1 ) {
            Story parentStory1 = new Story();
            parentStory1.setId(parentStory.getId());
            parentStory1.setParent(-1l);
            this.internalUpdate(parentStory1);
            parentStory.setParent(-1l);
        }
        computeEstimate(parentStory.getId());
        String sql = String.format("select id,`status` from zt_story where parent = %1$s and deleted = '0'", parentStory.getId());
        List<JSONObject> childrenStatus = iStoryService.select(sql, null);
        if(childrenStatus.size() == 0) {
            Story parentStory1 = new Story();
            parentStory1.setId(parentStory.getId());
            parentStory1.setParent(-1l);
            this.internalUpdate(parentStory1);

            return ;
        }
        String parentStatus = parentStory.getStatus();
        if(childrenStatus.size() == 1 && !"changed".equals(parentStatus)) {
            parentStatus = childrenStatus.get(0).getString("status");
            if("draft".equals(parentStatus) || "changed".equals(parentStatus))
                parentStatus = "active";
        }else if(childrenStatus.size() > 1 && "closed".equals(parentStatus)) {
            parentStatus = "active";
        }

        if(parentStatus != null && parentStatus.equals(parentStory.getStatus())) {
            Story story1 = new Story();
            Timestamp timestamp = ZTDateUtil.now();
            story1.setStatus(parentStatus);
            story1.setStage("wait");
            if("active".equals(parentStatus)) {
                story1.setAssignedto(parentStory.getOpenedby());
                story1.setAssigneddate(timestamp);
                story1.setClosedby("");
                story1.setClosedreason("");
                story1.set("Closeddate","0000-00-00");
                story1.setReviewedby("");
                story1.set("reviewedDate","0000-00-00");
            }
            else if("closed".equals(parentStatus)) {
                story1.setAssignedto("closed");
                story1.setAssigneddate(timestamp);
                story1.setClosedby(AuthenticationUser.getAuthenticationUser().getLoginname());
                story1.setClosedreason("done");
                story1.setCloseddate(timestamp);
            }
            story1.setLasteditedby(AuthenticationUser.getAuthenticationUser().getLoginname());
            story1.setLastediteddate(timestamp);
            story1.setParent(-1L);
            story1.setId(parentStory.getId());
            if(!this.internalUpdate(story1)) {
                if (changed)
                    return ;
                Story newParentStory = this.get(parentStory.getId());
                List<History> changes = ChangeUtil.diff(parentStory, newParentStory);
                if (changes.size() > 0) {
                    String actionType = "active".equals(parentStatus) ? "Activated" : "closed".equals(parentStatus) ? "Closed" : "";
                    Action action = actionHelper.create("story", parentStory.getId(), actionType,
                            "", "", null, true);
                    if (changes.size() > 0)
                        actionHelper.logHistory(action.getId(), changes);
                }
            }
        }else {
            if (changed)
                return ;
            Story newParentStory = this.get(parentStory.getId());
            List<History> changes = ChangeUtil.diff(parentStory, newParentStory);
            if (changes.size() > 0) {
                Action action = actionHelper.create("story", parentStory.getId(), "Edited",
                        "", "", null, true);
                if (changes.size() > 0)
                    actionHelper.logHistory(action.getId(), changes);
            }
        }
    }

    /**
     *
     * @param parentStoryId
     */
    @Transactional
    public void computeEstimate(Long parentStoryId) {
        String sql =String.format( "select `id`,`estimate`,`status` from zt_story where deleted = '0' and parent = %1$s ", parentStoryId) ;

        List<JSONObject> list = iStoryService.select(sql, null);
        if(list.size() == 0) return;

        double estimate = 0d;
        for(JSONObject jsonObject : list) {
            estimate += jsonObject.getDoubleValue("estimate");
        }
        Story parentStory = new Story();
        parentStory.setId(parentStoryId);
        parentStory.setEstimate(estimate);
        this.internalUpdate(parentStory);
    }

}
