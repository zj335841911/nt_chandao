package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.util.ibizsysmodel.domain.PSDataEntity;
import cn.ibizlab.pms.util.ibizsysmodel.filter.PSDataEntitySearchContext;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSDataEntity] 服务对象接口
 */
@Component
public class PSDataEntityFallback implements PSDataEntityFeignClient{

    public Page<PSDataEntity> select(){
            return null;
     }

    public PSDataEntity create(PSDataEntity psdataentity){
            return null;
     }
    public Boolean createBatch(List<PSDataEntity> psdataentities){
            return false;
     }

    public PSDataEntity update(String psdataentityid, PSDataEntity psdataentity){
            return null;
     }
    public Boolean updateBatch(List<PSDataEntity> psdataentities){
            return false;
     }


    public Boolean remove(String psdataentityid){
            return false;
     }
    public Boolean removeBatch(Collection<String> idList){
            return false;
     }

    public PSDataEntity get(String psdataentityid){
            return null;
     }


    public PSDataEntity getDraft(){
            return null;
    }



    public Boolean checkKey(PSDataEntity psdataentity){
            return false;
     }


    public Boolean save(PSDataEntity psdataentity){
            return false;
     }
    public Boolean saveBatch(List<PSDataEntity> psdataentities){
            return false;
     }

    public Page<PSDataEntity> searchDefault(PSDataEntitySearchContext context){
            return null;
     }


}
