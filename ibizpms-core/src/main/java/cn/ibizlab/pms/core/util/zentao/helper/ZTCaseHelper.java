package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTCheckItem;
import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-TestCase】 辅助类
 */
@Slf4j
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
    private final static String  ACTION_RUNCASE = "runCase";

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
    // 返回结果CheckList
    // ----------
    private final static List<ZTCheckItem> ACTION_CHECKLIST_INDEX = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BROWSE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_GROUPCASE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCREATE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CREATEBUG = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_VIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHEDIT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_REVIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHREVIEW = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_DELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHDELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCHANGEBRANCH = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCHANGEMODULE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCASETYPECHANGE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_LINKCASES = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CONFIRMCHANGE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CONFIRMLIBCASECHANGE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_IGNORELIBCASECHANGE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_CONFIRMSTORYCHANGE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BATCHCONFIRMSTORYCHANGE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EXPORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EXPORTTEMPLET = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_IMPORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_IMPORTFROMLIB = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_SHOWIMPORT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_BUGS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETSTORYMODULE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_AJAXGETSTATUS = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_ = new ArrayList<>();

    // ----------
    // 返回URL正则
    // ----------
    private final static String ACTION_RETURNURL_INDEX = null;
    private final static String ACTION_RETURNURL_BROWSE = null;
    private final static String ACTION_RETURNURL_GROUPCASE = null;
    private final static String ACTION_RETURNURL_CREATE = null;
    private final static String ACTION_RETURNURL_BATCHCREATE = null;
    private final static String ACTION_RETURNURL_CREATEBUG = null;
    private final static String ACTION_RETURNURL_VIEW = null;
    private final static String ACTION_RETURNURL_EDIT = null;
    private final static String ACTION_RETURNURL_BATCHEDIT = null;
    private final static String ACTION_RETURNURL_REVIEW = null;
    private final static String ACTION_RETURNURL_BATCHREVIEW = null;
    private final static String ACTION_RETURNURL_DELETE = null;
    private final static String ACTION_RETURNURL_BATCHDELETE = null;
    private final static String ACTION_RETURNURL_BATCHCHANGEBRANCH = null;
    private final static String ACTION_RETURNURL_BATCHCHANGEMODULE = null;
    private final static String ACTION_RETURNURL_BATCHCASETYPECHANGE = null;
    private final static String ACTION_RETURNURL_LINKCASES = null;
    private final static String ACTION_RETURNURL_CONFIRMCHANGE = null;
    private final static String ACTION_RETURNURL_CONFIRMLIBCASECHANGE = null;
    private final static String ACTION_RETURNURL_IGNORELIBCASECHANGE = null;
    private final static String ACTION_RETURNURL_CONFIRMSTORYCHANGE = null;
    private final static String ACTION_RETURNURL_BATCHCONFIRMSTORYCHANGE = null;
    private final static String ACTION_RETURNURL_EXPORT = null;
    private final static String ACTION_RETURNURL_EXPORTTEMPLET = null;
    private final static String ACTION_RETURNURL_IMPORT = null;
    private final static String ACTION_RETURNURL_IMPORTFROMLIB = null;
    private final static String ACTION_RETURNURL_SHOWIMPORT = null;
    private final static String ACTION_RETURNURL_BUGS = null;
    private final static String ACTION_RETURNURL_AJAXGETSTORYMODULE = null;
    private final static String ACTION_RETURNURL_AJAXGETSTATUS = null;
    private final static String ACTION_RETURNURL_ = null;

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
        ACTION_PARAMS_EDIT.put("lib", null);

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

        // CONFIRMCHANGE
        ACTION_URL_PARAMS_CONFIRMCHANGE.add("id");
        ACTION_URL_PARAMS_CONFIRMCHANGE.add("task");
        ACTION_URL_PARAMS_CONFIRMCHANGE.add("confirm");

        // CONFIRMSTORYCHANGE
        ACTION_URL_PARAMS_CONFIRMSTORYCHANGE.add("id");

        // DELETE
        ACTION_URL_PARAMS_DELETE.add("id");
        ACTION_URL_PARAMS_DELETE.add("confirm");

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
     * confirmChange 确认用例变更
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean confirmChange(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CONFIRMCHANGE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CONFIRMCHANGE;
        Map<String, Object> actionParams = ACTION_PARAMS_CONFIRMCHANGE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CONFIRMCHANGE;
        String returnUrlRegexPrev = ACTION_RETURNURL_CONFIRMCHANGE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CONFIRMCHANGE;

        jo.put("confirm", "list");

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

    /**
     * confirmstorychange 确认需求变更
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean confirmstorychange(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_CONFIRMSTORYCHANGE;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_CONFIRMSTORYCHANGE;
        Map<String, Object> actionParams = ACTION_PARAMS_CONFIRMSTORYCHANGE;
        List<String> actionUrlParams = ACTION_URL_PARAMS_CONFIRMSTORYCHANGE;
        String returnUrlRegexPrev = ACTION_RETURNURL_CONFIRMSTORYCHANGE;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_CONFIRMSTORYCHANGE;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
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
     * runCase 执行测试
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean runCase(String zentaoSid, JSONObject jo, ZTResult rst) {


        return ZTTestTaskHelper.runCase(zentaoSid, jo, rst);
    }

    /**
     * runCase 执行测试
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean testRunCase(String zentaoSid, JSONObject jo, ZTResult rst) {


        return ZTTestTaskHelper.testRunCase(zentaoSid, jo, rst);
    }

    /**
     * unlinkCase 移除用例关联
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean unlinkCase(String zentaoSid, JSONObject jo, ZTResult rst) {


        return ZTTestTaskHelper.unlinkCase(zentaoSid, jo, rst);
    }

    /**
     * unlinkCase 移除用例关联
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean unlinkSuiteCase(String zentaoSid, JSONObject jo, ZTResult rst) {


        return ZTTestSuiteHelper.unlinkCase(zentaoSid, jo, rst);
    }

    /**
     * linkCase 用例关联
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean linkCase(String zentaoSid, JSONObject jo, ZTResult rst) {


        return ZTTestTaskHelper.linkCase(zentaoSid, jo, rst);
    }

    /**
     * linkCase 用例关联
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean testsuitelinkCase(String zentaoSid, JSONObject jo, ZTResult rst) {


        return ZTTestSuiteHelper.linkCase(zentaoSid, jo, rst);
    }

}
