package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.Fixer;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.filter.ProjectProductSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.ActionMapper;
import cn.ibizlab.pms.core.zentao.service.IProjectProductService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        return internalUpdate(et);
    }


    /**
     *
     * @param objectType
     * @param objectID
     * @param actionType
     * @param comment
     * @param extra
     * @param actor
     * @param autoDelete
     * @return
     */
    @Transactional
    public Action create(String objectType, Long objectID, String actionType, String comment, String extra, String actor, boolean autoDelete) {
        Action et = new Action();
        if (actor == null)
            actor = AuthenticationUser.getAuthenticationUser().getUsername();
        objectType = objectType.replace("`", "");
        et.setObjecttype(objectType.toLowerCase());
        et.setObjectid(objectID);
        et.setActor(actor);
        et.setAction(actionType.toLowerCase());
        et.setDate(ZTDateUtil.now());
        et.setExtra(extra);
        et.setRead("0");
        et.setComment(Fixer.stripDataTags(comment));

        if (autoDelete) {
            //fileHelper.autoDelete(null);
        }

        //set productid projectid
        et.setProduct(",0,");
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
        } else if (Arrays.deepToString(processType).contains(objectType)) {
            //
            JSONObject jsonObject = getProductAndProject(objectType,objectID);
            et.setProduct(jsonObject.getString("product"));
            et.setProject(jsonObject.getLongValue("project"));
            log.info(processType + "product、project设置未实现");
        }

        this.create(et);

        messageHelper.send(objectType, objectID, actionType, et.getId(), actor);

        return et;
    }

    /**
     *
     * @param objectType
     * @param objectId
     * @return
     */
    @Transactional
    public JSONObject getProductAndProject(String objectType, Long objectId) {
        String fields = "";
        if("story, productplan, case".contains(objectType))
            fields = "CONCAT_WS('',',',product,',') as product";
        else if(objectType.equals("task"))
            fields = "project, story";
        else if("build, bug, testtask, doc".contains(objectType))
            fields = "CONCAT_WS('',',',product,',') as product, project";
        else if(objectType.equals("release"))
            fields = "CONCAT_WS('',',',product,',') as product, build";


        String sql = String.format("select %1$s from zt_%2$s where id = %3$s ",fields, objectType,objectId);

        List<JSONObject> jsonObjectList = projectProductService.select(sql, null);
        JSONObject record = jsonObjectList.get(0);

        if(objectType.equals("story")) {
            String storySql = String.format("select project from zt_projectstory where story = %1$s ORDER BY project desc", objectId);
            List<JSONObject> list = projectProductService.select(storySql, null);
            if(list.size() > 0) {
                record.put("project", list.get(0).getLongValue("project"));
            }else {
                record.put("project", 0l);
            }
        }else if(objectType.equals("release")) {
            String releaseSql = String.format("select project from zt_build where id = %1$s ",record.getLongValue("build"));
            List<JSONObject> list = projectProductService.select(releaseSql, null);
            if(list.size() > 0) {
                record.put("project", list.get(0).getLongValue("project"));
            }else {
                record.put("project", 0l);
            }
        }else if(objectType.equals("task")) {
            if(record.getLongValue("story") != 0l) {
                String storySql = String.format("select CONCAT_WS('',',',product,',') as product from zt_story where id = %1$s ", record.getLongValue("story"));
                List<JSONObject> list = projectProductService.select(storySql, null);
                if(list.size() > 0) {
                    record.put("product", list.get(0).getString("product"));
                }else {
                    record.put("product", ",0,");
                }
            }else {
                String projectProductSql = String.format("select CONCAT_WS('',',',ifnull(GROUP_CONCAT(product ORDER BY product asc),0),',') as product from zt_projectproduct where project = %1$s GROUP BY project ", record.getLongValue("project"));
                List<JSONObject> list = projectProductService.select(projectProductSql, null);
                if(list.size() > 0) {
                    record.put("product", list.get(0).getString("product"));
                }else {
                    record.put("product", ",0,");
                }
            }
        }

        return record;
    }

    @Transactional
    public void logHistory(Long actionId, List<History> changes) {
        for (History change : changes) {
            change.setAction(actionId);
            historyHelper.create(change);
        }
    }

    @Transactional
    public Action editComment(Action et) {
        et.setDate(ZTDateUtil.now());
        this.internalUpdate(et);
        return et;
    }


}
