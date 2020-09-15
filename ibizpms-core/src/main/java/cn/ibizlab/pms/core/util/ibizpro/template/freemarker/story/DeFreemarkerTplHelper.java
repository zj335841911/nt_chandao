package cn.ibizlab.pms.core.util.ibizpro.template.freemarker.story;

import cn.ibizlab.pms.util.constants.IBizPMSMessage;
import cn.ibizlab.pms.util.helper.FreemarkerHelper;
import com.alibaba.fastjson.JSONObject;
import freemarker.cache.FileTemplateLoader;
import freemarker.template.Configuration;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.validator.internal.util.StringHelper;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
public class DeFreemarkerTplHelper {
    // 前期从配置文件读取，后期根据库里获得

    @Value("${ibiz.template.freemarker.story.de.dir:/freemarker/story/de/}")
    private String tplDirPath;

    @Value("${ibiz.story.de.dir:/app/file/pms/story/de/}")
    private String targetDirPath;

    @Value("${ibiz.template.freemarker.story.de.file:de}")
    private String fileName;

    final private static String[] EXTS = {"md", "html", "json"};

    private Configuration tplConf;

    /**
     * 构建模板生成目标文件
     *
     * @param dataModel
     * @param updatedateLong 考虑到父子业务数据，子数据更新，连带父数据的更新时间需要同步记录
     * @return
     */
    public boolean generate(JSONObject dataModel, long updatedateLong) {
        return generate(dataModel, updatedateLong,false);
    }

    /**
     * 构建模板生成目标文件
     *
     * @param dataModel
     * @param updatedateLong 考虑到父子业务数据，子数据更新，连带父数据的更新时间需要同步记录
     * @param forceReload 强制刷新
     * @return
     */
    public boolean generate(JSONObject dataModel, long updatedateLong, boolean forceReload) {
        if (!initConf(forceReload) || dataModel == null) {
            return false;
        }

        String targetFilePath = targetDirPath.replaceAll("\\\\", "/");
        if (!targetFilePath.isEmpty() && !targetFilePath.endsWith("/")) {
            targetFilePath += "/";
        }
        File targetDir = new File(targetFilePath);
        if (!targetDir.exists()) {
            targetDir.mkdirs();
        }
        if (!targetDir.isDirectory()) {
            return false;
        }
        boolean rst = true;
        List<String> successFiles = new ArrayList<>();
        try {
            for (String ext : EXTS) {
                String tplFileName = fileName + "." + ext + ".ftl";
                String tmpTargetFilePath = targetFilePath + dataModel.getString("itemname") + "_" + updatedateLong + "." + ext;
                if (!new File(tmpTargetFilePath).exists() || forceReload) {
                    rst = rst && FreemarkerHelper.generate(tplConf, tplFileName, tmpTargetFilePath, dataModel);
                    if (!rst) {
                        break;
                    } else {
                        successFiles.add(tmpTargetFilePath);
                    }
                }
            }
        } catch (Exception e) {
            log.error(String.format(IBizPMSMessage.MSG_ERROR_0102, e));
            rst = false;
        }

        if (!rst) {
            for (String filePath : successFiles) {
                File file = new File(filePath);
                file.delete();
                log.warn(String.format(IBizPMSMessage.MSG_WARN_0101, filePath));
            }
        }
        log.warn(String.format(IBizPMSMessage.MSG_INFO_0101, rst));
        return rst;
    }

    /**
     * 初始化模板配置
     *
     * @param forceReload 强制刷新
     * @return
     */
    synchronized private boolean initConf(boolean forceReload) {
        if (isConfVaild() && !forceReload) {
            return true;
        }
        tplConf =  FreemarkerHelper.initConf(tplDirPath);
        if (tplConf == null) {
            return false;
        }
        return true;
    }

    /**
     *
     *
     * @return
     */
    private boolean isConfVaild() {
        return tplConf != null;
    }

}
