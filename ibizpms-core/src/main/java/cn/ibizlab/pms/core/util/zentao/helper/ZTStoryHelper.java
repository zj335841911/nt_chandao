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

public class ZTStoryHelper {
    private final static String MODULE_NAME = "story";

    private final static String  FUNC_CREATE = "create";
    private final static String  FUNC_BATCHCREATE = "batchCreate";
    private final static String  FUNC_COMMONACTION = "commonAction";
    private final static String  FUNC_EDIT = "edit";
    private final static String  FUNC_BATCHEDIT = "batchEdit";
    private final static String  FUNC_CHANGE = "change";
    private final static String  FUNC_ACTIVATE = "activate";
    private final static String  FUNC_VIEW = "view";
    private final static String  FUNC_DELETE = "delete";
    private final static String  FUNC_REVIEW = "review";
    private final static String  FUNC_BATCHREVIEW = "batchReview";
    private final static String  FUNC_CLOSE = "close";
    private final static String  FUNC_BATCHCLOSE = "batchClose";
    private final static String  FUNC_BATCHCHANGEMODULE = "batchChangeModule";
    private final static String  FUNC_BATCHCHANGEPLAN = "batchChangePlan";
    private final static String  FUNC_BATCHCHANGEBRANCH = "batchChangeBranch";
    private final static String  FUNC_BATCHCHANGESTAGE = "batchChangeStage";
    private final static String  FUNC_ASSIGNTO = "assignTo";
    private final static String  FUNC_BATCHASSIGNTO = "batchAssignTo";
    private final static String  FUNC_TASKS = "tasks";
    private final static String  FUNC_BUGS = "bugs";
    private final static String  FUNC_CASES = "cases";
    private final static String  FUNC_ZEROCASE = "zeroCase";
    private final static String  FUNC_LINKSTORY = "linkStory";
    private final static String  FUNC_AJAXGETPROJECTSTORIES = "ajaxGetProjectStories";
    private final static String  FUNC_AJAXSEARCHPRODUCTSTORIES = "ajaxSearchProductStories";
    private final static String  FUNC_AJAXGETDETAIL = "ajaxGetDetail";
    private final static String  FUNC_AJAXGETINFO = "ajaxGetInfo";
    private final static String  FUNC_REPORT = "report";
    private final static String  FUNC_EXPORT = "export";
    private final static String  FUNC_AJAXGETUSERSTORYS = "ajaxGetUserStorys";
    private final static String  FUNC_AJAXGETSTATUS = "ajaxGetStatus";

    private final static Map<String, HttpMethod> FUNC_HTTPMETHOD_TYPE = new HashMap<>();
    private final static Map<String, Object> PARAMS_CREATE = new HashMap<>();

    static {
        // http method
        FUNC_HTTPMETHOD_TYPE.put(FUNC_CREATE, HttpMethod.POST);
        FUNC_HTTPMETHOD_TYPE.put(FUNC_BATCHCREATE, HttpMethod.POST);

        // params & default value
        PARAMS_CREATE.put("product", 0);
        PARAMS_CREATE.put("branch", 0);
        PARAMS_CREATE.put("title", null);
        PARAMS_CREATE.put("module", 0);
        PARAMS_CREATE.put("plan", null);
        PARAMS_CREATE.put("source", null);
        PARAMS_CREATE.put("sourceNote", null);
        PARAMS_CREATE.put("reviewedBy", null);
        PARAMS_CREATE.put("pri", 3);
        PARAMS_CREATE.put("estimate", 0);
        PARAMS_CREATE.put("spec", null);
        PARAMS_CREATE.put("verify", null);
        PARAMS_CREATE.put("color", null);
        PARAMS_CREATE.put("mailto", null);
        PARAMS_CREATE.put("keywords", null);
        PARAMS_CREATE.put("type", "story");

    }

    final static public boolean create(JSONObject jo, ZTResult rst) {
        // 后期从session获取，前期使用admin
        String account = ZenTaoConstants.ZT_TMP_USERNAME;
        String url = MODULE_NAME + "-" + FUNC_CREATE + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = new JSONObject();
        rstJO = ZenTaoHttpHelper.doRequest(account, url, FUNC_HTTPMETHOD_TYPE.get(FUNC_CREATE), ZenTaoHttpHelper.formatJSON(jo, PARAMS_CREATE));
        if ("fail".equals(rstJO.getString("result"))) {
            JSONObject message = rstJO.getJSONObject("message");
            List<String> msgList = new ArrayList<>();
            if (!message.isEmpty()) {
                for (String key : message.keySet()) {
                    JSONArray ja = message.getJSONArray(key);
                    for (int i = 0; i < ja.size(); i++) {
                        msgList.add(ja.getString(i));
                    }
                }
            }
            String msgStr = "创建数据失败。\n";
            if (!msgList.isEmpty()) {
                msgStr += String.join("\n", msgList);
            }
            rst.setSuccess(false);
            rst.setResult(rstJO);
            rst.setMessage(msgStr);
            return false;
        }
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("message"));
        String locate = rstJO.getString("locate");
        return true;
    }

}
