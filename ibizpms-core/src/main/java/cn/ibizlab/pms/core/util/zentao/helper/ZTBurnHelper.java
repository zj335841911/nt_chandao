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
 * 【禅道接口-Burn】 辅助类<br>
 *     注意：该类比较特殊，不作为参照写法（请求后缀为html，并非json）
 */
final public class ZTBurnHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名，burn使用的是project
     */
    private final static String MODULE_NAME = "product";

    /**
     *
     */
    private final static String ZT_URL_EXT = ".html";

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_COMPUTEBURN = "computeBurn";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_COMPUTEBURN = HttpMethod.GET;

    // ----------
    // 接口实现
    // ----------

    /**
     * computeBurn 计算燃尽
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean computeBurn(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZT_URL_EXT;
        String actionName = ACTION_COMPUTEBURN;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_COMPUTEBURN;
        Map<String, Object> actionParams = null;
        List<String> actionUrlParams = null;

        try {
            String url = ZenTaoHttpHelper.formatUrl(MODULE_NAME, actionName, urlExt);
            ZenTaoHttpHelper.doRequest(zentaoSid, url, actionHttpMethod);
            rst.setSuccess(true);
        } catch (Exception e) {
            // 暂无log时，输出e.printStackTrace();
            e.printStackTrace();
            rst.setSuccess(false);
            rst.setMessage(e.getMessage() != null ? e.getMessage() : "调用禅道接口异常");
        }
        return rst.isSuccess();
    }
}
