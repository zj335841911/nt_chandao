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
 * 【禅道接口-Product】 辅助类
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
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();


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

    final static public boolean close(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_CLOSE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_CLOSE);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CLOSE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CLOSE));
        rst = ZenTaoHttpHelper.formatResultHTML(rstJO, rst);
        return rst.isSuccess();
    }

}
