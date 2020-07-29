package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.BugServiceImpl;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.util.*;

/**
 * 实体[Bug] 自定义服务对象
 */
@Slf4j
@Primary
@Service("BugExService")
public class BugExService extends BugServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Activate]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug activate(Bug et) {
        return super.activate(et);
    }

    /**
     * 自定义行为[BatchUnlinkBug]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug batchUnlinkBug(Bug et) {
        return super.batchUnlinkBug(et);
    }

    /**
     * 自定义行为[Close]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug close(Bug et) {
        return super.close(et);
    }

    /**
     * 自定义行为[Confirm]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug confirm(Bug et) {
        return super.confirm(et);
    }

    /**
     * 自定义行为[LinkBug]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug linkBug(Bug et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if (et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList<Map>) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for (Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            jo.put("bugs", jsonArray);
        }
        if (et.get("productplan") != null) {
            jo.put("id", et.get("productplan"));
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTBugHelper.linkBug(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        return et;
    }


    /**
     * 自定义行为[Resolve]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug resolve(Bug et) {
        return super.resolve(et);
    }

    /**
     * 自定义行为[UnlinkBug]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug unlinkBug(Bug et) {
        return super.unlinkBug(et);
    }

    @Override
    @Transactional
    public Bug buildLinkBug(Bug et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();

        String loginname = AuthenticationUser.getAuthenticationUser().getLoginname();

        if (jo.get("build") == null) {
            jo.put("id", et.get("build"));
        }

        if (et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for (Map map : list) {
                JSONObject jo2 = new JSONObject();
                jo2.put("bugs", map.get("id"));
                //当Bug状态不为已解决时，设置Bug解决人为当前操作人。
                if ("resolved".equals(String.valueOf(map.get("status")))) {
                    jo2.put("resolvedBy", map.get("resolvedBy"));
                } else {
                    jo2.put("resolvedBy", loginname);
                }
                jsonArray.add(jo2);
            }
            jo.put("srfarray", jsonArray);
        }


        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTBugHelper.buildLinkBug(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Bug buildUnlinkBug(Bug et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if (et.getExtensionparams() != null) {
            //build id
            jo.put("build", et.get("build"));
            //bug id
            jo.put("id", et.getId());
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTBugHelper.buildUnlinkBug(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }
}

