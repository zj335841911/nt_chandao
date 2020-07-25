package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTCheckItem;
import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.util.zentao.exception.ZenTaoException;
import cn.ibizlab.pms.util.helper.HttpUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 禅道接口辅助类
 */
@Slf4j
public class ZenTaoHttpHelper {
    private static Comparator<Double> COMPARATOR_DOUBLE = new Comparator<Double>() {
        @Override
        public int compare(Double o1, Double o2) {
            if (o1 == null && o2 == null) {
                return 0;
            }
            if (o1 == null && o2 != null) {
                return -1;
            }
            if (o1 != null && o2 == null) {
                return 1;
            }
            return o1.compareTo(o2);
        }
    };

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
     * @param checkList 结果检查列表
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
                                      String returnUrlRegexPrev,
                                      List<ZTCheckItem> checkList
    ) {
        try {
            // 本地抓包请打开注释
//            System.setProperty("http.proxyHost", "127.0.0.1");
//            System.setProperty("https.proxyHost", "127.0.0.1");
//            System.setProperty("http.proxyPort", "8888");
//            System.setProperty("https.proxyPort", "8888");
            String url = ZenTaoHttpHelper.formatUrl(moduleName, actionName, urlExt, jo, urlParams);
            JSONObject rstJO = ZenTaoHttpHelper.doRequest(zentaoSid, url, httpMethod, formatJSON(jo, actionParams, dataFormatMap));
            rst = ZenTaoHttpHelper.formatResult(rstJO, rst, returnUrlRegexPrev, checkList);
        } catch (Exception e) {
            String errMsg = e.getMessage();
            if (errMsg == null || errMsg.isEmpty()) {
                errMsg = ZenTaoMessage.MSG_ERROR_0001;
            }
            log.error(errMsg);
            rst.setSuccess(false);
            rst.setMessage(errMsg);
        }
        if (!rst.isSuccess()) {
            throw new ZenTaoException(rst.getMessage());
        }
        return rst.isSuccess();
    }

    public static JSONObject doRequest(String zentaoSid, String url, HttpMethod httpMethod) throws Exception {
        return doRequest(zentaoSid, url, httpMethod, null);
    }

    public static JSONObject doRequest(String zentaoSid, String url, HttpMethod httpMethod, JSONObject paramMap) throws Exception {
        if (url == null) {
            log.error(ZenTaoMessage.MSG_ERROR_0002);
            throw new Exception(ZenTaoMessage.MSG_ERROR_0002);
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
        log.debug(ZenTaoMessage.MSG_INFO_0001, url, httpMethod, paramMap);
        ResponseEntity<String> responseEntity = HttpUtil.doRequest(url, httpMethod, httpHeaders, paramMap, String.class);
        String body = responseEntity.getBody();
        log.debug(ZenTaoMessage.MSG_INFO_0002, body);
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
        jo = formatArrayIntoPJSON(jo, jo, 0d, 0);
        // 若为空时，default值填充
        JSONObject formatJo = new JSONObject(new LinkedHashMap<>());
        for (String key : templateMap.keySet()) {
            Object value = null;
            String arrKey = null;
            if (jo.containsKey(key) || jo.containsKey(key.toLowerCase())) {
                value = jo.get(key.toLowerCase()) != null ? jo.get(key.toLowerCase()) : jo.get(key);
            } else {
                // 数组字段（参数带[]模式。非[]模式，则走普通处理）
                if (key.endsWith("[]")) {
                    String tmpKey = key.substring(0, key.length() - 2);
                    if (jo.containsKey(tmpKey) || jo.containsKey(tmpKey.toLowerCase())) {
                        Object tmpValue = jo.get(tmpKey.toLowerCase()) != null ? jo.get(tmpKey.toLowerCase()) : jo.get(tmpKey);
                        if (tmpValue instanceof String && tmpValue != null && ((String) tmpValue).contains(",")) {
                            String[] array = ((String) tmpValue).split(",", -1);
                            if (array.length > 0) {
                                Map<Double, String> map = new HashMap<>();
                                for (int ai = 0; ai < array.length; ai++) {
                                    map.put(Double.valueOf(ai), array[ai]);
                                }
                                value = map;
                            } else {
                                value = tmpValue;
                            }
                        } else {
                            value = tmpValue;
                        }
                    }
                }
            }

            if (value == null) {
                formatJo.put(key, templateMap.get(key));
            } else {
                if (key.endsWith("[]")) {
                    if (value instanceof Map) {
                        String tmpKey = key.substring(0, key.length() - 2);
                        Map<Double, Object> map = (Map<Double, Object>) value;
                        Set<Double> set = map.keySet();
                        if (set != null) {
                            List<Double> listKeys = new ArrayList<>(set);
                            listKeys.sort(COMPARATOR_DOUBLE);
                            for (Double dKey : listKeys) {
                                Object tmpValue = map.get(dKey);
                                if (tmpValue != null && tmpValue instanceof String) {
                                    tmpValue = formatRichText((String) tmpValue);
                                }
                                if (dKey.intValue() == dKey) {
                                    formatJo.put(tmpKey + "[" + dKey.intValue() + "]", tmpValue);
                                } else {
                                    formatJo.put(tmpKey + "[" + dKey + "]", tmpValue);
                                }
                            }
                        }
                    } else {
                        if (value != null && value instanceof String) {
                            value = formatRichText((String) value);
                        }
                        formatJo.put(key, value);
                    }
                } else {
                    if (value != null && value instanceof String) {
                        value = formatRichText((String) value);
                    }
                    formatJo.put(key, value);
                }
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
     *              },<br>
     *              {<br>
     *                  field1: xxx,<br>
     *                  field2: xxx<br>
     *              }<br>
     *         ],
     *         srfarray1 :<br>
     *         [<br>
     *              {<br>
     *                 field3 : xxx,<br>
     *                  field4 : xxx<br>
     *              },<br>
     *              {<br>
     *                  field3 : xxx,<br>
     *                  field4 : xxx<br>
     *              }<br>
     *         ],
     *         srfarray2 :<br>
     *         [<br>
     *              {<br>
     *                 field5 : xxx,<br>
     *                  field6 : xxx<br>
     *              },<br>
     *              {<br>
     *                  field5 : xxx,<br>
     *                  field6 : xxx<br>
     *              },<br>
     *              {<br>
     *                  field5 : xxx,<br>
     *                  field6 : xxx,<br>
     *                  srfarray3 :<br>
     *                  [<br>
     *                      {<br>
     *                          field5 : xxx,<br>
     *                          filed6 : xxx<br>
     *                      },<br>
     *                      {<br>
     *                          field5 : xxx,<br>
     *                          filed6 : xxx<br>
     *                      }<br>
     *                  ]<br>
     *              },<<br>
     *              {<br>
     *                  srfarray4 :<br>
     *                  [<br>
     *                      {<br>
     *                          field5 : xxx,<br>
     *                          filed6 : xxx<br>
     *                      },<br>
     *                      {<br>
     *                          field5 : xxx,<br>
     *                          filed6 : xxx<br>
     *                      }<br>
     *                  ]<br>
     *              }<<br>
     *         ]
     *     }
     *     解析后目标JSON：
     *     {<br>
     *         pfield1 : xxx,<br>
     *         pfield2 : xxx,<br>
     *         pfield3 : [xxx,xxx,xxx],<br>
     *         field1 :<br>
     *         {<br>
     *             1 : xxx,<br>
     *             2 : xxx<br>
     *         }<br>
     *         field2 :<br>
     *         {<br>
     *             1 : xxx,<br>
     *             2 : xxx<br>
     *         }<br>
     *         field3 :<br>
     *         {<br>
     *             1 : xxx,<br>
     *             2 : xxx<br>
     *         }<br>
     *         field4 :<br>
     *         {<br>
     *             1 : xxx,<br>
     *             2 : xxx<br>
     *         }<br>
     *         field5 :<br>
     *         {<br>
     *             1 : xxx,<br>
     *             2 : xxx,<br>
     *             3 : xxx,<br>
     *             3 : xxx,<br>
     *             3.1 : xxx,<br>
     *             3.2 : xxx,<br>
     *             4.1 : xxx,<br>
     *             4.2 : xxx<br>
     *         }<br>
     *         field6 :<br>
     *         {<br>
     *             1 : xxx,<br>
     *             2 : xxx,<br>
     *             3 : xxx,<br>
     *             3 : xxx,<br>
     *             3.1 : xxx,<br>
     *             3.2 : xxx,<br>
     *             4.1 : xxx,<br>
     *             4.2 : xxx<br>
     *         }<br>
     *     }
     *
     * @param jo 需要解析的对象
     * @param targetJo 解析后录入的对象
     * @param pKey 父游标值
     * @param level 层级
     * @return
     */
    public static JSONObject formatArrayIntoPJSON(JSONObject jo, JSONObject targetJo, Double pKey, Integer level) {
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
        for (JSONArray ja : jaList) {
            if (ja == null || ja.size() == 0) {
                continue;
            }
            for (int i = 0; i < ja.size(); i++) {
                JSONObject jaO = ja.getJSONObject(i);
                if (jaO == null || jaO.isEmpty()) {
                    continue;
                }
                Double myKey = new Double(i + 1);
                for (int j = 0; j < level; j++) {
                    myKey = myKey / 10;
                }
                Double dKey = pKey + myKey;
                targetJo = formatArrayIntoPJSON(jaO, targetJo, dKey,level + 1);
                for (String key : jaO.keySet()) {
                    Map<Double, Object> map = new HashMap<>();
                    if (targetJo.containsKey(key + "[]")) {
                        map = targetJo.getObject(key + "[]", Map.class);
                    }
                    map.put(dKey, jaO.get(key));
                    targetJo.put(key + "[]", map);
                }
            }
        }
        return targetJo;
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
            String joKey = null;
            if (jo.containsKey(key)) {
                joKey = key;
            } else if (jo.containsKey(key.toLowerCase())) {
                joKey = key.toLowerCase();
            }
            if (joKey == null) {
                continue;
            }
            if (jo.get(joKey) != null) {
                SimpleDateFormat sdf = new SimpleDateFormat(dataFormatMap.get(key));
                jo.put(joKey, sdf.format(new Timestamp(sdf.parse(jo.getString(joKey)).getTime())));
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
                String joKey = null;
                if (jo.containsKey(key)) {
                    joKey = key;
                } else if (jo.containsKey(key.toLowerCase())) {
                    joKey = key.toLowerCase();
                }
                if (joKey == null) {
                    continue;
                }
                if (jo.get(joKey) != null) {
                    urlParamsStr.append(jo.getString(joKey));
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
     * @param rst
     * @param returnUrlRegexPrev
     * @param checkList
     * @return
     */
    public static ZTResult formatResultJSON(JSONObject rstJO, ZTResult rst, String returnUrlRegexPrev, List<ZTCheckItem> checkList) {
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
            String msgStr = ZenTaoMessage.MSG_ERROR_0003 + "\n";
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
     * @param rst
     * @param returnUrlRegexPrev
     * @param checkList
     * @return
     */
    public static ZTResult formatResult(JSONObject rstJO, ZTResult rst, String returnUrlRegexPrev, List<ZTCheckItem> checkList) {
        if (checkList == null) {
            checkList = new ArrayList<>();
        }
        checkList.addAll(genCommonCheckItems());
        if (rstJO.containsKey("html")) {
            return formatResultHTML(rstJO, rst, checkList);
        }
        return formatResultJSON(rstJO, rst, returnUrlRegexPrev, checkList);
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
     * @param checkList
     * @return
     */
    public static ZTResult formatResultHTML(JSONObject rstJO, ZTResult rst, List<ZTCheckItem> checkList) {
        String html = rstJO.getString("html");
        rst.setResult(rstJO);
        rst.setSuccess(checkResult(rst, html, checkList));
        if (rst.isSuccess() || rst.getMessage() == null) {
            rst.setMessage(html);
        }
        return rst;
    }

    /**
     * 检查目标字符串对象中是否包含检查列表中的值
     *
     * @param target
     * @param checkList
     * @return
     */
    public static boolean checkResult(ZTResult rst, String target, List<ZTCheckItem> checkList) {
        if (checkList == null || checkList.isEmpty()) {
            return true;
        }
        if (target == null || target.isEmpty()) {
            return false;
        }
        for (ZTCheckItem checkItem : checkList) {
            if (checkItem == null) {
                continue;
            }
            if (!checkItem.check(target)) {
                rst.setMessage(checkItem.getErrorMessage());
                return false;
            }
        }
        return true;
    }

    /**
     * 构建通用检查项
     *
     * @return
     */
    public static List<ZTCheckItem> genCommonCheckItems() {
        List<ZTCheckItem> ztCheckItems = new ArrayList<>();

        // 用户未登录
        ZTCheckItem checkItem1 = new ZTCheckItem();
        checkItem1.setItem("/zentao/user-login-");
        checkItem1.setNegative(true);
        checkItem1.setErrorMessage(ZenTaoMessage.MSG_ERROR_0008);
        ztCheckItems.add(checkItem1);

        // 用户无操作权限
        ZTCheckItem checkItem2 = new ZTCheckItem();
        checkItem2.setItem("/zentao/user-deny-");
        checkItem2.setNegative(true);
        checkItem2.setErrorMessage(ZenTaoMessage.MSG_ERROR_0007);
        ztCheckItems.add(checkItem2);

        return ztCheckItems;
    }

    public static String formatRichText(String source) {
        if (source == null || source.isEmpty()) {
            return source;
        }
        String regex = "\\{(\\d+)(\\..+)\\}";
        source = source.replaceAll(regex, "/zentao/file-read-$1$2");
        return source;
    }
}
