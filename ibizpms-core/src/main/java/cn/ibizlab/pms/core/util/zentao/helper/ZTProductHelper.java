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

public class ZTProductHelper {
    private final static String MODULE_NAME = "product";

    private final static String  FUNC_INDEX= "index";
    private final static String  FUNC_PROJECT= "project";
    private final static String  FUNC_BROWSE= "browse";
    private final static String  FUNC_CREATE= "create";
    private final static String  FUNC_EDIT= "edit";
    private final static String  FUNC_BATCHEDIT= "batchEdit";
    private final static String  FUNC_CLOSE= "close";
    private final static String  FUNC_VIEW= "view";
    private final static String  FUNC_DELETE= "delete";
    private final static String  FUNC_ROADMAP= "roadmap";
    private final static String  FUNC_DYNAMIC= "dynamic";
    private final static String  FUNC_AJAXGETPROJECTS= "ajaxGetProjects";
    private final static String  FUNC_AJAXGETPLANS= "ajaxGetPlans";
    private final static String  FUNC_AJAXGETDROPMENU= "ajaxGetDropMenu";
    private final static String  FUNC_UPDATEORDER= "updateOrder";
    private final static String  FUNC_SHOWERRORNONE= "showErrorNone";
    private final static String  FUNC_ALL= "all";
    private final static String  FUNC_EXPORT= "export";
    private final static String  FUNC_DOC= "doc";
    private final static String  FUNC_BUILD= "build";

    private final static Map<String, HttpMethod> FUNC_HTTPMETHOD_TYPE = new HashMap<>();
    private final static Map<String, Object> PARAMS_CREATE = new HashMap<>();

    static {
        // http method
        FUNC_HTTPMETHOD_TYPE.put(FUNC_CREATE, HttpMethod.POST);

        // params & default value
        PARAMS_CREATE.put("name", null);
        PARAMS_CREATE.put("code", null);
        PARAMS_CREATE.put("qd", null);
        PARAMS_CREATE.put("rd", null);
        PARAMS_CREATE.put("po", null);
        PARAMS_CREATE.put("type", "normal");
        PARAMS_CREATE.put("acl", "open");
        PARAMS_CREATE.put("line", 0);
        PARAMS_CREATE.put("status", "normal");

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
        String idStr = locate.substring("/zentao/product-browse-".length(), locate.indexOf(".json"));
        rst.setEtId(new BigInteger(idStr));
        return true;
    }

}
