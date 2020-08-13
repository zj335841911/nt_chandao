package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.BugServiceImpl;
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
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug activate(Bug et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug assignTo(Bug et) {
        return super.assignTo(et);
    }
    /**
     * 自定义行为[BatchUnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug batchUnlinkBug(Bug et) {
        return super.batchUnlinkBug(et);
    }
    /**
     * 自定义行为[BuildBatchUnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug buildBatchUnlinkBug(Bug et) {
        return super.buildBatchUnlinkBug(et);
    }
    /**
     * 自定义行为[BuildLinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug buildLinkBug(Bug et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();

        //版本（build）、多bug（ids,resolvedby）关联
        if (jo.get("build") == null) {
            jo.put("id", String.valueOf(et.get("builds")).split(",")[0]);
        }

        if (et.get("ids") != null && et.get("resolvedby")!=null) {
            String[] resolvedBy = String.valueOf(et.get("resolvedby")).split(",");
            String[] ids = String.valueOf(et.get("ids")).split(",");
            JSONArray jsonArray = new JSONArray();
            for(int i=0;i<ids.length;i++){
                JSONObject jo2 = new JSONObject();
                jo2.put("bugs",ids[i]);
                jo2.put("resolvedBy",resolvedBy[i]);
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
    /**
     * 自定义行为[BuildUnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug buildUnlinkBug(Bug et) {
        return super.buildUnlinkBug(et);
    }
    /**
     * 自定义行为[Close]用户扩展
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
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug linkBug(Bug et) {
        return super.linkBug(et);
    }
    /**
     * 自定义行为[ReleaaseBatchUnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug releaaseBatchUnlinkBug(Bug et) {
        return super.releaaseBatchUnlinkBug(et);
    }
    /**
     * 自定义行为[ReleaseLinkBugbyBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug releaseLinkBugbyBug(Bug et) {
        return super.releaseLinkBugbyBug(et);
    }
    /**
     * 自定义行为[ReleaseLinkBugbyLeftBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug releaseLinkBugbyLeftBug(Bug et) {
        return super.releaseLinkBugbyLeftBug(et);
    }
    /**
     * 自定义行为[ReleaseUnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug releaseUnlinkBug(Bug et) {
        return super.releaseUnlinkBug(et);
    }
    /**
     * 自定义行为[Resolve]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug resolve(Bug et) {
        return super.resolve(et);
    }
    /**
     * 自定义行为[ToStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug toStory(Bug et) {
        return super.toStory(et);
    }
    /**
     * 自定义行为[UnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Bug unlinkBug(Bug et) {
        return super.unlinkBug(et);
    }
}

