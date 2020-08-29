package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.TaskServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.math.BigInteger;
import java.util.*;

/**
 * 实体[任务] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TaskExService")
public class TaskExService extends TaskServiceImpl {

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
    public Task activate(Task et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task assignTo(Task et) {
        return super.assignTo(et);
    }
    /**
     * 自定义行为[Cancel]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task cancel(Task et) {
        return super.cancel(et);
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task close(Task et) {
        return super.close(et);
    }
    /**
     * 自定义行为[DeleteEstimate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task deleteEstimate(Task et) {
        return super.deleteEstimate(et);
    }
    /**
     * 自定义行为[EditEstimate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task editEstimate(Task et) {
        return super.editEstimate(et);
    }
    /**
     * 自定义行为[Finish]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task finish(Task et) {
        return super.finish(et);
    }
    /**
     * 自定义行为[Pause]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task pause(Task et) {
        return super.pause(et);
    }
    /**
     * 自定义行为[RecordEstimate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task recordEstimate(Task et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = (JSONObject) JSONObject.toJSON(et);
        List<TaskEstimate> list = et.getTaskestimate();
        int i = 1;
        JSONArray jsonArray = new JSONArray();
        for(TaskEstimate taskEstimate : list) {
            if(taskEstimate.getId() == null) {
                taskEstimate.setId(new BigInteger(String.valueOf(i)));
                JSONObject jsonObject = (JSONObject) JSONObject.toJSON(taskEstimate);
                i ++;
                jsonArray.add(jsonObject);
            }
        }
        jo.put("srfarray", jsonArray);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.recordEstimate(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }
    /**
     * 自定义行为[Restart]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task restart(Task et) {
        return super.restart(et);
    }
    /**
     * 自定义行为[Start]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Task start(Task et) {
        return super.start(et);
    }

    @Override
    @Transactional
    public boolean create(Task et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo =  (JSONObject) JSONObject.toJSON(et);
        if(et.getMultiple() != null && et.getMultiple() == 1) {
            List<TaskTeam> list = et.getTaskteam();
            if(!list.isEmpty() && list.size() > 0) {
                jo.put("assignedTo", list.get(0).getAccount());
                double estimate = 0;
                JSONArray team = new JSONArray();
                JSONArray teamEstimate = new JSONArray();
                for (TaskTeam taskTeam : list) {
                    team.add(taskTeam.getAccount());
                    teamEstimate.add(taskTeam.getEstimate());
                    if(taskTeam.getEstimate() != null) {
                        estimate += taskTeam.getEstimate();
                    }
                }
                jo.put("estimate", estimate);
                jo.put("team", team);
                jo.put("teamEstimate", teamEstimate);
            }
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.create(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    @Override
    @Transactional
    public boolean update(Task et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo =  (JSONObject) JSONObject.toJSON(et);
        if(et.getMultiple() != null && et.getMultiple() == 1) {
            List<TaskTeam> list = et.getTaskteam();
            if(!list.isEmpty() && list.size() > 0) {
                JSONArray team = new JSONArray();
                JSONArray teamEstimate = new JSONArray();
                JSONArray teamLeft = new JSONArray();
                JSONArray teamConsumed = new JSONArray();
                for (TaskTeam taskTeam : list) {
                    team.add(taskTeam.getAccount());
                    teamEstimate.add(taskTeam.getEstimate());
                    teamLeft.add(taskTeam.getLeft());
                    teamConsumed.add(taskTeam.getConsumed());
                }
                jo.put("team", team);
                jo.put("teamEstimate", teamEstimate);
                jo.put("teamLeft", teamLeft);
                jo.put("teamConsumed", teamConsumed);
            }
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTTaskHelper.edit(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return bRst;
    }

    /**
     * 查询集合 通过模块查询
     */
    @Override
    public Page<Task> searchByModule(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchByModule(context.getPages(),context,context.getSelectCond());
        for(Task task : pages.getRecords()) {
            task.set("items", this.selectByParent(task.getId()));
        }
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目任务
     */
    @Override
    public Page<Task> searchProjectTASK(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchProjectTASK(context.getPages(),context,context.getSelectCond());
        for(Task task : pages.getRecords()) {
            TaskSearchContext context1 = new TaskSearchContext();
            context1.setN_parent_eq(task.getId());
            task.set("items", this.searchDefault(context1).getContent());
        }
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    @Override
    @Transactional
    public Task get(BigInteger key) {
        Task et = getById(key);
        if(et==null){
            et=new Task();
            et.setId(key);
        }
        else{
            et.setTaskteam(taskteamService.selectByRoot(key));
            // et.setTaskestimate(taskestimateService.selectByTask(key));
        }
        return et;
    }
}

