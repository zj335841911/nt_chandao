package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.Branch;
import cn.ibizlab.pms.core.zentao.domain.Branch;
import cn.ibizlab.pms.core.zentao.mapper.BranchMapper;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class BranchHelper extends ZTBaseHelper<BranchMapper, Branch> {

    @Transactional
    public Branch sort(Branch et) {
        return et;
    }

}
