package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproProductWeeklyServiceImpl;
import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.util.ibizzentao.helper.IbzWeeklyHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ProductHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskEstimateHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.netflix.discovery.converters.Auto;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProductWeekly;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[产品周报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbizproProductWeeklyExService")
public class IbizproProductWeeklyExService extends IbizproProductWeeklyServiceImpl {

    @Autowired
    ProductHelper productHelper;
    @Autowired
    TaskHelper taskHelper;
    @Autowired
    TaskEstimateHelper taskEstimateHelper;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [SumProductWeekly:统计产品周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbizproProductWeekly sumProductWeekly(IbizproProductWeekly et) {
        List<Product> productList = productHelper.list(new QueryWrapper<Product>().last("and supproreport = '1' and po is not null  and EXISTS(select * from zt_taskestimate tt left join zt_task t2  on tt.task = t2.id LEFT JOIN zt_story t3 on t3.id = t2.story where t3.product = zt_product.id and  YEARWEEK(DATE_FORMAT(DATE_SUB(tt.date, INTERVAL -1 DAY),'%Y-%m-%d')) = YEARWEEK(DATE_FORMAT(DATE_SUB(NOW(), INTERVAL -1 DAY),'%Y-%m-%d'))) "));
        for (Product product : productList) {
            IbizproProductWeekly productWeekly = new IbizproProductWeekly();
            List<Task> taskList = getProductTask(product);
            String tasksId = getTasksId(taskList);
            productWeekly.setTasks(getTasksId(taskList));
            productWeekly.setProduct(product.getId());
            productWeekly.setPo(product.getPo());
            productWeekly.setDate(ZTDateUtil.now());
            productWeekly.setIbizproproductweeklyname(String.format("%1$s_第%2$s周产品周报",product.getName(),getWhichWeek()));
            productWeekly.setTotalestimates(getTotalConSumed(tasksId));
            this.create(productWeekly);
        }
        return et;
    }

    //获取任务总消耗工时
    public double getTotalConSumed(String tasksId){
        List<TaskEstimate> taskEstimates = taskEstimateHelper.list(new QueryWrapper<TaskEstimate>().last("where find_in_set(zt_TaskEstimate.task,'"+tasksId+"') and YEARWEEK(DATE_FORMAT(DATE_SUB(zt_TaskEstimate.date, INTERVAL -1 DAY),'%Y-%m-%d')) = YEARWEEK(DATE_FORMAT(DATE_SUB(NOW(), INTERVAL -1 DAY),'%Y-%m-%d'))"));
        double consumed = 0d;
        for (TaskEstimate taskEs : taskEstimates) {
            consumed += taskEs.getConsumed();
        }
        return consumed;
    }

    //获取当前是第几周
    public int getWhichWeek(){
        Date now = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(now);
        return calendar.get(Calendar.WEEK_OF_MONTH);
    }

    public List<Task> getProductTask(Product et){
        return taskHelper.list(new QueryWrapper<Task>().last(" and (SELECT t1.id from zt_product t1 LEFT JOIN zt_story t2 on t2.product = t1.id where t2.id = zt_task.story)  = '"+et.getId()+"' and parent >= 0 and EXISTS(select 1 from zt_taskestimate tt where tt.task = zt_task.id and YEARWEEK(DATE_FORMAT(DATE_SUB(tt.date, INTERVAL -1 DAY),'%Y-%m-%d')) = YEARWEEK(DATE_FORMAT(DATE_SUB(NOW(), INTERVAL -1 DAY),'%Y-%m-%d')) )"));

    }

    public String getTasksId(List<Task> tasks){
        String tasksId = "";
        for (Task task : tasks) {
            if (tasksId.length() >0 ){
                tasksId += ",";
            }
            tasksId += task.getId();
        }
        return tasksId;
    }
}

