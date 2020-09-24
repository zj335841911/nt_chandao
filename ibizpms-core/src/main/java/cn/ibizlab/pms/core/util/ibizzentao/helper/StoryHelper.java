package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.ZTBaseHelper;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.StoryMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import liquibase.pro.packaged.S;
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

        if (et.getProject() != 0l && StringUtils.compare(et.getStage(), "draft") != 0) {
            //projectstroy
            ProjectStory projectStory = new ProjectStory();
            projectStory.setProject(et.getProject());
            projectStory.setProduct(et.getProduct());
            projectStory.setStory(et.getId());
            projectStory.setOrder(1);
            projectStory.setVersion(1);
            projectStoryHelper.create(projectStory);
        }

        if (et.getFrombug() != 0) {
            Bug bug = new Bug();
            bug.setId(et.getFrombug());
            bug.setTostory(et.getId());
            bug.setStatus("closed");
            bug.setResolution("tostory");
            bug.setResolvedby(AuthenticationUser.getAuthenticationUser().getUsername());
            bug.setResolveddate(new Timestamp(System.currentTimeMillis()));
            bug.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
            bug.setCloseddate(new Timestamp(System.currentTimeMillis()));
            bug.setAssignedto("closed");
            bug.setAssigneddate(new Timestamp(System.currentTimeMillis()));
            bugHelper.internalUpdate(bug);

            /* add files to story from bug. */

            actionHelper.create("bug", et.getFrombug(), "ToStory", "", String.valueOf(et.getId()), AuthenticationUser.getAuthenticationUser().getUsername(), true);

            actionHelper.create("bug", et.getFrombug(), "Closed", "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);

        }

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
                newParentStory.setLastediteddate(new Timestamp(System.currentTimeMillis()));
                newParentStory.setChildstories(strChildStories.substring(0,strChildStories.length()-1).toString());
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

        }

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create("product", et.getId(), "edited", "", "", AuthenticationUser.getAuthenticationUser().getUsername(), true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    public void updateParentStatus(Story story, Story parentStory, boolean changed) {
        log.info("updateParentStatus：未实现");
        if (parentStory == null) return;


    }

}
