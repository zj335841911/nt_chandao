package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSSysReqModuleSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSSysReqModule] 服务对象接口
 */
@Component
public class PSSysReqModuleFallback implements PSSysReqModuleFeignClient{

    public Page<PSSysReqModule> select(){
            return null;
     }

    public PSSysReqModule create(PSSysReqModule pssysreqmodule){
            return null;
     }
    public Boolean createBatch(List<PSSysReqModule> pssysreqmodules){
            return false;
     }

    public PSSysReqModule update(String pssysreqmoduleid, PSSysReqModule pssysreqmodule){
            return null;
     }
    public Boolean updateBatch(List<PSSysReqModule> pssysreqmodules){
            return false;
     }


    public Boolean remove(String pssysreqmoduleid){
            return false;
     }
    public Boolean removeBatch(Collection<String> idList){
            return false;
     }

    public PSSysReqModule get(String pssysreqmoduleid){
            return null;
     }


    public PSSysReqModule getDraft(){
            return null;
    }



    public Boolean checkKey(PSSysReqModule pssysreqmodule){
            return false;
     }


    public Boolean save(PSSysReqModule pssysreqmodule){
            return false;
     }
    public Boolean saveBatch(List<PSSysReqModule> pssysreqmodules){
            return false;
     }

    public Page<PSSysReqModule> searchDefault(PSSysReqModuleSearchContext context){
            return null;
     }


}
