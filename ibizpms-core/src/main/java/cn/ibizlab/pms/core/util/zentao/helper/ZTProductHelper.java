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
 * 【禅道接口-Product】 辅助类
 */
public class ZTProductHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "product";

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_INDEX= "index";
    private final static String  ACTION_PROJECT= "project";
    private final static String  ACTION_BROWSE= "browse";
    private final static String  ACTION_CREATE= "create";
    private final static String  ACTION_EDIT= "edit";
    private final static String  ACTION_BATCHEDIT= "batchEdit";
    private final static String  ACTION_CLOSE= "close";
    private final static String  ACTION_VIEW= "view";
    private final static String  ACTION_DELETE= "delete";
    private final static String  ACTION_ROADMAP= "roadmap";
    private final static String  ACTION_DYNAMIC= "dynamic";
    private final static String  ACTION_AJAXGETPROJECTS= "ajaxGetProjects";
    private final static String  ACTION_AJAXGETPLANS= "ajaxGetPlans";
    private final static String  ACTION_AJAXGETDROPMENU= "ajaxGetDropMenu";
    private final static String  ACTION_UPDATEORDER= "updateOrder";
    private final static String  ACTION_SHOWERRORNONE= "showErrorNone";
    private final static String  ACTION_ALL= "all";
    private final static String  ACTION_EXPORT= "export";
    private final static String  ACTION_DOC= "doc";
    private final static String  ACTION_BUILD= "build";

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

    private final static List<String> ACTION_URL_PARAMS_EDIT = new ArrayList<>();

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_CREATE.put("name", null);
        ACTION_PARAMS_CREATE.put("code", null);
        ACTION_PARAMS_CREATE.put("qd", null);
        ACTION_PARAMS_CREATE.put("rd", null);
        ACTION_PARAMS_CREATE.put("po", null);
        ACTION_PARAMS_CREATE.put("type", "normal");
        ACTION_PARAMS_CREATE.put("acl", "open");
        ACTION_PARAMS_CREATE.put("line", 0);
        ACTION_PARAMS_CREATE.put("status", "normal");

        // EDIT
        ACTION_PARAMS_EDIT.put("name", null);
        ACTION_PARAMS_EDIT.put("code", null);
        ACTION_PARAMS_EDIT.put("qd", null);
        ACTION_PARAMS_EDIT.put("rd", null);
        ACTION_PARAMS_EDIT.put("po", null);
        ACTION_PARAMS_EDIT.put("type", "normal");
        ACTION_PARAMS_EDIT.put("acl", "open");
        ACTION_PARAMS_EDIT.put("line", 0);
        ACTION_PARAMS_EDIT.put("status", "normal");
    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // EDIT
        ACTION_URL_PARAMS_EDIT.add("id");
    }

    // ----------
    // 接口实现
    // ----------

    final static public boolean create(String zentaoSid, JSONObject jo, ZTResult rst) {
        String url = MODULE_NAME + "-" + ACTION_CREATE + ZenTaoConstants.ZT_URL_EXT;
        // 注意，后期如果API返回结构都是一样的，再做抽象（当前使用到的参照标本数量不足）
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
        String locate = rstJO.getString("locate");
        String idStr = locate.substring("/zentao/product-browse-".length(), locate.indexOf(".json"));
        rst.setEtId(new BigInteger(idStr));
        return true;
    }

    final static public boolean edit(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 后期从session获取，前期使用admin
        String account = "";
        String urlParams = "";
        if (ACTION_URL_PARAMS_EDIT != null && ACTION_URL_PARAMS_EDIT.size() > 0) {
            for (String key : ACTION_URL_PARAMS_EDIT) {
                urlParams += "-" + jo.get(key);
            }
        }
        String url = MODULE_NAME + "-" + ACTION_EDIT  + urlParams + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = new JSONObject();
        rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, ACTION_HTTPMETHOD_EDIT, ZenTaoHttpHelper.formatJSON(jo, ACTION_PARAMS_EDIT));
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
            String msgStr = "编辑数据失败。\n";
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
        String idStr = locate.substring("/zentao/product-view-".length(), locate.indexOf(".json"));
        rst.setEtId(new BigInteger(idStr));
        return true;
    }

}
