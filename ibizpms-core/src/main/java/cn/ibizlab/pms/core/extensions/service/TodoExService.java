package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.TodoServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Todo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.lang.reflect.Field;
import java.math.BigInteger;
import java.util.*;

/**
 * 实体[待办事宜表] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TodoExService")
public class TodoExService extends TodoServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Activate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo activate(Todo et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo assignTo(Todo et) {
        return super.assignTo(et);
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo close(Todo et) {
        return super.close(et);
    }
    /**
     * 自定义行为[Finish]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo finish(Todo et) {
        return super.finish(et);
    }

    @Override
    public boolean create(Todo et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        if(et.getDateDisable() != null) {
            et.setDate(null);
        }
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
        fullWeeks(jo, et);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTodoHelper.create(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    public boolean update(Todo et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
        fullWeeks(jo, et);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTodoHelper.edit(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    protected void fullWeeks(JSONObject jo, Todo et) {
        if(et.getCycle() !=null && et.getConfigType() != null) {
            jo.put("config[type]", et.getConfigType());
            jo.put("config[beforeDays]", et.getConfigBeforedays());
            jo.put("config[end]", et.getConfigEnd());
            if("day".equals(et.getConfigType())) {
                jo.put("config[day]", et.getConfigDay());
            }else if("week".equals(et.getConfigType())) {

                if(et.getConfigWeek() != null) {
                    JSONArray joWeeks = new JSONArray();
                    String[] weeks = et.getConfigWeek().split(",");
                    for(String str : weeks) {
                        joWeeks.add(str);
                    }
                    jo.put("config[week]", joWeeks);
                }
            }else if("month".equals(et.getConfigType())) {
                if(et.getConfigMonth() != null) {
                    JSONArray joMonths = new JSONArray();

                    String[] months = et.getConfigMonth().split(",");
                    for(String str : months) {
                        joMonths.add(str);
                    }
                    jo.put("config[month]", joMonths);
                }

            }
        }
    }

    @Override
    @Transactional
    public Todo get(BigInteger key) {
        Todo et = getById(key);
        if(et==null){
            et=new Todo();
            et.setId(key);
        }
        else{
            if(et.getType() != null && "cycle".equals(et.getType()) && et.getConfig() != null && !"".equals(et.getConfig())) {
                JSONObject jsonObject = JSONObject.parseObject(et.getConfig());
                et.setConfigType(jsonObject.getString("type"));
                et.setConfigBeforedays(jsonObject.getInteger("beforeDays"));
                et.setConfigEnd(jsonObject.getTimestamp("end"));
                et.setConfigDay(0);
                if("day".equals(et.getConfigType())) {
                    et.setConfigDay(jsonObject.getInteger("day"));
                }else if("week".equals(et.getConfigType())) {
                    et.setConfigWeek(jsonObject.getString("week"));
                }else if("month".equals(et.getConfigType())) {
                    et.setConfigMonth(jsonObject.getString("month"));
                }
            }
        }

        return et;
    }
}

