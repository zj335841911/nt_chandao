package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * 【禅道接口-API】 辅助类
 */
public class ZTAPIHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "api";

    // ----------
    // 接口ACTION
    // ----------

    private final static String ACTION_GETSESSIONID = "getSessionID";
    private final static String ACTION_GETMODEL = "getModel";
    private final static String ACTION_DEBUG = "debug";
    private final static String ACTION_SQL = "sql";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_GETSESSIONID = HttpMethod.GET;

    // ----------
    // 接口实现
    // ----------

    final static public boolean getSessionID(JSONObject rst) {
        // 后期从session获取，前期使用admin
        String account = ZenTaoConstants.ZT_TMP_USERNAME;
        String url = MODULE_NAME + "-" + ACTION_GETSESSIONID + ZenTaoConstants.ZT_URL_EXT;
        rst = ZenTaoHttpHelper.doRequest(account, url, ACTION_HTTPMETHOD_GETSESSIONID, ZenTaoConstants.ZT_ACTION_TYPE_GETSESSION);
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
