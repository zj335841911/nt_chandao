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
 * 【禅道接口-Branch】 辅助类
 */
final public class ZTBranchHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "branch";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_MANAGE = "manage";
    private final static String  ACTION_SORT = "sort";
    private final static String  ACTION_AJAXGETDROPMENU = "ajaxGetDropMenu";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_AJAXGETBRANCHES = "ajaxGetBranches";


    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_MANAGE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_SORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETDROPMENU = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETBRANCHES = HttpMethod.POST;


    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_MANAGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_SORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETDROPMENU = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETBRANCHES = new HashMap<>();


    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_MANAGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_SORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETDROPMENU = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETBRANCHES = new ArrayList<>();


    // ----------
    // 接口行为POST参数设置
    // ----------

    static {

        // SORT
        ACTION_URL_PARAMS_SORT.add("branchs");

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");


    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------


    // ----------
    // 接口实现
    // ----------

    /**
     * sort 排序
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean sort(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_SORT;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_SORT;
        Map<String, Object> actionParams = ACTION_PARAMS_SORT;
        List<String> actionUrlParams = ACTION_URL_PARAMS_SORT;
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

}
