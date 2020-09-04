package cn.ibizlab.pms.util.ibizsysmodel.client;

import cn.ibizlab.pms.core.ibizsysmodel.domain.PSDEField;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSDEFieldSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSDEField] 服务对象接口
 */
@Component
public class PSDEFieldFallback implements PSDEFieldFeignClient{

    public Page<PSDEField> select(){
            return null;
     }

    public PSDEField create(PSDEField psdefield){
            return null;
     }
    public Boolean createBatch(List<PSDEField> psdefields){
            return false;
     }

    public PSDEField update(String psdefieldid, PSDEField psdefield){
            return null;
     }
    public Boolean updateBatch(List<PSDEField> psdefields){
            return false;
     }


    public Boolean remove(String psdefieldid){
            return false;
     }
    public Boolean removeBatch(Collection<String> idList){
            return false;
     }

    public PSDEField get(String psdefieldid){
            return null;
     }


    public PSDEField getDraft(){
            return null;
    }



    public Boolean checkKey(PSDEField psdefield){
            return false;
     }


    public Boolean save(PSDEField psdefield){
            return false;
     }
    public Boolean saveBatch(List<PSDEField> psdefields){
            return false;
     }

    public Page<PSDEField> searchDefault(PSDEFieldSearchContext context){
            return null;
     }


}
