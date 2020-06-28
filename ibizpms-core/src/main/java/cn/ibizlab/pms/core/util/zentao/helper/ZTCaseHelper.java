package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-TestCase】 辅助类
 */
final public class ZTCaseHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "testcase";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_INDEX = "";
    private final static String  ACTION_BROWSE = "browse";
    private final static String  ACTION_GROUPCASE = "groupCase";
    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_BATCHCREATE = "batchCreate";
    private final static String  ACTION_CREATEBUG = "createBug";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_BATCHEDIT = "batchEdit";
    private final static String  ACTION_REVIEW = "review";
    private final static String  ACTION_BATCHREVIEW = "batchReview";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_BATCHDELETE = "batchDelete";
    private final static String  ACTION_BATCHCHANGEBRANCH = "batchChangeBranch";
    private final static String  ACTION_BATCHCHANGEMODULE = "batchChangeModule";
    private final static String  ACTION_BATCHCASETYPECHANGE = "batchCaseTypeChange";
    private final static String  ACTION_LINKCASES = "linkCases";
    private final static String  ACTION_CONFIRMCHANGE = "confirmChange";
    private final static String  ACTION_CONFIRMLIBCASECHANGE = "confirmLibcaseChange";
    private final static String  ACTION_IGNORELIBCASECHANGE = "ignoreLibcaseChange";
    private final static String  ACTION_CONFIRMSTORYCHANGE = "confirmStoryChange";
    private final static String  ACTION_BATCHCONFIRMSTORYCHANGE = "batchConfirmStoryChange";
    private final static String  ACTION_EXPORT = "export";
    private final static String  ACTION_EXPORTTEMPLET = "exportTemplet";
    private final static String  ACTION_IMPORT = "import";
    private final static String  ACTION_IMPORTFROMLIB = "importFromLib";
    private final static String  ACTION_SHOWIMPORT = "showImport";
    private final static String  ACTION_BUGS = "bugs";
    private final static String  ACTION_AJAXGETSTORYMODULE = "ajaxGetStoryModule";
    private final static String  ACTION_AJAXGETSTATUS = "ajaxGetStatus";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_INDEX = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BROWSE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_GROUPCASE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CREATEBUG = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_VIEW = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHEDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_REVIEW = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHREVIEW = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_DELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHDELETE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEBRANCH = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCHANGEMODULE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCASETYPECHANGE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_LINKCASES = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CONFIRMCHANGE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CONFIRMLIBCASECHANGE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_IGNORELIBCASECHANGE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_CONFIRMSTORYCHANGE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCONFIRMSTORYCHANGE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EXPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EXPORTTEMPLET = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_IMPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_IMPORTFROMLIB = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_SHOWIMPORT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BUGS = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETSTORYMODULE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_AJAXGETSTATUS = HttpMethod.GET;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_INDEX = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BROWSE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_GROUPCASE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CREATEBUG = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_VIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHEDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_REVIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHREVIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_DELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHDELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEBRANCH = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCHANGEMODULE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCASETYPECHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_LINKCASES = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CONFIRMCHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CONFIRMLIBCASECHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IGNORELIBCASECHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CONFIRMSTORYCHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BATCHCONFIRMSTORYCHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EXPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EXPORTTEMPLET = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IMPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_IMPORTFROMLIB = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_SHOWIMPORT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_BUGS = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETSTORYMODULE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_AJAXGETSTATUS = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_INDEX = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BROWSE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_GROUPCASE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CREATEBUG = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_VIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHEDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_REVIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHREVIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_DELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHDELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEBRANCH = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCHANGEMODULE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCASETYPECHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_LINKCASES = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CONFIRMCHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CONFIRMLIBCASECHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IGNORELIBCASECHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CONFIRMSTORYCHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BATCHCONFIRMSTORYCHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EXPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EXPORTTEMPLET = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IMPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_IMPORTFROMLIB = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_SHOWIMPORT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_BUGS = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETSTORYMODULE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_AJAXGETSTATUS = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("product", null);
        ACTION_PARAMS_CREATE.put("branch", null);
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

        // EDIT
        ACTION_PARAMS_EDIT.put("product", null);
        ACTION_PARAMS_EDIT.put("branch", null);
        ACTION_PARAMS_EDIT.put("module", null);
        ACTION_PARAMS_EDIT.put("type", null);
        ACTION_PARAMS_EDIT.put("story", null);
        ACTION_PARAMS_EDIT.put("status", null);
        ACTION_PARAMS_EDIT.put("title", null);
        ACTION_PARAMS_EDIT.put("color", null);
        ACTION_PARAMS_EDIT.put("pri", 3);
        ACTION_PARAMS_EDIT.put("precondition", null);
        ACTION_PARAMS_EDIT.put("stage[]", null);
        ACTION_PARAMS_EDIT.put("keywords", null);
        ACTION_PARAMS_EDIT.put("steps[]", null);
        ACTION_PARAMS_EDIT.put("stepType[]", null);
        ACTION_PARAMS_EDIT.put("expects[]", null);
        ACTION_PARAMS_EDIT.put("comment", null);
        ACTION_PARAMS_EDIT.put("linkCase[]", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        ACTION_URL_PARAMS_CREATE.add("product");
        ACTION_URL_PARAMS_CREATE.add("branch");
        ACTION_URL_PARAMS_CREATE.add("module");

        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {
        PARAMS_DATEFORMAT.put("scriptedDate", "yyyy-MM-dd");
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
        String returnUrlRegexPrev = null;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
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

    /**
     * runCase 执行测试
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean runCase(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = "testtask";
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = "runCase";
        HttpMethod actionHttpMethod = HttpMethod.POST;
        Map<String, Object> actionParams = new HashMap<>();
        List<String> actionUrlParams = new ArrayList<>();
        String returnUrlRegexPrev = null;

        actionUrlParams.add("id");
        actionUrlParams.add("case");
        actionUrlParams.add("version");

        actionParams.put("case", 0);
        actionParams.put("version", 0);
        JSONArray ja = jo.getJSONArray("srfarray");
        if (ja != null && ja.size() > 0) {
            for (int i = 0; i < ja.size(); i++) {
                JSONObject jaO = ja.getJSONObject(i);
                actionParams.put("steps" + "[" + jaO.getInteger("id") + "]", jaO.get("steps"));
                actionParams.put("reals" + "[" + jaO.getInteger("id") + "]", jaO.get("reals"));
            }
        }

        JSONObject jo2 = new JSONObject();
        jo2.put("id", 0);
        jo2.put("case", jo.get("case"));
        jo2.put("version", jo.get("version"));

        return ZenTaoHttpHelper.doZTRequest(jo2, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev);
    }

}