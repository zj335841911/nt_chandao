package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTCheckItem;
import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-Build】 辅助类
 */
@Slf4j
final public class ZTBuildHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "build";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_AJAXGETPRODUCTBUILDS = "ajaxGetProductBuilds";
    private final static String  ACTION_AJAXGETPROJECTBUILDS = "ajaxGetProjectBuilds";
    private final static String  ACTION_LINKSTORY = "linkStory";
    private final static String  ACTION_UNLINKSTORY = "unlinkStory";
    private final static String  ACTION_BATCHUNLINKSTORY = "batchUnlinkStory";
    private final static String  ACTION_LINKBUG = "linkBug";
    private final static String  ACTION_UNLINKBUG = "unlinkBug";
    private final static String  ACTION_BATCHUNLINKBUG = "batchUnlinkBug";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETPRODUCTBUILDS = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETPROJECTBUILDS = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKBUG = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKBUG = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKBUG = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETPRODUCTBUILDS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETPROJECTBUILDS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKBUG = new HashMap<>();


    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETPRODUCTBUILDS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETPROJECTBUILDS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKBUG = new ArrayList<>();

    // ----------
    // 返回结果CheckList
    // ----------
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_VIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_DELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETPRODUCTBUILDS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETPROJECTBUILDS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_UNLINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHUNLINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_UNLINKBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHUNLINKBUG = new ArrayList<>();

    // ----------
    // 返回URL正则
    // ----------
    private final static String ACTION_RETURNURL_CREATE = null;
    private final static String ACTION_RETURNURL_EDIT = null;
    private final static String ACTION_RETURNURL_VIEW = null;
    private final static String ACTION_RETURNURL_DELETE = null;
    private final static String ACTION_RETURNURL_AJAXGETPRODUCTBUILDS = null;
    private final static String ACTION_RETURNURL_AJAXGETPROJECTBUILDS = null;
    private final static String ACTION_RETURNURL_LINKSTORY = null;
    private final static String ACTION_RETURNURL_UNLINKSTORY = null;
    private final static String ACTION_RETURNURL_BATCHUNLINKSTORY = null;
    private final static String ACTION_RETURNURL_LINKBUG = null;
    private final static String ACTION_RETURNURL_UNLINKBUG = null;
    private final static String ACTION_RETURNURL_BATCHUNLINKBUG = null;

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {

        // CREATE
        ACTION_PARAMS_CREATE.put("product", 0);
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("builder", null);
        ACTION_PARAMS_CREATE.put("scmPath", null);
        ACTION_PARAMS_CREATE.put("filePath", null);
        ACTION_PARAMS_CREATE.put("date", "0000-00-00");
        ACTION_PARAMS_CREATE.put("desc", null);

        // EDIT
        ACTION_PARAMS_EDIT.put("product", 0);
        ACTION_PARAMS_EDIT.put("project", 0);
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("builder", null);
        ACTION_PARAMS_EDIT.put("scmPath", null);
        ACTION_PARAMS_EDIT.put("filePath", null);
        ACTION_PARAMS_EDIT.put("date", "0000-00-00");
        ACTION_PARAMS_EDIT.put("desc", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        ACTION_URL_PARAMS_CREATE.add("project");

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("date", "yyyy-MM-dd");
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
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_EDIT;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_EDIT;
        Map<String, Object> actionParams = ACTION_PARAMS_EDIT;
        List<String> actionUrlParams = ACTION_URL_PARAMS_EDIT;
        String returnUrlRegexPrev = ACTION_RETURNURL_EDIT;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_EDIT;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
        String returnUrlRegexPrev = ACTION_RETURNURL_DELETE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_DELETE;

        jo.put("confirm", "yes");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

}
