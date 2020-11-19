package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.domain.EntityMP;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author chenxiang
 * @param <M>
 * @param <T>
 */
public class ZTBaseHelper<M extends BaseMapper<T>, T extends EntityMP> extends ServiceImpl<M , T> {

    /**
     * 多项选择分隔符
     */
    public static String MULTIPLE_CHOICE = ",";

    /**
     * in查询分隔符
     */
    public static String IN_CHOICE = ";";

    /**
     * 主键属性
     */
    public static  String FIELD_ID = "id";

    /**
     * 逻辑属性
     */
    public static  String FIELD_DELETED = "deleted";



    public T get(Long key){
        T et = getById(key);
        if (et == null) {
            try {
                et = ((Class<T>) et.getClass()).getDeclaredConstructor().newInstance();
                et.set(FIELD_ID, Long.valueOf(et.get(FIELD_ID).toString()));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return et;
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean create(T et) {
        if (!SqlHelper.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        if(hasId()) {
            CachedBeanCopier.copy(get(Long.valueOf(et.get(FIELD_ID).toString())), et);
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean internalUpdate(T et ){
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq(FIELD_ID, Long.valueOf(et.get(FIELD_ID).toString())))) {
            return false;
        }
        if(hasId()) {
            CachedBeanCopier.copy(get(Long.valueOf(et.get(FIELD_ID).toString())), et);
        }
        return true;
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean edit(T et ){
       return internalUpdate(et);
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean delete(Long key){
        if(hasId()){
            if(hasDeleted()){
                UpdateWrapper deleteWrapper=new UpdateWrapper();
                deleteWrapper.set(FIELD_DELETED, StaticDict.YesNo.ITEM_1.getValue()) ;
                deleteWrapper.eq(FIELD_ID, key) ;
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
