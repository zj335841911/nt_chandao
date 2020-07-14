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
 * 【禅道接口-ProductPlan】 辅助类
 */
@Slf4j
final public class ZTProductPlanHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "productplan";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_COMMONACTION = "commonAction";
    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_BATCHEDIT = "batchEdit";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_BROWSE = "browse";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_AJAXGETPRODUCTPLANS = "ajaxGetProductplans";
    private final static String  ACTION_AJAXSTORYSORT = "ajaxStorySort";
    private final static String  ACTION_LINKSTORY = "linkStory";
    private final static String  ACTION_UNLINKSTORY = "unlinkStory";
    private final static String  ACTION_BATCHUNLINKSTORY = "batchUnlinkStory";
    private final static String  ACTION_LINKBUG = "linkBug";
    private final static String  ACTION_UNLINKBUG = "unlinkBug";
    private final static String  ACTION_BATCHUNLINKBUG = "batchUnlinkBug";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_COMMONACTION = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHEDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETPRODUCTPLANS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXSTORYSORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKSTORY = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKSTORY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKBUG = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_UNLINKBUG = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHUNLINKBUG = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_COMMONACTION = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHEDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETPRODUCTPLANS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXSTORYSORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKSTORY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNLINKBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHUNLINKBUG = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_COMMONACTION = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHEDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETPRODUCTPLANS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXSTORYSORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKSTORY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNLINKBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHUNLINKBUG = new ArrayList<>();

    // ----------
    // 返回结果CheckList
    // ----------
    private final static List<ZTCheckItem> ACTION_CHECKLIST_COMMONACTION = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHEDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_DELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BROWSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_VIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETPRODUCTPLANS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXSTORYSORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_UNLINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHUNLINKSTORY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_UNLINKBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHUNLINKBUG = new ArrayList<>();

    // ----------
    // 返回URL正则
    // ----------
    private final static String ACTION_RETURNURL_COMMONACTION = null;
    private final static String ACTION_RETURNURL_CREATE = null;
    private final static String ACTION_RETURNURL_EDIT = "/zentao/productplan-view-";
    private final static String ACTION_RETURNURL_BATCHEDIT = null;
    private final static String ACTION_RETURNURL_DELETE = null;
    private final static String ACTION_RETURNURL_BROWSE = null;
    private final static String ACTION_RETURNURL_VIEW = null;
    private final static String ACTION_RETURNURL_AJAXGETPRODUCTPLANS = null;
    private final static String ACTION_RETURNURL_AJAXSTORYSORT = null;
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
        ACTION_PARAMS_CREATE.put("branch", 0);
        ACTION_PARAMS_CREATE.put("title", null);
        ACTION_PARAMS_CREATE.put("begin", "0000-00-00");
        ACTION_PARAMS_CREATE.put("end", "0000-00-00");
        ACTION_PARAMS_CREATE.put("desc", null);
        ACTION_PARAMS_CREATE.put("product", 0);
        ACTION_PARAMS_CREATE.put("parent", 0);
        ACTION_PARAMS_CREATE.put("delta", null);
        ACTION_PARAMS_CREATE.put("future", 0);

        // EDIT
        ACTION_PARAMS_EDIT.put("branch", 0);
        ACTION_PARAMS_EDIT.put("title", null);
        ACTION_PARAMS_EDIT.put("begin", "0000-00-00");
        ACTION_PARAMS_EDIT.put("end", "0000-00-00");
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("product", 0);
        ACTION_PARAMS_EDIT.put("parent", 0);
        ACTION_PARAMS_EDIT.put("delta", null);
        ACTION_PARAMS_EDIT.put("future", 0);

        // LINKSTORY
        ACTION_PARAMS_LINKSTORY.put("stories[]", null);

        // BATCHUNLINKSTORY
        ACTION_PARAMS_BATCHUNLINKSTORY.put("storyIdList[]", null);

        // LINKBUG
        ACTION_PARAMS_LINKBUG.put("bugs[]", null);

        // BATCHUNLINKBUG
        ACTION_PARAMS_BATCHUNLINKBUG.put("unlinkBugs[]", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        ACTION_URL_PARAMS_CREATE.add("product");
        ACTION_URL_PARAMS_CREATE.add("branch");
        ACTION_URL_PARAMS_CREATE.add("parent");

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

        // LINKSTORY
        ACTION_URL_PARAMS_LINKSTORY.add("id");

        // BATCHUNLINKSTORY
        ACTION_URL_PARAMS_BATCHUNLINKSTORY.add("id");

        // UNLINKSTORY
        // id为story id
        ACTION_URL_PARAMS_UNLINKSTORY.add("id");
        ACTION_URL_PARAMS_UNLINKSTORY.add("plan");
        ACTION_URL_PARAMS_UNLINKSTORY.add("confirm");

        // LINKBUG
        ACTION_URL_PARAMS_LINKBUG.add("id");

        // BATCHUNLINKBUG
        ACTION_URL_PARAMS_BATCHUNLINKBUG.add("id");

        // UNLINKBUG
        // id为bug id
        ACTION_URL_PARAMS_UNLINKBUG.add("id");
        ACTION_URL_PARAMS_UNLINKBUG.add("confirm");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("begin", "yyyy-MM-dd");
        PARAMS_DATEFORMAT.put("end", "yyyy-MM-dd");
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

    /**
     * linkStory 关联需求
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean linkStory(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_LINKSTORY;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_LINKSTORY;
        Map<String, Object> actionParams = ACTION_PARAMS_LINKSTORY;
        List<String> actionUrlParams = ACTION_URL_PARAMS_LINKSTORY;
        String returnUrlRegexPrev = ACTION_RETURNURL_LINKSTORY;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_LINKSTORY;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * unlinkStory 解除关联需求
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean unlinkStory(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_UNLINKSTORY;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_UNLINKSTORY;
        Map<String, Object> actionParams = ACTION_PARAMS_UNLINKSTORY;
        List<String> actionUrlParams = ACTION_URL_PARAMS_UNLINKSTORY;
        String returnUrlRegexPrev = ACTION_RETURNURL_UNLINKSTORY;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_UNLINKSTORY;

        jo.put("confirm", "yes");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * batchUnlinkStory 批量解除关联需求
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean batchUnlinkStory(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_BATCHUNLINKSTORY;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_BATCHUNLINKSTORY;
        Map<String, Object> actionParams = ACTION_PARAMS_BATCHUNLINKSTORY;
        List<String> actionUrlParams = ACTION_URL_PARAMS_BATCHUNLINKSTORY;
        String returnUrlRegexPrev = ACTION_RETURNURL_BATCHUNLINKSTORY;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_BATCHUNLINKSTORY;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * linkBug 关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean linkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_LINKBUG;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_LINKBUG;
        Map<String, Object> actionParams = ACTION_PARAMS_LINKBUG;
        List<String> actionUrlParams = ACTION_URL_PARAMS_LINKBUG;
        String returnUrlRegexPrev = ACTION_RETURNURL_LINKBUG;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_LINKBUG;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * unlinkBug 解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean unlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_UNLINKBUG;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_UNLINKBUG;
        Map<String, Object> actionParams = ACTION_PARAMS_UNLINKBUG;
        List<String> actionUrlParams = ACTION_URL_PARAMS_UNLINKBUG;
        String returnUrlRegexPrev = ACTION_RETURNURL_UNLINKBUG;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_UNLINKBUG;

        jo.put("confirm", "yes");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * batchUnlinkBug 批量解除关联Bug
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean batchUnlinkBug(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_BATCHUNLINKBUG;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_BATCHUNLINKBUG;
        Map<String, Object> actionParams = ACTION_PARAMS_BATCHUNLINKBUG;
        List<String> actionUrlParams = ACTION_URL_PARAMS_BATCHUNLINKBUG;
        String returnUrlRegexPrev = ACTION_RETURNURL_BATCHUNLINKBUG;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_BATCHUNLINKBUG;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

}
