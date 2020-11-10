package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.mapper.ReleaseMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ReleaseHelper extends ZTBaseHelper<ReleaseMapper, Release> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    BuildHelper buildHelper;

    @Autowired
    BugHelper bugHelper;

    @Autowired
    StoryHelper storyHelper;

    @Autowired
    StoryStageHelper storyStageHelper;

    @Autowired
    ProductHelper productHelper;

    @Override
    @Transactional
    public boolean create(Release et) {
        boolean bOk = false;

        if (et.getBuild() == 0) {
            Build buildQuery = new Build();
            buildQuery.setDeleted("0");
            buildQuery.setName(et.getName());
            buildQuery.setProduct(et.getProduct());
            buildQuery.setBranch(et.getBranch());
            Build build = buildHelper.getOne(new QueryWrapper<Build>().setEntity(buildQuery));
            if (build == null) {
                buildQuery.setDesc(et.getDesc());
                buildQuery.setDate(ZTDateUtil.now());
                buildQuery.setBuilder(AuthenticationUser.getAuthenticationUser().getUsername());
                buildHelper.create(buildQuery);
                build = buildQuery;
            }
            et.setBuild(build.getId());
        }

        String files = et.getFiles();
        bOk = super.create(et);
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.RELEASE.getValue(),files, "");

        fileHelper.processImgURL(et, null, null);

        actionHelper.create(StaticDict.Action__object_type.RELEASE.getValue(), et.getId(), StaticDict.Action__type.OPENED.getValue(), "", "", null, true);

        return bOk;

    }

    @Transactional
    public boolean edit(Release et) {
        Release old = new Release();
        CachedBeanCopier.copy(get(et.getId()), old);
        fileHelper.processImgURL(et, null, null);
        String files = et.getFiles();
        if (!internalUpdate(et))
            return false;
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.RELEASE.getValue(),files, "");

        List<History> changes = ChangeUtil.diff(old, et,null,null,new String[]{"desc"});
        if (changes.size() > 0) {
            Action action = actionHelper.create(StaticDict.Action__object_type.RELEASE.getValue(), et.getId(), StaticDict.Action__type.EDITED.getValue(), "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        boolean bOk = false;

        Release old = this.get(key);
        bOk = super.delete(key);
        buildHelper.delete(old.getBuild());
        return bOk;
    }

    @Transactional
    public Release activate(Release et) {
        et.setStatus(StaticDict.Release__status.NORMAL.getValue());
        this.internalUpdate(et);
        actionHelper.create(StaticDict.Action__object_type.RELEASE.getValue(), et.getId(), StaticDict.Action__type.CHANGESTATUS.getValue(),
                "", StaticDict.Release__status.NORMAL.getValue(), null, true);
        return et;
    }

    @Transactional
    public Release terminate(Release et) {
        et.setStatus(StaticDict.Release__status.TERMINATE.getValue());
        this.internalUpdate(et);
        actionHelper.create(StaticDict.Action__object_type.RELEASE.getValue(), et.getId(), StaticDict.Action__type.CHANGESTATUS.getValue(),
                "", StaticDict.Release__status.TERMINATE.getValue(), null, true);
        return et;
    }

    @Transactional
    public Release linkBug(Release et) {
        if (et.getId() == null || et.get("srfactionparam") == null)
            return et;
        String bugs = "";
        ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
        for (Map data : list) {
            if (bugs.length() > 0)
                bugs += ",";
            bugs += data.get("id");
        }
        et = this.get(et.getId());
        Release release = new Release();
        release.setId(et.getId());
        release.setBugs(et.getBugs() + "," + bugs);
        Product product = productHelper.get(et.getProduct());
        internalUpdate(release);

        for(String bug : bugs.split(",")) {
            actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), Long.parseLong(bug), StaticDict.Action__type.LINKED2RELEASE.getValue(),
                    "", String.valueOf(et.getId()), null, true);
        }
        return et;
    }

    @Transactional
    public Release unlinkBug(Release et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Release batchUnlinkBug(Release et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Release linkBugbyBug(Release et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Release linkBugbyLeftBug(Release et) {
        if (et.getId() == null || et.get("srfactionparam") == null)
            return et;
        String bugs = "";
        ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
        for (Map data : list) {
            if (bugs.length() > 0)
                bugs += ",";
            bugs += data.get("id");
        }
        et = this.get(et.getId());
        Release release = new Release();
        release.setId(et.getId());
        release.setLeftbugs(bugs);
        Product product = productHelper.get(et.getProduct());
        internalUpdate(release);

        for(String bug : bugs.split(",")) {
            actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), Long.parseLong(bug), StaticDict.Action__type.LINKED2RELEASE.getValue(),
                    "", String.valueOf(et.getId()), null, true);
        }
        return et;
    }

    @Transactional
    public Release changeStatus(Release et) {
        throw new RuntimeException("未实现");
    }

    @Transactional
    public Release linkStory(Release et) {

        if (et.getId() == null || et.get("srfactionparam") == null)
            return et;
        String stories = "";
        ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
        for (Map data : list) {
            if (stories.length() > 0)
                stories += ",";
            stories += data.get("id");
        }
        et = this.get(et.getId());
        Release release = new Release();
        release.setId(et.getId());
        release.setStories(et.getStories() + "," + stories);
        Product product = productHelper.get(et.getProduct());
        internalUpdate(release);

        for(String story : stories.split(",")) {
            if("".equals(story)) {
                continue;
            }
            Story story1 = new Story();
            story1.setId(Long.parseLong(story));
            story1.setStagedby("");
            storyHelper.internalUpdate(story1);
            if(!StaticDict.Product__status.NORMAL.getValue().equals(product.getType())) {
                StoryStage storyStage = new StoryStage();
                storyStage.setStagedby("");
                Map<String,Object> param = new HashMap<>();
                param.put("story",story);
                param.put("branch",et.getBranch());
                storyStageHelper.update(storyStage, (Wrapper)storyStage.getUpdateWrapper(true).allEq(param));
            }
            storyHelper.setStage(story1);
            actionHelper.create(StaticDict.Action__object_type.STORY.getValue(), Long.parseLong(story), StaticDict.Action__type.LINKED2RELEASE.getValue(),
                    "", String.valueOf(et.getId()), null, true);
        }
        return et;
        // throw new RuntimeException("未实现");
    }

}
