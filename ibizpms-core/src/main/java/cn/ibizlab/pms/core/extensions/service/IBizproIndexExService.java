package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;
import cn.ibizlab.pms.core.ibizpro.filter.IbizproIndexSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproIndexServiceImpl;
import cn.ibizlab.pms.core.search.extentions.service.IbizproIndexSearchService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Slf4j
@Primary
@Service("IBizproIndexExService")
public class IBizproIndexExService extends IbizproIndexServiceImpl {
    @Autowired
    IbizproIndexSearchService ibizproIndexSearchService;

    @Override
    public Page<IbizproIndex> searchESquery(IbizproIndexSearchContext context) {
        String hitkey= context.query;
        int from = context.getPage()* context.getSize();
        Page<IbizproIndex> page = ibizproIndexSearchService.search(hitkey,from,context.getSize());
        return page;
    }

}
