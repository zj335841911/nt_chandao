package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.domain.Build;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.mapper.BuildMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.security.AuthenticationUser;
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
public class BuildHelper extends ZTBaseHelper<BuildMapper, Build> {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    BugHelper bugHelper;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean create(Build et) {
        String files = et.getFiles();
        boolean bOk = super.create(et);
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.BUILD.getValue(), files, "");

        actionHelper.create(StaticDict.Action__object_type.BUILD.getValue(), et.getId(), StaticDict.Action__type.OPENED.getValue(), "", "", null, true);

        return bOk;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean edit(Build et) {
        Build old = this.get(et.getId());

        fileHelper.processImgURL(et, null, null);
        String files = et.getFiles();
        internalUpdate(et);
        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.BUILD.getValue(), files, "");

        List<History> changes = ChangeUtil.diff(old, et);
        if (changes.size() > 0) {
            Action action = actionHelper.create(StaticDict.Action__object_type.BUILD.getValue(), et.getId(), StaticDict.Action__type.EDITED.getValue(), "", "", null, true);
            actionHelper.logHistory(action.getId(), changes);
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public Build linkStory(Build et) {

        if (et.getId() == null) {
            return et;
        }
        Build build = get(et.getId());
        String stories = "";
        if(et.getStories() != null && !"".equals(et.getStories())) {
            stories = et.getStories();
        } else if(et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            for (Map data : list) {
                if (stories.length() > 0) {
                    stories += ",";
                }
                stories += data.get("id");
            }
        }
        if("".equals(stories)) {
            return et;
        }
        for (String storyId : stories.split(",")) {
            if (StringUtils.isBlank(build.getStories())) {
                build.setStories(storyId);
                internalUpdate(build);
            } else {
                if (!("," + build.getStories() ).contains("," + storyId )) {
                    build.setStories(build.getStories() + "," + storyId);
                    internalUpdate(build);
                    actionHelper.create(StaticDict.Action__object_type.STORY.getValue(), Long.parseLong(storyId), StaticDict.Action__type.LINKED2BUILD.getValue(),
                            "", String.valueOf(build.getId()), null, true);
                }
            }
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Build unlinkStory(Build et) {
        Build build = get(et.getId());
        if (et.get("stories") == null) {
            return et;
        }
        for (String storyId : et.get("stories").toString().split(",")) {
            if (("," + build.getStories() ).contains("," + storyId )) {
                String stories = ("," + build.getStories() ).replace("," + storyId , "");
                if(stories.indexOf(",")==0) {
                    stories = stories.substring(1,stories.length()) ;
                }
                build.setStories(stories);
                internalUpdate(build);
                actionHelper.create(StaticDict.Action__object_type.STORY.getValue(), Long.parseLong(storyId), StaticDict.Action__type.UNLINKEDFROMBUILD.getValue(),
                        "", String.valueOf(build.getId()), null, true);
            }
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Build linkBug(Build et) {
        Build build = get(et.getId());
        if (et.get("bugs") == null) {
            return et;
        }
        String[] resolvedbys = et.get("resolvedby").toString().split(",");
        int i = 0;
        for (String bugId : et.get("bugs").toString().split(",")) {
            String bug = "";
            if (StringUtils.isBlank(build.getBugs())) {
                bug = bugId;
            } else {
                if (!("," + build.getBugs() + ",").contains("," + bugId + ",")) {
                    bug = build.getBugs() + "," + bugId;
                }else {
                    bug = build.getBugs();
                }
            }
            build.setBugs(bug);
            internalUpdate(build);

            actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), Long.parseLong(bugId), StaticDict.Action__type.LINKED2BUG.getValue(),
                    "", String.valueOf(build.getId()), null, true);
            Bug bugs = bugHelper.get(Long.parseLong(bugId));
            if(StaticDict.Bug__status.RESOLVED.getValue().equals(bugs.getStatus()) || StaticDict.Bug__status.CLOSED.getValue().equals(bugs.getStatus())) {
                i ++;
                continue;
            }
            String resolvedby = AuthenticationUser.getAuthenticationUser().getUsername();
            if(resolvedbys.length > i && resolvedbys[i] != null && !"".equals(resolvedbys[i])) {
                resolvedby = resolvedbys[i];
            }
            Bug newBug = new Bug();
            newBug.setId(Long.parseLong(bugId));
            newBug.setStatus(StaticDict.Bug__status.RESOLVED.getValue());
            newBug.setResolveddate(ZTDateUtil.now());
            newBug.setResolvedby(resolvedby);
            newBug.setConfirmed(1);
            newBug.setAssignedto(bugs.getOpenedby());
            newBug.setAssigneddate(ZTDateUtil.now());
            newBug.setLasteditedby(AuthenticationUser.getAuthenticationUser().getUsername());
            newBug.setLastediteddate(ZTDateUtil.now());
            newBug.setResolution(StaticDict.Bug__resolution.FIXED.getValue());
            newBug.setResolvedbuild(String.valueOf(et.getId()));
            bugHelper.internalUpdate(newBug);
            i ++;
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public Build unlinkBug(Build et) {
        Build build = get(et.getId());
        if (et.get("bugs") == null) {
            return et;
        }
        for (String bugId : et.get("bugs").toString().split(",")) {
            if (("," + build.getBugs()).contains("," + bugId )) {
                String bugs =("," + build.getBugs()).replace("," + bugId, "");
                if(bugs.indexOf(",")==0) {
                    bugs = bugs.substring(1,bugs.length()) ;
                }
                build.setBugs(bugs);
                internalUpdate(build);
                actionHelper.create(StaticDict.Action__object_type.BUG.getValue(), Long.parseLong(bugId), StaticDict.Action__type.UNLINKEDFROMBUILD.getValue(),
                        "", String.valueOf(build.getId()), null, true);
            }
        }
        return et;
    }



}
