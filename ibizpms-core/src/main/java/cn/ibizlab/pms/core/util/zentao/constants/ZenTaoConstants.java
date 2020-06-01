package cn.ibizlab.pms.core.util.zentao.constants;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

//@Component
final public class ZenTaoConstants {
//    @Value("${zentao.url:http://172.16.100.202/zentao/}")
    public static String ZT_URL = "http://172.16.102.102/zentao/";
    final public static String ZT_URL_EXT = ".json";
    final public static String ZT_TMP_USERNAME = "admin";
    final public static String ZT_TMP_PASSWORD = "ibiz@123";
    final public static int ZT_RETRY_COUNT = 1;

    final public static int ZT_ACTION_TYPE_NORMAL = 0;
    final public static int ZT_ACTION_TYPE_GETSESSION = 1;
    final public static int ZT_ACTION_TYPE_LOGIN = 2;
}
