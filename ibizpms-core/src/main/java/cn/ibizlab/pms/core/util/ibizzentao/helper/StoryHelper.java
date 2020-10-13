package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.StoryMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
    ProjectStoryHelper projectStoryHelper;

    @Autowired
    ProjectProductHelper peojectProductHelper;

    @Autowired
    ProductPlanHelper productPlanHelper;

    @Autowired
    BuildHelper buildHelper;

    @Autowired
    BugHelper bugHelper;

    @Transactional
    public boolean create(Story et) {
        String strSpec = et.getSpec();
        String strVerify = et.getVerify();
        fileHelper.processImgURL(et, null, null);
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
            List<ProjectProduct> projectProducts = peojectProductHelper.list(new QueryWrapper<ProjectProduct>().eq("product", old.getProduct()).in("project", projects));
            for (ProjectProduct projectProduct : projectProducts) {
                projectProduct.setProduct(et.getProduct());
                peojectProductHelper.create(projectProduct);
            }
        }

        //
        boolean changed = et.getParent() != old.getParent();
        if (old.getParent() > 0) {

            updateParentStatus(et, null, changed);

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


        et.setVersion(old.getVersion() + 1);


        //相关 spec 处理
        oldStorySpec.setStory(et.getId());
        oldStorySpec.setTitle(et.getTitle());
        oldStorySpec.setVerify(et.getVerify());
        oldStorySpec.setSpec(et.getSpec());
        oldStorySpec.setVersion(et.getVersion());
        storySpecHelper.create(oldStorySpec);

        //
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

        ProductPlan productPlan = new ProductPlan();
        productPlan.setId(Long.parseLong(et.getPlan()));
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
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Story releaseUnlinkStory(Story et) {
        throw new RuntimeException("未实现");
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
        return et;
    }

    @Transactional
    public void updateParentStatus(Story story, Story parentStory, boolean changed) {
        log.info("updateParentStatus：未实现");
        if (parentStory == null) return;
    }

}
