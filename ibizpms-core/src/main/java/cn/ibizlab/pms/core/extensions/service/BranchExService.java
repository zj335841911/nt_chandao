package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.filter.BranchSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.BranchServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Branch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.math.BigInteger;
import java.util.*;

/**
 * 实体[产品的分支和平台信息] 自定义服务对象
 */
@Slf4j
@Primary
@Service("BranchExService")
public class BranchExService extends BranchServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Sort]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Branch sort(Branch et) {
        return super.sort(et);
    }

    /**
     * 查询集合 [CurProduct] 用户扩展，附加默认数据
     */
    @Override
    public Page<Branch> searchCurProduct(BranchSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Branch> pages=baseMapper.searchCurProduct(context.getPages(),context,context.getSelectCond());
        Branch defaultbranch =  new Branch();
        defaultbranch.setId(BigInteger.ZERO);
        defaultbranch.setName("所有平台");
        if(pages.getRecords().size()>0)
            pages.getRecords().add(0,defaultbranch);
        else {
            List<Branch> records = new ArrayList<Branch>();
            records.add(defaultbranch);
            pages.setRecords(records);
        }
        return new PageImpl<Branch>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}
