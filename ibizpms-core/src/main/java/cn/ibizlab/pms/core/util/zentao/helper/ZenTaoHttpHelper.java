package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import cn.ibizlab.pms.util.helper.HttpUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import liquibase.pro.packaged.S;
import liquibase.pro.packaged.U;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 禅道接口辅助类
 */
public class ZenTaoHttpHelper {


    final static public JSONObject doRequest(String zentaoSid, String url, HttpMethod httpMethod){
        return doRequest(zentaoSid, url, httpMethod, null);
    }

    final static JSONObject doRequest(String zentaoSid, String url, HttpMethod httpMethod, JSONObject paramMap){
        if (url == null) {
            return null;
        }
        if (!ZenTaoConstants.ZT_URL.endsWith("/")) {
            ZenTaoConstants.ZT_URL += "/";
        }
        url = ZenTaoConstants.ZT_URL + url;
        if (zentaoSid != null) {
            url += "?zentaosid=" + zentaoSid;
        }
        JSONObject jo = new JSONObject();
        HttpHeaders httpHeaders = HttpUtil.getHttpHeaders(MediaType.MULTIPART_FORM_DATA);
//        HttpHeaders httpHeaders = HttpUtil.getHttpHeaders(MediaType.APPLICATION_FORM_URLENCODED);
        ResponseEntity<String> responseEntity = HttpUtil.doRequest(url, httpMethod, httpHeaders, paramMap, String.class);
        String body = responseEntity.getBody();
        if (body == null || body.isEmpty()) {
            return null;
        }
        if (body.startsWith("<html>")) {
            jo.put("html", body);
        } else {
            jo = JSONObject.parseObject(body);
        }
        return jo;
    }

    final static public JSONObject formatJSON(JSONObject jo, Map<String, Object> templateMap) {
        // 若为空时，default值填充
        JSONObject formatJo = new JSONObject();
        for (String key : templateMap.keySet()) {
            Object value = jo.get(key.toLowerCase()) == null ? jo.get(key.toLowerCase()) : jo.get(key);
            if (value == null) {
                formatJo.put(key, templateMap.get(key));
            } else {
                formatJo.put(key, value);
            }
        }
        return formatJo;
    }

    final static public String formatUrlParams(List<String> urlParams, JSONObject jo) {
        if (jo == null) {
            return "";
        }
        StringBuilder urlParamsStr = new StringBuilder();
        if (urlParams != null && urlParams.size() > 0) {
            for (String key : urlParams) {
                urlParamsStr.append("-");
                if (jo.containsKey(key) && jo.get(key) != null) {
                    urlParamsStr.append(jo.getString(key));
                }
            }
        }
        return urlParamsStr.toString();
    }

    final static public String formatUrl(String moduleName, String actionName, String ext) {
        return formatUrl(moduleName, actionName, ext, null, null);
    }

    final static public String formatUrl(String moduleName, String actionName, String ext, JSONObject jo) {
        return formatUrl(moduleName, actionName, ext, jo, null);
    }

    final static public String formatUrl(String moduleName, String actionName, String ext, JSONObject jo, List<String> urlParams) {
        StringBuilder url = new StringBuilder();
        if (moduleName == null || moduleName.isEmpty() || actionName == null || actionName.isEmpty()) {
            return null;
        }
        url.append(moduleName);
        url.append("-");
        url.append(actionName);
        if (jo != null && urlParams != null && urlParams.size() > 0) {
            url.append(formatUrlParams(urlParams, jo));
        }
        if (ext != null) {
            url.append(ext);
        }
        return url.toString();
    }

    /**
     * 返回结果为JSON<br>
     * {<br>
     *     "result":success/fail,<br>
     *     "message":"xxx",<br>
     *     "locate":"xxx-xxxx-xxxx.json"<br>
     * }<br>
     *
     * @param rstJO
     * @param returnUrlRegexPrev
     * @return
     */
    final static public ZTResult formatResultJSON(JSONObject rstJO, ZTResult rst, String returnUrlRegexPrev) {
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
            return rst;
        }
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("message"));
        String locate = rstJO.getString("locate");
        if (returnUrlRegexPrev != null) {
            String idStr = locate.substring(returnUrlRegexPrev.length(), locate.indexOf(".json"));
            rst.setEtId(new BigInteger(idStr));
        }
        return rst;
    }

    /**
     * 返回结果为JSON（返回JSON无法解析出ID）<br>
     * {<br>
     *     "result":success/fail,<br>
     *     "message":"xxx",<br>
     *     "locate":"xxx-xxxx-xxxx.json"<br>
     * }<br>
     *
     * @param rstJO
     * @return
     */
    final static public ZTResult formatResultJSON(JSONObject rstJO, ZTResult rst) {
        return formatResultJSON(rstJO, rst, null);
    }

  /**
   * 返回结果为JSON<br>
   * {<br>
   *     "result":success/fail,<br>
   *     "html":"xxx",<br>
   * }<br>
   *
   * @param rstJO
   * @param rst
   * @return
   */
  public static final ZTResult formatResultHTML(JSONObject rstJO, ZTResult rst) {
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return rst;
    }

}
