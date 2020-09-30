package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.mapper.StorySpecMapper;
import org.springframework.stereotype.Component;

@Component
public class StoryStageHelper extends ZTBaseHelper<StorySpecMapper, StorySpec> {

    @Override
    public boolean hasDeleted() {
        return false ;
    }

    @Override
    public boolean hasId() {
        return false ;
    }
}
