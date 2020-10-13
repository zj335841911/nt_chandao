package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.util.domain.EntityMP;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.transaction.annotation.Transactional;

public class ZTBaseHelper<M extends BaseMapper<T>, T extends EntityMP> extends ServiceImpl<M , T> {

    public T get(Long key){
        T et = getById(key);
        if (et == null) {
            try {
                et = ((Class<T>)et.getClass()).newInstance();
                et.set("id",Long.valueOf(et.get("id").toString()));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return et;
    }

    @Transactional
    public boolean create(T et) {
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        if(hasId())
            CachedBeanCopier.copy(get(Long.valueOf(et.get("id").toString())), et);
        return true;
    }

    @Transactional
    public boolean internalUpdate(T et ){
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", Long.valueOf(et.get("id").toString()))))
            return false;
        if(hasId())
            CachedBeanCopier.copy(get(Long.valueOf(et.get("id").toString())), et);
        return true;
    }

    @Transactional
    public boolean edit(T et ){
       return internalUpdate(et);
    }

    @Transactional
    public boolean delete(Long key){
        if(hasId()){
            if(hasDeleted()){
                UpdateWrapper deleteWrapper=new UpdateWrapper();
                deleteWrapper.set("deleted","1") ;
                deleteWrapper.eq("id",key) ;
                return this.update(deleteWrapper);
            }else{
                return removeById(key);
            }
        }
        return true ;
    }

    public boolean hasId(){
        return true ;
    }

    public boolean hasDeleted(){
        return true ;
    }

    public <T> T get (Object value,T t){
        if(value==null){
            return t;
        }
        return (T)value;
    }
}
