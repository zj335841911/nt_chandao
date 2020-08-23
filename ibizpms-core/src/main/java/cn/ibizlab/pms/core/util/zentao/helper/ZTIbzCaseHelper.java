package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTCheckItem;
import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ZTIbzCaseHelper {

    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "caselib";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    private final static String  ACTION_CREATE = "createCase";

    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();

    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();

    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATE = new ArrayList<>();

    private final static String ACTION_RETURNURL_CREATE = null;

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("product", 0);
        ACTION_PARAMS_CREATE.put("branch", 0);
        ACTION_PARAMS_CREATE.put("module", null);
        ACTION_PARAMS_CREATE.put("type", null);
        ACTION_PARAMS_CREATE.put("story", null);
        ACTION_PARAMS_CREATE.put("title", null);
        ACTION_PARAMS_CREATE.put("color", null);
        ACTION_PARAMS_CREATE.put("pri", 3);
        ACTION_PARAMS_CREATE.put("precondition", null);
        ACTION_PARAMS_CREATE.put("stage[]", null);
        ACTION_PARAMS_CREATE.put("keywords", null);
        ACTION_PARAMS_CREATE.put("steps[]", null);
        ACTION_PARAMS_CREATE.put("stepType[]", null);
        ACTION_PARAMS_CREATE.put("expects[]", null);
        ACTION_PARAMS_CREATE.put("linkCase", null);
        ACTION_PARAMS_CREATE.put("lib", null);
    }

    static {
        // CREATE
        ACTION_URL_PARAMS_CREATE.add("lib");
        ACTION_URL_PARAMS_CREATE.add("module");
    }

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
        String returnUrlRegexPrev = ACTION_RETURNURL_CREATE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CREATE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
//        String moduleName = MODULE_NAME;
//        String urlExt = ZenTaoConstants.ZT_URL_EXT;
//        String actionName = ACTION_EDIT;
//        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_EDIT;
//        Map<String, Object> actionParams = ACTION_PARAMS_EDIT;
//        List<String> actionUrlParams = ACTION_URL_PARAMS_EDIT;
//        String returnUrlRegexPrev = ACTION_RETURNURL_EDIT;
//        List<ZTCheckItem> checkList = ACTION_CHECKLIST_EDIT;
//
//        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
        return ZTCaseHelper.edit(zentaoSid, jo, rst);
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
//        String moduleName = MODULE_NAME;
//        String urlExt = ZenTaoConstants.ZT_URL_EXT;
//        String actionName = ACTION_DELETE;
//        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_DELETE;
//        Map<String, Object> actionParams = ACTION_PARAMS_DELETE;
//        List<String> actionUrlParams = ACTION_URL_PARAMS_DELETE;
//        String returnUrlRegexPrev = ACTION_RETURNURL_DELETE;
//        List<ZTCheckItem> checkList = ACTION_CHECKLIST_DELETE;
//
//        jo.put("confirm", "yes");
//
//        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
            return ZTCaseHelper.delete(zentaoSid, jo, rst);
    }
}
