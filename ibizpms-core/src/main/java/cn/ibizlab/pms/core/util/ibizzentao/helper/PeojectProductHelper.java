package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.mapper.ProjectProductMapper;
import org.springframework.stereotype.Component;

@Component
public class PeojectProductHelper extends ZTBaseHelper<ProjectProductMapper, ProjectProduct> {

    @Override
    public boolean hasDeleted() {
        return false ;
    }

}
