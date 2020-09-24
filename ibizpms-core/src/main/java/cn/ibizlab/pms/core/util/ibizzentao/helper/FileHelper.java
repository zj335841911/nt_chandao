package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.Helper;
import cn.ibizlab.pms.core.zentao.domain.File;
import cn.ibizlab.pms.core.zentao.mapper.FileMapper;
import cn.ibizlab.pms.util.domain.EntityMP;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Slf4j
public class FileHelper extends ServiceImpl<FileMapper, File> {

    @Transactional
    public File get(Long key) {
        File et = getById(key);
        if (et == null) {
            et = new File();
            et.setId(key);
        } else {
        }
        return et;
    }

    @Transactional
    public boolean create(File et) {
        if (!this.retBool(this.baseMapper.insert(et)))
            return false;
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Transactional
    public boolean interalUpdate(File et) {
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
    public boolean edit(File et) {
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

    @Transactional
    public void processImgURL(EntityMP et, String editorList, Long uid) {
        log.info("processImgURL：未实现");
    }

    public void updateObjectID(Long uid, Long objectId, String objectType) {
        log.info("updateObjectID：未实现");
    }

    public void autoDelete(Long uid) {
        log.info("autoDelete：未实现");
    }

    public String pasteImage(String data, Long uid)
    {
        log.info("pasteImage：未实现");
        return "";
    }

    public String saveUpload(String objectType, Long objectID , String extra, String filesName , String labelsName ){
        log.info("saveUpload：未实现");
        return "";
    }

    public String saveUploadFile(String file, Long uid){
        log.info("saveUploadFile：未实现");
        return "";
    }
}