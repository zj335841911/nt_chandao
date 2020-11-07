package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.DocContent;
import cn.ibizlab.pms.core.zentao.service.IDocContentService;
import cn.ibizlab.pms.core.zentao.service.impl.DocServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Doc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[文档] 自定义服务对象
 */
@Slf4j
@Primary
@Service("DocExService")
public class DocExService extends DocServiceImpl {

    @Autowired
    IDocContentService docContentService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[ByVersionUpdateContext]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Doc byVersionUpdateContext(Doc et) {
        List<DocContent> list = docContentService.list(new QueryWrapper<DocContent>().eq("doc", et.getId()).eq("version", et.getVersion()));
        if(list.size() > 0) {
            et.setContent(list.get(0).getContent());
        }
        return super.byVersionUpdateContext(et);
    }

    @Override
    @Transactional
    public Doc get(Long key) {
        Doc et = getById(key);
        if(et==null){
            et=new Doc();
            et.setId(key);
        }
        else{
            byVersionUpdateContext(et);
        }
        return et;
    }
}

