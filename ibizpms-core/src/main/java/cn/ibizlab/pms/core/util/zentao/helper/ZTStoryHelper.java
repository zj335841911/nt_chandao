package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.collections4.map.CaseInsensitiveMap;
import org.springframework.http.HttpMethod;

import java.math.BigInteger;
import java.util.*;

/**
 * 【禅道接口-Story】 辅助类
 */
public class ZTStoryHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "story";

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_CREATE = "create";
    private final static String  ACTION_BATCHCREATE = "batchCreate";
    private final static String  ACTION_COMMONACTION = "commonAction";
    private final static String  ACTION_EDIT = "edit";
    private final static String  ACTION_BATCHEDIT = "batchEdit";
    private final static String  ACTION_CHANGE = "change";
    private final static String  ACTION_ACTIVATE = "activate";
    private final static String  ACTION_VIEW = "view";
    private final static String  ACTION_DELETE = "delete";
    private final static String  ACTION_REVIEW = "review";
    private final static String  ACTION_BATCHREVIEW = "batchReview";
    private final static String  ACTION_CLOSE = "close";
    private final static String  ACTION_BATCHCLOSE = "batchClose";
    private final static String  ACTION_BATCHCHANGEMODULE = "batchChangeModule";
    private final static String  ACTION_BATCHCHANGEPLAN = "batchChangePlan";
    private final static String  ACTION_BATCHCHANGEBRANCH = "batchChangeBranch";
    private final static String  ACTION_BATCHCHANGESTAGE = "batchChangeStage";
    private final static String  ACTION_ASSIGNTO = "assignTo";
    private final static String  ACTION_BATCHASSIGNTO = "batchAssignTo";
    private final static String  ACTION_TASKS = "tasks";
    private final static String  ACTION_BUGS = "bugs";
    private final static String  ACTION_CASES = "cases";
    private final static String  ACTION_ZEROCASE = "zeroCase";
    private final static String  ACTION_LINKSTORY = "linkStory";
    private final static String  ACTION_AJAXGETPROJECTSTORIES = "ajaxGetProjectStories";
    private final static String  ACTION_AJAXSEARCHPRODUCTSTORIES = "ajaxSearchProductStories";
    private final static String  ACTION_AJAXGETDETAIL = "ajaxGetDetail";
    private final static String  ACTION_AJAXGETINFO = "ajaxGetInfo";
    private final static String  ACTION_REPORT = "report";
    private final static String  ACTION_EXPORT = "export";
    private final static String  ACTION_AJAXGETUSERSTORYS = "ajaxGetUserStorys";
    private final static String  ACTION_AJAXGETSTATUS = "ajaxGetStatus";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_CREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_BATCHCREATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDIT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CHANGE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_REVIEW = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ACTIVATE = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_ASSIGNTO = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_CLOSE = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_CREATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDIT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CHANGE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_REVIEW = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ACTIVATE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_ASSIGNTO = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_CLOSE = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CHANGE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_REVIEW = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ACTIVATE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_ASSIGNTO = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_CLOSE = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("product", 0);
        ACTION_PARAMS_CREATE.put("branch", 0);
        ACTION_PARAMS_CREATE.put("title", null);
        ACTION_PARAMS_CREATE.put("module", 0);
        ACTION_PARAMS_CREATE.put("plan", null);
        ACTION_PARAMS_CREATE.put("source", null);
        ACTION_PARAMS_CREATE.put("sourceNote", null);
        ACTION_PARAMS_CREATE.put("reviewedBy", null);
        ACTION_PARAMS_CREATE.put("pri", 3);
        ACTION_PARAMS_CREATE.put("estimate", 0);
        ACTION_PARAMS_CREATE.put("spec", null);
        ACTION_PARAMS_CREATE.put("verify", null);
        ACTION_PARAMS_CREATE.put("color", null);
        ACTION_PARAMS_CREATE.put("mailto", null);
        ACTION_PARAMS_CREATE.put("keywords", null);
        ACTION_PARAMS_CREATE.put("type", "story");

        // EDIT
        ACTION_PARAMS_EDIT.put("product", 0);
        ACTION_PARAMS_EDIT.put("branch", 0);
        ACTION_PARAMS_EDIT.put("module", 0);
        ACTION_PARAMS_EDIT.put("plan", null);
        ACTION_PARAMS_EDIT.put("parent", 0);
        ACTION_PARAMS_EDIT.put("status", null);
        ACTION_PARAMS_EDIT.put("source", null);
        ACTION_PARAMS_EDIT.put("sourceNote", null);
        ACTION_PARAMS_EDIT.put("reviewedBy", null);
        ACTION_PARAMS_EDIT.put("pri", 3);
        ACTION_PARAMS_EDIT.put("estimate", 0);
        ACTION_PARAMS_EDIT.put("color", null);
        ACTION_PARAMS_EDIT.put("mailto", null);
        ACTION_PARAMS_EDIT.put("linkstories", null);
        ACTION_PARAMS_EDIT.put("assignedTo", null);
        ACTION_PARAMS_EDIT.put("keywords", null);
        ACTION_PARAMS_EDIT.put("comment", null);

        // CHANGE
        ACTION_PARAMS_CHANGE.put("status", null);
        ACTION_PARAMS_CREATE.put("spec", null);
        ACTION_PARAMS_CREATE.put("verify", null);
        ACTION_PARAMS_CHANGE.put("title", null);
        ACTION_PARAMS_CHANGE.put("assignedTo", null);
        ACTION_PARAMS_CHANGE.put("comment", null);

        // REVIEW
        ACTION_PARAMS_REVIEW.put("result", null);
        ACTION_PARAMS_REVIEW.put("closedReason", null);
        ACTION_PARAMS_REVIEW.put("pri", 3);
        ACTION_PARAMS_REVIEW.put("estimate", 0);
        ACTION_PARAMS_REVIEW.put("comment", null);
        ACTION_PARAMS_REVIEW.put("preVersion", null);
        ACTION_PARAMS_REVIEW.put("assignedTo", null);
        ACTION_PARAMS_REVIEW.put("status", null);
        ACTION_PARAMS_REVIEW.put("reviewedBy", null);

        // ACTIVATE
        ACTION_PARAMS_ACTIVATE.put("comment", null);
        ACTION_PARAMS_ACTIVATE.put("assignedTo", null);
        ACTION_PARAMS_ACTIVATE.put("status", "active");

        // ASSIGNTO
        ACTION_PARAMS_ASSIGNTO.put("comment", null);
        ACTION_PARAMS_ASSIGNTO.put("assignedTo", null);

        // CLOSE
        ACTION_PARAMS_CLOSE.put("comment", null);
        ACTION_PARAMS_CLOSE.put("closedReason", null);
    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");

        // CHANGE
        ACTION_URL_PARAMS_CHANGE.add("id");

        // REVIEW
        ACTION_URL_PARAMS_REVIEW.add("id");

        // ACTIVATE
        ACTION_URL_PARAMS_ACTIVATE.add("id");

        // ASSIGNTO
        ACTION_URL_PARAMS_ASSIGNTO.add("id");

        // CLOSE
        ACTION_URL_PARAMS_CLOSE.add("id");
    }

    // ----------
    // 接口实现
    // ----------

    final static public boolean create(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = MODULE_NAME + "-" + ACTION_CREATE + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CREATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CREATE));
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
        return true;
    }

    final static public boolean edit(String zentaoSid, JSONObject jo, ZTResult rst) {
        String urlParams = "";
        if (ACTION_URL_PARAMS_EDIT != null && ACTION_URL_PARAMS_EDIT.size() > 0) {
            for (String key : ACTION_URL_PARAMS_EDIT) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_EDIT + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_EDIT, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_EDIT));
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return true;
    }

    final static public boolean change(String zentaoSid, JSONObject jo, ZTResult rst) {
        String urlParams = "";
        if (ACTION_URL_PARAMS_CHANGE != null && ACTION_URL_PARAMS_CHANGE.size() > 0) {
            for (String key : ACTION_URL_PARAMS_CHANGE) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_CHANGE + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CHANGE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CHANGE));
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return true;
    }

    final static public boolean review(String zentaoSid, JSONObject jo, ZTResult rst) {
        String urlParams = "";
        if (ACTION_URL_PARAMS_REVIEW != null && ACTION_URL_PARAMS_REVIEW.size() > 0) {
            for (String key : ACTION_URL_PARAMS_REVIEW) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_REVIEW + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_REVIEW, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_REVIEW));
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return true;
    }

    final static public boolean activate(String zentaoSid, JSONObject jo, ZTResult rst) {
        String urlParams = "";
        if (ACTION_URL_PARAMS_ACTIVATE != null && ACTION_URL_PARAMS_ACTIVATE.size() > 0) {
            for (String key : ACTION_URL_PARAMS_ACTIVATE) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_ACTIVATE + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_ACTIVATE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_ACTIVATE));
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return true;
    }

    final static public boolean assignTo(String zentaoSid, JSONObject jo, ZTResult rst) {
        String urlParams = "";
        if (ACTION_URL_PARAMS_ASSIGNTO != null && ACTION_URL_PARAMS_ASSIGNTO.size() > 0) {
            for (String key : ACTION_URL_PARAMS_ASSIGNTO) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_ASSIGNTO + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_ASSIGNTO, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_ASSIGNTO));
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return true;
    }

    final static public boolean close(String zentaoSid, JSONObject jo, ZTResult rst) {
        String urlParams = "";
        if (ACTION_URL_PARAMS_CLOSE != null && ACTION_URL_PARAMS_CLOSE.size() > 0) {
            for (String key : ACTION_URL_PARAMS_CLOSE) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_CLOSE + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_CLOSE, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_CLOSE));
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return true;
    }

    public static void main(String[] args) {
        // change
        JSONObject jo = new JSONObject();
        jo.put("id", 116);
        jo.put("comment", "激活");
        jo.put("assignedto", "admin");

        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = activate("kerbl1bv332tj7c0ebcki4oq97", jo, rst);

//        if (!bRst) {
        System.out.println(rst.getMessage());
//        }
    }

}
