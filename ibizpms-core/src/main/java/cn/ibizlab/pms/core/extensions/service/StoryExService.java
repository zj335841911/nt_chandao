package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStorySearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryModuleService;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryService;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSDEField;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSDataEntity;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqItem;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSDEFieldService;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSDataEntityService;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysReqItemService;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysReqModuleService;
import cn.ibizlab.pms.core.util.ibizpro.template.freemarker.story.DeFreemarkerTplHelper;
import cn.ibizlab.pms.core.util.message.SendMessage;
import cn.ibizlab.pms.core.util.zentao.bean.ZTFileItem;
import cn.ibizlab.pms.core.util.zentao.service.IIBZZTFileService;
import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.filter.FileSearchContext;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;
import cn.ibizlab.pms.core.zentao.filter.StorySpecSearchContext;
import cn.ibizlab.pms.core.zentao.service.IFileService;
import cn.ibizlab.pms.core.zentao.service.impl.StoryServiceImpl;
import cn.ibizlab.pms.core.zentao.service.impl.StorySpecServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import liquibase.pro.packaged.A;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Story;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.*;

/**
 * 实体[需求] 自定义服务对象
 */
@Slf4j
@Primary
@Service("StoryExService")
public class StoryExService extends StoryServiceImpl {

//    @Autowired
//    IPSModuleService ipsModuleService;

    @Autowired
    IIBZProProductService iibzProProductService;

    @Value("${ibiz.story.de.dir:/app/file/pms/story/de/}")
    private String targetDirPath;

    @Autowired
    IIBZProStoryModuleService iIBZProStoryModuleService;

    @Autowired
    IPSDataEntityService ipsDataEntityService;

    @Autowired
    IIBZProStoryService iibzProStoryService;

    @Autowired
    IPSSysReqModuleService ipsSysReqModuleService;

    @Autowired
    IPSSysReqItemService ipsSysReqItemService;

    @Autowired
    IPSDEFieldService ipsdeFieldService;

    @Autowired
    StorySpecServiceImpl storySpecService;

    @Autowired
    DeFreemarkerTplHelper deFreemarkerTplHelper;

    @Autowired
    IIBZZTFileService iibzztFileService;

    @Autowired
    private IFileService fileService;

    final private static String[] EXTS = {"md", "html", "json"};

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    @Override
    public void saveBatch(List<Story> list) {
        if (list.isEmpty() || list.size() == 0) {
            return;
        }
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        jo.put("product", list.get(0).getProduct());
        jo.put("branch", 0);
        jo.put("module", 0);
        jo.put("parent", list.get(0).getParent());
        jo.put("srfArray", list);
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.batchCreate(zentaoSid, jo, rst);
        if (bRst) {
            log.error("需求细分操作成功");
        } else {
            log.error("需求细分失败");
        }
    }

