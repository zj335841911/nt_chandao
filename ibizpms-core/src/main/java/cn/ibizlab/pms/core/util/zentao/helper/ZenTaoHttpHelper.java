package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import cn.ibizlab.pms.util.helper.HttpUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 禅道接口辅助类
 */
public class ZenTaoHttpHelper {
    /**
     * 调取禅道接口
     *
     * @param jo 请求对象
     * @param rst 请求结果
     * @param zentaoSid 禅道SessionID
     * @param urlExt 请求URL扩展名（.json、.html）
     * @param httpMethod 请求方法（GET、POST)
     * @param moduleName 模块名
     * @param actionName 行为名
     * @param urlParams URL参数
     * @param actionParams 表单参数
     * @param dataFormatMap 属性日期格式表
     * @param returnUrlRegexPrev 相应URL匹配前缀（例如：/zentao/product-view-）
     * @return true：成功，false：失败
     */
    public static boolean doZTRequest(JSONObject jo,
                                            ZTResult rst,
                                            String zentaoSid,
                                            String urlExt,
                                            HttpMethod httpMethod,
                                            String moduleName,
                                            String actionName,
                                            List<String> urlParams,
                                            Map<String, Object> actionParams,
                                            Map<String, String> dataFormatMap,
                                            String returnUrlRegexPrev
                                            ) {
        try {
            String url = ZenTaoHttpHelper.formatUrl(moduleName, actionName, urlExt, jo, urlParams);
            JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, httpMethod, formatJSON(jo, actionParams, dataFormatMap));
            rst = ZenTaoHttpHelper.formatResult(rstJO, rst, returnUrlRegexPrev);
        } catch (Exception e) {
            // 暂无log时，输出e.printStackTrace();
            e.printStackTrace();
            rst.setSuccess(false);
            rst.setMessage(e.getMessage() != null ? e.getMessage() : "调用禅道接口异常");
        }
        return rst.isSuccess();
    }

    public static JSONObject doRequest(String zentaoSid, String url, HttpMethod httpMethod) throws Exception {
        return doRequest(zentaoSid, url, httpMethod, null);
    }

    public static JSONObject doRequest(String zentaoSid, String url, HttpMethod httpMethod, JSONObject paramMap) throws Exception {
        if (url == null) {
            throw new Exception("没有请求地址");
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

    public static JSONObject formatJSON(JSONObject jo, Map<String, Object> templateMap, Map<String, String> dataFormatMap) throws Exception {
        if (templateMap == null) {
            return null;
        }
        // 日期格式转换
        jo = formatDateField(jo, dataFormatMap);
        // 数组解析
        jo = formatArrayIntoPJSON(jo);
        // 若为空时，default值填充
        JSONObject formatJo = new JSONObject();
        for (String key : templateMap.keySet()) {
            Object value = null;
            if (jo.containsKey(key) || jo.containsKey(key.toLowerCase())) {
                value = jo.get(key.toLowerCase()) != null ? jo.get(key.toLowerCase()) : jo.get(key);
            } else {
                // 数组字段（参数带[]模式。非[]模式，则走普通处理）
                if (key.endsWith("[]")) {
                    String tmpKey = key.substring(0, key.length() - 2);
                    if (jo.containsKey(tmpKey) || jo.containsKey(tmpKey.toLowerCase())) {
                        value = jo.get(tmpKey.toLowerCase()) != null ? jo.get(tmpKey.toLowerCase()) : jo.get(tmpKey);
                    }
                }
            }

            if (value == null) {
                formatJo.put(key, templateMap.get(key));
            } else {
                formatJo.put(key, value);
            }
        }
        return formatJo;
    }

    /**
     * 解析JSON中对象数组中对象属性至该JSON下<br>
     *     解析对象为JSON中 srfarray<1、2、3、4...> 属性(srfarray必须命名为该命名，各个srfarray中对象属性必须唯一)<br>
     *     解析前源JSON：
     *     {<br>
     *         pfield1 : xxx,<br>
     *         pfield2 : xxx,<br>
     *         pfield3 : [xxx,xxx,xxx],<br>
     *         srfarray : <br>
     *         [<br>
     *              {<br>
     *                 field1: xxx,<br>
     *                  field2: xxx<br>
     *              }.<br>
     *              {<br>
     *                  field1: xxx,<br>
     *                  field2: xxx<br>
     *              }<br>
     *         ],
     *         srfarray1 :
     *         [<br>
     *              {<br>
     *                 field3 : xxx,<br>
     *                  field4 : xxx<br>
     *              }.<br>
     *              {<br>
     *                  field3 : xxx,<br>
     *                  field4 : xxx<br>
     *              }<br>
     *         ],
     *         srfarray2 :
     *         [<br>
     *              {<br>
     *                 field5 : xxx,<br>
     *                  field6 : xxx<br>
     *              }.<br>
     *              {<br>
     *                  field5 : xxx,<br>
     *                  field6 : xxx<br>
     *              }<br>
     *         ]
     *     }
     *     解析后目标JSON：
     *     {<br>
     *         pfield1 : xxx,<br>
     *         pfield2 : xxx,<br>
     *         pfield3 : [xxx,xxx,xxx],<br>
     *         field1 : [xxx,xxx],<br>
     *         field2 : [xxx,xxx],<br>
     *         field3 : [xxx,xxx],<br>
     *         field4 : [xxx,xxx],<br>
     *         field5 : [xxx,xxx],<br>
     *         field6 : [xxx,xxx]<br>
     *     }
     *
     * @param jo
     * @return
     */
    public static JSONObject formatArrayIntoPJSON(JSONObject jo) {
        if (jo == null) {
            return null;
        }

        final String[] parseWordArr = {"srfarray"};

        List<JSONArray> jaList = new ArrayList<>();
        for (String key : jo.keySet()) {
            for (String parseWord : parseWordArr) {
                String regex = "^" + parseWord + "\\d*$";
                if (key.toLowerCase().matches(regex) && jo.getString(key) != null) {
                    jaList.add(JSONArray.parseArray(jo.getString(key)));
                }
            }
        }
        JSONObject arrayJson = new JSONObject();
        for (JSONArray ja : jaList) {
            if (ja == null || ja.size() == 0) {
                continue;
            }
            for (int i = 0; i < ja.size(); i++) {
                JSONObject jaO = ja.getJSONObject(i);
                if (jaO == null || jaO.isEmpty()) {
                    continue;
                }
                for (String key : jaO.keySet()) {
                    List list = new ArrayList();
                    if (arrayJson.containsKey(key)) {
                        list = arrayJson.getJSONArray(key);
                    }
                    list.add(jaO.get(key));
                    arrayJson.put(key, list);
                }
            }
        }
        if (!arrayJson.isEmpty()) {
            jo.putAll(arrayJson);
        }
        return jo;
    }

    /**
     * 格式化日期
     *
     * @param jo
     * @return
     */
    public static JSONObject formatDateField(JSONObject jo, Map<String, String> dataFormatMap) throws Exception {
        if (jo == null) {
            return null;
        }
        if (dataFormatMap == null || dataFormatMap.isEmpty()) {
            return jo;
        }
        for (String key : dataFormatMap.keySet()) {
            if (jo.containsKey(key) && jo.get(key) != null) {
                SimpleDateFormat sdf = new SimpleDateFormat(dataFormatMap.get(key));
                jo.put(key, sdf.format(new Timestamp(sdf.parse(jo.getString(key)).getTime())));
            }
        }
        return jo;
    }

    public static String formatUrlParams(List<String> urlParams, JSONObject jo) {
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

    public static String formatUrl(String moduleName, String actionName, String ext) {
        return formatUrl(moduleName, actionName, ext, null, null);
    }

    public static String formatUrl(String moduleName, String actionName, String ext, JSONObject jo) {
        return formatUrl(moduleName, actionName, ext, jo, null);
    }

    public static String formatUrl(String moduleName, String actionName, String ext, JSONObject jo, List<String> urlParams) {
        StringBuilder url = new StringBuilder();
        if (moduleName == null || moduleName.isEmpty() || actionName == null || actionName.isEmpty()) {
            return null;
        }
        url.append(moduleName);
        if (actionName != null && !actionName.trim().isEmpty()) {
            url.append("-");
            url.append(actionName);
            if (jo != null && urlParams != null && urlParams.size() > 0) {
                url.append(formatUrlParams(urlParams, jo));
            }
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
    public static ZTResult formatResultJSON(JSONObject rstJO, ZTResult rst, String returnUrlRegexPrev) {
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
     * 解析返回结果<br>
     *
     * @param rstJO
     * @return
     */
    public static ZTResult formatResult(JSONObject rstJO, ZTResult rst, String returnUrlRegexPrev) {
        if (rstJO.containsKey("html")) {
            return formatResultHTML(rstJO, rst);
        }
        return formatResultJSON(rstJO, rst, returnUrlRegexPrev);
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
    public static ZTResult formatResultJSON(JSONObject rstJO, ZTResult rst) {
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
  public static ZTResult formatResultHTML(JSONObject rstJO, ZTResult rst) {
        rst.setSuccess(true);
        rst.setResult(rstJO);
        rst.setMessage(rstJO.getString("html"));
        return rst;
    }

}
