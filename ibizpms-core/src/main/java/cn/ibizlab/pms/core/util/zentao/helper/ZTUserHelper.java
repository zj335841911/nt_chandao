package cn.ibizlab.pms.core.util.zentao.helper;

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
    // 接口实现
    // ----------

    final static public boolean login(JSONObject rst) {
        // 后期从session获取，前期使用admin
        String account = ZenTaoConstants.ZT_TMP_USERNAME;
        String password = ZenTaoConstants.ZT_TMP_PASSWORD;
        if (account == null || account.isEmpty()) {
            return false;
        }
        String url = MODULE_NAME + "-" + ACTION_LOGIN + ZenTaoConstants.ZT_URL_EXT;
        JSONObject jo = new JSONObject();
        jo.put("account", account);
        jo.put("password", password);
        rst = ZenTaoHttpHelper.doRequest(account, url, ACTION_HTTPMETHOD_LOGIN, jo, ZenTaoConstants.ZT_ACTION_TYPE_LOGIN);
        if (!"success".equals(rst.getString("status"))) {
            return false;
        }
        if (!rst.containsKey("user")) {
            return false;
        }
        JSONObject user = rst.getJSONObject("user");
        if (!user.containsKey("account")) {
            return false;
        }
        return account.equals(user.getString("account"));
    }

}
