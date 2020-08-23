package cn.ibizlab.pms.core.util.zentao.helper;

import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class TransHelper {
    public static JSONObject part(EntityBase et,String method,JSONObject jo){
        if (et.get("srfactionparam") != null){
            ArrayList<Map> list = (ArrayList<Map>) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for (Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            if (method.contains("Story")){
                jo.put("stories",jsonArray);
            }
            if (method.contains("Bug")){
                jo.put("bugs",jsonArray);
            }
        }
        return jo;
    }

    public static JSONObject ET2JO(EntityBase o,String method){
        JSONObject jo = (JSONObject) JSONObject.toJSON(o);
        Map<String, Object> extensionparams = o.getExtensionparams();
        Set<Map.Entry<String, Object>> entries = extensionparams.entrySet();
        for (Map.Entry<String,Object> entry :entries) {
            jo.put(entry.getKey(),entry.getValue());
        }

        if (o instanceof Bug){
            Bug et = (Bug)o;
            if ("linkBug".equals(method)){
                jo = part(et, method,jo);
                if (et.get("productplan") != null) {
                    jo.put("id", et.get("productplan"));
                }
                return jo;
            }
            if ("buildLinkBug".equals(method)){

                //版本（build）、多bug（ids,resolvedby）关联
                if (jo.get("build") == null) {
                    jo.put("id", String.valueOf(et.get("builds")).split(",")[0]);
                }

                if (et.get("ids") != null ) {
                    String[] resolvedBy = String.valueOf(et.get("resolvedby")).split(",");
                    String[] ids = String.valueOf(et.get("ids")).split(",");
                    String[] statuses = String.valueOf(et.get("statuses")).split(",");
                    JSONArray jsonArray = new JSONArray();
                    for(int i=0;i<ids.length;i++){
                        JSONObject jo2 = new JSONObject();
                        jo2.put("bugs",ids[i]);
                        if (!"resolved".equals(statuses[i])) {
                            jo2.put("resolvedBy", resolvedBy[i]);
                        }
                        jsonArray.add(jo2);
                    }
                    jo.put("srfarray", jsonArray);
                }
                return jo;
            }

        }
        if (o instanceof Build){
            Build et = (Build)o;
            jo = part(et,method,jo);
            return jo;
        }
        if (o instanceof ProductPlan){
            ProductPlan et = (ProductPlan)o;
            jo = (JSONObject) JSONObject.toJSON(et);
            jo = part(et,method,jo);
            return jo;
        }
        if (o instanceof Story){
            Story et = (Story)o;
            if ("linkStory".equals(method)){
                jo = part(et,method,jo);
                if(et.get("productplan") != null) {
                    jo.put("id", et.get("productplan"));
                }
                return jo;
            }
            if ("buildLinkStory".equals(method)){
                jo = part(et,method,jo);
                if(jo.get("build") == null) {
                    jo.put("id", et.getExtensionparams().get("build"));
                }
                return jo;
            }

            if ("projectLinkStroy".equals(method)){
                if(et.get("srfactionparam") != null) {
                    ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
                    JSONArray jsonArray = new JSONArray();
                    for(Map map : list) {
                        if (map.get("id") != null) {
                            JSONObject jo2 = new JSONObject();
                            jo2.put("stories", map.get("id"));
                            if(map.get("product") != null) {
                                jo2.put("products", map.get("product"));
                            }
                            jsonArray.add(jo2);
                        }
                    }
                    jo.put("srfarray", jsonArray);
                }
                if(et.get("project") != null) {
                    jo.put("id", et.get("project"));
                }
            }

            if ("releaseLinkStory".equals(method)){
                jo = new JSONObject();
                if(et.get("srfactionparam") != null) {
                    ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
                    JSONArray jsonArray = new JSONArray();
                    for(Map map : list) {
                        if (map.get("id") != null) {
                            jsonArray.add(map.get("id"));
                        }
                    }

                    jo.put("id", et.getExtensionparams().get("release"));
                    jo.put("stories",jsonArray);
                }
            }
            if("releaseUnlinkStory".equals(method)){
                jo = new JSONObject();
                jo.put("release",et.get("release"));
                jo.put("id",et.get("id"));
            }
            if("releaseBatchUnlinkStory".equals(method)){
                if(et.get("srfactionparam") != null) {
                    ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
                    JSONArray jsonArray = new JSONArray();
                    for(Map map : list) {
                        if (map.get("id") != null) {
                            jsonArray.add(map.get("id"));
                        }
                    }
                    jo = new JSONObject();
                    jo.put("release",et.get("release"));
                    jo.put("id",jsonArray);
                }
            }
        }
        if (o instanceof Case){
            Case et = (Case)o;
            if ("create".equals(method)){
                jo.put("srfArray",getSrfArray(et.getCasestep()));
            }
        }

        return jo;
    }


    /**
     * 解析用例步骤
     *
     * @param list
     * @return
     */
    protected static JSONArray getSrfArray(List<CaseStep> list) {
        JSONArray ja = new JSONArray();
        for(int i = 0; i < list.size(); i ++) {
            CaseStep caseStep = list.get(i);
            String type = caseStep.getType();
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("steps",caseStep.getDesc());
            jsonObject.put("stepType",caseStep.getType());
            jsonObject.put("expects", caseStep.getExpect());
            if("group".equals(type)){
                // 分组
                JSONArray jaChild = new JSONArray();
                for (int j = i + 1; j < list.size(); j++) {
                    CaseStep caseStep2 = list.get(j);
                    if (!"item".equals(caseStep2.getType())) {
                        break;
                    }
                    i ++;
                    JSONObject joChild = new JSONObject();
                    joChild.put("steps", caseStep2.getDesc());
                    joChild.put("stepType", caseStep2.getType());
                    joChild.put("expects", caseStep2.getExpect());
                    jaChild.add(joChild);
                }
                jsonObject.put("srfArray", jaChild);
            }
            ja.add(jsonObject);
        }
        return ja;
    }


/*
    public static JSONObject transPart(EntityBase et,JSONObject jo ,String key){
        if (et.get("srfactionparam") != null){
            ArrayList<Map> list = (ArrayList<Map>) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for (Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            jo.put(key,jsonArray);
            return jo;
        }
        return null;
    }
    public static JSONObject transParams(Object o,String key){
        JSONObject jo = new JSONObject();
        String method = Thread.currentThread().getStackTrace()[1].getMethodName();
        if (o instanceof Bug){
            Bug et = (Bug)o;
            jo = transPart(et, jo, "bugs");
            if (et.get("productplan") != null) {
                jo.put("id", et.get("productplan"));
            }
            return jo;
        }
        if (o instanceof Build){
            Build et = (Build)o;
            jo = transPart(et,jo,"stories");
            return jo;
        }
        if (o instanceof ProductPlan){
            ProductPlan et = (ProductPlan)o;
            jo = (JSONObject) JSONObject.toJSON(et);
            if ("linkBug".equals(method)){
                jo = transPart(et,jo,"bugs");
            }
            if ("linkStory".equals(method)){
                jo = transPart(et,jo,"stories");
            }
            return jo;
        }
        if (o instanceof Story){
            Story et = (Story)o;
            if ("linkStory".equals(method)){
                jo = transPart(et,jo,"stories");
                if(et.get("productplan") != null) {
                    jo.put("id", et.get("productplan"));
                }
                return jo;
            }
            if ("projectLinkStory".equals(method)){
                if(et.get("srfactionparam") != null) {
                    ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
                    JSONArray jsonArray = new JSONArray();
                    for(Map map : list) {
                        if (map.get("id") != null) {
                            JSONObject jo2 = new JSONObject();
                            jo2.put("stories", map.get("id"));
                            if(map.get("product") != null) {
                                jo2.put("products", map.get("product"));
                            }
                            jsonArray.add(jo2);
                        }
                    }
                    jo.put("srfarray", jsonArray);
                }
                if(et.get("project") != null) {
                    jo.put("id", et.get("project"));
                }
                return jo;
            }
            if ("buildLinkStory".equals(method)){
                jo = transPart(et,jo,"stories");
                if(jo.get("build") == null) {
                    jo.put("id", et.getExtensionparams().get("build"));
                }
                return jo;
            }
            if ("buildUnlinkStory".equals(method)){
                if(et.getExtensionparams() != null) {
                    jo.put("build", et.get("build"));
                    jo.put("id",et.getId());
                }
                return jo;
            }
        }

        return jo;
    }*/
}
