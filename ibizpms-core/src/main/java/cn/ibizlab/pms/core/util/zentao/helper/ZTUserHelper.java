package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * 【禅道接口-User】 辅助类
 */
public class ZTUserHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "user";

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
    private final static String ACTION_AJAXSAVETEMPLATE = "ajaxSaveTemplate";
    private final static String ACTION_AJAXDELETETEMPLATE = "ajaxDeleteTemplate";

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

    final static public boolean login(String zentaosid, JSONObject jo, ZTResult rst) {
        if (jo.getString("account") == null || jo.getString("account").isEmpty()) {
            return false;
        }
        if (jo.getString("password") == null || jo.getString("password").isEmpty()) {
            return false;
        }
        String url = MODULE_NAME + "-" + ACTION_LOGIN + ZenTaoConstants.ZT_URL_EXT;

        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaosid, url, ACTION_HTTPMETHOD_LOGIN, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_LOGIN));
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
        boolean bRst = jo.getString("account").equals(user.getString("account"));
        rst.setSuccess(bRst);
        return bRst;
    }

}
