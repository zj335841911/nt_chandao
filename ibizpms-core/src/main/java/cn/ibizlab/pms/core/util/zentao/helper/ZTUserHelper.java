package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.util.zentao.exception.ZenTaoException;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-User】 辅助类
 */
@Slf4j
final public class ZTUserHelper {
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

    private final static String ACTION_VIEW = "view";
    private final static String ACTION_STORY = "story";
    private final static String ACTION_TASK = "task";
    private final static String ACTION_BUG = "bug";
    private final static String ACTION_TESTTASK = "testtask";
    private final static String ACTION_TESTCASE = "testcase";
    private final static String ACTION_PROJECT = "project";
    private final static String ACTION_PROFILE = "profile";
    private final static String ACTION_SETREFERER = "setReferer";
    private final static String ACTION_CREATE = "create";
    private final static String ACTION_BATCHCREATE = "batchCreate";
    private final static String ACTION_EDIT = "edit";
    private final static String ACTION_BATCHEDIT = "batchEdit";
    private final static String ACTION_DELETE = "delete";
    private final static String ACTION_UNLOCK = "unlock";
    private final static String ACTION_UNBIND = "unbind";
    private final static String ACTION_LOGIN = "login";
    private final static String ACTION_DENY = "deny";
    private final static String ACTION_LOGOUT = "logout";
    private final static String ACTION_RESET = "reset";
    private final static String ACTION_DYNAMIC = "dynamic";
    private final static String ACTION_AJAXGETUSER = "ajaxGetUser";
    private final static String ACTION_AJAXGETCONTACTUSERS = "ajaxGetContactUsers";
    private final static String ACTION_AJAXGETCONTACTLIST = "ajaxGetContactList";
    private final static String ACTION_AJAXPRINTTEMPLATES = "ajaxPrintTemplates";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_LOGIN = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_LOGIN = new HashMap<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // LOGIN
        ACTION_PARAMS_LOGIN.put("account", null);
        ACTION_PARAMS_LOGIN.put("password", null);

    }

    // ----------
    // 接口实现
    // ----------

    public static boolean login(String zentaosid, JSONObject jo, ZTResult rst) {
        if (jo.getString("account") == null || jo.getString("account").isEmpty()) {
            return false;
        }
        if (jo.getString("password") == null || jo.getString("password").isEmpty()) {
            return false;
        }

        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_LOGIN;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_LOGIN;
        Map<String, Object> actionParams = ACTION_PARAMS_LOGIN;

        try {
            String url = ZenTaoHttpHelper.formatUrl(moduleName, actionName, urlExt);
            JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaosid, url, actionHttpMethod, ZenTaoHttpHelper.formatJSON(jo, actionParams, PARAMS_DATEFORMAT));
            rst.setResult(rstJO);
            if (!"success".equals(rstJO.getString("status"))) {
                rst.setSuccess(false);
                return false;
            }
            if (!rstJO.containsKey("user")) {
                rst.setSuccess(false);
                return false;
            }
            JSONObject user = rstJO.getJSONObject("user");
            if (!user.containsKey("account")) {
                rst.setSuccess(false);
                return false;
            }
            rst.setSuccess(jo.getString("account").equals(user.getString("account")));
        } catch (Exception e) {
            String errMsg = e.getMessage() != null ? e.getMessage() : ZenTaoMessage.MSG_ERROR_0001;
            log.error(errMsg, e);
            rst.setSuccess(false);
            rst.setMessage(errMsg);
        }
        if (!rst.isSuccess()) {
            throw new ZenTaoException(rst.getMessage());
        }
        return rst.isSuccess();
    }

}
