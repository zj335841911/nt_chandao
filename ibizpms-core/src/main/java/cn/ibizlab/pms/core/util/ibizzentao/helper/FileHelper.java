package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.File;
import cn.ibizlab.pms.core.zentao.mapper.FileMapper;
import cn.ibizlab.pms.core.zentao.service.IFileService;
import cn.ibizlab.pms.util.domain.EntityMP;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class FileHelper extends ZTBaseHelper<FileMapper, File> {

    @Autowired
    private IFileService fileService;
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

    public void updateObjectID(Long objectId, String objectType, String files) {
        if(files != null) {
            JSONArray jsonArray = JSONArray.parseArray(files);
            List<File> list = new ArrayList<>();
            for (int i = 0; i < jsonArray.size(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                cn.ibizlab.pms.core.zentao.domain.File file = new cn.ibizlab.pms.core.zentao.domain.File();
                file.setId(jsonObject.getLongValue("id"));
                file.setObjectid(objectId);
                file.setObjecttype(objectType);
                list.add(file);
            }
            fileService.updateBatch(list);
        }
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