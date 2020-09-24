package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.ZTBaseHelper;
import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.mapper.StorySpecMapper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class StorySpecHelper extends ZTBaseHelper<StorySpecMapper, StorySpec> {

    @Override
    public boolean hasDeleted() {
        return false ;
    }

}
