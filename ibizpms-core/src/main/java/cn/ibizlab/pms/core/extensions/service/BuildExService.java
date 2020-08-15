package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.BuildServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Build;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import cn.ibizlab.pms.core.zentao.filter.BuildSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import java.util.*;

/**
 * 实体[版本] 自定义服务对象
 */
@Slf4j
@Primary
@Service("BuildExService")
public class BuildExService extends BuildServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[LinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Build linkStory(Build et) {
        return super.linkStory(et);
    }

    /**
     * 查询集合 Bug产品版本
     */
    @Override
    public Page<Build> searchBugProductBuild(BuildSearchContext context) {
        context.getSelectCond().clear();
        context.setQuery(context.getQuery());
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchBugProductBuild(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}

