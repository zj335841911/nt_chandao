package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.ProjectTeamServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[项目团队] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProjectTeamExService")
public class ProjectTeamExService extends ProjectTeamServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    @Override
    public void saveBatch(List<ProjectTeam> list) {
        if(list.isEmpty() || list.size() == 0) {
            return;
        }
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.service.IBZUAAZTUserService.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
//        JSONArray realnames = new JSONArray();
        JSONArray roles = new JSONArray();
        JSONArray days = new JSONArray();
        JSONArray hours = new JSONArray();
        JSONArray accounts = new JSONArray();
        JSONArray limited = new JSONArray();
        for(ProjectTeam projectTeam : list) {
//            realnames.add(projectTeam.get("username"));
            roles.add(projectTeam.getRole());
            days.add(projectTeam.getDays());
            hours.add(projectTeam.getHours());
            accounts.add(projectTeam.getAccount());
            limited.add(projectTeam.getLimited());
        }
        jo.put("id", list.get(0).getRoot());
        jo.put("realnames", null);
        jo.put("roles", roles);
        jo.put("days", days);
        jo.put("hours", hours);
        jo.put("accounts", accounts);
        jo.put("limited", limited);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTProjectHelper.manageMembers(zentaoSid, jo, rst);
    }

    /**
     * 自定义行为[GetUserRole]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProjectTeam getUserRole(ProjectTeam et) {
        return super.getUserRole(et);
    }


}

