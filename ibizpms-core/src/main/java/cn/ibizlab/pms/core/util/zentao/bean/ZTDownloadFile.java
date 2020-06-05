package cn.ibizlab.pms.core.util.zentao.bean;

import lombok.Data;

import java.io.File;

@Data
public class ZTDownloadFile {
    private File file;
    private String fileName;

}
