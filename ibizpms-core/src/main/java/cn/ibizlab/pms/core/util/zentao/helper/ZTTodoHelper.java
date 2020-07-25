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

@Slf4j
final public class ZTTodoHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "todo";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String ACTION_CREATE = "create";
    private final static String ACTION_BATCHCREATE = "batchCreate";
    private final static String ACTION_EDIT = "edit";
    private final static String ACTION_BATCHEDIT = "batchEdit";
    private final static String ACTION_ACTIVATE = "activate";
    private final static String ACTION_CLOSE = "close";
    private final static String ACTION_ASSIGNTO = "assignTo";
    private final static String ACTION_VIEW = "view";
    private final static String ACTION_DELETE = "delete";
    private final static String ACTION_FINISH = "finish";
    private final static String ACTION_BATCHFINISH = "batchFinish";
    private final static String ACTION_BATCHCLOSE = "batchClose";
    private final static String ACTION_IMPORT2TODAY = "import2Today";
    private final static String ACTION_EXPORT = "export";
    private final static String ACTION_AJAXGETDETAIL = "ajaxGetDetail";
    private final static String ACTION_CREATECYCLE = "createCycle";


    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHEDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ACTIVATE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_ASSIGNTO = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_FINISH = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHFINISH = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCLOSE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_IMPORT2TODAY = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EXPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETDETAIL = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATECYCLE = HttpMethod.GET;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHEDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ASSIGNTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_FINISH = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHFINISH = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCLOSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IMPORT2TODAY = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EXPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETDETAIL = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATECYCLE = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHEDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ASSIGNTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_FINISH = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHFINISH = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCLOSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IMPORT2TODAY = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EXPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETDETAIL = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATECYCLE = new ArrayList<>();

    // ----------
    // 返回结果CheckList
    // ----------

    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHEDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_ACTIVATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CLOSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_ASSIGNTO = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_VIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_DELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_FINISH = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHFINISH = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCLOSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_IMPORT2TODAY = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EXPORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETDETAIL = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATECYCLE = new ArrayList<>();

    // ----------
    // 返回URL正则
    // ----------

    private final static String ACTION_RETURNURL_CREATE = null;
    private final static String ACTION_RETURNURL_BATCHCREATE = null;
    private final static String ACTION_RETURNURL_EDIT = null;
    private final static String ACTION_RETURNURL_BATCHEDIT = null;
    private final static String ACTION_RETURNURL_ACTIVATE = null;
    private final static String ACTION_RETURNURL_CLOSE = null;
    private final static String ACTION_RETURNURL_ASSIGNTO = null;
    private final static String ACTION_RETURNURL_VIEW = null;
    private final static String ACTION_RETURNURL_DELETE = null;
    private final static String ACTION_RETURNURL_FINISH = null;
    private final static String ACTION_RETURNURL_BATCHFINISH = null;
    private final static String ACTION_RETURNURL_BATCHCLOSE = null;
    private final static String ACTION_RETURNURL_IMPORT2TODAY = null;
    private final static String ACTION_RETURNURL_EXPORT = null;
    private final static String ACTION_RETURNURL_AJAXGETDETAIL = null;
    private final static String ACTION_RETURNURL_CREATECYCLE = null;

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("date", null);
        ACTION_PARAMS_CREATE.put("cycle", null);
        ACTION_PARAMS_CREATE.put("config[day]", null);
        ACTION_PARAMS_CREATE.put("config[week][]", null);
        ACTION_PARAMS_CREATE.put("config[month][]", null);
        ACTION_PARAMS_CREATE.put("config[type]", null);
        ACTION_PARAMS_CREATE.put("config[beforeDays]", null);
        ACTION_PARAMS_CREATE.put("config[end]", null);
        ACTION_PARAMS_CREATE.put("type", null);
        ACTION_PARAMS_CREATE.put("pri", null);
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("desc", null);
        ACTION_PARAMS_CREATE.put("status", null);
        ACTION_PARAMS_CREATE.put("begin", null);
        ACTION_PARAMS_CREATE.put("end", null);
        ACTION_PARAMS_CREATE.put("private", null);

        // EDIT
        ACTION_PARAMS_EDIT.put("date", null);
        ACTION_PARAMS_EDIT.put("type", null);
        ACTION_PARAMS_EDIT.put("pri", null);
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("status", null);
        ACTION_PARAMS_EDIT.put("begin", null);
        ACTION_PARAMS_EDIT.put("end", null);
        ACTION_PARAMS_EDIT.put("private", null);
        ACTION_PARAMS_EDIT.put("config[day]", null);
        ACTION_PARAMS_EDIT.put("config[week][]", null);
        ACTION_PARAMS_EDIT.put("config[month][]", null);
        ACTION_PARAMS_EDIT.put("config[type]", null);
        ACTION_PARAMS_EDIT.put("config[beforeDays]", null);
        ACTION_PARAMS_EDIT.put("config[end]", null);

        // ASSIGNTO
        ACTION_PARAMS_ASSIGNTO.put("assignedTo", null);
        ACTION_PARAMS_ASSIGNTO.put("date", null);
        ACTION_PARAMS_ASSIGNTO.put("begin", null);
        ACTION_PARAMS_ASSIGNTO.put("end", null);
        ACTION_PARAMS_ASSIGNTO.put("future", null);
        ACTION_PARAMS_ASSIGNTO.put("lblDisableDate", null);

        // BATCHCREATE
        ACTION_PARAMS_BATCHCREATE.put("date", null);
        ACTION_PARAMS_BATCHCREATE.put("types[]", null);
        ACTION_PARAMS_BATCHCREATE.put("pris[]", null);
        ACTION_PARAMS_BATCHCREATE.put("names[]", null);
        ACTION_PARAMS_BATCHCREATE.put("descs[]", null);
        ACTION_PARAMS_BATCHCREATE.put("begins[]", null);
        ACTION_PARAMS_BATCHCREATE.put("ends[]", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        //ACTION_URL_PARAMS_CREATE.add("date");
        ACTION_URL_PARAMS_CREATE.add("account");

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // ASSIGNTO
        ACTION_URL_PARAMS_ASSIGNTO.add("id");

        // FINISH
        ACTION_URL_PARAMS_FINISH.add("id");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

        // ACTIVATE
        ACTION_URL_PARAMS_ACTIVATE.add("id");

        // BATCHCREATE
        ACTION_URL_PARAMS_BATCHCREATE.add("date");
        ACTION_URL_PARAMS_BATCHCREATE.add("account");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");
    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("date", "yyyy-MM-dd");
        PARAMS_DATEFORMAT.put("config[end]", "yyyy-MM-dd");
    }

    // ----------
    // 接口实现
    // ----------

    static {

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
     * assignTo 指派
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean assignTo(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_ASSIGNTO;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_ASSIGNTO;
        Map<String, Object> actionParams = ACTION_PARAMS_ASSIGNTO;
        List<String> actionUrlParams = ACTION_URL_PARAMS_ASSIGNTO;
        String returnUrlRegexPrev = ACTION_RETURNURL_ASSIGNTO;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_ASSIGNTO;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * finish
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean finish(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_FINISH;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_FINISH;
        Map<String, Object> actionParams = ACTION_PARAMS_FINISH;
        List<String> actionUrlParams = ACTION_URL_PARAMS_FINISH;
        String returnUrlRegexPrev = ACTION_RETURNURL_FINISH;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_FINISH;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * delete
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
     * activate 激活
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean activate(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_ACTIVATE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_ACTIVATE;
        Map<String, Object> actionParams = ACTION_PARAMS_ACTIVATE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_ACTIVATE;
        String returnUrlRegexPrev = ACTION_RETURNURL_ACTIVATE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_ACTIVATE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * close
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean close(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CLOSE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CLOSE;
        Map<String, Object> actionParams = ACTION_PARAMS_CLOSE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CLOSE;
        String returnUrlRegexPrev = ACTION_RETURNURL_CLOSE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CLOSE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

}
