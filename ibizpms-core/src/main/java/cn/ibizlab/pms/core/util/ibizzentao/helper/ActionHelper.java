package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibizplugin.domain.IBIZProMessage;
import cn.ibizlab.pms.core.ibizplugin.service.IIBIZProMessageService;
import cn.ibizlab.pms.core.util.ibizzentao.common.Fixer;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.filter.ProjectProductSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.ActionMapper;
import cn.ibizlab.pms.core.zentao.service.IProjectProductService;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.domain.EntityMP;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
public class ActionHelper extends ZTBaseHelper<ActionMapper, Action> {

    String[] processType = new String[]{StaticDict.Action__object_type.STORY.getValue(), StaticDict.Action__object_type.PRODUCTPLAN.getValue(), StaticDict.Action__object_type.RELEASE.getValue(), StaticDict.Action__object_type.TASK.getValue(), StaticDict.Action__object_type.BUILD.getValue(), StaticDict.Action__object_type.BUG.getValue(), StaticDict.Action__object_type.CASE.getValue(), StaticDict.Action__object_type.TESTTASK.getValue(), StaticDict.Action__object_type.DOC.getValue()};

    @Autowired
    FileHelper fileHelper;

    @Autowired
    MessageHelper messageHelper;

    @Autowired
    HistoryHelper historyHelper;

    @Autowired
    UserHelper userHelper;

    @Autowired
    IIBIZProMessageService iibizProMessageService;

    @Autowired
    IProjectProductService projectProductService;

    @Autowired
            TaskHelper taskHelper;

    String[] sendAction = {StaticDict.Action__type.OPENED.getValue(),
            StaticDict.Action__type.EDITED.getValue(),
            StaticDict.Action__type.CLOSED.getValue(),
            StaticDict.Action__type.ACTIVATED.getValue(),
            StaticDict.Action__type.COMMENTED.getValue(),
            StaticDict.Action__type.FINISHED.getValue(),
            StaticDict.Action__type.ASSIGNED.getValue(),
            StaticDict.Action__type.STARTED.getValue(),
            StaticDict.Action__type.CANCELED.getValue(),
            StaticDict.Action__type.PAUSED.getValue(),
            StaticDict.Action__type.RESTARTED.getValue(),
            StaticDict.Action__type.CHANGED.getValue(),
            StaticDict.Action__type.RESOLVED.getValue(),
            StaticDict.Action__type.REVIEWED.getValue()};

    @Transactional
    public boolean create(Action et) {
        et.setComment(et.getComment() == null ? "" : et.getComment());
        String noticeusers = et.getNoticeusers();
        super.create(et);
        if(StaticDict.Action__object_type.TASK.getValue().equals(et.getObjecttype())) {
            Task task = taskHelper.get(et.getObjectid());
            send(task.getId(),task.getName(),noticeusers,task.getAssignedto(),task.getMailto(), ITaskService.OBJECT_TEXT_NAME,StaticDict.Action__object_type.TASK.getValue(),ITaskService.OBJECT_SOURCE_PATH);
        }
//        if(Arrays.deepToString(sendAction).contains(et.getObjecttype())) {
//            String sql = String.format("select * from zt_%1$s where id = '%2$s'", et.getObjecttype(), et.getObjectid());
//            List<JSONObject> list = projectProductService.select(sql, null);
//            if (list.size() > 0) {
//                send(list.get(0), noticeusers, et.getObjecttype());
//            }
//        }
        return true;
    }

    /**
     *
     * @param id 主键
     * @param name 标题
     * @param noticeusers 消息通知用户
     * @param touser 指派用户
     * @param ccuser 抄送用户
     * @param logicname
     * @param type
     * @param path
     */
    public void send(Long id, String name,String noticeusers,String touser,String ccuser,String logicname, String type, String path) {
        String noticeuserss = "";
        JSONObject param = new JSONObject();
        if(noticeusers != null & !"".equals(noticeusers))
            noticeuserss += noticeusers.replaceAll(",",";");
        if(ccuser != null && !"".equals(ccuser) && "".equals(noticeuserss))
            noticeuserss += ccuser.replaceAll(",",";");
        else if(ccuser != null && !"".equals(ccuser) && !"".equals(noticeuserss))
            noticeuserss += ";" + ccuser.replaceAll(",",";");
        if("".equals(touser) && "".equals(noticeuserss))
            return;

        IBIZProMessage ibizProMessage = new IBIZProMessage();
        if("".equals(noticeuserss)) {
            ibizProMessage.setCc("");
        }else {
            ibizProMessage.setCc(userHelper.ccUsers(noticeuserss));
        }
        if("".equals(touser)) {
            ibizProMessage.setTo("");
        }else {
            ibizProMessage.setTo(userHelper.toUser(touser));
        }

        ibizProMessage.setFrom(AuthenticationUser.getAuthenticationUser().getUserid());

        if("".equals(ibizProMessage.getCc()) && "".equals(ibizProMessage.getTo())) {
            return;
        }
        ibizProMessage.setType(StaticDict.Message__type.TODO.getValue());
        ibizProMessage.setIbizproMessagename(name);
        param.put("objectid", id);
        param.put("objecttype", type);
        param.put("objectsourcepath", path);
        param.put("objecttextname", logicname);
        ibizProMessage.setParam(param.toJSONString());
        iibizProMessageService.send(ibizProMessage);
    }


    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(Action et) {
//        String noticeusers = et.getNoticeusers();
        this.internalUpdate(et);
//        if(Arrays.deepToString(sendAction).contains(et.getObjecttype())) {
//            String sql = String.format("select * from zt_%1$s where id = '%2$s'", et.getObjecttype(), et.getObjectid());
//            List<JSONObject> list = projectProductService.select(sql, null);
//            if (list.size() > 0) {
//                send(list.get(0), noticeusers, et.getObjecttype());
//            }
//        }
        return true;
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
        if (StringUtils.compare(objectType, StaticDict.Action__object_type.PRODUCT.getValue()) == 0) {
            et.setProduct("," + String.valueOf(objectID) + ",");
        } else if (StringUtils.compare(objectType, StaticDict.Action__object_type.PROJECT.getValue()) == 0) {
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
        super.create(et);
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

        if(objectType.equals(StaticDict.Action__object_type.STORY.getValue())) {
            String storySql = String.format("select project from zt_projectstory where story = %1$s ORDER BY project desc", objectId);
            List<JSONObject> list = projectProductService.select(storySql, null);
            if(list.size() > 0) {
                record.put("project", list.get(0).getLongValue("project"));
            }else {
                record.put("project", 0l);
            }
        }else if(objectType.equals(StaticDict.Action__object_type.RELEASE.getValue())) {
            String releaseSql = String.format("select project from zt_build where id = %1$s ",record.getLongValue("build"));
            List<JSONObject> list = projectProductService.select(releaseSql, null);
            if(list.size() > 0) {
                record.put("project", list.get(0).getLongValue("project"));
            }else {
                record.put("project", 0l);
            }
        }else if(objectType.equals(StaticDict.Action__object_type.TASK.getValue())) {
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
        this.edit(et);
        return et;
    }


}
