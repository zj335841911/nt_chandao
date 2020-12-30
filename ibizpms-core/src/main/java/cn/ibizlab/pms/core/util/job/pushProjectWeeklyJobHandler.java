package cn.ibizlab.pms.core.util.job;

import cn.ibizlab.pms.core.ibizpro.service.IIbizproProjectWeeklyService;
import com.baomidou.jobs.api.JobsResponse;
import com.baomidou.jobs.exception.JobsException;
import com.baomidou.jobs.handler.IJobsHandler;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component("pushProjectWeeklyJobHandler")
public class pushProjectWeeklyJobHandler implements IJobsHandler {

    @Autowired
    @Lazy
    IIbizproProjectWeeklyService iIbizproProjectWeeklyService;

    @Override
    public JobsResponse execute(String tenantId, String param) throws JobsException {
        cn.ibizlab.pms.core.ibizpro.domain.IbizproProjectWeekly entity=new cn.ibizlab.pms.core.ibizpro.domain.IbizproProjectWeekly();
        entity.set("tenantid",tenantId);
        entity.set("param",param);
        iIbizproProjectWeeklyService.pushSumProjectWeekly(entity);
        log.info("执行 pushProjectWeeklyJobHandler tenantId=" + tenantId + ",param=" + param);
        return JobsResponse.ok();
    }
}
