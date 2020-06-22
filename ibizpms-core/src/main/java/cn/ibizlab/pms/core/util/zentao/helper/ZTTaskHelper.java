package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpMethod;
import org.springframework.security.core.parameters.P;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-Task】 辅助类
 */
final public class ZTTaskHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "task";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

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
        ACTION_PARAMS_EDIT.put("consumed", null);
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

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("project");
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

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
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("realStarted", "yyyy-MM-dd");
        PARAMS_DATEFORMAT.put("deadline", "yyyy-MM-dd");
        PARAMS_DATEFORMAT.put("estStarted", "yyyy-MM-dd");
    }

    // ----------
    // 接口实现
    // ----------

    /**
     * create 创建
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean create(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CREATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CREATE;
        Map<String, Object> actionParams = ACTION_PARAMS_CREATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CREATE;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * edit 编辑
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean edit(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_EDIT;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_EDIT;
        Map<String, Object> actionParams = ACTION_PARAMS_EDIT;
        List<String> actionUrlParams = ACTION_URL_PARAMS_EDIT;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * delete 删除
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean delete(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_DELETE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_DELETE;
        Map<String, Object> actionParams = ACTION_PARAMS_DELETE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_DELETE;
        String returnUrlRegexPrev = null;

        jo.put("confirm", "yes");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * assignTo 指派
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean assignTo(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_ASSIGNTO;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_ASSIGNTO;
        Map<String, Object> actionParams = ACTION_PARAMS_ASSIGNTO;
        List<String> actionUrlParams = ACTION_URL_PARAMS_ASSIGNTO;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * start 开始
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean start(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_START;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_START;
        Map<String, Object> actionParams = ACTION_PARAMS_START;
        List<String> actionUrlParams = ACTION_URL_PARAMS_START;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * deleteEstimate 删除工时
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean deleteEstimate(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_DELETEESTIMATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_DELETEESTIMATE;
        Map<String, Object> actionParams = ACTION_PARAMS_DELETEESTIMATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_DELETEESTIMATE;
        String returnUrlRegexPrev = null;

        jo.put("confirm", "yes");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * recordEstimate 记录工时
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean recordEstimate(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_RECORDESTIMATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_RECORDESTIMATE;
        Map<String, Object> actionParams = ACTION_PARAMS_RECORDESTIMATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_RECORDESTIMATE;
        String returnUrlRegexPrev = null;

        jo.put("task", jo.get("id"));
        jo.remove("id");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * editEstimate 编辑工时
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean editEstimate(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_EDITESTIMATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_EDITESTIMATE;
        Map<String, Object> actionParams = ACTION_PARAMS_EDITESTIMATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_EDITESTIMATE;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * pause 暂停
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean pause(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_PAUSE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_PAUSE;
        Map<String, Object> actionParams = ACTION_PARAMS_PAUSE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_PAUSE;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * restart 继续（重启）
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean restart(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_RESTART;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_RESTART;
        Map<String, Object> actionParams = ACTION_PARAMS_RESTART;
        List<String> actionUrlParams = ACTION_URL_PARAMS_RESTART;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * cancel 取消
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean cancel(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CANCEL;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CANCEL;
        Map<String, Object> actionParams = ACTION_PARAMS_CANCEL;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CANCEL;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * activate 激活
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean activate(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_ACTIVATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_ACTIVATE;
        Map<String, Object> actionParams = ACTION_PARAMS_ACTIVATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_ACTIVATE;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * finish 完成
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean finish(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_FINISH;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_FINISH;
        Map<String, Object> actionParams = ACTION_PARAMS_FINISH;
        List<String> actionUrlParams = ACTION_URL_PARAMS_FINISH;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * close 关闭
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean close(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CLOSE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CLOSE;
        Map<String, Object> actionParams = ACTION_PARAMS_CLOSE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CLOSE;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }
}
