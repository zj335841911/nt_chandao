package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

public class ZTUserHelper {
    private final static String MODULE_NAME = "user";

    private final static String FUNC_VIEW = "view";
    private final static String FUNC_STORY = "story";
    private final static String FUNC_TASK = "task";
    private final static String FUNC_BUG = "bug";
    private final static String FUNC_TESTTASK = "testtask";
    private final static String FUNC_TESTCASE = "testcase";
    private final static String FUNC_PROJECT = "project";
    private final static String FUNC_PROFILE = "profile";
    private final static String FUNC_SETREFERER = "setReferer";
    private final static String FUNC_CREATE = "create";
    private final static String FUNC_BATCHCREATE = "batchCreate";
    private final static String FUNC_EDIT = "edit";
    private final static String FUNC_BATCHEDIT = "batchEdit";
    private final static String FUNC_DELETE = "delete";
    private final static String FUNC_UNLOCK = "unlock";
    private final static String FUNC_UNBIND = "unbind";
    private final static String FUNC_LOGIN = "login";
    private final static String FUNC_DENY = "deny";
    private final static String FUNC_LOGOUT = "logout";
    private final static String FUNC_RESET = "reset";
    private final static String FUNC_DYNAMIC = "dynamic";
    private final static String FUNC_AJAXGETUSER = "ajaxGetUser";
    private final static String FUNC_AJAXGETCONTACTUSERS = "ajaxGetContactUsers";
    private final static String FUNC_AJAXGETCONTACTLIST = "ajaxGetContactList";
    private final static String FUNC_AJAXPRINTTEMPLATES = "ajaxPrintTemplates";
    private final static String FUNC_AJAXSAVETEMPLATE = "ajaxSaveTemplate";
    private final static String FUNC_AJAXDELETETEMPLATE = "ajaxDeleteTemplate";

    private final static Map<String, String> FUNC_URL_PARAMS = new HashMap<>();
    private final static Map<String, HttpMethod> FUNC_HTTPMETHOD_TYPE = new HashMap<>();

    static {
        FUNC_HTTPMETHOD_TYPE.put(FUNC_LOGIN, HttpMethod.POST);
    }

    final static public boolean login(JSONObject rst) {
        // 后期从session获取，前期使用admin
        String account = ZenTaoConstants.ZT_TMP_USERNAME;
        String password = ZenTaoConstants.ZT_TMP_PASSWORD;
        if (account == null || account.isEmpty()) {
            return false;
        }
        String url = MODULE_NAME + "-" + FUNC_LOGIN + ZenTaoConstants.ZT_URL_EXT;
        JSONObject jo = new JSONObject();
        jo.put("account", account);
        jo.put("password", password);
        rst = ZenTaoHttpHelper.doRequest(account, url, FUNC_HTTPMETHOD_TYPE.get(FUNC_LOGIN), jo, ZenTaoConstants.ZT_ACTION_TYPE_LOGIN);
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
