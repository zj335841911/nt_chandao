package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;


/**
 * 【禅道接口-TaskEstimate】 辅助类
 */
@Slf4j
final public class ZTTaskEstimateHelper {
    /**
     * edit 编辑
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean edit(String zentaoSid, JSONObject jo, ZTResult rst) {

        return ZTTaskHelper.editEstimate(zentaoSid,jo,rst);
    }

    /**
     * delete 删除
     *
     * @param zentaoSid
     * @param jo
     * @param rst
     * @return
     */
    public static boolean delete(String zentaoSid, JSONObject jo, ZTResult rst) {

        return ZTTaskHelper.deleteEstimate(zentaoSid,jo,rst);
    }
}
