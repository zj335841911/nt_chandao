package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.BuildServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Build;
import org.springframework.stereotype.Service;
import io.seata.spring.annotation.GlobalTransactional;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[版本] 自定义服务对象
 */
@Slf4j
@Primary
@Service("BuildExService")
public class BuildExService extends BuildServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[LinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Build linkStory(Build et) {
        //storiesid存到哪里？
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
        if(et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for(Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            jo.put("stories",jsonArray);
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTBuildHelper.linkStory(zentaoSid, (JSONObject) JSONObject.toJSON(et), rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;

    }
}

