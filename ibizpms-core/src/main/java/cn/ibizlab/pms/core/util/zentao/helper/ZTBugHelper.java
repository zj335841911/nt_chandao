package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTCheckItem;
import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-Bug】 辅助类
 */
@Slf4j
final public class ZTBugHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "bug";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_INDEX = "";
    private final static String  ACTION_BROWSE = "browse";
    private final static String  ACTION_REPORT = "report";
    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_BATCHCREATE = "batchCreate";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_BATCHEDIT = "batchEdit";
    private final static String  ACTION_ASSIGNTO = "assignTo";
    private final static String  ACTION_BATCHCHANGEBRANCH = "batchChangeBranch";
    private final static String  ACTION_BATCHCHANGEMODULE = "batchChangeModule";
    private final static String  ACTION_BATCHASSIGNTO = "batchAssignTo";
    private final static String  ACTION_CONFIRMBUG = "confirmBug";
    private final static String  ACTION_BATCHCONFIRM = "batchConfirm";
    private final static String  ACTION_RESOLVE = "resolve";
    private final static String  ACTION_BATCHRESOLVE = "batchResolve";
    private final static String  ACTION_ACTIVATE = "activate";
    private final static String  ACTION_CLOSE = "close";
    private final static String  ACTION_LINKBUGS = "linkBugs";
    private final static String  ACTION_BATCHCLOSE = "batchClose";
    private final static String  ACTION_BATCHACTIVATE = "batchActivate";
    private final static String  ACTION_CONFIRMSTORYCHANGE = "confirmStoryChange";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_AJAXGETUSERBUGS = "ajaxGetUserBugs";
    private final static String  ACTION_AJAXGETMODULEOWNER = "ajaxGetModuleOwner";
    private final static String  ACTION_AJAXLOADASSIGNEDTO = "ajaxLoadAssignedTo";
    private final static String  ACTION_AJAXLOADPROJECTTEAMMEMBERS = "ajaxLoadProjectTeamMembers";
    private final static String  ACTION_AJAXLOADALLUSERS = "ajaxLoadAllUsers";
    private final static String  ACTION_AJAXGETDETAIL = "ajaxGetDetail";
    private final static String  ACTION_EXPORT = "export";
    private final static String  ACTION_AJAXGETBYID = "ajaxGetByID";
    private final static String  ACTION_AJAXGETBUGFIELDOPTIONS = "ajaxGetBugFieldOptions";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_INDEX = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_REPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHEDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ASSIGNTO = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEBRANCH = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEMODULE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHASSIGNTO = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CONFIRMBUG = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCONFIRM = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_RESOLVE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHRESOLVE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ACTIVATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKBUGS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHACTIVATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CONFIRMSTORYCHANGE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETUSERBUGS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETMODULEOWNER = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXLOADASSIGNEDTO = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXLOADPROJECTTEAMMEMBERS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXLOADALLUSERS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETDETAIL = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_EXPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETBYID = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETBUGFIELDOPTIONS = HttpMethod.GET;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_INDEX = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_REPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHEDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ASSIGNTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEBRANCH = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEMODULE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHASSIGNTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CONFIRMBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCONFIRM = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_RESOLVE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHRESOLVE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKBUGS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CONFIRMSTORYCHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETUSERBUGS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETMODULEOWNER = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXLOADASSIGNEDTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXLOADPROJECTTEAMMEMBERS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXLOADALLUSERS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETDETAIL = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EXPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETBYID = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETBUGFIELDOPTIONS = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_INDEX = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_REPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHEDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ASSIGNTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEBRANCH = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEMODULE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHASSIGNTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CONFIRMBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCONFIRM = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_RESOLVE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHRESOLVE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKBUGS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CONFIRMSTORYCHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETUSERBUGS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETMODULEOWNER = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXLOADASSIGNEDTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXLOADPROJECTTEAMMEMBERS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXLOADALLUSERS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETDETAIL = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EXPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETBYID = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETBUGFIELDOPTIONS = new ArrayList<>();

    // ----------
    // 返回结果CheckList
    // ----------
    private final static List<ZTCheckItem> ACTION_CHECKLIST_INDEX = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BROWSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_REPORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_VIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHEDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_ASSIGNTO = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCHANGEBRANCH = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCHANGEMODULE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHASSIGNTO = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CONFIRMBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCONFIRM = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_RESOLVE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHRESOLVE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_ACTIVATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CLOSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKBUGS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCLOSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHACTIVATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CONFIRMSTORYCHANGE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_DELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETUSERBUGS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETMODULEOWNER = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXLOADASSIGNEDTO = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXLOADPROJECTTEAMMEMBERS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXLOADALLUSERS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETDETAIL = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EXPORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETBYID = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETBUGFIELDOPTIONS = new ArrayList<>();

    // ----------
    // 返回URL正则
    // ----------
    private final static String ACTION_RETURNURL_INDEX = null;
    private final static String ACTION_RETURNURL_BROWSE = null;
    private final static String ACTION_RETURNURL_REPORT = null;
    private final static String ACTION_RETURNURL_CREATE = null;
    private final static String ACTION_RETURNURL_BATCHCREATE = null;
    private final static String ACTION_RETURNURL_VIEW = null;
    private final static String ACTION_RETURNURL_EDIT = null;
    private final static String ACTION_RETURNURL_BATCHEDIT = null;
    private final static String ACTION_RETURNURL_ASSIGNTO = null;
    private final static String ACTION_RETURNURL_BATCHCHANGEBRANCH = null;
    private final static String ACTION_RETURNURL_BATCHCHANGEMODULE = null;
    private final static String ACTION_RETURNURL_BATCHASSIGNTO = null;
    private final static String ACTION_RETURNURL_CONFIRMBUG = null;
    private final static String ACTION_RETURNURL_BATCHCONFIRM = null;
    private final static String ACTION_RETURNURL_RESOLVE = null;
    private final static String ACTION_RETURNURL_BATCHRESOLVE = null;
    private final static String ACTION_RETURNURL_ACTIVATE = null;
    private final static String ACTION_RETURNURL_CLOSE = null;
    private final static String ACTION_RETURNURL_LINKBUGS = null;
    private final static String ACTION_RETURNURL_BATCHCLOSE = null;
    private final static String ACTION_RETURNURL_BATCHACTIVATE = null;
    private final static String ACTION_RETURNURL_CONFIRMSTORYCHANGE = null;
    private final static String ACTION_RETURNURL_DELETE = null;
    private final static String ACTION_RETURNURL_AJAXGETUSERBUGS = null;
    private final static String ACTION_RETURNURL_AJAXGETMODULEOWNER = null;
    private final static String ACTION_RETURNURL_AJAXLOADASSIGNEDTO = null;
    private final static String ACTION_RETURNURL_AJAXLOADPROJECTTEAMMEMBERS = null;
    private final static String ACTION_RETURNURL_AJAXLOADALLUSERS = null;
    private final static String ACTION_RETURNURL_AJAXGETDETAIL = null;
    private final static String ACTION_RETURNURL_EXPORT = null;
    private final static String ACTION_RETURNURL_AJAXGETBYID = null;
    private final static String ACTION_RETURNURL_AJAXGETBUGFIELDOPTIONS = null;

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("product", null);
        ACTION_PARAMS_CREATE.put("title", null);
        ACTION_PARAMS_CREATE.put("openedBuild", null);
        ACTION_PARAMS_CREATE.put("branch", null);
        ACTION_PARAMS_CREATE.put("module", null);
        ACTION_PARAMS_CREATE.put("project", null);
        ACTION_PARAMS_CREATE.put("assignedTo", null);
        ACTION_PARAMS_CREATE.put("deadline", "0000-00-00");
        ACTION_PARAMS_CREATE.put("type", null);
        ACTION_PARAMS_CREATE.put("os", null);
        ACTION_PARAMS_CREATE.put("browser", null);
        ACTION_PARAMS_CREATE.put("color", null);
        ACTION_PARAMS_CREATE.put("story", null);
        ACTION_PARAMS_CREATE.put("task", null);
        ACTION_PARAMS_CREATE.put("oldTaskID", 0);
        ACTION_PARAMS_CREATE.put("case", 0);
        ACTION_PARAMS_CREATE.put("caseVersion", 0);
        ACTION_PARAMS_CREATE.put("result", 0);
        ACTION_PARAMS_CREATE.put("testtask", 0);
        ACTION_PARAMS_CREATE.put("severity", 3);
        ACTION_PARAMS_CREATE.put("pri", 3);
        ACTION_PARAMS_CREATE.put("steps", null);
        ACTION_PARAMS_CREATE.put("mailto", null);
        ACTION_PARAMS_CREATE.put("keywords", null);

        // EDIT
        ACTION_PARAMS_EDIT.put("product", null);
        ACTION_PARAMS_EDIT.put("plan", null);
        ACTION_PARAMS_EDIT.put("title", null);
        ACTION_PARAMS_EDIT.put("openedBuild", null);
        ACTION_PARAMS_EDIT.put("branch", null);
        ACTION_PARAMS_EDIT.put("module", null);
        ACTION_PARAMS_EDIT.put("project", null);
        ACTION_PARAMS_EDIT.put("assignedTo", null);
        ACTION_PARAMS_EDIT.put("deadline", "0000-00-00");
        ACTION_PARAMS_EDIT.put("type", null);
        ACTION_PARAMS_EDIT.put("os", null);
        ACTION_PARAMS_EDIT.put("browser", null);
        ACTION_PARAMS_EDIT.put("color", null);
        ACTION_PARAMS_EDIT.put("story", null);
        ACTION_PARAMS_EDIT.put("task", null);
        ACTION_PARAMS_EDIT.put("case", 0);
        ACTION_PARAMS_EDIT.put("caseVersion", 0);
        ACTION_PARAMS_EDIT.put("result", 0);
        ACTION_PARAMS_EDIT.put("testtask", 0);
        ACTION_PARAMS_EDIT.put("severity", 3);
        ACTION_PARAMS_EDIT.put("pri", 3);
        ACTION_PARAMS_EDIT.put("steps", null);
        ACTION_PARAMS_EDIT.put("mailto", null);
        ACTION_PARAMS_EDIT.put("keywords", null);
        ACTION_PARAMS_EDIT.put("status", null);
        ACTION_PARAMS_EDIT.put("comment", null);
        ACTION_PARAMS_EDIT.put("resolvedBy", null);
        ACTION_PARAMS_EDIT.put("resolvedDate", null);
        ACTION_PARAMS_EDIT.put("resolvedBuild", null);
        ACTION_PARAMS_EDIT.put("resolution", null);
        ACTION_PARAMS_EDIT.put("duplicateBug", null);
        ACTION_PARAMS_EDIT.put("closedBy", null);
        ACTION_PARAMS_EDIT.put("closedDate", null);
        ACTION_PARAMS_EDIT.put("linkBug", null);

        // RESOLVE
        ACTION_PARAMS_RESOLVE.put("resolution", null);
        ACTION_PARAMS_RESOLVE.put("duplicateBug", null);
        ACTION_PARAMS_RESOLVE.put("buildProject", null);
        ACTION_PARAMS_RESOLVE.put("resolvedBuild", null);
        ACTION_PARAMS_RESOLVE.put("buildName", null);
        ACTION_PARAMS_RESOLVE.put("resolvedDate", null);
        ACTION_PARAMS_RESOLVE.put("assignedTo", null);
        ACTION_PARAMS_RESOLVE.put("comment", null);

        // CLOSE
        ACTION_PARAMS_CLOSE.put("comment", "");

        // ASSIGNTO
        ACTION_PARAMS_ASSIGNTO.put("comment", null);
        ACTION_PARAMS_ASSIGNTO.put("assignedTo", null);
        ACTION_PARAMS_ASSIGNTO.put("mailto", null);

        // ACTIVATE
        ACTION_PARAMS_ACTIVATE.put("comment", null);
        ACTION_PARAMS_ACTIVATE.put("assignedTo", null);
        ACTION_PARAMS_ACTIVATE.put("openedBuild", null);

        // CONFIRMBUG
        ACTION_PARAMS_CONFIRMBUG.put("comment", null);
        ACTION_PARAMS_CONFIRMBUG.put("assignedTo", null);
        ACTION_PARAMS_CONFIRMBUG.put("type", null);
        ACTION_PARAMS_CONFIRMBUG.put("pri", 3);
        ACTION_PARAMS_CONFIRMBUG.put("mailto", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        ACTION_URL_PARAMS_CREATE.add("product");
        ACTION_URL_PARAMS_CREATE.add("branch");

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

        // RESOLVE
        ACTION_URL_PARAMS_RESOLVE.add("id");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");

        // ASSIGNTO
        ACTION_URL_PARAMS_ASSIGNTO.add("id");

        // ACTIVATE
        ACTION_URL_PARAMS_ACTIVATE.add("id");

        // CONFIRMBUG
        ACTION_URL_PARAMS_CONFIRMBUG.add("id");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("deadline", "yyyy-MM-dd");
        PARAMS_DATEFORMAT.put("resolvedDate", "yyyy-MM-dd hh:mm");
        PARAMS_DATEFORMAT.put("closedDate", "yyyy-MM-dd hh:mm");
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
        String returnUrlRegexPrev = ACTION_RETURNURL_CREATE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CREATE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_EDIT;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_EDIT;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_DELETE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_DELETE;

        jo.put("confirm", "yes");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * resolve 解决
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean resolve(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_RESOLVE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_RESOLVE;
        Map<String, Object> actionParams = ACTION_PARAMS_RESOLVE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_RESOLVE;
        String returnUrlRegexPrev = ACTION_RETURNURL_RESOLVE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_RESOLVE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_CLOSE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CLOSE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_ASSIGNTO;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_ASSIGNTO;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_ACTIVATE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_ACTIVATE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * confirmBug 确认
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean confirm(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CONFIRMBUG;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CONFIRMBUG;
        Map<String, Object> actionParams = ACTION_PARAMS_CONFIRMBUG;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CONFIRMBUG;
        String returnUrlRegexPrev = ACTION_RETURNURL_CONFIRMBUG;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CONFIRMBUG;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * linkBug 关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean linkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTProductPlanHelper.linkBug(zentaoSid, jo, rst);
    }

    /**
     * unlinkBug 解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean unlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTProductPlanHelper.unlinkBug(zentaoSid, jo, rst);
    }

    /**
     * batchUnlinkBug 批量解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean batchUnlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTProductPlanHelper.batchUnlinkBug(zentaoSid, jo, rst);
    }

    /**
     * releaseLinkBugbyBug 关联Bug（解决Bug）
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean releaseLinkBugbyBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTReleaseHelper.linkBugbyBug(zentaoSid, jo, rst);
    }

    /**
     * releaseLinkBugbyLeftBug 关联Bug（遗留Bug）
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean releaseLinkBugbyLeftBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTReleaseHelper.linkBugbyLeftBug(zentaoSid, jo, rst);
    }

    /**
     * releaseUnlinkBug 解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean releaseUnlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTReleaseHelper.unlinkBug(zentaoSid, jo, rst);
    }

    /**
     * releaaseBatchUnlinkBug 批量解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean releaaseBatchUnlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTReleaseHelper.batchUnlinkBug(zentaoSid, jo, rst);
    }

    /**
     * buildLinkBug 版本关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean buildLinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTBuildHelper.linkBug(zentaoSid, jo, rst);
    }

    /**
     * buildUnlinkBug 版本解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean buildUnlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTBuildHelper.unlinkBug(zentaoSid, jo, rst);
    }

    /**
     * buildBatchUnlinkBug 版本批量解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean buildBatchUnlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTBuildHelper.batchUnlinkBug(zentaoSid, jo, rst);
    }

    /**
     * toStory Bug转需求
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean toStory(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTStoryHelper.create(zentaoSid, jo, rst);
    }
}
