package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTCheckItem;
import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 【禅道接口-Action】 辅助类
 */
@Slf4j
final public class ZTActionHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "action";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------

    private final static String  ACTION_TRASH = "trash";
    private final static String  ACTION_UNDELETE = "undelete";
    private final static String  ACTION_HIDEONE = "hideOne";
    private final static String  ACTION_HIDEALL = "hideAll";
    private final static String  ACTION_COMMENT = "comment";
    private final static String  ACTION_EDITCOMMENT = "editComment";

    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    private final static HttpMethod ACTION_HTTPMETHOD_TRASH = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_UNDELETE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_HIDEONE = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_HIDEALL = HttpMethod.GET;
    private final static HttpMethod ACTION_HTTPMETHOD_COMMENT = HttpMethod.POST;
    private final static HttpMethod ACTION_HTTPMETHOD_EDITCOMMENT = HttpMethod.POST;

    // ----------
    // 接口行为POST参数
    // ----------

    private final static Map<String, Object> ACTION_PARAMS_TRASH = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_UNDELETE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_HIDEONE = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_HIDEALL = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_COMMENT = new HashMap<>();
    private final static Map<String, Object> ACTION_PARAMS_EDITCOMMENT = new HashMap<>();

    // ----------
    // 接口行为URL参数
    // ----------

    private final static List<String> ACTION_URL_PARAMS_TRASH = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_UNDELETE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_HIDEONE = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_HIDEALL = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_COMMENT = new ArrayList<>();
    private final static List<String> ACTION_URL_PARAMS_EDITCOMMENT = new ArrayList<>();

    // ----------
    // 返回结果CheckList
    // ----------
    private final static List<ZTCheckItem> ACTION_CHECKLIST_TRASH = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_UNDELETE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_HIDEONE = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_HIDEALL = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_COMMENT = new ArrayList<>();
    private final static List<ZTCheckItem> ACTION_CHECKLIST_EDITCOMMENT = new ArrayList<>();

    // ----------
    // 返回URL正则
    // ----------
    private final static String ACTION_RETURNURL_TRASH = null;
    private final static String ACTION_RETURNURL_UNDELETE = null;
    private final static String ACTION_RETURNURL_HIDEONE = null;
    private final static String ACTION_RETURNURL_HIDEALL = null;
    private final static String ACTION_RETURNURL_COMMENT = null;
    private final static String ACTION_RETURNURL_EDITCOMMENT = null;

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {
        // CREATE
        ACTION_PARAMS_EDITCOMMENT.put("lastComment", null);

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {
        // CREATE
        ACTION_URL_PARAMS_EDITCOMMENT.add("id");

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {

    }

    // ----------
    // 接口实现
    // ----------

    /**
     * editComment 编辑备注
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean editComment(String zentaoSid, JSONObject jo, ZTResult rst) {
        // 参数赋值
        String moduleName = MODULE_NAME;
        String urlExt = ZenTaoConstants.ZT_URL_EXT;
        String actionName = ACTION_EDITCOMMENT;
        HttpMethod actionHttpMethod = ACTION_HTTPMETHOD_EDITCOMMENT;
        Map<String, Object> actionParams = ACTION_PARAMS_EDITCOMMENT;
        List<String> actionUrlParams = ACTION_URL_PARAMS_EDITCOMMENT;
        String returnUrlRegexPrev = ACTION_RETURNURL_EDITCOMMENT;
        List<ZTCheckItem> checkList = ACTION_CHECKLIST_EDITCOMMENT;

        return ZenTaoHttpHelper.doZTRequest(jo, rst, zentaoSid, urlExt, actionHttpMethod, moduleName, actionName, actionUrlParams, actionParams, PARAMS_DATEFORMAT, returnUrlRegexPrev, checkList);
    }

}
