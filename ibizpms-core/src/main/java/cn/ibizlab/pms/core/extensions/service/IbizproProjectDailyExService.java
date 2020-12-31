package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproProjectDailyServiceImpl;
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.service.IProjectService;
import cn.ibizlab.pms.core.zentao.service.ITaskEstimateService;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProjectDaily;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[项目日报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbizproProjectDailyExService")
public class IbizproProjectDailyExService extends IbizproProjectDailyServiceImpl {

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
     * [SumProjectDaily:汇总项目日报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbizproProjectDaily sumProjectDaily(IbizproProjectDaily et) {
        //
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DAY_OF_MONTH, -1);
        calendar.getTime();
        Date date = calendar.getTime();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = dateFormat.format(date);
        List<Project> projectList =  iProjectService.list(new QueryWrapper<Project>().last(String.format(" and SUPPROREPORT = '1' and pm is not null and pm <> '' and EXISTS(select 1 from zt_taskestimate tt left join zt_task t2 on tt.task = t2.id where t2.project = zt_project.id and tt.date = '%1$s')", strDate)));
        Timestamp timestamp = new Timestamp(date.getTime());
        List<IbizproProjectDaily> ibizproProjectDailies = new ArrayList<>();
        for(Project project : projectList) {
            this.remove(new QueryWrapper<IbizproProjectDaily>().eq("project", project.getId()).last(" and DATE_FORMAT(date,'%Y-%m-%d') = '" + strDate + "'"));
            IbizproProjectDaily ibizproProjectDaily = new IbizproProjectDaily();
            ibizproProjectDaily.setProject(project.getId());
            ibizproProjectDaily.setDate(timestamp);
            ibizproProjectDaily.setPm(project.getPm());
            List<Task> taskList = getTaskList(project.getId(), strDate);
            ibizproProjectDaily.setTasks(getCurTasks(taskList));
            ibizproProjectDaily.setTotalestimates(getCusrTotalestimates(taskList, strDate));
            ibizproProjectDaily.setIbizproprojectdailyname(String.format("%1$s-%2$s的日报", project.getName(), strDate));
            ibizproProjectDailies.add(ibizproProjectDaily);
        }
        if(ibizproProjectDailies.size() > 0) {
            this.createBatch(ibizproProjectDailies);
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

        return iTaskService.list(new QueryWrapper<Task>().eq("project", project).last(String.format("  and EXISTS(select 1 from zt_taskestimate tt where tt.task = zt_task.id and tt.date = '%1$s')", strDate)));
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
            List<TaskEstimate> taskEstimateList = iTaskEstimateService.list(new QueryWrapper<TaskEstimate>().eq("task", task.getId()).eq("date",strDate ));
            for(TaskEstimate taskEstimate : taskEstimateList) {
                totalestimates += taskEstimate.getConsumed();
            }
        }
        return totalestimates;
    }



}

