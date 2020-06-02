package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
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

    final static public boolean getSessionID(ZTResult rst) {
        String url = MODULE_NAME + "-" + ACTION_GETSESSIONID + ZenTaoConstants.ZT_URL_EXT;
        JSONObject rstJO = ZenTaoHttpHelper.doRequest(null, url, ACTION_HTTPMETHOD_GETSESSIONID);
        rst.setResult(rstJO);
        if (!"success".equals(rstJO.getString("status"))) {
            rst.setSuccess(false);
            return false;
        }
        if (!rstJO.containsKey("data")) {
            rst.setSuccess(false);
            return false;
        }
        String dataStr = rstJO.getString("data");
        if (!dataStr.contains("zentaosid")) {
            rst.setSuccess(false);
            return false;
        }
        return true;
    }

}
