package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;
import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.ProjectMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@Slf4j
public class ProjectHelper extends ZTBaseHelper<ProjectMapper, Project> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    DocLibHelper docLibHelper;

    @Autowired
    ProjectProductHelper projectProductHelper;

    @Autowired
    ProjectStoryHelper projectStoryHelper;

    @Autowired
    StoryHelper storyHelper;

    @Autowired
    TaskHelper taskHelper;

    @Autowired
    TeamHelper teamHelper;

    String[] diffAttrs = {"desc"};

    @Override
    @Transactional
    public boolean create(Project et) {

        JSONArray projectproducts = JSONArray.parseArray(et.getSrfarray());
        fileHelper.processImgURL(et, null, null);
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        fileHelper.updateObjectID(null, et.getId(), "product");

        //更新order
        et.setOrder(et.getId().intValue() * 5);
        internalUpdate(et);

        //DocLib
        DocLib docLib = new DocLib();
        docLib.setType("project");
        docLib.setProduct(et.getId());
        docLib.setName("项目主库");
        docLib.setMain(1);
        docLib.setAcl("default");
        docLibHelper.create(docLib);

        //Team
        Team team = new Team();
        team.setType("project");
        team.setRoot(et.getId());
        team.setAccount(AuthenticationUser.getAuthenticationUser().getUsername());
        team.setJoin(ZTDateUtil.now());
        team.setRole("");
        team.setDays(et.getDays());
        team.setHours(7.0);
        teamHelper.create(team);

        //关联产品
        projectProductHelper.remove(new QueryWrapper<ProjectProduct>().eq("project", et.getId()));
        if(projectproducts != null) {
            for (int i = 0; i < projectproducts.size(); i++) {
                JSONObject json = projectproducts.getJSONObject(i);
                ProjectProduct projectProduct = new ProjectProduct();
                projectProduct.setProject(et.getId());
                if (json.containsKey("products")) {
                    projectProduct.setProduct(json.getLongValue("products"));
                } else {
                    continue;
                }
                projectProduct.setPlan(json.getLongValue("plans"));
                projectProduct.setBranch(json.getLongValue("branchs"));
                projectProductHelper.create(projectProduct);
            }
        }

        actionHelper.create("project", et.getId(), "opened", "",
                StringUtils.isNotBlank(et.getProducts()) ? et.getProducts() : "", null, true);


        return true;
    }


    @Transactional
    public boolean edit(Project et) {
        String comment = et.getComment() == null ? "" : et.getComment();
        JSONArray projectproducts = JSONArray.parseArray(et.getSrfarray());
        Project old = new Project();
        CachedBeanCopier.copy(get(et.getId()), old);
        fileHelper.processImgURL(et, null, null);

        fileHelper.processImgURL(et, null, null);
        if (!this.internalUpdate(et))
            return false;
        fileHelper.updateObjectID(null, et.getId(), "project");

        //关联产品
        projectProductHelper.remove(new QueryWrapper<ProjectProduct>().eq("project", et.getId()));
        if(projectproducts != null) {
            for (int i = 0; i < projectproducts.size(); i++) {
                JSONObject json = projectproducts.getJSONObject(i);
                ProjectProduct projectProduct = new ProjectProduct();
                projectProduct.setProject(et.getId());
                if (json.containsKey("products") && json.get("products") != null) {
                    projectProduct.setProduct(json.getLongValue("products"));
                } else {
                    continue;
                }
                projectProduct.setPlan(json.getLongValue("plans"));
                projectProduct.setBranch(json.getLongValue("branchs"));
                projectProductHelper.create(projectProduct);
            }
        }

        //Team 处理

        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
        if (changes.size() > 0) {
            Action action = actionHelper.create("project", et.getId(), "edited", comment, "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }

        return true;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {

        boolean result = removeById(key);

        //删除doclib
        docLibHelper.remove(new QueryWrapper<DocLib>().eq("project", key));

        return result;
    }

    @Transactional
    public Project start(Project et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Project old = new Project();
        CachedBeanCopier.copy(get(et.getId()), old);
        et.setStatus("doing");
        this.internalUpdate(et);
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("project", et.getId(), "Started",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Project activate(Project et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Project old = new Project();
        CachedBeanCopier.copy(get(et.getId()), old);
        et.setStatus("doing");
        this.internalUpdate(et);
        /* Readjust task. */
        log.info("Readjust task 未实现");

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("project", et.getId(), "Activated",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Project close(Project et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Project old = new Project();
        CachedBeanCopier.copy(get(et.getId()), old);
        et.setStatus("closed");
        et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setCloseddate(ZTDateUtil.now());
        this.internalUpdate(et);
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("project", et.getId(), "Closed",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Project putoff(Project et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Project old = new Project();
        CachedBeanCopier.copy(et.getId(), et);
        this.internalUpdate(et);
        List<History> changes = ChangeUtil.diff(old, et, null, new String[]{"end", "days"}, null);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("project", et.getId(), "Delayed",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Project suspend(Project et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Project old = new Project();
        CachedBeanCopier.copy(get(et.getId()), old);
        et.setStatus("suspended");
        this.internalUpdate(et);
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create("project", et.getId(), "Suspended",
                    comment, "", null, true);
            if (changes.size() > 0)
                actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional
    public Project linkStory(Project et) {
        if (et.getId() == null || et.get("stories") == null)
            return et;

        int order = -1;
        ProjectStory maxProjectStory = projectStoryHelper.getOne(new QueryWrapper<ProjectStory>().eq("project", et.getId()).orderByDesc("`order`").last("limit 0,1"));
        if (maxProjectStory != null)
            order = maxProjectStory.getOrder();

        for (String storyId :  et.get("stories").toString().split(",")) {
            Story story = storyHelper.get(Long.parseLong(storyId));
            ProjectStory exists = projectStoryHelper.getOne(new QueryWrapper<ProjectStory>().eq("project", et.getId()).eq("story", story.getId()));
            if (exists != null)
                continue;
            ProjectStory projectStory = new ProjectStory();
            projectStory.setProject(et.getId());
            projectStory.setStory(story.getId());
            projectStory.setProduct(story.getProduct());
            projectStory.setVersion(story.getVersion());
            projectStory.setOrder(++order);
            projectStoryHelper.create(projectStory);

            actionHelper.create("story", story.getId(), "linked2project",
                    "", String.valueOf(et.getId()), null, true);
        }


        return et;
    }

    @Transactional
    public Project unlinkStory(Project et) {
        if (et.getId() == null || et.get("story") == null)
            throw new RuntimeException("解除需求错误");

        projectStoryHelper.remove(new QueryWrapper<ProjectStory>().eq("project", et.getId()).eq("story", et.get("story")));

        //order 处理

        actionHelper.create("story", Long.parseLong(et.get("story").toString()), "unlinkedfromproject",
                "", String.valueOf(et.getId()), null, true);

        //需求的task处理
        List<Task> tasks = taskHelper.list(new QueryWrapper<Task>().eq("story", et.get("story")).eq("project", et.getId()).in("status", "wait", "doing"));
        for (Task task : tasks) {
            taskHelper.cancel(task);
        }


        return et;
    }

    @Transactional
    public Project batchUnlinkStory(Project et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Project manageMembers(Project et) {
        List<ProjectTeam> list = et.getProjectteam();
        teamHelper.remove(new QueryWrapper<Team>().eq("type","project").eq("root", et.getId()));
        for(ProjectTeam projectTeam : list) {
            projectTeam.setType("project");
            Team team = new Team();
            CachedBeanCopier.copy(projectTeam, team);
            teamHelper.create(team);
        }
        return et;
    }

    @Transactional
    public Project unlinkMember(Project et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Project updateOrder(Project et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Project importPlanStories(Project et) {
        List<Story> planStories = storyHelper.list(new QueryWrapper<Story>().eq("plan", et.getPlans()));
        String stories = "" ;
        for (Story story : planStories) {
            if(stories.length()>0)
                stories += ",";
            stories += story.getId() ;
        }
        if (StringUtils.isNotBlank(stories)) {
            et.set("stories", stories);
            linkStory(et);
        }
        return et;
    }
}
