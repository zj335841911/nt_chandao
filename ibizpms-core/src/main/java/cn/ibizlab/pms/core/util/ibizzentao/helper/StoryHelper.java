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

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

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
    PeojectProductHelper peojectProductHelper;

    @Autowired
    BugHelper bugHelper;

    @Transactional
    public boolean create(Story et) {
        fileHelper.processImgURL(et, null, null);
        super.create(et);
        fileHelper.updateObjectID(null, et.getId(), "story");
        fileHelper.saveUpload("story", et.getId(), "", "", "");

        //storyspec create
        StorySpec storySpec = new StorySpec();
        storySpec.setStory(et.getId());
        storySpec.setTitle(et.getTitle());
        storySpec.setSpec(et.getSpec());
        storySpec.setVerify(et.getVerify());
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
        Story old = this.get(et.getId());

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

                List<History> changes = ChangeUtil.diff(oldParentStory, newParentStory);
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

                List<History> changes = ChangeUtil.diff(oldParentStory, newParentStory);
                if (changes.size() > 0) {
                    actionHelper.logHistory(action.getId(), changes);
                }
            }
        }

        List<History> changes = ChangeUtil.diff(old, et);
        if (StringUtils.isNotBlank(et.getComment()) || changes.size() > 0) {
            String strAction = changes.size() > 0 ? "Edited" : "Commented";
            Action action = actionHelper.create("story", et.getId(), strAction,
                    StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Override
    public boolean delete(Long key) {
        Story old = this.get(key);
        boolean bOk = super.delete(key);
        if (old.getParent() > 0) {
            updateParentStatus(old, null, true);
            actionHelper.create("story", key, "deleteChildrenStory", "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);
        }
        return bOk;
    }

    public Story activate(Story et) {
        Story old = this.get(et.getId());

        et.setClosedreason("");
        et.setCloseddate(ZTDateUtil.nul());
        et.setClosedby("");
        et.setRevieweddate(ZTDateUtil.nul());
        et.setReviewedby("");
        et.setAssigneddate(ZTDateUtil.now());
        this.internalUpdate(et);
        setStage(et);

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create("story", et.getId(), "Activated", StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "", String.valueOf(et.getParent()), AuthenticationUser.getAuthenticationUser().getUsername(), false);
            actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    public Story change(Story et) {
        Story old = this.get(et.getId());
        StorySpec oldStorySpec = storySpecHelper.getOne(new QueryWrapper<StorySpec>().eq("story", old.getId()).eq("version", old.getVersion()));

        //相关 spec 处理

        this.internalUpdate(et);

        List<History> changes = ChangeUtil.diff(old, et);
        if (StringUtils.isNotBlank(et.getComment()) || changes.size() > 0) {
            String strAction = changes.size() > 0 ? "Changed" : "Commented";
            Action action = actionHelper.create("story", et.getId(), strAction,
                    StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);
            actionHelper.logHistory(action.getId(), changes);
        }


        return et;
    }

    public Story close(Story et) {
        Story old = this.get(et.getId());

        et.setCloseddate(ZTDateUtil.nul());
        et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setStatus("closed");
        et.setStage("closed");
        et.setAssigneddate(ZTDateUtil.now());

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create("story", et.getId(), "Closed",
                    StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "",
                    et.getClosedreason(),
                    AuthenticationUser.getAuthenticationUser().getUsername(),
                    false);
            actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }


    public Story setStage(Story et){
        log.info("setStage：未实现");
        return et ;
    }

    public void updateParentStatus(Story story, Story parentStory, boolean changed) {
        log.info("updateParentStatus：未实现");
        if (parentStory == null) return;
    }

}
