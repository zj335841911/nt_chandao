package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.Build;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.mapper.BuildMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class BuildHelper extends ZTBaseHelper<BuildMapper, Build> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Override
    @Transactional
    public boolean create(Build et) {
        boolean bOk = false;

        bOk = super.create(et);

        actionHelper.create("build", et.getId(), "opened", "", "", null, true);

        return bOk;
    }

    @Transactional
    public boolean edit(Build et) {
        Build old = this.get(et.getId());

        fileHelper.processImgURL(et, null, null);
        internalUpdate(et);
        fileHelper.updateObjectID(null, et.getId(), "product");

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create("build", et.getId(), "Edited", "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Transactional
    public Build linkStory(Build et) {

        if (et.getId() == null)
            return et;
        Build build = get(et.getId());
        String stories = "";
        if(et.getStories() != null && !"".equals(et.getStories()))
            stories = et.getStories();
        else if(et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            for (Map data : list) {
                if (stories.length() > 0)
                    stories += ",";
                stories += data.get("id");
            }
        }
        if("".equals(stories))
            return et;
        for (String storyId : stories.split(",")) {
            if (StringUtils.isBlank(build.getStories())) {
                build.setStories(storyId);
                internalUpdate(build);
            } else {
                if (!("," + build.getStories() ).contains("," + storyId )) {
                    build.setStories(build.getStories() + "," + storyId);
                    internalUpdate(build);
                    actionHelper.create("story", Long.parseLong(storyId), "linked2build",
                            "", String.valueOf(build.getId()), null, true);
                }
            }
        }
        return et;
    }

    @Transactional
    public Build unlinkStory(Build et) {
        Build build = get(et.getId());
        if (et.get("stories") == null)
            return et;
        for (String storyId : et.get("stories").toString().split(",")) {
            if (("," + build.getStories() ).contains("," + storyId )) {
                String stories = ("," + build.getStories() ).replace("," + storyId , "");
                if(stories.indexOf(",")==0)
                    stories = stories.substring(1,stories.length()) ;
                build.setStories(stories);
                internalUpdate(build);
                actionHelper.create("story", Long.parseLong(storyId), "unlinkedfrombuild",
                        "", String.valueOf(build.getId()), null, true);
            }
        }
        return et;
    }

    @Transactional
    public Build linkBug(Build et) {
        Build build = get(et.getId());
        if (et.get("bugs") == null)
            return et;
        for (String bugId : et.get("bugs").toString().split(",")) {
            if (StringUtils.isBlank(build.getBugs())) {
                build.setBugs(bugId);
                internalUpdate(build);
            } else {
                if (!("," + build.getBugs() + ",").contains("," + bugId + ",")) {
                    build.setBugs(build.getBugs() + "," + bugId);
                    internalUpdate(build);
                    actionHelper.create("bug", Long.parseLong(bugId), "linked2bug",
                            "", String.valueOf(build.getId()), null, true);
                }
            }
        }
        return et;
    }

    @Transactional
    public Build unlinkBug(Build et) {
        Build build = get(et.getId());
        if (et.get("bugs") == null)
            return et;
        for (String bugId : et.get("bugs").toString().split(",")) {
            if (("," + build.getBugs()).contains("," + bugId )) {
                String bugs =("," + build.getBugs()).replace("," + bugId, "");
                if(bugs.indexOf(",")==0)
                    bugs = bugs.substring(1,bugs.length()) ;
                build.setBugs(bugs);
                internalUpdate(build);
                actionHelper.create("bug", Long.parseLong(bugId), "unlinkedfrombuild",
                        "", String.valueOf(build.getId()), null, true);
            }
        }
        return et;
    }



}
