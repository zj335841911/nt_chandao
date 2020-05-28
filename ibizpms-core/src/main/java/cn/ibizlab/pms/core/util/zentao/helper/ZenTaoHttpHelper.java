package cn.ibizlab.pms.core.util.zentao.helper;

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

public class ZenTaoHttpHelper {
//    @Value("${zentao.url:http://172.16.100.202/zentao/}")
//    private String ztUrl;

    final static public JSONObject doRequest(String account, String url, HttpMethod httpMethod){
        return doRequest(account, url, httpMethod, null, ZenTaoConstants.ZT_ACTION_TYPE_NORMAL);
    }

    final static public JSONObject doRequest(String account, String url, HttpMethod httpMethod, int actionType){
        return doRequest(account, url, httpMethod, null, actionType);
    }

    final static JSONObject doRequest(String account, String url, HttpMethod httpMethod, JSONObject paramMap){
        return doRequest(account, url, httpMethod, paramMap, ZenTaoConstants.ZT_ACTION_TYPE_NORMAL);
    }

    final static JSONObject doRequest(String account, String url, HttpMethod httpMethod, JSONObject paramMap, int actionType){
        if (url == null) {
            return null;
        }
        if (actionType == ZenTaoConstants.ZT_ACTION_TYPE_NORMAL || actionType == ZenTaoConstants.ZT_ACTION_TYPE_LOGIN) {
            if (!ZTAPIHelper.getSessionID(new JSONObject())) {
                return null;
            }
        }
        if (actionType == ZenTaoConstants.ZT_ACTION_TYPE_NORMAL) {
            if (!ZTUserHelper.login(new JSONObject())) {
                return null;
            }
        }
        if (!ZenTaoConstants.ZT_URL.endsWith("/")) {
            ZenTaoConstants.ZT_URL += "/";
        }
        url = ZenTaoConstants.ZT_URL + url + "?zentaosid=" + account;
        JSONObject jo = new JSONObject();
        HttpHeaders httpHeaders = HttpUtil.getHttpHeaders(MediaType.APPLICATION_FORM_URLENCODED);
        ResponseEntity<String> responseEntity = HttpUtil.doRequest(url, httpMethod, httpHeaders, paramMap, String.class);
        String body = responseEntity.getBody();
        if (body == null || body.isEmpty()) {
            return null;
        }
        jo = JSONObject.parseObject(body);
        return jo;
    }

}
