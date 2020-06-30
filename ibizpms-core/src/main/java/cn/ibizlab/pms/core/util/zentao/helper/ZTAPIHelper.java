package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpMethod;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-API】 辅助类
 */
final public class ZTAPIHelper {
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

    /**
     * getSessionID 获取Sesson ID
     *
     * @param rst
     * @return
     */
    public static boolean getSessionID(ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_GETSESSIONID;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_GETSESSIONID;
        Map<String, Object> actionParams = null;
        List<String> actionUrlParams = null;

        try {
            String url = ZenTaoHttpHelper.formatUrl(moduleName, actionName, urlExt);
            JSONObject rstJO = ZenTaoHttpHelper.doRequest(null, url, actionHttpMethod);
            rst.setResult(rstJO);
            if (!"success".equals(rstJO.getString("status")) || !rstJO.containsKey("data") || !rstJO.getString("data").contains("zentaosid")) {
                rst.setMessage("禅道接口相应结果不正确");
                rst.setSuccess(false);
            } else {
                rst.setSuccess(true);
            }
        } catch (Exception e) {
            // 暂无log时，输出e.printStackTrace();
            e.printStackTrace();
            rst.setSuccess(false);
            rst.setMessage(e.getMessage() != null ? e.getMessage() : "调用禅道接口异常");
        }
        return rst.isSuccess();
    }

}
