package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.UserYearWorkStatsServiceImpl;
import cn.ibizlab.pms.core.ibiz.service.logic.IUserYearWorkStatsGetDevInfomationLogic;
import cn.ibizlab.pms.core.ibiz.service.logic.IUserYearWorkStatsGetPOInfomationLogic;
import cn.ibizlab.pms.core.ibiz.service.logic.IUserYearWorkStatsGetQAInformationLogic;
import com.netflix.discovery.converters.Auto;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.UserYearWorkStats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[用户年度工作内容统计] 自定义服务对象
 */
@Slf4j
@Primary
@Service("UserYearWorkStatsExService")
public class UserYearWorkStatsExService extends UserYearWorkStatsServiceImpl {


    @Autowired
    @Lazy
    IUserYearWorkStatsGetQAInformationLogic qaInformationLogic;
    @Autowired
    @Lazy
    IUserYearWorkStatsGetDevInfomationLogic devInfomationLogic;
    @Autowired
    @Lazy
    IUserYearWorkStatsGetPOInfomationLogic poInfomationLogic;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[GetUserYearAction]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public UserYearWorkStats getUserYearAction(UserYearWorkStats et) {
        et = this.get(et.getId());
        if (et.getJudgerole().equals("dev")){
            devInfomationLogic.execute(et);
        }
        else if (et.getJudgerole().equals("qa")){
            qaInformationLogic.execute(et);
        }
        else {
            poInfomationLogic.execute(et);
        }
        return super.getUserYearAction(et);
    }
    /**
     * 自定义行为[UpdateTitleByYear]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public UserYearWorkStats updateTitleByYear(UserYearWorkStats et) {
        et.setTitle(String.format("%1$s年工作内容统计一览表 —— %2$s",et.getCuryear(),et.getRealname()));
        if (et.getJudgerole().equals("dev")){
            devInfomationLogic.execute(et);
        }
        else if (et.getJudgerole().equals("qa")){
            qaInformationLogic.execute(et);
        }
        else {
            poInfomationLogic.execute(et);
        }
        return super.updateTitleByYear(et);
    }
}

