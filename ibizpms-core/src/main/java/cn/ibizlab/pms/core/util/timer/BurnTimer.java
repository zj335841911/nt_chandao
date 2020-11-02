package cn.ibizlab.pms.core.util.timer;

import cn.ibizlab.pms.core.zentao.service.IBurnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 燃尽图相关的定时器
 */
@Component
@EnableScheduling
@EnableAsync
public class BurnTimer {

    @Autowired
    IBurnService burnService;

    /**
     * 定时更新燃尽图
     */
    @Async
    @Scheduled(cron = "0 30 23 * * ?")
    public void UpdateBurn() {
        burnService.computeBurn(null);
    }
}
