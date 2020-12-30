package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproProjectMonthlyServiceImpl;
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.service.IProjectService;
import cn.ibizlab.pms.core.zentao.service.ITaskEstimateService;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProjectMonthly;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[项目月报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbizproProjectMonthlyExService")
public class IbizproProjectMonthlyExService extends IbizproProjectMonthlyServiceImpl {

    @Autowired
    IProjectService iProjectService;

    @Autowired
    ITaskEstimateService iTaskEstimateService;

    @Autowired
    ITaskService iTaskService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [SumProjectMonthly:汇总项目月报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbizproProjectMonthly sumProjectMonthly(IbizproProjectMonthly et) {
        // 计算上一天的日报

        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MONTH, -1);
        calendar.getTime();
        Date date = calendar.getTime();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM");
        String strDate = dateFormat.format(date);
        List<Project> projectList =  iProjectService.list(new QueryWrapper<Project>().last(" and SUPPROREPORT = '1' and pm is not null  and EXISTS(select 1 from zt_taskestimate tt left join zt_task t2 on tt.task = t2.id where t2.project = zt_project.id and DATE_FORMAT(tt.date,'%Y-%m') = '"+ strDate +"')"));
        Timestamp timestamp = new Timestamp(date.getTime());
        List<IbizproProjectMonthly> ibizproProjectMonthlies = new ArrayList<>();
        for(Project project : projectList) {
            this.remove(new QueryWrapper<IbizproProjectMonthly>().eq("project", project.getId()).eq("`Year_month`", strDate));
            IbizproProjectMonthly ibizproProjectMonthly = new IbizproProjectMonthly();
            ibizproProjectMonthly.setProject(project.getId());
            ibizproProjectMonthly.setDate(timestamp);
            ibizproProjectMonthly.setPm(project.getPm());
            ibizproProjectMonthly.setYearmonth(strDate);
            List<Task> taskList = getTaskList(project.getId(), strDate);
            ibizproProjectMonthly.setTasks(getCurTasks(taskList));
            ibizproProjectMonthly.setTotalestimates(getCusrTotalestimates(taskList, strDate));
            ibizproProjectMonthly.setIbizproprojectmonthlyname(String.format("%1$s-%2$s的月报", project.getName(), strDate));
            ibizproProjectMonthlies.add(ibizproProjectMonthly);
        }
        if(ibizproProjectMonthlies.size() > 0) {
            this.createBatch(ibizproProjectMonthlies);
        }
        return et;
    }

    /**
     * 获取所有的任务
     *
     * @param project
     * @param strDate
     * @return
     */
    public List<Task> getTaskList(Long project, String strDate) {

        return iTaskService.list(new QueryWrapper<Task>().eq("project", project).last("  and EXISTS(select 1 from zt_taskestimate tt where tt.task = zt_task.id and DATE_FORMAT(tt.date,'%Y-%m') = '"+ strDate +"')"));
    }

    /**
     * 获取任务列
     *
     * @param tasklists
     * @return
     */
    public String getCurTasks(List<Task> tasklists) {
        String tasks = "";
        for(Task task : tasklists) {
            if(!"".equals(tasks)) {
                tasks += ",";
            }
            tasks += task.getId();

        }
        return tasks;
    }

    /**
     * 获取所有工时
     *
     * @param tasklists
     * @param strDate
     * @return
     */
    public  Double getCusrTotalestimates(List<Task> tasklists, String strDate) {
        Double totalestimates = 0.0d;
        for(Task task : tasklists) {
            List<TaskEstimate> taskEstimateList = iTaskEstimateService.list(new QueryWrapper<TaskEstimate>().eq("task", task.getId()).last(" and DATE_FORMAT(date,'%Y-%m') = '"+ strDate +"'"));
            for(TaskEstimate taskEstimate : taskEstimateList) {
                totalestimates += taskEstimate.getConsumed();
            }
        }
        return totalestimates;
    }
}

