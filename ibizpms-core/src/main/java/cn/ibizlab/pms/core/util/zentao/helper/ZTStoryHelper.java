package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpMethod;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-Story】 辅助类
 */
public class ZTStoryHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "story";

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_BATCHCREATE = "batchCreate";
    private final static String  ACTION_COMMONACTION = "commonAction";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_BATCHEDIT = "batchEdit";
    private final static String  ACTION_CHANGE = "change";
    private final static String  ACTION_ACTIVATE = "activate";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_REVIEW = "review";
    private final static String  ACTION_BATCHREVIEW = "batchReview";
    private final static String  ACTION_CLOSE = "close";
    private final static String  ACTION_BATCHCLOSE = "batchClose";
    private final static String  ACTION_BATCHCHANGEMODULE = "batchChangeModule";
    private final static String  ACTION_BATCHCHANGEPLAN = "batchChangePlan";
    private final static String  ACTION_BATCHCHANGEBRANCH = "batchChangeBranch";
    private final static String  ACTION_BATCHCHANGESTAGE = "batchChangeStage";
    private final static String  ACTION_ASSIGNTO = "assignTo";
    private final static String  ACTION_BATCHASSIGNTO = "batchAssignTo";
    private final static String  ACTION_TASKS = "tasks";
    private final static String  ACTION_BUGS = "bugs";
    private final static String  ACTION_CASES = "cases";
    private final static String  ACTION_ZEROCASE = "zeroCase";
    private final static String  ACTION_LINKSTORY = "linkStory";
    private final static String  ACTION_AJAXGETPROJECTSTORIES = "ajaxGetProjectStories";
    private final static String  ACTION_AJAXSEARCHPRODUCTSTORIES = "ajaxSearchProductStories";
    private final static String  ACTION_AJAXGETDETAIL = "ajaxGetDetail";
    private final static String  ACTION_AJAXGETINFO = "ajaxGetInfo";
    private final static String  ACTION_REPORT = "report";
    private final static String  ACTION_EXPORT = "export";
    private final static String  ACTION_AJAXGETUSERSTORYS = "ajaxGetUserStorys";
    private final static String  ACTION_AJAXGETSTATUS = "ajaxGetStatus";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("product", 0);
        ACTION_PARAMS_CREATE.put("branch", 0);
        ACTION_PARAMS_CREATE.put("title", null);
        ACTION_PARAMS_CREATE.put("module", 0);
        ACTION_PARAMS_CREATE.put("plan", null);
        ACTION_PARAMS_CREATE.put("source", null);
        ACTION_PARAMS_CREATE.put("sourcenote", null);
        ACTION_PARAMS_CREATE.put("reviewedby", null);
        ACTION_PARAMS_CREATE.put("pri", 3);
        ACTION_PARAMS_CREATE.put("estimate", 0);
        ACTION_PARAMS_CREATE.put("spec", null);
        ACTION_PARAMS_CREATE.put("verify", null);
        ACTION_PARAMS_CREATE.put("color", null);
        ACTION_PARAMS_CREATE.put("mailto", null);
        ACTION_PARAMS_CREATE.put("keywords", null);
        ACTION_PARAMS_CREATE.put("type", "story");

        // EDIT
        ACTION_PARAMS_EDIT.put("product", 0);
        ACTION_PARAMS_EDIT.put("branch", 0);
        ACTION_PARAMS_EDIT.put("module", 0);
        ACTION_PARAMS_EDIT.put("plan", null);
        ACTION_PARAMS_EDIT.put("parent", 0);
        ACTION_PARAMS_EDIT.put("status", null);
        ACTION_PARAMS_EDIT.put("source", null);
        ACTION_PARAMS_EDIT.put("sourcenote", null);
        ACTION_PARAMS_EDIT.put("reviewedby", null);
        ACTION_PARAMS_EDIT.put("pri", 3);
        ACTION_PARAMS_EDIT.put("estimate", 0);
        ACTION_PARAMS_EDIT.put("color", null);
        ACTION_PARAMS_EDIT.put("mailto", null);
        ACTION_PARAMS_EDIT.put("linkstories", null);
        ACTION_PARAMS_EDIT.put("assignedto", null);
        ACTION_PARAMS_EDIT.put("keywords", null);
        ACTION_PARAMS_EDIT.put("comment", "story");
        // 变更日期，编辑不会修改
//        ACTION_PARAMS_EDIT.put("lastediteddate", null);
        // 联系单（前端计算进入mailto）
//        ACTION_PARAMS_EDIT.put("contactlistmenu", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");
    }

    // ----------
    // 接口实现
    // ----------

    final static public boolean create(JSONObject jo, ZTResult rst) {
        // 后期从session获取，前期使用admin
        String account = ZenTaoConstants.ZT_TMP_USERNAME;
        String url = MODULE_NAME + "-" + ACTION_CREATE + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = new JSONObject();
        rstJO = ZenTaoHttpHelper.doRequest(account, url, ACTION_HTTPMETHOD_CREATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CREATE));
        if ("fail".equals(rstJO.getString("result"))) {
            JSONObject message = rstJO.getJSONObject("message");
            List<String> msgList = new ArrayList<>();
            if (!message.isEmpty()) {
                for (String key : message.keySet()) {
                    JSONArray ja = message.getJSONArray(key);
                    for (int i = 0; i < ja.size(); i++) {
                        msgList.add(ja.getString(i));
                    }
                }
            }
            String msgStr = "创建数据失败。\n";
            if (!msgList.isEmpty()) {
                msgStr += String.join("\n", msgList);
            }
            rst.setSuccess(false);
            rst.setResult(rstJO);
            rst.setMessage(msgStr);
            return false;
        }
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("message"));
        return true;
    }

    final static public boolean edit(JSONObject jo, ZTResult rst) {
        // 后期从session获取，前期使用admin
        String account = ZenTaoConstants.ZT_TMP_USERNAME;
        String urlParams = "";
        if (ACTION_URL_PARAMS_EDIT != null && ACTION_URL_PARAMS_EDIT.size() > 0) {
            for (String key : ACTION_URL_PARAMS_EDIT) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_EDIT + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = new JSONObject();
        rstJO = ZenTaoHttpHelper.doRequest(account, url, ACTION_HTTPMETHOD_EDIT, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_EDIT));
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return true;
    }

}
