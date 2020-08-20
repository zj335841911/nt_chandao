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
 * 【禅道接口-Release】 辅助类
 */
@Slf4j
final public class ZTReleaseHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "release";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_COMMONACTION = "commonAction";
    private final static String  ACTION_BROWSE = "browse";
    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_EXPORT = "export";
    private final static String  ACTION_LINKSTORY = "linkStory";
    private final static String  ACTION_UNLINKSTORY = "unlinkStory";
    private final static String  ACTION_BATCHUNLINKSTORY = "batchUnlinkStory";
    private final static String  ACTION_LINKBUG = "linkBug";
    private final static String  ACTION_UNLINKBUG = "unlinkBug";
    private final static String  ACTION_BATCHUNLINKBUG = "batchUnlinkBug";
    private final static String  ACTION_CHANGESTATUS = "changeStatus";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_COMMONACTION = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_EXPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKSTORY = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKSTORY = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKBUG = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKBUG = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKBUG = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CHANGESTATUS = HttpMethod.GET;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_COMMONACTION = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EXPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CHANGESTATUS = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_COMMONACTION = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EXPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CHANGESTATUS = new ArrayList<>();

    // ----------
    // 返回结果CheckList
    // ----------
    private final static List<ZTCheckItem> ACTION_CHECKLIST_COMMONACTION = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BROWSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_VIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_DELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EXPORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_UNLINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHUNLINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_UNLINKBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHUNLINKBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CHANGESTATUS = new ArrayList<>();

    // ----------
    // 返回URL正则
    // ----------
    private final static String ACTION_RETURNURL_COMMONACTION = null;
    private final static String ACTION_RETURNURL_BROWSE = null;
    private final static String ACTION_RETURNURL_CREATE = null;
    private final static String ACTION_RETURNURL_EDIT = null;
    private final static String ACTION_RETURNURL_VIEW = null;
    private final static String ACTION_RETURNURL_DELETE = null;
    private final static String ACTION_RETURNURL_EXPORT = null;
    private final static String ACTION_RETURNURL_LINKSTORY = null;
    private final static String ACTION_RETURNURL_UNLINKSTORY = null;
    private final static String ACTION_RETURNURL_BATCHUNLINKSTORY = null;
    private final static String ACTION_RETURNURL_LINKBUG = null;
    private final static String ACTION_RETURNURL_UNLINKBUG = null;
    private final static String ACTION_RETURNURL_BATCHUNLINKBUG = null;
    private final static String ACTION_RETURNURL_CHANGESTATUS = null;

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("marker", null);
        ACTION_PARAMS_CREATE.put("build", null);
        ACTION_PARAMS_CREATE.put("date", null);
        ACTION_PARAMS_CREATE.put("desc", null);

        // EDIT
        ACTION_PARAMS_EDIT.put("branch", 0);
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("marker", null);
        ACTION_PARAMS_EDIT.put("build", null);
        ACTION_PARAMS_EDIT.put("date", "0000-00-00");
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("product", null);
        ACTION_PARAMS_EDIT.put("status", null);

        // LINKSTORY
        ACTION_PARAMS_LINKSTORY.put("stories[]", null);

        // BATCHUNLINKSTORY
        ACTION_PARAMS_BATCHUNLINKSTORY.put("storyIdList[]", null);

        // LINKBUG
        ACTION_PARAMS_LINKBUG.put("bugs[]", null);

        // BATCHUNLINKBUG
        ACTION_PARAMS_BATCHUNLINKBUG.put("unlinkBugs[]", null);

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

        // CHANGESTATUS
        ACTION_URL_PARAMS_CHANGESTATUS.add("id");
        ACTION_URL_PARAMS_CHANGESTATUS.add("status");

        // LINKSTORY
        ACTION_URL_PARAMS_LINKSTORY.add("id");

        // BATCHUNLINKSTORY
        ACTION_URL_PARAMS_BATCHUNLINKSTORY.add("id");

        // UNLINKSTORY
        // id为story id
        ACTION_URL_PARAMS_UNLINKSTORY.add("release");
        ACTION_URL_PARAMS_UNLINKSTORY.add("id");

        // LINKBUG
        ACTION_URL_PARAMS_LINKBUG.add("id");
        ACTION_URL_PARAMS_UNLINKBUG.add("browseType");
        ACTION_URL_PARAMS_UNLINKBUG.add("myQueryID");
        ACTION_URL_PARAMS_UNLINKBUG.add("linkType");

        // BATCHUNLINKBUG
        ACTION_URL_PARAMS_BATCHUNLINKBUG.add("id");

        // UNLINKBUG
        // id为bug id
        ACTION_URL_PARAMS_UNLINKBUG.add("release");
        ACTION_URL_PARAMS_UNLINKBUG.add("id");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("date", "yyyy-MM-dd");
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
     * changeStatus 状态变更
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean changeStatus(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CHANGESTATUS;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CHANGESTATUS;
        Map<String, Object> actionParams = ACTION_PARAMS_CHANGESTATUS;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CHANGESTATUS;
        String returnUrlRegexPrev = ACTION_RETURNURL_CHANGESTATUS;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CHANGESTATUS;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * activate 状态变更（激活）
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean activate(String zentaoSid, JSONObject jo, ZTResult rst) {
        jo.put("status", "normal");
        return changeStatus(zentaoSid, jo, rst);
    }

    /**
     * terminate 状态变更（停止维护）
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean terminate(String zentaoSid, JSONObject jo, ZTResult rst) {
        jo.put("status", "terminate");
        return changeStatus(zentaoSid, jo, rst);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_LINKSTORY;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_LINKSTORY;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_UNLINKSTORY;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_UNLINKSTORY;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_BATCHUNLINKSTORY;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_BATCHUNLINKSTORY;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * linkBugbyBug 关联Bug（解决Bug）
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean linkBugbyBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        jo.put("browseType", "bySearch");
        jo.put("myQueryID", "myQueryID");
        jo.put("linkType", "bug");
        return linkBug(zentaoSid, jo, rst);
    }

    /**
     * linkBugbyLeftBug 关联Bug（遗留Bug）
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean linkBugbyLeftBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        jo.put("browseType", "bySearch");
        jo.put("myQueryID", "myQueryID");
        jo.put("linkType", "leftBug");
        return linkBug(zentaoSid, jo, rst);
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
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_LINKBUG;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_LINKBUG;
        Map<String, Object> actionParams = ACTION_PARAMS_LINKBUG;
        List<String> actionUrlParams = ACTION_URL_PARAMS_LINKBUG;
        String returnUrlRegexPrev = ACTION_RETURNURL_LINKBUG;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_LINKBUG;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_UNLINKBUG;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_UNLINKBUG;
        Map<String, Object> actionParams = ACTION_PARAMS_UNLINKBUG;
        List<String> actionUrlParams = ACTION_URL_PARAMS_UNLINKBUG;
        String returnUrlRegexPrev = ACTION_RETURNURL_UNLINKBUG;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_UNLINKBUG;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_BATCHUNLINKBUG;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_BATCHUNLINKBUG;
        Map<String, Object> actionParams = ACTION_PARAMS_BATCHUNLINKBUG;
        List<String> actionUrlParams = ACTION_URL_PARAMS_BATCHUNLINKBUG;
        String returnUrlRegexPrev = ACTION_RETURNURL_BATCHUNLINKBUG;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_BATCHUNLINKBUG;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

}
