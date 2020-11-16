package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.BugMapper;
import cn.ibizlab.pms.core.zentao.service.IBugService;
import cn.ibizlab.pms.core.zentao.service.IStoryService;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/**
 * @author chenxiang
 */
@Component
@Slf4j
public class BugHelper extends ZTBaseHelper<BugMapper, Bug> {

    @Autowired
    BuildHelper buildHelper;

    @Autowired
    ReleaseHelper releaseHelper;

    @Autowired
    TestTaskHelper testTaskHelper;

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    StoryHelper storyHelper;

    @Autowired
    CaseHelper caseHelper;

    String[] diffAttrs = {"steps"};

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(Bug et) {
        et.setStoryversion(et.getStory() != null && et.getStory() != 0 ? storyHelper.get(et.getStory()).getVersion() : 1);
        et.setCaseversion(et.getIbizcase() != null && et.getIbizcase() != 0 ? caseHelper.get(et.getIbizcase()).getVersion() : 1);
        String files = et.getFiles();
        String noticeusers = et.getNoticeusers();
        if (!super.create(et)) {
            return false;
        }
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.BUG.getValue(), files, "");
        actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.OPENED.getValue(), "", "", null, true);
        actionHelper.sendTodo(et.getId(),et.getTitle(),noticeusers,et.getAssignedto(),et.getMailto(), IBugService.OBJECT_TEXT_NAME,StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, StaticDict.Action__type.OPENED.getValue());
        return true;
    }
    /**
     * edit 编辑
     *
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(Bug et) {
        Bug old = new Bug();
        CachedBeanCopier.copy(this.get(et.getId()), old);

        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";

        fileHelper.processImgURL(et, null, null);
        String files = et.getFiles();
        String noticeusers = et.getNoticeusers();
        this.internalUpdate(et);
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.BUG.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et,null,null,diffAttrs);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {

            String strAction = StaticDict.Action__type.EDITED.getValue();
            if (changes.size() == 0) {
                strAction = StaticDict.Action__type.COMMENTED.getValue();
            }
            actionHelper.sendToread(et.getId(),et.getTitle(),noticeusers,et.getAssignedto(),et.getMailto(), IBugService.OBJECT_TEXT_NAME,StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, strAction);
            Action action = actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), strAction,
                    comment, "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug assignTo(Bug et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Bug old = new Bug();
        CachedBeanCopier.copy(get(et.getId()), old);
        if(StringUtils.isBlank(et.getAssignedto())) {
            et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        }
        String files = et.getFiles();
        String noticeusers = et.getNoticeusers();
        this.internalUpdate(et);
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.BUG.getValue(), files, "");
        List<History> changes = ChangeUtil.diff(old, et);
        actionHelper.sendTodo(et.getId(),et.getTitle(),noticeusers,et.getAssignedto(),et.getMailto(), IBugService.OBJECT_TEXT_NAME,StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, StaticDict.Action__type.ASSIGNED.getValue());
        Action action = actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.ASSIGNED.getValue(),
                comment, et.getAssignedto(), null, true);
        if (changes.size() > 0) {
            actionHelper.logHistory(action.getId(), changes);
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug activate(Bug et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Bug old = new Bug();
        CachedBeanCopier.copy(get(et.getId()), old);

        if(StringUtils.isBlank(et.getAssignedto()) || StringUtils.compare(et.getAssignedto(),StaticDict.Bug__status.CLOSED.getValue())==0) {
            et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        }
        et.setActivatedcount(old.getActivatedcount() + 1);
        et.setAssigneddate(ZTDateUtil.now());
        et.setActivateddate(ZTDateUtil.now());
        et.setClosedby("");
        et.setCloseddate(null);
        et.setStatus(StaticDict.Bug__status.ACTIVE.getValue());
        et.setResolution("");
        et.setResolvedby("");
        et.setResolveddate(null);
        et.setResolvedbuild("0");
        et.setDuplicatebug(0L);
        et.setTotask(0L);
        et.setTostory(0L);

        String files = et.getFiles();
        String noticeusers = et.getNoticeusers();
        internalUpdate(et);
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.BUG.getValue(), files, "");
        actionHelper.sendTodo(et.getId(),et.getTitle(),noticeusers,et.getAssignedto(),et.getMailto(), IBugService.OBJECT_TEXT_NAME,StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, StaticDict.Action__type.ACTIVATED.getValue());
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.ACTIVATED.getValue(),
                    comment, "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug confirm(Bug et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Bug old = new Bug();
        CachedBeanCopier.copy(get(et.getId()), old);

        et.setConfirmed(1);
        if (StringUtils.isBlank(et.getAssignedto())) {
            et.setAssignedto(AuthenticationUser.getAuthenticationUser().getUsername());
        }
        et.setAssigneddate(ZTDateUtil.now());
        String noticeusers = et.getNoticeusers();
        this.internalUpdate(et);
        actionHelper.sendToread(et.getId(),et.getTitle(),noticeusers,et.getAssignedto(),et.getMailto(), IBugService.OBJECT_TEXT_NAME,StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, StaticDict.Action__type.BUGCONFIRMED.getValue());
        List<History> changes = ChangeUtil.diff(old, et, null, new String[]{"confirmed", "assignedto"}, null);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.BUGCONFIRMED.getValue(),
                    comment, "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }

        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug resolve(Bug et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Bug old = new Bug();
        CachedBeanCopier.copy(get(et.getId()), old);

        et.setConfirmed(1);
        et.setStatus(StaticDict.Bug__status.RESOLVED.getValue());
        et.setResolvedby(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setResolveddate(ZTDateUtil.now());

        //创建版本
        if (et.getCreatebuild() != null && et.getCreatebuild() == 1) {
            Build build = new Build();
            build.setProject(Long.parseLong(et.getBuildproject()));
            build.setName(et.getBuildname());
            build.setDate(ZTDateUtil.now());
            build.setProduct(et.getProduct());
            build.setBuilder(AuthenticationUser.getAuthenticationUser().getUsername());
            buildHelper.create(build);
            et.setResolvedbuild(String.valueOf(build.getId()));
        }

        if (StringUtils.isNotBlank(et.getResolvedbuild()) && StringUtils.compare(et.getResolvedbuild(), "trunk") != 0) {
            TestTask testTask = testTaskHelper.getOne(new QueryWrapper<TestTask>().eq("build", et.getResolvedbuild()).orderByDesc("`id`").last("limit 0,1"));
            if (testTask != null) {
                et.setTesttask(testTask.getId());
            }
        }

        String files = et.getFiles();
        String noticeusers = et.getNoticeusers();
        internalUpdate(et);
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.BUG.getValue(), files, "");
        actionHelper.sendTodo(et.getId(),et.getTitle(),noticeusers,et.getAssignedto(),et.getMailto(), IBugService.OBJECT_TEXT_NAME,StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, StaticDict.Action__type.RESOLVED.getValue());
        //关联
        et.set("builds", et.getResolvedbuild());
        et.set("ids", et.getId());
        buildLinkBug(et);

        //release关联
        Release release = releaseHelper.getOne(new QueryWrapper<Release>().eq("build", et.getResolvedbuild()).eq("product", et.getProduct()).ne("build", 0).last(" LIMIT 0,1 "));
        if (release != null) {
            et.set("release", release.getId());
            linkBug(et);
        }

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.RESOLVED.getValue(),
                    comment, et.getResolution(), null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }

        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug close(Bug et) {
        String comment = StringUtils.isNotBlank(et.getComment()) ? et.getComment() : "";
        Bug old = new Bug();
        CachedBeanCopier.copy(get(et.getId()), old);

        et.setAssignedto(StaticDict.Bug__status.CLOSED.getValue());
        et.setAssigneddate(ZTDateUtil.now());
        et.setClosedby(AuthenticationUser.getAuthenticationUser().getUsername());
        et.setCloseddate(ZTDateUtil.now());
        et.setStatus(StaticDict.Bug__status.CLOSED.getValue());
        et.setConfirmed(1);
        String noticeusers = et.getNoticeusers();
        internalUpdate(et);
        actionHelper.sendToread(et.getId(), et.getTitle(), noticeusers, et.getAssignedto(), et.getMailto(), IBugService.OBJECT_TEXT_NAME, StaticDict.Action__object_type.BUG.getValue(), IBugService.OBJECT_SOURCE_PATH, StaticDict.Action__type.CLOSED.getValue());
        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0 || StringUtils.isNotBlank(comment)) {
            Action action = actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.CLOSED.getValue(),
                    comment, "", null, true);
            if (changes.size() > 0) {
                actionHelper.logHistory(action.getId(), changes);
            }
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug linkBug(Bug et) {
        //release
        if (et.get("release") != null) {

            Release release = releaseHelper.get(Long.parseLong(et.get("release").toString()));

            if (release != null) {
                if (StringUtils.isBlank(release.getBugs())) {
                    release.setBugs(String.valueOf(et.getId()));
                    releaseHelper.internalUpdate(release);
                } else {
                    if (!("," + release.getBugs()).contains("," + et.getId())) {
                        release.setBugs(release.getBugs() + "," + et.getId());
                        releaseHelper.internalUpdate(release);
                        actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.LINKED2RELEASE.getValue(),
                                "", String.valueOf(release.getId()), null, true);
                    }
                }
            }
        }

        if (et.get("productplan") != null) {
            ProductPlan productPlan = new ProductPlan();
            productPlan.setId(Long.parseLong(et.get("productplan").toString()));
            String bugs = "";
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            for (Map data : list) {
                if (bugs.length() > 0) {
                    bugs += ",";
                }
                bugs += data.get("id");
            }
            productPlan.set("bugs",bugs);
            SpringContextHolder.getBean(ProductPlanHelper.class).linkBug(productPlan);
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug unlinkBug(Bug et) {
        //release
        if (et.get("release") != null) {
            Release release = releaseHelper.get(Long.parseLong(et.get("release").toString()));

            if (("," + release.getBugs()).contains("," + et.getId())) {
                release.setBugs(("," + release.getBugs()).replace("," + et.getId(), ""));
                releaseHelper.internalUpdate(release);
                actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.UNLINKEDFROMRELEASE.getValue(),
                        "", String.valueOf(release.getId()), null, true);
            }
        }

        if (et.get("productplan") != null) {
            ProductPlan productPlan = new ProductPlan();
            productPlan.setId(Long.parseLong(et.get("productplan").toString()));
            productPlan.set("bugs",et.getId());
            SpringContextHolder.getBean(ProductPlanHelper.class).unlinkBug(productPlan);


        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug batchUnlinkBug(Bug et) {
        throw new RuntimeException("未实现");
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug buildLinkBug(Bug et) {
        //build
        if (et.get("builds") == null) {
            return et;
        }
        if (et.get("ids") == null) {
            return et;
        }
        if("trunk".equals(et.get("builds").toString().split(",")[0])) {
            return et;
        }

        Build build = new Build();
        build.setId(Long.parseLong(et.get("builds").toString().split(",")[0]));
        build.set("bugs", et.get("ids"));
        build.set("resolvedby", et.getResolvedby());
        buildHelper.linkBug(build);

        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug buildUnlinkBug(Bug et) {
        //build
        if (et.get("build") == null) {
            return et;
        }
        Build build = new Build();
        build.setId(Long.parseLong(et.get("build").toString()));
        build.set("bugs", et.getId());
        buildHelper.unlinkBug(build);
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug buildBatchUnlinkBug(Bug et) {
        throw new RuntimeException("未实现");
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug releaseUnlinkBug(Bug et) {
        if(et.getId() == null &&  et.get("release") == null) {
            return et;
        }
        Release release = releaseHelper.get(Long.parseLong(et.get("release").toString()));
        Release releaseUpdate = new Release();
        releaseUpdate.setId(release.getId());
        String bugs = release.getBugs();
        bugs = ("," + bugs + ",").replace("," + String.valueOf(et.getId()) + ",", ",");
        String regex = "^,*|,*$";
        bugs = bugs.replaceAll(regex, "");
        releaseUpdate.setBugs(bugs);
        releaseHelper.internalUpdate(releaseUpdate);
        actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.UNLINKEDFROMRELEASE.getValue(),
                "",
                et.get("release").toString(),
                AuthenticationUser.getAuthenticationUser().getUsername(),
                false);

        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug releaseUnLinkBugbyLeftBug(Bug et) {
        if(et.getId() == null &&  et.get("release") == null) {
            return et;
        }
        Release release = releaseHelper.get(Long.parseLong(et.get("release").toString()));
        Release releaseUpdate = new Release();
        releaseUpdate.setId(release.getId());
        String leftbugs = release.getLeftbugs();
        leftbugs = ("," + leftbugs + ",").replace("," + String.valueOf(et.getId()) + ",", ",");
        String regex = "^,*|,*$";
        leftbugs = leftbugs.replaceAll(regex, "");
        releaseUpdate.setLeftbugs(leftbugs);
        releaseHelper.internalUpdate(releaseUpdate);

        actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), et.getId(), StaticDict.Action__type.UNLINKEDFROMRELEASE.getValue(),
                "",
                et.get("release").toString(),
                AuthenticationUser.getAuthenticationUser().getUsername(),
                false);

        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug releaseLinkBugbyBug(Bug et) {
        if(et.get("release") == null) {
            return et;
        }
        Release release = new Release();
        release.setId(Long.parseLong(et.get("release").toString()));
        release.set("srfactionparam",et.get("srfactionparam"));
        SpringContextHolder.getBean(ReleaseHelper.class).linkBug(release);
        return  et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug releaseLinkBugbyLeftBug(Bug et) {
        if(et.get("release") == null) {
            return et;
        }
        Release release = new Release();
        release.setId(Long.parseLong(et.get("release").toString()));
        release.set("srfactionparam",et.get("srfactionparam"));
        SpringContextHolder.getBean(ReleaseHelper.class).linkBugbyLeftBug(release);
        return  et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug releaaseBatchUnlinkBug(Bug et) {
        throw new RuntimeException("未实现");
    }

    @Transactional(rollbackFor = Exception.class)
    public Bug toStory(Bug et) {
        throw new RuntimeException("未实现");
    }
}
