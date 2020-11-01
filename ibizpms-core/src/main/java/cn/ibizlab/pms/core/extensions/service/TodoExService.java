package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.util.message.SendMessage;
import cn.ibizlab.pms.core.zentao.service.impl.TodoServiceImpl;
import cn.ibizlab.pms.util.dict.StaticDict;
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
    @SendMessage
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
    @SendMessage
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
    @SendMessage
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
    @SendMessage
    public Todo finish(Todo et) {
        return super.finish(et);
    }

    @Override
    @Transactional
    public Todo get(Long key) {
        Todo et = getById(key);
        if(et==null){
            et=new Todo();
            et.setId(key);
        }
        else{

            if(et.getType() != null && StaticDict.Type.CYCLE.getValue().equals(et.getType()) && et.getConfig() != null && !"".equals(et.getConfig())) {
                JSONObject jsonObject = JSONObject.parseObject(et.getConfig());
                et.setConfigType(jsonObject.getString("type"));
                et.setConfigBeforedays(jsonObject.getInteger("beforeDays"));
                et.setConfigEnd(jsonObject.getTimestamp("end"));
                et.setConfigDay(0);
                if(StaticDict.CycleType.DAY.getValue().equals(et.getConfigType())) {
                    et.setConfigDay(jsonObject.getInteger("day"));
                }else if(StaticDict.CycleType.WEEK.getValue().equals(et.getConfigType())) {
                    et.setConfigWeek(jsonObject.getString("week"));
                }else if(StaticDict.CycleType.MONTH.getValue().equals(et.getConfigType())) {
                    et.setConfigMonth(jsonObject.getString("month"));
                }
            }
        }

        return et;
    }
}

