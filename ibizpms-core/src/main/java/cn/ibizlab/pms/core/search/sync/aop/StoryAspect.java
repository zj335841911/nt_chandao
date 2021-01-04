package cn.ibizlab.pms.search.sync.aop;

import cn.ibizlab.pms.es.service.IIbizproIndexESService;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;
import cn.ibizlab.pms.search.mapping.IbizproIndexMapping;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.domain.Story;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@Aspect
@Component
public class StoryAspect {
    @Autowired
    IIbizproIndexESService ibizproindexESService;

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.create(..)) ")
    @Async
    public void create(JoinPoint point) {
        Object po = point.getArgs()[0];
        if (po instanceof Story) {
            Story Story = (Story) po;
            ibizproindexESService.createES(IbizproIndexMapping.Story2IbizproIndex(Story));
        }
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.update(..)) ")
    @Async
    public void update(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.remove(..)) ")
    @Async
    public void remove(JoinPoint point) {
        Object id = point.getArgs()[0];
        String docid = "Story:" + id;
        IbizproIndex indexDE = new IbizproIndex();
        indexDE.setDocid(docid);
        ibizproindexESService.removeES(docid);
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.get(..)) ")
    @Async
    public void get(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.getdraft(..)) ")
    @Async
    public void getdraft(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.activate(..)) ")
    @Async
    public void activate(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.allpush(..)) ")
    @Async
    public void allpush(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.assignto(..)) ")
    @Async
    public void assignto(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchassignto(..)) ")
    @Async
    public void batchassignto(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchchangebranch(..)) ")
    @Async
    public void batchchangebranch(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchchangemodule(..)) ")
    @Async
    public void batchchangemodule(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchchangeplan(..)) ")
    @Async
    public void batchchangeplan(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchchangestage(..)) ")
    @Async
    public void batchchangestage(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchclose(..)) ")
    @Async
    public void batchclose(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchreview(..)) ")
    @Async
    public void batchreview(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.batchunlinkstory(..)) ")
    @Async
    public void batchunlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.bugtostory(..)) ")
    @Async
    public void bugtostory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.buildbatchunlinkstory(..)) ")
    @Async
    public void buildbatchunlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.buildlinkstory(..)) ")
    @Async
    public void buildlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.buildunlinkstory(..)) ")
    @Async
    public void buildunlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.buildunlinkstorys(..)) ")
    @Async
    public void buildunlinkstorys(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.change(..)) ")
    @Async
    public void change(JoinPoint point) {
        Object po = point.getArgs()[0];
        if (po instanceof Story) {
            Story Story = (Story) po;
            ibizproindexESService.updateES(IbizproIndexMapping.Story2IbizproIndex(Story));
        }
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.checkkey(..)) ")
    @Async
    public void checkkey(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.close(..)) ")
    @Async
    public void close(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.getstoryspec(..)) ")
    @Async
    public void getstoryspec(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.getstoryspecs(..)) ")
    @Async
    public void getstoryspecs(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.gettaskrestory(..)) ")
    @Async
    public void gettaskrestory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.getuserconcat(..)) ")
    @Async
    public void getuserconcat(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.importplanstories(..)) ")
    @Async
    public void importplanstories(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.linkstory(..)) ")
    @Async
    public void linkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.projectbatchunlinkstory(..)) ")
    @Async
    public void projectbatchunlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.projectlinkstory(..)) ")
    @Async
    public void projectlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.projectunlinkstory(..)) ")
    @Async
    public void projectunlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.projectunlinkstorys(..)) ")
    @Async
    public void projectunlinkstorys(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.push(..)) ")
    @Async
    public void push(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.releasebatchunlinkstory(..)) ")
    @Async
    public void releasebatchunlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.releaselinkstory(..)) ")
    @Async
    public void releaselinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.releaseunlinkstory(..)) ")
    @Async
    public void releaseunlinkstory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.resetreviewedby(..)) ")
    @Async
    public void resetreviewedby(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.review(..)) ")
    @Async
    public void review(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.save(..)) ")
    @Async
    public void save(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.sendmessage(..)) ")
    @Async
    public void sendmessage(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.sendmsgpreprocess(..)) ")
    @Async
    public void sendmsgpreprocess(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.storyfavorites(..)) ")
    @Async
    public void storyfavorites(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.storynfavorites(..)) ")
    @Async
    public void storynfavorites(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.syncfromibiz(..)) ")
    @Async
    public void syncfromibiz(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.tostory(..)) ")
    @Async
    public void tostory(JoinPoint point) {
    }

    @AfterReturning(value = "execution(* cn.ibizlab.pms.zentao.service.IStoryService.unlinkstory(..)) ")
    @Async
    public void unlinkstory(JoinPoint point) {
    }

}
