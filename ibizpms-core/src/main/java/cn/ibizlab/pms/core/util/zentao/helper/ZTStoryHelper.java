package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.collections4.map.CaseInsensitiveMap;
import org.springframework.http.HttpMethod;

import java.math.BigInteger;
import java.util.*;

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
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CHANGE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_REVIEW = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ACTIVATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ASSIGNTO = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHEDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGESTAGE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEBRANCH = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEPLAN = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHREVIEW = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEMODULE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHASSIGNTO = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_REVIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ASSIGNTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGESTAGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEBRANCH = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEPLAN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHREVIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEMODULE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHASSIGNTO = new HashMap<>();


    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_REVIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ASSIGNTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGESTAGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEBRANCH = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEPLAN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHREVIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEMODULE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHASSIGNTO = new ArrayList<>();


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
        ACTION_PARAMS_CREATE.put("sourceNote", null);
        ACTION_PARAMS_CREATE.put("reviewedBy", null);
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
        ACTION_PARAMS_EDIT.put("sourceNote", null);
        ACTION_PARAMS_EDIT.put("reviewedBy", null);
        ACTION_PARAMS_EDIT.put("pri", 3);
        ACTION_PARAMS_EDIT.put("estimate", 0);
        ACTION_PARAMS_EDIT.put("color", null);
        ACTION_PARAMS_EDIT.put("mailto", null);
        ACTION_PARAMS_EDIT.put("linkstories", null);
        ACTION_PARAMS_EDIT.put("assignedTo", null);
        ACTION_PARAMS_EDIT.put("keywords", null);
        ACTION_PARAMS_EDIT.put("comment", null);

        // CHANGE
        ACTION_PARAMS_CHANGE.put("status", null);
        ACTION_PARAMS_CREATE.put("spec", null);
        ACTION_PARAMS_CREATE.put("verify", null);
        ACTION_PARAMS_CHANGE.put("title", null);
        ACTION_PARAMS_CHANGE.put("assignedTo", null);
        ACTION_PARAMS_CHANGE.put("comment", null);

        // REVIEW
        ACTION_PARAMS_REVIEW.put("result", null);
        ACTION_PARAMS_REVIEW.put("closedReason", null);
        ACTION_PARAMS_REVIEW.put("pri", 3);
        ACTION_PARAMS_REVIEW.put("estimate", 0);
        ACTION_PARAMS_REVIEW.put("comment", null);
        ACTION_PARAMS_REVIEW.put("preVersion", null);
        ACTION_PARAMS_REVIEW.put("assignedTo", null);
        ACTION_PARAMS_REVIEW.put("status", null);
        ACTION_PARAMS_REVIEW.put("reviewedBy", null);

        // ACTIVATE
        ACTION_PARAMS_ACTIVATE.put("comment", null);
        ACTION_PARAMS_ACTIVATE.put("assignedTo", null);
        ACTION_PARAMS_ACTIVATE.put("status", "active");

        // ASSIGNTO
        ACTION_PARAMS_ASSIGNTO.put("comment", null);
        ACTION_PARAMS_ASSIGNTO.put("assignedTo", null);

        // CLOSE
        ACTION_PARAMS_CLOSE.put("comment", null);
        ACTION_PARAMS_CLOSE.put("closedReason", null);

        // BATCHCHANGESTAGE
        ACTION_PARAMS_BATCHCHANGESTAGE.put("storyIdList", null);
    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // CHANGE
        ACTION_URL_PARAMS_CHANGE.add("id");

        // REVIEW
        ACTION_URL_PARAMS_REVIEW.add("id");

        // ACTIVATE
        ACTION_URL_PARAMS_ACTIVATE.add("id");

        // ASSIGNTO
        ACTION_URL_PARAMS_ASSIGNTO.add("id");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");

        // BATCHCHANGESTAGE
        ACTION_URL_PARAMS_BATCHCHANGESTAGE.add("stage");

        // BATCHCHANGESTAGE
        ACTION_URL_PARAMS_BATCHCHANGESTAGE.add("branch");
    }

    // ----------
    // 接口实现
    // ----------

    final static public boolean create(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_CREATE, ZenTaoConstants.ZT_URL_EXT);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CREATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CREATE));
        rst = ZenTaoHttpHelper.formatResultJSON(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean edit(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_EDIT, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_EDIT);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_EDIT, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_EDIT));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean change(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_CHANGE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_CHANGE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CHANGE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CHANGE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean review(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_REVIEW, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_REVIEW);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_REVIEW, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_REVIEW));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean activate(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_ACTIVATE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_ACTIVATE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_ACTIVATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_ACTIVATE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean assignTo(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_ASSIGNTO, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_ASSIGNTO);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_ASSIGNTO, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_ASSIGNTO));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean close(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_CLOSE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_CLOSE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CLOSE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CLOSE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

}
