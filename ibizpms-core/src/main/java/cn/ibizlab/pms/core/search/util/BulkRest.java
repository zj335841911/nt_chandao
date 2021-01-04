package cn.ibizlab.pms.core.search.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BulkRest {
    @Autowired
    BulkProcessUtil bulkProcessUtil;
    @RequestMapping(method = RequestMethod.POST, value = "/es/bulk")
    public ResponseEntity<String> bulk() {
        bulkProcessUtil.importData();
        return ResponseEntity.ok().body("ok");
    }
}