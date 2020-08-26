package cn.ibizlab.pms.core.util.zentao.test;

import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoConstants;
import cn.ibizlab.pms.core.util.zentao.helper.*;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Slf4j
public class TestAPI {
    public static void main(String[] args) {
    String s = new String();
    String s2 = new String();
    System.out.println(s);
    System.out.println(s2);
    System.out.println(s == s2);
    System.out.println(s.equals(s2));
    s = "i";
    s2 = "i";
    System.out.println(s == s2);

//        System.out.println(list);

//        String m = "resolvedBy[229]";
//        String regex = ".+\\[\\d+\\]";
//        System.out.println(m.matches(regex));
        if (s != null) {
            return;
        }

        System.setProperty("http.proxyHost", "127.0.0.1");
        System.setProperty("https.proxyHost", "127.0.0.1");
        System.setProperty("http.proxyPort", "8888");
        System.setProperty("https.proxyPort", "8888");

        ZenTaoConstants.ZT_URL = "http://172.16.180.217/zentao/";

        JSONObject jo = new JSONObject();
        jo.put("id", 228);

        JSONArray ja = new JSONArray();
        JSONObject jo1 = new JSONObject();
        jo1.put("bugs", 110);
        jo1.put("resolvedBy", "crimson");
        ja.add(jo1);

        JSONObject jo2 = new JSONObject();
        jo2.put("bugs", 229);
        jo2.put("resolvedBy", "crimson");
        ja.add(jo2);

        jo.put("srfarray", ja);

        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        boolean bRst = ZTBuildHelper.linkBug("h962qvndf2479sv0f2tkcc0s53", jo, rst);

        System.out.println(rst.getMessage());


    }

}
