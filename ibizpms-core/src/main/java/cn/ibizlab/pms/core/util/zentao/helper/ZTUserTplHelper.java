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
 * 【禅道接口-UserTpl】 辅助类
 */
final public class ZTUserTplHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "user";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_AJAXSAVETEMPLATE = "ajaxSaveTemplate";
    private final static String  ACTION_AJAXDELETETEMPLATE = "ajaxDeleteTemplate";


    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_AJAXSAVETEMPLATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXDELETETEMPLATE = HttpMethod.GET;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_AJAXSAVETEMPLATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXDELETETEMPLATE = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_AJAXSAVETEMPLATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXDELETETEMPLATE = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // AJAXSAVETEMPLATE
        ACTION_PARAMS_AJAXSAVETEMPLATE.put("title", null);
        ACTION_PARAMS_AJAXSAVETEMPLATE.put("content", null);
        ACTION_PARAMS_AJAXSAVETEMPLATE.put("public", 0);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // AJAXSAVETEMPLATE
        ACTION_URL_PARAMS_AJAXSAVETEMPLATE.add("type");

        // AJAXDELETETEMPLATE
        ACTION_URL_PARAMS_AJAXDELETETEMPLATE.add("id");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
    }

    // ----------
    // 接口实现
    // ----------

    /**
     * create 新建模板
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
        String actionName = ACTION_AJAXSAVETEMPLATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_AJAXSAVETEMPLATE;
        Map<String, Object> actionParams = ACTION_PARAMS_AJAXSAVETEMPLATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_AJAXSAVETEMPLATE;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

    /**
     * delete 删除模板
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
        String actionName = ACTION_AJAXDELETETEMPLATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_AJAXDELETETEMPLATE;
        Map<String, Object> actionParams = ACTION_PARAMS_AJAXDELETETEMPLATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_AJAXDELETETEMPLATE;
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

}
