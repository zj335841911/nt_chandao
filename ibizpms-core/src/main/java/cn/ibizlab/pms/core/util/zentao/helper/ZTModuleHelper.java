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
 * 【禅道接口-Module】 辅助类
 */
final public class ZTModuleHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名，module使用的是tree
     */
    private final static String MODULE_NAME = "tree";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_BROWSE = "browse";
    private final static String  ACTION_BROWSETASK = "browseTask";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_FIX = "fix";
    private final static String  ACTION_UPDATEORDER = "updateOrder";
    private final static String  ACTION_MANAGECHILD = "manageChild";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_AJAXGETOPTIONMENU = "ajaxGetOptionMenu";
    private final static String  ACTION_AJAXGETDROPMENU = "ajaxGetDropMenu";
    private final static String  ACTION_AJAXGETMODULES = "ajaxGetModules";
    private final static String  ACTION_AJAXGETSONMODULES = "ajaxGetSonModules";


    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_BROWSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSETASK = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_FIX = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UPDATEORDER = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_MANAGECHILD = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETOPTIONMENU = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETDROPMENU = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETMODULES = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETSONMODULES = HttpMethod.POST;


    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_BROWSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSETASK = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_FIX = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UPDATEORDER = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_MANAGECHILD = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETOPTIONMENU = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETDROPMENU = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETMODULES = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETSONMODULES = new HashMap<>();


    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_BROWSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSETASK = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_FIX = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UPDATEORDER = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_MANAGECHILD = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETOPTIONMENU = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETDROPMENU = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETMODULES = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETSONMODULES = new ArrayList<>();


    // ----------
    // 接口行为POST参数设置
    // ----------

    static {

        // EDIT
        ACTION_PARAMS_EDIT.put("root", 0);
        ACTION_PARAMS_EDIT.put("parent", 0);
        ACTION_PARAMS_EDIT.put("branch", 0);
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("short", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");
        ACTION_URL_PARAMS_EDIT.add("type");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("root");
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

        // FIX
        ACTION_URL_PARAMS_FIX.add("root");
        ACTION_URL_PARAMS_FIX.add("type");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------

    // ----------
    // 接口实现
    // ----------

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
     * fix 修正路径
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean fix(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_FIX;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_FIX;
        Map<String, Object> actionParams = ACTION_PARAMS_FIX;
        List<String> actionUrlParams = ACTION_URL_PARAMS_FIX;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

}
