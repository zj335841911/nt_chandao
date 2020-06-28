package cn.ibizlab.pms.core.util.zentao.rest;


import cn.ibizlab.pms.core.util.zentao.bean.ZTDownloadFile;
import cn.ibizlab.pms.core.util.zentao.service.IIBZZTFileService;
import cn.ibizlab.pms.util.domain.FileItem;
import cn.ibizlab.pms.util.service.FileService;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;


@Slf4j
@RestController
@RequestMapping("/")
public class IBZZTFileController {
	@Autowired
	private IIBZZTFileService fileService;

	@PostMapping(value = "${zentao.file.uploadpath:ibizutil/ztupload}")
	public ResponseEntity<FileItem> upload(@RequestParam("file") MultipartFile multipartFile, @RequestParam("objecttype") String objectType, @RequestParam("objectid") Integer objectId, @RequestParam("version")Integer version){
		JSONObject params = new JSONObject();
		params.put("objecttype", objectType);
		params.put("objectid", objectId);
		params.put("version", version);
		return ResponseEntity.ok().body(fileService.saveFile(multipartFile, params));
	}

    @GetMapping(value = "${zentao.file.downloadpath:ibizutil/ztdownload/" + "{id}" + "}")
    @ResponseStatus(HttpStatus.OK)
    public void download(@PathVariable String id, HttpServletResponse response){
        ZTDownloadFile file = fileService.getFile(id);
        response.setHeader("Content-Disposition", "attachment;filename=" + getFileName(file.getFileName()));
        this.sendRespose(response, file.getFile());
    }

    protected void sendRespose(HttpServletResponse response, File file){
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;
        try {
            bis = new BufferedInputStream(new FileInputStream(file));
            bos = new BufferedOutputStream(response.getOutputStream());
            byte[] buff = new byte[2048];
            int bytesRead;
            while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
                bos.write(buff, 0, bytesRead);
            }
        } catch (Exception e) {
            // log.error()
            e.printStackTrace();
        } finally {
            if (bis != null) {
                try {
                    bis.close();
                }
                catch (IOException e) {
                    // log.warn()
                    e.printStackTrace();
                }
            }
            if (bos != null) {
                try {
                    bos.close();
                }
                catch (IOException e) {
                    // log.warn()
                    e.printStackTrace();
                }
            }
        }
    }

    protected String getFileName(String fileName){
        try {
            return new String(fileName.getBytes("utf-8"),"iso8859-1");//防止中文乱码
        }
        catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return fileName;
    }
}
