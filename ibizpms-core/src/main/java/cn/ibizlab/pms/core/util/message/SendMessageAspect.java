package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.Todo;
import cn.ibizlab.pms.core.zentao.service.IBugService;
import cn.ibizlab.pms.util.domain.EntityBase;
import com.alibaba.druid.support.spring.stat.SpringStatUtils;
import com.sun.xml.bind.v2.TODO;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.math.BigInteger;


@Slf4j
@Aspect
@Component
@ConditionalOnProperty( name = "pms.message.enabled", havingValue = "true")
public class SendMessageAspect {

    @Autowired
    IMsgService iMsgService;

    @Around(value = "@annotation(cn.ibizlab.pms.core.util.message.SendMessage))")
    public Object sendMessage(ProceedingJoinPoint joinPoint) throws Throwable {
        Object returnedValue = null;
        try {
            Object[] args = joinPoint.getArgs();
            returnedValue = joinPoint.proceed();
            if (args != null && args.length == 1 && args[0] instanceof EntityBase) {
                EntityBase et = (EntityBase) args[0];
                //TODO 关键字段被修改判断(assignTo,mailTo)


                String viewName = null;
                if(et instanceof Story){
                    viewName = "mainview_link";
                }else if(et instanceof Bug){
                    viewName = "maindashboardview_link";
                }else if(et instanceof Task){
                    viewName = "maindashboardview_link";
                }else if(et instanceof Todo){
                    viewName = "dashboardview_link";
                }
                iMsgService.send(et, viewName);
            }
            return returnedValue;
        } catch (Throwable throwable) {
            log.error("message aop errror:",throwable);
            throw throwable;
        }
    }

}