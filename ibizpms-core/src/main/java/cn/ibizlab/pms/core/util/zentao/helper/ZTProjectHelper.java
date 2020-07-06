package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-Project】 辅助类
 */
final public class ZTProjectHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "project";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_INDEX = "index";
    private final static String  ACTION_BROWSE = "browse";
    private final static String  ACTION_COMMONACTION = "commonAction";
    private final static String  ACTION_TASK = "task";
    private final static String  ACTION_GROUPTASK = "grouptask";
    private final static String  ACTION_IMPORTTASK = "importTask";
    private final static String  ACTION_IMPORTBUG = "importBug";
    private final static String  ACTION_STORY = "story";
    private final static String  ACTION_BUG = "bug";
    private final static String  ACTION_BUILD = "build";
    private final static String  ACTION_TESTTASK = "testtask";
    private final static String  ACTION_BURN = "burn";
    private final static String  ACTION_COMPUTEBURN = "computeBurn";
    private final static String  ACTION_FIXFIRST = "fixFirst";
    private final static String  ACTION_TEAM = "team";
    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_BATCHEDIT = "batchEdit";
    private final static String  ACTION_START = "start";
    private final static String  ACTION_PUTOFF = "putoff";
    private final static String  ACTION_SUSPEND = "suspend";
    private final static String  ACTION_ACTIVATE = "activate";
    private final static String  ACTION_CLOSE = "close";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_KANBAN = "kanban";
    private final static String  ACTION_TREE = "tree";
    private final static String  ACTION_PRINTKANBAN = "printKanban";
    private final static String  ACTION_STORYKANBAN = "storyKanban";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_MANAGEPRODUCTS = "manageProducts";
    private final static String  ACTION_MANAGEMEMBERS = "manageMembers";
    private final static String  ACTION_UNLINKMEMBER = "unlinkMember";
    private final static String  ACTION_LINKSTORY = "linkStory";
    private final static String  ACTION_UNLINKSTORY = "unlinkStory";
    private final static String  ACTION_BATCHUNLINKSTORY = "batchUnlinkStory";
    private final static String  ACTION_DYNAMIC = "dynamic";
    private final static String  ACTION_AJAXGETPRODUCTS = "ajaxGetProducts";
    private final static String  ACTION_AJAXGETMEMBERS = "ajaxGetMembers";
    private final static String  ACTION_TIPS = "tips";
    private final static String  ACTION_AJAXGETDROPMENU = "ajaxGetDropMenu";
    private final static String  ACTION_UPDATEORDER = "updateOrder";
    private final static String  ACTION_STORYSORT = "storySort";
    private final static String  ACTION_ALL = "all";
    private final static String  ACTION_EXPORT = "export";
    private final static String  ACTION_DOC = "doc";
    private final static String  ACTION_AJAXKANBANSETTING = "ajaxKanbanSetting";
    private final static String  ACTION_AJAXRESETKANBAN = "ajaxResetKanban";
    private final static String  ACTION_IMPORTPLANSTORIES = "importPlanStories";
    private final static String  ACTION_TREESTORY = "treeStory";
    private final static String  ACTION_TREETASK = "treeTask";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_INDEX = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_COMMONACTION = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_TASK = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_GROUPTASK = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_IMPORTTASK = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_IMPORTBUG = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_STORY = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BUG = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BUILD = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_TESTTASK = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BURN = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_COMPUTEBURN = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_FIXFIRST = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_TEAM = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHEDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_START = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_PUTOFF = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_SUSPEND = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ACTIVATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_KANBAN = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_TREE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_PRINTKANBAN = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_STORYKANBAN = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_MANAGEPRODUCTS = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_MANAGEMEMBERS = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKMEMBER = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKSTORY = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DYNAMIC = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETPRODUCTS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETMEMBERS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_TIPS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETDROPMENU = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_UPDATEORDER = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_STORYSORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ALL = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_EXPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DOC = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXKANBANSETTING = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXRESETKANBAN = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_IMPORTPLANSTORIES = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_TREESTORY = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_TREETASK = HttpMethod.GET;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_INDEX = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_COMMONACTION = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_TASK = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_GROUPTASK = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IMPORTTASK = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IMPORTBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_STORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BUILD = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_TESTTASK = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BURN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_COMPUTEBURN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_FIXFIRST = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_TEAM = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHEDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_START = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_PUTOFF = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_SUSPEND = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_KANBAN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_TREE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_PRINTKANBAN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_STORYKANBAN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_MANAGEPRODUCTS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_MANAGEMEMBERS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKMEMBER = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DYNAMIC = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETPRODUCTS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETMEMBERS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_TIPS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETDROPMENU = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UPDATEORDER = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_STORYSORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ALL = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EXPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DOC = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXKANBANSETTING = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXRESETKANBAN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IMPORTPLANSTORIES = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_TREESTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_TREETASK = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_INDEX = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_COMMONACTION = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_TASK = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_GROUPTASK = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IMPORTTASK = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IMPORTBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_STORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BUILD = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_TESTTASK = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BURN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_COMPUTEBURN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_FIXFIRST = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_TEAM = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHEDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_START = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_PUTOFF = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_SUSPEND = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_KANBAN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_TREE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_PRINTKANBAN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_STORYKANBAN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_MANAGEPRODUCTS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_MANAGEMEMBERS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKMEMBER = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DYNAMIC = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETPRODUCTS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETMEMBERS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_TIPS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETDROPMENU = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UPDATEORDER = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_STORYSORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ALL = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EXPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DOC = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXKANBANSETTING = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXRESETKANBAN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IMPORTPLANSTORIES = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_TREESTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_TREETASK = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("code", null);
        ACTION_PARAMS_CREATE.put("begin", "0000-00-00");
        ACTION_PARAMS_CREATE.put("end", "0000-00-00");
        ACTION_PARAMS_CREATE.put("days", null);
        ACTION_PARAMS_CREATE.put("team", null);
        ACTION_PARAMS_CREATE.put("type", null);
        ACTION_PARAMS_CREATE.put("products[]", null);
        ACTION_PARAMS_CREATE.put("branch[]", null);
        ACTION_PARAMS_CREATE.put("plans[]", null);
        ACTION_PARAMS_CREATE.put("desc", null);
        ACTION_PARAMS_CREATE.put("acl", null);

        // EDIT
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("code", null);
        ACTION_PARAMS_EDIT.put("begin", "0000-00-00");
        ACTION_PARAMS_EDIT.put("end", "0000-00-00");
        ACTION_PARAMS_EDIT.put("days", null);
        ACTION_PARAMS_EDIT.put("type", null);
        ACTION_PARAMS_EDIT.put("team", null);
        ACTION_PARAMS_EDIT.put("PO", null);
        ACTION_PARAMS_EDIT.put("QD", null);
        ACTION_PARAMS_EDIT.put("PM", null);
        ACTION_PARAMS_EDIT.put("RD", null);
        ACTION_PARAMS_EDIT.put("status", null);
        ACTION_PARAMS_EDIT.put("products[]", null);
        ACTION_PARAMS_EDIT.put("branch[]", null);
        ACTION_PARAMS_EDIT.put("plans[]", null);
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("acl", null);

        // START
        ACTION_PARAMS_START.put("comment", null);

        // PUTOFF
        ACTION_PARAMS_PUTOFF.put("begin", "0000-00-00");
        ACTION_PARAMS_PUTOFF.put("end", "0000-00-00");
        ACTION_PARAMS_PUTOFF.put("days", null);
        ACTION_PARAMS_PUTOFF.put("comment", null);

        // SUSPEND
        ACTION_PARAMS_SUSPEND.put("comment", null);

        // ACTIVATE
        ACTION_PARAMS_ACTIVATE.put("begin", null);
        ACTION_PARAMS_ACTIVATE.put("end", null);
        ACTION_PARAMS_ACTIVATE.put("readjustTime", null);
        ACTION_PARAMS_ACTIVATE.put("readjustTask", null);
        ACTION_PARAMS_ACTIVATE.put("comment", null);

        // CLOSE
        ACTION_PARAMS_CLOSE.put("comment", null);

        // UPDATEORDER
        ACTION_PARAMS_UPDATEORDER.put("projects", null);
        ACTION_PARAMS_UPDATEORDER.put("orderBy", null);

        // LINKSTORY
        ACTION_PARAMS_LINKSTORY.put("stories[]", null);

        // BATCHUNLINKSTORY
        ACTION_PARAMS_BATCHUNLINKSTORY.put("storyIdList[]", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

        // START
        ACTION_URL_PARAMS_START.add("id");

        // PUTOFF
        ACTION_URL_PARAMS_PUTOFF.add("id");

        // ACTIVATE
        ACTION_URL_PARAMS_ACTIVATE.add("id");

        // SUSPEND
        ACTION_URL_PARAMS_SUSPEND.add("id");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");

        // LINKSTORY
        ACTION_URL_PARAMS_LINKSTORY.add("id");

        // BATCHUNLINKSTORY
        ACTION_URL_PARAMS_BATCHUNLINKSTORY.add("id");

        // UNLINKSTORY
        // id为project id
        ACTION_URL_PARAMS_UNLINKSTORY.add("id");
        ACTION_URL_PARAMS_UNLINKSTORY.add("story");
        ACTION_URL_PARAMS_UNLINKSTORY.add("confirm");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("begin", "yyyy-MM-dd");
        PARAMS_DATEFORMAT.put("end", "yyyy-MM-dd");

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
     * putoff 延期
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean putoff(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_PUTOFF;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_PUTOFF;
        Map<String, Object> actionParams = ACTION_PARAMS_PUTOFF;
        List<String> actionUrlParams = ACTION_URL_PARAMS_PUTOFF;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * suspend 挂起
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean suspend(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_SUSPEND;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_SUSPEND;
        Map<String, Object> actionParams = ACTION_PARAMS_SUSPEND;
        List<String> actionUrlParams = ACTION_URL_PARAMS_SUSPEND;
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

    /**
     * updateOrder 排序
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean updateOrder(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_UPDATEORDER;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_UPDATEORDER;
        Map<String, Object> actionParams = ACTION_PARAMS_UPDATEORDER;
        List<String> actionUrlParams = ACTION_URL_PARAMS_UPDATEORDER;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * linkStory 关联需求
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean linkStory(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_LINKSTORY;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_LINKSTORY;
        Map<String, Object> actionParams = ACTION_PARAMS_LINKSTORY;
        List<String> actionUrlParams = ACTION_URL_PARAMS_LINKSTORY;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * unlinkStory 解除关联需求
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean unlinkStory(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_UNLINKSTORY;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_UNLINKSTORY;
        Map<String, Object> actionParams = ACTION_PARAMS_UNLINKSTORY;
        List<String> actionUrlParams = ACTION_URL_PARAMS_UNLINKSTORY;
        String returnUrlRegexPrev = null;

        jo.put("confirm", "yes");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * batchUnlinkStory 批量解除关联需求
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean batchUnlinkStory(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_BATCHUNLINKSTORY;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_BATCHUNLINKSTORY;
        Map<String, Object> actionParams = ACTION_PARAMS_BATCHUNLINKSTORY;
        List<String> actionUrlParams = ACTION_URL_PARAMS_BATCHUNLINKSTORY;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }
}
