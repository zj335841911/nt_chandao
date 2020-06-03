package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.util.zentao.bean.ZTResult;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import cn.ibizlab.pms.util.helper.HttpUtil;
import com.alibaba.fastjson.JSONObject;
import liquibase.pro.packaged.U;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

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
        HttpHeaders httpHeaders = HttpUtil.getHttpHeaders(MediaType.APPLICATION_FORM_URLENCODED);
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
            if (jo.get(key.toLowerCase()) == null) {
                formatJo.put(key, templateMap.get(key));
            } else {
                formatJo.put(key, jo.get(key.toLowerCase()));
            }
        }
        return formatJo;
    }

}
