package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.report.service.impl.IbzWeeklyServiceImpl;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[周报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbzWeeklyExService")
public class IbzWeeklyExService extends IbzWeeklyServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [CreateEveryWeekReport:定时生成每周周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly createEveryWeekReport(IbzWeekly et) {
        return super.createEveryWeekReport(et);
    }
    /**
     * [HaveRead:已读] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly haveRead(IbzWeekly et) {
        return super.haveRead(et);
    }
    /**
     * [JugThisWeekCreateWeekly:判断本周是否创建过周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly jugThisWeekCreateWeekly(IbzWeekly et) {
        Object actioninfo = et.get("actioninfo");

        Date today = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM");
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(today);
        int week = calendar.get(Calendar.WEEK_OF_MONTH); //第几周
        Calendar c = Calendar.getInstance();
        int weekday = getMondayAndSunday(c,today);

        c.add(Calendar.DAY_OF_MONTH,weekday == 0 ? 0 : (8-weekday));
        Date sunday = c.getTime();
        c.add(Calendar.DAY_OF_MONTH,-6);
        Date monday = c.getTime();
        List<IbzWeekly> list = this.list(new QueryWrapper<IbzWeekly>().last("where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date").eq("account", AuthenticationUser.getAuthenticationUser().getUsername()));
        for (IbzWeekly ibzWeekly : list) {
            if (ibzWeekly.getDate().getTime() >= monday.getTime() ){
                throw new RuntimeException(String.format(actioninfo.toString(),AuthenticationUser.getAuthenticationUser().getUsername(),dateFormat.format(today),week));
            }
        }
        return et;
    }
    /**
     * [PushUserWeekly:定时推送待阅提醒用户周报提交] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly pushUserWeekly(IbzWeekly et) {
        return super.pushUserWeekly(et);
    }
    /**
     * [Submit:提交] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly submit(IbzWeekly et) {
        return super.submit(et);
    }



    public int getMondayAndSunday(Calendar c,Date today){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = sdf.format(today);
        try {
            today = sdf.parse(strDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        c.setTime(today);
        int weekday = c.get(Calendar.DAY_OF_WEEK);  //今天是周几
        return weekday;
    }
}

