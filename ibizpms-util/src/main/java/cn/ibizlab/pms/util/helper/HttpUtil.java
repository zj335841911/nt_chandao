package cn.ibizlab.pms.util.helper;

import com.alibaba.fastjson.JSONObject;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.List;

final public class HttpUtil {

    final public static <T> ResponseEntity<T> doRequest(String url, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        HttpHeaders headers = new HttpHeaders();
        return doRequest(restTemplate, url, HttpMethod.GET, headers, null, responseClazz);
    }

    final public static <T> ResponseEntity<T> doRequest(String url, HttpHeaders headers, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        return doRequest(restTemplate, url, HttpMethod.GET, headers, null, responseClazz);
    }

    final public static <T> ResponseEntity<T> doRequest(String url, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        HttpHeaders headers = new HttpHeaders();
        return doRequest(restTemplate, url, HttpMethod.POST, headers, paramMap, responseClazz);
    }

    final public static <T> ResponseEntity<T> doRequest(String url, HttpHeaders headers, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        return doRequest(restTemplate, url, HttpMethod.POST, headers, paramMap, responseClazz);
    }

    final public static <T> ResponseEntity<T> doRequest(String url, HttpMethod method, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        HttpHeaders headers = new HttpHeaders();
        return doRequest(restTemplate, url, method, headers, paramMap, responseClazz);
    }

    final public static <T> ResponseEntity<T> doRequest(String url, HttpMethod method, HttpHeaders headers, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        return doRequest(restTemplate, url, method, headers, paramMap, responseClazz);
    }

    final public static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

    final public static HttpHeaders getHttpHeaders(MediaType mediaType) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(mediaType);
        return headers;
    }

    final public static <T> ResponseEntity<T> doRequest(RestTemplate restTemplate, String url, HttpMethod method, HttpHeaders headers, JSONObject paramMap, Class<T> responseClazz){
        if (restTemplate == null) {
            restTemplate = getRestTemplate();
        }
        if (method == null) {
            method = HttpMethod.GET;
        }
        if (headers == null) {
            headers = new HttpHeaders();
//            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        }
        MultiValueMap<String, Object> params = covertJSONToMultiValueMap(paramMap);
        HttpEntity<MultiValueMap<String, Object>> entity = null;
        if(params != null){
            entity = new HttpEntity<>(params, headers);
        }else{
            entity = new HttpEntity<>(null, headers);
        }
        ResponseEntity<T> responseEntity = restTemplate.exchange(url, method, entity, responseClazz);
        return responseEntity;
    }

    final public static MultiValueMap<String,Object> covertJSONToMultiValueMap(JSONObject jo) {
        if (jo == null || jo.isEmpty()) {
            return null;
        }
        MultiValueMap<String,Object> params = new LinkedMultiValueMap<String,Object>();
        for (String key : jo.keySet()) {
            Object joObj = jo.get(key);
            if (joObj != null && (joObj instanceof Iterable || joObj instanceof Arrays)) {
                List array = Arrays.asList(jo.get(key));
                params.put(key, array);
                continue;
            }
            params.add(key, joObj);
        }
        return params;
    }

    final public static RestTemplate getRestTemplate(){
        return getRestTemplate("UTF-8");
    }

    final public static RestTemplate getRestTemplate(String charset){
        RestTemplate restTemplate = new RestTemplate();
        for (HttpMessageConverter<?> httpMessageConverter : restTemplate.getMessageConverters()) {
            if (httpMessageConverter instanceof StringHttpMessageConverter) {
                ((StringHttpMessageConverter) httpMessageConverter).setDefaultCharset(Charset.forName(charset));
                break;
            }
        }
        return restTemplate;
    }

}
