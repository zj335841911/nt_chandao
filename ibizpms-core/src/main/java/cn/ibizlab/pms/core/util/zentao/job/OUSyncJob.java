package cn.ibizlab.pms.core.util.zentao.job;

import cn.ibizlab.pms.core.zentao.domain.Dept;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.service.ICompanyService;
import cn.ibizlab.pms.core.zentao.service.IDeptService;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.util.client.IBZOUFeignClient;
import com.alibaba.fastjson.JSONObject;
import liquibase.pro.packaged.A;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;

import java.io.InputStream;
import java.util.Date;
import java.util.List;

/**
 * 同步账户。
 */
@Slf4j
@Component
@ConditionalOnProperty( name = "ibiz.enablePermissionValid", havingValue = "true")
@ConditionalOnExpression("'${spring.application.name}'.startsWith('pms-webapi')")
public class OUSyncJob implements ApplicationRunner {
    @Autowired
    IBZOUFeignClient feignClient;
    @Autowired
    IUserService userService;
    @Autowired
    IDeptService deptService;
    @Autowired
    ICompanyService companyService;
    @Override
    public void run(ApplicationArguments args) throws Exception {

        try {
            Thread.sleep(10000);
            JSONObject jo= new JSONObject();
            jo.put("orgs",companyService.list());
            jo.put("depts",deptService.list());
            jo.put("emps",userService.list());
            Long start = new Date().getTime();
            if(feignClient.sync(jo)){
                log.info("向[OU]同步用户资源成功");
            }else{
                log.error("向[OU]同步用户资源失败");
            }
            Long end = new Date().getTime();
            log.info("同步用户资源耗时：{}ms",end-start);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            log.error(String.format("向[OU]同步用户资源失败，请检查[OU]服务是否正常! [%s]",ex));
        }

    }
}
