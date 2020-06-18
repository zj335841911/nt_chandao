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
 * 【禅道接口-Product】 辅助类
 */
final public class ZTProductHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "product";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_INDEX= "index";
    private final static String  ACTION_PROJECT= "project";
    private final static String  ACTION_BROWSE= "browse";
    private final static String  ACTION_CREATE= "create";
    private final static String  ACTION_EDIT= "edit";
    private final static String  ACTION_BATCHEDIT= "batchEdit";
    private final static String  ACTION_CLOSE= "close";
    private final static String  ACTION_VIEW= "view";
    private final static String  ACTION_DELETE= "delete";
    private final static String  ACTION_ROADMAP= "roadmap";
    private final static String  ACTION_DYNAMIC= "dynamic";
    private final static String  ACTION_AJAXGETPROJECTS= "ajaxGetProjects";
    private final static String  ACTION_AJAXGETPLANS= "ajaxGetPlans";
    private final static String  ACTION_AJAXGETDROPMENU= "ajaxGetDropMenu";
    private final static String  ACTION_UPDATEORDER= "updateOrder";
    private final static String  ACTION_SHOWERRORNONE= "showErrorNone";
    private final static String  ACTION_ALL= "all";
    private final static String  ACTION_EXPORT= "export";
    private final static String  ACTION_DOC= "doc";
    private final static String  ACTION_BUILD= "build";

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

    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("code", null);
        ACTION_PARAMS_CREATE.put("QD", null);
        ACTION_PARAMS_CREATE.put("RD", null);
        ACTION_PARAMS_CREATE.put("PO", null);
        ACTION_PARAMS_CREATE.put("type", "normal");
        ACTION_PARAMS_CREATE.put("acl", "open");
        ACTION_PARAMS_CREATE.put("line", 0);
        ACTION_PARAMS_CREATE.put("status", "normal");

        // EDIT
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("code", null);
        ACTION_PARAMS_EDIT.put("QD", null);
        ACTION_PARAMS_EDIT.put("RD", null);
        ACTION_PARAMS_EDIT.put("PO", null);
        ACTION_PARAMS_EDIT.put("type", "normal");
        ACTION_PARAMS_EDIT.put("acl", "open");
        ACTION_PARAMS_EDIT.put("line", 0);
        ACTION_PARAMS_EDIT.put("status", "normal");

        // CLOSE
        ACTION_PARAMS_CLOSE.put("comment", null);
    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");

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
        List<String> actionUrlParams = null;
        String returnUrlRegexPrev = "/zentao/product-browse-";

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
        String returnUrlRegexPrev = "/zentao/product-view-";

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
