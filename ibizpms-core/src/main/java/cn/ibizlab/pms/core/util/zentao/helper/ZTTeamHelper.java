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
 * 【禅道接口-Project】 辅助类
 */
@Slf4j
final public class ZTTeamHelper {
    // ----------
    // 接口模块
    // ----------

    /**
     * 接口模块名
     */
    private final static String MODULE_NAME = "project";

    // ----------
    // 参数日期格式
    // ----------

    private final static Map<String, String> PARAMS_DATEFORMAT = new HashMap<>();

    // ----------
    // 接口ACTION
    // ----------


    // ----------
    // 接口行为HTTP方法（GET、POST）
    // ----------

    // ----------
    // 接口行为POST参数
    // ----------

    // ----------
    // 接口行为URL参数
    // ----------

    // ----------
    // 返回结果CheckList
    // ----------

    // ----------
    // 返回URL正则
    // ----------

    // ----------
    // 接口行为POST参数设置
    // ----------

    static {

    }

    // ----------
    // 接口行为URL参数设置
    // ----------

    static {

    }

    // ----------
    // 接口行为POST参数日期格式设置
    // ----------
    static {

    }

    /**
     * managePorjectMembers 项目团队管理
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean managePorjectMembers(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTProjectHelper.manageMembers(zentaoSid, jo, rst);
    }

    /**
     * unlinkPorjectMember 移除项目成员
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean unlinkPorjectMember(String zentaoSid, JSONObject jo, ZTResult rst) {
        return ZTProjectHelper.unlinkMember(zentaoSid, jo, rst);
    }

}
