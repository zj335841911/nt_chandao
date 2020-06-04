package cn.ibizlab.pms.core.util.zentao.rest;


import cn.ibizlab.pms.core.util.zentao.service.IIBZZTFileService;
import cn.ibizlab.pms.util.domain.FileItem;
import cn.ibizlab.pms.util.service.FileService;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
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
public class IBZZTFileController
{

	@Autowired
	private IIBZZTFileService fileService;

	@PostMapping(value = "${zentao.file.uploadpath:ibizutil/ztupload}")
	public ResponseEntity<FileItem> upload(@RequestParam("file") MultipartFile multipartFile, @RequestParam("objecttype") String objectType, @RequestParam("objectid") Integer objectId){
		JSONObject params = new JSONObject();
		params.put("isztfile", true);
		params.put("objecttype", objectType);
		params.put("objectid", objectId);
		return ResponseEntity.ok().body(fileService.saveFile(multipartFile, params));
	}
}
