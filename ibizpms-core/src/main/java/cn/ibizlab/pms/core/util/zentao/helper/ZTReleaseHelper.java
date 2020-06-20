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
 * 【禅道接口-Release】 辅助类
 */
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
        ACTION_PARAMS_EDIT.put("date", null);
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("product", null);
        ACTION_PARAMS_EDIT.put("status", null);

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
        String actionName = ACTION_EDIT;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CHANGESTATUS;
        Map<String, Object> actionParams = ACTION_PARAMS_CHANGESTATUS;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CHANGESTATUS;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
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

}
