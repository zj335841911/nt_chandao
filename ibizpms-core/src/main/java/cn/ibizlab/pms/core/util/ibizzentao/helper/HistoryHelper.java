package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.mapper.HistoryMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class HistoryHelper extends ServiceImpl<HistoryMapper, History> {

    @Transactional
    public History get(Long key) {
        History et = getById(key);
        if (et == null) {
            et = new History();
            et.setId(key);
        } else {
        }
        return et;
    }

    @Transactional
    public boolean create(History et) {
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Transactional
    public boolean internalUpdate(History et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }
    
    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(History et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId())))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    /**
     * delete 删除
     *
     * @param key
     * @return
     */
    @Transactional
    public boolean delete(Long key) {
        boolean result = removeById(key);
        return result;
    }

}
