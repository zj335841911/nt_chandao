package cn.ibizlab.pms.core.util.zentao.service;

import cn.ibizlab.pms.core.util.zentao.bean.ZTDownloadFile;
import cn.ibizlab.pms.core.util.zentao.bean.ZTFileItem;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.zentao.service.IFileService;
import cn.ibizlab.pms.util.errors.InternalServerErrorException;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;

@Slf4j
@Service("IBZZTFileService")
public class IBZZTFileService implements IIBZZTFileService {

    @Value("${zentao.filePath:#{null}}")
    private String filePath;

    @Value("${zentao.rootPath:/app/zentao/file/}")
    private String rootPath;

    @Autowired
    private IFileService fileService;

    @Override
    public ZTFileItem saveFile(MultipartFile multipartFile) {
        return saveFile(multipartFile, null);
    }

    @Override
    public ZTFileItem saveFile(MultipartFile multipartFile, JSONObject params) {
        ZTFileItem item = null;
        // 获取文件名
        String fileName = multipartFile.getOriginalFilename();
        // 获取文件后缀
        String extname = "." + getExtensionName(fileName);
        String fileNameWithoutExt = fileName.substring(0, fileName.length() - extname.length());

        String filePath = this.filePath;
        if (filePath == null) {
            filePath = "";
        }
        filePath = filePath.replaceAll("\\\\", "/");
        if (!filePath.isEmpty() && !filePath.endsWith("/")) {
            filePath += "/";
        }
        String rootPath = this.rootPath;
        if (rootPath == null) {
            rootPath = "";
        }
        rootPath = rootPath.replaceAll("\\\\", "/");
        if (!rootPath.endsWith("/")) {
            rootPath += "/";
        }
        try {
            if (params != null && params.get("objecttype") != null) {
                String md5FileName = fileName;
                long curTime = System.currentTimeMillis();
                md5FileName += curTime;
                AuthenticationUser user = AuthenticationUser.getAuthenticationUser();
                String addedBy = null;
                if (user != null && user.getUsername() != null) {
                    addedBy = user.getUsername();
                    md5FileName += user.getUsername();
                }
                md5FileName = DigestUtils.md5DigestAsHex(md5FileName.getBytes());
                SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
                String curDate = sdf.format(new Date(curTime));
//                String fileFullPathWithoutExt = filePath + curDate + "/" + md5FileName;
                String fileFullPath = filePath + curDate + "/" + md5FileName + extname;
                File file = new File(rootPath + fileFullPath);
                File parent = new File(file.getParent());
                if(!parent.exists()) {
                    parent.mkdirs();
                }
                FileCopyUtils.copy(multipartFile.getInputStream(), Files.newOutputStream(file.toPath()));

                cn.ibizlab.pms.core.zentao.domain.File ztFile = new cn.ibizlab.pms.core.zentao.domain.File();

                String objectType = params.getString("objecttype");
                Integer objectId = params.getInteger("objectid");
                String version = params.getString("version");
                String extra = params.getString("extra");

                ztFile.setPathname(fileFullPath);
                ztFile.setTitle(fileName);
                ztFile.setExtension(getExtensionName(fileName));
                ztFile.setSize(new Long(multipartFile.getSize()).intValue());
                ztFile.setObjecttype(objectType);
                ztFile.setObjectid(objectId);
                ztFile.setExtra(version == null ? extra : version);
                ztFile.setDeleted("0");
                ztFile.setAddedby(addedBy);
                fileService.create(ztFile);
                String fileId = ztFile.getId().toString();

                item = new ZTFileItem(fileId, fileName, fileId, fileName, (int)multipartFile.getSize(), extname, objectType, objectId, extra, version);
            } else {
                String fileid = DigestUtils.md5DigestAsHex(multipartFile.getInputStream());
                String fileFullPath = filePath + "ibizutil/" + fileid + "/" + fileName;
                File file = new File(fileFullPath);
                File parent = new File(file.getParent());
                if(!parent.exists()) {
                    parent.mkdirs();
                }
                FileCopyUtils.copy(multipartFile.getInputStream(), Files.newOutputStream(file.toPath()));
                item = new ZTFileItem(fileid, fileName, fileid, fileName, new Long(multipartFile.getSize()).intValue(), extname, null, null, null, null);
            }
        } catch (IOException e) {
            throw new InternalServerErrorException(ZenTaoMessage.MSG_ERROR_0005);
        }
        return item;
    }

    @Override
    public ZTDownloadFile getFile(String fileId) {
        String filePath = this.filePath;
        if (filePath == null) {
            filePath = "";
        }
        filePath = filePath.replaceAll("\\\\", "/");
        if (!filePath.isEmpty() && !filePath.endsWith("/")) {
            filePath += "/";
        }
        String rootPath = this.rootPath;
        if (rootPath == null) {
            rootPath = "";
        }
        rootPath = rootPath.replaceAll("\\\\", "/");
        if (!rootPath.endsWith("/")) {
            rootPath += "/";
        }

        ZTDownloadFile downloadFile = new ZTDownloadFile();
        String dirpath = filePath + "ibizutil/" + fileId;
        File parent = new File(dirpath);
        if (parent.exists() && parent.isDirectory() && parent.listFiles().length > 0) {
            downloadFile.setFile(parent.listFiles()[0]);
            downloadFile.setFileName(parent.listFiles()[0].getName());
            return downloadFile;
        }
        cn.ibizlab.pms.core.zentao.domain.File ztFile = fileService.get(new BigInteger(fileId));
        if (ztFile == null) {
            throw new InternalServerErrorException("文件不存在");
        }
        File file = new File(rootPath + ztFile.getPathname());
        if (!file.exists()) {
            throw new InternalServerErrorException("文件不存在");
        }
        downloadFile.setFile(file);
        downloadFile.setFileName(ztFile.getTitle());
        return downloadFile;
    }

    /**
     * 获取文件扩展名
     * @param filename
     * @return
     */
    public static String getExtensionName(String filename) {
        if ((filename != null) && (filename.length() > 0)) {
            int dot = filename.lastIndexOf('.');
            if ((dot >-1) && (dot < (filename.length() - 1))) {
                return filename.substring(dot + 1);
            }
        }
        return filename;
    }

}
