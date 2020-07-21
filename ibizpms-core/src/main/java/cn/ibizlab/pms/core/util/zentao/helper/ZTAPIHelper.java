package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.util.zentao.exception.ZenTaoException;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;

/**
 * 【禅道接口-API】 辅助类
 */
@Slf4j
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
     * getSessionID 获取Sesson ID（有ZT后台生成Token）
     *
     * @param rst 准备参数，用于接收API调用结果
     * @return
     */
    public static boolean getSessionID(ZTResult rst) {

        return getSessionID(rst,null);
    }

    /**
     * 设置SessionId。
     * @param rst
     * @param sessionId
     * @return
     */
    public static boolean getSessionID(ZTResult rst, String sessionId) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_GETSESSIONID;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_GETSESSIONID;

        try {
            String url = ZenTaoHttpHelper.formatUrl(moduleName, actionName, urlExt);
            JSONObject rstJO = ZenTaoHttpHelper.doRequest(sessionId, url, actionHttpMethod);
            rst.setResult(rstJO);
            if (!"success".equals(rstJO.getString("status")) || !rstJO.containsKey("data") || !rstJO.getString("data").contains("zentaosid")) {
                rst.setMessage(ZenTaoMessage.MSG_ERROR_0006);
                rst.setSuccess(false);
            } else {
                rst.setSuccess(true);
            }
        } catch (Exception e) {
            String errMsg = e.getMessage() != null ? e.getMessage() : ZenTaoMessage.MSG_ERROR_0001;
            log.error(errMsg, e);
            rst.setSuccess(false);
            rst.setMessage(errMsg);
        }
        if (!rst.isSuccess()) {
            throw new ZenTaoException(rst.getMessage());
        }
        return rst.isSuccess();
    }
}
