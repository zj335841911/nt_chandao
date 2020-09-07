package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSModule;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSModuleSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSModule] 服务对象接口
 */
@Component
public class PSModuleFallback implements PSModuleFeignClient{

    public Page<PSModule> select(){
            return null;
     }

    public PSModule create(PSModule psmodule){
            return null;
     }
    public Boolean createBatch(List<PSModule> psmodules){
            return false;
     }

    public PSModule update(String psmoduleid, PSModule psmodule){
            return null;
     }
    public Boolean updateBatch(List<PSModule> psmodules){
            return false;
     }


    public Boolean remove(String psmoduleid){
            return false;
     }
    public Boolean removeBatch(Collection<String> idList){
            return false;
     }

    public PSModule get(String psmoduleid){
            return null;
     }


    public PSModule getDraft(){
            return null;
    }



    public Boolean checkKey(PSModule psmodule){
            return false;
     }


    public Boolean save(PSModule psmodule){
            return false;
     }
    public Boolean saveBatch(List<PSModule> psmodules){
            return false;
     }

    public Page<PSModule> searchDefault(PSModuleSearchContext context){
            return null;
     }


}
