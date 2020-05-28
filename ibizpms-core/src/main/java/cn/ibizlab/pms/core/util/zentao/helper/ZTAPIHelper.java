package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

public class ZTAPIHelper {
    private final static String MODULE_NAME = "api";

    private final static String FUNC_GETSESSIONID = "getSessionID";
    private final static String FUNC_GETMODEL = "getModel";
    private final static String FUNC_DEBUG = "debug";
    private final static String FUNC_SQL = "sql";

    private final static Map<String, String> FUNC_URL_PARAMS = new HashMap<>();
    private final static Map<String, HttpMethod> FUNC_HTTPMETHOD_TYPE = new HashMap<>();

    static {
        FUNC_HTTPMETHOD_TYPE.put(FUNC_GETSESSIONID, HttpMethod.GET);
    }

    final static public boolean getSessionID(JSONObject rst) {
        // 后期从session获取，前期使用admin
        String account = ZenTaoConstants.ZT_TMP_USERNAME;
        String url = MODULE_NAME + "-" + FUNC_GETSESSIONID + ZenTaoConstants.ZT_URL_EXT;
        rst = ZenTaoHttpHelper.doRequest(account, url, FUNC_HTTPMETHOD_TYPE.get(FUNC_GETSESSIONID), ZenTaoConstants.ZT_ACTION_TYPE_GETSESSION);
        if (!"success".equals(rst.getString("status"))) {
            return false;
        }
        if (!rst.containsKey("data")) {
            return false;
        }
        String dataStr = rst.getString("data");
        if (!dataStr.contains("zentaosid")) {
            return false;
        }
        JSONObject data = JSONObject.parseObject(dataStr);
        return account.equals(data.getString("sessionID"));
    }

}
