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
 * 【禅道接口-Task】 辅助类
 */
public class ZTTaskHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "task";

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_BATCHCREATE = "batchCreate";
    private final static String  ACTION_COMMONACTION = "commonAction";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_BATCHEDIT = "batchEdit";
    private final static String  ACTION_ASSIGNTO = "assignTo";
    private final static String  ACTION_BATCHCHANGEMODULE = "batchChangeModule";
    private final static String  ACTION_BATCHASSIGNTO = "batchAssignTo";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_CONFIRMSTORYCHANGE = "confirmStoryChange";
    private final static String  ACTION_START = "start";
    private final static String  ACTION_RECORDESTIMATE = "recordEstimate";
    private final static String  ACTION_EDITESTIMATE = "editEstimate";
    private final static String  ACTION_DELETEESTIMATE = "deleteEstimate";
    private final static String  ACTION_FINISH = "finish";
    private final static String  ACTION_PAUSE = "pause";
    private final static String  ACTION_RESTART = "restart";
    private final static String  ACTION_CLOSE = "close";
    private final static String  ACTION_BATCHCANCEL = "batchCancel";
    private final static String  ACTION_BATCHCLOSE = "batchClose";
    private final static String  ACTION_CANCEL = "cancel";
    private final static String  ACTION_ACTIVATE = "activate";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_AJAXGETUSERTASKS = "ajaxGetUserTasks";
    private final static String  ACTION_AJAXGETPROJECTTASKS = "ajaxGetProjectTasks";
    private final static String  ACTION_AJAXGETDETAIL = "ajaxGetDetail";
    private final static String  ACTION_REPORT = "report";
    private final static String  ACTION_EXPORT = "export";
    private final static String  ACTION_AJAXGETBYID = "ajaxGetByID";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_COMMONACTION = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHEDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ASSIGNTO = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEMODULE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHASSIGNTO = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CONFIRMSTORYCHANGE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_START = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_RECORDESTIMATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDITESTIMATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETEESTIMATE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_FINISH = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_PAUSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_RESTART = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCANCEL = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CANCEL = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ACTIVATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETUSERTASKS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETPROJECTTASKS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETDETAIL = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_REPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EXPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETBYID = HttpMethod.GET;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_COMMONACTION = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHEDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ASSIGNTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEMODULE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHASSIGNTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CONFIRMSTORYCHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_START = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_RECORDESTIMATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDITESTIMATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETEESTIMATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_FINISH = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_PAUSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_RESTART = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCANCEL = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CANCEL = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETUSERTASKS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETPROJECTTASKS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETDETAIL = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_REPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EXPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETBYID = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_COMMONACTION = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHEDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ASSIGNTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEMODULE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHASSIGNTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CONFIRMSTORYCHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_START = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_RECORDESTIMATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDITESTIMATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETEESTIMATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_FINISH = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_PAUSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_RESTART = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCANCEL = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CANCEL = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETUSERTASKS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETPROJECTTASKS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETDETAIL = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_REPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EXPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETBYID = new ArrayList<>();


    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("project", 0);
        ACTION_PARAMS_CREATE.put("type", null);
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("module", 0);
        ACTION_PARAMS_CREATE.put("assignedTo[]", null);
        ACTION_PARAMS_CREATE.put("story", 0);
        ACTION_PARAMS_CREATE.put("pri", 3);
        ACTION_PARAMS_CREATE.put("color", null);
        ACTION_PARAMS_CREATE.put("desc", null);
        ACTION_PARAMS_CREATE.put("mailto", null);
        ACTION_PARAMS_CREATE.put("parent", 0);
        ACTION_PARAMS_CREATE.put("estimate", null);
        ACTION_PARAMS_CREATE.put("estStarted", null);
        ACTION_PARAMS_CREATE.put("deadline", null);
        ACTION_PARAMS_CREATE.put("team[]", null);
        ACTION_PARAMS_CREATE.put("teamEstimate[]", null);
        ACTION_PARAMS_CREATE.put("after", "toTaskList");
        ACTION_PARAMS_CREATE.put("multiple", 0);
        ACTION_PARAMS_CREATE.put("status", "wait");

        // EDIT
        ACTION_PARAMS_EDIT.put("project", 0);
        ACTION_PARAMS_EDIT.put("type", null);
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("module", 0);
        ACTION_PARAMS_EDIT.put("assignedTo", null);
        ACTION_PARAMS_EDIT.put("story", 0);
        ACTION_PARAMS_EDIT.put("pri", 0);
        ACTION_PARAMS_EDIT.put("color", null);
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("mailto", null);
        ACTION_PARAMS_EDIT.put("parent", 0);
        ACTION_PARAMS_EDIT.put("estimate", null);
        ACTION_PARAMS_EDIT.put("estStarted", null);
        ACTION_PARAMS_EDIT.put("deadline", null);
        ACTION_PARAMS_EDIT.put("team[]", null);
        ACTION_PARAMS_EDIT.put("teamEstimate[]", null);
        ACTION_PARAMS_EDIT.put("multiple", 0);
        ACTION_PARAMS_EDIT.put("status", "wait");

        // ASSIGNTO
        ACTION_PARAMS_ASSIGNTO.put("assignedTo", null);
        ACTION_PARAMS_ASSIGNTO.put("left", null);
        ACTION_PARAMS_ASSIGNTO.put("comment", null);

        // START
        ACTION_PARAMS_START.put("realStarted", null);
        ACTION_PARAMS_START.put("consumed", null);
        ACTION_PARAMS_START.put("left", null);
        ACTION_PARAMS_START.put("comment", null);

        // RECORDESTIMATE
        ACTION_PARAMS_RECORDESTIMATE.put("id[]", null);
        ACTION_PARAMS_RECORDESTIMATE.put("dates[]", null);
        ACTION_PARAMS_RECORDESTIMATE.put("consumed[]", null);
        ACTION_PARAMS_RECORDESTIMATE.put("left[]", null);
        ACTION_PARAMS_RECORDESTIMATE.put("work[]", null);

        // EDITESTIMATE
        ACTION_PARAMS_EDITESTIMATE.put("date", null);
        ACTION_PARAMS_EDITESTIMATE.put("consumed", null);
        ACTION_PARAMS_EDITESTIMATE.put("left", null);
        ACTION_PARAMS_EDITESTIMATE.put("work", null);

        // PAUSE
        ACTION_PARAMS_PAUSE.put("comment", null);

        // RESTART
        ACTION_PARAMS_RESTART.put("realStarted", null);
        ACTION_PARAMS_RESTART.put("consumed", null);
        ACTION_PARAMS_RESTART.put("left", null);
        ACTION_PARAMS_RESTART.put("comment", null);

        // CANCEL
        ACTION_PARAMS_CANCEL.put("comment", null);

        // ACTIVATE
        ACTION_PARAMS_ACTIVATE.put("assignedTo", null);
        ACTION_PARAMS_ACTIVATE.put("left", null);
        ACTION_PARAMS_ACTIVATE.put("comment", null);

        // FINISH
        ACTION_PARAMS_FINISH.put("currentConsumed", null);
        ACTION_PARAMS_FINISH.put("consumed", null);
        ACTION_PARAMS_FINISH.put("assignedTo", null);
        ACTION_PARAMS_FINISH.put("finishedDate", null);
        ACTION_PARAMS_FINISH.put("comment", null);

        // CLOSE
        ACTION_PARAMS_CLOSE.put("comment", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        ACTION_URL_PARAMS_CREATE.add("project");
        ACTION_URL_PARAMS_CREATE.add("story");
        ACTION_URL_PARAMS_CREATE.add("module");

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // ASSIGNTO
        ACTION_URL_PARAMS_ASSIGNTO.add("project");
        ACTION_URL_PARAMS_ASSIGNTO.add("id");

        // START
        ACTION_URL_PARAMS_START.add("id");

        // DELETEESTIMATE
        ACTION_URL_PARAMS_DELETEESTIMATE.add("id");
        ACTION_URL_PARAMS_DELETEESTIMATE.add("confirm");

        // RECORDESTIMATE
        ACTION_URL_PARAMS_RECORDESTIMATE.add("task");

        // EDITESTIMATE
        ACTION_URL_PARAMS_EDITESTIMATE.add("id");

        // PAUSE
        ACTION_URL_PARAMS_PAUSE.add("id");

        // RESTART
        ACTION_URL_PARAMS_RESTART.add("id");

        // CANCEL
        ACTION_URL_PARAMS_CANCEL.add("id");

        // ACTIVATE
        ACTION_URL_PARAMS_ACTIVATE.add("id");

        // FINISH
        ACTION_URL_PARAMS_FINISH.add("id");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");

    }

    // ----------
    // 接口实现
    // ----------

    final static public boolean create(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_CREATE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_CREATE);
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

    final static public boolean assignTo(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_ASSIGNTO, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_ASSIGNTO);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_ASSIGNTO, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_ASSIGNTO));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean start(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_START, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_START);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_START, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_START));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean deleteEstimate(String zentaoSid, JSONObject jo, ZTResult rst) {
        jo.put("confirm", "yes");
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_DELETEESTIMATE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_DELETEESTIMATE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_DELETEESTIMATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_DELETEESTIMATE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean recordEstimate(String zentaoSid, JSONObject jo, ZTResult rst) {
        jo.put("task", jo.get("id"));
        jo.remove("id");
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_RECORDESTIMATE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_RECORDESTIMATE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_RECORDESTIMATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_RECORDESTIMATE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean editEstimate(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_EDITESTIMATE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_EDITESTIMATE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_EDITESTIMATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_EDITESTIMATE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean pause(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_PAUSE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_PAUSE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_PAUSE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_PAUSE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean restart(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_RESTART, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_RESTART);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_RESTART, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_RESTART));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean cancel(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_CANCEL, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_CANCEL);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CANCEL, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CANCEL));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean activate(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_ACTIVATE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_ACTIVATE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_ACTIVATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_ACTIVATE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean finish(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_FINISH, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_FINISH);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_FINISH, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_FINISH));
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
