package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpMethod;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-ProductPlan】 辅助类
 */
public class ZTProductPlanHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "productplan";

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

    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_CREATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("branch", 0);
        ACTION_PARAMS_CREATE.put("title", null);
        ACTION_PARAMS_CREATE.put("begin", null);
        ACTION_PARAMS_CREATE.put("end", null);
        ACTION_PARAMS_CREATE.put("desc", null);
        ACTION_PARAMS_CREATE.put("product", 0);
        ACTION_PARAMS_CREATE.put("parent", 0);
        ACTION_PARAMS_CREATE.put("delta", null);
        ACTION_PARAMS_CREATE.put("future", 0);

        // EDIT
        ACTION_PARAMS_EDIT.put("branch", 0);
        ACTION_PARAMS_EDIT.put("title", null);
        ACTION_PARAMS_EDIT.put("begin", null);
        ACTION_PARAMS_EDIT.put("end", null);
        ACTION_PARAMS_EDIT.put("desc", null);
        ACTION_PARAMS_EDIT.put("product", 0);
        ACTION_PARAMS_EDIT.put("parent", 0);
        ACTION_PARAMS_CREATE.put("delta", null);
        ACTION_PARAMS_CREATE.put("future", 0);

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

    }

    // ----------
    // 接口实现
    // ----------

    final static public boolean create(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_CREATE, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_EDIT);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CREATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CREATE));
        rst = ZenTaoHttpHelper.formatResultJSON(rstJO, rst);
        return rst.isSuccess();
    }

    final static public boolean edit(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, ACTION_EDIT, ZenTaoConstants.ZT_URL_EXT, jo, ACTION_URL_PARAMS_EDIT);
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_EDIT, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_EDIT));
        rst = ZenTaoHttpHelper.formatResultJSON(rstJO, rst, "/zentao/productplan-view-");
        return rst.isSuccess();
    }

}
