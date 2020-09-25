package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.ZTBaseHelper;
import cn.ibizlab.pms.core.util.ibizzentao.common.Fixer;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.filter.ProjectProductSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.ActionMapper;
import cn.ibizlab.pms.core.zentao.service.IProjectProductService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
public class ActionHelper extends ZTBaseHelper<ActionMapper, Action> {

    String[] processType = new String[]{"story", "productplan", "release", "task", "build", "bug", "case", "testtask", "doc"};

    @Autowired
    FileHelper fileHelper;

    @Autowired
    MessageHelper messageHelper;

    @Autowired
    HistoryHelper historyHelper;

    @Autowired
    IProjectProductService projectProductService;


    @Transactional
    public boolean create(Action et) {
        super.create(et);

        messageHelper.send(et.getObjecttype(), et.getObjectid(), et.getAction(), et.getId(), et.getActor());

        return true;
    }


    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(Action et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }


    @Transactional
    public Action create(String objectType, Long objectID, String actionType, String comment, String extra, String actor, boolean autoDelete) {
        Action et = new Action();
        if(actor==null)
            actor = AuthenticationUser.getAuthenticationUser().getUsername();
        objectType = objectType.replace("`", "");
        et.setObjecttype(objectType.toLowerCase());
        et.setObjectid(objectID);
        et.setActor(actor);
        et.setAction(actionType.toLowerCase());
        et.setDate(new Timestamp(System.currentTimeMillis()));
        et.setExtra(extra);
        et.setRead("0");
        et.setComment(Fixer.stripDataTags(comment));

        if (autoDelete) {
            //fileHelper.autoDelete(null);
        }

        //set productid projectid
        et.setProduct("0");
        et.setProject(0l);
        if (StringUtils.compare(objectType, "product") == 0) {
            et.setProduct("," + String.valueOf(objectID) + ",");
        } else if (StringUtils.compare(objectType, "project") == 0) {
            ProjectProductSearchContext ctx = new ProjectProductSearchContext();
            ctx.setN_project_eq(objectID);
            List<ProjectProduct> projectProducts = projectProductService.searchDefault(ctx).getContent();
            String products = "";
            for (int i = 0; i < projectProducts.size(); i++) {
                if (i > 0)
                    products += ",";
                products += String.valueOf(projectProducts.get(i).getProduct());
            }
            et.setProduct("," + products + ",");
            et.setProject(objectID);
        } else if (Arrays.binarySearch(processType, objectType) > 0) {
            //
            log.info(processType + "product、project设置未实现");
        }

        this.create(et);

        messageHelper.send(objectType, objectID, actionType, et.getId(), actor);

        return et;
    }

    @Transactional
    public void logHistory(Long actionId, List<History> changes) {
        for (History change : changes) {
            change.setAction(actionId);
            historyHelper.create(change);
        }
    }

    @Transactional
    public boolean editComment(Action et){
        et.setDate(new Timestamp(System.currentTimeMillis()));
        return this.internalUpdate(et);
    }


}
