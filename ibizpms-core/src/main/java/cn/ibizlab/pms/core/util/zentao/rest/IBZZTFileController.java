package cn.ibizlab.pms.core.util.zentao.rest;


import cn.ibizlab.pms.core.util.zentao.bean.ZTDownloadFile;
import cn.ibizlab.pms.core.util.zentao.bean.ZTFileItem;
import cn.ibizlab.pms.core.util.zentao.bean.ZTUploadFile;
import cn.ibizlab.pms.core.util.zentao.constants.ZenTaoMessage;
import cn.ibizlab.pms.core.util.zentao.service.IIBZZTFileService;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.*;


@Slf4j
@RestController
@RequestMapping("/")
public class IBZZTFileController {
	@Autowired
	private IIBZZTFileService fileService;

	@PostMapping(value = "${zentao.file.uploadpath:ibizutil/ztupload}")
	public ResponseEntity<ZTFileItem> upload(@RequestBody ZTUploadFile file){
		JSONObject params = new JSONObject();
		params.put("objecttype", file.getObjecttype());
		params.put("objectid", file.getObjectid());
		params.put("version", file.getVersion());
        params.put("extra", file.getExtra());
        return ResponseEntity.ok().body(fileService.saveFile(file.getFile(), params));
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
            log.error(ZenTaoMessage.MSG_ERROR_0004, e);
        } finally {
            if (bis != null) {
                try {
                    bis.close();
                }
                catch (IOException e) {
                    log.warn(ZenTaoMessage.MSG_ERROR_0004, e);
                }
            }
            bis = null;
            if (bos != null) {
                try {
                    bos.close();
                }
                catch (IOException e) {
                    log.warn(ZenTaoMessage.MSG_ERROR_0004, e);
                }
            }
            bos = null;
        }
    }

    protected String getFileName(String fileName){
        try {
            return new String(fileName.getBytes("utf-8"),"iso8859-1");
        }
        catch (UnsupportedEncodingException e) {
            log.error(ZenTaoMessage.MSG_ERROR_0004, e);
        }
        return fileName;
    }
}
