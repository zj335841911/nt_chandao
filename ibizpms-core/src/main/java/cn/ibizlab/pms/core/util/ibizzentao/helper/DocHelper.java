package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.Doc;
import cn.ibizlab.pms.core.zentao.domain.DocContent;
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.mapper.DocMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class DocHelper extends ZTBaseHelper<DocMapper, Doc> {

    @Autowired
    DocLibHelper docLibHelper;

    @Autowired
    DocContentHelper docContentHelper;

    @Autowired
    FileHelper fileHelper;

    @Autowired
    ActionHelper actionHelper;

    @Override
    @Transactional
    public boolean create(Doc et) {
        DocLib docLib = et.getZtDoclib();
        if (docLib == null) {
            docLib = docLibHelper.get(et.getLib());
        }
        et.setProduct(docLib.getProduct());
        et.setProject(docLib.getProject());
        et.setViews(0);
        et.setCollector("");
        if (et.getKeywords() == null) {
            et.setKeywords("");
        }
        et.setEditedby(et.getAddedby());
        et.setEditeddate(et.getAddeddate());
        et.setVersion(1);
        et.setGroups("");
        et.setUsers("");

        DocContent docContent = new DocContent();
        if (StaticDict.Doc__type.TEXT.getValue().equals(et.getType())) {
            docContent.setContent(et.getContent());
        } else {
            docContent.setContent(et.getUrl());
        }
        if (docContent.getContent() == null) {
            docContent.setContent("");
        }
        docContent.setVersion(1);
        docContent.setTitle(et.getTitle());
        docContent.setType(StaticDict.Doccontent__type.HTML.getValue());
        docContent.setDigest("");

        String files = et.getFiles();
        boolean bOk = super.create(et);
        if (!bOk)
            return bOk;
        StringBuilder filesId = new StringBuilder();
        if (files != null) {
            JSONArray jsonArray = JSONArray.parseArray(files);
            for (int i = 0; i < jsonArray.size(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                cn.ibizlab.pms.core.zentao.domain.File file = new cn.ibizlab.pms.core.zentao.domain.File();
                if (i != 0) {
                    filesId.append(",");
                }
                filesId.append(jsonObject.getLongValue("id"));
            }
        }
        docContent.setFiles(filesId.toString());
        docContent.setDoc(et.getId());
        docContentHelper.create(docContent);

        fileHelper.updateObjectID(et.getId(), StaticDict.File__object_type.DOC.getValue(), files);
        actionHelper.create(StaticDict.Action__object_type.DOC.getValue(),et.getId(),StaticDict.Action__type.OPENED.getValue(), "","",null,true);

        return bOk;
    }

    @Override
    public boolean edit(Doc et) {
        return super.edit(et);
    }
}
