package cn.ibizlab.pms.core.util.zentao.service;

import cn.ibizlab.pms.core.util.zentao.bean.ZTDownloadFile;
import cn.ibizlab.pms.util.domain.FileItem;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

public interface IIBZZTFileService
{
    FileItem saveFile(MultipartFile multipartFile);
    FileItem saveFile(MultipartFile multipartFile, JSONObject params);
    ZTDownloadFile getFile(String fileId);
}