    @Override
    @Transactional
    public Story push(Story et) {
        et = this.get(et.getId());
        ProductModule productModule = et.getIbzproductmodule();

        IBZProProduct ibzProProduct = iibzProProductService.get(et.getProduct());
        if (ibzProProduct == null || ibzProProduct.getIbizid() == null) {
            return et;
        }
        String modlueid = "";
        if (productModule != null) {
            String module = "PMS_" + ibzProProduct.getId() + "_" + productModule.getId();
            PSSysReqModule psSysReqModule = new PSSysReqModule();
            modlueid = ipsSysReqModuleService.getByCodeName(ibzProProduct.getIbizid(), module);
            psSysReqModule.setPssysreqmoduleid(modlueid);
            psSysReqModule.setCodename(module);
            psSysReqModule.setModulesn(String.valueOf(productModule.getId()));
            psSysReqModule.setPssysreqmodulename(productModule.getName());
            psSysReqModule.setOrdervalue(productModule.getOrder());
            if (modlueid == null) {
                ipsSysReqModuleService.create(ibzProProduct.getIbizid(), psSysReqModule);
            } else {
                ipsSysReqModuleService.update(ibzProProduct.getIbizid(), psSysReqModule);
            }
            modlueid = psSysReqModule.getPssysreqmoduleid();
        }

        String story = "PMS_" + ibzProProduct.getId() + "_" + et.getId();
        String storyid = ipsSysReqItemService.getByCodeName(ibzProProduct.getIbizid(), story);
        PSSysReqItem psSysReqItem = new PSSysReqItem();
//        psSysReqItem.
        psSysReqItem.setPssysreqitemname(et.getTitle());
        psSysReqItem.setPssysreqitemid(storyid);
        psSysReqItem.setItemtype("NORMAL");
        psSysReqItem.setPssysreqmoduleid(modlueid);
        psSysReqItem.setCodename(story);
        StorySpecSearchContext context = new StorySpecSearchContext();
        context.setN_story_eq(et.getId());
        context.setN_version_eq(et.getVersion());
        context.setSort("version,desc");
        StorySpec storySpec = storyspecService.searchDefault(context).getContent().get(0);
        psSysReqItem.setReqcontent(storySpec.getSpec());
        if (storyid == null) {
            ipsSysReqItemService.create(ibzProProduct.getIbizid(), psSysReqItem);
        } else {
            ipsSysReqItemService.update(ibzProProduct.getIbizid(), psSysReqItem);
        }

        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story syncFromIBIZ(Story et) {
        et = this.get(et.getId());
        IBZProProduct ibzProProduct = iibzProProductService.get(et.getProduct());
        if (ibzProProduct == null || ibzProProduct.getIbizid() == null) {
            return et;
        }
        String storycode = "PMS_" + ibzProProduct.getId() + "_" + et.getId();
        String storyid = ipsSysReqItemService.getByCodeName(ibzProProduct.getIbizid(), storycode);
        if (storyid == null) {
            push(et);
        } else {
            List<PSDataEntity> psDataEntityList = ipsDataEntityService.selectByPssysreqitemid(ibzProProduct.getIbizid(), storyid);
            List<IBZProStory> ibzProStoryList = new ArrayList<IBZProStory>();
            for (PSDataEntity psDataEntity : psDataEntityList) {
                psDataEntity.set("preqnum", et.getId());
                psDataEntity.set("preqlink", "#/ibizpms/products/"+ et.getProduct() +"/stories/"+ et.getId() +"/mainview_link");
                JSONObject dataModel = new JSONObject();
                dataModel.put("item", psDataEntity);
                dataModel.put("itemname", psDataEntity.getCodename());
                dataModel.put("title", psDataEntity.getLogicname());
                dataModel.put("de", psDataEntity);
                long updatedateLong = psDataEntity.getUpdatedate().getTime();
                boolean flag = deFreemarkerTplHelper.generate(dataModel, psDataEntity.getUpdatedate().getTime());

                IBZProStory ibzProStory = new IBZProStory();
                ibzProStory.setProduct(et.getProduct());
                ibzProStory.setIbizSourceobject("sourcenote__dataentity");
                ibzProStory.setSource("iBiz");
                ibzProStory.setPri(1);
                ibzProStory.setSourcenote(psDataEntity.getCodename());
//                List<PSDEField> psdeFields = ipsdeFieldService.selectByPsdeid(ibzProProduct.getIbizid(), psDataEntity.getPsdataentityid());
//                StringBuilder stringBuilder = new StringBuilder();
//                stringBuilder.append("<table style=\"border-collapse:collapse;width:100%;\" border=\"1\"><tbody>");
//                stringBuilder.append("<tr><td style=\"width:9.72222%;\">中文名称</td><td style=\"width:9.72222%;\">实体属性名称</td><td style=\"width:9.72222%;\">代码名称</td><td style=\"width:9.72222%;\">属性类型</td><td style=\"width:9.72222%;\">长度</td></tr>");
//                for (PSDEField psdeField : psdeFields) {
//                    stringBuilder.append("<tr>");
//                    stringBuilder.append("<td>" + psdeField.getLogicname() + "</td>");
//                    stringBuilder.append("<td>" + psdeField.getPsdefieldname() + "</td>");
//                    stringBuilder.append("<td>" + psdeField.getCodename() + "</td>");
//                    stringBuilder.append("<td>" + psdeField.getDeftype() + "</td>");
//                    stringBuilder.append("<td>" + psdeField.getLength() + "</td>");
//                    stringBuilder.append("</tr>");
//                }
//                stringBuilder.append("</tbody></table>");
                ibzProStory.setSpec(psDataEntity.getMemo());
//                ibzProStory.set("Spec11", stringBuilder.toString());
                ibzProStory.setComment(psDataEntity.getMemo());
                ibzProStory.setTitle(psDataEntity.getLogicname() + "_" + psDataEntity.getCodename());
                ibzProStory.setIbizSourceid(psDataEntity.getCodename());
                ibzProStory.setIbizSourcename(psDataEntity.getPsdataentityname());
                IBZProStorySearchContext ibzProStorySearchContext = new IBZProStorySearchContext();
                ibzProStorySearchContext.setN_product_eq(et.getProduct());
                ibzProStorySearchContext.setN_sourcenote_eq(psDataEntity.getCodename());
                List<IBZProStory> ibzProStories = iibzProStoryService.searchDefault(ibzProStorySearchContext).getContent();
                if (ibzProStories.size() > 0) {
                    ibzProStory.setId(ibzProStories.get(0).getId());
                    Integer version = ibzProStories.get(0).getVersion();
//                    ibzProStory.setSpec(stringBuilder.toString());
                    String targetFilePath = targetDirPath.replaceAll("\\\\", "/");
                    if (!targetFilePath.isEmpty() && !targetFilePath.endsWith("/")) {
                        targetFilePath += "/";
                    }
                    FileSearchContext fileSearchContext = new FileSearchContext();
                    fileSearchContext.setN_objectid_eq(Integer.parseInt(String.valueOf(ibzProStory.getId())));
                    fileSearchContext.setN_extra_eq(String.valueOf(version));
                    fileSearchContext.setN_title_like(dataModel.getString("itemname") + "_" + updatedateLong);
                    if(fileService.searchDefault(fileSearchContext).getContent().size() == 0) {
                        for (String str : EXTS) {
                            String tmpTargetFilePath = targetFilePath + dataModel.getString("itemname") + File.separator + dataModel.getString("itemname") + "_" + updatedateLong + "." + str;
                            File file = new File(tmpTargetFilePath);
                            if (file.exists()) {
                                JSONObject params = new JSONObject();
                                params.put("objecttype", "story");
                                params.put("objectid", ibzProStory.getId());
                                params.put("version", version + 1);
                                ZTFileItem ztFileItem = iibzztFileService.saveFile(file, params);
                                if ("html".equals(str)) {
                                    BufferedReader reader = null;
                                    StringBuffer sbf = new StringBuffer();
                                    try {
                                        reader = new BufferedReader(new FileReader(file));
                                        String tempStr;
                                        while ((tempStr = reader.readLine()) != null) {
                                            sbf.append(tempStr);
                                        }
                                        reader.close();

                                    } catch (IOException e) {
                                        e.printStackTrace();
                                    } finally {
                                        if (reader != null) {
                                            try {
                                                reader.close();
                                            } catch (IOException e1) {
                                                e1.printStackTrace();
                                            }
                                        }
                                    }
                                    ibzProStory.setSpec(sbf.toString());
                                }
                            }

                        }
                    }else {
                        String tmpTargetFilePath = targetFilePath + dataModel.getString("itemname") + "_" + updatedateLong + "." + "html";
                        File file = new File(tmpTargetFilePath);
                        BufferedReader reader = null;
                        StringBuffer sbf = new StringBuffer();
                        try {
                            reader = new BufferedReader(new FileReader(file));
                            String tempStr;
                            while ((tempStr = reader.readLine()) != null) {
                                sbf.append(tempStr);
                            }
                            reader.close();

                        } catch (IOException e) {
                            e.printStackTrace();
                        } finally {
                            if (reader != null) {
                                try {
                                    reader.close();
                                } catch (IOException e1) {
                                    e1.printStackTrace();
                                }
                            }
                        }
                        ibzProStory.setSpec(sbf.toString());
                    }

                    String zentaoSid1 = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
                    cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst1 = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
                    JSONObject jsonObject = cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(ibzProStory, "change");
                    jsonObject.put("needNotReview", "0");
                    boolean bRst1 = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.change(zentaoSid1, jsonObject, rst1);
                    if (bRst1) {
                        log.error("子需求变更操作成功");
                    } else {
                        log.error("子需求变更失败");
                    }
                } else {
                    ibzProStoryList.add(ibzProStory);
                }
            }
            if(ibzProStoryList.size() > 0) {
                String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
                cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
                JSONObject jo = new JSONObject();
                jo.put("product", et.getProduct());
                jo.put("branch", 0);
                jo.put("module", 0);
                jo.put("parent", et.getId());
                jo.put("srfArray", ibzProStoryList);
                boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.batchCreate(zentaoSid, jo, rst);
                if (bRst) {
                    log.error("需求细分操作成功");
                } else {
                    log.error("需求细分失败");
                }

                for (IBZProStory ibzProStory : ibzProStoryList) {
                    if (ibzProStory.getId() == null) {
                        IBZProStorySearchContext ibzProStorySearchContext = new IBZProStorySearchContext();
                        ibzProStorySearchContext.setN_product_eq(et.getProduct());
                        ibzProStorySearchContext.setN_title_like(ibzProStory.getTitle());

                        List<IBZProStory> ibzProStories = iibzProStoryService.searchDefault(ibzProStorySearchContext).getContent();
                        if (ibzProStories.size() > 0) {
                            ibzProStory.setId(ibzProStories.get(0).getId());
                            ibzProStory.setSpec(ibzProStory.get("Spec11").toString());
                            ibzProStory.setVerify("");
                            String zentaoSid1 = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
                            cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst1 = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
                            JSONObject jsonObject = cn.ibizlab.pms.core.util.zentao.helper.TransHelper.ET2JO(ibzProStory, "change");
                            jsonObject.put("needNotReview", "0");
                            boolean bRst1 = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.change(zentaoSid1, jsonObject, rst1);
                            if (bRst1) {
                                log.error("子需求变更操作成功");
                            } else {
                                log.error("子需求变更失败");
                            }
                        }
                    }
                }
                iibzProStoryService.updateBatch(ibzProStoryList);
            }
        }
        return et;
    }



    /**
     * 自定义行为[AssignTo]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    @SendMessage
    public Story assignTo(Story et) {
        return super.assignTo(et);
    }

    /**
     * 自定义行为[BatchAssignTo]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchAssignTo(Story et) {
        return super.batchAssignTo(et);
    }

    /**
     * 自定义行为[BatchChangeBranch]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeBranch(Story et) {
        return super.batchChangeBranch(et);
    }

    /**
     * 自定义行为[BatchChangeModule]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeModule(Story et) {
        return super.batchChangeModule(et);
    }

    /**
     * 自定义行为[BatchChangePlan]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangePlan(Story et) {
        return super.batchChangePlan(et);
    }

    /**
     * 自定义行为[BatchChangeStage]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeStage(Story et) {
        return super.batchChangeStage(et);
    }

    /**
     * 自定义行为[BatchClose]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchClose(Story et) {
        return super.batchClose(et);
    }

    /**
     * 自定义行为[BatchReview]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchReview(Story et) {
        return super.batchReview(et);
    }

    /**
     * 自定义行为[Change]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    @SendMessage
    public Story change(Story et) {
        return super.change(et);
    }

    /**
     * 自定义行为[Close]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    @SendMessage
    public Story close(Story et) {
        return super.close(et);
    }

    /**
     * 自定义行为[GetStorySpec]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story getStorySpec(Story et) {
        StorySpecSearchContext context = new StorySpecSearchContext();
        context.setN_story_eq(et.getId());
        context.setN_version_eq(et.getVersion());
        context.setSort("version,desc");
        StorySpec storySpec = storyspecService.searchDefault(context).getContent().get(0);
        et.setSpec(storySpec.getSpec());
        et.setVerify(storySpec.getVerify());
        et.setTitle(storySpec.getTitle());
        return et;
    }

    /**
     * 自定义行为[Review]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    @SendMessage
    public Story review(Story et) {
        return super.review(et);
    }

    /**
     * 预置行为[get]用户扩展
     *
     * @param key
     * @return
     */
    @Override
    @Transactional
    public Story get(Long key) {
        Story et = super.get(key);
        this.getStorySpec(et);
        return et;
    }

    @Override
    @Transactional
    @SendMessage
    public boolean create(Story et) {
        et.setReviewedby(et.getAssignedto());
        return super.create(et);
    }

    @Override
    @Transactional
    public Story linkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if (et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for (Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            jo.put("stories", jsonArray);
        }
        if (et.get("productplan") != null) {
            jo.put("id", et.get("productplan"));
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.linkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        return et;
    }

    @Override
    @Transactional
    public Story projectLinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if (et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for (Map map : list) {
                if (map.get("id") != null) {
                    JSONObject jo2 = new JSONObject();
                    jo2.put("stories", map.get("id"));
                    if (map.get("product") != null) {
                        jo2.put("products", map.get("product"));
                    }
                    jsonArray.add(jo2);
                }
            }
            jo.put("srfarray", jsonArray);
        }
        if (et.get("project") != null) {
            jo.put("id", et.get("project"));
        }
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.projectLinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story projectUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        jo.put("id", et.getProject());
        jo.put("story", et.getId());
        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.projectUnlinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story unlinkStory(Story et) {
        if (et.get("productplan") != null) {
            et.setPlan(String.valueOf(et.get("productplan")));
        }
        return super.unlinkStory(et);
    }

    /**
     * 查询集合 任务相关需求
     */
    @Override
    public Page<Story> searchTaskRelatedStory(StorySearchContext context) {
        context.getSelectCond().clear();
        context.setQuery(context.getQuery());
        if (context.getN_module_eq() != null && !String.valueOf(context.getN_module_eq()).equals(0)) {
            context.setN_module_eq(context.getN_module_eq());
        }

        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages = baseMapper.searchTaskRelatedStory(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    @Override
    @Transactional
    public Story buildLinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();
        JSONObject jo = new JSONObject();
        if (et.get("srfactionparam") != null) {
            ArrayList<Map> list = (ArrayList) et.get("srfactionparam");
            JSONArray jsonArray = new JSONArray();
            for (Map map : list) {
                if (map.get("id") != null) {
                    jsonArray.add(map.get("id"));
                }
            }
            jo.put("stories", jsonArray);
        }
        if (jo.get("build") == null) {
            jo.put("id", et.getExtensionparams().get("build"));
        }

        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.buildLinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    public Story buildUnlinkStory(Story et) {
        String zentaoSid = org.springframework.util.DigestUtils.md5DigestAsHex(cn.ibizlab.pms.core.util.zentao.helper.TokenHelper.getRequestToken().getBytes());
        cn.ibizlab.pms.core.util.zentao.bean.ZTResult rst = new cn.ibizlab.pms.core.util.zentao.bean.ZTResult();

        JSONObject jo = new JSONObject();
        if (et.getExtensionparams() != null) {
            jo.put("build", et.get("build"));
            jo.put("id", et.getId());
        }

        boolean bRst = cn.ibizlab.pms.core.util.zentao.helper.ZTStoryHelper.buildUnlinkStory(zentaoSid, jo, rst);
        if (bRst && rst.getEtId() != null) {
            et = this.get(rst.getEtId());
        }
        et.set("ztrst", rst);
        return et;
    }

    @Override
    @Transactional
    @SendMessage
    public boolean update(Story et) {
        return super.update(et);
    }

    @Override
    @Transactional
    @SendMessage
    public Story activate(Story et) {
        return super.activate(et);
    }

    /**
     * 查询集合 通过模块查询
     */
    @Override
    public Page<Story> searchByModule(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages = baseMapper.searchByModule(context.getPages(), context, context.getSelectCond());
        for (Story story : pages.getRecords()) {
            StorySearchContext storySearchContext = new StorySearchContext();
            storySearchContext.setSelectCond(context.getSelectCond().clone());
            storySearchContext.setN_parent_eq(story.getId());
            story.set("items", this.searchDefault(storySearchContext).getContent());
        }
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 数据查询
     */
    @Override
    public Page<Story> searchParentDefault(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages = baseMapper.searchParentDefault(context.getPages(), context, context.getSelectCond());
        for (Story story : pages.getRecords()) {
            StorySearchContext storySearchContext = new StorySearchContext();
            storySearchContext.setSelectCond(context.getSelectCond().clone());
            storySearchContext.setN_parent_eq(story.getId());
            story.set("items", this.searchDefault(storySearchContext).getContent());
        }
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}

