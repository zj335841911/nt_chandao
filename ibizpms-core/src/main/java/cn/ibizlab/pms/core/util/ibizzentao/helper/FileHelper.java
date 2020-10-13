package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.File;
import cn.ibizlab.pms.core.zentao.mapper.FileMapper;
import cn.ibizlab.pms.util.domain.EntityMP;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Slf4j
public class FileHelper extends ZTBaseHelper<FileMapper, File> {

    /**
     * edit 编辑
     *
     * @return
     */
    @Transactional
    public boolean edit(File et) {
        return this.internalUpdate(et);
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

    public String pasteImage(String data, Long uid) {
        log.info("pasteImage：未实现");
        return "";
    }

    public String saveUpload(String objectType, Long objectID, String extra, String filesName, String labelsName) {
        log.info("saveUpload：未实现");
        return "";
    }

    public String saveUploadFile(String file, Long uid) {
        log.info("saveUploadFile：未实现");
        return "";
    }
}