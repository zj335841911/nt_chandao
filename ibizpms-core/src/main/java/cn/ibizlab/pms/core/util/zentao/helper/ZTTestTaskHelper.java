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
 * 【禅道接口-TestTask】 辅助类
 */
final public class ZTTestTaskHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "testtask";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_INDEX = "";
    private final static String  ACTION_BROWSE = "browse";
    private final static String  ACTION_BROWSEUNITS = "browseUnits";
    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_UNITCASES = "unitCases";
    private final static String  ACTION_CASES = "cases";
    private final static String  ACTION_REPORT = "report";
    private final static String  ACTION_GROUPCASE = "groupCase";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_START = "start";
    private final static String  ACTION_ACTIVATE = "activate";
    private final static String  ACTION_CLOSE = "close";
    private final static String  ACTION_BLOCK = "block";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_LINKCASE = "linkCase";
    private final static String  ACTION_UNLINKCASE = "unlinkCase";
    private final static String  ACTION_BATCHUNLINKCASES = "batchUnlinkCases";
    private final static String  ACTION_RUNCASE = "runCase";
    private final static String  ACTION_BATCHRUN = "batchRun";
    private final static String  ACTION_RESULTS = "results";
    private final static String  ACTION_BATCHASSIGN = "batchAssign";
    private final static String  ACTION_IMPORTUNITRESULT = "importUnitResult";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_INDEX = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSEUNITS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_UNITCASES = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CASES = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_REPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_GROUPCASE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_START = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ACTIVATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BLOCK = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKCASE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKCASE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKCASES = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_RUNCASE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHRUN = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_RESULTS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHASSIGN = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_IMPORTUNITRESULT = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_INDEX = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSEUNITS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNITCASES = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CASES = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_REPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_GROUPCASE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_START = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BLOCK = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKCASE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKCASE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKCASES = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_RUNCASE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHRUN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_RESULTS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHASSIGN = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IMPORTUNITRESULT = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_INDEX = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSEUNITS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNITCASES = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CASES = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_REPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_GROUPCASE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_START = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BLOCK = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKCASE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKCASE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKCASES = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_RUNCASE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHRUN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_RESULTS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHASSIGN = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IMPORTUNITRESULT = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("product", null);
        ACTION_PARAMS_CREATE.put("project", null);
        ACTION_PARAMS_CREATE.put("build", null);
        ACTION_PARAMS_CREATE.put("owner", null);
        ACTION_PARAMS_CREATE.put("pri", null);
        ACTION_PARAMS_CREATE.put("begin", "0000-00-00");
        ACTION_PARAMS_CREATE.put("end", "0000-00-00");
        ACTION_PARAMS_CREATE.put("status", null);
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("desc", null);
        ACTION_PARAMS_CREATE.put("mailto", null);

        // EDIT
        ACTION_PARAMS_EDIT.put("product", null);
        ACTION_PARAMS_EDIT.put("project", null);
        ACTION_PARAMS_EDIT.put("build", null);
        ACTION_PARAMS_EDIT.put("owner", null);
        ACTION_PARAMS_EDIT.put("pri", null);
        ACTION_PARAMS_EDIT.put("begin", "0000-00-00");
        ACTION_PARAMS_EDIT.put("end", "0000-00-00");
        ACTION_PARAMS_EDIT.put("status", null);
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("mailto", null);
        ACTION_PARAMS_EDIT.put("comment", null);

        // START
        ACTION_PARAMS_START.put("comment", null);

        // BLOCK
        ACTION_PARAMS_BLOCK.put("comment", null);

        // ACTIVATE
        ACTION_PARAMS_ACTIVATE.put("comment", null);

        // CLOSE
        ACTION_PARAMS_CLOSE.put("comment", null);
        ACTION_PARAMS_CLOSE.put("mailto", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        ACTION_URL_PARAMS_CREATE.add("product");

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

        // START
        ACTION_URL_PARAMS_START.add("id");

        // BLOCK
        ACTION_URL_PARAMS_BLOCK.add("id");

        // ACTIVATE
        ACTION_URL_PARAMS_ACTIVATE.add("id");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");

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
     * block 阻塞
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean block(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_BLOCK;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_BLOCK;
        Map<String, Object> actionParams = ACTION_PARAMS_BLOCK;
        List<String> actionUrlParams = ACTION_URL_PARAMS_BLOCK;
        String returnUrlRegexPrev = "/zentao/testtask-view-";

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
        String returnUrlRegexPrev = "/zentao/testtask-view-";

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
        String returnUrlRegexPrev = "/zentao/testtask-view-";

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }
}
